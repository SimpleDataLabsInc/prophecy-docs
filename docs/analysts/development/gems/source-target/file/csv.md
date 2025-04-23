---
title: CSV
id: csv
slug: /analysts/csv
description: Read and write CSV files
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Read or write a CSV file from an S3, SFTP, SharePoint, or Databricks connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use CSV files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Filepath                    | The file path according to the connection type.                   |

## Source Properties

| Property                      | Description                                                                    | Default |
| ----------------------------- | ------------------------------------------------------------------------------ | ------- |
| Description                   | Description of the table.                                                      | None    |
| Separator                     | Character used to separate values in the CSV file.                             | `,`     |
| Header                        | Checkbox to enable if the first row of the CSV is the header row.              | Enabled |
| Null Value                    | String that represents a null or missing value in the CSV.                     | None    |
| Comment                       | Character used to denote lines in the file that should be treated as comments. | None    |
| Inference Data Sampling Limit | Limit the number of rows sampled to infer the schema                           | `0`     |
