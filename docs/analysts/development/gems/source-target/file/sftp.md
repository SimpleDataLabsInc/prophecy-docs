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

Connect to SFTP servers to read data or write data back to remote locations using a Source or Target gem.

## Supported file formats

| Format                               | Read | Write |
| ------------------------------------ | ---- | ----- |
| [CSV](/analysts/csv)                 | Yes  | Yes   |
| [JSON](/analysts/json)               | Yes  | Yes   |
| [Parquet](/analysts/parquet)         | Yes  | Yes   |
| [XML](/analysts/xml)                 | Yes  | Yes   |
| [XLSX](/analysts/xlsx)               | Yes  | Yes   |
| [Fixed width](/analysts/fixed-width) | Yes  | No    |

## Create an SFTP gem

To create an SFTP Source or Target gem in your pipeline:

1. Set up your SFTP connection.

   Learn more in the [SFTP connection](/administration/fabrics/prophecy-fabrics/connections/sftp) documentation.

1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **SFTP**.
1. In the **Location** tab, choose your [file format](#supported-file-formats) and location.

   For more information on how to configure this screen, jump to [Source location](#source-location) and [Target location](#target-location).

1. In the **Properties** tab, set the file properties. These vary based on the file type that you are working with.

   See the list of properties per [file type](/analysts/file-types).

1. In the **Preview** tab, load a sample of the data and verify that it looks correct. Source gems only.

## Source location

Configure the **Source location** tab using the following parameters.

| Parameter                                        | Description                                                                                                                                                                         |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                                      | Type of file to read, such as `csv` or `json`.                                                                                                                                      |
| Select or create connection                      | Select an existing SFTP connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/sftp). Example: `sftp-prod`                                           |
| Choose Path or Configuration                     | Whether to read a file from a path, or return the data from files that triggered a scheduled run.                                                                                   |
| Filepath (Filepath option only)                  | Path to the file(s) in SFTP. Wildcard supported. May only return one file. Example: `/temp/dir/*.csv`                                                                               |
| Select Configuration (Configuration option only) | File trigger configuration to use that specifies the sensor to return data from. Configuration unions all data from files that triggered a scheduled run. Example: `sftp-trigger-1` |
| Include filename Column                          | Whether to add a rightmost column to the output table that contains the name of the file that the data was read from.                                                               |
| Delete files after successfully processed        | After reading the files, delete them.                                                                                                                                               |
| Move files after successfully processed          | After reading the files, move them to a defined file path.                                                                                                                          |

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
