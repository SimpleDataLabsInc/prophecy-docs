---
title: Source and Target
id: source-target
description: Source and target gems
tags: []
---

Source and Target gems define how data is read and written in your pipeline.

## Tables

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric.

| Name  | Description                                                                                                   |
| ----- | ------------------------------------------------------------------------------------------------------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               |

:::caution
When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast. Processing external data is slower. **Do not create an external connection that duplicates your primary SQL warehouse connection.**
:::

## External Sources and Targets

To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy.

| File or External Table | [Connection](docs/analysts/development/connections.md) types |
| ---------------------- | ------------------------------------------------------------ |
| CSV                    | S3, SFTP, Sharepoint, Databricks                             |
| JSON                   | S3, SFTP, Sharepoint, Databricks                             |
| Text                   | None                                                         |
| XLSX                   | S3, SFTP, Sharepoint, Databricks, Smartsheet                 |
| XML                    | S3, SFTP, Sharepoint, Databricks                             |
| Databricks             | Databricks                                                   |
| Snowflake              | Snowflake                                                    |
| MSSQL                  | MSSQL                                                        |
| MongoDB                | MongoDB                                                      |
