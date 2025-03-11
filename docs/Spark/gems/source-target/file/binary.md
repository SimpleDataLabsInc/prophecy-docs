---
title: Binary
id: binary
description: binary
tags:
  - gems
  - file
---

You can read and write data in Binary file types.

## Source

### Source Parameters

| Parameter               | Description                                                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Location                | File path to read the Binary file.                                                                                                                                                         |
| Enforce Schema          |                                                                                                                                                                                            |
| Read file as single row | Whether to read each file from input path as a single row.                                                                                                                                 |
| Line Separator          | Defines the line separator that should be used for parsing.                                                                                                                                |
| Recursive File Lookup   | Recursively load files and disable partition inferring. If the data source explicitly specifies the `partitionSpec` when the`recursiveFileLookup` is `true`, Prophecy throws an exception. |

## Target

### Target Parameters

| Parameter         | Description                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Location          | File path to write the Binary file to.                                                                                                 |
| Line Separator    | Defines the line separator that should be used for parsing.                                                                            |
| Write Mode        | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).          |
| Compression Codec | Compression codec to use when you write. <br/>Prophecy supports the following codecs: `bzip2`, `gzip`, `lz4`, `snappy`, and `deflate`. |
| Partition Columns | List of columns to partition the Binary file by.                                                                                       |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
