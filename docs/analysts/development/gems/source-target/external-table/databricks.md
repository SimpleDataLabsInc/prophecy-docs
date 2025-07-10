---
title: Databricks
id: databricks
slug: /analysts/databricks
draft: true
description: Read and write catalog tables in Databricks
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

You can use Databricks tables in Prophecy through two different methods:

- **Table gems**, when Databricks is configured as the SQL warehouse in your fabric.
- **External Source and Target gems**, when Databricks is not the configured SQL warehouse.

This page describes how to use Databricks external Source and Target gems to read from or write to catalog tables.

:::info
If you’re working with file types like CSV or Parquet from Databricks, see [File types](/analysts/file-types) for guidance. This page focuses only on catalog tables.
:::

## Parameters

| Parameter                   | Description                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection type             | Location you want to connect from.                                                                                                                   |
| Format type                 | Table format. In this case, `databricks`.                                                                                                            |
| Select or create connection | Select or create a new [Databricks connection](/administration/fabrics/prophecy-fabrics/connections/databricks) in the Prophecy fabric you will use. |
| Database                    | Database where the table is or will be located.                                                                                                      |
| Schema                      | Schema where the table is or will be located.                                                                                                        |
| Name                        | Name of the external table.                                                                                                                          |

## Cross-workspace access

If your fabric uses Databricks as the SQL warehouse, you can’t select Databricks in an external Source or Target gem. Instead, you must use Table gems, which are limited to the Databricks warehouse defined in the SQL warehouse connection.

To work with tables from a different Databricks workspace, use [Delta Sharing](https://docs.databricks.com/aws/en/delta-sharing/). Delta Sharing lets you access data across workspaces without creating additional Databricks connections.

:::info
Prophecy implements this guardrail to avoid using external connections when the data can be made available in your warehouse. External connections introduce an extra data transfer step, which slows down pipeline execution and adds unnecessary complexity. For best performance, Prophecy always prefers reading and writing directly within the warehouse.
:::
