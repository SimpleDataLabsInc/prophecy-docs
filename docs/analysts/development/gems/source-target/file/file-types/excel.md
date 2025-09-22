---
title: Excel
id: excel
slug: /analysts/excel
description: Read and write Excel files
tags: []
---

This page describes the **Excel-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for Excel files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [Microsoft OneDrive](/analysts/onedrive-gem)
- [SFTP](/analysts/sftp-gem)
- [SharePoint](/analysts/sharepoint-gem)
- [Smartsheet](/analysts/smartsheet-gem)

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use Excel files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Properties

### Source properties

The following properties are available for the Excel Source gem.

| Property                      | Description                                                                                                                               | Default                |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Description                   | Description of the table.                                                                                                                 | None                   |
| Header                        | Whether the first row is the column header.                                                                                               | True                   |
| Allow Undefined Rows          | Whether to permit rows with all values undefined (null or empty).                                                                         | True                   |
| Allow Incomplete Rows         | Whether to permit rows with missing values for some columns.                                                                              | True                   |
| Ignore Cell Formatting        | Whether to apply the number format for the cell value or get the raw value.                                                               | True                   |
| Sheet Reading method          | Whether to read one sheet of data or union the data from multiple sheets into one table. Learn more in [Reading sheets](#reading-sheets). | Read single sheet data |
| Skip Undefined Rows           | Whether to skip rows where all values are undefined.                                                                                      | False                  |
| Date Format Reference         | Date format to use when parsing date values.                                                                                              | `2006-01-02`           |
| Time Format Reference         | Time format to use when parsing time values.                                                                                              | `15:04:05`             |
| Timestamp Format Reference    | Timestamp format to use when parsing date-time values.                                                                                    | `2006-01-02 15:04:05`  |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.                                                                                | `0`                    |
| Password                      | Password for password-protected sheets.                                                                                                   | None                   |

### Reading sheets

Depending on the **Sheet Reading method** you choose, you will need to provide additional details.

#### Read single sheet data

For this option, Prophecy only reads one sheet of the Excel file.

| Additional property | Description                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sheet Name          | Provide the name of the sheet to read. If the name you provide does not match the name of an existing sheet in the file, the gem will fail to run. |

#### Read union of multiple sheet data

For this option, Prophecy reads the data from each of the sheets that you specify. Then, the data is unioned into one output table.

| Additional property      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sheet Filter Condition   | Choose how you define the set of sheets to read. <ul><li><strong>Sheet name prefix equals</strong>: Read sheets whose names start with the provided value.</li><li><strong>Sheet name suffix equals</strong>: Read sheets whose names end with the provided value.</li><li><strong>Sheet name contains value</strong>: Read sheets whose names contain the provided substring.</li><li><strong>Sheet name is in below list (comma separated)</strong>: Read sheets whose names exactly match any comma-separated value provided in <em>Filter Value</em>.</li></ul> |
| Filter Value             | Provide the value used to evaluate the filter condition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Output Sheet Column Name | Provide the name of the column to append to the output table that contains the original sheet name for each row.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Target properties

The following properties are available for the Excel Target gem.

| Property               | Description                                                                 | Default |
| ---------------------- | --------------------------------------------------------------------------- | ------- |
| Description            | Description of the table.                                                   | None    |
| Header                 | Whether to make the first row the column header.                            | True    |
| Ignore Cell Formatting | Whether to apply the number format for the cell value or get the raw value. | True    |
| Password               | Password for password-protected sheets.                                     | None    |
