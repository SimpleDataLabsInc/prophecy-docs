---
title: Databricks
id: databricks
slug: /analysts/databricks
description: Read and write catalog tables in Databricks
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

This page describes how to use Databricks external Source and Target gems to read from or write to tables. Only use an external Source and Target gem when Databricks is not the configured [SQL warehouse connection](/administration/fabrics/prophecy-fabrics/#connections). Otherwise, use the [Table gem](/analysts/bigquery-table).

:::info
If you’re working with file types like CSV or Parquet from Databricks, see [File types](/analysts/file-types) for guidance. This page focuses only on catalog tables.
:::

## Source configuration

Use these settings to configure a Databricks Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Databricks tables, set to `databricks`.                                                                             |
| Select or create connection | Select or create a new [Databricks connection](/administration/fabrics/prophecy-fabrics/connections/databricks) in the Prophecy fabric you will use. |
| Database                    | Database including the schema where the table is located.                                                                                            |
| Schema                      | Schema containing the table you want to read from.                                                                                                   |
| Name                        | Exact name of the Databricks table to read data from.                                                                                                |

## Target configuration

Use these settings to configure a BigQuery Target gem for writing data.

### Target location

| Parameter                   | Description                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the target. For Databricks tables, set to `databricks`.                                                                             |
| Select or create connection | Select or create a new [Databricks connection](/administration/fabrics/prophecy-fabrics/connections/databricks) in the Prophecy fabric you will use. |
| Database                    | Database including the schema where the table is/will be located.                                                                                    |
| Schema                      | Schema where the target table will be created or updated.                                                                                            |
| Name                        | Name of the Databricks table to write data to. If the table doesn’t exist, it will be created automatically.                                         |

### Target properties

| Property    | Description                                                                                                     | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                                       | None    |
| Write Mode  | Whether to overwrite the table completely, append new data to the table, or throw an error if the table exists. | None    |

## Cross-workspace access

If your fabric uses Databricks as the SQL warehouse, you can’t select Databricks in an external Source or Target gem. Instead, you must use Table gems, which are limited to the Databricks warehouse defined in the SQL warehouse connection.

To work with tables from a different Databricks workspace, use [Delta Sharing](https://docs.databricks.com/aws/en/delta-sharing/). Delta Sharing lets you access data across workspaces without creating additional Databricks connections.

:::info
Prophecy implements this guardrail to avoid using external connections when the data can be made available in your warehouse. External connections introduce an extra data transfer step, which slows down pipeline execution and adds unnecessary complexity. For best performance, Prophecy always prefers reading and writing directly within the warehouse.
:::
