---
title: Hive Table
id: hive
slug: /engineers/hive-table
description: Read from or write to tables managed by a Hive metastore
tags:
  - gems
  - catalog
  - hive
---

Reads from and writes to Hive tables that your execution environment's Metadata catalog manages.

## Prerequisites

Before you specify parameters and properties, select the Hive table type:

1. Open the Source or Target gem configuration.
1. On the **Type & Format** page, select **Catalog Table**.
1. On the **Properties** page, set the **provider** property to `hive`.

## Parameters

| Parameter         | Tab        | Description                                                                                                                                                                                     |
| ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Unity Catalog | Location   | Whether to use a Unity catalog.                                                                                                                                                                 |
| Catalog           | Location   | If you use a unity catalog, specify which catalog to use.                                                                                                                                       |
| Database          | Location   | Name of the database to connect to                                                                                                                                                              |
| Table             | Location   | Name of the table to connect to.                                                                                                                                                                |
| Use file path     | Location   | Whether to use a custom file path to store underlying files in the Target gem.                                                                                                                  |
| Schema            | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from Hive tables and allows you to optionally specify the following additional properties.

### Source properties

| Properties       | Description                                       | Default       |
| ---------------- | ------------------------------------------------- | ------------- |
| Description      | Description of your dataset.                      | None          |
| Provider         | Provider to use. **You must set this to `hive`**. | `delta`       |
| Filter Predicate | Where clause to filter the table by.              | (all records) |

### Source example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173572911-4240f0bd-0277-4c64-89bb-8f9e18078447.mp4" title="Catalog hive source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated code {#source-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
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

| Property          | Description                                                                                                                               | Default   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Description       | Description of your dataset.                                                                                                              | None      |
| Provider          | Provider to use. **You must set this to `hive`**.                                                                                         | `delta`   |
| Write Mode        | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                      | `error`   |
| File Format       | File format to use when saving data. <br/>Supported file formats are: `sequencefile`, `rcfile`, `orc`, `parquet`, `textfile`, and `avro`. | `parquet` |
| Partition Columns | List of columns to partition the Hive table table by.                                                                                     | None      |
| Use insert into   | Whether to use the `insertInto()` method to write instead of the `save()` method.                                                         | false     |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| error      | If the data already exists, throw an exception.                                                                                                      |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

### Target example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573043-0bdb0bb2-a42a-477b-8391-0325b444372f.mp4" title="Catalog hive target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated code {#target-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def Target(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("hive")\
        .option("fileFormat", "parquet")\
        .mode("overwrite")\
        .saveAsTable("test_db.test_table")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object Target {

  def apply(spark: SparkSession, in: DataFrame): DataFrame = {
    in.write
      .format("hive")
      .option("fileFormat", "parquet")
      .mode("overwrite")
      .saveAsTable("test_db.test_table")
  }

}
```
</TabItem>
</Tabs>
````
