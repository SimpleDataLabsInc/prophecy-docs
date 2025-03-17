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
  livy="3.2.0"
/>

Allows you to read or write plain Text files.

## Source

Reads data from Text files at the given Location.

### Source Parameters

| Parameter             | Description                                                                                                                                                                   | Required | Default            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------ |
| Location              | File path where the Text files are located                                                                                                                                    | True     | None               |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button.                                                               | True     | None               |
| Recursive File Lookup | This is used to recursively load files from the given Location. Disables partition discovery. An exception will be thrown if this option and a `partitionSpec` are specified. | False    | False              |
| Line Separator        | Defines the line separator that should be used for reading or writing.                                                                                                        | False    | `\r`, `\r\n`, `\n` |
| Read as a single row  | If true, read each file from input path(s) as a single row.                                                                                                                   | False    | False              |

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

### Target Parameters

Write data as text files at the specified path.

| Parameter         | Description                                                                                                                                                         | Required | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path where text files will be written to                                                                                                                       | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (`none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`). | False    | None    |
| Write Mode        | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                              | True     | `error` |
| Partition Columns | List of columns to partition the Text files by                                                                                                                      | False    | None    |
| Line Separator    | Defines the line separator that should be used for writing                                                                                                          | False    | `\n`    |

:::info
The Text data source supports only a single column apart from the partition columns. An `AnalysisException` will be thrown if the DataFrame has more than 1 column
apart from parition columns as the input DataFrame to the `Target` gem.
:::

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame.                                                            |
| append     | If data already exists, append the contents of the DataFrame.                                                                    |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

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
