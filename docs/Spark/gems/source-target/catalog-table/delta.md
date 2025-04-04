---
title: Delta Table
id: delta
slug: /engineers/delta-table
description: Delta Table
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

Reads and writes Delta tables that are managed by the execution environment's Metadata catalog (Metastore).

:::note
Set the property `provider` to `Delta` on the properties page.
:::

## Source

### Source Parameters

| Parameter        | Description                                    | Required |
| ---------------- | ---------------------------------------------- | -------- |
| Database name    | Name of the database                           | True     |
| Table name       | Name of the table                              | True     |
| Provider         | Must be set to `Delta`                         | True     |
| Filter Predicate | Where clause to filter the table               | False    |
| Read Timestamp   | Time travel to a specific timestamp            | False    |
| Read Version     | Time travel to a specific version of the table | False    |

:::note
For time travel on Delta tables:

1. Only `Read Timestamp` **_OR_** `Read Version` can be selected, not both.
2. Timestamp should be between the first commit timestamp and the latest commit timestamp in the table.
3. Version needs to be an integer with value between min and max version of table.

By default most recent version of each row is fetched if no time travel option is used.
:::

:::info
To read more about Delta time travel and its use cases [click here](https://databricks.com/blog/2019/02/04/introducing-delta-time-travel-for-large-scale-data-lakes.html).
:::

### Source Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573367-057f47b0-c56c-4ffd-9ceb-27bc34444b41.mp4" title="Catalog delta source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
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

| Parameter                     | Description                                                                                                                                                                 | Required |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Database name                 | Name of the database                                                                                                                                                        | True     |
| Table name                    | Name of the table                                                                                                                                                           | True     |
| Custom file path              | Use custom file path to store underlying files.                                                                                                                             | False    |
| Provider                      | Must be set to `Delta`                                                                                                                                                      | True     |
| Write Mode                    | How to handle existing data. See [this table](/engineers/delta#supported-write-modes) for a list of available options. (Default is set to `error`.)                         | True     |
| Use insert into               | Flag to use `insertInto` method to write instead of `save`                                                                                                                  | False    |
| Optimize write                | If true, it optimizes Spark partition sizes based on the actual data.                                                                                                       | False    |
| Overwrite table schema        | If true, overwrites the schema of the Delta table.                                                                                                                          | False    |
| Merge schema                  | If true, then any columns that are present in the DataFrame but not in the target table are automatically added on to the end of the schema as part of a write transaction. | False    |
| Partition Columns             | List of columns to partition the Delta table by                                                                                                                             | False    |
| Overwrite partition predicate | If specified, then it selectively overwrites only the data that satisfies the given where clause expression.                                                                | False    |

:::note
Among these write modes `overwrite`, `append`, `ignore`, and `error` work the same way as with other native Spark-supported formats such as Parquet.

To read more about using `merge` or `SCD2` merge write mode [click here](/engineers/delta).

To read more about using `SCD2` merge write mode [click here](/engineers/delta).
:::

### Target Example

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573390-2295b399-f6af-49f1-b398-dfd66072d1b3.mp4" title="Catalog Delta target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

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
