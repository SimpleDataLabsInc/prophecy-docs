---
title: Delta Table
id: delta
slug: /engineers/delta-table
description: Read from or write to tables managed by a Delta table metastore
tags:
  - gems
  - catalog
  - delta
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

Reads from and writes to Delta tables that your execution environment's Metadata catalog manages.

## Prerequisites

Before you specify parameters and properties, select the Delta table type:

1. Open the Source or Target gem configuration.
1. On the **Type & Format** page, select **Catalog Table**.
1. On the **Properties** page, set the **provider** property to `delta`.

## Parameters

| Parameter         | Tab        | Description                                                                                                                                                                                     |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Unity Catalog | Location   | Whether to use a Unity catalog.                                                                                                                                                                 |
| Catalog           | Location   | If you use a unity catalog, specify which catalog to use.                                                                                                                                       |
| Database          | Location   | Name of the database to connect to.                                                                                                                                                             |
| Table             | Location   | Name of the table to connect to.                                                                                                                                                                |
| Use file path     | Location   | Whether to use a custom file path to store underlying files in the Target gem.                                                                                                                  |
| Schema            | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from Delta tables and allows you to optionally specify the following additional properties.

### Source properties

| Properties       | Description                                                                                                                                                     | Default |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description      | Description of your dataset.                                                                                                                                    | None    |
| Provider         | Provider to use. **You must set this to `delta`.**                                                                                                              | `delta` |
| Filter Predicate | Where clause to filter the table by.                                                                                                                            | None    |
| Read timestamp   | Time travel in milliseconds to a specific timestamp. <br/>This value should be between the first commit timestamp and the latest commit timestamp in the table. | None    |
| Read version     | Time travel to a specific version of the table.                                                                                                                 | None    |

:::note
You can only select `Read Timestamp` or `Read Version`, not both.

If you don't use a time travel option, the Source gem fetches the most recent version of each row by default.
:::

To learn more about Delta time travel and its use cases, see [Introducing Delta Time Travel for Large Scale Data Lakes](https://databricks.com/blog/2019/02/04/introducing-delta-time-travel-for-large-scale-data-lakes.html).

### Source example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573367-057f47b0-c56c-4ffd-9ceb-27bc34444b41.mp4" title="Catalog delta source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Compiled code {#source-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

#### Without filter predicate

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def Source(spark: SparkSession) -> DataFrame:
    return spark.read.table(f"test_db.test_table")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Source {

  def apply(spark: SparkSession): DataFrame = {
    spark.read.table("test_db.test_table")
  }

}
```
</TabItem>
</Tabs>
````

#### With filter predicate

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def Source(spark: SparkSession) -> DataFrame:
    return spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Source {

  def apply(spark: SparkSession): DataFrame =
    spark.sql("SELECT * FROM test_db.test_table WHERE col > 10")

}
```
</TabItem>
</Tabs>
````

## Target

The Target gem writes data to Delta tables and allows you to optionally specify the following additional properties.

### Target properties

| Property                                 | Description                                                                                                                                                   | Default |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description                              | Description of your dataset.                                                                                                                                  | None    |
| Provider                                 | Provider to use. **You must set this to `delta`.**                                                                                                            | `delta` |
| Write Mode                               | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                          | `error` |
| Use insert into                          | Whether to use the `insertInto()` method to write instead of the `save()` method.                                                                             | false   |
| Overwrite table schema                   | Whether to overwrite the schema of the Delta table.                                                                                                           | false   |
| Merge DataFrame schema into table schema | Whether to automatically add columns that are present in the `DataFrame` but not in the Target table to the end of the schema as part of a write transaction. | false   |
| Partition Columns                        | List of columns to partition the Delta table table by.                                                                                                        | None    |
| Overwrite partition predicate            | Selectively overwrite only the data that satisfies the given where clause expression.                                                                         | None    |
| Optimize write                           | Whether to optimize Spark partition sizes based on the actual data.                                                                                           | false   |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| error      | If the data already exists, throw an exception.                                                                                                      |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |
| merge      | Use the Delta `merge` command to insert, delete and update data. For more information, see [DeltaTableOperations](/engineers/delta).                 |
| scd2 merge | Store and manage the current and historical data over time. For more information, see [DeltaTableOperations](/engineers/delta).                      |

:::tip
These `overwrite`, `append`, `ignore`, and `error` write modes operate the same way as with other native Spark-supported formats such as Parquet.
:::

### Target example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573390-2295b399-f6af-49f1-b398-dfd66072d1b3.mp4" title="Catalog Delta target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Compiled code {#target-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def Target(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("delta")\
        .mode("overwrite")\
        .saveAsTable("test_db.test_table")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Target {

  def apply(spark: SparkSession, in: DataFrame): DataFrame = {
    in.write
      .format("delta")
      .mode("overwrite")
      .saveAsTable("test_db.test_table")
  }

}
```
</TabItem>
</Tabs>
````
