---
title: Google Cloud Storage (GCS) gem
id: gcs-gem
sidebar_label: Google Cloud Storage
slug: /analysts/gcs-gem
description: Use Google Cloud Storage (GCS) as a file source or target in a gem
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a Source and Target gem to read from or write to Google Cloud Storage (GCS) locations in Prophecy pipelines. This page covers supported file formats, how to create the gem, and how to configure connection details and paths for both Source and Target gems.

## Supported file formats

| Format                               | Read | Write |
| ------------------------------------ | ---- | ----- |
| [CSV](/analysts/csv)                 | Yes  | Yes   |
| [Fixed width](/analysts/fixed-width) | Yes  | No    |
| [JSON](/analysts/json)               | Yes  | Yes   |
| [Parquet](/analysts/parquet)         | Yes  | Yes   |
| [XLSX](/analysts/excel)              | Yes  | Yes   |
| [XML](/analysts/xml)                 | Yes  | Yes   |

## Create a GCS gem

To create a GCS Source or Target gem in your pipeline:

1. Set up your [GCS connection](/administration/fabrics/prophecy-fabrics/connections/gcs).
1. Add a new Source or Target gem to your pipeline canvas and open the configuration.
1. In the **Type** tab, select **GCS**.
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

When setting up a GCS Source gem, you need to decide how Prophecy should locate files at runtime. There are two modes:

- **Filepath**: Always read from a specific file path. You can use wildcards in your path definition. If multiple files match, they are unioned into a single output table.
- **Configuration**: Dynamically read files provided by a [file arrival/change trigger](/analysts/triggers) in the pipeline’s schedule. When new or updated files are detected in the monitored directory, the trigger starts the pipeline and passes those files to the GCS Source gem, which unions them into a single output table.

Use the table below to understand how to configure each option.

| Parameter                                            | Description                                                                                                                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                                          | Type of file to read, such as csv or json.                                                                                                                                                                                        |
| Select or create connection                          | Select an existing GCS connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/gcs).                                                                                                                |
| Choose Path or Configuration                         | Choose between the following options.<ul><li>**Filepath**: Read one file from a specified file path.</li><li>**Configuration**: Dynamically read files provided by a [file arrival/change trigger](/analysts/triggers).</li></ul> |
| Filepath<br/>_Filepath option only_                  | Path to the file in the GCS bucket. Supports wildcards. <br/>Example: `gs://my-bucket/temp/dir/*.csv`                                                                                                                             |
| Select Configuration<br/>_Configuration option only_ | File arrival/change trigger [configuration](/analysts/triggers#trigger-configuration) that provides the added or modified files for that run.                                                                                     |
| Include filename Column                              | Appends a column containing the source filename for each row in the output table.                                                                                                                                                 |
| Delete files after successfully processed            | Deletes objects after they are successfully read.                                                                                                                                                                                 |
| Move files after successfully processed              | Moves objects to a specified directory after they are successfully read. <br/>Example: `gs://my-bucket/archive/`                                                                                                                  |

### Configuration

If you select **Configuration**, the gem will only run successfully during a **triggered pipeline run**. This is because the gem expects files from the trigger. In other cases, such as an interactive run or an API-triggered run, there will be no files to read. In these situations, you will encounter the following error:

```

Failed due to: Unable to detect modified files for provided File Trigger

```

For the same reason, you'll see an error if you try to infer the schema in the **Properties** tab or load a preview in the **Preview** tab of the Source gem.

## Target location

When setting up a GCS Target gem, you need to set the location and file type to correctly write the file.

| Parameter                   | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Type of file to write, such as csv or json.                                                                        |
| Select or create connection | Select an existing GCS connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/gcs). |
| Filepath                    | GCS path where the output file will be written. <br/>Example: `gs://my-bucket/data/orders.csv`                     |
