---
title: Databricks Volumes gem
sidebar_label: Databricks Volumes
id: databricks-volumes-gem
slug: /analysts/databricks-volumes-gem
description: Use Databricks Volumes as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write files from [Databricks Volumes](/administration/fabrics/prophecy-fabrics/connections/databricks-volumes) using a Source or Target gem.

:::info
For authentication and connection setup, visit [Databricks Volumes connection](/administration/fabrics/prophecy-fabrics/connections/databricks-volumes).
:::

## Supported file types

You can read and write the following file formats with Databricks Volumes:

- [CSV](/analysts/csv)
- [Fixed width](/analysts/fixed-width) (Source only)
- [JSON](/analysts/json)
- [Parquet](/analysts/parquet)
- [XLSX](/analysts/xlsx)
- [XML](/analysts/xml)

## Configuration tabs

When you create a new Source or Target gem with Databricks Volumes, the gem dialog contains the following tabs:

- **Type**: Choose **Databricks Volumes** as the file storage provider.
- **Source/Target location**: Select your Databricks Volumes connection and specify the path.
- **Properties**: Configure schema and file-type specific properties.
- **Preview (Source only)**: Load a preview of the dataset reflecting your configuration.

## Location tab

| Parameter                   | Description                                                                                                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                                                      |
| Select or create connection | Select an existing Databricks Volumes connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/databricks-volumes). Example: `databricks-volumes-prod` |
| Filepath                    | Path to the file in Databricks Volumes that you will read from or write to. Example: `/Volumes/catalog/schema/volume/file.csv`                                                      |

## Properties tab

Properties are file-type dependent. Review the documentation for each file type to see its specific properties.
