---
title: Excel
id: excel
slug: /analysts/excel
description: Read and write excel files
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write an Excel (XLSX) file from an external connection using a Source or Target gem.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use Excel files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Supported connections

You can read Excel files from the following connections:

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [Databricks](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)
- [Smartsheet](/administration/fabrics/prophecy-fabrics/connections/smartsheet)

## Configuration tabs

When you create a new Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Choose the file storage provider you will connect to.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the file path where you will read from or write to.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Parameters

Configure a Source/Target gem using the following parameters for Excel files.

| Parameter                   | Tab             | Description                                                                                                                      |
| --------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                                                                               |
| Format type                 | Source location | Format of the gem. In this case, `xlsx`.                                                                                         |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                                                                |
| Filepath                    | Source location | File path where you want to read and write files according to the connection type.                                               |
| Properties                  | Properties      | Optional table properties to apply. [Source](#source-properties) and [target](#target-properties) properties are outlined below. |
| Schema                      | Properties      | Schema definition of the table (custom or inferred).                                                                             |

### Source properties

The following properties are available for the Excel Source gem.

| Property                      | Description                                                                 | Default               |
| ----------------------------- | --------------------------------------------------------------------------- | --------------------- |
| Description                   | Description of the table.                                                   | None                  |
| Header                        | Whether the first row is the column header.                                 | True                  |
| Allow Undefined Rows          | Whether to permit rows with all values undefined (null or empty).           | True                  |
| Allow Incomplete Rows         | Whether to permit rows with missing values for some columns.                | True                  |
| Ignore Cell Formatting        | Whether to apply the number format for the cell value or get the raw value. | True                  |
| Sheet Name                    | Name of the sheet to read from.                                             | None                  |
| Skip Undefined Rows           | Whether to skip rows where all values are undefined.                        | False                 |
| Date Format Reference         | Date format to use when parsing date values.                                | `2006-01-02`          |
| Time Format Reference         | Time format to use when parsing time values.                                | `15:04:05`            |
| Timestamp Format Reference    | Timestamp format to use when parsing date-time values.                      | `2006-01-02 15:04:05` |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.                  | `0`                   |
| Password                      | Password for password-protected sheets.                                     | None                  |

## Target properties

The following properties are available for the Excel Target gem.

| Property               | Description                                                                 | Default |
| ---------------------- | --------------------------------------------------------------------------- | ------- |
| Description            | Description of the table.                                                   | None    |
| Header                 | Whether to make the first row the column header.                            | True    |
| Ignore Cell Formatting | Whether to apply the number format for the cell value or get the raw value. | True    |
| Password               | Password for password-protected sheets.                                     | None    |
