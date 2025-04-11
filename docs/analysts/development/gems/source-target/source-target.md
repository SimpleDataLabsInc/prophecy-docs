---
title: Source and Target
id: source-target
slug: /analysts/source-target
description: Source and target gems
tags: []
---

Source and Target gems define how Prophecy reads and writes data in your pipeline.

![Source/Target Gem Drawer](img/source-target-analysts.png)

There are two types of sources and targets:

- [Tables in your SQL data warehouse](#tables)
- [Sources and targets from external systems](#external-sources-and-targets)

## Tables

<span class="badge">SQL</span><br/><br/>

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric. You can add existing tables from your data warehouse to Prophecy, or you can create new tables directly in Prophecy.

| Name  | Description                                                                                                   | Gem Type         |
| ----- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           | Source or Target |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). | Source or Target |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               | Source only      |

:::caution
When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast, but processing external data is slower.<br/>**Do not create an external connection that duplicates your primary SQL warehouse connection.**
:::

## External Sources and Targets

<span class="badge">Prophecy Automate</span><br/><br/>

To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy.

| [Connection type](docs/analysts/development/connections.md) | Supported formats                      |
| ----------------------------------------------------------- | -------------------------------------- |
| S3                                                          | CSV, JSON, XLSX, XML                   |
| SFTP                                                        | CSV, JSON, XLSX, XML                   |
| Sharepoint                                                  | CSV, JSON, XLSX, XML                   |
| Databricks                                                  | CSV, JSON, XLSX, XML, Databricks table |
| Smartsheet                                                  | XLSX                                   |
| Snowflake                                                   | Snowflake                              |
| MSSQL                                                       | MSSQL                                  |
| MongoDB                                                     | MongoDB                                |
| None                                                        | Text                                   |
