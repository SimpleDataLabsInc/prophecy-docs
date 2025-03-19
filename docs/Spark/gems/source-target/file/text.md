---
title: Text
id: text
description: Parameters and properties to read from and write to Text file
tags:
  - gems
  - file
  - text
---

The Text file type is:

- Easy to read from, write to, and share.
- Compatible with many programs, and easy to exchange data.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                     |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Text file.                                                                                                                                               |
| Schema    | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

## Source

The Source gem reads data from Text files and allows you to optionally specify the following additional properties.

### Source properties

| Property name           | Description                                                                                                                                                                                                 | Default                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Description             | Description of your dataset.                                                                                                                                                                                | None                   |
| Enforce schema          | Whether to use the schema you define.                                                                                                                                                                       | true                   |
| Read file as single row | Whether to read each file from input path as a single row.                                                                                                                                                  | false                  |
| Line Separator          | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                                     | `\r`, `\r\n`, and `\n` |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, the Source gem throws an exception. | false                  |

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175029278-70a93cc5-a212-464b-8aad-61ab278f0bbf.mp4" title="Text Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
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
def read_avro(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("text")\
        .text("dbfs:/FileStore/customers.txt", wholetext = False, lineSep = "\n")

```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object read_avro {

  def apply(spark: SparkSession): DataFrame =
    spark.read
        .format("text")
        .option("lineSep", "\n")
        .save("dbfs:/FileStore/customers.txt")

}
```
</TabItem>
</Tabs>
````

---

## Target

The Target gem writes data to Text files and allows you to optionally specify the following additional properties.

### Target properties

| Property name     | Description                                                                                                                                                                                                                                                                                          | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description       | Description of your dataset.                                                                                                                                                                                                                                                                         | None    |
| Write Mode        | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                                                                                                                 | `error` |
| Partition Columns | List of columns to partition the Text files by. <br/> The Text file type only supports a single column apart from the partition columns. If the `DataFrame` contains more than one column apart from partition columns as the input `DataFrame`, the Target gem throws an `AnalysisException` error. | None    |
| Compression Codec | Compression codec when writing to the Text file. <br/>The Text file supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`.                                                                                                                                           | None    |
| Line Separator    | Defines the line separator to use for parsing.                                                                                                                                                                                                                                                       | `\n`    |

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
<iframe src="https://user-images.githubusercontent.com/103921419/175029303-461687fe-a6e0-419e-85c6-229c17645746.mp4" title="Text Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

:::tip
To see the generated source code, [switch to the Code view](/getting-started/tutorials/spark-with-databricks#review-the-code) at the top of the page.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

```py
def write_text(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("text")\
        .mode("overwrite")\
        .text("dbfs:/FileStore/customers.txt", compression = "gzip", lineSep = "\n")
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_text {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
      .format("text")
      .mode("overwrite")
      .option("compression", "gzip")
      .option("lineSep", "\n")
      .save("dbfs:/FileStore/customers.txt")
}
```
</TabItem>
</Tabs>
````
