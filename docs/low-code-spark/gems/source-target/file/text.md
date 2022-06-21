---
title: Text
id: text
description: Text
sidebar_position: 4
tags:
  - gems
  - file
  - text
---

This gem allows you to read from or write to text file.

## Source

Reads data from text files present at a path. Returns a single column dataframe based on the config.

### Source Parameters

| Parameter             | Description                                                                                                                                                                                                               | Required | Default      |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- | :----------- |
| Location              | File path where avro files are present                                                                                                                                                                                    | True     | None         |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as json or inferred using `Infer Schema` button                                                                                                            | True     | None         |
| Recursive File Lookup | This is used to recursively load files and it disables partition inferring. Its default value is false. If data source explicitly specifies the partitionSpec when recursiveFileLookup is true, exception will be thrown. | False    | False        |
| Line Separator        | Defines the line separator that should be used for reading or writing.                                                                                                                                                    | False    | \r, \r\n, \n |
| Read as a single row  | If true, read each file from input path(s) as a single row.                                                                                                                                                               | False    | False        |

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4" title="Text Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
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

| Parameter         | Description                                                                                                                                             | Required | Default |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- | :------ |
| Location          | File path where text files are present                                                                                                                  | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (none, bzip2, gzip, lz4, snappy and deflate). | False    | None    |
| Write Mode        | Write mode for dataframe                                                                                                                                | True     | error   |
| Partition Columns | List of columns to partition the avro files by                                                                                                          | False    | None    |
| Line Separator    | Defines the line separator that should be used for writing.                                                                                             | False    | \n      |

:::info
Text data source supports only a single column. `AnalysisException` would be thrown if dataframe with more than 1 column
is given as input to `target` gem using text file format.
:::

### Example {#target}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Text Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
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
For examples on how different properties of text file works [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-text.html).
:::
