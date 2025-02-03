---
title: Configurations
id: configuration
description: Configuring Prophecy's interface for Spark
tags:
  - spark
  - development
  - config
  - variable
---

There are multiple pipeline-level configurations that you can set in Prophecy. Let's explore the different ways that you can set configurations.

## Pipeline configurations

For each pipeline in the project editor, you'll see a **Config** option in the pipeline header. When you open it, you'll see two tabs: Schema and Config.

### Schema tab

The **Schema** tab is where you declare your variables. These variables will be accessible to any component in the respective pipeline.

![Schema tab](img/configuration/config-schema.png)

| Parameter   | Description                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Name        | The name of the variable.                                                                                                                   |
| Type        | The data type of the variable.                                                                                                              |
| Optional    | A checkbox to define if the variable is optional. When the checkbox is **not** selected, you **must** set a default value for the variable. |
| Description | An optional field where you can describe your variable.                                                                                     |

### Config tab

The Config tab lets you set default values for your variables. You can create multiple configurations with different default values, which is useful when running your pipeline in different environments (like production and development).

![Multiple configurations](img/configuration/config-new-instance.png)

You can select which configuration to use when you:

- **Run the pipeline interactively.** To choose the configuration for interactive runs, open the Pipeline Settings and scroll to the Run Settings section. There, you can change the selected configuration.

  ![Choose config for interactive run](img/configuration/configuration-interactive-run.png)

- **Create a job.** When you add a pipeline to your job, you can choose the configuration to use during the job. The configuration defaults can also be overridden here.

  ![Choose config for job execution](img/configuration/configuration-job.png)

### Syntax

When you want to use the pipeline configuration variables inside your project, you need to know how to reference them. You can choose the syntax for this using the **Visual Language** field in the Development section of Pipeline Settings.

| Visual Language | Syntax               | Expression usage           |
| --------------- | -------------------- | -------------------------- |
| SQL             | `'$config_name'`     | `expr('$config_name')`     |
| Scala           | `Config.config_name` | `expr(Config.config_name)` |
| Python          | `Config.config_name` | `expr(Config.config_name)` |

For example, you can use a configuration in a path definition like so: `dbfs:/Prophecy/'$path_helper'/CustomersOrders.csv` (SQL syntax). This is useful when you want to configure a target location based on which environment you are running the pipeline in.

#### Jinja

Regardless of the visual language, you also can use Jinja config syntax for configurations inside of your Spark gems. Jinja variable syntax looks like: `{{config_name}}`.

You can use the following syntax examples for accessing elements of array and record fields:

- For array: `{{ config1.array_config[23] }}`
- For record: `{{ record1.record2.field1 }}`

:::note

Jinja configurations are enabled by default in new pipelines. To disable this setting, open the Pipeline Settings and turn off the **Enable jinja based configuration** toggle.

:::

## Spark and Hadoop configurations

When you open the Pipeline Settings of a project, you have the option to set up Spark and Hadoop configurations:

- For Spark, name-value pairs will be set inside the Spark runtime configurations as `spark.conf.set(name, value)`.
- For Hadoop, name-value pairs will be set inside the Hadoop configuration as `spark.sparkContext.hadoopConfiguration.set(name, value)`.

![Spark and Hadoop configurations](./img/configuration/config-spark-hadoop.png)

## Code

All configuration instances and values are automatically converted to code. Default configurations are stored as code and
specific instance overrides are stored as JSON files as shown in image below.

- **Scala configuration code**

  ![Config scala code](img/configuration/config-scala-code.png)

- **Python configuration code**

  ![Config python code](img/configuration/config-python-code.png)
