---
title: Source and Target
id: source-target
description: Source and target gems
tags: []
---

Source and Target gems define how data is read and written in your pipeline.

## Tables

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric.

| Name  | Description                                                                        |
| ----- | ---------------------------------------------------------------------------------- |
| Table | Tables that are stored in your SQL warehouse.                                      |
| View  | SQL query that performs a transformation on a dataset. It itself contains no data. |
| Seed  | Small CSV files that you can write directly in Prophecy.                           |

:::caution
When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast. Processing external data is slower. **Do not create an external connection that duplicates your primary SQL warehouse connection.**
:::

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Database                    | Database to use for the session after you connect.                |
| Schema                      | Schema to use for the session after you connect.                  |
| Name                        | Name to to identify your connection.                              |

## External Sources and Targets

To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy and written into your warehouse.

:::note
These sources and targets are closely related to the types of [connections](docs/analysts/development/connections.md) you can set up for your project.
:::

| File       | Connection types                             |
| ---------- | -------------------------------------------- |
| CSV        | S3, SFTP, Sharepoint, Databricks             |
| JSON       | S3, SFTP, Sharepoint, Databricks             |
| Text       | None                                         |
| XLSX       | S3, SFTP, Sharepoint, Databricks, Smartsheet |
| XML        | S3, SFTP, Sharepoint, Databricks             |
| Databricks | Databricks                                   |
| Snowflake  | Snowflake                                    |
| MSSQL      | MSSQL                                        |
| MongoDB    | MongoDB                                      |
