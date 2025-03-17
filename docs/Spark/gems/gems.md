---
title: Gems for Spark projects
id: spark-gems
description: Prophecy Spark Gems
tags:
  - spark
  - gem
---

[Gems](/docs/getting-started/concepts/gems.md) are functional units in a [pipeline](docs/Spark/pipelines/pipelines.md) that perform tasks such as reading, transforming, writing, or handling other data operations.

## Categories

The table below outlines the different Spark gem categories.

| Category                                              | Description                                                                                                 |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [**Source and Target**](/Spark/gems/source-target/)   | The set of gems that help with loading and saving data.                                                     |
| [**Transform**](/Spark/gems/transform/)               | The set of gems that help with transforming data.                                                           |
| [**Join and Split**](/Spark/gems/join-split/)         | The set of gems that help with the process of merging or splitting DataFrame(s) to create new DataFrame(s). |
| [**Custom**](/Spark/gems/custom/)                     | The set of gems that our creative teams build using Expression Builder to extend the Prophecy capabilities. |
| [**Machine Learning**](/Spark/gems/machine-learning/) | The set of gems that prepare data or use data for Machine Learning.                                         |
| [**Subgraph**](/Spark/gems/subgraph/)                 | A gem that can contain many other gems within it.                                                           |

## Gem instance

When you click on a gem from the gem drawer, an instance of that gem gets added to your pipeline canvas. Use the image and the table below to understand the UI of a gem.

![Gem Instance](img/gems/instance.png)

| Callout | UI element        | Description                                                                                                 |
| :-----: | ----------------- | ----------------------------------------------------------------------------------------------------------- |
|    1    | Gem instance name | The name of this particular gem instance. It must be unique within a given pipeline.                        |
|    2    | Gem type name     | The type of gem.                                                                                            |
|    3    | Input ports       | One or more ports that accept connections from upstream gems.                                               |
|    4    | Output ports      | One or more ports that connect to downstream gems.                                                          |
|    5    | Gem phase         | The [phase](#gem-phase) for this gem instance, which defines the order in which gem instances are executed. |
|    6    | Open              | The button that lets you open the gem configuration.                                                        |
|    7    | Run button        | A button that runs the pipeline up to and including the gem.                                                |
|    8    | Action menu       | A menu that includes options to change the phase of the gem, add run conditions, delete the gem, and more.  |

## Gem configuration

When you open a gem, you can configure how the gem will work.

![Gem instance configuration](img/gems/instance_open.png)

|     | UI element         | Description                                                                                                                      |
| :-: | ------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Gem instance name  | The name of this particular gem instance.                                                                                        |
|  2  | Inputs and outputs | The inputs and outputs for this gem instance.                                                                                    |
|  3  | Gem configuration  | The configuration for this instance. Each gem will be different. See the documentation for individual gems for more information. |
|  4  | Run button         | A button that runs the pipeline up to and including the gem.                                                                     |
|  5  | Diagnostics        | A diagnostics window that will show a list of configuration errors if they exist.                                                |
|  6  | Data               | A preview of the output table that is available if you run the gem.                                                              |
|  7  | Unit tests         | A set of unit tests. See [here](/ci-cd/tests) for more details.                                                                  |

## Input ports

The Input tab defines the incoming connections accepted by the gem. Most gem types only accept one connection, but some (such as [Join](/docs/Spark/gems/join-split/join.md)) allow for multiple inputs.

![Input UI](img/gems/inputs.png)

|     | UI element  | Description                                                                                                   |
| :-: | ----------- | ------------------------------------------------------------------------------------------------------------- |
|  1  | Search      | A field that will filter your input columns.                                                                  |
|  2  | Add Input   | If the gem supports multiple inputs, you can click this button to add more input ports to this instance.      |
|  3  | Input       | The name of the input port and the name of the input gem instance.                                            |
|  4  | Port schema | The schema of the port (columns and column types). The schema will only appear when an input port is present. |
|  5  | Edit ports  | A button that lets you edit or delete ports.                                                                  |

## Output ports

The Output tab defines the outgoing schemas that will be available to downstream gems. In some cases, the Prophecy compiler can't infer the output schema automatically, so you have the option to infer the schema using your connected fabric or specify it manually.

|     | UI element         | Description                                                                                                     |
| :-: | ------------------ | --------------------------------------------------------------------------------------------------------------- |
|  1  | Output schema      | Output schema for this gem instance. This will be the schema of the data that downstream gem instances will use |
|  2  | Custom schema      | Toggle this to enable custom output schema editing                                                              |
|  3  | Infer from cluster | Run the gem code on the connected cluster and infer the schema from the result                                  |
|  4  | Edit schema        | Edit the output schema manually                                                                                 |

## Action menu

- Change phase:
- Add condition: build conditional execution
- Cache:
- Data preview: enable selective sampling

### Gem phase

A gem's phase in a pipeline controls the order in which a gem will run. This is achieved by reordering the code generated for the pipeline:

```scala
def apply(spark: SparkSession): Unit = {
  val df_my_orders     = my_orders(spark).cache()
  val df_Repartition_1 = Repartition_1(spark, df_my_orders)
  Write_CSV(spark, df_Repartition_1)
  val df_SchemaTransform_1 = SchemaTransform_1(spark, df_my_orders)
}
```

A gem with phase `0` will be put before a gem with phase `1`. The phase can be any integer (positive or negative).

It's important to note that when you run downstream gems, **their upstream gems also must run**. Therefore, if a downstream gem is assigned phase `0` and an upstream gem is assigned phase `1`, the upstream gem will be grouped with phase `0`.

Because of this, the phase of the last gem in a pipeline branch will determine the phase of the whole branch. In other words, **only the phases of leaf nodes** matter when you are configuring gem phases.
