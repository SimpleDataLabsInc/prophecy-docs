---
title: Connections
id: connections
description: A list of connections that you can configure for SQL projects
tags:
  - connections
  - sql
---

Prophecy lets you work with various data providers when building your pipelines and models. To make this easier, you can create **connections** between Prophecy and a data provider. Once you add connections a fabric and use that fabric in a project, you can:

- Reuse credentials that are established in the connection.
- Browse data from the data provider in the [Environment tab](docs/getting-started/concepts/project.md#project-editor) of your Prophecy project.
- Auto-index data for search in the Prophecy interface.

:::info
Connection functionality and setup will vary across data providers.
:::

Connections are stored per [fabric](docs/getting-started/concepts/fabrics.md).

## Supported connections

If you are using a Prophecy fabric, you can add the following connections. You will have to be attached to a fabric to utilize connections.

### Cloud data platforms

Read and write to different data warehouses.

| Connection | Parameters |
| ---------- | ---------- |
| Databricks |            |
| Snowflake  |            |

### File stores

These connections let you read various file types, such as CSV, JSON, Excel, XML, and text files.

| Connection         | Parameters |
| ------------------ | ---------- |
| Databricks volumes |            |
| Snowflake stage    |            |
| S3                 |            |
| Azure blob storage |            |
| SFTP               |            |
| Sharepoint         |            |

### Web applications

Read and write from web applications that expose their data in a tabular format.

| Connection | Parameters |
| ---------- | ---------- |
| Smartsheet |            |

### Databases

Access data from SQL databases.

| Connection | Parameters |
| ---------- | ---------- |
| SQL server |            |

### BI tools

Receive and send data pertaining to BI reporting.

| Connection | Parameters |
| ---------- | ---------- |
| Tableau    |            |
| Power BI   |            |
