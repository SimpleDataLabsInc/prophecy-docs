---
title: Configuration
id: configuration
description: Low-code Spark Configuration
sidebar_position: 4
tags:
  - spark
  - development
  - config
---

Allows you to define configurations to control various aspects of your Pipeline.
![Config Option](img/config-option.png)

Prophecy IDE allows you to define three kinds of configurations:

## Spark Configuration

Runtime Spark configurations as name-value pairs. The name-value pairs will be set inside the Spark runtime configurations as `spark.conf.set(name, value)`

![Configurations - Spark](./img/configs_spark.png)

## Hadoop Configuration

Hadoop configurations as name-value pairs. The name-value pairs will be set inside the Hadoop configuration as `spark.sparkContext.hadoopConfiguration.set(name, value)`

![Configurations - Spark](./img/configs_hadoop.png)

## Pipeline Configuration

Config values which can be set at Pipeline level and then be accessed inside any component in the Pipeline. [Multiple instances](#pipeline-configuration-instances)
of configuration can be created per Pipeline.
![Configurations - Common](img/config-pipeline-eg1.png)

Syntax for using configuration inside Gems:

For visual language SQL : `'$config_name'`
For visual language Scala/Python : `Config.config_name`

For using Spark expression with visual language SQL : `expr('$config_name')`
For using Spark expression with visual language Scala/Python : `expr(Config.config_name)`

## Examples for Pipeline level configurations

Now let's use the [above defined configurations](#pipeline-configuration) in the below Pipeline.
![Pipeline view](img/config-pipeline-view-eg.png)

### Using Config in limit Gem

In the below image `'$num_top_customers'` is fetching the integer value defined in configurations.

![Config Limit Example](img/config-pipeline-limit-eg.png)

### Using Spark-expression Config type in Gem

Here we have used Spark expression directly from our config value to populate a column.

In the below image `amounts` -> `expr('$test_expression')` is coming from configuration type defined as `Spark-expression`
and `report_name` -> `'$report_name'` is coming configuration type defined as string.

![Config Reformat example](img/config-pipeline-reformat-eg.png)

Similarly configurations defined as type Spark-expression can be used directly in filter, join, reformat etc.

### Using config in paths for Source/Target Gems

Config can also be used to refer to paths. This type of configuration comes in handy in situation where we have dev, qa and prod data.
And want to configure Dataset (or in general the Job runs) based on which environment we are running it in.

![Config path example](img/config-pipeline-path-eg.png)

## Pipeline Configuration instances

Different configuration instances can be defined as per requirement. This comes in handy when Pipeline needs to run with different
configurations in different environments or different users.

New instances can be configured to override default values as shown in image below:

![Create config instance](img/config-new-instance.png)

![Create pipeline override](img/config-pipeline-override.png)

### Using a particular configuration instance for interactive runs

For interactive runs, configuration can be selected as shown in image below.
![Config interactive run](img/config-instance-interactive-run.png)

### Using configuration instances in Jobs

Particular instances can also be configured in Databricks Jobs.

![Config inside job](img/config-inside-job.png)

### Overriding configuration values in Jobs

Specific values from configuration instance can be overridden as shown in images below:

![Config job override](img/config-job-override.png)

## Code

All configuration instances and values are automatically converted to code as well. Default configurations are stored as code and
specific instance overrides are stored as JSON files as shown in image below.

### Scala

![Config scala code](img/config-scala-code.png)

### Python

![Config python code](img/config-python-code.png)
