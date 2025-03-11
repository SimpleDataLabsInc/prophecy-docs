---
title: XML
id: xml
description: XML
tags:
  - gems
  - file
  - xml
---

You can read data from and write data to XML files.

## Source Parameters

| Parameter                 | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --- |
| Location                  | File path to the XML file.                                                                                                                       |
| Schema                    | Schema applied to the loaded data. Schema can be defined/edited as JSON or inferred using `Infer Schema` button.                                 |
| Row Tag                   | Value of the XML element that identifies a row of data.                                                                                          |
| Exclude Attributes        |                                                                                                                                                  |
| Null Value                | Sets the string representation of a null value.                                                                                                  |     |
| Parser Mode               | How to deal with corrupt records. <br/>To learn about the available modes, see [Supported Corrupt Record Modes](#supported-corrupt-record-modes) |
| Attribute Prefix          |                                                                                                                                                  |
| Value Tag                 |                                                                                                                                                  |
| Ignore Surrounding Spaces |                                                                                                                                                  |
| Ignore Namespace          |                                                                                                                                                  |
| Timestamp format string   | Sets the string that indicates a timestamp format.                                                                                               |
| Date format string        | Sets the string that indicates a date format.                                                                                                    |

### Supported Corrupt Record Modes

| Mode           | Description                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------- |
| Permissive     | Put the malformed string into a new field called `_corrupt_records`, and set the malformed fields to null. |
| Drop Malformed | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.              |
| Fail Fast      | Throw an exception when it meets a corrupted record.                                                       |

## Target Parameters

| Parameter               | Description                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Location                | File path to write the XML file to.                                                                                                       |
| Schema                  | Schema for the written table.                                                                                                             |
| Row Tag                 | Value of the XML element which identifies a row of data.                                                                                  |
| Root Tag                | Value of the XML element which encloses all other elements.                                                                               |
| Null Value              | Sets the string representation of a null value.                                                                                           |
| Attribute Prefix        |                                                                                                                                           |
| Value Tag               |                                                                                                                                           |
| Timestamp format string | Sets the string that indicates a timestamp format.                                                                                        |
| Date format string      | Sets the string that indicates a date format.                                                                                             |
| Write Mode              | How to handle existing data. To see a list of possible values, see [the Supported Write Modes table](#supported-write-modes).             |
| Compression Codec       | Compression codec used when writing. <br/>Prophecy supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`. |
| XML Declaration         |                                                                                                                                           |
| Partition Column        | List of columns to partition the XML file by.                                                                                             |

### Supported Write Modes

| Write Mode | Description                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If data already exists, throw an exception.                                                                                             |
| overwrite  | If data already exists, overwrite the data with the contents of the `DataFrame`.                                                        |
| append     | If data already exists, append the contents of the `DataFrame`.                                                                         |
| ignore     | If data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
