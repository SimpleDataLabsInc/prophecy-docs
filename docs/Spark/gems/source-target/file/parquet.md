---
title: Parquet
id: parquet
description: Parameters and properties to read from and write to Parquet files
tags:
  - gems
  - file
  - parquet
---

The Parquet file type:

- Is an open-source columnar file format designed for efficient data storage and retrieval.
- Handles large volumes of data by supporting complex predicate pushdown, nested schemas, and a wide variety of column encoding types.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Parquet file.                                                                                                                                            |
| Schema    | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from Parquet files and allows you to optionally specify the following additional properties.

### Source properties

| Property name           | Description                                                                                                                                                                                                                                                              | Default                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | --- |
| Description             | Description of your dataset.                                                                                                                                                                                                                                             | None                                                                  |
| Use user-defined schema | Whether to use the schema you define.                                                                                                                                                                                                                                    | false                                                                 |
| Merge schema            | Whether the Target gem should merge schemas from all the Parquet part-files collected. This overrides `spark.sql.parquet.mergeSchema`.                                                                                                                                   | (value of `spark.sql.`<br/>`parquet.`<br/>`mergeSchema`)              |     |
| Datetime Rebase Mode    | Specify the rebasing mode for the values of the DATE, TIMESTAMP_MILLIS, TIMESTAMP_MICROS logical types from the Julian to Proleptic Gregorian calendar. <br/>For a list of the possible values, see [Supported Datetime rebase modes](#supported-datetime-rebase-modes). | (value of `spark.sql.`<br/>`parquet`<br/>`.datetimeRebaseModeInRead`) |
| Int96 Rebase Mode       | Specify the rebasing mode for INT96 timestamps from the Julian to Proleptic Gregorian calendar. For a list of the possible values, see [Supported Int96 rebase modes](#supported-int96-rebase-modes).                                                                    | (value of `spark.sql.`<br/>`parquet`<br/>`.int96RebaseModeInRead`)    |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, the Source gem throws an exception.                                                              | false                                                                 |
| Path Global Filter      | Glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery.                             | None                                                                  |
| Modified Before         | Timestamp to only include files with modification times occurring before the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                                              | None                                                                  |
| Modified After          | Timestamp to only include files with modification times occurring after the time you specify. The timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                                               | None                                                                  |

### Supported Int96 rebase modes

| Int96 rebase mode | Description                                                                          |
| ----------------- | ------------------------------------------------------------------------------------ |
| EXCEPTION         | Fails in reads of ancient INT96 timestamps that are ambiguous between two calendars. |
| CORRECTED         | Loads INT96 timestamps without rebasing.                                             |
| LEGACY            | Rebases ancient INT96 timestamps from the Julian to Proleptic Gregorian.             |

### Supported Datetime rebase modes

| Datetime rebase mode | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| EXCEPTION            | Fails in reads of ancient dates and timestamps that are ambiguous between two calendars. |
| CORRECTED            | Loads dates and timestamps without rebasing.                                             |
| LEGACY               | Rebases ancient dates and timestamps from the Julian to Proleptic Gregorian.             |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175030738-4c53b5c9-73e7-46c7-9fdc-c49048f78572.mp4" title="Parquet Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

:::tip
To see the generated source code, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) at the top of the page.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def read_parquet(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("parquet")\
        .option("mergeSchema", True)\
        .load("dbfs:/FileStore/Users/parquet/test.parquet")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object read_parquet {

  def apply(spark: SparkSession): DataFrame =
    spark.read
        .format("parquet")
        .option("mergeSchema", true)
        .load("dbfs:/FileStore/Users/parquet/test.parquet")

}
```
</TabItem>
</Tabs>
````

---

## Target

The Target gem writes data to Parquet files and allows you to optionally specify the following additional properties.

### Target properties

| Property name     | Description                                                                                                                                                                                                                                                | Default  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---- |
| Description       | Description of your dataset.                                                                                                                                                                                                                               | None     |
| Partition Columns | List of columns to partition the Parquet file by.                                                                                                                                                                                                          |          | None |
| Compression Codec | Compression codec when writing to the Parquet file. <br/>The Parquet file supports the following codecs: `none`, `uncompressed`, `gzip`, `lz4`, `snappy`, `lzo`, `brotli`, and `zstd`. This overrides the `spark.sql.parquet.compression.codec` parameter. | `snappy` |
| Write Mode        | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                                                                       | `error`  |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

### Example {#target}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175030713-9de9d38a-c145-42e9-8411-baa44a70d0d0.mp4" title="Parquet Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

:::tip
To see the generated source code, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) at the top of the page.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def write_parquet(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("parquet")\
        .mode("overwrite")\
        .save("dbfs:/data/test_output.parquet")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_parquet {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
        .format("parquet")
        .mode("overwrite")
        .save("dbfs:/data/test_output.parquet")
}
```
</TabItem>
</Tabs>
````
