---
title: JSON
id: json
slug: /analysts/json
description: Read and write JSON files
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Read or write a JSON file from an S3, SFTP, SharePoint, or Databricks connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use JSON files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Filepath                    | The file path according to the connection type.                   |

### Source properties

| Property                      | Description                                                                         | Default  |
| ----------------------------- | ----------------------------------------------------------------------------------- | -------- |
| Description                   | Description of the table.                                                           | None     |
| Multiple documents per file   | Checkbox to enable if there are multiple documents to be parsed from the JSON file. | Disabled |
| Inference Data Sampling Limit | Limit the number of rows sampled to infer the schema                                | `0`      |

### Target properties

| Property                    | Description                                                                         | Default  |
| --------------------------- | ----------------------------------------------------------------------------------- | -------- |
| Description                 | Description of the table.                                                           | None     |
| Multiple documents per file | Checkbox to enable if there are multiple documents to be parsed from the JSON file. | Disabled |
