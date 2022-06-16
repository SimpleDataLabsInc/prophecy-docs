---
title: Hive Table
id: hive
description: Read from or write to Tables managed by a Hive metastore
sidebar_position: 1
tags:
  - gems
  - catalog
  - hive
---

Reads data from or writes data to Hive tables managed by your workspace's Metastore.

:::note
Please choose the provider as `Hive` on properties page.
:::

## Source

### Source Parameters

| Parameter        | Description                      | Required | Default       |
| :--------------- | :------------------------------- | :------- | ------------- |
| Database name    | Name of the database             | True     |               |
| Table name       | Name of the table                | True     |               |
| Provider         | Must be set to `hive`            | True     |               |
| Filter Predicate | Where clause to filter the table | False    | (all records) |

### Source Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173572911-4240f0bd-0277-4c64-89bb-8f9e18078447.mp4" title="Catalog hive source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

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

### Target Parameters

| Parameter         | Description                                                          | Required | Default       |
| ----------------- | -------------------------------------------------------------------- | -------- | ------------- |
| Database name     | Name of the database                                                 | True     |               |
| Table name        | Name of the table                                                    | True     |               |
| Custom file path  | Use custom file path to store underlying files                       | False    |               |
| Provider          | Must be set to `hive`                                                | True     |               |
| Write Mode        | Where clause to filter the table                                     | True     | (all records) |
| File Format       | File format to use when saving data                                  | True     | `parquet`     |
| Partition Columns | Columns to partition by                                              | False    | (empty)       |
| Use insert into   | If `true`, use `.insertInto` instead of `.save` when generating code | False    | `false`       |

Below are different type of write modes which prophecy provided hive catalog supports.

| Write Mode | Description                                                                                                                                                                                     |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, existing data is expected to be overwritten by the contents of the DataFrame.                                                                                           |
| append     | If data already exists, contents of the DataFrame are expected to be appended to existing data.                                                                                                 |
| ignore     | If data already exists, the save operation is expected not to save the contents of the DataFrame and not to change the existing data. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, an exception is expected to be thrown.                                                                                                                                  |

Below are different type of file formats during write which prophecy provided hive catalog supports.

1. Parquet
2. Text file
3. Avro
4. ORC
5. RC file
6. Sequence file

### Target Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573043-0bdb0bb2-a42a-477b-8391-0325b444372f.mp4" title="Catalog hive target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

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
