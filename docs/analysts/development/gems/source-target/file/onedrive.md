---
title: Microsoft OneDrive gem
sidebar_label: OneDrive
id: onedrive-gem
slug: /analysts/onedrive-gem
description: Use OneDrive as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write files from [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive) using a Source or Target gem.

## Supported file formats

| Format                               | Read | Write |
| ------------------------------------ | ---- | ----- |
| [CSV](/analysts/csv)                 | Yes  | Yes   |
| [Fixed width](/analysts/fixed-width) | Yes  | No    |
| [JSON](/analysts/json)               | Yes  | Yes   |
| [XLSX](/analysts/xlsx)               | Yes  | Yes   |
| [XML](/analysts/xml)                 | Yes  | Yes   |

## Create a OneDrive gem

To create a OneDrive Source or Target gem in your pipeline:

1. Set up your OneDrive connection.

   Learn more in the [OneDrive connection](/administration/fabrics/prophecy-fabrics/connections/onedrive) documentation.

1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **OneDrive**.
1. In the **Location** tab, choose your [file format](#supported-file-formats) and location.

   For more information on how to configure this screen, jump to [Location](#location).

1. In the **Properties** tab, set the file properties. These vary based on the file type that you are working with.

   See the list of properties per [file type](/analysts/file-types).

1. In the **Preview** tab, load a sample of the data and verify that it looks correct. Source gems only.

## Location

| Parameter                   | Description                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                        |
| Select or create connection | Select an existing OneDrive connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/onedrive). Example: `onedrive-prod` |
| Filepath                    | Path to the file in OneDrive that you will write to.                                                                                                  |
