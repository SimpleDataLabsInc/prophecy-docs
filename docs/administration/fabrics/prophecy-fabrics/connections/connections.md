---
title: Connections
id: connections
description: A list of connections that you can configure for projects
tags:
  - connections
  - sql
---

Prophecy lets you work with various data providers when building your pipelines. To make this easier, you can create **connections** between Prophecy and a data provider. Once you add connections a fabric and use that fabric in a project, you can:

- Reuse credentials that are established in the connection.
- Browse data from the data provider in the [Environment browser](docs/getting-started/concepts/project.md#project-editor) of your Prophecy project.
- Auto-index data for search in the Prophecy interface.

:::info
Connections are stored per [fabric](docs/getting-started/concepts/fabrics.md).
:::

## Supported connections

If you are using a Prophecy fabric, you can add the following connections. You will have to be attached to a fabric to utilize its connections.

| Connection                           | Type                 |
| ------------------------------------ | -------------------- |
| [Databricks](./databricks)           | Cloud data warehouse |
| [Snowflake](./snowflake)             | Cloud data warehouse |
| Databricks volumes                   | File store           |
| Snowflake stage                      | File store           |
| [Amazon S3](./s3)                    | File store           |
| Azure blob storage                   | File store           |
| [SFTP](./sftp)                       | File store           |
| [Microsoft Sharepoint](./sharepoint) | File store           |
| [Smartsheet](./smartsheet)           | Web application      |
| [MSSQL](./mssql)                     | Database             |
| [MongoDB](./mongodb)                 | Database             |
| [Tableau](./tableau)                 | BI tool              |
| Power BI                             | BI tool              |
