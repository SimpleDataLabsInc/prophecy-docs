---
title: MSSQL on Azure Synapse dedicated SQL pool
sidebar_label: Azure Synapse
id: synapse
slug: /analysts/synapse
description: Read and write from an Azure Synapse dedicated SQL pool
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name="Prophecy"
  sql_package_version="4.1.3+"
/>

This page describes how to configure Source gems to read from Microsoft SQL Server hosted on Azure Synapse dedicated SQL pools.

## Configuration tabs

When you create a new external Source gem, the gem dialog contains the following tabs.

- **Type**: Select the Synapse table option.
- **Source location**: Choose the [connection](/core/prophecy-fabrics/connections/) and define the location where you will read tables from.
- **Properties**: Infer or manually specify the schema of the table.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure a Source gem for reading data from Azure Synapse.

### Source location

| Parameter                   | Description                                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For MSSQL tables on Azure Synapse, set to `mssql`.                                |
| Select or create connection | Existing or new [Azure Synapse connection](/core/prophecy-fabrics/connections/synapse) in the Prophecy fabric. |
| Database                    | Database matching the database defined in the [connection](/core/prophecy-fabrics/connections/synapse).        |
| Schema                      | Schema within the database where the table is located.                                                         |
| Name                        | Name of the table to read data from.                                                                           |

### Source properties

Infer or manually configure the schema of the table. Optionally, add a description for your table. Additional properties are not supported at this time.
