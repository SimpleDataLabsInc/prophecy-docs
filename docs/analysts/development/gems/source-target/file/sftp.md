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
| [XLSX](/analysts/excel)              | Yes  | Yes    |
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

When setting up an SFTP Source gem, you need to decide how Prophecy should locate files at runtime. There are two modes:

- **Filepath**: Always read from a specific file path. You can use wildcards in your path definition. If multiple files match, they are unioned into a single output table.

- **Configuration**: Dynamically read files provided by a [file arrival/change trigger](/analysts/triggers) in the pipeline’s schedule. When new or updated files are detected in the monitored directory, the trigger starts the pipeline and passes those files to the SFTP Source gem, which unions them into a single output table.

Use the table below to understand how to configure each option.

| Parameter                                            | Description                                                                                                                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                                          | File format to read. Example: `csv`, `json`, `parquet`                                                                                                                                                                            |
| Select or create connection                          | Choose an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp).                                                                                                              |
| Choose Path or Configuration                         | Choose between the following options.<ul><li>**Filepath**: Read one file from a specified file path.</li><li>**Configuration**: Dynamically read files provided by a [file arrival/change trigger](/analysts/triggers).</li></ul> |
| Filepath<br/>_Filepath option only_                  | Path to the file on the SFTP server. Supports wildcards. <br/>Example: `/temp/dir/*.csv`                                                                                                                                          |
| Select Configuration<br/>_Configuration option only_ | File arrival/change trigger [configuration](/analysts/triggers#trigger-configuration) that provides the added or modified files for that run.                                                                                     |
| Include filename Column                              | Appends a column containing the source filename for each row in the output table.                                                                                                                                                 |
| Delete files after successfully processed            | Deletes files after they are successfully read.                                                                                                                                                                                   |
| Move files after successfully processed              | Moves files to a specified directory after they are successfully read.                                                                                                                                                            |

### Configuration

If you select **Configuration**, the gem will only run successfully during a **triggered pipeline run**. This is because the gem expects files from the trigger. In other cases, such as an interactive run or an API-triggered run, there will be no files to read. In these situations, you might encounter the following error:

```
Failed due to: Unable to detect modified files for provided File Trigger
```

For the same reason, you'll see an error if you try to infer the schema in the **Properties** tab or load a preview in the **Preview** tab of the Source gem.

## Target location

When setting up an SFTP Target gem, you need to set the location and file type to correctly write the file.

| Parameter                   | Description                                                                                                          |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Type of file to write, such as `csv` or `json`.                                                                      |
| Select or create connection | Select an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp). |
| Filepath                    | SFTP path where the output file will be written. <br/>Example: `/temp/dir/file.csv`                                  |
