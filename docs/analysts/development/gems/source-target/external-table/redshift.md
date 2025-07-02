---
title: Amazon Redshift
id: redshift
slug: /analysts/redshift
description: Read and write from Redshift
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

The Redshift Source and Target gems let you connect Prophecy pipelines to Amazon Redshift tables for reading and writing data. This page outlines how to configure Redshift sources and targets using the appropriate connections, locations, and properties.

## Configuration tabs

When you create a new external Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Select the Redshift table option.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read/write tables in Amazon Redshift.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

The following sections provide a detailed reference for sources and targets.

## Source configuration

Use these settings to configure a Redshift Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Table format for the source. For Amazon Redshift tables, set to `redshift`.                                                                      |
| Select or create connection | Select or create a new [Redshift connection](/administration/fabrics/prophecy-fabrics/connections/redshift) in the Prophecy fabric you will use. |
| Database                    | Database containing the table you want to read from.                                                                                             |
| Schema                      | Schema within the database where the table is located.                                                                                           |
| Name                        | Exact name of the Amazon Redshift table to read data from.                                                                                       |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table. Additional properties are not supported at this time.

## Target configuration

Use these settings to configure a Redshift Target gem for writing data.

### Target location

| Parameter                   | Description                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Amazon Redshift tables, set to `redshift`.                                                                             |
| Select or create connection | Select or create a new [Amazon Redshift connection](/administration/fabrics/prophecy-fabrics/connections/redshift) in the Prophecy fabric you will use. |
| Database                    | Database where the target table will be created or updated.                                                                                             |
| Schema                      | Schema within the database where the target table resides or will be created.                                                                           |
| Name                        | Name of the Amazon Redshift table to write data to. If the table doesn’t exist, it will be created automatically.                                       |

### Target properties

| Property    | Description                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                            | None    |
| Write Mode  | Whether to overwrite the table, append new data to the table, or throw an error if the table exists. | None    |
