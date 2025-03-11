---
title: ORC
id: orc
description: ORC
tags:
  - gems
  - file
  - orc
---

The ORC (Optimized Row Columnar) data format:

- Is a columnar file format designed for Spark/Hadoop workloads.
- Optimizes for large streaming reads, but with integrated support for finding required rows quickly.
- Is type-aware. You can choose an encoding for the type and builds an internal index while you write to the file.

## Source

The Source gem reads data from ORC files.

### Source Parameters

| Parameter             | Description                                                                                                                                                                                | Required | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| Location              | File path where ORC files are present                                                                                                                                                      | True     | None    |
| Schema                | Schema to apply on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                  | True     | None    |
| Recursive File Lookup | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. | False    | False   |

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

The Target gem writes data to ORC files.

### Target Parameters

| Parameter         | Description                                                                                                                   | Required | Default |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location          | File path to write the ORC file to.                                                                                           | True     | None    |
| Compression       | Compression codec to use when you write. <br/>Prophecy supports the following codecs: `none`, `snappy`, `zlib`, and `lzo`.    | False    | snappy  |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes). | True     | error   |
| Partition Columns | List of columns to partition the ORC files by.                                                                                | False    | None    |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

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
To learn more about tweaking ORC properties in a Spark configuration, see [Spark Configuration](https://orc.apache.org/docs/spark-config.html).
:::
