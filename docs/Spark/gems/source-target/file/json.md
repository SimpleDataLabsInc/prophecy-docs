---
title: JSON
id: json
description: Parameters and properties to read from and write to JSON files
tags:
  - gems
  - file
  - json
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
  livy="3.0.1+"
/>

The JSON (JavaScript Object Notation) file type:

- Is human-readable, which simplifies how you debug and interact with data.
- Has a flexible schema, which makes it easy to add or modify fields without changing the file format.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the JSON file.                                                                                                                                               |
| Schema    | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from JSON files and allows you to optionally specify the following additional properties.

### Source properties

| Property name                                              | Description                                                                                                                                                                                                 | Default                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Description                                                | Description of your dataset.                                                                                                                                                                                | None                               |
| Use user-defined schema                                    | Whether to use the schema you define.                                                                                                                                                                       | true                               |
| Parse Multi-line records                                   | Whether to parse one record, which may span multiple lines, per file. <br/>**You must enable this if your JSON file is more than one line long.** <br/>JSON built-in functions ignore this option.          | false                              |
| New line separator                                         | Sets a separator for each line. The separator can be one or more characters. <br/>JSON built-in functions ignore this option.                                                                               | `\r`, `\r\n` and `\n`              |
| Infer primitive values as string type                      | Whether to infer all primitive values as a `String` type.                                                                                                                                                   | false                              |
| Infer floating-point values as decimal or double type      | Whether to infer all floating-point values as a `Decimal` type. <br/>If the value does not fit in `Decimal`, then the Source gem infers them as a `Double`.                                                 | false                              |
| Ignore Java/C++ style comment in Json records              | Whether to ignore Java and C++ style comments in JSON records.                                                                                                                                              | false                              |
| Allow unquoted field names                                 | Whether to allow unquoted JSON field names.                                                                                                                                                                 | false                              |
| Allow single quotes                                        | Whether to allow single quotes in addition to double quotes.                                                                                                                                                | true                               |
| Allow leading zero in numbers                              | Whether to allow leading zeros in numbers.                                                                                                                                                                  | false                              |
| Allow Backslash escaping                                   | Whether to accept quotes on all characters using the backslash quoting mechanism.                                                                                                                           | false                              |
| Allow unquoted control characters in JSON string           | Whether to allow unquoted control characters.                                                                                                                                                               | false                              |
| Mode to deal with corrupt records                          | How to handle corrupt data. For a list of the possible values, see [Supported corrupt record modes](#supported-corrupt-record-modes).                                                                       | `PERMISSIVE`                       |
| Column name of a corrupt record                            | Name of the column to create for corrupt records.                                                                                                                                                           | `_corrupt_records`                 |
| Date Format String                                         | Sets the string that indicates a date format.                                                                                                                                                               | `yyyy-MM-dd`                       |
| Timestamp Format String                                    | Sets the string that indicates a timestamp format.                                                                                                                                                          | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Sampling ratio for schema inferring                        | Defines a fraction of rows to use for schema inferring. <br/>CSV built-in functions ignore this option.                                                                                                     | `1.0`                              |
| Ignore column with all null values during schema inferring | Whether to ignore column of all null values or empty arrays during schema inference.                                                                                                                        | false                              |
| Recursive File Lookup                                      | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, the Source gem throws an exception. | false                              |

### Supported corrupt record modes

| Mode          | Description                                                                                     |
| ------------- | ----------------------------------------------------------------------------------------------- |
| PERMISSIVE    | Put the malformed string into the corrupt records column, and set the malformed fields to null. |
| DROPMALFORMED | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.   |
| FAILFAST      | Throw an exception when it meets a corrupted record.                                            |

### Example {#source-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556861-d5b82f1a-883e-4b49-bebe-0ac47511583e.mp4" title="Json Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) in the project header.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

---

## Target

The Target gem writes data to JSON files and allows you to optionally specify the following additional properties.

### Target properties

| Property name           | Description                                                                                                                                                                                          | Default                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Description             | Description of your dataset.                                                                                                                                                                         | None                               |
| Line Separator          | Defines the line separator to use for parsing.                                                                                                                                                       | `\n`                               |
| Write Mode              | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                 | `error`                            |
| Partition Columns       | List of columns to partition the JSON file by.                                                                                                                                                       | None                               |
| Compression Codec       | Compression codec when writing to the JSON file. <br/>The JSON file supports the following codecs: `bzip2`, `gzip`, `lz4`, `snappy`, and `deflate`. <br/>JSON built-in functions ignore this option. | None                               |
| Date Format String      | String that indicates a date format.                                                                                                                                                                 | `yyyy-MM-dd`                       |
| Timestamp Format String | String that indicates a timestamp format.                                                                                                                                                            | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Encoding                | Specifies to encode (charset) saved json files. <br/>JSON built-in functions ignore this option.                                                                                                     | `UTF-8`                            |
| Ignore null fields      | Whether to ignore null fields when generating JSON objects.                                                                                                                                          | false                              |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |

### Example {#target-example}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234556999-72c22d9b-c99e-4e6c-8887-b54b8d5d94f1.mp4" title="Json Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) in the project header.
:::

````mdx-code-block

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
We do not recommended this for extremely large data sets because it may overwhelm the worker node writing the file.
:::

Due to Spark's distributed nature, Prophecy writes output files as multiple separate partition files. If you want a single output file, such as reporting or exporting to an external system, use a `Repartition` gem in `Coalesce` mode with one output partition:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/130362885/234560215-5f85e164-638c-4cb9-abc6-dbd9cefb0e05.mp4" title="Single Output file" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<br/>
