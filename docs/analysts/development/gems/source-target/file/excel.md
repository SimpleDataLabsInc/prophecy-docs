---
title: Excel
id: excel
slug: /analysts/excel
description: Read and write excel files
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Read or write an Excel (XLSX) file from an S3, SFTP, SharePoint, Smartsheet, or Databricks connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use Excel files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Filepath                    | The file path according to the connection type.                   |
