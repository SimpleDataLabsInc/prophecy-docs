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

:::info
When deciding between tables and external sources, consider your primary SQL connection in your Prophecy fabric. Processing tables in the SQL warehouse will be fast. Conversely, if you configure an external source—like a Databricks source gem—while already connected to a Databricks SQL warehouse, processing will be slower.
:::

## External Sources and Targets

To use data from outside of your SQL warehouse, you can use the following external sources and targets. This data is not persisted in Prophecy, but rather read through Prophecy and written into your warehouse.

:::note
These sources and targets are closely related to the types of [connections](docs/analysts/development/connections.md) you can set up for your project.
:::

### Files

| File | Description | Compatible connections |
| ---- | ----------- | ---------------------- |
| CSV  |             |                        |
| JSON |             |                        |
| Text |             |                        |
| XLSX |             |                        |
| XML  |             |                        |

### External Tables

| Table      | Description |
| ---------- | ----------- |
| Databricks |             |
| Snowflake  |             |
| MSSQL      |             |
