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

Use a Source and Target gem to read from or write to Smartsheet locations in Prophecy pipelines. This page covers supported file formats, how to create the gem, and how to configure connection details and paths for both Source and Target gems.

## Supported file formats

| Format                  | Read | Write |
| ----------------------- | ---- | ----- |
| [XLSX](/analysts/excel) | Yes  | Yes   |

## Create a Smartsheet gem

To create a Smartsheet Source or Target gem in your pipeline:

1. Set up your [Smartsheet connection](/core/prophecy-fabrics/connections/smartsheet).
1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **Smartsheet**.
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

| Parameter                   | Description                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read or write, such as `csv` or `json`.                                                        |
| Select or create connection | Select an existing Smartsheet connection or [create a new one](/core/prophecy-fabrics/connections/smartsheet). |
| Filepath                    | Path to the file in Smartsheet. <br/>Example: `/Projects/ProjectName/file.csv`                                 |
