---
title: Smartsheet gem
sidebar_label: Smartsheet
id: smartsheet-gem
slug: /analysts/smartsheet-gem
description: Use Smartsheet as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write files from [Smartsheet](/administration/fabrics/prophecy-fabrics/connections/smartsheet) using a Source or Target gem.

:::info
For authentication and connection setup, visit [Smartsheet connection](/administration/fabrics/prophecy-fabrics/connections/smartsheet).
:::

## Supported file types

You can read and write the following file formats with Smartsheet:

- [XLSX](/analysts/xlsx)

## Configuration tabs

When you create a new Source or Target gem with Smartsheet, the gem dialog contains the following tabs:

- **Type**: Choose **Smartsheet** as the file storage provider.
- **Source/Target location**: Select your Smartsheet connection and specify the path.
- **Properties**: Configure schema and file-type specific properties.
- **Preview (Source only)**: Load a preview of the dataset reflecting your configuration.

## Location tab

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                              |
| Select or create connection | Select an existing Smartsheet connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/smartsheet). Example: `smartsheet-prod` |
| Filepath                    | Path to the file in Smartsheet that you will read from or write to. Example: `/Projects/ProjectName/file.csv`                                               |

## Properties tab

Properties are file-type dependent. Review the documentation for each file type to see its specific properties.
