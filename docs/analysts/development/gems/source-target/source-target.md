---
title: Source and Target
id: source-target
slug: /analysts/source-target
description: Source and target gems
tags: []
---

Source and Target gems define how Prophecy reads and writes data in your pipeline.

## Tables

<span class="badge">SQL</span><br/><br/>

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric.

| Name  | Description                                                                                                   |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               |

:::caution
When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast, but processing external data is slower.<br/>**Do not create an external connection that duplicates your primary SQL warehouse connection.**
:::

## External Sources and Targets

<span class="badge">Prophecy Automate</span><br/><br/>

To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy.

| File or External Table | [Connection](docs/analysts/development/connections.md) types |
| ---------------------- | ------------------------------------------------------------ |
| CSV                    | S3, SFTP, SharePoint, Databricks                             |
| JSON                   | S3, SFTP, SharePoint, Databricks                             |
| Text                   | None                                                         |
| XLSX                   | S3, SFTP, SharePoint, Databricks, Smartsheet                 |
| XML                    | S3, SFTP, SharePoint, Databricks                             |
| Databricks             | Databricks                                                   |
| Snowflake              | Snowflake                                                    |
| MSSQL                  | MSSQL                                                        |
| MongoDB                | MongoDB                                                      |
