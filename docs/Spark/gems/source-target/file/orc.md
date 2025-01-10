---
title: ORC
id: orc
description: ORC
tags:
  - gems
  - file
  - orc
---

ORC (Optimized Row Columnar) is a columnar file format designed for Spark/Hadoop workloads. It is optimized for large streaming reads, but with integrated support for finding required rows quickly. Because ORC files are type-aware, the writer chooses the most appropriate encoding for the type and builds an internal index as the file is written.

This Gem allows you to read from or write to ORC files.

## Source

Reads data from ORC files present at a path.

### Source Parameters

| Parameter             | Description                                                                                                                                                                                                                        | Required | Default |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location              | File path where ORC files are present                                                                                                                                                                                              | True     | None    |
| Schema                | Schema to be applied on the loaded data. Can be defined/edited as JSON or inferred using `Infer Schema` button.                                                                                                                    | True     | None    |
| Recursive File Lookup | This is used to recursively load files and it disables partition inferring. Its default value is `false`. If data source explicitly specifies the `partitionSpec` when `recursiveFileLookup` is true, an exception will be thrown. | False    | False   |

### Example {#source-example}

![ORC source example](./img/orc/orc-source.gif)

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def read_orc(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("orc")\
        .load("dbfs:/FileStore/Users/orc/test.orc")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object read_orc {

  def apply(spark: SparkSession): DataFrame =
    spark.read
      .format("orc")
      .load("dbfs:/FileStore/Users/orc/test.orc")

}
```

</TabItem>
</Tabs>

````

---

## Target

### Target Parameters

Write data as ORC files at the specified path.

| Parameter         | Description                                                                                                                                                                                                                  | Required | Default |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path where ORC files will be written                                                                                                                                                                                    | True     | None    |
| Compression       | Compression codec to use when saving to file. This can be one of the known case-insensitive shorten names (`none`, `uncompressed`, `snappy`, `gzip`, `lzo`, `brotli`, `lz4`, and `zstd`). This will override `orc.compress`. | False    | snappy  |
| Write Mode        | Write mode for DataFrame                                                                                                                                                                                                     | True     | error   |
| Partition Columns | List of columns to partition the ORC files by                                                                                                                                                                                | False    | None    |

### Example {#example-target}

![ORC target example](./img/orc/orc-target.gif)

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def write_orc(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("orc")\
        .mode("overwrite")\
        .save("dbfs:/data/test_output.orc")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_orc {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
        .format("orc")
        .mode("overwrite")
        .save("dbfs:/data/test_output.orc")
}
```

</TabItem>
</Tabs>


````

:::info
To know more about tweaking orc related properties in Spark config [**click here**](https://orc.apache.org/docs/spark-config.html).
:::
