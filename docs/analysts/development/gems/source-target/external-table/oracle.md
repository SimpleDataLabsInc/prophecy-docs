---
title: Oracle
id: oracle
slug: /analysts/oracle
description: Read and write from Oracle
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

This page describes how to configure Oracle Source gems, including connection setup and schema options. Note that Prophecy does not support Oracle as a target destination.

## Configuration tabs

When you create a new external Source gem, the gem dialog contains the following tabs.

- **Type**: Select the Oracle table option.
- **Source location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read/write tables in Oracle.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

The following sections provide a detailed reference for source configuration.

## Source configuration

Use these settings to configure an Oracle Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                                                                                  |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Table format for the source. For Oracle tables, set to `oracle`.                                                                                                                                             |
| Select or create connection | Select or create a new [Oracle connection](/administration/fabrics/prophecy-fabrics/connections/mongodb) in the Prophecy fabric you will use.                                                                |
| Read using                  | Choose table or query.<ul class="table-list"><li>**Table**: Provide the schema and name of the table you want to read.</li><li>**Query**: Enter a SQL query directly in the gem to select a table.</li></ul> |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table. Additional properties are not supported at this time.
