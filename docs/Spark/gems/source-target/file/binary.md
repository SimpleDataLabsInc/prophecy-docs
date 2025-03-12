---
title: Binary
id: binary
description: binary
tags:
  - gems
  - file
  - binary
---

The binary file data type:

- Converts each binary file into a single record that contains the raw content and metadata of the file.
- Minimally produces a `DataFrame` with the `path`, `modificationTime`, `length` and `content` columns.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                   |
| --------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Binary file.                                                                                                                                                           |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from Binary files and allows you to optionally specify additional properties.

### Source properties

| Property name           | Description                                                                                                                                                                                           | Default |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description             | Description of your dataset.                                                                                                                                                                          | None    |
| Enforce Schema          | Whether to use the schema you define.                                                                                                                                                                 | false   |
| Read file as single row | Whether to read each file from input path as a single row.                                                                                                                                            | false   |
| Line Separator          | Sets a separator for each field and value. The separator can be one or more characters.                                                                                                               | None    |
| Recursive File Lookup   | Whether to recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. | false   |

## Target

The Target gem writes data to Binary files and allows you to optionally specify additional properties.

### Target properties

| Property name     | Description                                                                                                                                                     | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description       | Description of your dataset.                                                                                                                                    | None    |
| Write Mode        | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                            | None    |
| Partition Columns | List of columns to partition the Binary file by.                                                                                                                | None    |
| Compression Codec | Compression codec when writing to the Binary file. <br/>The Binary file supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy`, and `deflate`. | None    |
| Line Separator    | Defines the line separator that Prophecy should use for parsing.                                                                                                | None    |

### Supported write modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
