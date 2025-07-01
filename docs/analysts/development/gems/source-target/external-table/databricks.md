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

Prophecy supports the use of Databricks tables for both Table gems (when Databricks is configured as the SQL warehouse connection in the fabric) and external Source/Target gems (when Databricks IS NOT configured as the SQL warehouse connection). This page describes the parameters of a Databricks external Source/Target gem.

Additionally, you can either read from Databricks files or Databricks tables. You can use the same Databricks connection for both, as long as you have read/write permission for that resource.

File types each have the same properties in Prophecy across connections. To learn about accessing different file types with Source/Target gems, visit File types. This page describes Source/Target for catalog tables only.

:::info
Avoid using a Databricks Source/Target gem if your fabric uses the same Databricks connection for the SQL warehouse in your fabric. Learn more in [Sources and Targets](/analysts/source-target).
:::

## Source gem parameters

| Parameter                   | Tab             | Description                                                       |
| --------------------------- | --------------- | ----------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                |
| Format type                 | Source location | Format of the gem. In this case, `databricks`.                    |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one. |
| Database                    | Source location | Database where the table is or will be located.                   |
| Schema                      | Source location | Schema where the table is or will be located.                     |
| Name                        | Source location | Name of the external table.                                       |
