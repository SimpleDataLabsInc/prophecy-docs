---
title: XML
id: xml
description: Parameters and properties to read from and write to XML files
tags:
  - gems
  - file
  - xml
---

The XML (Extensible Markup Language) file type:

- Transfers data between two systems that store the same data in different formats.
- Supports structured data with nested elements.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                    |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the XML file.                                                                                                                                                               |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON, or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from XML files and allows you to optionally specify the following additional properties.

### Source properties

| Property name             | Description                                                                                                                | Default                            |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Enforce Schema            | Whether to use the schema you define.                                                                                      | true                               |
| Row Tag                   | Row tag of your XML file to treat as a row.                                                                                | `_`                                |
| Exclude Attributes        | Whether to exclude attributes in elements.                                                                                 | false                              |
| Null Value                | Sets the string representation of a null value.                                                                            | `null`                             |
| Parser Mode               | How to handle corrupt data. <br/>For a list of the possible values, see [Supported parser modes](#supported-parser-modes). | `Permissive`                       |
| Attribute Prefix          | Prefix for attributes to differentiate them from elements.                                                                 | None                               |
| Value Tag                 | Tag to use for the value when there are attributes in the element with no child.                                           | `_VALUE`                           |
| Ignore Surrounding Spaces | Whether to skip surrounding whitespaces.                                                                                   | false                              |
| Ignore Namespace          | Whether to skip namespace prefixes on XML elements and attributes.                                                         | false                              |
| Timestamp Format          | Sets the string that indicates a timestamp format.                                                                         | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]` |
| Date Format               | String that indicates a date format.                                                                                       | `yyyy-MM-dd`                       |

### Supported parser modes

| Mode           | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| Permissive     | Put the malformed string into the corrupt records column, and set the malformed fields to null. |
| Drop Malformed | Ignore the entire corrupted record. This mode is not supported in the CSV built-in functions.   |
| Fail Fast      | Throw an exception when it meets a corrupted record.                                            |

## Target

The Target gem writes data to XML files and allows you to optionally specify the following additional properties.

### Target properties

| Property name     | Description                                                                                                                                              | Default                                           |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| Row Tag           | Row tag of your XML file to treat as a row.                                                                                                              | `_`                                               |
| Root Tag          | Root tag of your XML file.                                                                                                                               | `ROWS`                                            |
| Null Value        | Sets the string representation of a null value.                                                                                                          | `null`                                            |
| Attribute Prefix  | Prefix for attributes to differentiate them from elements.                                                                                               | None                                              |
| Value Tag         | Tag to use for the value when there are attributes in the element with no child.                                                                         | `_VALUE`                                          |
| Timestamp Format  | Sets the string that indicates a timestamp format.                                                                                                       | `yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]`                |
| Date Format       | String that indicates a date format.                                                                                                                     | `yyyy-MM-dd`                                      |
| Write Mode        | How to handle existing data. <br/>For a list of the possible values, see [Supported write modes](#supported-write-modes).                                | None                                              |
| Partition Column  | List of columns to partition the XML file by.                                                                                                            | None                                              |
| Compression Codec | Compression codec when writing to the XML file. <br/>The XML file supports the following codecs: `none`, `bzip2`, `gzip`, `lz4`, `snappy` and `deflate`. | None                                              |
| XML Declaration   | XML declaration content to write at the beginning of the XML file, before the root tag.                                                                  | `version="1.0" encoding="UTF-8" standalone="yes"` |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |
