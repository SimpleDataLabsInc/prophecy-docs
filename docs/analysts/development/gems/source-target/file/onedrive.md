---
title: Microsoft OneDrive gem
sidebar_label: Microsoft OneDrive
id: onedrive-gem
slug: /analysts/onedrive-gem
description: Use OneDrive as a file source or target in a gem
tags: []
---

Read or write files from [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive) using a Source or Target gem.

:::info
For authentication and connection setup, visit [OneDrive connection](/administration/fabrics/prophecy-fabrics/connections/onedrive).
:::

## Supported file types

You can read and write the following file formats with OneDrive:

- [CSV](/analysts/csv)
- [JSON](/analysts/json)
- [Parquet](/analysts/parquet)
- [XML](/analysts/xml)
- [Fixed width](/analysts/fixed-width)
- [XLSX](/analysts/xlsx)

## Configuration tabs

When you create a new Source or Target gem with OneDrive, the gem dialog contains the following tabs:

- **Type**: Choose **OneDrive** as the file storage provider.
- **Source/Target location**: Select your OneDrive connection and specify the path.
- **Properties**: Configure schema and file-type specific properties.
- **Preview (Source only)**: Load a preview of the dataset reflecting your configuration.

## Location tab

| Parameter                   | Description                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                        |
| Select or create connection | Select an existing OneDrive connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/onedrive). Example: `onedrive-prod` |
| Filepath                    | Path to the file in OneDrive that you will write to.                                                                                                  |

## Properties tab

Properties are file-type dependent. Review the documentation for each file type to see its specific properties.
