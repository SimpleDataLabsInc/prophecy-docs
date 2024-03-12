---
title: Configuration
id: configuration
description: Low-code Spark Configuration
sidebar_position: 2
tags:
  - spark
  - development
  - config
---

Allows you to define configurations to control various aspects of your Pipeline.
![Config Option](img/config-option.png)

Prophecy IDE allows you to define three kinds of configurations:

## Spark Configuration

Set runtime Spark configurations as name-value pairs. The name-value pairs will be set inside the Spark runtime configurations as `spark.conf.set(name, value)`

![Configurations - Spark](./img/configs_spark.png)

## Hadoop Configuration

Hadoop configurations as name-value pairs. The name-value pairs will be set inside the Hadoop configuration as `spark.sparkContext.hadoopConfiguration.set(name, value)`

![Configurations - Spark](./img/configs_hadoop.png)

## Pipeline Configuration

Config values which can be set at Pipeline level and then be accessed inside any component in the Pipeline. [Multiple instances](#pipeline-configuration-instances)
of configuration can be created per Pipeline.
![Configurations - Common](img/config-pipeline-eg1.png)

---

Syntax for using configuration inside Gems:

![Visual Language Selection](img/config-pipeline-visual-language.png)

For visual language SQL : `'$config_name'`

For visual language Scala/Python : `Config.config_name`

For using Spark expression with visual language SQL : `expr('$config_name')`

For using Spark expression with visual language Scala/Python : `expr(Config.config_name)`

## Examples for Pipeline level configurations

Now let's use the [above defined configurations](#pipeline-configuration) in the below Pipeline.
![Pipeline view](img/config-pipeline-view-eg.png)

### Using Config in limit Gem

#### SQL Visual Language

In the below image `'$num_top_customers'` is fetching the integer value defined in configurations.

![Config Limit Example](img/config-pipeline-limit-eg.png)

#### Scala/Python Visual Language

In the below image `Config.num_top_customers` is fetching the integer value defined in configurations.

![Config Limit Example](img/config-pipeline-limit-eg-scala-python.png)

### Using Spark-expression Config type in Gem

Here we have used Spark expression directly from our config value to populate a column.

#### SQL Visual Language {#Spark-expression}

In the below image:<br />

**(1)** `amounts` -> `expr('$test_expression')` is coming from configuration type defined as `Spark-expression` <br />
**(2)** `report_name` -> `'$report_name'` is coming configuration type defined as string

![Config Reformat example](img/config-pipeline-reformat-eg.png)

#### Scala/Python Visual Language {#Spark-expression}

In the below image: <br />

**(1)** `amounts` -> `expr(Config.test_expression)` is coming from configuration type defined as `Spark-expression` <br />
**(2)** `report_name` -> `Config.report_name` is coming configuration type defined as string

![Config Reformat example](img/config-pipeline-reformat-eg-scala-python.png)

:::note
Similarly configurations defined as type `Spark-expression` can be used directly in filter, join, reformat etc Gems directly.
:::

### Using config in paths for Source/Target Gems

Config can also be used to refer to paths. This type of configuration comes in handy in situation where we have DEV, QA and PROD data.
And want to configure Dataset (or in general the Job runs) based on which environment we are running it in.

![Config path example](img/config-pipeline-path-eg.png)

### Edit Pipeline Name

To change the Pipeline name itself, go to Prophecy's metadata page. Locate the Pipeline within a Project, and click the pencil icon.
![EditPipelineName](img/edit-pipeline-name.png)

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

### Scala Config code

![Config scala code](img/config-scala-code.png)

### Python Config code

![Config python code](img/config-python-code.png)

### Component code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def Reformat(spark: SparkSession, in0: DataFrame) -> DataFrame:
    return in0.select(
        col("customer_id"),
        col("orders"),
        col("account_length_days"),
        expr(Config.test_expression).as("amounts"),
        lit(Config.report_name).as("report_name")
    )
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Reformat {

  def apply(spark: SparkSession, in: DataFrame): DataFrame =
    in.select(col("customer_id"),
              col("orders"),
              col("account_length_days"),
              expr(Config.test_expression).as("amounts"),
              lit(Config.report_name).as("report_name")
    )

}

```

</TabItem>
</Tabs>

````

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
