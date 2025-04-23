---
title: XML
id: xml
slug: /analysts/xml
description: Read and write XML files
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Read or write an XML file from an S3, SFTP, SharePoint, or Databricks connection.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use XML files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Filepath                    | The file path according to the connection type.                   |

## Source Properties

| Property                      | Description                                                    | Default |
| ----------------------------- | -------------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                      | None    |
| Row Tag                       | XML tag that identifies a single row or record in the dataset. | None    |
| Inference Data Sampling Limit | Number of rows to sample for inferring the schema.             | `0`     |
