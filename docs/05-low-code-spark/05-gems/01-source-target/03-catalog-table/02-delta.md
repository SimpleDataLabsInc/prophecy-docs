---
title: Delta Table
sidebar_position: 2
---

Reads data from delta tables saved in data catalog and writes data into delta table in data catalog.

:::note
Please choose the provider as delta on properties page.
:::

## Source

### Source Parameters
| Parameter        | Description                                | Required |
|:-----------------|:-------------------------------------------|:---------|
| Database name    | Name of the database                       | True     |
| Table name       | Name of the table                          | True     |
| Provider         | Provider needs to be selected as delta     | True     |
| Filter Predicate | Where clause to filter the table           | False    |
| Read Timestamp   | Time travel to a specific timestamp        | False    |
| Read Version     | Time travel to a specific version of table | False    |

:::note
For time travel on delta tables:
1. Only one among timestamp and version can be chosen at a time for time travel.
2. Timestamp should be between the first commit timestamp and the latest commit timestamp in the table.
3. Version needs to be an integer. Its value has to be between min and max version of table.

By default most recent version of each row is fetched if no time travel option is used.
:::

:::info
To read more about delta time travel and its use cases [click here](https://databricks.com/blog/2019/02/04/introducing-delta-time-travel-for-large-scale-data-lakes.html).
:::

### Source Example



<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573367-057f47b0-c56c-4ffd-9ceb-27bc34444b41.mp4" title="Catalog delta source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>


### Spark Code

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
| Parameter                     | Description                                                                                                                                                                | Required |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|
| Database name                 | Name of the database                                                                                                                                                       | True     |
| Table name                    | Name of the table                                                                                                                                                          | True     |
| Custom file path              | Use custom file path to store underlying files                                                                                                                             | False    |
| Provider                      | Provider needs to be selected as delta                                                                                                                                     | True     |
| Write Mode                    | Where clause to filter the table (Default is set to overwrite)                                                                                                             | True     |
| Use insert into               | Flag to use insert into method to write instead of save in spark.                                                                                                          | False    |
| Optimise write                | If true, it optimizes spark partition sizes based on the actual data                                                                                                       | False    |
| Overwrite table schema        | If true, overwrites the schema of the delta table as per the dataframe                                                                                                     | False    |
| Merge schema                  | If true, then any columns that are present in the DataFrame but not in the target table are automatically added on to the end of the schema as part of a write transaction | False    |
| Partition Columns             | List of columns to partition the delta table by                                                                                                                            | False    |
| Overwrite partition predicate | If specified, then it selectively overwrites only the data that satisfies the given where clause expression.                                                               | False    |

Below are different type of write modes which prophecy provided hive catalog supports.

| Write Mode | Description                                                                                                                                                                                   |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| overwrite  | If data already exists, existing data is expected to be overwritten by the contents of the DataFrame.                                                                                         |
| append     | If data already exists, contents of the DataFrame are expected to be appended to existing data.                                                                                               |
| ignore     | If data already exists, the save operation is expected not to save the contents of the DataFrame and not to change the existing data. This is similar to a CREATE TABLE IF NOT EXISTS in SQL. |
| error      | If data already exists, an exception is expected to be thrown.                                                                                                                                |
| merge      | Insert, delete and update data using the delta merge command.                                                                                                                                 |
| scd2 merge | It is a delta merge operation that stores and manages both current and historical data over time.                                                                                             |

:::note
Among these write modes overwrite, append, ignore and error works the same way as in case of parquet file writes.

To read more about using merge write mode [**click here**](../01-file/05-delta.md#merge-write-mode-with-delta)

To read more about using scd2 merge write mode [**click here**](../01-file/05-delta.md#scd2-merge-write-mode-with-delta)
:::

### Target Example
<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173573390-2295b399-f6af-49f1-b398-dfd66072d1b3.mp4" title="Catalog delta target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>


### Spark Code

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






