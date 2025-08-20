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

## Supported file formats

| Format                 | Read | Write |
| ---------------------- | ---- | ----- |
| [XLSX](/analysts/xlsx) | Yes  | Yes   |

## Create a Smartsheet gem

To create a Smartsheet Source or Target gem in your pipeline:

1. Set up your Smartsheet connection.

   Learn more in the [Smartsheet connection](/administration/fabrics/prophecy-fabrics/connections/smartsheet) documentation.

1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **Smartsheet**.
1. In the **Location** tab, choose your [file format](#supported-file-formats) and location.

   For more information on how to configure this screen, jump to [Location](#location).

1. In the **Properties** tab, set the file properties. These vary based on the file type that you are working with.

   See the list of properties per [file type](/analysts/file-types).

1. In the **Preview** tab, load a sample of the data and verify that it looks correct. Source gems only.

## Location

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                                              |
| Select or create connection | Select an existing Smartsheet connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/smartsheet). Example: `smartsheet-prod` |
| Filepath                    | Path to the file in Smartsheet that you will read from or write to. Example: `/Projects/ProjectName/file.csv`                                               |
