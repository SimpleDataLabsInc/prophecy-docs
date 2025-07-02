---
title: Google BigQuery
id: bigquery
slug: /analysts/bigquery
description: Read and write catalog tables in BigQuery
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

You can use BigQuery tables in Prophecy through two different methods:

- **Table gems**, when BigQuery is configured as the SQL warehouse in your fabric.
- **External Source and Target gems**, when BigQuery is not the configured SQL warehouse.

This page describes how to use BigQuery external Source and Target gems to read from or write to catalog tables.

## Source configuration

Use these settings to configure a BigQuery Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Table format for the source. For BigQuery tables, set to `bigquery`.                                                                             |
| Select or create connection | Select or create a new [BigQuery connection](/administration/fabrics/prophecy-fabrics/connections/bigquery) in the Prophecy fabric you will use. |
| Dataset                     | Dataset containing the table you want to read from.                                                                                              |
| Name                        | Exact name of the BigQuery table to read data from.                                                                                              |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table. Additional properties are not supported at this time.

## Target configuration

Use these settings to configure a BigQuery Target gem for writing data.

### Target location

| Parameter                   | Description                                                                                                                                  |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the target. For BigQuery tables, set to `bigquery`.                                                                         |
| Select or create connection | Choose or create a [BigQuery connection](/administration/fabrics/prophecy-fabrics/connections/bigquery) in the Prophecy fabric you will use. |
| Dataset                     | Dataset where the target table will be created or updated.                                                                                   |
| Name                        | Name of the BigQuery table to write data to. If the table doesn’t exist, it will be created automatically.                                   |

### Target properties

| Property    | Description                                                                                                     | Default |
| ----------- | --------------------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                                       | None    |
| Write Mode  | Whether to overwrite the table completely, append new data to the table, or throw an error if the table exists. | None    |

## Cross-workspace access

If your fabric uses BigQuery as the SQL warehouse, you can’t select BigQuery in an external Source or Target gem. Instead, you must use Table gems, which are limited to the BigQuery warehouse defined in the SQL warehouse connection.

To work with tables from a different BigQuery workspace, use [BigQuery sharing](https://cloud.google.com/bigquery/docs/analytics-hub-introduction). This lets you access shared resources without creating additional BigQuery connections.

:::info
Prophecy implements this guardrail to avoid using external connections when the data can be made available in your warehouse. External connections introduce an extra data transfer step, which slows down pipeline execution and adds unnecessary complexity. For best performance, Prophecy always prefers reading and writing directly within the warehouse.
:::
