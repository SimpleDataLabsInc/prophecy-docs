---
title: Directory gem
sidebar_label: Directory
id: directory
slug: /analysts/directory
description: List files and folders of a specified directory
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name="Prophecy"
  sql_package_version="4.1.3+"
/>

List files and folders of a specified directory from a data ingress/egress connection.

## Input and Output

The Directory gem does not accept any inputs.

The Directory gem produces one output. The output schema includes the following columns:

- `name`: The name of the file.
- `path`: The full path to the file.
- `size_in_bytes`: The size of the file. Folders will be listed as `0` bytes.
- `creation_time`: The time that the file was created.
- `modification_time`: The time that the file was last modified.
- `parent_directory`: The parent directory of the file or folder.
- `file_type`: Whether the record listed is a file or a folder.
- `sheet_name`: The name of the excel sheet in an XLSX file. This column appears when the **Include sheet name as column in output for xlsx files** parameter is enabled.

If a certain connection does not provide a certain field (for example, Databricks does not provide creation time), then the columns will be populated with zeroes or null values.

## Parameters

Configure the Directory gem using the following parameters.

| Parameter                                             | Description                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection type                                       | The data provider to connect to. See [Supported connection types](#supported-connection-types).                                                                                                                                                                                           |
| Select or create connection                           | New or existing connection to the provider you selected.                                                                                                                                                                                                                                  |
| Path                                                  | Path to directory that you want to see the contents of.                                                                                                                                                                                                                                   |
| Enable to include files/directories inside subfolders | When enabled, the gem recursively traverses and include all files and directories within subdirectories of the specified path.                                                                                                                                                            |
| File pattern (Optional)                               | Regular expression (regex) pattern used to narrow results to matching entries.                                                                                                                                                                                                            |
| Include sheet name as column in output for xlsx files | When enabled, the gem adds a column to the output that includes XLSX sheet names. If a file has multiple sheets, one row is generated per sheet name. For example, a file with three sheets produces three rows—one for each sheet. This field is `null` if the file is not an XLSX file. |

## Supported connection types

You can use the Directory gem to list files and folders from the following connection types:

- [Databricks Volumes](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)
- [Smartsheet](/administration/fabrics/prophecy-fabrics/connections/smartsheet)
