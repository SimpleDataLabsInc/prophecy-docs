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

Read or write an Excel (XLSX) file from an external connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use Excel files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Supported connections

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [Databricks](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)
- [Smartsheet](/administration/fabrics/prophecy-fabrics/connections/smartsheet)

## Parameters

| Parameter                   | Tab             | Description                                                                                                                      |
| --------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                                                                               |
| Format type                 | Source location | Format of the gem. In this case, `xlsx`.                                                                                         |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                                                                |
| Filepath                    | Source location | File path where you want to read and write files according to the connection type.                                               |
| Properties                  | Properties      | Optional table properties to apply. [Source](#source-properties) and [target](#target-properties) properties are outlined below. |
| Schema                      | Properties      | Schema definition of the table (custom or inferred).                                                                             |

### Source properties

| Property                      | Description                                                                 | Default |
| ----------------------------- | --------------------------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                                   | None    |
| Header                        | Whether the first row is the column header.                                 | True    |
| Allow Undefined Rows          | Whether to permit rows with all values undefined (null or empty).           | True    |
| Allow Incomplete Rows         | Whether to permit rows with missing values for some columns.                | True    |
| Ignore Cell Formatting        | Whether to apply the number format for the cell value or get the raw value. | True    |
| Sheet Name                    | Name of the sheet to read from.                                             | None    |
| Skip Undefined Rows           | Whether to skip rows where all values are undefined.                        | False   |
| Date Format Reference         | Date format to use when parsing date values.                                | None    |
| Time Format Reference         | Time format to use when parsing time values.                                | None    |
| Timestamp Format Reference    | Timestamp format to use when parsing date-time values.                      | None    |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.                  | `0`     |
| Password                      | Password for password-protected sheets.                                     | None    |

## Target properties

| Property               | Description                                                                 | Default |
| ---------------------- | --------------------------------------------------------------------------- | ------- |
| Description            | Description of the table.                                                   | None    |
| Header                 | Whether to make the first row the column header.                            | True    |
| Ignore Cell Formatting | Whether to apply the number format for the cell value or get the raw value. | True    |
| Password               | Password for password-protected sheets.                                     | None    |
