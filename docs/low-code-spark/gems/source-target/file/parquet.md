---
title: Parquet
id: parquet
description: Parquet
sidebar_position: 2
tags:
  - gems
  - file
  - parquet
---

Parquet is an open source file format built to handle flat columnar storage data formats.
Parquet operates well with complex data in large volumes.It is known for its both performant data compression
and its ability to handle a wide variety of encoding types.

This gem allows you to read from or write to parquet file.

## Source

Reads data from parquet files present at a path.

### Source Parameters

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Required | Default                                                                  |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| Location              | File path where parquet files are present                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | True     | None                                                                     |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as json or inferred using `Infer Schema` button                                                                                                                                                                                                                                                                                                                                                                                                               | True     | None                                                                     |
| Recursive File Lookup | This is used to recursively load files and it disables partition inferring. Its default value is false. If data source explicitly specifies the partitionSpec when recursiveFileLookup is true, exception will be thrown.                                                                                                                                                                                                                                                                                                    | False    | False                                                                    |
| Path Global Filter    | An optional glob pattern to only include files with paths matching the pattern. The syntax follows org.apache.hadoop.fs.GlobFilter. It does not change the behavior of partition discovery.                                                                                                                                                                                                                                                                                                                                  | False    | None                                                                     |
| Modified Before       | An optional timestamp to only include files with modification times occurring before the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)                                                                                                                                                                                                                                                                                                                | False    | None                                                                     |
| Modified After        | An optional timestamp to only include files with modification times occurring after the specified Time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)                                                                                                                                                                                                                                                                                                                 | False    | None                                                                     |
| Merge Schema          | Sets whether we should merge schemas collected from all Parquet part-files. This will override spark.sql.parquet.mergeSchema.                                                                                                                                                                                                                                                                                                                                                                                                | False    | (value of spark.sql.parquet<br/>.mergeSchema configuration)              |
| Int96 Rebase mode     | The int96RebaseMode option allows to specify the rebasing mode for INT96 timestamps from the Julian to Proleptic Gregorian calendar. <br/><br/> Currently supported modes are: <br/><br/>EXCEPTION: fails in reads of ancient INT96 timestamps that are ambiguous between the two calendars.<br/><br/>CORRECTED: loads INT96 timestamps without rebasing.<br/><br/>LEGACY: performs rebasing of ancient timestamps from the Julian to Proleptic Gregorian calendar.                                                          | False    | (value of spark.sql.parquet<br/>.int96RebaseModeInRead configuration)    |
| Datetime Rebase mode  | The datetimeRebaseMode option allows to specify the rebasing mode for the values of the DATE, TIMESTAMP_MILLIS, TIMESTAMP_MICROS logical types from the Julian to Proleptic Gregorian calendar.<br/>Currently supported modes are:<br/><br/>EXCEPTION: fails in reads of ancient dates/timestamps that are ambiguous between the two calendars.<br/><br/>CORRECTED: loads dates/timestamps without rebasing.<br/><br/>LEGACY: performs rebasing of ancient dates/timestamps from the Julian to Proleptic Gregorian calendar. | False    | (value of spark.sql.parquet<br/>.datetimeRebaseModeInRead configuration) |

### Example {#source}

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

Write data as parquet files at the specified path.

| Parameter         | Description                                                                                                                                                                                                                       | Required | Default |
| :---------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :------ |
| Location          | File path where parquet files are present                                                                                                                                                                                         | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (none, uncompressed, snappy, gzip, lzo, brotli, lz4, and zstd). This will override spark.sql.parquet.compression.codec. | False    | snappy  |
| Write Mode        | Write mode for dataframe                                                                                                                                                                                                          | True     | error   |
| Partition Columns | List of columns to partition the parquet files by                                                                                                                                                                                 | False    | None    |

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
To know more about tweaking parquet related properties in spark config [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-parquet.html).
:::
