---
title: Hudi
id: hudi
description: Paramters and properties to read from and write to Hudi files
draft: true
tags:
  - gems
  - file
  - hudi
---

The Hudi file type:

- Is an open-source data management framework that simplifies incremental data processing and data pipeline development.
- Handles large-scale data lakes, which makes it suitable for petabyte-scale data processing.
- Efficiently performs update and delete operations while maintaining data consistency.

## Parameters

| Parameter | Tab        | Description                                                                                    |
| --------- | ---------- | ---------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to write to the Hudi file.                                                           |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem does not support reading from Hudi files.

## Target

The Target gem writes data to Hudi files and allows you to optionally specify the following additional properties.

### Target Properties

| Property name              | Description                                                                                                                                   | Default         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Description                | Description of your dataset.                                                                                                                  | None            |
| Table Name                 | Name of the table to read from.                                                                                                               | None            |
| Write Table Type           | Type of table to write to. <br/>You can only select `COPY_ON_WRITE`.                                                                          | None            |
| Write Operation            | Write operation you want to perform. <br/>You can select `insert` or `upsert`.                                                                | None            |
| Hoodie Clean Automatic     | Whether to reclaim space older versions of data occupy.                                                                                       | false           |
| Write Mode                 | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                          | `error`         |
| Cleaner Policy             | How to automatically clean up temporary files and logs after Spark applications complete. <br/>You can only select `KEEP_LATEST_COMMIT`.      | None            |
| Parquet Compression Codec  | Compression codec when writing to the Hudi file. <br/>The Hudi file only supports `snappy`.                                                   | None            |
| Write Record Key           | Key to identify a record and row within each partition.                                                                                       | `uuid`          |
| Write Partition Path Field | Columns to use for partitioning the table.                                                                                                    | `partitionpath` |
| Write Precombine Field     | When two records in the same batch have the same key value, the Taret gem chooses the record with the largest value from the field specified. | `ts`            |
| Write Key Generator Class  | Which key generator to use.                                                                                                                   | `None`          |
| Keep Min Commits           | Minimum number of commits to keep.                                                                                                            | None            |
| Keep Max Commits           | Maximum number of commits to keep.                                                                                                            | None            |
| Cleaner commits retained   | Number of clean commits to retain.                                                                                                            | None            |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |
