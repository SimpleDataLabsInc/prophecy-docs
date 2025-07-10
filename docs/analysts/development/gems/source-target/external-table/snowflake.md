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

The Snowflake Source and Target gems let you connect Prophecy pipelines to Snowflake tables for reading and writing data. This page outlines how to configure Snowflake sources and targets using the appropriate connections, locations, and properties.

## Configuration tabs

When you create a new external Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Select the Snowflake table option.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read/write tables in Snowflake.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

The following sections provide a detailed reference for sources and targets.

## Source configuration

Use these settings to configure a Snowflake Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Snowflake tables, set to `snowflake`.                                                                         |
| Select or create connection | Choose or create a [Snowflake connection](/administration/fabrics/prophecy-fabrics/connections/snowflake) in the Prophecy fabric you will use. |
| Database                    | Snowflake database containing the table you want to read from.                                                                                 |
| Schema                      | Schema within the database where the table is located.                                                                                         |
| Name                        | Exact name of the Snowflake table to read data from.                                                                                           |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table. Additional properties are not supported at this time.

## Target configuration

Use these settings to configure a Snowflake Target gem for writing data.

### Target location

| Parameter                   | Description                                                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the target. For Snowflake tables, set to `snowflake`.                                                                         |
| Select or create connection | Choose or create a [Snowflake connection](/administration/fabrics/prophecy-fabrics/connections/snowflake) in the Prophecy fabric you will use. |
| Database                    | Snowflake database where the target table will be created or updated.                                                                          |
| Schema                      | Schema within the database where the target table resides or will be created.                                                                  |
| Name                        | Name of the Snowflake table to write data to. If the table doesn’t exist, it will be created automatically.                                    |

### Target properties

| Property    | Description                                                                                                     | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                                       | None    |
| Write Mode  | Whether to overwrite the table completely, append new data to the table, or throw an error if the table exists. | None    |
