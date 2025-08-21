---
title: SFTP gem
sidebar_label: SFTP
id: sftp-gem
slug: /analysts/sftp-gem
description: Use SFTP as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a Source and Target gem to read from or write to remote SFTP locations in Prophecy pipelines. This page covers supported file formats, how to create the gem, and how to configure connection details and paths for both Source and Target gems.

## Supported file formats

The SFTP gem supports the following file formats.

| Format                               | Read | Write  |
| ------------------------------------ | ---- | ------ |
| [CSV](/analysts/csv)                 | Yes  | Yes    |
| [JSON](/analysts/json)               | Yes  | Yes    |
| [Parquet](/analysts/parquet)         | Yes  | Yes    |
| [XML](/analysts/xml)                 | Yes  | Yes    |
| [XLSX](/analysts/xlsx)               | Yes  | Yes    |
| [Fixed width](/analysts/fixed-width) | Yes  | **No** |

## Create an SFTP gem

To create an SFTP Source or Target gem in your pipeline:

1. Set up your [SFTP connection](/administration/fabrics/prophecy-fabrics/connections/sftp).
1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **SFTP**.
1. In the **Location** tab, choose your [file format](#supported-file-formats) and location.

   :::info
   For more information on how to configure this screen, jump to [Source location](#source-location) and [Target location](#target-location).
   :::

1. In the **Properties** tab, set the file properties. These vary based on the file type that you are working with.

   :::info
   See the list of properties per [file type](/analysts/file-types).
   :::

1. (Source only) In the **Preview** tab, load a sample of the data and verify that it looks correct.

## Source location

| Parameter                                              | Description                                                                                                                                                                                                                                                                |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                                            | File format to read. Example: `csv`, `json`, `parquet`                                                                                                                                                                                                                     |
| Select or create connection                            | Choose an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp).                                                                                                                                                       |
| Choose Path or Configuration                           | Choose between the following options.<ul><li>**Filepath**: Read one file from a specified file path.</li><li>**Configuration**: Output the data from all files returned by a file trigger. In this mode, the gem unions all detected files into a single output.</li></ul> |
| Filepath<br/>_(Filepath option only)_                  | <p>Path to the file on the SFTP server. Supports wildcards but must resolve to a single file.</p><p>Example: <code>/temp/dir/\*.csv</code>.</p>                                                                                                                            |
| Select Configuration<br/>_(Configuration option only)_ | [File trigger configuration](/analysts/triggers#trigger-configuration) that, when triggered, will provide the files that were added or modified for that triggered run.                                                                                                    |
| Include filename Column                                | Appends a column containing the source filename for each row in the output table.                                                                                                                                                                                          |
| Delete files after successfully processed              | Deletes files after they are successfully read.                                                                                                                                                                                                                            |
| Move files after successfully processed                | Moves files to a specified directory after they are successfully read.                                                                                                                                                                                                     |

:::info
If you select **Configuration**, you will not be able to run the pipeline interactively. You will see the following error:

```
Failed due to: Unable to detect modified files for provided File Trigger
```

For the same reason, you will encounter an error if you try to infer the schema in the **Properties** tab or load a preview in the **Preview** tab of the Source gem.
:::

## Target location

| Parameter                   | Description                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to read, such as `csv` or `json`.                                                                                            |
| Select or create connection | Select an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp). Example: `sftp-prod` |
| Filepath                    | Path to the file in SFTP that you will write to. Example: `/temp/dir/file.csv`                                                            |
