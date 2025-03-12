---
title: Text
id: text
description: Text
sidebar_position: 11
tags:
  - gems
  - file
  - text
---

You can read data from or write data to Text files.

## Source

The Source gem reads data from Text files.

### Source Parameters

| Parameter               | Description                                                                                                                                                                                          | Required | Default            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| Location                | File path to read the Text file.                                                                                                                                                                     | True     | None               |
| Enforce Schema          | Whether to apply the schema on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                | True     | None               |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception | False    | False              |
| Line Separator          | Defines the line separator that Prophecy should use for parsing.                                                                                                                                     | False    | `\r`, `\r\n`, `\n` |
| Read file as single row | Whether to read each file from input path as a single row.                                                                                                                                           | False    | False              |

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/175029278-70a93cc5-a212-464b-8aad-61ab278f0bbf.mp4" title="Text Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

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

The Target gem writes data to Text files.

### Target Parameters

| Parameter         | Description                                                                                                                               | Required | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path to write the Text file to.                                                                                                      | True     | None    |
| Compression       | Compression codec used when writing. <br/>Prophecy supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`. | False    | None    |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).             | True     | `error` |
| Partition Columns | List of columns to partition the Text files by.                                                                                           | False    | None    |
| Line Separator    | Defines the line separator that Prophecy should use for parsing.                                                                          | False    | `\n`    |

:::info
The Text data source supports only a single column apart from the partition columns. If the `DataFrame` contains more than one column
apart from parition columns as the input `DataFrame` to the Target gem, Prophecy throws an `AnalysisException`.
:::

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
<iframe src="https://user-images.githubusercontent.com/103921419/175029303-461687fe-a6e0-419e-85c6-229c17645746.mp4" title="Text Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

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

:::info
To know more about tweaking Text file related properties in Spark config [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-text.html).
:::
