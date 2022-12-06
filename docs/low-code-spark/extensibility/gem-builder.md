---
sidebar_position: 3
title: Gem builder
id: gem-builder
description: Gem-Builder
tags: []
---

Prophecy Data Engineering system can be extended with **Gem Builder** to add **your own standard sources, targets and
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

The Gem builder is a powerful tool that enables users to create any arbitrary Gems. The Gems can be among:

* **Source/Target Gems**: These Gems enable reading and writing of data
* **Transform Gems**: These Gems apply transformations/joins/any other custom logic onto any dataframe(s) that are passed into them.

Programmatically, a Gem is a component with the following parts:

* The **Gem UI Component** to get user information from the screen (This code is rendered on the Prophecy UI) 
* The **Gem Code Logic** which is how the Gem acts within the context of a pipeline.

### Source/Target Gem Code breakdown

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import StructType
from prophecy.cb.server.base.ComponentBuilderBase import ComponentCode, Diagnostic, SeverityLevelEnum
from prophecy.cb.server.base.DatasetBuilderBase import DatasetSpec, DatasetProperties, Component
from prophecy.cb.ui.uispec import *

class ExampleGem(DatasetSpec):
  name: str = "example-gem"
  datasetType: str = "File"

  def optimizeCode(self) -> bool:
    return True

  @dataclass(frozen=True)
  class ExampleGemProperties(DatasetProperties):
    property: Optional[int] = 1000000
    someConfig: Optional[str] = ""

  def sourceDialog(self) -> DatasetDialog:
    # More details in next Section
    return DataSourceDialog()

  def targetDialog(self) -> DatasetDialog:
    # More details in next Section
    return DataSourceDialog()

  def validate(self, component: Component) -> list:
    diagnostics = super(DataCreatorFormat, self).validate(component)
    if len(component.properties.path) == 0:
      diagnostics.append(
         Diagnostic("properties.someConfig", "property cannot be empty [Location]", SeverityLevelEnum.Error))
    return diagnostics

  def onChange(self, oldState: Component, newState: Component) -> Component:
    # Save some data on state change from oldState -> newState
    return newState

  class ExampleDatasetCode(ComponentCode):
    def __init__(self, props):
        self.props: DataCreatorFormat.DataCreatorProperties = props

    def sourceApply(self, spark: SparkSession) -> DataFrame:
        reader = spark.read
        if self.props.property is not None:
            #do something using the value of the `property` variable
        if self.props.someConfig is not None:
            #do something with `someConfig` variable
        return df #Return the output DF

    def targetApply(self, spark: SparkSession, in0: DataFrame):
      #Write the incoming df (in0) to some Target
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import StructType
from prophecy.cb.server.base.ComponentBuilderBase import ComponentCode, Diagnostic, SeverityLevelEnum
from prophecy.cb.server.base.DatasetBuilderBase import DatasetSpec, DatasetProperties, Component
from prophecy.cb.ui.uispec import *

class ExampleGem(DatasetSpec):
  name: str = "example-gem"
  datasetType: str = "File"

  def optimizeCode(self) -> bool:
    return True

  @dataclass(frozen=True)
  class ExampleGemProperties(DatasetProperties):
    property: Optional[int] = 1000000
    someConfig: Optional[str] = ""

  def sourceDialog(self) -> DatasetDialog:
    # More details in next Section
    return DataSourceDialog()

  def targetDialog(self) -> DatasetDialog:
    # More details in next Section
    return DataSourceDialog()

  def validate(self, component: Component) -> list:
    diagnostics = super(DataCreatorFormat, self).validate(component)
    if len(component.properties.path) == 0:
      diagnostics.append(
         Diagnostic("properties.someConfig", "property cannot be empty [Location]", SeverityLevelEnum.Error))
    return diagnostics

  def onChange(self, oldState: Component, newState: Component) -> Component:
    # Save some data on state change from oldState -> newState
    return newState

  class ExampleDatasetCode(ComponentCode):
    def __init__(self, props):
        self.props: DataCreatorFormat.DataCreatorProperties = props

    def sourceApply(self, spark: SparkSession) -> DataFrame:
        reader = spark.read
        if self.props.property is not None:
            #do something using the value of the `property` variable
        if self.props.someConfig is not None:
            #do something with `someConfig` variable
        return df #Return the output DF

    def targetApply(self, spark: SparkSession, in0: DataFrame):
      #Write the incoming df (in0) to some Target
```

</TabItem>
</Tabs>

````
#### DatasetSpec Class
The overall wrapper class inherits the `DatasetSpec` class which is a representation of the overall Gem. This includes the UI and the logic.

#### DatasetProperties Class
There is one class (Here `ExampleGemProperties`) which contains a list of the properties to be made available to the user for this particular Gem. 
This is where the various options that are to be provided to the user are captured. (here `property`, `someConfig`)
These variables are accessible in the (and can be set from)  `validate`, `sourceDialog`, `targetDialog` functions

#### sourceDialog(); targetDialog
The `sourceDialog` and `targetDialog` functions contain code specific to how the Gem UI should look to the user. See next section for more details. 

#### onChange(oldState, newState) -> Component[newDataCreatorProperties]
The onChange method is given for the UI State maintenance. (eg. making bold columns that have already been selected etc.) The properties of the Gem are also accessible to this function, so functions like selecting columns etc. is possible to add from here.

#### validate(component) -> List[Diagnostic]
The validate method performs validation checks, so the pipeline compiler gives an error before running a pipeline, in case there’s any issue with the code.

#### ComponentCode class
The last class used here is `ExampleCode` which is inherited from `ComponentCode` class. This class contains the actual Spark code that needs to run. Here the above User Defined properties are accessible using self.props.{property}. The code for the Source is defined in sourceApply and for Target in targetApply functions respectively.
The `sourceApply` function returns a Spark Dataframe, while the `targetApply` function takes a Spark Dataframe (in0) and performs some action. (eg. writing to a table, DBFS etc.)

#### optimizeCode(self) -> bool
This function returns a `True` or `False` value depending on whether we want the Prophecy Optimizer to run on this code to simplify it. Read more on the Optimizer here. //TODO: Link here

### Transform Gem Code breakdown

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import StructType
from prophecy.cb.server.base.ComponentBuilderBase import ComponentCode, Diagnostic, SeverityLevelEnum
from prophecy.cb.server.base.DatasetBuilderBase import ComponentSpec, DatasetProperties, Component
from prophecy.cb.ui.uispec import *

class ExampleGem(ComponentSpec):
  name: str = "example-gem"
  datasetType: str = "File"

  def optimizeCode(self) -> bool:
    return True

  @dataclass(frozen=True)
  class ExampleGemProperties(ComponentProperties):
    property: Optional[int] = 1000000
    someConfig: Optional[str] = ""

  def dialog(self) -> Dialog:
    # More details in next Section
    return Dialog()

  def validate(self, component: Component) -> list:
    diagnostics = super(DataCreatorFormat, self).validate(component)
    if len(component.properties.path) == 0:
      diagnostics.append(
         Diagnostic("properties.someConfig", "property cannot be empty [Location]", SeverityLevelEnum.Error))
    return diagnostics

  def onChange(self, oldState: Component, newState: Component) -> Component:
    # Save some data on state change from oldState -> newState
    return newState

  class ExampleCode(ComponentCode):
    def __init__(self, props):
        self.props: DataCreatorFormat.DataCreatorProperties = props

    def apply(self, spark: SparkSession, in0: DataFrame, in1: DataFrame) -> DataFrame:
        # Add in0, in1, in2 etc. to add more inputs if required.
        if self.props.property is not None:
            #do something using the value of the `property` variable
        if self.props.someConfig is not None:
            #do something with `someConfig` variable
        return df #Return the output DF
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
from pyspark.sql import SparkSession, DataFrame
from pyspark.sql.types import StructType
from prophecy.cb.server.base.ComponentBuilderBase import ComponentCode, Diagnostic, SeverityLevelEnum
from prophecy.cb.server.base.DatasetBuilderBase import DatasetSpec, DatasetProperties, Component
from prophecy.cb.ui.uispec import *

class ExampleGem(DatasetSpec):
  name: str = "example-gem"
  datasetType: str = "File"

  def optimizeCode(self) -> bool:
    return True

  @dataclass(frozen=True)
  class ExampleGemProperties(ComponentProperties):
    property: Optional[int] = 1000000
    someConfig: Optional[str] = ""

  def dialog(self) -> Dialog:
    # More details in next Section
    return Dialog()

  def validate(self, component: Component) -> list:
    diagnostics = super(DataCreatorFormat, self).validate(component)
    if len(component.properties.path) == 0:
      diagnostics.append(
         Diagnostic("properties.someConfig", "property cannot be empty [Location]", SeverityLevelEnum.Error))
    return diagnostics

  def onChange(self, oldState: Component, newState: Component) -> Component:
    # Save some data on state change from oldState -> newState
    return newState

  class ExampleDatasetCode(ComponentCode):
    def __init__(self, props):
        self.props: DataCreatorFormat.DataCreatorProperties = props

    def sourceApply(self, spark: SparkSession) -> DataFrame:
        reader = spark.read
        if self.props.property is not None:
            #do something using the value of the `property` variable
        if self.props.someConfig is not None:
            #do something with `someConfig` variable
        return df #Return the output DF

    def targetApply(self, spark: SparkSession, in0: DataFrame):
      #Write the incoming df (in0) to some Target
```
</TabItem>
</Tabs>
````

#### ComponentSpec Class
The overall wrapper class inherits the `ComponentSpec` class which is a representation of the overall Gem. This includes the UI and the logic.

#### ComponentProperties Class
There is one class (Here `ExampleGemProperties`) which contains a list of the properties to be made available to the user for this particular Gem.
This is where the various options that are to be provided to the user are captured. (here `property`, `someConfig`)
These variables are accessible in the (and can be set from)  `validate`, `sourceDialog`, `targetDialog` functions

#### dialog()
The `dialog` functions contain code specific to how the Gem UI should look to the user. See next section for more details.

#### onChange(oldState, newState) -> Component[newDataCreatorProperties]
The onChange method is given for the UI State maintenance. (eg. making bold columns that have already been selected etc.) The properties of the Gem are also accessible to this function, so functions like selecting columns etc. is possible to add from here. This will be illustrated in the next section.

#### validate(component) -> List[Diagnostic]
The validate method performs validation checks, so the pipeline compiler gives an error before running a pipeline, in case there’s any issue with the values entered as properties.

#### ComponentCode class
The last class used here is `ExampleCode` which is inherited from `ComponentCode` class. This class contains the actual Spark code that needs to run. Here the above User Defined properties are accessible using self.props.{property}. The code for the Source is defined in sourceApply and for Target in targetApply functions respectively.
The `apply` function takes any number of DataFrames, (`in0`, `in1`, etc.) performs some computation and returns a Spark Dataframe as output. 

#### optimizeCode(self) -> bool
This function returns a `True` or `False` value depending on whether we want the Prophecy Optimizer to run on this code to simplify it. Read more on the Optimizer here. //TODO: Link here



# UI Components

## Dialog, SourceDialog and TargetDialog
In the case of Datasource Gems, both functions `SourceDialog` and `TargetDialog` need to be defined. They return a `DatasetDialog` object.
Similarly, for any Transform Gem, the `dialog` function is defined which returns a Dialog object. 
These objects are essentially UI components that will render in React on the Prophecy Frontend. 
There are various UI Components that can be defined.

### DatasetDialog

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py

class ExampleSpec(DatasetSpec):
    def sourceDialog(self) -> DatasetDialog:
        return DatasetDialog("Example") \
            .addSection(
            "PROPERTIES",
            ColumnsLayout(gap=("1rem"), height=("100%"))
            .addColumn(
                ScrollBox().addElement(
                    StackLayout(height=("100%"))
                    .addElement(
                        StackItem(grow=(1)).addElement(
                            FieldPicker(height=("100%"))
                            .addField(
                                TextArea("Description", 2, placeholder="Data description..."),
                                "description",
                                True
                            )
                            .addField(TextBox("Number of Rows"), "numRows", True)
                            .addField(TextArea("Json Config", 25), "dataConfig", True)
                        )
                    )
                ),
                "3fr"
            )
            .addColumn(SchemaTable("").bindProperty("schema"),"5fr")
        )
    
    

```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
class ExampleSpec(DatasetSpec):
    def sourceDialog(self) -> DatasetDialog:
        return DatasetDialog("Example") \
            .addSection(
            "PROPERTIES",
            ColumnsLayout(gap=("1rem"), height=("100%"))
            .addColumn(
                ScrollBox().addElement(
                    StackLayout(height=("100%"))
                    .addElement(
                        StackItem(grow=(1)).addElement(
                            FieldPicker(height=("100%"))
                            .addField(
                                TextArea("Description", 2, placeholder="Data description..."),
                                "description",
                                True
                            )
                            .addField(TextBox("Number of Rows"), "numRows", True)
                            .addField(TextArea("Json Config", 25), "dataConfig", True)
                        )
                    )
                ),
                "3fr"
            )
            .addColumn(SchemaTable("").bindProperty("schema"),"5fr")
        )
```
</TabItem>
</Tabs>
````
The `DatasetDialog` object returned from here is serialized into JSON, sent to the UI and rendered there.

### Containers
#### Section
In a `DatasetDialog`, sections can be defined which are different panes, each containing properties to be set etc.
A section can be added to a `DatasetDialog` using the `addSection` function. 

#### Layouts
The child components of this `Section` are `Layouts`. We have the following kind of Layouts available:
* `ColumnsLayout`: Divides the area on screen into different Columns. 
* `StackLayout`: Stacks various child elements one under another (`direction:vertical`) or one next to the other (`direction:horizontal`)

#### ScrollBox


### Navigation related UI

#### Tabs
#### Buttons
#### 


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
#### Database/Catalog Table
#### NewDataset
#### Dataset
#### PreviewTable
#### ExpressionBox
#### AutoComplete


### Formatting Related UI Components
#### Text
#### Divider
#### List
#### CodeBlock
#### Table
