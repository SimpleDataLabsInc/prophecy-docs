---
title: JSON
id: json
description: JSON
tags:
  - gems
  - file
  - json
---

The JSON file format allows you to read and write JSON formatted files.

## Source

### Source Parameters

| Parameter                     | Description                                                                                                                      | Required |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Dataset Name                  | Name of the dataset.                                                                           | True     |
| Location                      | Location of the file(s) to be loaded <br/> E.g.: `dbfs:/data/test.json`.                       | True     |
| Schema                        | Schema to applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button.  | True     |
| Multi-Line                    | Whether to parse one record, which may span multiple lines, per file. JSON built-in functions ignore this option.  | False    |
| Line Separator                | Defines the line separator that should be used for parsing. JSON built-in functions ignore this option.  | False    |
| Primitive Values              | Whether to infer all primitive values as a `String` type.                                      | False    |
| Floating-Point Values         | Infers all floating-point values as a `Decimal` type. If the value does not fit in `Decimal`, then it infers them as a `Double`. | False    |
| Ignore Comments               | Ignores Java/C++ style comment in JSON records.                                                | False    |
| Unquoted Field Names          | Whether to allow unquoted JSON field names.                                                    | False    |
| Single Quotes                 | Whether to allow single quotes in addition to double quotes.                                   | False    |
| Leading Zero                  | Whether to allow leading zeros in numbers.                                                     | False    |
| Backslash Escaping            | Whether to accept quotes on all characters using the backslash quoting mechanism.              | False    |
| Mode                          | How to deal with corrupt records. To learn about the available modes, see [Supported Corrupt Record Modes](#supported-corrupt-record-modes).  | False    |
| Column Name of Corrupt Record | Name of the column to create for corrupt records.                                              | False    |
| Date Format                   | String that indicates a date format.                                                           | False    |
| Timestamp Format              | String that indicates a timestamp format.                                                      | False    |
| Sampling Ratio                | Defines fraction of input JSON objects used for schema inferring.                              | False    |
| Ignore column with all null   | Whether to ignore column of all `null` values or empty arrays during schema inference.         | False    |
| Recursive File Lookup         | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. | False    |

### Supported Corrupt Record Modes

|  Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PERMISSIVE      | If data already exists, throw an exception.                                                                                             |
| DROPMALFORMED  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| FAILFAST     | If data already exists, append the contents of the `DataFrame`.                                                                         |


### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556861-d5b82f1a-883e-4b49-bebe-0ac47511583e.mp4" title="Json Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def ReadDelta(spark: SparkSession) -> DataFrame:
    return spark.read.format("json").load("dbfs:/FileStore/data/example.json")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object ReadJson {

def apply(spark: SparkSession): DataFrame =
spark.read
.format("json")
.load("dbfs:/FileStore/data/example.json")

}
```

</TabItem>
</Tabs>

````

## Target

### Target Parameters

| Parameter          | Description                                                               | Required |
| ------------------ | ------------------------------------------------------------------------- | -------- |
| Dataset Name       | Name of the dataset.                                                      | True     |
| Location           | File path of the JSON files.                                              | True     |
| Write Mode         | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).  | False    |
| Compression        | Compression codec to use when you write. <br/>Prophecy supports the following codecs: `bzip2`, `gzip`, `lz4`, `snappy`, and `deflate`. JSON built-in functions ignore this option.  | False    |
| Date Format        | String that indicates a date format.                                      | False    |
| Timestamp Format   | String that indicates a timestamp format.                                 | False    |
| Encoding           | Specifies to encode (charset) saved json files. JSON built-in functions ignore this option.  | False    |
| Line Separator     | Defines the line separator that should be used for parsing. JSON built-in functions ignore this option.  | False    |
| Ignore Null Fields | Whether to ignore null fields when generating JSON objects.               | False    |
| Partition Columns  | List of columns to partition the JSON file by.                            | False    |     

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |


### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556999-72c22d9b-c99e-4e6c-8887-b54b8d5d94f1.mp4" title="Json Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def write_json(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("json")\
        .mode("overwrite")\
        .save("dbfs:/data/test_output.json")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_json {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
        .format("json")
        .mode("overwrite")
        .save("dbfs:/data/test_output.json")
}
```

</TabItem>
</Tabs>

````

### Producing A Single Output File

:::caution

Note: We do not recommended this for extremely large data sets because it may overwhelm the worker node writing the file.

:::

Due to Spark's distributed nature, Prophecy writes output files as multiple separate partition files. If you need a single output file, such as reporting or exporting to an external system, use a `Repartition` gem in `Coalesce` mode with 1 output partition:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234560215-5f85e164-638c-4cb9-abc6-dbd9cefb0e05.mp4" title="Single Output file" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<br/>
