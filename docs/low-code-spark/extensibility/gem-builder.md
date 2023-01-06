---
sidebar_position: 3
title: Gem builder
id: gem-builder
description: Gem-Builder
tags: []
---

Gems are essentially what operations you can perform on you data like reading / writing and all other transformations. 
Please read about prophecy gems here before you start on a gem builder : https://docs.prophecy.io/concepts/gems

Prophecy Data platform can be made more powerful and customised with **Gem Builder**. You can add **your own standard sources, targets and
transforms** to Spark and roll it out to your entire team. You can build **your own frameworks with** custom Data Quality
library, or auditing library. 

<div class="video-container">
<iframe src="https://www.youtube.com/embed/K23pOatAeVE" title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
</div>

<br />

# Gem Builder Tutorial

## Getting Started

//TODO: Showcase workflow to build Gem field

### Introduction

The Gem builder is a tool that enables users to create any custom Gems or modify any existing ones. There are two major categorisation of Gems :

* **Source/Target Gems**: These Gems enable reading and writing of data to various data sources
* **Transform Gems**: These Gems apply transformations/joins/any other custom logic onto any dataframe(s) that are passed into them.

Programmatically, a Gem is a component with the following parts:

* The **Gem UI Component** to get user information from the screen (This code is rendered on the Prophecy UI) 
* The **Gem Code Logic** which is how the Gem acts within the context of a pipeline.

You can write a gem code either using python or scala

### Here is a simple Filter Gem Code example

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
from prophecy.cb.server.base.ComponentBuilderBase import *
from pyspark.sql import *
from pyspark.sql.functions import *

from prophecy.cb.ui.UISpecUtil import getColumnsToHighlight2, validateSColumn
from prophecy.cb.ui.uispec import *
from prophecy.cb.util.StringUtils import isBlank


class Filter(ComponentSpec):
    name: str = "Filter"
    category: str = "Transform"

    def optimizeCode(self) -> bool:
        return True

    @dataclass(frozen=True)
    class FilterProperties(ComponentProperties):
        columnsSelector: List[str] = field(default_factory=list)
        condition: SColumn = SColumn("lit(True)")

    def dialog(self) -> Dialog:
        return Dialog("Filter").addElement(
            ColumnsLayout(height="100%")
                .addColumn(PortSchemaTabs(selectedFieldsProperty=("columnsSelector")).importSchema(), "2fr")
                .addColumn(StackLayout(height=("100%"))
                .addElement(TitleElement("Filter Condition"))
                .addElement(
                Editor(height=("100%")).withSchemaSuggestions().bindProperty("condition.expression")
            ), "5fr"))

    def validate(self, component: Component[FilterProperties]) -> List[Diagnostic]:
        return validateSColumn(component.properties.condition, "condition", component)

    def onChange(self, oldState: Component[FilterProperties], newState: Component[FilterProperties]) -> Component[
        FilterProperties]:
        newProps = newState.properties
        usedColExps = getColumnsToHighlight2([newProps.condition], newState)
        return newState.bindProperties(replace(newProps, columnsSelector=usedColExps))

    class FilterCode(ComponentCode):
        def __init__(self, newProps):
            self.props: Filter.FilterProperties = newProps

        def apply(self, spark: SparkSession, in0: DataFrame) -> DataFrame:
            return in0.filter(self.props.condition.column())
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package io.prophecy.core.instructions.all
import io.prophecy.core.instructions.spec._
import io.prophecy.core.program.WorkflowContext
import org.apache.spark.sql.{DataFrame, SparkSession}

object Filter extends ComponentSpec {
  val name: String = "Filter"
  val category: String = "Transform"
  override def optimizeCode: Boolean = true

    type PropertiesType = FilterProperties
  case class FilterProperties(
    @Property("Columns selector")
    columnsSelector: List[String] = Nil,
    @Property("Filter", "Predicate expression to filter rows of incoming dataframe")
    condition: SColumn = SColumn("lit(true)")
  ) extends ComponentProperties

  def dialog: Dialog = Dialog("Filter")
    .addElement(
      ColumnsLayout(height = Some("100%"))
        .addColumn(
          PortSchemaTabs(selectedFieldsProperty = Some("columnsSelector")).importSchema(),
          "2fr"
        )
        .addColumn(
          StackLayout(height = Some("100%"))
            .addElement(TitleElement("Filter Condition"))
            .addElement(
              Editor(height = Some("100%"))
                .withSchemaSuggestions()
                .bindProperty("condition.expression")
            ),
          "5fr"
        )
    )

  def validate(component: Component)(implicit context: WorkflowContext): List[Diagnostic] = {
    val diagnostics =
      validateSColumn(component.properties.condition, "condition", component)
    diagnostics.toList
  }

  def onChange(oldState: Component, newState: Component)(implicit context: WorkflowContext): Component = {
    val newProps = newState.properties
    val portId = newState.ports.inputs.head.id

    val expressions = getColumnsToHighlight(List(newProps.condition), newState)

    newState.copy(properties = newProps.copy(columnsSelector = expressions))
  }

  class FilterCode(props: PropertiesType)(implicit context: WorkflowContext) extends ComponentCode {

    def apply(spark: SparkSession, in: DataFrame): DataFrame = {
      val out = in.filter(props.condition.column)
      out
    }

  }

}

```

</TabItem>
</Tabs>
````
#### Parent Class
Your Gem class needs to extend a parent class from which it inherits the representation of the overall Gem. This includes the UI and the logic.
For transform Gems you need to extend ComponentSpec (Like in the example above), for Source/Target gem you need to extend DatasetSpec. We will see the difference between the two at the end.

First thing you give after this is the name and category of your gem, Filter and Transform in this example. 

Another thing you see here is optimizeCode. This function returns a `True` or `False` value depending on whether we want the Prophecy Optimizer to run on this code to simplify it. Read more on the Optimizer here. //TODO: Link here
Pass the value as true for this for all practical purposes. 



````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
class Filter(ComponentSpec):
name: str = "Filter"
    category: str = "Transform"
    def optimizeCode(self) -> bool:
        return True
```
</TabItem>

<TabItem value="scala" label="Scala">

```scala
object Filter extends ComponentSpec {
val name: String = "Filter"
val category: String = "Transform"
override def optimizeCode: Boolean = true
```
</TabItem>
</Tabs>

````


#### DatasetProperties Class
There is one class (Here `FilterProperties`) which contains a list of the properties to be made available to the user for this particular Gem. Think of these as all the values a user fills out within the template of this gem.
 (here `columnsSelector`, `condition`)
These properties are available in `validate`, `onChange` and `apply`  and can be set from `dialog`, functions. 

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
@dataclass(frozen=True)
    class FilterProperties(ComponentProperties):
        columnsSelector: List[str] = field(default_factory=list)
        condition: SColumn = SColumn("lit(True)")
```
</TabItem>

<TabItem value="scala" label="Scala">

```scala
object Filter extends ComponentSpec {
  val name: String = "Filter"
  val category: String = "Transform"
  override def optimizeCode: Boolean = true
```
</TabItem>
</Tabs>

````
Let's look at each of these functions.

#### dialog();
The `dialog` function contain code specific to how the Gem UI should look to the user. 

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def dialog(self) -> Dialog:
        return Dialog("Filter").addElement(
            ColumnsLayout(height="100%")
                .addColumn(PortSchemaTabs(selectedFieldsProperty=("columnsSelector")).importSchema(), "2fr")
                .addColumn(StackLayout(height=("100%"))
                .addElement(TitleElement("Filter Condition"))
                .addElement(
                Editor(height=("100%")).withSchemaSuggestions().bindProperty("condition.expression")
            ), "5fr"))
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
def dialog: Dialog = Dialog("Filter")
    .addElement(
      ColumnsLayout(height = Some("100%"))
        .addColumn(
          PortSchemaTabs(selectedFieldsProperty = Some("columnsSelector")).importSchema(),
          "2fr"
        )
        .addColumn(
          StackLayout(height = Some("100%"))
            .addElement(TitleElement("Filter Condition"))
            .addElement(
              Editor(height = Some("100%"))
                .withSchemaSuggestions()
                .bindProperty("condition.expression")
            ),
          "5fr"
        )
    )
```
</TabItem>
</Tabs>

````
Column Selector: This is a special property which you should add if you want to highlight the columns, and select the columns from UI. 
It is recommended to try out this dialogue code in gem builder UI and se in action how each of these elements look in UI. 


#### validate(component) -> List[Diagnostic]
The validate method performs validation checks, so the pipeline compiler gives an error before running a pipeline, in case there’s any issue with any inputs provided for the user. For example in this case if Filter condition is empty. Similarly, you can add any validation on your properties.

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def validate(self, component: Component[FilterProperties]) -> List[Diagnostic]:
        return validateSColumn(component.properties.condition, "condition", component)

```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
def validate(component: Component)(implicit context: WorkflowContext): List[Diagnostic] = {
    val diagnostics =
      validateSColumn(component.properties.condition, "condition", component)
    diagnostics.toList
  }
```
</TabItem>
</Tabs>

````


#### onChange(oldState, newState) -> Component[newDataCreatorProperties]
The onChange method is given for the UI State maintenance. (eg. making bold columns that have already been selected etc.) The properties of the Gem are also accessible to this function, so functions like selecting columns etc. is possible to add from here.

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
def onChange(self, oldState: Component[FilterProperties], newState: Component[FilterProperties]) -> Component[
        FilterProperties]:
        newProps = newState.properties
        usedColExps = getColumnsToHighlight2([newProps.condition], newState)
        return newState.bindProperties(replace(newProps, columnsSelector=usedColExps))

```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
def onChange(oldState: Component, newState: Component)(implicit context: WorkflowContext): Component = {
    val newProps = newState.properties
    val portId = newState.ports.inputs.head.id

    val expressions = getColumnsToHighlight(List(newProps.condition), newState)

    newState.copy(properties = newProps.copy(columnsSelector = expressions))
  }
```
</TabItem>
</Tabs>

````

#### ComponentCode class
The last class used here is `FilterCode` which is inherited from `ComponentCode` class. This class contains the actual Spark code that needs to run on your spark cluster. Here the above User Defined properties are accessible using self.props.{property}. The spark code for the Gem logic is defined in apply function.
For example, we are calling the `.filter()` method in this example in the apply function. 
````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
class FilterCode(ComponentCode):
def __init__(self, newProps):
self.props: Filter.FilterProperties = newProps

        def apply(self, spark: SparkSession, in0: DataFrame) -> DataFrame:
            return in0.filter(self.props.condition.column())
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
class FilterCode(props: PropertiesType)(implicit context: WorkflowContext) extends ComponentCode {

    def apply(spark: SparkSession, in: DataFrame): DataFrame = {
      val out = in.filter(props.condition.column)
      out
    }

  }
```
</TabItem>
</Tabs>

````

You can go ahead and preview the component in the Gem Builder now to see how it looks like. You can modify the properties and then save it to preview the generated spark code which will eventually run on your cluster.

# Source/Target Gems

Major difference between the Source/Target gem and a Transform gem is, A Source/Target gem will have two dialog and two apply functions each for Source and Target respectively. Let's look at them with an example

````mdx-code-block
<Tabs>

<TabItem value="py" label="Python">

```py
from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import StructType, StructField, StringType

from prophecy.cb.server.base.ComponentBuilderBase import ComponentCode, Diagnostic, SeverityLevelEnum
from prophecy.cb.server.base.DatasetBuilderBase import DatasetSpec, DatasetProperties, Component
from prophecy.cb.server.base.datatypes import SString, SFloat
from prophecy.cb.ui.uispec import *
from prophecy.cb.util.NumberUtils import parseFloat


class CsvFormat(DatasetSpec):
    name: str = "csv"
    datasetType: str = "File"

    def optimizeCode(self) -> bool:
        return True

    @dataclass(frozen=True)
    class CsvProperties(DatasetProperties):
        schema: Optional[StructType] = None
        description: Optional[str] = ""
        useSchema: Optional[bool] = True
        path: str = ""
        separator: Optional[SString] = SString(",")
        encoding: Optional[str] = None
        quote: Optional[str] = None
        escape: Optional[str] = None
        charToEscapeQuoteEscaping: Optional[str] = None
        header: Optional[bool] = True
        ignoreLeadingWhiteSpaceReading: Optional[bool] = None
        ignoreTrailingWhiteSpaceReading: Optional[bool] = None
        ignoreLeadingWhiteSpaceWriting: Optional[bool] = None
        ignoreTrailingWhiteSpaceWriting: Optional[bool] = None
        nullValue: Optional[str] = None
        emptyValue: Optional[str] = None
        dateFormat: Optional[str] = None
        timestampFormat: Optional[str] = None
        comment: Optional[str] = None
        enforceSchema: Optional[bool] = None
        inferSchema: Optional[bool] = None
        samplingRatio: Optional[SFloat] = None
        nanValue: Optional[str] = None
        positiveInf: Optional[str] = None
        negativeInf: Optional[str] = None
        maxColumns: Optional[str] = None
        maxCharsPerColumn: Optional[str] = None
        unescapedQuoteHandling: Optional[str] = None
        mode: Optional[str] = None
        columnNameOfCorruptRecord: Optional[str] = None
        multiLine: Optional[bool] = None
        escapeQuotes: Optional[bool] = None
        quoteAll: Optional[bool] = None
        compression: Optional[str] = None
        partitionColumns: Optional[List[str]] = None
        writeMode: Optional[str] = "error"
        locale: Optional[str] = None
        lineSep: Optional[str] = None
        pathGlobFilter: Optional[str] = None
        modifiedBefore: Optional[str] = None
        modifiedAfter: Optional[str] = None
        recursiveFileLookup: Optional[bool] = None

    def sourceDialog(self) -> DatasetDialog:
        return DatasetDialog("csv") \
            .addSection("LOCATION", TargetLocation("path")) \
            .addSection(
            "PROPERTIES",
            ColumnsLayout(gap="1rem", height="100%")
                .addColumn(
                ScrollBox()
                    .addElement(
                    StackLayout(height="100%")
                        .addElement(
                        StackItem(grow=1).addElement(
                            FieldPicker(height="100%")
                                .addField(
                                TextArea("Description", 2, placeholder="Dataset description..."),
                                "description",
                                True
                            )
                                .addField(Checkbox("Use user-defined schema"), "useSchema", True)
                                .addField(TextBox("Column delimiter").bindPlaceholder("").enableEscapeSequence(),
                                          "separator")
                                .addField(Checkbox("First row is header"), "header")
                                .addField(Checkbox("Infer schema from data"), "inferSchema")
                                .addField(Checkbox("Parse Multi-line records"), "multiLine")
                                .addField(TextBox("Encoding Type").bindPlaceholder(""), "encoding")
                                .addField(TextBox("Quote character").bindPlaceholder(""), "quote")
                                .addField(TextBox("Escape character").bindPlaceholder(""), "escape")
                                .addField(
                                TextBox("Escape char for quote escaping char").bindPlaceholder(""),
                                "charToEscapeQuoteEscaping"
                            )
                                .addField(TextBox("Skip line beginning with character").bindPlaceholder(""), "comment")
                                .addField(Checkbox("Enforce specified or inferred schema"), "enforceSchema")
                                .addField(TextBox("Sampling Ratio").bindPlaceholder(""), "samplingRatio")
                                .addField(Checkbox("Ignore leading white spaces from values"),
                                          "ignoreLeadingWhiteSpaceReading")
                                .addField(Checkbox("Ignore trailing white spaces from values"),
                                          "ignoreTrailingWhiteSpaceReading")
                                .addField(TextBox("Null Value").bindPlaceholder(""), "nullValue")
                                .addField(TextBox("Empty Value").bindPlaceholder(""), "emptyValue")
                                .addField(TextBox("String representation for non-number value").bindPlaceholder(""),
                                          "nanValue")
                                .addField(TextBox("Positive infinity value").bindPlaceholder(""), "positiveInf")
                                .addField(TextBox("Negative infinity value").bindPlaceholder(""), "negativeInf")
                                .addField(TextBox("Date format string").bindPlaceholder(""), "dateFormat")
                                .addField(TextBox("Timestamp format string").bindPlaceholder(""), "timestampFormat")
                                .addField(TextBox("Max number of columns per record").bindPlaceholder(""), "maxColumns")
                                .addField(
                                TextBox("Allowed maximum characters per column").bindPlaceholder(""),
                                "maxCharsPerColumn"
                            )
                                .addField(
                                SelectBox("Corrupt record handling")
                                    .addOption("PERMISSIVE", "permissive")
                                    .addOption("DROPMALFORMED", "dropmalformed")
                                    .addOption("FAILFAST", "failfast"),
                                "mode"
                            )
                                .addField(
                                TextBox("Column name of a corrupt record").bindPlaceholder(""),
                                "columnNameOfCorruptRecord"
                            )
                                .addField(TextBox("Line Sep").bindPlaceholder(""), "lineSep")
                                .addField(TextBox("Locale").bindPlaceholder(""), "locale")
                                .addField(
                                SelectBox("Unescaped Quote Handling")
                                    .addOption("STOP_AT_CLOSING_QUOTE", "STOP_AT_CLOSING_QUOTE")
                                    .addOption("BACK_TO_DELIMITER", "BACK_TO_DELIMITER")
                                    .addOption("STOP_AT_DELIMITER", "STOP_AT_DELIMITER")
                                    .addOption("SKIP_VALUE", "SKIP_VALUE")
                                    .addOption("RAISE_ERROR", "RAISE_ERROR"),
                                "unescapedQuoteHandling"
                            )
                                .addField(Checkbox("Recursive File Lookup"), "recursiveFileLookup")
                                .addField(TextBox("Path Global Filter").bindPlaceholder(""), "pathGlobFilter")
                                .addField(TextBox("Modified Before").bindPlaceholder(""), "modifiedBefore")
                                .addField(TextBox("Modified After").bindPlaceholder(""), "modifiedAfter")
                        )
                    )
                ),
                "auto"
            )
                .addColumn(SchemaTable("").bindProperty("schema"), "5fr")
        ) \
            .addSection(
            "PREVIEW",
            PreviewTable("").bindProperty("schema")
        )

    def targetDialog(self) -> DatasetDialog:
        return DatasetDialog("csv") \
            .addSection("LOCATION", TargetLocation("path")) \
            .addSection(
            "PROPERTIES",
            ColumnsLayout(gap="1rem", height="100%")
                .addColumn(
                ScrollBox().addElement(
                    StackLayout(height="100%").addElement(
                        StackItem(grow=1).addElement(
                            FieldPicker(height="100%")
                                .addField(
                                TextArea("Description", 2, placeholder="Dataset description..."),
                                "description",
                                True
                            )
                                .addField(
                                SelectBox("Write Mode")
                                    .addOption("error", "error")
                                    .addOption("overwrite", "overwrite")
                                    .addOption("append", "append")
                                    .addOption("ignore", "ignore"),
                                "writeMode"
                            )
                                .addField(
                                SchemaColumnsDropdown("Partition Columns")
                                    .withMultipleSelection()
                                    .bindSchema("schema")
                                    .bindProperty("partitionColumns"),
                                "partitionColumns"
                            )
                                .addField(TextBox("Column delimiter").bindPlaceholder("").enableEscapeSequence(),
                                          "separator")
                                .addField(Checkbox("First row is header"), "header")
                                .addField(TextBox("Encoding Type").bindPlaceholder(""), "encoding")
                                .addField(TextBox("Quote character").bindPlaceholder(""), "quote")
                                .addField(TextBox("Escape character").bindPlaceholder(""), "escape")
                                .addField(
                                TextBox("Escape char for quote escaping char").bindPlaceholder(""),
                                "charToEscapeQuoteEscaping"
                            )
                                .addField(TextBox("Null Value").bindPlaceholder(""), "nullValue")
                                .addField(TextBox("Empty Value").bindPlaceholder(""), "emptyValue")
                                .addField(
                                SelectBox("Compression")
                                    .addOption("none", "none")
                                    .addOption("bzip2", "bzip2")
                                    .addOption("gzip", "gzip")
                                    .addOption("lz4", "lz4")
                                    .addOption("snappy", "snappy")
                                    .addOption("deflate", "deflate"),
                                "compression"
                            )
                                .addField(Checkbox("Escape quotes"), "escapeQuotes")
                                .addField(Checkbox("Quote All"), "quoteAll")
                                .addField(TextBox("Date format string").bindPlaceholder(""), "dateFormat")
                                .addField(TextBox("Timestamp format string").bindPlaceholder(""), "timestampFormat")
                                .addField(Checkbox("Ignore leading white spaces from values"),
                                          "ignoreLeadingWhiteSpaceWriting")
                                .addField(Checkbox("Ignore trailing white spaces from values"),
                                          "ignoreTrailingWhiteSpaceWriting")
                                .addField(TextBox("Line Sep").bindPlaceholder(""), "lineSep")
                        )
                    )
                ),
                "auto"
            )
                .addColumn(SchemaTable("").isReadOnly().withoutInferSchema().bindProperty("schema"), "5fr")
        )

    def validate(self, component: Component) -> list:
        diagnostics = super(CsvFormat, self).validate(component)
        if component.properties.separator.diagnosticMessages is not None:
            for message in component.properties.separator.diagnosticMessages:
                diagnostics.append(
                    Diagnostic("properties.separator", message, SeverityLevelEnum.Error))

        if len(component.properties.path) == 0:
            diagnostics.append(
                Diagnostic("properties.path", "path variable cannot be empty [Location]", SeverityLevelEnum.Error))

        if component.properties.samplingRatio is not None:
            if component.properties.samplingRatio.diagnosticMessages is not None:
                for message in component.properties.samplingRatio.diagnosticMessages:
                    diagnostics.append(
                        Diagnostic("properties.samplingRatio", message, SeverityLevelEnum.Error))

            floatValue = component.properties.samplingRatio.value
            if floatValue is not None and 0.0 < floatValue <= 1.0:
                return diagnostics
            else:
                diagnostics.append(
                    Diagnostic("properties.samplingRatio", "Sampling Ratio has to be between (0.0, 1.0] [Properties]",
                               SeverityLevelEnum.Error))
        if component.properties.columnNameOfCorruptRecord is not None:
            if component.properties.schema is None:
                diagnostics.append(Diagnostic(
                    "properties.schema",
                    "ColumnNameOfCorruptRecord will not work without a user-specified schema",
                    SeverityLevelEnum.Error
                ))
            if not component.properties.useSchema:
                diagnostics.append(Diagnostic(
                    "properties.columnNameOfCorruptRecord",
                    "ColumnNameOfCorruptRecord will only work if 'Use Schema' is enabled.",
                    SeverityLevelEnum.Error
                ))
        return diagnostics

    def onChange(self, oldState: Component, newState: Component) -> Component:
        if newState.properties.schema is not None:
            newSchema = newState.properties.schema
            schema = None
            (oldCR, newCR) = (
            oldState.properties.columnNameOfCorruptRecord, newState.properties.columnNameOfCorruptRecord)
            if oldCR is not None and newCR is None:
                schema = StructType(list(filter(lambda f: f.name != oldCR, newSchema)))
            elif oldCR is None and newCR is not None:
                if newCR not in newSchema.fieldNames():
                    schema = newSchema.add(StructField(newCR, StringType(), True))
                else:
                    schema = newSchema
            elif oldCR is not None and newCR is not None:
                without_old = StructType(list(filter(lambda f: f.name != oldCR, newSchema)))
                if newCR not in without_old.fieldNames():
                    schema = without_old.add(StructField(newCR, StringType(), True))
                else:
                    schema = without_old
            else:
                schema = newSchema
            return newState.bindProperties(replace(newState.properties, schema=schema))
        return newState

    class CsvFormatCode(ComponentCode):
        def __init__(self, props):
            self.props: CsvFormat.CsvProperties = props

        def sourceApply(self, spark: SparkSession) -> DataFrame:

            reader = spark.read
            if self.props.schema is not None and self.props.useSchema:
                reader = reader.schema(self.props.schema)
            if self.props.negativeInf is not None:
                reader = reader.option("negativeInf", self.props.negativeInf)
            if self.props.maxCharsPerColumn is not None:
                reader = reader.option("maxCharsPerColumn", self.props.maxCharsPerColumn)

            if self.props.header is not None:
                reader = reader.option("header", self.props.header)
            if self.props.inferSchema is not None:
                reader = reader.option("inferSchema", self.props.inferSchema)
            if self.props.mode is not None:
                reader = reader.option("mode", self.props.mode)
            if self.props.dateFormat is not None:
                reader = reader.option("dateFormat", self.props.dateFormat)
            if self.props.samplingRatio is not None:
                reader = reader.option("samplingRatio", self.props.samplingRatio.value)
            if self.props.positiveInf is not None:
                reader = reader.option("positiveInf", self.props.positiveInf)
            if self.props.escape is not None:
                reader = reader.option("escape", self.props.escape)
            if self.props.emptyValue is not None:
                reader = reader.option("emptyValue", self.props.emptyValue)
            if self.props.timestampFormat is not None:
                reader = reader.option("timestampFormat", self.props.timestampFormat)
            if self.props.quote is not None:
                reader = reader.option("quote", self.props.quote)
            if self.props.separator is not None:
                reader = reader.option("sep", self.props.separator.value)
            if self.props.enforceSchema is not None:
                reader = reader.option("enforceSchema", self.props.enforceSchema)
            if self.props.encoding is not None:
                reader = reader.option("encoding", self.props.encoding)
            if self.props.comment is not None:
                reader = reader.option("comment", self.props.comment)
            if self.props.locale is not None:
                reader = reader.option("locale", self.props.locale)
            if self.props.lineSep is not None:
                reader = reader.option("lineSep", self.props.lineSep)
            if self.props.unescapedQuoteHandling is not None:
                reader = reader.option("unescapedQuoteHandling", self.props.unescapedQuoteHandling)
            if self.props.charToEscapeQuoteEscaping is not None:
                reader = reader.option("charToEscapeQuoteEscaping", self.props.charToEscapeQuoteEscaping)
            if self.props.nanValue is not None:
                reader = reader.option("nanValue", self.props.nanValue)
            if self.props.ignoreLeadingWhiteSpaceWriting is not None:
                reader = reader.option("ignoreLeadingWhiteSpace", self.props.ignoreLeadingWhiteSpaceWriting)
            if self.props.ignoreTrailingWhiteSpaceWriting is not None:
                reader = reader.option("ignoreTrailingWhiteSpace", self.props.ignoreTrailingWhiteSpaceWriting)
            if self.props.nullValue is not None:
                reader = reader.option("nullValue", self.props.nullValue)
            if self.props.maxColumns is not None:
                reader = reader.option("maxColumns", self.props.maxColumns)
            if self.props.multiLine is not None:
                reader = reader.option("multiLine", self.props.multiLine)
            if self.props.modifiedBefore is not None:
                reader = reader.option("modifiedBefore", self.props.modifiedBefore)
            if self.props.modifiedAfter is not None:
                reader = reader.option("modifiedAfter", self.props.modifiedAfter)
            if self.props.recursiveFileLookup is not None:
                reader = reader.option("recursiveFileLookup", self.props.recursiveFileLookup)
            if self.props.pathGlobFilter is not None:
                reader = reader.option("pathGlobFilter", self.props.pathGlobFilter)
            if self.props.columnNameOfCorruptRecord is not None:
                reader = reader.option("columnNameOfCorruptRecord", self.props.columnNameOfCorruptRecord)

            return reader.csv(self.props.path)

        def targetApply(self, spark: SparkSession, in0: DataFrame):
            writer = in0.write
            if self.props.header is not None:
                writer = writer.option("header", self.props.header)
            if self.props.dateFormat is not None:
                writer = writer.option("dateFormat", self.props.dateFormat)
            if self.props.escape is not None:
                writer = writer.option("escape", self.props.escape)
            if self.props.emptyValue is not None:
                writer = writer.option("emptyValue", self.props.emptyValue)
            if self.props.timestampFormat is not None:
                writer = writer.option("timestampFormat", self.props.timestampFormat)
            if self.props.quote is not None:
                writer = writer.option("quote", self.props.quote)
            if self.props.separator is not None:
                writer = writer.option("sep", self.props.separator.value)
            if self.props.quoteAll is not None:
                writer = writer.option("quoteAll", self.props.quoteAll)
            if self.props.encoding is not None:
                writer = writer.option("encoding", self.props.encoding)
            if self.props.charToEscapeQuoteEscaping is not None:
                writer = writer.option("charToEscapeQuoteEscaping", self.props.charToEscapeQuoteEscaping)
            if self.props.escapeQuotes is not None:
                writer = writer.option("escapeQuotes", self.props.escapeQuotes)
            if self.props.ignoreLeadingWhiteSpaceWriting is not None:
                writer = writer.option("ignoreLeadingWhiteSpace", self.props.ignoreLeadingWhiteSpaceWriting)
            if self.props.ignoreTrailingWhiteSpaceWriting is not None:
                writer = writer.option("ignoreTrailingWhiteSpace", self.props.ignoreTrailingWhiteSpaceWriting)
            if self.props.nullValue is not None:
                writer = writer.option("nullValue", self.props.nullValue)
            if self.props.compression is not None:
                writer = writer.option("compression", self.props.compression)
            if self.props.lineSep is not None:
                writer = writer.option("lineSep", self.props.lineSep)
            if self.props.writeMode is not None:
                writer = writer.mode(self.props.writeMode)
            if self.props.partitionColumns is not None and len(self.props.partitionColumns) > 0:
                writer = writer.partitionBy(*self.props.partitionColumns)
            writer.option("separator", self.props.separator.value).option("header", self.props.header).csv(
                self.props.path)
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
package io.prophecy.core.instructions.all.datasets

import io.prophecy.core.instructions.all._
import io.prophecy.core.instructions.spec._
import io.prophecy.core.program.WorkflowContext
import org.apache.spark.sql.{DataFrame, SparkSession}
import org.apache.spark.sql.types._
import io.prophecy.libs._

object CsvFormat extends DatasetSpec {

  val name: String = "csv"
  val datasetType: String = "File"

  type PropertiesType = CsvProperties
  case class CsvProperties(
    @Property("Schema")
    schema: Option[StructType] = None,
    @Property("Description")
    description: Option[String] = Some(""),
    @Property("useSchema")
    useSchema: Option[Boolean] = Some(true),
    // common properties
    @Property("Path")
    path: String = "",
    // COMMON PROPS
    @Property("Separator", "The column delimiter. By default ',' but can be set to any character")
    separator: Option[SString] = Some(SString(",")),
    @Property("encoding", """(default: "UTF-8"). Encoding type used to decode the given CSV file""")
    encoding: Option[String] = None,
    @Property(
      "quote",
      """(default: "\") Sets a single character used for escaping quoted values where the separator can be part of the value. If you would like to turn off quotations, you need to set not null but an empty string. This behaviour is different from com.databricks.spark.csv."""
    )
    quote: Option[String] = None,
    @Property(
      "escape",
      """(default: "\\") Sets the single character used for escaping quoted values where the separator can be part of the value. If you would like to turn off quotations, you need to set not null but an empty string."""
    )
    escape: Option[String] = None,
    @Property(
      "charToEscapeQuoteEscaping",
      """(default: "\"", escape or \0) Sets a single character used for escaping the escape for the quote character. The default value is escape character when escape and quote characters are different, \\0 otherwise."""
    )
    charToEscapeQuoteEscaping: Option[String] = None,
    @Property("header", "(default: false): uses the first line as names of columns.")
    header: Option[Boolean] = Some(true),
    @Property(
      "ignoreLeadingWhiteSpaceReading",
      "(default: false): a flag indicating whether or not leading whitespaces from values being read should be skipped."
    )
    ignoreLeadingWhiteSpaceReading: Option[Boolean] = None,
    @Property(
      "ignoreTrailingWhiteSpaceReading",
      "(default: false): a flag indicating whether or not trailing whitespaces from values being read should be skipped."
    )
    ignoreTrailingWhiteSpaceReading: Option[Boolean] = None,
    @Property(
      "ignoreLeadingWhiteSpaceWriting",
      "(default: false): a flag indicating whether or not leading whitespaces from values being read should be skipped."
    )
    ignoreLeadingWhiteSpaceWriting: Option[Boolean] = None,
    @Property(
      "ignoreTrailingWhiteSpaceWriting",
      "(default: false): a flag indicating whether or not trailing whitespaces from values being read should be skipped."
    )
    ignoreTrailingWhiteSpaceWriting: Option[Boolean] = None,
    @Property(
      "nullValue",
      """(default: "") sets the string representation of a null value. Since 2.0.1, this applies to all supported types including the string type."""
    )
    nullValue: Option[String] = None,
    @Property("emptyValue", """(default: "") sets the string representation of an empty value.""")
    emptyValue: Option[String] = None,
    @Property(
      "dateFormat",
      """(default: "yyyy-MM-dd") sets the string that indicates a date format. Custom date formats follow the formats at Datetime Patterns. This applies to date type."""
    ) dateFormat: Option[String] = None,
    @Property(
      "timestampFormat",
      """(default: "yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]") sets the string that indicates a timestamp format. Custom date formats follow the formats at Datetime Patterns. This applies to timestamp type."""
    )
    timestampFormat: Option[String] = None,
    // SOURCE_ONLY PROPS
    @Property(
      "comment",
      """(default: "") sets a single character used for skipping lines beginning with this character. By default, it is disabled."""
    )
    comment: Option[String] = None,
    @Property(
      "enforceSchema",
      "(default: true) If it is set to false, the specified or inferred schema will be forcibly applied to datasource files, and headers in CSV files will be ignored. If the option is set to false, the schema will be validated against all headers in CSV files in the case when the header option is set to true. Field names in the schema and column names in CSV headers are checked by their positions taking into account spark.sql.caseSensitive. Though the default value is true, it is recommended to disable the enforceSchema option to avoid incorrect results"
    )
    enforceSchema: Option[Boolean] = None,
    @Property(
      "inferSchema",
      "infers the input schema automatically from data. It requires one extra pass over the data."
    )
    inferSchema: Option[Boolean] = None,
    @Property("samplingRatio", "(default: 1.0) defines fraction of rows used for schema inferring.")
    samplingRatio: Option[SDouble] = None,
    @Property("nanValue", """(default: "NaN") sets the string representation of a non-number value.""")
    nanValue: Option[String] = None,
    @Property("positiveInf", """(default: "Inf") sets the string representation of a positive infinity value.""")
    positiveInf: Option[String] = None,
    @Property("negativeInf", """(default: "-Inf") sets the string representation of a negative infinity value.""")
    negativeInf: Option[String] = None,
    @Property("maxColumns", "(default: 20480) defines a hard limit of how many columns a record can have.")
    maxColumns: Option[String] = None,
    @Property(
      "maxCharsPerColumn",
      """(default: -1) defines the maximum number of characters allowed for any given value being read. By default, it is -1 meaning unlimited length"""
    )
    maxCharsPerColumn: Option[String] = None,
    @Property("unescapedQuoteHandling", "defines how the CsvParser will handle values with unescaped quotes.")
    unescapedQuoteHandling: Option[String] = None,
    @Property(
      "mode",
      """(default: "PERMISSIVE") allows a mode for dealing with corrupt records during parsing. It supports the following case-insensitive modes. Note that Spark tries to parse only required columns in CSV under column pruning. Therefore, corrupt records can be different based on required set of fields. This behavior can be controlled by spark.sql.csv.parser.columnPruning.enabled (enabled by default)."""
    )
    mode: Option[String] = None,
    @Property(
      "columnNameOfCorruptRecord",
      """(default: "") allows renaming the new field having malformed string created by PERMISSIVE mode. This overrides spark.sql.columnNameOfCorruptRecord."""
    )
    columnNameOfCorruptRecord: Option[String] = None,
    @Property("multiLine", "(default: false) parse one record, which may span multiple lines.")
    multiLine: Option[Boolean] = None,
    @Property(
      "escapeQuotes",
      "(default: true) a flag indicating whether values containing quotes should always be enclosed in quotes. Default is to escape all values containing a quote character."
    )
    escapeQuotes: Option[Boolean] = None,
    @Property(
      "quoteAll",
      "(default: false) a flag indicating whether all values should always be enclosed in quotes. Default is to only escape values containing a quote character."
    )
    quoteAll: Option[Boolean] = None,
    @Property("compression", """(default: "none") compression codec to use when saving to file.""")
    compression: Option[String] = None,
    @Property("partitionColumns", "Partitioning column.")
    partitionColumns: Option[List[String]] = None,
    @Property("Write Mode", """(default: "error") Specifies the behavior when data or table already exists.""")
    writeMode: Option[String] = Some("error"),
    @Property(
      "locale",
      "sets a locale as language tag in IETF BCP 47 format. For instance, this is used while parsing dates and timestamps."
    )
    locale: Option[String] = None,
    @Property(
      "lineSep",
      "Default covers all \r, \r\n and \n. defines the line separator that should be used for parsing. Maximum length is 1 character."
    )
    lineSep: Option[String] = None,
    @Property(
      "",
      "an optional glob pattern to only include files with paths matching the pattern. The syntax follows org.apache.hadoop.fs.GlobFilter. It does not change the behavior of partition discovery."
    )
    pathGlobFilter: Option[String] = None,
    @Property(
      "",
      "(batch only): an optional timestamp to only include files with modification times occurring before the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)"
    )
    modifiedBefore: Option[String] = None,
    @Property(
      "",
      "(batch only): an optional timestamp to only include files with modification times occurring after the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)"
    )
    modifiedAfter: Option[String] = None,
    @Property("", "recursively scan a directory for files. Using this option disables partition discovery")
    recursiveFileLookup: Option[Boolean] = None
  ) extends DatasetProperties

  def sourceDialog: DatasetDialog = DatasetDialog("csv")
    .addSection("LOCATION", TargetLocation("path"))
    .addSection(
      "PROPERTIES",
      ColumnsLayout(gap = Some("1rem"), height = Some("100%"))
        .addColumn(
          ScrollBox()
            .addElement(
              StackLayout(height = Some("100%"))
                .addElement(
                  StackItem(grow = Some(1))
                    .addElement(
                      FieldPicker(height = Some("100%"))
                        .addField(
                          TextArea("Description", 2, placeholder = "Dataset description..."),
                          "description",
                          true
                        )
                        .addField(Checkbox("Use user-defined schema"), "useSchema", true)
                        .addField(TextBox("Column delimiter").bindPlaceholder("").enableEscapeSequence(), "separator")
                        .addField(Checkbox("First row is header"), "header")
                        .addField(Checkbox("Infer column types from data"), "inferSchema")
                        .addField(Checkbox("Parse Multi-line records"), "multiLine")
                        .addField(TextBox("Encoding Type").bindPlaceholder(""), "encoding")
                        .addField(TextBox("Quote character").bindPlaceholder(""), "quote")
                        .addField(TextBox("Escape character").bindPlaceholder(""), "escape")
                        .addField(
                          TextBox("Escape char for quote escaping char").bindPlaceholder(""),
                          "charToEscapeQuoteEscaping"
                        )
                        .addField(TextBox("Skip line beginning with character").bindPlaceholder(""), "comment")
                        .addField(Checkbox("Enforce specified or inferred schema"), "enforceSchema")
                        .addField(TextBox("Sampling Ratio").bindPlaceholder(""), "samplingRatio")
                        .addField(Checkbox("Ignore leading white spaces from values"), "ignoreLeadingWhiteSpaceReading")
                        .addField(
                          Checkbox("Ignore trailing white spaces from values"),
                          "ignoreTrailingWhiteSpaceReading"
                        )
                        .addField(TextBox("Null Value").bindPlaceholder(""), "nullValue")
                        .addField(TextBox("Empty Value").bindPlaceholder(""), "emptyValue")
                        .addField(TextBox("String representation for non-number value").bindPlaceholder(""), "nanValue")
                        .addField(TextBox("Positive infinity value").bindPlaceholder(""), "positiveInf")
                        .addField(TextBox("Negative infinity value").bindPlaceholder(""), "negativeInf")
                        .addField(TextBox("Date format string").bindPlaceholder(""), "dateFormat")
                        .addField(TextBox("Timestamp format string").bindPlaceholder(""), "timestampFormat")
                        .addField(TextBox("Max number of columns per record").bindPlaceholder(""), "maxColumns")
                        .addField(
                          TextBox("Allowed maximum characters per column").bindPlaceholder(""),
                          "maxCharsPerColumn"
                        )
                        .addField(
                          SelectBox("Corrupt record handling")
                            .addOption("PERMISSIVE", "permissive")
                            .addOption("DROPMALFORMED", "dropmalformed")
                            .addOption("FAILFAST", "failfast"),
                          "mode"
                        )
                        .addField(
                          TextBox("Column name of a corrupt record").bindPlaceholder("_corrupt_record"),
                          "columnNameOfCorruptRecord"
                        )
                        .addField(TextBox("Line Sep").bindPlaceholder(""), "lineSep")
                        .addField(TextBox("Locale").bindPlaceholder(""), "locale")
                        .addField(
                          SelectBox("Unescaped Quote Handling")
                            .addOption("STOP_AT_CLOSING_QUOTE", "STOP_AT_CLOSING_QUOTE")
                            .addOption("BACK_TO_DELIMITER", "BACK_TO_DELIMITER")
                            .addOption("STOP_AT_DELIMITER", "STOP_AT_DELIMITER")
                            .addOption("SKIP_VALUE", "SKIP_VALUE")
                            .addOption("RAISE_ERROR", "RAISE_ERROR"),
                          "unescapedQuoteHandling"
                        )
                        .addField(Checkbox("Recursive File Lookup"), "recursiveFileLookup")
                        .addField(TextBox("Path Global Filter").bindPlaceholder(""), "pathGlobFilter")
                        .addField(TextBox("Modified Before").bindPlaceholder(""), "modifiedBefore")
                        .addField(TextBox("Modified After").bindPlaceholder(""), "modifiedAfter")
                    )
                )
            ),
          "auto"
        )
        .addColumn(SchemaTable("").bindProperty("schema"), "5fr")
    )
    .addSection(
      "PREVIEW",
      PreviewTable("").bindProperty("schema")
    )

  def targetDialog: DatasetDialog = DatasetDialog("csv")
    .addSection("LOCATION", TargetLocation("path"))
    .addSection(
      "PROPERTIES",
      ColumnsLayout(gap = Some("1rem"), height = Some("100%"))
        .addColumn(
          ScrollBox().addElement(
            StackLayout(height = Some("100%")).addElement(
              StackItem(grow = Some(1)).addElement(
                FieldPicker(height = Some("100%"))
                  .addField(
                    TextArea("Description", 2, placeholder = "Dataset description..."),
                    "description",
                    true
                  )
                  .addField(
                    SelectBox("Write Mode")
                      .addOption("error", "error")
                      .addOption("overwrite", "overwrite")
                      .addOption("append", "append")
                      .addOption("ignore", "ignore"),
                    "writeMode"
                  )
                  .addField(
                    SchemaColumnsDropdown("Partition Columns")
                      .withMultipleSelection()
                      .bindSchema("schema")
                      .bindProperty("partitionColumns"),
                    "partitionColumns"
                  )
                  .addField(TextBox("Column delimiter").bindPlaceholder("").enableEscapeSequence(), "separator")
                  .addField(Checkbox("First row is header"), "header")
                  .addField(TextBox("Encoding Type").bindPlaceholder(""), "encoding")
                  .addField(TextBox("Quote character").bindPlaceholder(""), "quote")
                  .addField(TextBox("Escape character").bindPlaceholder(""), "escape")
                  .addField(
                    TextBox("Escape char for quote escaping char").bindPlaceholder(""),
                    "charToEscapeQuoteEscaping"
                  )
                  .addField(TextBox("Null Value").bindPlaceholder(""), "nullValue")
                  .addField(TextBox("Empty Value").bindPlaceholder(""), "emptyValue")
                  .addField(
                    SelectBox("Compression")
                      .addOption("none", "none")
                      .addOption("bzip2", "bzip2")
                      .addOption("gzip", "gzip")
                      .addOption("lz4", "lz4")
                      .addOption("snappy", "snappy")
                      .addOption("deflate", "deflate"),
                    "compression"
                  )
                  .addField(Checkbox("Escape quotes"), "escapeQuotes")
                  .addField(Checkbox("Quote All"), "quoteAll")
                  .addField(TextBox("Date format string").bindPlaceholder(""), "dateFormat")
                  .addField(TextBox("Timestamp format string").bindPlaceholder(""), "timestampFormat")
                  .addField(Checkbox("Ignore leading white spaces from values"), "ignoreLeadingWhiteSpaceWriting")
                  .addField(Checkbox("Ignore trailing white spaces from values"), "ignoreTrailingWhiteSpaceWriting")
                  .addField(TextBox("Line Sep").bindPlaceholder(""), "lineSep")
              )
            )
          ),
          "auto"
        )
        .addColumn(SchemaTable("").isReadOnly().withoutInferSchema().bindProperty("schema"), "5fr")
    )

  override def validate(component: Component)(implicit context: WorkflowContext): List[Diagnostic] = {
    import scala.collection.mutable.ListBuffer
    val diagnostics = ListBuffer[Diagnostic]()
    diagnostics ++= super.validate(component)

    // println("csv validate component: ", component)

    if (component.properties.path.isEmpty) {
      diagnostics += Diagnostic("properties.path", "path variable cannot be empty [Location]", SeverityLevel.Error)
    }
    if (component.properties.schema.isEmpty) {
      // diagnostics += Diagnostic("properties.schema", "Schema cannot be empty [Properties]", SeverityLevel.Error)
    }

    def getDoubleOption(s: String): Option[Double] = s.trim.isEmpty match {
      case true ⇒ None
      case false ⇒
        try Some(s.trim.toDouble)
        catch { case _ ⇒ None }

    }

    component.properties.samplingRatio match {
      case None ⇒ Unit
      case Some(value: SDouble) ⇒
        val (diag, sampleRatio) = value.getValue("properties.samplingRatio")
        diagnostics ++= diag
        sampleRatio match {
          case None ⇒ Unit
          case Some(value) ⇒
            (0.0 < value) && (value <= 1.0) match {
              case true ⇒ Unit
              case false ⇒
                diagnostics += Diagnostic(
                  "properties.samplingRatio",
                  "Sampling Ratio has to be between (0.0, 1.0] [Properties]",
                  SeverityLevel.Error
                )
            }
        }
    }

    if (component.properties.columnNameOfCorruptRecord.isDefined) {
      if (component.properties.schema.isEmpty) {
        diagnostics += Diagnostic(
          "properties.columnNameOfCorruptRecord",
          "ColumnNameOfCorruptRecord will only work with a user-specified schema",
          SeverityLevel.Error
        )
      }
      if (
        component.properties.useSchema.isEmpty || (component.properties.useSchema.isDefined && !component.properties.useSchema.get)
      ) {
        diagnostics += Diagnostic(
          "properties.columnNameOfCorruptRecord",
          "ColumnNameOfCorruptRecord will only work if 'Use Schema' is enabled",
          SeverityLevel.Error
        )
      }
    }
    diagnostics.toList
  }

  def onChange(oldState: Component, newState: Component)(implicit context: WorkflowContext): Component = {
    if (newState.properties.schema.isDefined) {
      val newSchema = newState.properties.schema.get
      val schema =
        (oldState.properties.columnNameOfCorruptRecord, newState.properties.columnNameOfCorruptRecord) match {
          case (Some(oldCR), None) ⇒ StructType.apply(newSchema.fields.filter(f ⇒ f.name != oldCR))
          case (None, Some(newCR)) ⇒
            if (!newSchema.fieldNames.contains(newCR)) {
              newSchema.add(newCR, StringType, true)
            } else {
              newSchema
            }
          case (Some(oldCR), Some(newCR)) ⇒
            StructType.apply(newSchema.fields.filter(f ⇒ f.name != oldCR)).add(newCR, StringType, true)
          case (None, None) ⇒ newSchema
        }
      newState.copy(properties = newState.properties.copy(schema = Some(schema)))
    } else {
      newState
    }
  }

  class CsvFormatCode(props: CsvProperties) extends ComponentCode {

    def sourceApply(spark: SparkSession): DataFrame = {
      var reader = spark.read
        .format("csv")
        .option("negativeInf", props.negativeInf)
        .option("maxCharsPerColumn", props.maxCharsPerColumn)
        .option("columnNameOfCorruptRecord", props.columnNameOfCorruptRecord)
        .option("header", props.header)
        .option("inferSchema", props.inferSchema)
        .option("mode", props.mode)
        .option("dateFormat", props.dateFormat)
        .option("samplingRatio", props.samplingRatio)
        .option("positiveInf", props.positiveInf)
        .option("escape", props.escape)
        .option("emptyValue", props.emptyValue)
        .option("timestampFormat", props.timestampFormat)
        .option("quote", props.quote)
        .option("sep", props.separator)
        .option("enforceSchema", props.enforceSchema)
        .option("encoding", props.encoding)
        .option("comment", props.comment)
        .option("locale", props.locale)
        .option("lineSep", props.lineSep)
        .option("unescapedQuoteHandling", props.unescapedQuoteHandling)
        .option("charToEscapeQuoteEscaping", props.charToEscapeQuoteEscaping)
        .option("nanValue", props.nanValue)
        .option("ignoreLeadingWhiteSpace", props.ignoreLeadingWhiteSpaceReading)
        .option("ignoreTrailingWhiteSpace", props.ignoreTrailingWhiteSpaceReading)
        .option("nullValue", props.nullValue)
        .option("maxColumns", props.maxColumns)
        .option("multiLine", props.multiLine)
        .option("modifiedBefore", props.modifiedBefore)
        .option("modifiedAfter", props.modifiedAfter)
        .option("recursiveFileLookup", props.recursiveFileLookup)
        .option("pathGlobFilter", props.pathGlobFilter)
      if (props.useSchema.isDefined && props.useSchema.get) {
        props.schema.foreach(schema ⇒ reader = reader.schema(schema))
      }
      reader.load(props.path)
    }

    def targetApply(spark: SparkSession, in: DataFrame): Unit = {
      var writer = in.write
        .format("csv")
        .option("header", props.header)
        .option("dateFormat", props.dateFormat)
        .option("escape", props.escape)
        .option("emptyValue", props.emptyValue)
        .option("timestampFormat", props.timestampFormat)
        .option("quote", props.quote)
        .option("sep", props.separator)
        .option("quoteAll", props.quoteAll)
        .option("encoding", props.encoding)
        .option("charToEscapeQuoteEscaping", props.charToEscapeQuoteEscaping)
        .option("escapeQuotes", props.escapeQuotes)
        .option("ignoreLeadingWhiteSpace", props.ignoreLeadingWhiteSpaceWriting)
        .option("ignoreTrailingWhiteSpace", props.ignoreTrailingWhiteSpaceWriting)
        .option("nullValue", props.nullValue)
        .option("compression", props.compression)
        .option("lineSep", props.lineSep)
      props.writeMode.foreach { mode ⇒
        writer = writer.mode(mode)
      }
      props.partitionColumns.foreach(pcols ⇒
        writer = pcols match {
          case Nil ⇒ writer
          case _ ⇒ writer.partitionBy(pcols: _*)
        }
      )
      writer.save(props.path)
    }

  }

}

```

</TabItem>
</Tabs>
````

Here you can se that The difference between a transform gem vs a Source/Target gem is 
1. Source/Target gem extends DatasetSpec
2. It has two Dialog functions sourceDialog and TargetDialog
3. The ComponentCode class in this has two apply functions sourceApply and targetApply

There is no change onChange, validate functions.

# UI Components
There are various UI Components that can be defined for your gem like you can divide a pane into section, add columns. You can have Scroll box, tabs, buttons, checkbox, etc. 
The `DatasetDialog` object returned from here is serialized into JSON, sent to the UI and rendered there.

More details on what all UI components are available to you can be found in the next article.
