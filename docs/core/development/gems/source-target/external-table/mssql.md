---
title: MSSQL
id: mssql
slug: /analysts/mssql
description: Read and write from MSSQL database
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

This page describes how to configure Microsoft SQL Server (MSSQL) Source and Target gems, including connection setup, schema options, and available write modes. Use the MSSQL Source or Target gem to read from or write to the SQL server within your pipeline.

## Configuration tabs

When you create a new external Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Select the MSSQL table option.
- **Source/Target location**: Choose the [connection](/core/prophecy-fabrics/connections/) and define the location where you will read/write tables in MSSQL.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure an MSSQL Source gem for reading data.

### Source location

| Parameter                   |                                                                                                                          | Description |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Format type                 | Table format for the source. For MSSQL tables, set to `mssql`.                                                           |
| Select or create connection | Select or create a new [MSSQL connection](/core/prophecy-fabrics/connections/mssql) in the Prophecy fabric you will use. |
| Database                    | Database containing the table you want to read from.                                                                     |
| Schema                      | Schema within the database where the table is located.                                                                   |
| Name                        | Exact name of the MSSQL table to read data from.                                                                         |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table. Additional properties are not supported at this time.

## Target configuration

Use these settings to configure an MSSQL Target gem for writing data.

### Target location

| Parameter                   |                                                                                                                          | Description |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------ | ----------- |
| Format type                 | Table format for the source. For MSSQL tables, set to `mssql`.                                                           |
| Select or create connection | Select or create a new [MSSQL connection](/core/prophecy-fabrics/connections/mssql) in the Prophecy fabric you will use. |
| Database                    | Database where the target table will be created or updated.                                                              |
| Schema                      | Schema within the database where the target table resides or will be created.                                            |
| Name                        | Name of the MSSQL table to write data to. If the table doesn’t exist, it will be created automatically.                  |

### Target properties

| Property    | Description                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                            | None    |
| Write Mode  | Whether to overwrite the table, append new data to the table, or throw an error if the table exists. | None    |
