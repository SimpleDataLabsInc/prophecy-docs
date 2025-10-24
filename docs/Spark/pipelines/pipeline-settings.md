---
title: Pipeline settings
id: pipeline-settings
slug: /engineers/pipeline-settings
description: Control how your pipeline runs
tags:
  - spark
  - pipeline
  - settings
---

:::edition Enterprise
Available for [Enterprise Edition](/getting-started/editions/) only.
:::

Review the various settings available for each pipeline, including Spark settings, code customization, development preferences, job sampling, run settings, and initialization code.

![Pipeline settings](img/pipeline-settings.png)

## Spark

<div className="fixed-table">

| Setting              | Description                                                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Spark version        | The Spark version associated with the pipeline.                                                                            |
| Mode                 | The pipeline's mode (either batch or streaming).                                                                           |
| Spark configuration  | Name-value pairs will be set inside the Spark runtime configurations as `spark.conf.set(name, value)`.                     |
| Hadoop configuration | Name-value pairs will be set inside the Hadoop configuration as `spark.sparkContext.hadoopConfiguration.set(name, value)`. |

</div>

## Code

<div className="fixed-table">

| Setting                                  | Description                                                                                                                                                                                                                       |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package Name                             | The name of the package if the project is published to the [Package Hub](/engineers/package-hub).                                                                                                                                 |
| Config Package Name                      | A unique name for the pipeline's configuration package.<br />Only pipelines made before Prophecy 3.4.5.0 may need to have a custom config package name.                                                                           |
| Custom Application Name                  | The name of the Spark job that appears in the Spark interface.                                                                                                                                                                    |
| Allow Configuration Updates (Scala only) | When enabled, you can override configuration values using a script.<br />For example, if you add a Script gem to the pipeline, you can write something like `Config.current_date_var = "2024"` to set the value of that variable. |
| Enable pipeline monitoring               | The option to turn pipeline monitoring on or off.                                                                                                                                                                                 |
| Enable jinja based configuration         | The option to turn [jinja syntax](/engineers/configurations#use-configuration-variables) on or off.                                                                                                                               |

</div>

## Development

<div className="fixed-table">

| Setting         | Description                                                                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visual Language | The programming language (SQL, Scala, or Python) used for expressions inside of gems. If you change the visual language while developing your pipeline, Prophecy will automatically convert expressions into the chosen language. The [Expression Builder](/engineers/expression-builder) will adapt to the language as well. |

</div>

## Job

<div className="fixed-table">

| Setting                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| Job Data Sampling      | A toggle to enable or disable data sampling during job runs. |
| Job Data Sampling Mode | The sampling mode used during job runs.                      |

</div>

## Run Settings

<div className="fixed-table">

| Property            | Description                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Limit Input Records | When enabled, this limits the number of rows being operated on, makes development time faster, and reduces computation cost. Depending on how your pipeline is constructed, you might run into some issues when limiting records. If the number of records is too small, you might accidentally exclude records that, for example, match a join condition. This would result in an empty output. |
| Data Sampling       | Data sampling is enabled by default so you can view interim data samples while developing your pipeline. Learn about different [sampling modes](docs/Spark/execution/data-sampling.md).                                                                                                                                                                                                          |
| Configuration       | This setting determines which [configuration](/engineers/configurations) will be used during a pipeline run.                                                                                                                                                                                                                                                                                     |

</div>

## Initialization Code

<div className="fixed-table">

| Setting                 | Description                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UDF initialization code | The code that is run before initializing any UDF method. In this field, you can define variables, add common classes, include common imports, and more. |

</div>
