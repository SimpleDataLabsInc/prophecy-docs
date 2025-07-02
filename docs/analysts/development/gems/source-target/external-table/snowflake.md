---
title: Snowflake
id: snowflake
slug: /analysts/snowflake
description: Read and write from Snowflake
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a table from Snowflake as an external source or target.

## Source configuration

### Source location

| Parameter                   | Description                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Format of the gem. In this case, `snowflake`.                                                                                                      |
| Select or create connection | Select or create a new [Snowflake connection](/administration/fabrics/prophecy-fabrics/connections/snowflake) in the Prophecy fabric you will use. |
| Database                    | Database where the table is or will be located.                                                                                                    |
| Schema                      | Schema where the table is or will be located.                                                                                                      |
| Name                        | Name of the external table.                                                                                                                        |

### Source properties

## Table configuration

### Table location

### Table properties
