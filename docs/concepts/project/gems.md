---
title: Gems
id: gems
description: Transforming your data
sidebar_position: 3
tags:
  - concepts
  - instructions
  - gems
  - source
  - target
  - datasets
  - search
  - custom
  - infer
  - schema
---

A gem is a reusable component or transformation step in a data pipeline that performs a certain operation on the data. Each gem has its own configuration and produces its own block of output code.

## Gem UI

Since gems are so integral to working with Prophecy, there are a number of UI components that are related to working with them.

### Gem Drawer

![Gem Drawer](img/gems/drawer.png)

In the pipeline editor you'll find the _Gem Drawer_. This organizes the gems into one of several categories:

:::info
The gem list will depend on two factors: Your project language (Python/Scala) and if you are using SaaS Prophecy or have it deployed in your own architecture.
:::

| Gem category      | Definition                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **Source/Target** | Gems related to [Sources/Targets](/docs/Spark/gems/source-target/source-target.md) and Lookups           |
| **Transform**     | Gems related to the [transformation](/docs/Spark/gems/transform/transform.md) of your data               |
| **Custom**        | [Custom](/docs/Spark/gems/custom/custom.md) gems and other gems that don't fit into the other categories |
| **Join/Split**    | Gems related to [splitting or joining](/docs/Spark/gems/join-split/join-split.md) datasets together.     |
| **Subgraph**      | Use [published subgraphs](/docs/Spark/gems/subgraph/subgraph.md) in your pipeline                        |

### Gem Instance

Once you've selected which gem you want to use in your pipeline from the Drawer, an _Instance_ of the gem will appear in the pipeline editor.

![Gem Instance](img/gems/instance.png)

|     | UI element name   | Description                                                                                                                                                       |
| :-: | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Gem Instance name | The name of this particular instance. It must be unique within a given pipeline. You can click this label to edit it.                                             |
|  2  | Gem Type name     | The type of gem                                                                                                                                                   |
|  3  | Error Indicator   | The error state of the gem. If there's something wrong with the configuration of the gem this indicator will appear.                                              |
|  4  | Input Ports       | [Input ports](#inputs) that will accept connections from upstream gems. If this gem type supports multiple or editable inputs, more connections will appear here. |
|  5  | Output Ports      | [Output ports](#outputs) that can be used with downstream gems. If this gem type supports multiple or editable outputs, more connections will appear here.        |
|  6  | Gem Phase         | The [Phase](#phase) for this instance. Used to define the order in which gem instances are executed                                                               |
|  7  | Open              | Open the UI for this gem Instance                                                                                                                                 |
|  8  | Run Button        | Runs this gem, including all upstream gems that are required.                                                                                                     |
|  9  | Action menu       | Shows the Quick Action menu which allows you to change the [Phase](#phase), [Caching](#caching) or to Delete the instance.                                        |

### Gem Configuration

Gem instances can be configured by hovering over their icons in the pipeline editor and clicking `Open`.

![Gem instance configuration](img/gems/instance_open.png)

|     | UI element name   | Description                                                                                                                            |
| :-: | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Gem Instance name | The name of this particular instance. It must be unique within a given pipeline.                                                       |
|  2  | Inputs/Outputs    | Inputs and outputs for this gem instance. See [here](#inputs-outputs) for more information                                             |
|  3  | Gem Configuration | Configuration for this instance. Each gem Type will have a different UI. See the documentation for each gem type for more information. |
|  4  | Diagnostics       | If there's a problem with the configuration for this gem instance, clicking here will show a list of configuration errors.             |
|  5  | Unit Tests        | Each gem instance can have its own set of Unit tests. See [here](/ci-cd/tests) for more details                                        |

## Input/Output ports {#inputs-outputs}

Inputs and outputs define the connections going in to and coming out from a particular gem Instance. Some gem types support multiple inputs or multiple outputs, depending on their configuration.

### Inputs

Inputs define the incoming connections accepted by the gem. Most gem types only accept one connection, but some (Such as [Join](/docs/Spark/gems/join-split/join.md)) allow for as many inputs as you want.

![Input UI](img/gems/inputs.png)

|     | UI element name | Description                                                                                                                                                                                                                                                            |
| :-: | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Search          | Filter fields across all inputs                                                                                                                                                                                                                                        |
|  2  | Add Input       | If the gem Type supports it, you can click this button to add more input ports to this instance                                                                                                                                                                        |
|  3  | Input name      | If the gem Type supports it, you can click the pencil icon to rename this port. Some gem Types will use this name as part of its configuration. For example, a port named `input0` can be used in [Join](/docs/Spark/gems/join-split/join.md) for the join conditions. |
|  4  | Port schema     | The fields and schema types of the port. Will only appear when an upstream gem instance is connected                                                                                                                                                                   |

### Outputs

Outputs define the outgoing schema(s) that will be available to downstream gem instances. In some cases the Prophecy compiler can't infer the output schema automatically, so we've provided an option to try inferring the schema using your connected Fabric or just specifying it manually.

![Output port definition](img/gems/outputs.png)

|     | UI element name    | Description                                                                                                     |
| :-: | ------------------ | --------------------------------------------------------------------------------------------------------------- |
|  1  | Output schema      | Output schema for this gem instance. This will be the schema of the data that downstream gem instances will use |
|  2  | Custom schema      | Toggle this to enable custom output schema editing                                                              |
|  3  | Infer from cluster | Run the gem code on the connected cluster and infer the schema from the result                                  |
|  4  | Edit schema        | Edit the output schema manually                                                                                 |

### Port renaming

Most gem types allow Inputs and Outputs to be renamed, which will have at least two effects: Renaming the input variable in the generated code and change the port name in the pipeline editor.

![Port rename](img/gems/input_rename_port.png)
![Port name in pipeline editor](img/gems/input_rename.png)

```python
  def Join_1(spark: SparkSession, input_one: DataFrame, in1: DataFrame, ) -> DataFrame:
    ...
```

## Gem search

When the pipeline has become full with dozens or hundreds of gems, you may wish to search the canvas for a gem using the Project Browser.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/7xdst62lub?seo=false?videoFoam=true" title="Search Gems in a Subgraph" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
Search for a gem on the pipeline canvas. The gem search includes gems inside Subgraphs.

## Phase

![Gem phase indicator](img/gems/phase.png)

A gem's _phase_ in a pipeline controls the output order for the code generated for the pipeline. Gem `A` with a Phase of 0 will run before gem `B` with a Phase of `1`. It can be any Integer, positive or negative. Let's see an example in action.

### Example {#phase-example}

![Gem phase example 1](img/gems/phase_ex1.png)

Here we have a pipeline with a number of gems, each with the default Phase of `0`. Let's look at what the generated code is for this version of the pipeline:

```scala
def apply(spark: SparkSession): Unit = {
  val df_my_orders     = my_orders(spark).cache()
  val df_Repartition_1 = Repartition_1(spark, df_my_orders)
  Write_CSV(spark, df_Repartition_1)
  val df_SchemaTransform_1 = SchemaTransform_1(spark, df_my_orders)
}
```

So the order of operations is `my_orders`, `Repartition_1` (and its downstream gem `Write_CSV`), then `Schema_Transform1`. If we wanted to run `Schema_Transform1` first instead, we can change `Repartition_1`'s Phase to be a higher number than `Schema_Transform1`'s Phase. The `Change Phase` button can be found under the `...` menu that will appear when a gem is selected:

![Gem change phase button](img/gems/phase_ex2.gif)

Let's see how the code has changed.

```scala
def apply(spark: SparkSession): Unit = {
  val df_my_orders     = my_orders(spark).cache()
  val df_Repartition_1 = Repartition_1(spark, df_my_orders)
  Write_CSV(spark, df_Repartition_1)
  val df_SchemaTransform_1 = SchemaTransform_1(spark, df_my_orders)
}
```

Not much has changed, because `Write_CSV` still has a Phase of `0`, and in order to be able to complete that step of the pipeline all of the upstream steps required to complete `Write_CSV` (in this case, `Schema_Transform1`) have to be completed first. Let's change the Phase of `Write_CSV`.

![Write_CSV with a phase of 1](img/gems/phase_ex3.png)

And the new code:

```scala
def apply(spark: SparkSession): Unit = {
  val df_my_orders         = my_orders(spark).cache()
  val df_SchemaTransform_1 = SchemaTransform_1(spark, df_my_orders)
  val df_Repartition_1     = Repartition_1(spark,     df_my_orders)
  Write_CSV(spark, df_Repartition_1)
}
```

Much better!

So, in summary: the Phase of **_Leaf Nodes_** (that is, the final gem in a given branch of a pipeline) is the Phase that will dictate the order of the generated code.

## What's next

Prophecy provides specific Spark gems and SQL gems for your pipelines and Models. Not only does Prophecy add new gems for your use, but you can also create gems yourself. To learn more, visit our documentation on [Spark gems](/Spark/gems) or [SQL gems](/SQL/gems).
