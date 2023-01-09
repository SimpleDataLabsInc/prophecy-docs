---
sidebar_position: 4
title: Gem UI Components
id: gem-builder-ui-components
description: UI components you can use in Gem builder
tags: []
---

There are various UI Components that can be defined for your custom Gem such as Scroll boxes, tabs, buttons, and more! These UI Components can be grouped
together in various type of Panels to create a custom User experiences when using the Gem.

After the `Dialog` object is defined, it's serialized as JSON, sent to the UI and rendered there.

In this document we will see how to add different UI compnents to an example Gem.
Let's take below dialog function for example

## Dialog Types

Depending on what kind of Gem you're creating, you'll have to define either a `Dialog` or a `DatasetDialog`:

### Transformation Dialog

The Dialog for Transformation Gems (any Gem that is not a Dataset Gem) are created using the `dialog` method, which must return a `Dialog` object.

#### Example (Transform Dialog)

The Dialog function defined in a Transform Gem returns a Dialog object.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

This is how the Rendered UI looks for above dialog code.
![Gem_UI](img/gem-builder-ui.png)

### DataSet Dialog

The Dialog for a [Source/Target](../gems/source-target/) Gem is a `DatasetDialog` object. You will need to have `source` and `target` methods defined.

## UI Component Types

### Elements

An Element is nothing but has child elements inside it to divide the UI. Everything you add essentially is an element like ColumnsLayout, TextBox, etc.
Elements can be added to a dialoge using the `addElements` method.
For example if we add two elements instead of one element with two columns, it will render something like this.

![Element](img/gem-builder-element.png)
Example code:

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
   def dialog(self) -> Dialog:
        return Dialog("Filter").addElement(
            ColumnsLayout(height="50%")
                .addColumn(PortSchemaTabs(selectedFieldsProperty=("columnsSelector")).importSchema(), "2fr")
                ).addElement(
            ColumnsLayout(height="50%")
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
      ColumnsLayout(height = Some("50%"))
        .addColumn(
          PortSchemaTabs(selectedFieldsProperty = Some("columnsSelector")).importSchema(),
          "2fr"
        )
    ).addElement(
      ColumnsLayout(height = Some("50%"))
        .addColumn(
          StackLayout(height = Some("50%"))
            .addElement(TitleElement("Filter Condition"))
            .addElement(
              Editor(height = Some("100%"))
                .withSchemaSuggestions()
                .bindProperty("condition.expression")
            ),
          "2fr"
        )
    )

```

</TabItem>
</Tabs>
````

### Layouts

The child components of `Element`s are `Layout`s. We have two kinds of `Layout`s available:

- `ColumnsLayout`: Divides the area on screen into different Columns. It takes in an element for the Column and a width for that column. We have seen an example of this in the above example.
- `StackLayout`: Stacks various child elements one under another (`direction:vertical`) or one next to the other (`direction:horizontal`). You can add elements to a stack again using the `addElement` method.

Example:
`StackLayout(height = Some("100%")).addElement(selectBox).addElement(testTable)`
Where selectBox and testTable are already defined elements.
![Stack](img/gem-builder-stack.png)

### Section

In a `DatasetDialog` multiple `Section`s can be added. Each one is a "step" in the UI and can contain properties to be set, expected schema, etc.
A section can be added to a `Dialig` using the `addSection` function.
`addSection` takes in a title for the Section and an element object.
Example: `.addSection("PREVIEW", PreviewTable("").bindProperty("schema")`

### Navigation related UI

#### ScrollBox

This component is used to add a scroll box on UI like so:
![Scroll](img/scroll-box.png)

Example code:

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
ScrollBox().addElement(
                    StackLayout(height=("100%"))
                        .addElement(
                        StackItem(grow=(1)).addElement(
                                .addField(Checkbox("Merge schema"), "mergeSchema")
                                .addField(
                                SelectBox("Datetime Rebase Mode")
                                    .addOption("EXCEPTION", "EXCEPTION")
                                    .addOption("CORRECTED", "CORRECTED")
                                    .addOption("LEGACY", "LEGACY"),
                                "datetimeRebaseMode"
                            )
                                .addField(
                                SelectBox("Int96 Rebase Mode")
                                    .addOption("EXCEPTION", "EXCEPTION")
                                    .addOption("CORRECTED", "CORRECTED")
                                    .addOption("LEGACY", "LEGACY"),
                                "int96RebaseMode"
                            )
                                .addField(Checkbox("Recursive File Lookup"), "recursiveFileLookup")
                                .addField(TextBox("Path Global Filter").bindPlaceholder(""), "pathGlobFilter")
                                .addField(TextBox("Modified Before").bindPlaceholder(""), "modifiedBefore")
                                .addField(TextBox("Modified After").bindPlaceholder(""), "modifiedAfter")
                        )
                    )
                ),

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala

  StackItem(grow = Some(1)).addElement(
                  FieldPicker(height = Some("100%"))
                    .addField(Checkbox("Merge schema"), "mergeSchema")
                    .addField(
                      SelectBox("Datetime Rebase Mode")
                        .addOption("EXCEPTION", "EXCEPTION")
                        .addOption("CORRECTED", "CORRECTED")
                        .addOption("LEGACY", "LEGACY"),
                      "datetimeRebaseMode"
                    )
                    .addField(
                      SelectBox("Int96 Rebase Mode")
                        .addOption("EXCEPTION", "EXCEPTION")
                        .addOption("CORRECTED", "CORRECTED")
                        .addOption("LEGACY", "LEGACY"),
                      "int96RebaseMode"
                    )
                    .addField(Checkbox("Recursive File Lookup"), "recursiveFileLookup")
                    .addField(TextBox("Path Global Filter").bindPlaceholder(""), "pathGlobFilter")
                    .addField(TextBox("Modified Before").bindPlaceholder(""), "modifiedBefore")
                    .addField(TextBox("Modified After").bindPlaceholder(""), "modifiedAfter")
                )

```

</TabItem>
</Tabs>
````

#### Tabs

This component is used to render Tabs in UI like this:

![Tabs](img/tabs.png)
Example code:

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
                Tabs()
                    .bindProperty("activeTab")
                    .addTabPane(
                    TabPane("Group By", "groupBy").addElement(
                        ExpTable("Group By Columns").bindProperty("groupBy")
                    )
                )
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala

 Tabs()
              .bindProperty("activeTab")
              .addTabPane(
                TabPane("Group By", "groupBy")
                  .addElement(
                    ExpTable("Group By Columns")
                      .bindProperty("groupBy")
                  )
              )
```

</TabItem>
</Tabs>
````

#### Buttons

Used to add a button on UI.

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
                 Button("Add Transformation").bindOnClick(self.onClickFunc).addElement(
                            NativeText("Add Transformation")))
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala

 Button(
"Create Dataset",
children = List(NativeText("Create Dataset")),
variant = Some(ButtonVariant.tertiaryGrey),
block = Some(true),
style = Some(Map("width" -> "100%", "height" -> "48px")),
onClick = Some { state: Any ⇒
openCreateDatasetDialog(state.asInstanceOf[WorkflowProcess])
}
)
```

</TabItem>
</Tabs>
````

### Forms and Capturing Data

#### FieldSelector

#### Checkbox

#### Field

#### RadioGroup

#### Credentials

#### FileEditor

#### Editor

#### SelectBox

#### NumberBox

### Prophecy Specific Components

#### SchemaSelectBox

#### SchemaTable

#### PortSchema

#### FileBrowser

#### Dataset

#### PreviewTable

#### ExpressionBox

#### AutoComplete

More such component: NewDataSet, Database/Catalogue table,

### Formatting Related UI Components

#### Text

#### Divider

#### List

#### CodeBlock

#### Table
