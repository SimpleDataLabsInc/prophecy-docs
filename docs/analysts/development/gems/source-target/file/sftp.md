---
title: SFTP gem
sidebar_label: SFTP
id: sftp-gem
slug: /analysts/sftp-gem
description: Use SFTP as a file source or target in a gem
tags: []
---

Read or write files from [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp) using a Source or Target gem.

:::info
For authentication and connection setup, visit [SFTP connection](/administration/fabrics/prophecy-fabrics/connections/sftp).
:::

## Supported file types

You can read and write the following file formats with SFTP:

- [CSV](/analysts/csv)
- [JSON](/analysts/json)
- [Parquet](/analysts/parquet)
- [XML](/analysts/xml)
- [Fixed width](/analysts/fixed-width)
- [XLSX](/analysts/xlsx)

## Configuration tabs

When you create a new Source or Target gem with SFTP, the gem dialog contains the following tabs:

- **Type**: Choose **SFTP** as the file storage provider.
- **Source/Target location**: Select your SFTP connection and specify the path.
- **Properties**: Configure schema and file-type specific properties.
- **Preview (Source only)**: Load a preview of the dataset reflecting your configuration.

## Source location tab

When using SFTP in the **Source/Target location** tab:

| Parameter                                        | Description                                                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                                      | Type of file to read, such as `csv` or `json`.                                                                                                                                      |
| Select or create connection                      | Select an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp). Example: `sftp-prod`                                           |
| Choose Path or Configuration                     | Whether to read a file from a path, or return the data from files that triggered a scheduled run.                                                                                   |
| Filepath (Filepath option only)                  | Path to the file(s) in SFTP. Wildcard supported. May only return one file. Example: `/temp/dir/*.csv`                                                                               |
| Select Configuration (Configuration option only) | File trigger configuration to use that specifies the sensor to return data from. Configuration unions all data from files that triggered a scheduled run. Example: `sftp-trigger-1` |
| Include filename Column                          | Whether to add a rightmost column to the output table that contains the name of the file that the data was read from.                                                               |
| Delete files after successfully processed        | After reading the files, delete them.                                                                                                                                               |
| Move files after successfully processed          | After reading the files, move them to a defined file path.                                                                                                                          |

During interactive execution, you will get this error: `Failed due to: Unable to detect modified files for provided File Trigger`.

## Target location tab

| Parameter                   | Description                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                            |
| Select or create connection | Select an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp). Example: `sftp-prod` |
| Filepath                    | Path to the file in SFTP that you will write to. Example: `/temp/dir/file.csv`                                                            |
