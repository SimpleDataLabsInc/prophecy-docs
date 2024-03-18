package io.prophecy.gems.uiSpec

import io.prophecy.gems.diagnostics.DiagnosticsOr
import io.prophecy.gems.metadata.MetadataGraphqlClientWrapper
import play.api.libs.json._

import java.util.concurrent.atomic.AtomicInteger
import scala.collection.{immutable, mutable}
import scala.language.postfixOps

/* ------------------------------------------------------ BASE ------------------------------------------------------ */

object UISpec {
  var currentId = ThreadLocal.withInitial(() => new AtomicInteger(0))
  def resetId = currentId.get().set(0)
  // def defaultLanguages: Set[CodeLanguage] = Set(CodeLanguage.scala, CodeLanguage.python, CodeLanguage.sql)
  def getId: Int =
    currentId.get().incrementAndGet()

}

object PropertyContext {
  val DEFAULT = PropertyContext("component", "")
}

case class PropertyContext(contextName: String, prefix: String)

sealed trait Element {

  val id: String = UISpec.getId.toString

  def kind: String
  def json(context: PropertyContext): JsObject

  def collect[T](pf: PartialFunction[Element, T]): List[T] = this match {
    case atom: Atom[_] ⇒
      val inBuiltElements = atom.getTemplateElements.flatMap(_.collect(pf))
      pf.lift(atom).map(atomElement ⇒ atomElement :: inBuiltElements).getOrElse(inBuiltElements)

    case container: Container[_] ⇒
      val containerChildren = container.getContainerChildren.flatMap(_.collect(pf))
      pf.lift(container).map(parent ⇒ parent :: containerChildren).getOrElse(containerChildren)
    case _ ⇒ Nil
  }

  def getElement(elementId: String): List[Element] = this match {
    case atom: Atom[_] ⇒
      val inBuiltElements = atom.getTemplateElements.flatMap(_.getElement(elementId))
      if (atom.id == elementId) {
        atom :: inBuiltElements
      } else {
        inBuiltElements
      }
    case container: Container[_] ⇒
      val containerChildren = container.getContainerChildren.flatMap(_.getElement(elementId))
      if (container.id == elementId) {
        container :: containerChildren
      } else {
        containerChildren
      }
    case _ ⇒ Nil
  }

  protected def propertyPath(property: String, context: PropertyContext): String =
    if (property.startsWith("$.metadata")) {
      s"$${$property}"
    } else if (property.startsWith("record.")) {
      s"$${$property}"
    } else if (property.contains("component.settings")) {
      s"$${$property}"
    } else if (!property.startsWith("component.")) {
      List("component", "properties", context.prefix, property).filter(_.nonEmpty).mkString("${", ".", "}")
    } else {
      s"$${$property}"
    }
}
// Can we remove AtomType thing by saying bindProperty returns this.type ?
sealed trait Atom[AtomType <: Atom[AtomType]] extends Element {
  def title: String
  def property: Option[String]
  def bindProperty(property: String): AtomType
  def propertyKey: String = "value"

  def getTemplateElements: List[Element] = Nil

  def jsonProperties(context: PropertyContext): JsObject = Json.obj("title" → title)
  def json(context: PropertyContext): JsObject = {
    val properties = mutable.Map(jsonProperties(context).value.toSeq: _*)
    property.foreach(property ⇒ properties(propertyKey) = JsString(propertyPath(property, context)))

    Json.obj(
      "id" → id,
      "kind" → kind,
      "properties" → properties
    )
  }
}

sealed trait Container[ElementType <: Element] extends Element with Product {
  def children: List[ElementType]

  def getContainerChildren: List[ElementType] = children

  def json(context: PropertyContext): JsObject = Json.obj(
    "id" → id,
    "kind" → kind,
    "properties" → jsonProperties(context),
    "contains" → children.reverseMap(_.json(context))
  )

  protected def jsonProperties(context: PropertyContext): JsObject = Json.obj()
}

/* ------------------------------------------------------ ATOMS ----------------------------------------------------- */

sealed trait Align extends enumeratum.EnumEntry

object Align extends enumeratum.Enum[Align] {
  case object start extends Align
  case object end extends Align
  case object middle extends Align
  override def values: immutable.IndexedSeq[Align] = findValues
}

sealed trait Placement extends enumeratum.EnumEntry

object Placement extends enumeratum.Enum[Placement] {
  case object top extends Placement
  case object bottom extends Placement
  case object left extends Placement
  case object right extends Placement
  override def values: immutable.IndexedSeq[Placement] = findValues
}

case class Checkbox(title: String, property: Option[String] = None) extends Atom[Checkbox] {
  def kind = "Atoms.CheckBox"

  override def propertyKey = "checked"
  def bindProperty(property: String): Checkbox = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("label") = JsString(title)
    JsObject(properties)
  }

}

case class Switch(title: String, property: Option[String] = None) extends Atom[Switch] {
  def kind = "Atoms.Switch"

  override def propertyKey = "checked"
  def bindProperty(property: String): Switch = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("label") = JsString(title)
    JsObject(properties)
  }

}

case class NumberBox(
                      title: String,
                      property: Option[String] = None,
                      minValue: Option[Int] = None,
                      maxValue: Option[Int] = None,
                      ignoreTitle: Boolean = false,
                      placeholder: String = "target_column",
                      disabledView: Option[Boolean] = None,
                      textType: Option[String] = None,
                      allowEscapeSequence: Option[Boolean] = None,
                      kind: String = "Atoms.NumberBox",
                      fieldType: Option[String] = None
                    ) extends Atom[NumberBox] {
  def bindProperty(property: String): NumberBox = copy(property = Some(property))
  def bindPlaceholder(placeHolder: String): NumberBox = copy(placeholder = placeHolder)
  def enableEscapeSequence(): NumberBox = copy(allowEscapeSequence = Some(true))

  /**
   * use ONLY when the field is bound to the datatype 'SColumn'.
   * In  case of an SColumn, if user deletes the value on the ui, the ui sends back a null
   * (ie, the entire scolumn object is deleted).
   * In case of presence of some value on the ui, the ui would create the Scolumn object with format and expression,
   * and always send the entire object during didchange (instead of the normally sent leaf values)
   * @return
   */
  def makeFieldOptional(): NumberBox = copy(kind = "SColumn", fieldType = Some("Atoms.NumberBox"))

  def disabled(): NumberBox = copy(disabledView = Some(true))
  def isPassword(): NumberBox = copy(textType = Some("password"))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    if (!ignoreTitle) props("title") = JsString(title)
    props("placeholder") = JsString(placeholder)
    minValue.foreach(min => props("min") = JsNumber(min))
    maxValue.foreach(max => props("max") = JsNumber(max))
    fieldType.foreach(ft ⇒ props("fieldType") = JsString(ft))
    disabledView.foreach(disableFlag ⇒ props("disabled") = JsBoolean(disableFlag))
    textType.foreach(textType ⇒ props("type") = JsString(textType))
    allowEscapeSequence.foreach(allowEscapeSequence ⇒ props("allowEscapeSequence") = JsBoolean(allowEscapeSequence))
    JsObject(props)
  }
}

object TextBoxWithoutPlaceholder {
  def apply(
             title: String,
             property: Option[String] = None,
             ignoreTitle: Boolean = false,
             placeholder: String = "",
             disabledView: Option[Boolean] = None,
             textType: Option[String] = None,
             allowEscapeSequence: Option[Boolean] = None,
             fieldType: Option[String] = None
           ): TextBox = TextBox(
    title,
    property,
    ignoreTitle,
    placeholder,
    disabledView,
    textType,
    allowEscapeSequence,
    fieldType = fieldType
  )
}

case class TextBox(
                    title: String,
                    property: Option[String] = None,
                    ignoreTitle: Boolean = false,
                    placeholder: String = "target_column",
                    disabledView: Option[Boolean] = None,
                    textType: Option[String] = None,
                    allowEscapeSequence: Option[Boolean] = None,
                    kind: String = "Atoms.TextBox",
                    fieldType: Option[String] = None
                  ) extends Atom[TextBox] {
  def bindProperty(property: String): TextBox = copy(property = Some(property))
  def bindPlaceholder(placeHolder: String): TextBox = copy(placeholder = placeHolder)
  def enableEscapeSequence(): TextBox = copy(allowEscapeSequence = Some(true))

  /**
   * use ONLY when the field is bound to the datatype 'SColumn'.
   * In  case of an SColumn, if user deletes the value on the ui, the ui sends back a null
   * (ie, the entire scolumn object is deleted).
   * In case of presence of some value on the ui, the ui would create the Scolumn object with format and expression,
   * and always send the entire object during didchange (instead of the normally sent leaf values)
   * @return
   */
  def makeFieldOptional(): TextBox = copy(kind = "SColumn", fieldType = Some("Atoms.TextBox"))

  def disabled(): TextBox = copy(disabledView = Some(true))
  def isPassword(): TextBox = copy(textType = Some("password"))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    if (!ignoreTitle) props("title") = JsString(title)
    props("placeholder") = JsString(placeholder)
    fieldType.foreach(ft ⇒ props("fieldType") = JsString(ft))
    disabledView.foreach(disableFlag ⇒ props("disabled") = JsBoolean(disableFlag))
    textType.foreach(textType ⇒ props("type") = JsString(textType))
    allowEscapeSequence.foreach(allowEscapeSequence ⇒ props("allowEscapeSequence") = JsBoolean(allowEscapeSequence))
    JsObject(props)
  }
}

case class Markdown(
                     value: String,
                     kind: String = "Atoms.Markdown",
                     property: Option[String] = None
                   ) extends Atom[Markdown] {
  override def title: String = ""
  override def bindProperty(property: String): Markdown = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    props("value") = JsString(value)
    JsObject(props)
  }
}

sealed trait CopilotType extends enumeratum.EnumEntry
object CopilotType extends enumeratum.Enum[CopilotType] {
  case object button extends CopilotType
  case object prompt extends CopilotType
  override def values: immutable.IndexedSeq[CopilotType] = findValues
}

/**
 * The copilot properties for various atoms inside gems
 *
 * @param buttonLabel The button label for the copilot button
 * @param align Left (start) or right (end) alignment of the copilot button
 * @param alignOffset Horizontal difference between the start points of the atom and copilot button
 * @param gap Vertical difference between copilot button and atom
 */
abstract class CopilotSpecProps(
                                 val buttonLabel: String = "",
                                 val align: Align = Align.start, // or end
                                 val alignOffset: Int = 0,
                                 val gap: Int = 0
                               ) {
  def json(): JsObject
  def copilotType(): CopilotType
}

case class CopilotButtonTypeProps(
                                   override val buttonLabel: String = "",
                                   override val align: Align = Align.start, // or end
                                   override val alignOffset: Int = 0,
                                   override val gap: Int = 0
                                 ) extends CopilotSpecProps(buttonLabel, align, alignOffset, gap) {
  override def json(): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props("buttonLabel") = JsString(buttonLabel)
    props("align") = JsString(align.entryName)
    props("alignOffset") = JsNumber(alignOffset)
    props("gap") = JsNumber(gap)
    JsObject(props)
  }

  override def copilotType(): CopilotType = CopilotType.button
}

case class CopilotPromptTypeProps(
                                   override val buttonLabel: String = "",
                                   override val align: Align = Align.start, // or end
                                   override val alignOffset: Int = 0,
                                   override val gap: Int = 0,
                                   promptPlaceholder: Option[String] = None
                                 ) extends CopilotSpecProps(buttonLabel, align, alignOffset, gap) {
  override def json(): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props("buttonLabel") = JsString(buttonLabel)
    props("align") = JsString(align.entryName)
    props("alignOffset") = JsNumber(alignOffset)
    props("gap") = JsNumber(gap)
    promptPlaceholder.foreach(x => props("promptPlaceholder") = JsString(x))
    JsObject(props)
  }

  override def copilotType(): CopilotType = CopilotType.prompt
}

/**
 * The copilot properties for various atoms inside gems
 *
 * @param method The websocket method to call
 * @param methodType The type of the message body (optional) (see usages for examples)
 * @param copilotProps Specifications on UI which is related to formatting CSS etc
 */
case class CopilotSpec(
                        copilotProps: CopilotSpecProps,
                        method: String,
                        methodType: Option[String] = None
                      ) {
  lazy val json: JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props("method") = JsString(method)
    methodType.foreach(mt => props("methodType") = JsString(mt))
    props("copilotType") = JsString(copilotProps.copilotType().entryName)
    props("copilotProps") = copilotProps.json()
    JsObject(props)
  }
}

case class TextArea(
                     title: String,
                     rows: Int,
                     property: Option[String] = None,
                     placeholder: String = "",
                     allowEscapeSequence: Option[Boolean] = None,
                     readOnly: Boolean = false,
                     kind: String = "Atoms.TextArea",
                     copilot: Option[CopilotSpec] = None
                   ) extends Atom[TextArea] {
  def bindProperty(property: String): TextArea = copy(property = Some(property))
  def bindPlaceholder(placeHolder: String): TextArea = copy(placeholder = placeHolder)
  def withCopilot(copilot: CopilotSpec): TextArea = copy(copilot = Some(copilot))
  def enableEscapeSequence(): TextArea = copy(allowEscapeSequence = Some(true))
  def readOnly(readOnly: Boolean = true): TextArea = copy(readOnly = readOnly)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    props("title") = JsString(title)
    props("rows") = JsNumber(rows)
    props("placeholder") = JsString(placeholder)
    copilot.foreach(x => props("copilot") = x.json)
    if (readOnly) props("readOnly") = JsTrue
    allowEscapeSequence.foreach(allowEscapeSequence ⇒ props("allowEscapeSequence") = JsBoolean(allowEscapeSequence))
    JsObject(props)
  }
}

case class Editor(
                   height: Option[String] = Some("100%"),
                   language: Option[String] = Some("${$.workflow.metainfo.frontEndLanguage}"),
                   property: Option[String] = None,
                   ports: Option[String] = None,
                   kind: String = "Atoms.Editor",
                   fieldType: Option[String] = None,
                   disabled: Option[String] = None,
                   readOnly: Option[String] = None,
                   placeholder: Option[String] = None,
                   copilot: Option[CopilotSpec] = None,
                   fixWithCopilot: Option[Boolean] = None
                 ) extends Atom[Editor] {
  override def title: String = "Editor"
  def bindProperty(property: String): Editor = copy(property = Some(property))
  def bindLanguage(lang: String): Editor = copy(language = Some(lang))
  def bindPlaceholder(placeHolder: String): Editor = copy(placeholder = Some(placeHolder))

  def withSchemaSuggestions(): Editor = copy(ports = Some("component.ports.inputs"))
  def disabled(property: String): Editor = copy(disabled = Some(property))
  def readOnly(property: String): Editor = copy(readOnly = Some(property))

  def withCopilot(copilot: CopilotSpec): Editor = copy(copilot = Some(copilot))
  def allowFixWithCopilot: Editor = copy(fixWithCopilot = Some(true))

  /**
   * use ONLY when the field is bound to the datatype 'SColumn'.
   * In  case of an SColumn, if user deletes the value on the ui, the ui sends back a null
   * (ie, the entire scolumn object is deleted).
   * In case of presence of some value on the ui, the ui would create the Scolumn object with format and expression,
   * and always send the entire object during didchange (instead of the normally sent leaf values)
   * @return
   */
  def makeFieldOptional(): Editor = copy(kind = "SColumn", fieldType = Some("Atoms.Editor"))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("title") = JsString(title)
    placeholder.foreach(ph => properties("placeholder") = JsString(ph))
    height.foreach(ht ⇒ properties("height") = JsString(ht))
    language.foreach(lang ⇒ properties("language") = JsString(lang))
    fieldType.foreach(ft ⇒ properties("fieldType") = JsString(ft))
    disabled.foreach(ft ⇒ properties("disabled") = JsString(propertyPath(ft, context)))
    readOnly.foreach(ft ⇒ properties("readOnly") = JsString(propertyPath(ft, context)))
    ports.foreach(ports ⇒ properties("ports") = JsString(propertyPath(ports, context)))
    copilot.foreach(cps => properties("copilot") = cps.json)
    fixWithCopilot.foreach(fwc => properties("fixWithCopilot") = JsBoolean(fwc))
    JsObject(properties)
  }
}

case class ExpressionBox(
                          title: String = "",
                          language: Option[String] = Some("${record.expression.format}"),
                          placeholder: mutable.Map[String, JsString] = mutable.Map.empty[String, JsString],
                          property: Option[String] = None,
                          selectedFields: Option[String] = None,
                          ports: Option[String] = None,
                          ignoreTitle: Boolean = false,
                          readOnly: Option[Boolean] = None,
                          kind: String = "ExpressionBox",
                          fieldType: Option[String] = None,
                          delay: Option[Int] = None,
                          copilot: Option[CopilotSpec] = None,
                          fixWithCopilot: Option[Boolean] = None
                        ) extends Atom[ExpressionBox] {
  def bindProperty(property: String): ExpressionBox = copy(property = Some(property))
  def bindLanguage(language: String): ExpressionBox = copy(language = Some(language))
  def withFrontEndLanguage: ExpressionBox =
    copy(language = Some("${$.workflow.metainfo.frontEndLanguage}"))
  def bindSelectedFieldProperty(selectedFields: String): ExpressionBox = copy(selectedFields = Some(selectedFields))
  def bindPorts(ports: String): ExpressionBox = copy(ports = Some(ports))

  /**
   * use ONLY when the field is bound to the datatype 'SColumn'.
   * In  case of an SColumn, if user deletes the value on the ui, the ui sends back a null
   * (ie, the entire scolumn object is deleted).
   * In case of presence of some value on the ui, the ui would create the Scolumn object with format and expression,
   * and always send the entire object during didchange (instead of the normally sent leaf values)
   * @return
   */
  def makeFieldOptional(): ExpressionBox = copy(kind = "SColumn", fieldType = Some("ExpressionBox"))

  def disabled(): ExpressionBox = copy(readOnly = Some(true))

  def withCopilot(copilot: CopilotSpec): ExpressionBox = copy(copilot = Some(copilot))

  def allowFixWithCopilot(): ExpressionBox = copy(fixWithCopilot = Some(true))
  def bindPlaceholder(string: String): ExpressionBox = bindPlaceholders(
    languagePlaceholders = mutable.Map(
      "scala" → string,
      "python" → string,
      "sql" → string
    )
  )
  def bindPlaceholders(
                        languagePlaceholders: mutable.Map[String, String] = mutable.Map(
                          "scala" → """concat(col("source_column"), col("other_column"))""",
                          "python" → """concat(col("source_column"), col("other_column"))""",
                          "sql" → """concat(source_column, other_column)"""
                        )
                      ): ExpressionBox =
    copy(placeholder = languagePlaceholders.map(x ⇒ x._1 → JsString(x._2)))

  def bindSQLPlaceholder(pholder: String): ExpressionBox = copy(placeholder = placeholder + ("sql" → JsString(pholder)))
  def bindScalaPlaceholder(pholder: String): ExpressionBox =
    copy(placeholder = placeholder + ("scala" → JsString(pholder)))
  def bindPythonPlaceholder(pholder: String): ExpressionBox =
    copy(placeholder = placeholder + ("python" → JsString(pholder)))

  def withSchemaSuggestions(): ExpressionBox =
    this.bindPorts("component.ports.inputs")

  def withDelay(delay: Int): ExpressionBox =
    copy(delay = Some(delay))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    if (!ignoreTitle)
      props("title") = JsString(title)
    language.foreach(language ⇒ props("language") = JsString(language))
    //    placeholder.foreach(pholder ⇒ props("placeholder") = JsString(pholder))

    props("placeholder") = JsObject(placeholder)
    fieldType.foreach(ft ⇒ props("fieldType") = JsString(ft))
    selectedFields.foreach(selectedFields ⇒ props("selectedFields") = JsString(propertyPath(selectedFields, context)))
    ports.foreach(ports ⇒ props("ports") = JsString(propertyPath(ports, context)))
    readOnly.foreach(flag ⇒ props("readOnly") = JsBoolean(flag))
    delay.foreach(flag ⇒ props("delay") = JsNumber(flag))
    copilot.foreach(cps => props("copilot") = cps.json)
    fixWithCopilot.foreach(fwc => props("fixWithCopilot") = JsBoolean(fwc))
    JsObject(props)
  }
}

case class NativeText(title: String, property: Option[String] = None, ellipses: Option[Boolean] = None)
  extends Atom[NativeText] {
  def kind: String = "Atoms.NativeText"
  def bindProperty(property: String): NativeText = copy(property = Some(property))
  def withEllipsis(): NativeText = copy(ellipses = Some(true))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("value") = JsString(title)
    ellipses.foreach(el => properties("ellipses") = JsBoolean(el))
    JsObject(properties)
  }
}

sealed trait Gem extends enumeratum.EnumEntry
object Gem extends enumeratum.Enum[Gem] {
  case object DiamondPurple extends Gem
  case object TrillionOrange extends Gem

  override def values: immutable.IndexedSeq[Gem] = findValues
}
case class ImagePlaceholder(gem: Gem, title: String, icon: Option[String] = None, property: Option[String] = None)
  extends Atom[ImagePlaceholder] {
  def kind: String = "Atoms.ImagePlaceholder"
  def bindProperty(property: String): ImagePlaceholder = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("gem") = JsString(gem.entryName)
    icon.foreach(iconValue => properties("icon") = JsString(iconValue))
    JsObject(properties)
  }
}

case class TextBoxWithSuggestions(
                                   title: String,
                                   property: Option[String] = None,
                                   options: List[SelectBoxOption] = Nil,
                                   optionProperty: Option[String] = None,
                                   disableAllOptions: Option[Boolean] = None,
                                   placeholder: Option[String] = None,
                                   notFoundContent: Option[String] = None,
                                   identifier: Option[String] = None,
                                   template: Option[Container[Element]] = None
                                 ) extends Atom[TextBoxWithSuggestions] {
  override def kind: String = "Atoms.AutoComplete"

  override def bindProperty(property: String): TextBoxWithSuggestions = copy(property = Some(property))
  def withNoContentMessage(msg: String): TextBoxWithSuggestions = copy(notFoundContent = Some(msg))
  def bindOptionProperty(property: String): TextBoxWithSuggestions = this.copy(optionProperty = Some(property))
  def addOption(label: String, value: String, hint: Option[String] = None): TextBoxWithSuggestions =
    copy(options = options ::: SelectBoxOption(label, value, hint) :: Nil)
  def withSelectionDisabled(): TextBoxWithSuggestions = copy(disableAllOptions = Some(true))
  def withIdentifier(identifier: String): TextBoxWithSuggestions = copy(identifier = Some(identifier))
  def withTemplate(template: Container[Element]): TextBoxWithSuggestions = copy(template = Some(template))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    val optionsJson = options.map(option => option.json())
    properties("options") =
      optionProperty.map(optionProperty ⇒ JsString(optionProperty)).getOrElse(JsArray(optionsJson))
    disableAllOptions.foreach(disableFlag ⇒ properties("disableAllOptions") = JsBoolean(disableFlag))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    identifier.foreach(identifier ⇒ properties("identifier") = JsString(identifier))
    template.foreach(template ⇒ properties("template") = template.json(context))
    JsObject(properties)
  }
}

/** Encapsulates the value of font size
 *
 * level: {
      xl: {
        fontSize: theme.fontSizes.x20,
        lineHeight: theme.lineHeight.x30
      },
      lg: {
        fontSize: theme.fontSizes.x18,
        lineHeight: theme.lineHeight.x28
      },
      md: { fontSize: theme.fontSizes.x16, lineHeight: theme.lineHeight.x24 },
      sm15: { fontSize: theme.fontSizes.x15, lineHeight: theme.lineHeight.x22 },
      sm: {
        fontSize: theme.fontSizes.x14,
        lineHeight: theme.lineHeight.x20
      },
      sm13: {
        fontSize: theme.fontSizes.x13,
        lineHeight: theme.lineHeight.x19
      },
      xs: {
        fontSize: theme.fontSizes.x12,
        lineHeight: theme.lineHeight.x18
      },
      xxs: {
        fontSize: theme.fontSizes.x10,
        lineHeight: theme.lineHeight.x16
      }
    }
 *
 */
sealed trait Level extends enumeratum.EnumEntry

object Level extends enumeratum.Enum[Level] {
  case object xl extends Level
  case object lg extends Level
  case object md extends Level
  case object sm15 extends Level
  case object sm extends Level
  case object sm13 extends Level
  case object xs extends Level
  case object xxs extends Level
  override def values: immutable.IndexedSeq[Level] = findValues
}

case class Text(children: List[Element], level: Option[Level] = None) extends Container[Element] {
  def kind: String = "Atoms.Text"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = level.map(lev => "level" -> JsString(lev.entryName)).toMap
    JsObject(properties ++ super.jsonProperties(context).value)
  }
}

case class TextBoxDatasetTemplate(
                                   title: String,
                                   identifier: String,
                                   children: List[Element] = Nil,
                                   template: StackLayout
                                 ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map[String, JsValue](
      "identifier" -> JsString(identifier),
      "template" -> template.json(context)
    )
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}

object TextBoxDatasetTemplate {
  def apply(title: String, identifier: String): TextBoxDatasetTemplate = {
    val subTemplate = StackLayout().addTemplate(
      StackLayout(align = Some("space-between"), direction = Some("horizontal"))
        .addElement(Text(children = NativeText("${" + identifier + ".label}") :: Nil))
        .addElement(
          Condition()
            .ifEqual(PropExpr(identifier + ".access.shared"), BooleanExpr(false))
            .otherwise(
              NativeText("Read-only")
            )
        )
    )
    val template =
      new TextBoxDatasetTemplate(title, identifier, NativeText("${record.label}") :: Nil, template = subTemplate)
    template
  }
}

case class TextBoxPipelineTemplate(
                                    title: String,
                                    identifier: String,
                                    children: List[Element] = Nil,
                                    template: StackLayout
                                  ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map[String, JsValue](
      "identifier" -> JsString(identifier),
      "template" -> template.json(context)
    )
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}
object TextBoxPipelineTemplate {
  def apply(title: String, identifier: String): TextBoxPipelineTemplate = {
    val subTemplate = StackLayout().addTemplate(
      StackLayout(align = Some("space-between"), direction = Some("horizontal"))
        .addElement(Text(children = NativeText("${pipelines.label}") :: Nil))
    )
    new TextBoxPipelineTemplate(title, identifier, NativeText("${record.label}") :: Nil, template = subTemplate)
  }
}

case class TextBoxProjectTemplate(
                                   title: String,
                                   identifier: String,
                                   children: List[Element] = Nil,
                                   template: StackLayout
                                 ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map[String, JsValue](
      "identifier" -> JsString(identifier),
      "template" -> template.json(context)
    )
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}
object TextBoxProjectTemplate {
  def apply(title: String, identifier: String): TextBoxPipelineTemplate = {
    val subTemplate = StackLayout().addTemplate(
      StackLayout(align = Some("space-between"), direction = Some("horizontal"))
        .addElement(Text(children = NativeText("${projects.label}") :: Nil))
        .addElement(
          Condition()
            .ifEqual(PropExpr("${projects.gitCredsDefined}"), BooleanExpr(false))
            .`then`(ProphecyIcon(iconType = "light", iconName = "AlertTriangleIcon"))
        )
    )
    new TextBoxPipelineTemplate(title, identifier, NativeText("${record.label}") :: Nil, template = subTemplate)
  }
}

case class TextBoxFabricTemplate(
                                  title: String,
                                  identifier: String,
                                  children: List[Element] = Nil,
                                  template: StackLayout
                                ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map[String, JsValue](
      "identifier" -> JsString(identifier),
      "template" -> template.json(context)
    )
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}
object TextBoxFabricTemplate {
  def apply(title: String, identifier: String): TextBoxPipelineTemplate = {
    val subTemplate = StackLayout().addTemplate(
      StackLayout(align = Some("space-between"), direction = Some("horizontal"))
        .addElement(Text(children = NativeText("${fabrics.label}") :: Nil))
    )
    new TextBoxPipelineTemplate(title, identifier, NativeText("${record.label}") :: Nil, template = subTemplate)
  }
}

case class TextBoxJobSizeTemplate(
                                   title: String,
                                   identifier: String,
                                   children: List[Element] = Nil,
                                   template: StackLayout
                                 ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map[String, JsValue](
      "identifier" -> JsString(identifier),
      "template" -> template.json(context)
    )
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}
object TextBoxJobSizeTemplate {
  def apply(title: String, identifier: String): TextBoxJobSizeTemplate = {
    val subTemplate = StackLayout().addTemplate(
      StackLayout(align = Some("space-between"), direction = Some("horizontal"))
        .addElement(Text(children = NativeText("${jobSizes.label}") :: Nil))
    )
    new TextBoxJobSizeTemplate(title, identifier, NativeText("${record.label}") :: Nil, template = subTemplate)
  }
}

case class FileEditor(
                       newFileLanguage: Option[String] = Some("scala"),
                       height: Option[String] = Some("100%"),
                       newFilePrefix: Option[String] = Some("out"),
                       property: Option[String] = None,
                       files: Option[String] = None,
                       minFiles: Option[Int] = Some(0),
                       allowRename: Option[Boolean] = Some(false),
                       allowAddOrDelete: Option[Boolean] = Some(false),
                       placeholder: mutable.Map[String, JsString] = mutable.Map.empty[String, JsString],
                       ports: Option[String] = None,
                       mode: Option[String] = Some("Normal")
                     ) extends Atom[FileEditor] {
  override def kind: String = "FileEditor"

  override def title: String = "FileEditor"
  override def propertyKey: String = "files"

  override def bindProperty(property: String): FileEditor = copy(property = Some(property))
  def withMinFiles(minFiles: Int): FileEditor = copy(minFiles = Some(minFiles))
  def allowFileRenames(): FileEditor = copy(allowRename = Some(true))
  def allowFileAddDelete(): FileEditor = copy(allowAddOrDelete = Some(true))
  def withExpressionMode(): FileEditor = copy(mode = Some("Expression"))

  def bindSQLPlaceholder(pholder: String): FileEditor = copy(placeholder = placeholder + ("sql" → JsString(pholder)))
  def bindScalaPlaceholder(pholder: String): FileEditor =
    copy(placeholder = placeholder + ("scala" → JsString(pholder)))
  def bindPythonPlaceholder(pholder: String): FileEditor =
    copy(placeholder = placeholder + ("python" → JsString(pholder)))

  def withSchemaSuggestions(): FileEditor = copy(ports = Some("component.ports.inputs"))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    newFilePrefix.foreach(prefix ⇒ properties("newFilePrefix") = JsString(prefix))
    newFileLanguage.foreach(lang ⇒ properties("newFileLanguage") = JsString(lang))
    height.foreach(ht ⇒ properties("height") = JsString(ht))
    minFiles.foreach(minFiles ⇒ properties("minFiles") = JsNumber(minFiles))
    allowRename.foreach(allowRename ⇒ properties("allowRename") = JsBoolean(allowRename))
    allowAddOrDelete.foreach(allowAddOrDelete ⇒ properties("allowAddOrDelete") = JsBoolean(allowAddOrDelete))
    properties("placeholder") = JsObject(placeholder)
    ports.foreach(ports ⇒ properties("ports") = JsString(propertyPath(ports, context)))
    mode.foreach(mode ⇒ properties("mode") = JsString(mode))
    JsObject(properties)
  }
}

case class FileBrowser(
                        property: Option[String] = None,
                        showExecutionError: Boolean = true
                      ) extends Atom[FileBrowser] {
  def title: String = "FileBrowser"
  def kind: String = "FileBrowser"

  override def propertyKey: String = "path"

  def hideExecutionErrors(): FileBrowser = copy(showExecutionError = false)

  def bindProperty(property: String): FileBrowser = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("showExecutionError") = JsBoolean(showExecutionError)
    JsObject(properties.toList)
  }
}

case class CodeBlock(
                      title: String = "",
                      codeProp: Option[String] = None,
                      codeLanguage: Option[String] = None,
                      property: Option[String] = None
                    ) extends Atom[CodeBlock] {
  def kind: String = "Atoms.CodeBlock"
  override def propertyKey: String = "code"

  def bindProperty(code: String): CodeBlock = copy(codeProp = Some(code))
  def bindCodeLanguage(language: String): CodeBlock = copy(codeLanguage = Some(language))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    codeProp.foreach(code ⇒ properties("code") = JsString(propertyPath(code, context)))
    properties("code") = codeProp match {
      case None ⇒ JsString(title)
      case Some(codePath) ⇒ JsString(propertyPath(codePath, context))
    }
    codeLanguage.foreach(cl ⇒ properties("language") = JsString(cl))

    JsObject(properties)
  }
}

sealed trait PortSchemaType {
  def name: String
}

object PortSchemaType {
  case object InputSchema extends PortSchemaType {
    def name: String = "in"
  }

  case object OutputSchema extends PortSchemaType {
    def name: String = "out"
  }

  case object AnySchema extends PortSchemaType {
    def name: String = "Any"
  }
}

// This represents the new Ports Atom which encapsulates both input & output tabs.
// This is so that UI can have better control on rendering them.
case class Ports(
                  property: Option[String] = None,
                  singleColumnClickCallback: Option[(String, String, Any) ⇒ Any] = None,
                  allColumnsSelectionCallback: Option[(String, Any) ⇒ Any] = None,
                  minInputPorts: Int = 0,
                  minOutputPorts: Int = 0,
                  allowInputRename: Boolean = false,
                  allowOutputRename: Boolean = false,
                  selectedFieldsProperty: Option[String] = None,
                  inputPorts: String = "${component.ports.inputs}",
                  outputPorts: String = "${component.ports.outputs}",
                  inputNoFieldsMessage: String = "Please connect input ports and fix upstream gems to see schema",
                  outputNoFieldsMessage: String = "Please fix gem errors and upstream gems to see schema",
                  allowInputAddOrDelete: Boolean = false,
                  allowOutputAddOrDelete: Boolean = false,
                  allowCustomOutputSchema: Boolean = true,
                  defaultCustomOutputSchema: Boolean = false,
                  allowInputSelection: Option[Boolean] = None,
                  allowInputSelectionProperty: Option[String] = None
                ) extends Atom[Ports] {
  def title: String = "Schema"
  def kind: String = "Ports"

  // This is useless, as the binding for this is not done at the gem property level. Its always static path which is inside process's node-ports.
  override def bindProperty(property: String): Ports = copy(property = Some(property))

  def allowColumnClickBasedOn(property: String): Ports = copy(allowInputSelectionProperty = Some(property))

  def singleColumnClickCallback(onColumnClicked: (String, String, Any) ⇒ Any): Ports =
    copy(singleColumnClickCallback = Some(onColumnClicked))

  def allColumnsSelectionCallback(onAllColumnsClicked: (String, Any) ⇒ Any): Ports =
    copy(allColumnsSelectionCallback = Some(onAllColumnsClicked))

  def editableInput(flag: Boolean): Ports =
    copy(allowInputAddOrDelete = flag, allowInputRename = flag)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("id") = JsString(id)

    val actionsList = {
      val singleColClick = if (singleColumnClickCallback.isDefined) List(JsString("onColumnClick")) else Nil
      allColumnsSelectionCallback match {
        case None ⇒ singleColClick
        case Some(_) ⇒ singleColClick ::: JsString("onSelectAllColumns") :: Nil
      }
    }
    if (actionsList.nonEmpty) properties("actions") = JsArray(actionsList)

    properties("minInputPorts") = JsNumber(minInputPorts)
    properties("minOutputPorts") = JsNumber(minOutputPorts)
    properties("allowInputRename") = JsBoolean(allowInputRename)
    properties("allowOutputRename") = JsBoolean(allowOutputRename)
    selectedFieldsProperty.foreach(property ⇒ properties("selectedFields") = JsString(propertyPath(property, context)))
    properties("inputPorts") = JsString(inputPorts)
    properties("outputPorts") = JsString(outputPorts)
    properties("inputNoFieldsMessage") = JsString(inputNoFieldsMessage)
    properties("outputNoFieldsMessage") = JsString(outputNoFieldsMessage)
    properties("allowInputAddOrDelete") = JsBoolean(allowInputAddOrDelete)
    properties("allowOutputAddOrDelete") = JsBoolean(allowOutputAddOrDelete)
    properties("allowCustomOutputSchema") = JsBoolean(allowCustomOutputSchema)
    properties("defaultCustomOutputSchema") = JsBoolean(defaultCustomOutputSchema)
    properties("isCustomOutputSchema") = JsString(propertyPath("component.ports.isCustomOutputSchema", context))

    if (allowInputSelection.isDefined)
      properties("allowInputSelection") = JsBoolean(allowInputSelection.get)
    else if (allowInputSelectionProperty.isDefined)
      properties("allowInputSelection") = JsString(propertyPath(allowInputSelectionProperty.get, context))
    else if (singleColumnClickCallback.isDefined || allColumnsSelectionCallback.isDefined)
      properties("allowInputSelection") = JsBoolean(true)

    JsObject(properties.toList)
  }
}

case class PortSchema(
                       schemaType: PortSchemaType = PortSchemaType.AnySchema,
                       selectedFieldsProperty: Option[String] = None,
                       property: Option[String] = None,
                       ports: Option[String] = None,
                       minPorts: Int = 0,
                       allowRename: Boolean = false,
                       allowAddOrDelete: Boolean = false,
                       allowSelection: Option[Boolean] = Some(false),
                       noSchemaMessage: String = "Schema not found",
                       onColumnClicked: Option[(String, String, Any) ⇒ Any] = None,
                       onAllColumnsClicked: Option[(String, Any) ⇒ Any] = None,
                       selectionProperty: Option[String] = None,
                       isCustomOutputSchema: Option[String] = None,
                       showSelectAllColumns: Boolean = true, // Flag for "Add all" button in port schema tab.
                       allowCustomOutputSchema: Boolean = true,
                       defaultCustomOutputSchema: Boolean = false
                     ) extends Atom[PortSchema] {
  def title: String = "Schema"
  def kind: String = "PortSchema"

  def withRenamePortsEnabled(allowRename: Boolean = true): PortSchema = copy(allowRename = allowRename)
  def withAddOrDeletePortsEnabled(allowAddDelete: Boolean = true): PortSchema = copy(allowAddOrDelete = allowAddDelete)
  def withMinimumPorts(minNumberOfPorts: Int = 0): PortSchema = copy(minPorts = minNumberOfPorts)
  def bindSelectedFieldsProperty(property: String): PortSchema = copy(selectedFieldsProperty = Some(property))
  def bindProperty(property: String): PortSchema = copy(property = Some(property))

  def bindOnColumnClicked(callback: (String, String, Any) ⇒ Any): PortSchema = copy(onColumnClicked = Some(callback))

  def bindOnAllColumnsClicked(callback: (String, Any) ⇒ Any): PortSchema = copy(onAllColumnsClicked = Some(callback))
  def hideSelectAllColumnsButton(): PortSchema = copy(showSelectAllColumns = false)

  // The idea is that column-clicking can be allowed by
  // either setting the allowSelectionFlag to true/false
  // OR by setting the allowColumnSelectionProperty to a Property (a jsonpath in the component) which evaluates to
  // either true or false
  // eg, in simple components, you'd know if you want to allow user to click or not on the column name in portschema
  // but for something like aggregate, you may want to only allow it when the active tab is a specific tab
  // The key idea is that only one of these should have a bool value, the other should be none
  def asInput(
               allowSelectionFlag: Option[Boolean] = None,
               allowColumnSelectionProperty: Option[String] = None
             ): PortSchema =
    copy(
      schemaType = PortSchemaType.InputSchema,
      ports = Some("component.ports.inputs"),
      allowSelection = allowSelectionFlag,
      selectionProperty = allowColumnSelectionProperty,
      selectedFieldsProperty = Some("component.ports.selectedInputFields"),
      noSchemaMessage = "Please connect input ports and fix upstream gems to see schema"
    )

  def asOutput(): PortSchema = copy(
    schemaType = PortSchemaType.OutputSchema,
    ports = Some("component.ports.outputs"),
    noSchemaMessage = "Please fix gem errors and upstream gems to see schema",
    isCustomOutputSchema = Some("component.ports.isCustomOutputSchema")
  )

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("type") = JsString(schemaType.name)
    properties("id") = JsString(id)
    properties("minPorts") = JsNumber(minPorts)
    properties("allowRename") = JsBoolean(allowRename)
    properties("allowAddOrDelete") = JsBoolean(allowAddOrDelete)
    properties("noFieldsMessage") = JsString(noSchemaMessage)
    if (selectionProperty.isDefined)
      properties("allowSelection") = JsString(propertyPath(selectionProperty.get, context))
    else if (allowSelection.isDefined)
      properties("allowSelection") = JsBoolean(allowSelection.get)
    selectedFieldsProperty.foreach(property ⇒ properties("selectedFields") = JsString(propertyPath(property, context)))
    isCustomOutputSchema.foreach(property ⇒
      properties("isCustomOutputSchema") = JsString(propertyPath(property, context))
    )
    if (!showSelectAllColumns) properties("showSelectAllColumns") = JsBoolean(showSelectAllColumns)

    ports.foreach(property ⇒ properties("ports") = JsString(propertyPath(property, context)))
    //    onColumnClicked.foreach(onClick ⇒ properties("actions") = JsArray(List(JsString("onColumnClick"))))

    val actionsList = {
      val singleColClick = if (onColumnClicked.isDefined) List(JsString("onColumnClick")) else Nil
      onAllColumnsClicked match {
        case None ⇒ singleColClick
        case Some(_) ⇒ singleColClick ::: JsString("onSelectAllColumns") :: Nil
      }
    }
    if (actionsList.nonEmpty) properties("actions") = JsArray(actionsList)
    properties("allowCustomOutputSchema") = JsBoolean(allowCustomOutputSchema)
    properties("defaultCustomOutputSchema") = JsBoolean(defaultCustomOutputSchema)

    JsObject(properties.toList)
  }
}

case class ProphecyIcon(title: String = "", iconType: String, iconName: String, property: Option[String] = None)
  extends Atom[ProphecyIcon] {

  override def kind: String = "Atoms.ProphecyIcon"
  def bindProperty(property: String): ProphecyIcon = copy(property = Some(property))
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("type") = JsString(iconType)
    properties("iconName") = JsString(iconName)
    JsObject(properties)
  }
}

case class RadioOption(label: String, value: String, icon: Option[String] = None, description: Option[String] = None)

case class RadioGroup(
                       title: String,
                       property: Option[String] = None,
                       optionProperty: Option[String] = None,
                       optionType: Option[String] = None,
                       options: List[RadioOption] = Nil,
                       gap: Option[String] = Some("1rem"),
                       variant: Option[String] = None,
                       buttonStyle: Option[String] = None,
                       buttonSize: Option[String] = None,
                       iconSize: Option[String] = None,
                       orientation: Option[String] = None,
                       style: Option[Map[String, String]] = None
                     ) extends Atom[RadioGroup] {
  override def kind: String = "Atoms.RadioGroup"
  override def bindProperty(property: String): RadioGroup = copy(property = Some(property))
  def bindOptionProperty(property: String): RadioGroup = this.copy(optionProperty = Some(property))

  def addOption(
                 label: String,
                 value: String,
                 icon: Option[String] = None,
                 description: Option[String] = None
               ): RadioGroup =
    copy(options = options ::: RadioOption(label, value, icon, description) :: Nil)

  def setOptionType(optionType: String): RadioGroup = copy(optionType = Some(optionType))
  def setVariant(variant: String): RadioGroup = copy(variant = Some(variant))
  def setOrientation(orientation: String): RadioGroup = copy(orientation = Some(orientation))
  def setButtonStyle(buttonStyle: String): RadioGroup = copy(buttonStyle = Some(buttonStyle))
  def setButtonSize(buttonSize: String): RadioGroup = copy(buttonSize = Some(buttonSize))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value

    val optionsJson =
      options.map(option ⇒
        Json.obj(
          "label" → option.label,
          "value" → option.value,
          "icon" → option.icon,
          "description" → option.description
        )
      )
    properties("options") =
      optionProperty.map(optionProperty ⇒ JsString(optionProperty)).getOrElse(JsArray(optionsJson))

    gap.foreach(gap ⇒ properties("gap") = JsString(gap))
    variant.foreach(areaSize ⇒ properties("variant") = JsString(areaSize))
    orientation.foreach(orient ⇒ properties("orientation") = JsString(orient))
    optionType.foreach(optionType ⇒ properties("optionType") = JsString(optionType))
    buttonStyle.foreach(btnStyle ⇒ properties("buttonStyle") = JsString(btnStyle))
    buttonSize.foreach(btnSize ⇒ properties("buttonSize") = JsString(btnSize))
    iconSize.foreach(icnSize ⇒ properties("iconSize") = JsString(icnSize))
    style.foreach(style => properties("style") = Json.toJson(style))
    JsObject(properties)
  }
}

case class SelectBoxOption(label: String, value: String, hint: Option[String] = None) {
  def json(): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties("label") = JsString(label)
    properties("value") = JsString(value)
    hint.foreach(h => properties("hint") = JsString(h))

    JsObject(properties)
  }
}
case class SelectBox(
                      title: String,
                      property: Option[String] = None,
                      options: List[SelectBoxOption] = Nil,
                      optionProperty: Option[String] = None,
                      disabled: Option[Boolean] = None,
                      placeholder: Option[String] = None,
                      mode: Option[String] = None,
                      notFoundContent: Option[String] = None,
                      showSearch: Option[Boolean] = None,
                      identifier: Option[String] = None,
                      template: Option[Container[Element]] = None,
                      footer: List[Element] = List.empty,
                      disableOption: Option[Boolean] = None,
                      filterProp: Option[String] = None,
                      allowClear: Option[Boolean] = None,
                      loadingProperty: Option[String] = None
                    ) extends Atom[SelectBox] {
  override def kind: String = "Atoms.SelectBox"
  override def bindProperty(property: String): SelectBox = copy(property = Some(property))

  def withDisabled: SelectBox = copy(disabled = Some(true))
  def withNoContentMessage(msg: String): SelectBox = copy(notFoundContent = Some(msg))
  def bindOptionProperty(property: String): SelectBox = this.copy(optionProperty = Some(property))
  def bindLoadingProperty(property: String): SelectBox = this.copy(loadingProperty = Some(property))
  def withSearchEnabled(): SelectBox = this.copy(showSearch = Some(true))
  def withIdentifier(identifier: String): SelectBox = this.copy(identifier = Some(identifier))
  def withFilterProp(optionFilterProp: String): SelectBox = this.copy(filterProp = Some(optionFilterProp))
  def addTemplate(template: Container[Element]): SelectBox = this.copy(template = Some(template))
  def addFooter(element: Element): SelectBox = this.copy(footer = element :: footer)
  def withDisableOption(): SelectBox = this.copy(disableOption = Some(true))
  def allowClearSelection(): SelectBox = copy(allowClear = Some(true))

  def addOption(label: String, value: String, hint: Option[String] = None): SelectBox =
    copy(options = options ::: SelectBoxOption(label, value, hint) :: Nil)

  override def getTemplateElements: List[Element] = footer

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    val optionsJson = options.map(option => option.json())
    properties("options") =
      optionProperty.map(optionProperty ⇒ JsString(optionProperty)).getOrElse(JsArray(optionsJson))
    //    properties("loading") = loadingProperty.map(loading => JsString(loading)).getOrElse(JsBoolean(false))
    disabled.foreach(disabled ⇒ properties("disabled") = JsBoolean(disabled))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    mode.foreach(selectionType ⇒ properties("mode") = JsString(selectionType))
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    showSearch.foreach(flag ⇒ properties("showSearch") = JsBoolean(flag))
    identifier.foreach(identifier ⇒ properties("identifier") = JsString(identifier))
    filterProp.foreach(optionFilterProp ⇒ properties("optionFilterProp") = JsString(optionFilterProp))
    template.foreach(template ⇒ properties("template") = template.json(context))
    properties("footer") = JsArray(footer.map(_footer ⇒ _footer.json(context)))
    disableOption.foreach(target ⇒ properties("disableOption") = JsBoolean(target))
    allowClear.foreach(flag ⇒ properties("allowClear") = JsBoolean(flag))
    JsObject(properties)
  }

}

case class SelectBoxFabric(
                            title: String,
                            property: Option[String] = None,
                            options: List[SelectBoxOption] = Nil,
                            optionProperty: Option[String] = None,
                            disabled: Option[Boolean] = None,
                            placeholder: Option[String] = None,
                            mode: Option[String] = None,
                            notFoundContent: Option[String] = None,
                            showSearch: Option[Boolean] = None,
                            identifier: Option[String] = None,
                            template: Option[TextBoxJobSizeTemplate] = None,
                            disableOption: Option[Boolean] = None
                          ) extends Atom[SelectBoxFabric] {
  override def kind: String = "Atoms.SelectBox"

  override def bindProperty(property: String): SelectBoxFabric = copy(property = Some(property))

  def withDisabled: SelectBoxFabric = copy(disabled = Some(true))

  def withNoContentMessage(msg: String): SelectBoxFabric = copy(notFoundContent = Some(msg))

  def bindOptionProperty(property: String): SelectBoxFabric = this.copy(optionProperty = Some(property))

  def withSearchEnabled(): SelectBoxFabric = this.copy(showSearch = Some(true))

  def withIdentifier(identifier: String): SelectBoxFabric = this.copy(identifier = Some(identifier))

  def addTemplate(template: TextBoxJobSizeTemplate): SelectBoxFabric = this.copy(template = Some(template))

  def withDisableOption(): SelectBoxFabric = this.copy(disableOption = Some(true))

  def addOption(label: String, value: String, hint: Option[String] = None): SelectBoxFabric =
    copy(options = options ::: SelectBoxOption(label, value, hint) :: Nil)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    val optionsJson = options.map(option => option.json())
    properties("options") =
      optionProperty.map(optionProperty ⇒ JsString(optionProperty)).getOrElse(JsArray(optionsJson))
    disabled.foreach(disabled ⇒ properties("disabled") = JsBoolean(disabled))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    mode.foreach(selectionType ⇒ properties("mode") = JsString(selectionType))
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    showSearch.foreach(flag ⇒ properties("showSearch") = JsBoolean(flag))
    identifier.foreach(identifier ⇒ properties("identifier") = JsString(identifier))
    template.foreach(template ⇒ properties("template") = template.json(context))
    disableOption.foreach(target ⇒ properties("disableOption") = JsBoolean(target))
    JsObject(properties)
  }

}

case class SelectBoxPipeline(
                              title: String,
                              property: Option[String] = None,
                              options: List[SelectBoxOption] = Nil,
                              optionProperty: Option[String] = None,
                              disabled: Option[Boolean] = None,
                              placeholder: Option[String] = None,
                              mode: Option[String] = None,
                              notFoundContent: Option[String] = None,
                              showSearch: Option[Boolean] = None,
                              identifier: Option[String] = None,
                              template: Option[TextBoxPipelineTemplate] = None,
                              disableOption: Option[Boolean] = None,
                              filterProp: Option[String] = None
                            ) extends Atom[SelectBoxPipeline] {
  override def kind: String = "Atoms.SelectBox"
  override def bindProperty(property: String): SelectBoxPipeline = copy(property = Some(property))

  def withDisabled: SelectBoxPipeline = copy(disabled = Some(true))
  def withNoContentMessage(msg: String): SelectBoxPipeline = copy(notFoundContent = Some(msg))
  def bindOptionProperty(property: String): SelectBoxPipeline = this.copy(optionProperty = Some(property))
  def withSearchEnabled(): SelectBoxPipeline = this.copy(showSearch = Some(true))
  def withIdentifier(identifier: String): SelectBoxPipeline = this.copy(identifier = Some(identifier))
  def withFilterProp(optionFilterProp: String): SelectBoxPipeline = this.copy(filterProp = Some(optionFilterProp))
  def addTemplate(template: TextBoxPipelineTemplate): SelectBoxPipeline = this.copy(template = Some(template))
  def withDisableOption(): SelectBoxPipeline = this.copy(disableOption = Some(true))

  def addOption(label: String, value: String, hint: Option[String]): SelectBoxPipeline =
    copy(options = options ::: SelectBoxOption(label, value, hint) :: Nil)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    val optionsJson = options.map(option ⇒ option.json())
    properties("options") =
      optionProperty.map(optionProperty ⇒ JsString(optionProperty)).getOrElse(JsArray(optionsJson))
    disabled.foreach(disabled ⇒ properties("disabled") = JsBoolean(disabled))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    mode.foreach(selectionType ⇒ properties("mode") = JsString(selectionType))
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    showSearch.foreach(flag ⇒ properties("showSearch") = JsBoolean(flag))
    identifier.foreach(identifier ⇒ properties("identifier") = JsString(identifier))
    filterProp.foreach(optionFilterProp ⇒ properties("optionFilterProp") = JsString(optionFilterProp))
    template.foreach(template ⇒ properties("template") = template.json(context))
    disableOption.foreach(target ⇒ properties("disableOption") = JsBoolean(target))
    JsObject(properties)
  }

}

case class SelectBoxDLTPipeline(
                                 title: String,
                                 property: Option[String] = None,
                                 notFoundContent: Option[String] = None,
                                 showSearch: Option[Boolean] = None,
                                 filterProp: Option[String] = None,
                                 placeholder: Option[String] = None
                               ) extends Atom[SelectBoxDLTPipeline] {

  override def kind: String = "DLTPipelines"

  override def bindProperty(property: String): SelectBoxDLTPipeline = copy(property = Some(property))

  def withNoContentMessage(msg: String): SelectBoxDLTPipeline = copy(notFoundContent = Some(msg))
  def withSearchEnabled(): SelectBoxDLTPipeline = this.copy(showSearch = Some(true))
  def withFilterProp(optionFilterProp: String): SelectBoxDLTPipeline = this.copy(filterProp = Some(optionFilterProp))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    showSearch.foreach(flag ⇒ properties("showSearch") = JsBoolean(flag))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    filterProp.foreach(optionFilterProp ⇒ properties("optionFilterProp") = JsString(optionFilterProp))
    JsObject(properties)
  }

}

case class SchemaColumnsDropdown(
                                  title: String,
                                  schema: Option[String] = None,
                                  property: Option[String] = None,
                                  options: List[SelectBoxOption] = Nil,
                                  optionProperty: Option[String] = None,
                                  disabled: Option[Boolean] = None,
                                  placeholder: Option[String] = None,
                                  mode: Option[String] = None,
                                  notFoundContent: Option[String] = None,
                                  errorBindings: List[String] = Nil,
                                  showSearch: Option[Boolean] = None,
                                  allowClear: Option[Boolean] = None
                                ) extends Atom[SchemaColumnsDropdown] {
  override def kind: String = "SchemaSelectBox"

  def bindSchema(schemaPath: String): SchemaColumnsDropdown = copy(schema = Some(schemaPath))
  def bindProperty(property: String): SchemaColumnsDropdown = copy(property = Some(property))
  def withMultipleSelection(): SchemaColumnsDropdown = copy(mode = Some("multiple"))
  def withDisabled: SchemaColumnsDropdown = copy(disabled = Some(true))
  def withNoContentMessage(msg: String): SchemaColumnsDropdown = copy(notFoundContent = Some(msg))
  def allowClearSelection(): SchemaColumnsDropdown = copy(allowClear = Some(true))
  def withSearchEnabled(): SchemaColumnsDropdown = this.copy(showSearch = Some(true))
  def showErrorsFor(binding: String, bindings: String*): SchemaColumnsDropdown =
    copy(errorBindings = List(binding) ::: bindings.toList)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    schema.foreach(schema ⇒ properties("schema") = JsString(propertyPath(schema, context)))
    disabled.foreach(disabled ⇒ properties("disabled") = JsBoolean(disabled))
    placeholder.foreach(pholder ⇒ properties("placeholder") = JsString(pholder))
    mode.foreach(selectionType ⇒ properties("mode") = JsString(selectionType))
    notFoundContent.foreach(msg ⇒ properties("notFoundContent") = JsString(msg))
    showSearch.foreach(flag ⇒ properties("showSearch") = JsBoolean(flag))
    allowClear.foreach(flag ⇒ properties("allowClear") = JsBoolean(flag))
    if (errorBindings.nonEmpty) {
      val staticBindings =
        errorBindings.map(bindingPath ⇒
          JsString(
            propertyPath(bindingPath, context)
              .replace("${", "")
              .replace("}", "")
          )
        )
      properties("errorBindings") = JsArray(staticBindings)
    }
    JsObject(properties)
  }

}

/* ----------------------------------------------------- BUTTONS ---------------------------------------------------- */
// Todo: ButtonType should be Enum

sealed trait ButtonVariant extends enumeratum.EnumEntry

object ButtonVariant extends enumeratum.Enum[ButtonVariant] {
  case object primary extends ButtonVariant
  case object secondary extends ButtonVariant
  case object secondaryGrey extends ButtonVariant
  case object tertiary extends ButtonVariant
  case object tertiaryGrey extends ButtonVariant
  case object link extends ButtonVariant
  case object linkGrey extends ButtonVariant
  case object plain extends ButtonVariant
  override val values: immutable.IndexedSeq[ButtonVariant] = findValues
}
sealed trait ButtonSize extends enumeratum.EnumEntry
object ButtonSize extends enumeratum.Enum[ButtonSize] {
  case object xs extends ButtonSize
  case object s extends ButtonSize
  case object m extends ButtonSize
  case object l extends ButtonSize
  case object xl extends ButtonSize
  override val values: immutable.IndexedSeq[ButtonSize] = findValues
}

sealed trait ButtonShape extends enumeratum.EnumEntry
object ButtonShape extends enumeratum.Enum[ButtonShape] {
  case object default extends ButtonShape
  case object circle extends ButtonShape
  override val values: immutable.IndexedSeq[ButtonShape] = findValues
}

case class Button(
                   title: String,
                   variant: Option[ButtonVariant] = Some(ButtonVariant.secondaryGrey),
                   shape: Option[ButtonShape] = None,
                   size: Option[ButtonSize] = None,
                   style: Option[Map[String, String]] = None,
                   children: List[Element] = Nil,
                   onClick: Option[Any ⇒ Any] = None,
                   onClickWithMetadata: Option[(MetadataGraphqlClientWrapper, Any) ⇒ DiagnosticsOr[Any]] = None,
                   actionName: Option[String] = None,
                   danger: Option[Boolean] = None,
                   block: Option[Boolean] = None
                 ) extends Container[Element] {
  override def kind: String = "Atoms.Button"

  def addElement(child: Element): Button = copy(children = child :: children)

  def bindOnClick(onClick: Any ⇒ Any): Button = copy(onClick = Some(onClick))

  def bindOnClick(onClickWithMetadata: (MetadataGraphqlClientWrapper, Any) ⇒ DiagnosticsOr[Any]): Button =
    copy(onClickWithMetadata = Some(onClickWithMetadata))

  def onClick(onClick: Any ⇒ Any): Button = copy(onClick = Some(onClick))

  def onClick(onClickWithMetadata: (MetadataGraphqlClientWrapper, Any) ⇒ DiagnosticsOr[Any]): Button =
    copy(onClickWithMetadata = Some(onClickWithMetadata))

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    variant.foreach(t => properties("variant") = JsString(t.entryName))
    shape.foreach(shape => properties("shape") = JsString(shape.entryName))
    size.foreach(size ⇒ properties("size") = JsString(size.entryName))
    style.foreach(style => properties("style") = Json.toJson(style))
    danger.foreach(danger => properties("danger") = Json.toJson(danger))
    block.foreach(block => properties("block") = Json.toJson(block))
    if (onClick.isDefined || onClickWithMetadata.isDefined)
      properties("actions") = JsArray(List(JsString(actionName.getOrElse("onButtonClick"))))
    JsObject(properties)
  }
}

case class SimpleButtonLayout(
                               label: String,
                               onClick: Option[Any ⇒ Any] = None,
                               onClickWithMetadata: Option[(MetadataGraphqlClientWrapper, Any) ⇒ DiagnosticsOr[Any]] = None
                             ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def children: List[Element] = ???
}

object SimpleButtonLayout {
  def apply(
             label: String,
             onClick: Option[Any ⇒ Any] = None,
             onClickWithMetadata: Option[(MetadataGraphqlClientWrapper, Any) ⇒ DiagnosticsOr[Any]] = None
           ): StackLayout = {
    val primaryButton = Button(label, children = List(NativeText(label)))

    val buttonWithCB = onClick match {
      case Some(cb) ⇒ primaryButton.onClick(cb)
      case None ⇒ primaryButton
    }

    val buttonWithMetadataCB = onClickWithMetadata match {
      case Some(cb) ⇒ buttonWithCB.onClick(cb)
      case None ⇒ buttonWithCB
    }

    val finalButton: StackLayout = StackLayout(alignY = Some("start"))
      .addElement(
        buttonWithMetadataCB
      )
    finalButton
  }
}

case class TextButtonLayout(
                             label: String,
                             additionalText: String,
                             onClick: Option[Any ⇒ Any] = None
                           ) extends Container[Element] {
  override def kind: String = "Layouts.Stack"
  override def children: List[Element] = ???
}

object TextButtonLayout {
  def apply(
             label: String,
             additionalText: String,
             actionName: Option[String],
             onClick: Option[Any ⇒ Any]
           ): StackLayout = {
    val primaryButton =
      Button(
        label,
        variant = Some(ButtonVariant.tertiaryGrey),
        children = List(NativeText(label)),
        actionName = actionName
      )

    val buttonWithCB = onClick match {
      case Some(cb) ⇒ primaryButton.onClick(cb)
      case None ⇒ primaryButton
    }
    val finalButton: StackLayout =
      StackLayout(align = Some("center"), alignY = Some("center"), direction = Some("horizontal"))
        .addElement(NativeText(additionalText))
        .addElement(buttonWithCB)
    finalButton
  }
}

/* ----------------------------------------------------- DIALOG ----------------------------------------------------- */

case class Dialog(
                   title: String,
                   contentChildren: List[Element] = Nil,
                   footer: Element = DialogFooter(),
                   onOpenCallback: Option[OnOpenCallback] = None,
                   disableProcessRename: Option[Boolean] = None
                 ) extends Container[Element] {
  UISpec.resetId
  def kind: String = "Dialogs.Container"

  def addFooter(element: Element): Dialog = copy(footer = element)

  def children: List[Element] = List(
    footer,
    DialogContent(contentChildren),
    DialogTitle(title, disableRename = disableProcessRename)
  )

  def addElement(element: Element): Dialog = copy(contentChildren = element :: contentChildren)

  def addOnOpenCallback(onOpenCallback: OnOpenCallback): Dialog =
    copy(onOpenCallback = Some(onOpenCallback))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value

    val actions = mutable.ListBuffer[String]()
    onOpenCallback.foreach { onOpenCallback =>
      properties("didOpenBlocking") = JsBoolean(onOpenCallback.isBlocking)
      actions += "didOpen"
    }
    if (actions.nonEmpty) properties("actions") = JsArray(actions.map(x ⇒ JsString(x)))

    JsObject(properties.toList)
  }
}

sealed trait DialogElement extends Element {}

case class DialogTitle(title: String, property: Option[String] = None, disableRename: Option[Boolean] = None)
  extends DialogElement
    with Atom[DialogTitle] {
  def kind: String = "Dialogs.Title"
  def bindProperty(property: String): DialogTitle = copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    // Todo: Finalise the use of slug
    // Todo: Title should not be a variable in the Atom
    properties("title") = JsString(propertyPath("component.metadata.label", context))
    disableRename.foreach(disabled ⇒ properties("disabled") = JsBoolean(disabled))
    Json.toJsObject(properties)
  }

}

case class DialogContent(children: List[Element] = Nil) extends DialogElement with Container[Element] {
  def kind: String = "Dialogs.Content"
}

case class DialogFooter(children: List[Element] = Nil) extends DialogElement with Container[Element] {
  def kind: String = "Dialogs.Footer"
}

case class OnOpenCallback(
                           onOpen: (MetadataGraphqlClientWrapper, Any) => DiagnosticsOr[Any],
                           isBlocking: Boolean = false,
                           property: Option[String] = None
                         ) extends Atom[OnOpenCallback] {
  def kind: String = "Dialogs.OnOpenCallback"

  override def title: String = "OnOpen"

  override def bindProperty(property: String): OnOpenCallback = ???

  def setBlocking(): OnOpenCallback = copy(isBlocking = true)

  def setNonBlocking(): OnOpenCallback = copy(isBlocking = false)
}

/* -------------------------------------------------- DATASET DIALOG ------------------------------------------------ */

// TODO JSON
case class DatasetDialog(title: String, sections: List[DatasetDialogSection] = Nil)
  extends Container[DatasetDialogSection] {
  def kind: String = "DatasetDialogs"
  def children: List[DatasetDialogSection] = sections

  def addSection(title: String, element: Element): DatasetDialog =
    copy(sections = sections ::: DatasetDialogSection(title, Some(element)) :: Nil)
}

case class DatasetDialogSection(title: String, spec: Option[Element] = None) extends Container[Element] {
  def kind: String = "DatasetDialogs.Section"
  def children: List[Element] = Nil
  override def getContainerChildren: List[Element] = spec.toList

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    spec.foreach(spec ⇒ properties("spec") = spec.json(context))
    JsObject(properties)
  }

  override def json(context: PropertyContext): JsObject = Json.obj(
    "id" → id,
    "title" → title
  ) ++ jsonProperties(context)
}

/* ------------------------------------------------------ TABS ------------------------------------------------------ */

case class Tabs(property: Option[String] = None, children: List[TabPane] = Nil) extends Container[TabPane] {
  override def kind: String = "Atoms.Tabs"
  def addTabPane(tab: TabPane): Tabs = copy(children = tab :: children)
  def addTabPanes(tabs: List[TabPane]): Tabs = copy(children = tabs ::: children)

  def bindProperty(property: String): Tabs = copy(property = Some(property))

  override protected def jsonProperties(context: PropertyContext): JsObject =
    property.map(property ⇒ Json.obj("activeKey" → propertyPath(property, context))).getOrElse(JsObject.empty)
}

case class TabPane(label: String, key: String, property: Option[String] = None, children: List[Element] = Nil)
  extends Container[Element] {
  def kind: String = "Atoms.Tabs.TabPane"
  def addElement(element: Element): TabPane = copy(children = element :: children)
  // def addTab(tab:            Tab):    TabPane = copy(children = tab :: children)
  def bindProperty(property: String): TabPane = copy(property = Some(property))

  override protected def jsonProperties(context: PropertyContext): JsObject = Json.obj("tab" → label, "key" → key)

}

case class PortSchemaTabs(
                           selectedFieldsProperty: Option[String] = None,
                           property: Option[String] = None,
                           minNumberOfPorts: Int = 0,
                           allowInportRename: Boolean = false,
                           allowInportAddDelete: Boolean = false,
                           allowOutportRename: Boolean = false,
                           allowOutportAddDelete: Boolean = false,
                           editableInput: Option[Boolean] = None,
                           editableOutput: Option[Boolean] = None,
                           allowSelection: Boolean = false,
                           singleColumnClickCallback: Option[(String, String, Any) ⇒ Any] = None,
                           allColumnsSelectionCallback: Option[(String, Any) ⇒ Any] = None,
                           children: List[TabPane] = Nil,
                           selectionProperty: Option[String] = None,
                           showSelectAllColumns: Boolean = true // Flag for "Add all" button in port schema tab.
                         ) extends Container[TabPane] {
  def kind: String = "Atoms.Tabs"

  /**
   * propertyPath should bind to a bool property.
   * If the value at propertyPath is true, then user would be able to click on column names,
   * else this decision would be taken based on whether callbacks are defined.
   * If yes, allow clicking, else no
   * @param propertyPath
   * @return
   */
  def allowColumnClickBasedOn(propertyPath: String): PortSchemaTabs = copy(selectionProperty = Some(propertyPath))
  def hideSelectAllColumnsButton(): PortSchemaTabs = copy(showSelectAllColumns = false)

  private val ip0: PortSchema =
    if (selectionProperty.isDefined)
      PortSchema(property = property, showSelectAllColumns = showSelectAllColumns)
        .asInput(allowColumnSelectionProperty = selectionProperty)
        .withMinimumPorts(minNumberOfPorts)
    else {
      val isSelectionAllowed = singleColumnClickCallback.isDefined || allColumnsSelectionCallback.isDefined
      PortSchema(property = property, showSelectAllColumns = showSelectAllColumns)
        .asInput(Some(isSelectionAllowed))
        .withMinimumPorts(minNumberOfPorts)
    }

  private val ip1: PortSchema = editableInput match {
    case None ⇒
      ip0
        .withRenamePortsEnabled(allowInportRename)
        .withAddOrDeletePortsEnabled(allowInportAddDelete)
    case Some(editableFlag) ⇒
      ip0
        .withRenamePortsEnabled(editableFlag)
        .withAddOrDeletePortsEnabled(editableFlag)
  }

  private val ip2 = selectedFieldsProperty match {
    case Some(property) ⇒ ip1.bindSelectedFieldsProperty(property)
    case None ⇒ ip1
  }
  private val ip3 = singleColumnClickCallback match {
    case Some(cb) ⇒ ip2.bindOnColumnClicked(cb)
    case None ⇒ ip2
  }

  private val inputPortSchema = allColumnsSelectionCallback match {
    case Some(cb) ⇒ ip3.bindOnAllColumnsClicked(cb)
    case None ⇒ ip3
  }

  private val op0: PortSchema = PortSchema(
    allowSelection = Some(allowSelection),
    property = property
  ).asOutput()

  val op: PortSchema = editableOutput match {
    case None ⇒
      op0
        .withRenamePortsEnabled(allowOutportRename)
        .withAddOrDeletePortsEnabled(allowOutportAddDelete)
    case Some(editableFlag) ⇒
      op0
        .withRenamePortsEnabled(editableFlag)
        .withAddOrDeletePortsEnabled(editableFlag)
  }

  def importSchema(): Tabs = {
    Tabs()
      .addTabPane(TabPane("Input", "Input").addElement(inputPortSchema))
      .addTabPane(TabPane("Output", "Output").addElement(op))
  }
}
/* ---------------------------------------------- JOB EDITOR CONFIGURATION ------------------------------------------ */

case class PipelineConfigurationTable(
                                       title: String,
                                       property: Option[String] = None,
                                       schemaProperty: String,
                                       selectedInstanceProperty: String,
                                       instancesProperty: String,
                                       overridesProperty: String
                                     ) extends Atom[PipelineConfigurationTable] {

  override def bindProperty(property: String): PipelineConfigurationTable = this.copy(property = Some(property))
  override def kind: String = "Atoms.PipelineConfiguration"

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    props("schema") = JsString(schemaProperty)
    props("selectedInstance") = JsString(selectedInstanceProperty)
    props("instances") = JsString(instancesProperty)
    props("overrides") = JsString(overridesProperty)
    JsObject(props)
  }
}

/* ------------------------------------------------------ TABLE ----------------------------------------------------- */

/**
 * @param label
 * @param key
 * @param component
 * @param width
 * @param align can take values `left`, `right`, and `center`
 */
case class Column(
                   label: String,
                   key: String,
                   component: Option[Element] = None,
                   width: String = "1fr",
                   align: Option[String] = None,
                   filter: Option[ColumnFilter] = None
                 ) {
  def json: JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props("label") = JsString(label)
    props("key") = JsString(key)
    props("width") = JsString(width)
    filter.foreach(filter => props("filter") = filter.json)
    align.foreach(_align ⇒ props("align") = JsString(_align))
    component.foreach(component ⇒ props("component") = component.json(PropertyContext.DEFAULT))
    JsObject(props)
  }

}

sealed trait FilterType extends enumeratum.EnumEntry
object FilterType extends enumeratum.Enum[FilterType] {
  case object search extends FilterType
  case object list extends FilterType
  override def values: immutable.IndexedSeq[FilterType] = findValues
}

case class ColumnFilter(`type`: FilterType = FilterType.list) {

  def json: JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props("type") = JsString(`type`.entryName)
    JsObject(props)
  }

}

/**
 * @param title
 * @param property
 * @param columns
 * @param delete
 * @param height
 * @param footer
 * @param newRowData
 * @param appendNewRow
 * @param emptyText : Text shown when table does not contain any element
 */
case class BasicTable(
                       title: String,
                       property: Option[String] = None,
                       columns: List[Column] = Nil,
                       delete: Boolean = true,
                       height: Option[String] = None,
                       footer: List[Element] = Nil,
                       newRowData: JsValue = JsNull,
                       appendNewRow: Boolean = true,
                       emptyText: Option[String] = None,
                       virtualize: Option[Boolean] = None,
                       targetColumnKey: Option[String] = None
                     ) extends Atom[BasicTable] {
  override def kind: String = "Atoms.Table"
  override def propertyKey: String = "data"
  override def bindProperty(property: String): BasicTable = this.copy(property = Some(property))

  def addColumn(col: Column): BasicTable = copy(columns = col :: columns)
  def addFooter(element: Element): BasicTable = copy(footer = element :: footer)
  def setEmptyContainerText(text: String): BasicTable = copy(emptyText = Some(text))
  def withRowId(): BasicTable = copy(virtualize = Some(true))
  def withNewRowData(data: JsValue): BasicTable = copy(newRowData = data)

  override def getTemplateElements: List[Element] = footer

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    val colJsons = columns.map(col ⇒ col.json)

    val colsWithDelete =
      if (colJsons.nonEmpty && delete) {
        colJsons ++ List(Json.obj("type" → JsString("delete")))
      } else
        colJsons

    props("newRowData") = newRowData
    props("appendNewRow") = JsBoolean(appendNewRow)
    props("columns") = JsArray(colsWithDelete)
    props("footer") = JsArray(footer.map(_footer ⇒ _footer.json(context)))
    height.foreach(height ⇒ props("height") = JsString(height))
    emptyText.foreach(emptyText ⇒ props("emptyText") = JsString(emptyText))
    targetColumnKey.foreach(targetColumnKey ⇒ props("targetColumnKey") = JsString(targetColumnKey))
    virtualize.foreach(virtualize ⇒ props("virtualize") = JsBoolean(virtualize))
    JsObject(props)
  }

}

/* ------------------------------------------------ EXPRESSION TABLE ------------------------------------------------ */
case class ExpTable(
                     title: String,
                     targetColumn: Column = Column("Target Column", "target", Some(TextBox("", ignoreTitle = true)), width = "30%"),
                     expressionColumn: Column = Column(
                       "Expression",
                       "expression.expression",
                       Some(ExpressionBox(ignoreTitle = true).bindPlaceholders().withSchemaSuggestions())
                     ),
                     property: Option[String] = None,
                     delete: Boolean = true,
                     height: Option[String] = None,
                     footer: List[Element] = Nil,
                     newRowData: JsValue = JsNull,
                     appendNewRow: Boolean = true,
                     virtualize: Option[Boolean] = None,
                     targetColumnKey: Option[String] = Some("target")
                   ) extends Atom[ExpTable] {

  override def kind: String = "Atoms.Table"
  override def propertyKey: String = "data"
  override def bindProperty(property: String): ExpTable = this.copy(property = Some(property))

  def withSchemaSuggestions(): ExpTable = {
    val currentExpressionBox = expressionColumn.component.get.asInstanceOf[ExpressionBox]
    copy(expressionColumn = expressionColumn.copy(component = Some(currentExpressionBox.withSchemaSuggestions())))
  }

  def withRowId(): ExpTable = copy(virtualize = Some(true))
  def setTargetColumnKey(columnName: String): ExpTable = copy(targetColumnKey = Some(columnName))
  def columns: List[Column] = targetColumn :: expressionColumn :: Nil
  def addFooter(element: Element): ExpTable = copy(footer = element :: footer)

  def withCopilotEnabledExpressions(copilotSpec: CopilotSpec): ExpTable =
    copy(expressionColumn = expressionColumn.copy(component = expressionColumn.component.map {
      case expressionBox: ExpressionBox => expressionBox.withCopilot(copilotSpec)
      case x                            => x
    }))

  def allowCopilotExpressionsFix(): ExpTable =
    copy(expressionColumn = expressionColumn.copy(component = expressionColumn.component.map {
      case expressionBox: ExpressionBox => expressionBox.allowFixWithCopilot()
      case x                            => x
    }))

  override def getTemplateElements: List[Element] = footer

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    val colJsons = columns.map(col ⇒ col.json)
    val colsWithDelete =
      if (colJsons.nonEmpty && delete) {
        colJsons ++ List(Json.obj("type" → JsString("delete")))
      } else
        colJsons

    val tgKey: String =
      if (targetColumnKey.isEmpty) {
        targetColumn.key
      } else {
        targetColumnKey.get
      }
    props("newRowData") = newRowData
    props("appendNewRow") = JsBoolean(appendNewRow)
    props("columns") = JsArray(colsWithDelete)
    props("footer") = JsArray(footer.map(_footer ⇒ _footer.json(context)))
    props("targetColumnKey") = JsString(tgKey)
    height.foreach(height ⇒ props("height") = JsString(height))
    virtualize.foreach(virtualize ⇒ props("virtualize") = JsBoolean(virtualize))
    JsObject(props)
  }

}

sealed trait RowLabel extends enumeratum.EnumEntry

object RowLabel extends enumeratum.Enum[RowLabel] {
  case object Column extends RowLabel
  override def values: immutable.IndexedSeq[RowLabel] = findValues
}

/* ------------------------------------------------ CODE TABLE ------------------------------------------------ */
case class CodeTable(
                      title: String,
                      targetColumn: Option[Column] = None,
                      expressionColumn: Column = Column(
                        "Expression",
                        "expression.expression",
                        Some(ExpressionBox(ignoreTitle = true).bindPlaceholders().withSchemaSuggestions())
                      ),
                      property: Option[String] = None,
                      delete: Boolean = false,
                      height: Option[String] = None,
                      footer: List[Element] = Nil,
                      newRowData: JsValue = JsNull,
                      appendNewRow: Boolean = true,
                      virtualize: Option[Boolean] = None,
                      targetColumnKey: Option[String] = None,
                      delay: Option[Int] = None,
                      newRowLabel: Option[RowLabel] = Some(RowLabel.Column)
                    ) extends Atom[CodeTable] {

  override def kind: String = "Atoms.CodeTable"
  override def propertyKey: String = "data"
  override def bindProperty(property: String): CodeTable = this.copy(property = Some(property))

  def setTargetColumnKey(columnName: String): CodeTable = copy(targetColumnKey = Some(columnName))
  def withSchemaSuggestions(): CodeTable = {
    val currentExpressionBox = expressionColumn.component.get.asInstanceOf[ExpressionBox]
    copy(expressionColumn = expressionColumn.copy(component = Some(currentExpressionBox.withSchemaSuggestions())))
  }

  def withRowId(): CodeTable = copy(virtualize = Some(true))

  def withNewRowData(data: JsValue): CodeTable = copy(newRowData = data)

  def columns: List[Column] = (targetColumn :: Some(expressionColumn) :: Nil).collect {
    case Some(c) => c
  }
  def addFooter(element: Element): CodeTable = copy(footer = element :: footer)
  override def getTemplateElements: List[Element] = footer

  def withDelay(delay: Int): CodeTable =
    copy(delay = Some(delay))

  def withLabel(label: RowLabel): CodeTable =
    copy(newRowLabel = Some(label))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    val colJsons = columns.map(col ⇒ col.json)
    val colsWithDelete =
      if (colJsons.nonEmpty && delete) {
        colJsons ++ List(Json.obj("type" → JsString("delete")))
      } else
        colJsons

    props("newRowData") = newRowData
    props("appendNewRow") = JsBoolean(appendNewRow)
    props("columns") = JsArray(colsWithDelete)
    props("footer") = JsArray(footer.map(_footer ⇒ _footer.json(context)))
    if (targetColumnKey.isEmpty) {
      if (targetColumn.nonEmpty) {
        props("targetColumnKey") = JsString(targetColumn.get.key)
      }
    } else {
      props("targetColumnKey") = JsString(targetColumnKey.get)
    }

    newRowLabel.foreach(label => "newRowLabel" -> JsString(label.entryName))
    height.foreach(height ⇒ props("height") = JsString(height))
    virtualize.foreach(virtualize ⇒ props("virtualize") = JsBoolean(virtualize))
    delay.foreach(flag ⇒ props("delay") = JsNumber(flag))
    JsObject(props)
  }

}

/* ------------------------------------------------ MACRO TABLE ------------------------------------------------ */
case class MacroInstance(
                          title: String,
                          property: Option[String] = None,
                          ports: Option[String] = None,
                          name: Option[String] = None,
                          projectName: Option[String] = None
                        ) extends Atom[MacroInstance] {

  override def kind: String = "MacroInstance"
  override def bindProperty(property: String): MacroInstance = this.copy(property = Some(property))

  def withSchemaSuggestions(): MacroInstance = copy(ports = Some("component.ports.inputs"))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    ports.foreach(ports ⇒ properties("ports") = JsString(propertyPath(ports, context)))
    name.foreach(ports ⇒ properties("macro") = JsString(propertyPath(ports, context)))
    projectName.foreach(ports ⇒ properties("projectName") = JsString(propertyPath(ports, context)))
    JsObject(properties)
  }

}

/* ----------------------------------------------------- LAYOUTS ---------------------------------------------------- */
case class ColumnsLayout(
                          gap: Option[String] = None,
                          alignY: Option[String] = None,
                          height: Option[String] = None,
                          children: List[Element] = Nil
                        ) extends Container[Element] {
  def kind: String = "Layouts.Columns"
  def addColumn(column: Element, width: String = "1fr", overflow: Option[String] = None): ColumnsLayout = {
    val child = ColumnLayout(column :: Nil, width, overflow)
    copy(children = child :: children)
  }

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value

    gap.foreach(gap ⇒ properties("gap") = JsString(gap))
    alignY.foreach(alignY ⇒ properties("alignY") = JsString(alignY))
    height.foreach(height ⇒ properties("height") = JsString(height))

    Json.toJsObject(properties)
  }
}

//  Todo: Check if width is optional
//  todo: overflow is passed only for schema transform expression box
//  re-evaluate the need to this property with UI team, apart from this

case class ColumnLayout(
                         children: List[Element] = Nil,
                         width: String = "1fr",
                         overflow: Option[String] = None,
                         style: Option[Map[String, String]] = None,
                         padding: Option[String] = None
                       ) extends Container[Element] {
  def kind: String = "Layouts.Columns.Column"
  def addElement(child: Element): ColumnLayout = copy(children = child :: children)

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties("width") = JsString(width)
    overflow.foreach(overflow ⇒ properties("overflow") = JsString(overflow))
    style.foreach(style => properties("style") = Json.toJson(style))
    padding.foreach(padding ⇒ properties("padding") = JsString(padding))
    JsObject(properties)
  }
}

// Todo: Direction can take only two values, it can be defined as Enum
case class StackLayout(
                        gap: Option[String] = Some("1rem"),
                        direction: Option[String] = None,
                        align: Option[String] = None,
                        width: Option[String] = None,
                        alignY: Option[String] = None,
                        height: Option[String] = None,
                        children: List[Element] = Nil,
                        padding: Option[String] = None,
                        style: Option[Map[String, String]] = None,
                        template: Option[Element] = None
                      ) extends Container[Element] {
  def kind: String = "Layouts.Stack"
  def addElement(child: Element): StackLayout = copy(children = child :: children)
  def addStackItem(child: Element): StackLayout = copy(children = child :: children)
  def addTemplate(template: Element): StackLayout = copy(template = Some(template))

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    gap.foreach(gap ⇒ properties("gap") = JsString(gap))
    direction.foreach(direction ⇒ properties("direction") = JsString(direction))
    align.foreach(align ⇒ properties("align") = JsString(align))
    width.foreach(width => properties("width") = JsString(width))
    alignY.foreach(alignY ⇒ properties("alignY") = JsString(alignY))
    height.foreach(height ⇒ properties("height") = JsString(height))
    template.foreach(template ⇒ properties("template") = template.json(context))
    style.foreach(style => properties("style") = Json.toJson(style))
    padding.foreach(padding ⇒ properties("padding") = JsString(padding))
    JsObject(properties)
  }
}

case class StackItem(
                      children: List[Element] = Nil,
                      grow: Option[Int] = Some(0),
                      shrink: Option[Int] = Some(1),
                      basis: Option[String] = Some("auto"),
                      style: Option[Map[String, String]] = None
                    ) extends Container[Element] {
  override def kind: String = "Layouts.StackItem"
  def addElement(child: Element): StackItem = copy(children = child :: children)

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    grow.foreach(grow ⇒ properties("grow") = JsNumber(grow))
    shrink.foreach(shrink ⇒ properties("shrink") = JsNumber(shrink))
    basis.foreach(basis ⇒ properties("basis") = JsString(basis))
    style.foreach(style => properties("style") = Json.toJson(style))
    Json.toJsObject(properties)
  }

}

case class OptionField(key: String, field: Element, hideDelete: Boolean = false)
case class FieldPicker(
                        children: List[Element] = Nil,
                        fields: List[OptionField] = Nil,
                        height: Option[String] = None,
                        title: Option[String] = None
                      ) extends Container[Element] {
  override def kind: String = "Atoms.FieldPicker"
  def addField[AtomType <: Atom[AtomType]](
                                            child: Atom[AtomType],
                                            key: String,
                                            hideDelete: Boolean = false
                                          ): FieldPicker =
    copy(fields = OptionField(key, child.bindProperty(key), hideDelete) :: fields)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("dataset") = JsString(propertyPath("", context))
    val fieldValues = fields.reverseMap { field ⇒
      val fieldProperties = mutable.Map.empty[String, JsValue]
      fieldProperties("key") = JsString(field.key)
      fieldProperties("field") = field.field.json(context)
      if (field.hideDelete) fieldProperties("hideDelete") = JsTrue
      Json.toJsObject(fieldProperties)
    }
    properties("fields") = JsArray(fieldValues)
    height.foreach(h => properties("height") = JsString(h))
    title.foreach(t => properties("title") = JsString(t))
    Json.toJsObject(properties)
  }
}

/* ----------------------------------------------------- LISTS ------------------------------------------------------ */

// Todo: We remove the ListItemDelete and we should add a property in OrderedList for the delete
// funtionality
case class ListItemDelete(title: String, rowIdentifier: Option[String] = Some("record")) extends Atom[ListItemDelete] {
  override def kind: String = "Atoms.ListRowDeleteButton"
  override def property: Option[String] = None

  override def bindProperty(property: String): ListItemDelete = this

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value

    rowIdentifier.foreach(rowIdentifier ⇒ properties("rowIdentifier") = JsString(rowIdentifier))
    JsObject(properties)
  }

}

case class OrderedList(
                        title: String,
                        property: Option[String] = None,
                        rowTemplate: List[Element] = Nil,
                        emptyText: Option[String] = None,
                        virtualize: Option[Boolean] = None
                      ) extends Atom[OrderedList] {
  def kind: String = "Atoms.List"
  def rowIdentifier = s"record"

  override def propertyKey: String = "data"

  def addElement(element: Element): OrderedList = copy(rowTemplate = element :: rowTemplate)
  def setEmptyContainerText(text: String): OrderedList = copy(emptyText = Some(text))
  def withRowId(): OrderedList = copy(virtualize = Some(true))
  def bindProperty(property: String): OrderedList =
    copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("rowIdentifier") = JsString(rowIdentifier)
    properties("rowIdentifier") = JsString(rowIdentifier)
    emptyText.foreach(emptyText ⇒ properties("emptyText") = JsString(emptyText))

    val rows =
      rowTemplate.map(rowTemplate ⇒ rowTemplate.json(context))
    properties("rowTemplate") = JsArray(rows)

    virtualize.foreach(virtualize ⇒ properties("virtualize") = JsBoolean(virtualize))
    JsObject(properties)
  }
}

/* ----------------------------------------------------- ENUMS ------------------------------------------------------ */

case class Enum(options: List[EnumOption] = Nil) extends Container[EnumOption] {
  def kind: String = "Enum.Container"
  def addOption(option: EnumOption): Enum = copy(options = option :: options)
  def children: List[EnumOption] = options
}

case class EnumOption(title: String, element: Option[Element] = None) extends Container[Element] {
  def kind: String = "Enum.Option"
  def withElement(element: Element): EnumOption = copy(element = Some(element))
  def children: List[Element] = element.toList

  override protected def jsonProperties(context: PropertyContext): JsObject = Json.obj("title" → title)
}

/* -------------------------------------------------- CONDITIONS ---------------------------------------------------- */
trait Expr {
  def json: JsValue
  def propertyPathExpr(context: PropertyContext): JsValue
}
case class PropExpr(value: String) extends Expr {
  override def json: JsValue = JsString(s"$${$value}")

  override def propertyPathExpr(context: PropertyContext): JsString = {
    val property = this.value

    if (property.startsWith("component.properties") && (context.prefix != "")) {
      val propName = property.substring("component.properties.".length)
      JsString(s"$${component.properties.${context.prefix}.$propName}")
    } else
      JsString(s"$${$property}")
  }
}

case class StringExpr(value: String) extends Expr {
  override def json: JsValue = JsString(value)
  override def propertyPathExpr(context: PropertyContext): JsValue = this.json
}

case class BooleanExpr(value: Boolean) extends Expr {
  override def json: JsValue = JsBoolean(value)
  override def propertyPathExpr(context: PropertyContext): JsValue = this.json
}

case class Condition(
                      property: Option[String] = None,
                      leftProp: Option[Expr] = None,
                      rightProp: Option[Expr] = None,
                      consequent: List[Element] = Nil,
                      alternate: List[Element] = Nil,
                      condition: String = "Exists"
                    ) extends Atom[Condition] {
  override def title: String = "Condition"
  override def kind: String = "Condition"
  override def getTemplateElements: List[Element] = consequent ::: alternate

  def bindProperty(property: String): Condition = copy(property = Some(property))

  val conditionSpecifics = Map(
    "Exists" → Map("operator" → "Unary", "leftKey" → "test", "rightKey" → ""),
    "InList" → Map("operator" → "PresentInList", "leftKey" → "test_value", "rightKey" → "test_list"),
    "Equal" → Map("operator" → "Equal", "leftKey" → "test_left", "rightKey" → "test_right"),
    "NotEqual" → Map("operator" → "NotEqual", "leftKey" → "test_left", "rightKey" → "test_right")
  )

  def ifExists(existProp: Expr): Condition =
    copy(leftProp = Some(existProp), condition = "Exists")
  //  def ifInList(existProp: Expr, listProp:ListExpr): Conditional = {
  //    conditionId = "Exists"
  //    copy(leftProp = Some(existProp))
  //  }
  def ifEqual(leftProp: Expr, rightProp: Expr): Condition =
    copy(leftProp = Some(leftProp), rightProp = Some(rightProp), condition = "Equal")
  def ifNotEqual(leftProp: Expr, rightProp: Expr): Condition =
    copy(leftProp = Some(leftProp), rightProp = Some(rightProp), condition = "NotEqual")
  def then(elementsWhenConditionTrue: Element): Condition = copy(consequent = elementsWhenConditionTrue :: Nil)
  def otherwise(elementsWhenConditionFalse: Element): Condition = copy(alternate = elementsWhenConditionFalse :: Nil)
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value

    val conditionSpecificName: Map[String, String] = conditionSpecifics(condition)
    properties("type") = JsString("Ternary")
    properties("operator") = JsString(conditionSpecificName("operator"))
    leftProp.foreach(left ⇒ properties(conditionSpecificName("leftKey")) = left.propertyPathExpr(context))
    rightProp.foreach(right ⇒ properties(conditionSpecificName("rightKey")) = right.propertyPathExpr(context))
    properties("consequent") = JsArray(consequent.map(element ⇒ element.json(context)))
    properties("alternate") = JsArray(alternate.map(element ⇒ element.json(context)))
    JsObject(properties)
  }
}

/* ----------------------------------------------------- Others ------------------------------------------------------ */
case class TitleElement(title: String, level: Option[Int] = None) extends Container[NativeText] {
  def kind: String = "Atoms.Title"
  def children: List[NativeText] = List(NativeText(title))

  def setLevel(level: Int): TitleElement = copy(level = Some(level))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    level.foreach(level ⇒ properties("level") = JsNumber(level))
    Json.toJsObject(properties)
  }

}

case class HorizontalDivider(children: List[Element] = Nil) extends Container[Element] {
  def kind: String = "Atoms.Divider"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("type") = JsString("horizontal")
    Json.toJsObject(properties)
  }
}

case class VerticalDivider(children: List[Element] = Nil) extends Container[Element] {
  def kind: String = "Atoms.Divider"
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("type") = JsString("vertical")
    Json.toJsObject(properties)
  }
}

/* ----------------------------------------------------- Dataset ------------------------------------------------------ */

case class DatasetTemplate(
                            datasetType: String,
                            format: String,
                            docUrl: String,
                            tabs: Either[List[Element], JsArray],
                            componentInfo: Option[JsValue]
                          ) {
  def json(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties("datasetType") = JsString(datasetType)
    properties("format") = JsString(format)
    properties("docUrl") = JsString(
      docUrl
    ) // Adding docUrl here -> https://docs.prophecy.io/low-code-spark/gems/source-target/ by default
    properties("tabs") = tabs match {
      case Left(elements) ⇒
        JsArray(
          elements.map(tab ⇒ tab.json(context))
        )
      case Right(tabsJs) ⇒
        updatePath(tabsJs, context)
    }
    componentInfo.foreach(x => properties("componentInfo") = x)
    JsObject(properties)
  }

  // In python dataformat spec, we only get the dialog json instead of the object.
  // This function updates the paths inside the json to correct paths based on context.
  private def updatePath(value: JsValue, context: PropertyContext): JsValue = {
    value match {
      case array: JsArray ⇒
        JsArray(array.value.map(updatePath(_, context)))
      case obj: JsObject ⇒
        JsObject(obj.value.map(x ⇒ x._1 → updatePath(x._2, context)))
      case str: JsString ⇒
        val pattern = "\\$\\{component.properties(.*)\\}".r
        str.value match {
          case pattern(property) ⇒
            JsString(s"$${component.properties.${context.prefix}${property}}")
          case _ ⇒ str
        }
      case value: JsValue ⇒ value
    }
  }
}

case class AlertBox(
                     variant: String = "warning",
                     banner: Option[Boolean] = Some(false),
                     children: List[Element] = Nil
                   ) extends Container[Element] {
  override def kind: String = "Atoms.Alert"
  def addElement(child: Element): AlertBox = copy(children = child :: children)
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("variant") = JsString(variant)
    banner.foreach(banner ⇒ properties("banner") = JsBoolean(banner))
    Json.toJsObject(properties)
  }
}

case class Dataset(
                    datasetId: Option[String],
                    projects: Option[String],
                    isNewDataset: Option[String],
                    newDatasetName: Option[String],
                    openCreateDatasetDialog: Option[(Any) ⇒ Any] = None,
                    children: List[Element] = Nil
                  ) extends Container[Element] {
  override def kind: String = "Dataset"
  def addElement(child: Element): Dataset = copy(children = child :: children)

  override def json(context: PropertyContext): JsObject = {
    val newDatasetContext = PropertyContext("component", "dataset")
    super.json(newDatasetContext)
  }

  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    datasetId.foreach(t ⇒ properties("datasetId") = JsString(t))
    projects.foreach(projects ⇒ properties("projects") = JsString(projects))
    isNewDataset.foreach(isNewDataset ⇒ properties("isNewDataset") = JsString(isNewDataset))
    newDatasetName.foreach(newDatasetName ⇒ properties("newDatasetName") = JsString(newDatasetName))
    val actions = mutable.ListBuffer[String]()
    openCreateDatasetDialog.map(_ ⇒ actions += "openCreateDatasetDialog")
    properties("actions") = JsArray(actions.map(x ⇒ JsString(x)))
    JsObject(properties)
  }
}

case class DatasetDetail(
                          datasetType: Option[String],
                          format: Option[String],
                          dataFormats: Option[String],
                          dataTypes: Option[String],
                          schema: Option[String],
                          // datasetId: Option[String],
                          // currentDatasetId: Option[String],
                          disabled: Option[String],
                          // basicTemplate: Element,
                          templates: List[DatasetTemplate] = Nil,
                          componentInfo: Option[String] = None
                        ) extends Container[Element] {

  override def kind: String = "DatasetDetail"
  override def children: List[Element] = Nil
  override def getContainerChildren: List[Element] = templates.map(_.tabs).filter(_.isLeft).flatMap(_.left.get)
  def addTemplate(datasetTemplate: DatasetTemplate): DatasetDetail = copy(templates = datasetTemplate :: templates)
  def addTemplates(datasetTemplates: Seq[DatasetTemplate]): DatasetDetail =
    copy(templates = templates ++ datasetTemplates)
  override def json(context: PropertyContext): JsObject = {
    val newDatasetContext = PropertyContext("component", "dataset")
    super.json(newDatasetContext)
  }
  override protected def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]

    properties ++= super.jsonProperties(context).value
    datasetType.foreach(t ⇒ properties("datasetType") = JsString(t))
    format.foreach(format ⇒ properties("format") = JsString(format))
    componentInfo.foreach(componentInfo => properties("componentInfo") = JsString(componentInfo))
    schema.foreach(schema ⇒ properties("schema") = JsString(schema))
    dataFormats.foreach(dataFormats ⇒ properties("dataFormats") = JsString(dataFormats))
    dataTypes.foreach(dataTypes ⇒ properties("dataTypes") = JsString(dataTypes))
    // currentDatasetId.foreach(currentDatasetId ⇒ properties("currentDatasetId") = JsString(currentDatasetId))
    disabled.foreach(disabled ⇒ properties("disabled") = JsString(disabled))
    properties("templates") = JsArray(templates.map(t ⇒ t.json(context)))
    JsObject(properties)
  }

}

case class NewDataset(
                       datasetName: Option[String],
                       datasetType: Option[String],
                       format: Option[String],
                       dataFormats: Option[String],
                       dataTypes: Option[String],
                       schema: Option[String],
                       // basicTemplate: Element,
                       templates: List[DatasetTemplate] = Nil,
                       cancelNewDataset: Option[(Any) ⇒ Any] = None,
                       createNewDataset: Option[(Any) ⇒ Any] = None,
                       componentInfo: Option[String] = None
                     ) extends Container[Element] {

  override def kind: String = "NewDataset"
  override def children: List[Element] = Nil

  def addTemplate(datasetTemplate: DatasetTemplate): NewDataset = copy(templates = datasetTemplate :: templates)
  def addTemplates(datasetTemplates: Seq[DatasetTemplate]): NewDataset = copy(templates = templates ++ datasetTemplates)

  def cancelNewDataset(action: (Any) ⇒ Any): NewDataset = copy(cancelNewDataset = Some(action))
  def createNewDataset(action: (Any) ⇒ Any): NewDataset = copy(createNewDataset = Some(action))

  override def json(context: PropertyContext): JsObject = {
    val newDatasetContext = PropertyContext("component", "newDataset")
    super.json(newDatasetContext)
  }

  override protected def jsonProperties(context: PropertyContext): JsObject = {

    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    datasetName.foreach(t ⇒ properties("datasetName") = JsString(t))
    datasetType.foreach(t ⇒ properties("datasetType") = JsString(t))
    format.foreach(format ⇒ properties("format") = JsString(format))
    componentInfo.foreach(componentInfo => properties("componentInfo") = JsString(componentInfo))
    schema.foreach(schema ⇒ properties("schema") = JsString(schema))
    //    properties("basicTemplate") = basicTemplate.json(context)
    dataFormats.foreach(dataFormats ⇒ properties("dataFormats") = JsString(dataFormats))
    dataTypes.foreach(dataTypes ⇒ properties("dataTypes") = JsString(dataTypes))
    properties("templates") = JsArray(templates.map(t ⇒ t.json(context)))
    val actions = mutable.ListBuffer[String]()
    createNewDataset.map(_ ⇒ actions += "createNewDataset")
    cancelNewDataset.map(_ ⇒ actions += "cancelNewDataset")
    properties("actions") = JsArray(actions.map(x ⇒ JsString(x)))
    JsObject(properties)
  }

}

case class SchemaTable(
                        title: String,
                        readOnly: Boolean = false,
                        allowInferSchema: Boolean = true,
                        property: Option[String] = None
                      ) extends Atom[SchemaTable] {
  def kind: String = "SchemaTable"
  override def propertyKey = "schema"

  def bindProperty(property: String): SchemaTable =
    copy(property = Some(property))

  def isReadOnly(readOnly: Boolean = true): SchemaTable = copy(readOnly = readOnly)
  def withoutInferSchema(): SchemaTable = copy(allowInferSchema = false)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("readOnly") = JsBoolean(readOnly)
    properties("allowInferSchema") = JsBoolean(allowInferSchema)

    JsObject(properties)
  }

}

case class ExpectationTable(title: String, property: Option[String] = None) extends Atom[ExpectationTable] {
  def kind: String = "ExpectationTable"
  override def propertyKey = "expectations"

  def bindProperty(property: String): ExpectationTable =
    copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject =
    Json
      .parse(
        """{"spec": {"id": "13145", "kind": "Layouts.Columns", "properties": {"gap": "1rem", "height": "100%"}, "contains": [{"id": "13146", "kind": "Layouts.Stack", "properties": {"width": "100%", "height": "100%"}, "contains": [{"id": "13147", "kind": "Atoms.DataQuality", "properties": {"height": "100%", "datasetId": "${component.properties.datasetId}", "data": "${component.properties.dataset.expectations}"}}]}, {"id": "13148", "kind": "Layouts.Columns.Column", "properties": {"width": "5fr"}, "contains": [{"id": "13149", "kind": "SchemaTable", "properties": {"title": "", "readOnly": false, "allowInferSchema": true, "schema": "${component.properties.dataset.schema}"}}]}]}, "id": "13150", "title": "EXPECTATIONS"}"""
      )
      .asInstanceOf[JsObject]
  override def json(context: PropertyContext): JsObject =
    Json
      .parse(
        """{"id": "13145", "kind": "Layouts.Columns", "properties": {"gap": "1rem", "height": "100%"}, "contains": [{"id": "13146", "kind": "Layouts.Stack", "properties": {"width": "100%", "height": "100%"}, "contains": [{"id": "13147", "kind": "Atoms.DataQuality", "properties": {"height": "100%", "datasetId": "${component.properties.datasetId}", "data": "${component.properties.dataset.expectations}"}}]}, {"id": "13148", "kind": "Layouts.Columns.Column", "properties": {"width": "5fr"}, "contains": [{"id": "13149", "kind": "SchemaTable", "properties": {"title": "", "readOnly": false, "allowInferSchema": true, "schema": "${component.properties.dataset.schema}"}}]}]}"""
      )
      .asInstanceOf[JsObject]
}

case class PreviewTable(title: String, property: Option[String] = None) extends Atom[PreviewTable] {
  def kind: String = "PreviewTable"
  override def propertyKey = "schema"

  def bindProperty(property: String): PreviewTable =
    copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}

object TargetLocation {
  def apply(pathProperty: String): StackLayout = {
    StackLayout().addElement(
      StackLayout(direction = Some("vertical"), gap = Some("1rem"), height = Some("100bh"))
        .addElement(
          TextBox("Location")
            .bindPlaceholder("Enter location here or navigate through the File Browser")
            .bindProperty(pathProperty)
        )
        .addElement(FileBrowser().hideExecutionErrors().bindProperty(pathProperty))
    )
  }
}

case class ScrollBox(
                      property: Option[String] = None,
                      height: Option[String] = Some("100%"),
                      width: Option[String] = None,
                      children: List[Element] = Nil
                    ) extends Container[Element] {
  def kind: String = "Atoms.ScrollBox"

  def bindProperty(property: String): ScrollBox =
    copy(property = Some(property))
  def addElement(child: Element): ScrollBox = copy(children = child :: children)

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    height.foreach(ht ⇒ properties("height") = JsString(ht))
    width.foreach(wdt ⇒ properties("width") = JsString(wdt))
    JsObject(properties)
  }
}

case class CatalogTableDB(
                           title: String,
                           property: Option[String] = None,
                           tableProperty: Option[String] = None,
                           isCatalogEnabled: Option[String] = None,
                           catalog: Option[String] = None
                         ) extends Atom[CatalogTableDB] {
  def kind: String = "Database"
  override def propertyKey = "database"
  def bindProperty(property: String): CatalogTableDB =
    copy(property = Some(property))
  def bindTableProperty(property: String): CatalogTableDB =
    copy(tableProperty = Some(property))
  def bindIsCatalogEnabledProperty(property: String): CatalogTableDB =
    copy(isCatalogEnabled = Some(property))
  def bindCatalogProperty(property: String): CatalogTableDB =
    copy(catalog = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    tableProperty.foreach(tableProp ⇒ properties("table") = JsString(propertyPath(tableProp, context)))
    isCatalogEnabled.foreach(prop ⇒ properties("isCatalogEnabled") = JsString(propertyPath(prop, context)))
    catalog.foreach(prop ⇒ properties("catalog") = JsString(propertyPath(prop, context)))
    JsObject(properties)
  }
}

case class Credentials(
                        title: String,
                        property: Option[String] = None
                      ) extends Atom[Credentials] {
  def kind: String = "Credentials"
  override def propertyKey = "scope"

  def bindProperty(property: String): Credentials =
    copy(property = Some(property))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    JsObject(properties)
  }
}

case class SecretBox(
                      title: String,
                      property: Option[String] = None,
                      placeholder: String = "",
                      allowPlainText: Option[Boolean] = None
                    ) extends Atom[SecretBox] {
  def kind: String = "Atoms.Secret"

  /**
   * property should be of type SecretValue
   */
  def bindProperty(property: String): SecretBox = copy(property = Some(property))
  def bindPlaceholder(placeHolder: String): SecretBox = copy(placeholder = placeHolder)
  def isPassword(): SecretBox = copy(allowPlainText = Some(false))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val props = mutable.Map.empty[String, JsValue]
    props ++= super.jsonProperties(context).value
    props("title") = JsString(title)
    props("placeholder") = JsString(placeholder)
    allowPlainText.foreach(v ⇒ props("allowPlainText") = JsBoolean(v))
    JsObject(props)
  }
}

sealed trait TooltipVariant extends enumeratum.EnumEntry
object TooltipVariant extends enumeratum.Enum[TooltipVariant] {
  case object default extends TooltipVariant
  case object info extends TooltipVariant
  case object error extends TooltipVariant
  case object warning extends TooltipVariant
  case object success extends TooltipVariant

  override def values: immutable.IndexedSeq[TooltipVariant] = findValues
}

sealed trait IconSize extends enumeratum.EnumEntry
object IconSize extends enumeratum.Enum[IconSize] {
  case object xxxs extends IconSize
  case object xxs extends IconSize
  case object xs extends IconSize
  case object s extends IconSize
  case object m extends IconSize
  case object l extends IconSize

  override def values: immutable.IndexedSeq[IconSize] = findValues
}

case class Hint(
                 title: String,
                 size: Option[IconSize] = None,
                 variant: Option[TooltipVariant] = None,
                 property: Option[String] = None,
                 overlayStyle: Option[Map[String, String]] = None,
                 align: Option[Align] = None,
                 placement: Option[Placement] = None
               ) extends Atom[Hint] {
  def kind: String = "Atoms.Hint"

  override def propertyKey = "scope"

  def bindProperty(property: String): Hint =
    copy(property = Some(property))

  def bindIconSize(iconSize: IconSize): Hint =
    copy(size = Some(iconSize))

  def bindTooltipVariant(tooltipVariant: TooltipVariant): Hint =
    copy(variant = Some(tooltipVariant))

  def setOverlayStyle(overlayStyle: Map[String, String]): Hint = copy(overlayStyle = Some(overlayStyle))

  def withPlacement(placement: Placement): Hint = copy(placement = Some(placement))

  def withAlign(align: Align): Hint = copy(align = Some(align))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("title") = JsString(title)
    variant.foreach(ht ⇒ properties("variant") = JsString(ht.entryName))
    size.foreach(ht ⇒ properties("size") = JsString(ht.entryName))
    overlayStyle.foreach(style => properties("overlayStyle") = Json.toJson(style))
    placement.foreach(pl => properties("placement") = JsString(pl.entryName))
    align.foreach(al => properties("align") = JsString(al.entryName))
    JsObject(properties)
  }
}

case class KeyValuePair(key: String, value: String, property: Option[String] = None) extends Atom[KeyValuePair] {
  def kind: String = "Atoms.KeyValuePair"

  override def title: String = ""
  def bindProperty(property: String) = copy(property = Some(property))
  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("key") = JsString(key)
    properties("value") = JsString(value)
    JsObject(properties)
  }
}

case class KeyValuePairs(
                          property: Option[String] = None,
                          disabled: Boolean = false,
                          readOnly: Boolean = false,
                          placeholder: Option[KeyValuePair] = None
                        ) extends Atom[KeyValuePairs] {
  def kind: String = "Atoms.KeyValuePairs"

  override def title: String = ""

  override def propertyKey: String = "pairs"
  def bindProperty(property: String) = copy(property = Some(property))

  def isReadOnly(readOnly: Boolean = true) = copy(readOnly = readOnly)

  def isDisabled(disabled: Boolean = true) = copy(disabled = disabled)

  def setPlaceholder(keyValuePair: KeyValuePair) = copy(placeholder = Some(keyValuePair))

  override def jsonProperties(context: PropertyContext): JsObject = {
    val properties = mutable.Map.empty[String, JsValue]
    properties ++= super.jsonProperties(context).value
    properties("disabled") = JsBoolean(disabled)
    properties("readOnly") = JsBoolean(readOnly)
    placeholder.foreach(placeholder => properties("placeholder") = placeholder.jsonProperties(context))
    JsObject(properties)
  }

}
