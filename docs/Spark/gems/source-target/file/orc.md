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

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                   |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the ORC file.                                                                                                                                                              |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from ORC files and allows you to optionally specify additional properties.

### Source properties

| Property name           | Description                                                                                                                                                                                           | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description             | Description of your dataset.                                                                                                                                                                          | None    |
| Use user-defined schema | Schema to apply on the loaded data. You can define or edit the scema as JSON or inferred using the `Infer Schema` button.                                                                             | None    |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. | false   |

### Example {#source-example}

![ORC source example](./img/orc/orc-source.gif)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to ORC files and allows you to optionally specify additional properties.

### Target properties

| Property name     | Description                                                                                                                           | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------- |
| Description       | Description of your dataset.                                                                                                          | None    |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).         | `error` |
| Partition Columns | List of columns to partition the ORC files by.                                                                                        | None    |
| Compression Codec | Compression codec when writing to the ORC file. <br/>The ORC file supports the following codecs: `none`, `snappy`, `zlib`, and `lzo`. | None    | `snappy` |

### Supported write modes

| Write mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |

### Example {#example-target}

![ORC target example](./img/orc/orc-target.gif)

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::
