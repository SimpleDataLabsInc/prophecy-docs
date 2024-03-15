---
title: Text
id: text
sidebar_position: 4
tags:
  - gems
  - file
  - text
description: Text
---

# Text

Allows you to read or write plain Text files

### Source

Reads data from Text files at the given Location.

#### Source Parameters

| Parameter             | Description                                                                                                                                                                   | Required | Default  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| Location              | File path where the Text files are located                                                                                                                                    | True     | None     |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button                                                                | True     | None     |
| Recursive File Lookup | This is used to recursively load files from the given Location. Disables partition discovery. An exception will be thrown if this option and a `partitionSpec` are specified. | False    | False    |
| Line Separator        | Defines the line separator that should be used for reading or writing.                                                                                                        | False    | , `\r`,  |
| Read as a single row  | If true, read each file from input path(s) as a single row.                                                                                                                   | False    | False    |

#### Example <a href="#source" id="source"></a>

#### Generated Code <a href="#source-code" id="source-code"></a>

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

***

### Target

#### Target Parameters

Write data as text files at the specified path.

| Parameter         | Description                                                                                                                                                         | Required | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path where text files will be written to                                                                                                                       | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (`none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`). | False    | None    |
| Write Mode        | How to handle existing data. See [this table](text.md#supported-write-modes) for a list of available options.                                                       | True     | `error` |
| Partition Columns | List of columns to partition the Text files by                                                                                                                      | False    | None    |
| Line Separator    | Defines the line separator that should be used for writing.                                                                                                         | False    |         |

:::info The Text data source supports only a single column apart from the partition columns. An `AnalysisException` will be thrown if the DataFrame has more than 1 column apart from parition columns as the input DataFrame to the `Target` Gem. :::

#### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame                                                             |
| append     | If data already exists, append the contents of the DataFrame                                                                     |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

#### Example <a href="#target-example" id="target-example"></a>

#### Generated Code <a href="#target-code" id="target-code"></a>

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

:::info To know more about tweaking Text file related properties in Spark config [**click here**](https://spark.apache.org/docs/latest/sql-data-sources-text.html). :::
