---
title: Avro
id: avro
description: Avro
tags:
  - gems
  - file
  - avro
---

The Avro data format:

- Is a row-based storage format for Hadoop, which is widely used as a serialization platform.
- Stores the schema in JSON format, which makes the data easier to read and interpret by any program.
- Stores the data in a binary format, which makes the data compact and efficient.

The Target and Source gem allows you to read from or write to an Avro file.

## Source

### Source Parameters

| Parameter             | Description                                                                                                                                                                                                                                              | Required | Default |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| Location              | File path to the Avro files.                                                                                                                                                                                                                   | True     | None    |
| Schema                | Schema to apply on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                                                                                          | True     | None    |
| Recursive File Lookup | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception.                                                         | False    | False   |
| Path Global Filter    | Optional glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery. | False    | None    |
| Modified Before       | Optional timestamp to only include files with modification times occurring before the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)                                            | False    | None    |
| Modified After        | Optional timestamp to only include files with modification times occurring after the specified time. The provided timestamp must be in the following form: YYYY-MM-DDTHH:mm:ss (e.g. 2020-06-01T13:00:00)                                             | False    | None    |
| Avro Schema           | Optional schema in JSON format. To learn more, see [Schema Evolution](#schema-evolution).                                                                                                                                                                          | False    | None    |
| ignoreExtension       | **_DEPRECATED_**. Enable to load files without the `.avro` extension. To learn more, see [Ignoring the File Extension](#ignoring-the-file-extension).                                                                                                                                  | False    | True    |

#### Schema Evolution

When reading an Avro data format, you can set the `Avro Schema` parameter to a newer, evolved schema, which is compatible but different from the schema written to storage. The resulting `DataFrame` follows the newer, evolved schema. For example, if we set an evolved schema containing one additional column with a default value, the resulting `DataFrame` contains the new column too.

#### Ignoring the File Extension

If you enable the `ignoreExtension` parameter, Prophecy loads all files (with and without .avro extension). This parameter is deprecated, and will be removed in the future releases. Please use [pathGlobFilter](https://spark.apache.org/docs/latest/sql-data-sources-generic-options.html#path-global-filter) for filtering file names.

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4" title="Avro Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

#### Schema used in example above

![Avro schema used](./img/avro/avro_schema_eg1.png)

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def read_avro(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("avro")\
        .option("ignoreExtension", True)\
        .option(
          "avroSchema",
          "{\"type\":\"record\",\"name\":\"Person\",\"fields\":[{\"name\":\"firstname\",\"type\":\"string\"},{\"name\":\"middlename\",\"type\":\"string\"},{\"name\":\"lastname\",\"type\":\"string\"},{\"name\":\"dob_year\",\"type\":\"int\"},{\"name\":\"dob_month\",\"type\":\"int\"},{\"name\":\"gender\",\"type\":\"string\"},{\"name\":\"salary\",\"type\":\"int\"}]}"
        )\
        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object read_avro {

  def apply(spark: SparkSession): DataFrame =
    spark.read
        .format("avro")
        .option("ignoreExtension", true)
        .option(
          "avroSchema",
          "{\"type\":\"record\",\"name\":\"Person\",\"fields\":[{\"name\":\"firstname\",\"type\":\"string\"},{\"name\":\"middlename\",\"type\":\"string\"},{\"name\":\"lastname\",\"type\":\"string\"},{\"name\":\"dob_year\",\"type\":\"int\"},{\"name\":\"dob_month\",\"type\":\"int\"},{\"name\":\"gender\",\"type\":\"string\"},{\"name\":\"salary\",\"type\":\"int\"}]}"
        )
        .load("dbfs:/FileStore/Users/abhinav/avro/test.avro")

}
```

</TabItem>
</Tabs>

````

---

## Target

### Target Parameters

You can write data as Avro files at the specified path.

| Parameter         | Description                                                                                                                                                                                                                                                                           | Required | Default        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------- |
| Location          | File path to write the Avro file to.                                                                                                                                                                                                                                           | True     | None           |
| Avro Schema       | Optional schema a user provides in JSON format. You can set this parameter if the expected output Avro schema doesn't match the schema Spark converts. <br/> For example, the expected schema of one column is of `enum` type, instead of `string` type in the default converted schema. | False    | None           |
| Record Name       | Top level record name in write result, which is required in the Avro spec.                                                                                                                                                                                                                | False    | topLevelRecord |
| Record Namespace  | Record namespace in write result.                                                                                                                                                                                                                                                     | False    | ""             |
| Compression       | Compression codec used when writing. <br/>Prophecy supports the following codecs: `uncompressed`, `snappy`, `deflate`, `bzip2`, `xz` and `zstandard`. This defaults to the value of the `spark.sql.avro.compression.codec` parameter.                                                                       | False    | `snappy`       |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).                                                                                                                                                                                | True     | `error`        |
| Partition Columns | List of columns to partition the Avro files by.                                                                                                                                                                                                                                        | False    | None           |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

### Example {#target}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399603-07080a2f-a52b-4feb-a029-733f947fad6c.mp4" title="Avro Target" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def write_avro(spark: SparkSession, in0: DataFrame):
    in0.write\
        .format("avro")\
        .mode("overwrite")\
        .partitionBy("dob_year","dob_month")\
        .save("dbfs:/data/test_output.avro")
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object write_avro {
  def apply(spark: SparkSession, in: DataFrame): Unit =
    in.write
        .format("avro")
        .mode("overwrite")
        .partitionBy("dob_year","dob_month")
        .save("dbfs:/data/test_output.avro")
}
```

</TabItem>
</Tabs>


````

:::info
To learn more about tweaking Avro related properties in your Spark configuration, see [the Apache Avro Data Source Guide
](https://spark.apache.org/docs/latest/sql-data-sources-avro.html).
:::
