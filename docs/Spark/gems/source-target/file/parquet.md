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

import Requirements from "../../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

Parquet is an open-source Columnar storage data format. It handles large volumes of data by supporting complex pushdown predicates, nested schemas and a wide variety of column encoding types.

This Gem allows you to read from or write to Parquet files.

## Requirements

<Requirements
  packagename="ProphecySparkBasicsPython"
  packageversion="0.0.1"
  scalalib=""
  pythonlib=""
  packageversion143="Supported"
  packageversion154="Supported"
  additional_requirements=""
/>

## Source

Reads data from Parquet files at the given path.

### Source Parameters

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required | Default                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | -------------------------------------------------------------- |
| Location              | File path where parquet files are present                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | True     | None                                                           |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as json or inferred using `Infer Schema` button.                                                                                                                                                                                                                                                                                                                                                                                                                      | True     | None                                                           |
| Recursive File Lookup | This is used to recursively load files from the given Location. Disables partition discovery. An exception will be thrown if this option and a `partitionSpec` are specified.                                                                                                                                                                                                                                                                                                                                                        | False    | False                                                          |
| Path Global Filter    | An optional glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html). It does not change the behavior of partition discovery.                                                                                                                                                                                                                                                                             | False    | None                                                           |
| Modified Before       | An optional Timestamp to only include files with modification times occurring before the specified Time. The provided timestamp must be in `YYYY-MM-DDTHH:mm:ss` form (e.g. `2020-06-01T13:00:00`)                                                                                                                                                                                                                                                                                                                                   | False    | None                                                           |
| Modified After        | An optional timestamp to only include files with modification times occurring after the specified Time. The provided timestamp must be in `YYYY-MM-DDTHH:mm:ss` form (e.g. `2020-06-01T13:00:00`)                                                                                                                                                                                                                                                                                                                                    | False    | None                                                           |
| Merge Schema          | Sets whether schemas should be merged from all collected Parquet part-files. This will override `spark.sql.parquet.mergeSchema`.                                                                                                                                                                                                                                                                                                                                                                                                     | False    | (value of `spark.sql.parquet.`<br/>`mergeSchema`)              |
| Int96 Rebase mode     | The `int96RebaseMode` option allows to specify the rebasing mode for INT96 timestamps from the Julian to Proleptic Gregorian calendar. <br/><br/> Currently supported modes are: <br/><br/>`EXCEPTION`: fails in reads of ancient INT96 timestamps that are ambiguous between the two calendars.<br/><br/>`CORRECTED`: loads INT96 timestamps without rebasing.<br/><br/>`LEGACY`: performs rebasing of ancient timestamps from the Julian to Proleptic Gregorian calendar.                                                          | False    | (value of `spark.sql.parquet`<br/>`.int96RebaseModeInRead`)    |
| Datetime Rebase mode  | The `datetimeRebaseMode` option allows to specify the rebasing mode for the values of the DATE, TIMESTAMP_MILLIS, TIMESTAMP_MICROS logical types from the Julian to Proleptic Gregorian calendar.<br/>Currently supported modes are:<br/><br/>`EXCEPTION`: fails in reads of ancient dates/timestamps that are ambiguous between the two calendars.<br/><br/>`CORRECTED`: loads dates/timestamps without rebasing.<br/><br/>`LEGACY`: performs rebasing of ancient dates/timestamps from the Julian to Proleptic Gregorian calendar. | False    | (value of `spark.sql.parquet`<br/>`.datetimeRebaseModeInRead`) |

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

### Target Parameters

Write data as Parquet files at the specified path.

| Parameter         | Description                                                                                                                                                                                                                                         | Required | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path where the Parquet files will be written                                                                                                                                                                                                   | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (`none`, `uncompressed`, `snappy`, `gzip`, `lzo`, `brotli`, `lz4`, and `zstd`). This will override `spark.sql.parquet.compression.codec`. | False    | `snappy |
| Write Mode        | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                                                                                                              | True     | `error` |
| Partition Columns | List of columns to partition the Parquet files by                                                                                                                                                                                                   | False    | None    |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the Dataframe.                                                            |
| append     | If data already exists, append the contents of the Dataframe.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the Dataframe. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

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
To know more about tweaking Parquet related properties in Spark config [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-parquet.html).
:::
