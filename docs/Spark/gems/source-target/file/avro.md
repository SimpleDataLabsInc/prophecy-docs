---
title: Avro
id: avro
description: Avro
tags:
  - gems
  - file
  - avro
---

The Avro file type:

- Is a row-based storage format for Hadoop, which is widely used as a serialization platform.
- Stores the schema in JSON format, which makes the data easier to read and interpret by any program.
- Stores the data in a binary format, which makes the data compact and efficient.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                   |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Avro file.                                                                                                                                                             |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from Avro files and allows you to optionally specify additional properties.

### Source properties

| Property name                                      | Description                                                                                                                                                                                                                                  | Default |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description                                        | Description of your dataset.                                                                                                                                                                                                                 | None    |
| Use user-defined schema                            | Whether to use the schema you define.                                                                                                                                                                                                        | false   |
| Ignore files without .avro extension while reading | **_DEPRECATED_**. Whether to load files without the `.avro` extension. <br/>To learn more, see [Ignore the file extension](#ignoring-the-file-extension).                                                                                    | true    |
| Recursive File Lookup                              | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception.                                        | false   |
| Path Global Filter                                 | Glob pattern to only include files with paths matching the pattern. The syntax follows [GlobFilter](https://hadoop.apache.org/docs/stable/api/org/apache/hadoop/fs/GlobFilter.html) and does not change the behavior of partition discovery. | None    |
| Modified Before                                    | Timestamp to only include files with modification times occurring before the specified time. The provided timestamp must be in the following format: `YYYY-MM-DDTHH:mm:ss` (e.g. 2020-06-01T13:00:00)                                        | None    |
| Modified After                                     | Timestamp to only include files with modification times occurring after the specified time. The provided timestamp must be in the following format: `YYYY-MM-DDTHH:mm:ss` (e.g. 2020-06-01T13:00:00)                                         | None    |
| Avro Schema                                        | Additional schema a user provides in JSON format. To learn more, see [Schema evolution](#schema-evolution).                                                                                                                                  | None    |

#### Schema evolution

When reading an Avro file, you can set the `Avro Schema` parameter to a newer, evolved schema, which is compatible but different from the schema written to storage. The resulting `DataFrame` follows the newer, evolved schema.

For example, if we you an evolved schema containing one additional column with a default value, the resulting `DataFrame` contains the new column too.

#### Ignore the file extension

If you enable the `ignoreExtension` parameter, Prophecy loads all files (with and without .avro extension). This parameter is deprecated, and will be removed in a future release. Please use the `Path Glob Filter` property for filtering file names.

### Example {#source}

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4" title="Avro Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

#### Schema used in example above

![Avro schema used](./img/avro/avro_schema_eg1.png)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to Avro files and allows you to optionally specify additional properties.

### Target properties

| Property name     | Description                                                                                                                                                                                                                                                                               | Default          |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Description       | Description of your dataset.                                                                                                                                                                                                                                                              | None             |
| Avro Schema       | Additional schema a user provides in JSON format. You can set this parameter if the expected output Avro schema doesn't match the schema Spark converts. <br/>For example, the expected schema of one column is of `enum` type, instead of `string` type in the default converted schema. | None             |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported write modes table](#supported-write-modes).                                                                                                                                                             | `error`          |
| Compression       | Compression codec when writing to the Avro file. <br/>The Avro file supports the following codecs: `uncompressed`, `snappy`, `deflate`, `bzip2`, and `xz`. <br/>This defaults to the value of the `spark.sql.avro.compression.codec` parameter.                                           | `snappy`         |
| Partition Columns | List of columns to partition the Avro files by.                                                                                                                                                                                                                                           | None             |
| Record Name       | Top level record name in the result, which is required in the Avro spec.                                                                                                                                                                                                                  | `topLevelRecord` |
| Record Namespace  | Record namespace in the result.                                                                                                                                                                                                                                                           | ""               |

### Supported write modes

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

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::
