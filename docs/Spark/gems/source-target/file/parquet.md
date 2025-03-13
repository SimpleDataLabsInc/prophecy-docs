---
title: Parquet
id: parquet
description: Parquet
sidebar_position: 10
tags:
  - gems
  - file
  - parquet
---

The Parquet file type:

- Is an open-source columnar storage.
- Handles large volumes of data by supporting complex pushdown predicates, nested schemas and a wide variety of column encoding types.

## Source

The Source gem reads data from Parquet files.

### Source Parameters

| Parameter               | Description                                                                                                                                                                                                                                                                                                            | Required | Default                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------- |
| Location                | File path to read the parquet files.                                                                                                                                                                                                                                                                                   | True     | None                                                           |
| Use user-defined schema | Whether to use the schema you defined.                                                                                                                                                                                                                                                                                 | True     | None                                                           |
| Recursive File Lookup   | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception.                                                                                                                             | False    | False                                                          |
| Path Global Filter      | Glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery.                                                                           |
| False                   | None                                                                                                                                                                                                                                                                                                                   |
| Modified Before         | Timestamp to only include files with modification times occurring before the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                                                                                     | False    | None                                                           |
| Modified After          | Timestamp to only include files with modification times occurring after the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00).                                                                                                                      | False    | None                                                           |
| Merge Schema            | Whether Prophecy should merge schemas from all collected Parquet part-files. This overrides `spark.sql.parquet.mergeSchema`.                                                                                                                                                                                           | False    | (value of `spark.sql.parquet.`<br/>`mergeSchema`)              |
| Int96 Rebase Mode       | Specify the rebasing mode for INT96 timestamps from the Julian to Proleptic Gregorian calendar. calendar. To see a list of possible values, see [the Supported Int96 Rebase Modes table](#supported-int96-rebase-modes).                                                                                               | False    | (value of `spark.sql.parquet`<br/>`.int96RebaseModeInRead`)    |
| Datetime Rebase Mode    | The `datetimeRebaseMode` option allows to specify the rebasing mode for the values of the DATE, TIMESTAMP_MILLIS, TIMESTAMP_MICROS logical types from the Julian to Proleptic Gregorian calendar. To see a list of possible values, see [the Supported Datetime Rebase Modes table](#supported-datetime-rebase-modes). | False    | (value of `spark.sql.parquet`<br/>`.datetimeRebaseModeInRead`) |

### Supported Int96 Rebase Modes

| Int96 Rebase Modes | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| EXCEPTION          | Fails in reads of ancient INT96 timestamps that are ambiguous between two calendars. |
| CORRECTED          | Loads INT96 timestamps without rebasing.                                             |
| LEGACY             | Rebases ancient INT96 timestamps from the Julian to Proleptic Gregorian.             |

### Supported Datetime Rebase Modes

| Datetime Rebase Modes | Description                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------- |
| EXCEPTION             | Fails in reads of ancient dates and timestamps that are ambiguous between two calendars. |
| CORRECTED             | Loads dates and timestamps without rebasing.                                             |
| LEGACY                | Rebases ancient dates and timestamps from the Julian to Proleptic Gregorian.             |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175030738-4c53b5c9-73e7-46c7-9fdc-c49048f78572.mp4" title="Parquet Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

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

The Target gem writes data to Parquet files.

### Target Parameters

| Parameter         | Description                                                                                                                                                                                                     | Required | Default  |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| Location          | File path to write the Parquet file to.                                                                                                                                                                         | True     | None     |
| Compression Codec | ompression codec used when writing. <br/>Prophecy supports the following codecs: `none`, `uncompressed`, `gzip`, `lz4`, `snappy` and `lzo`. This overrides the `spark.sql.parquet.compression.codec` parameter. | False    | `snappy` |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).                                                                                   | True     | `error`  |
| Partition Columns | List of columns to partition the Parquet files by.                                                                                                                                                              | False    | None     |

### Supported write modes

| Write mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

### Example {#target}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175030713-9de9d38a-c145-42e9-8411-baa44a70d0d0.mp4" title="Parquet Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

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

:::info
To learn more about tweaking Parquet properties in a Spark configuration, see [Parquet Files](https://spark.apache.org/docs/latest/sql-data-sources-parquet.html).
:::
