---
title: Hudi
id: hudi
description: hudi
tags:
  - gems
  - file
  - hudi
---

You can write data to Hudi files.

## Source

Prophecy does not support reading from Hudi files.

## Target

The Target gem writes data to Binary files.

### Target Parameters

| Parameter                  | Description                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Location                   | File path to write the Hudi file to.                                                                                          |
| Table Name                 |                                                                                                                               |
| Write Table Type           | `COPY_ON_WRITE                                                                                                                |
| Write Operation            | Whether you want to insert or update                                                                                          |
| Hoodie Clean Automatic     |                                                                                                                               |
| Write Mode                 | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes). |
| Cleaner Policy             | `KEEP_LATEST_COMMIT`                                                                                                          |
| Parquet Compression Codec  | Compression codec to use when you write. <br/>Prophecy only supports `snappy`.                                                |
| Write Record Key           |                                                                                                                               |
| Write Partition Path Field |                                                                                                                               |
| Write Precombine Field     |                                                                                                                               |
| Write Key Generator Class  |                                                                                                                               |
| Keep Min Commits           | Minimum number of commits to keep.                                                                                            |
| Keep Max Commits           | Maximum number of commits to keep.                                                                                            |
| Cleaner commits retained   | Number of clean commits to retain.                                                                                            |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
