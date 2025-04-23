---
title: Excel
id: excel
slug: /analysts/excel
description: Read and write excel files
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Read or write an Excel (XLSX) file from an S3, SFTP, SharePoint, Smartsheet, or Databricks connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use Excel files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Filepath                    | The file path according to the connection type.                   |

## Source Properties

| Property                      | Description                                                             | Default  |
| ----------------------------- | ----------------------------------------------------------------------- | -------- |
| Description                   | Description of the table.                                               | None     |
| Header                        | Whether the first row contains column headers.                          | Enabled  |
| Allow Undefined Rows          | Allows rows with all values undefined (null or empty).                  | Enabled  |
| Allow Incomplete Rows         | Allows rows with missing values for some columns.                       | Enabled  |
| Ignore Cell Formatting        | Ignores Excel-specific formatting during data parsing.                  | Enabled  |
| Sheet Name                    | Name of the sheet to read from.                                         | None     |
| Skip Undefined Rows           | Skip rows where all values are undefined.                               | Disabled |
| Date Format Reference         | Date format to use when parsing date values.                            | None     |
| Time Format Reference         | Time format to use when parsing time values.                            | None     |
| Timestamp Format Reference    | Timestamp format to use when parsing date-time values.                  | None     |
| Inference Data Sampling Limit | Number of rows to sample for inferring schema.                          | `0`      |
| MaxCalcIterations             |                                                                         | `0`      |
| Password                      |                                                                         |          |
| UnzipSizeLimit                | Maximum uncompressed size (in bytes) allowed for Excel file contents.   | `0`      |
| UnzipXMLSizeLimit             | Maximum XML size (in bytes) allowed when unzipping Excel file contents. | `0`      |
