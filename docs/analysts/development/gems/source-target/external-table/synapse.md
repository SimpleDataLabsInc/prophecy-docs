---
title: Azure Synapse
id: synapse
slug: /analysts/synapse
description: Read and write from Azure Synapse
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name="Prophecy"
  sql_package_version="4.1.3+"
/>

This page describes how to configure Azure Synapse Source gems to read from your Azure Synapse connection in a Prophecy pipeline.

## Configuration tabs

When you create a new external Source gem, the gem dialog contains the following tabs.

- **Type**: Select the Azure Synapse table option.
- **Source location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read tables from.
- **Properties**: Infer or manually specify the schema of the table.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure an Synapse Source gem for reading data.

### Source location

| Parameter                   |                                                                                                                                                | Description |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Format type                 | Table format for the source. For Synapse tables, set to `synapse`.                                                                             |
| Select or create connection | Select or create a new [Synapse connection](/administration/fabrics/prophecy-fabrics/connections/synapse) in the Prophecy fabric you will use. |
| Database                    | Database containing the table you want to read from.                                                                                           |
| Schema                      | Schema within the database where the table is located.                                                                                         |
| Name                        | Exact name of the table to read data from.                                                                                                     |

### Source properties

Infer or manually configure the schema of the table. Optionally, add a description for your table. Additional properties are not supported at this time.
