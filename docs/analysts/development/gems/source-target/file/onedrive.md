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

Use a Source or Target gem to read from or write to OneDrive in Prophecy pipelines. This page covers supported file formats, how to create the gem, and how to configure connection details and paths for both Source and Target gems.

## Supported file formats

| Format                               | Read | Write |
| ------------------------------------ | ---- | ----- |
| [CSV](/analysts/csv)                 | Yes  | Yes   |
| [Fixed width](/analysts/fixed-width) | Yes  | No    |
| [JSON](/analysts/json)               | Yes  | Yes   |
| [XLSX](/analysts/excel)              | Yes  | Yes   |
| [XML](/analysts/xml)                 | Yes  | Yes   |

## Create a OneDrive gem

To create a OneDrive Source or Target gem in your pipeline:

1. Set up your [OneDrive connection](/administration/fabrics/prophecy-fabrics/connections/onedrive).
1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **OneDrive**.
1. In the **Location** tab, choose your [file format](#supported-file-formats) and location.

   :::info
   For more information on how to configure this screen, jump to [Location](#location).
   :::

1. In the **Properties** tab, set the file properties. These vary based on the file type that you are working with.

   :::info
   See the list of properties per [file type](/analysts/file-types).
   :::

1. (Source only) In the **Preview** tab, load a sample of the data and verify that it looks correct.

## Location

| Parameter                   | Description                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read or write, such as `csv` or `json`.                                                                      |
| Select or create connection | Select an existing OneDrive connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/onedrive). |
| Filepath                    | Path to the file in OneDrive.                                                                                                |
