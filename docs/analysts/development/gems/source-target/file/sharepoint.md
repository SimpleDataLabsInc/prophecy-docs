---
title: Microsoft SharePoint gem
sidebar_label: SharePoint
id: sharepoint-gem
slug: /analysts/sharepoint-gem
description: Use SharePoint as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write files from [Microsoft SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint) using a Source or Target gem.

:::info
For authentication and connection setup, visit [SharePoint connection](/administration/fabrics/prophecy-fabrics/connections/sharepoint).
:::

## Supported file types

You can read and write the following file formats with SharePoint:

- [CSV](/analysts/csv)
- [Fixed width](/analysts/fixed-width) (Source only)
- [JSON](/analysts/json)
- [XLSX](/analysts/xlsx)
- [XML](/analysts/xml)

## Configuration tabs

When you create a new Source or Target gem with SharePoint, the gem dialog contains the following tabs:

- **Type**: Choose **SharePoint** as the file storage provider.
- **Source/Target location**: Select your SharePoint connection and specify the path.
- **Properties**: Configure schema and file-type specific properties.
- **Preview (Source only)**: Load a preview of the dataset reflecting your configuration.

## Location tab

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                              |
| Select or create connection | Select an existing SharePoint connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sharepoint). Example: `sharepoint-prod` |
| Filepath                    | Path to the file in SharePoint that you will read from or write to. Example: `/sites/sitename/SharedDocuments/file.csv`                                     |

## Properties tab

Properties are file-type dependent. Review the documentation for each file type to see its specific properties.
