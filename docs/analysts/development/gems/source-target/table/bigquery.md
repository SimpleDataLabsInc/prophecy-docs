---
title: Google BigQuery
id: bigquery
slug: /analysts/bigquery-table
description: Process BigQuery tables in the SQL warehouse
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

In Prophecy, datasets stored in the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/#connections) defined in your fabric are accessed using Table gems. Unlike Source and Target gems, Table gems run directly within the data warehouse, eliminating extra orchestration steps and improving performance.

Available configurations for Table gems vary based on your SQL warehouse provider. This page explains how to use the Table gem for a BigQuery SQL warehouse, including supported table types, configuration options, and guidance for managing BigQuery tables in your Prophecy pipelines.

## Table types

The following table types are supported for BigQuery connections.

| Name  | Description                                                                                                   | Type             |
| ----- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           | Source or Target |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). | Source or Target |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               | **Source only**  |

## Gem configuration

### Tables

Tables are persistent, indexed storage objects optimized for frequent access.

#### Source parameters {#source-tables}

| Parameter  | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| Location   | Specify the table’s location using database, schema, and name. |
| Properties | Define or infer schema. Add a description if needed.           |
| Preview    | Load a sample of the data before saving.                       |

#### Target parameters {#target-tables}

| Parameter     | Description                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Location      | Choose the location where the table will be stored. You can create a new table by writing a new table name.                                  |
| Properties    | Define certain properties of the table. The schema cannot be changed for targets.                                                            |
| Write Options | Select how you want the data to be written each time you run the pipeline (Table only). Learn more in [Write Options](/table-write-options). |

### Views

Views are virtual tables recomputed at runtime from a query.

#### Source parameters {#source-views}

| Parameter  | Description                                          |
| ---------- | ---------------------------------------------------- |
| Location   | Enter the database, schema, and table (view) name.   |
| Properties | Define or infer schema. Add a description if needed. |
| Preview    | Load data based on the view's underlying query.      |

#### Target parameters {#target-views}

| Parameter  | Description                                                                       |
| ---------- | --------------------------------------------------------------------------------- |
| Location   | Define the name of the view to be created or replaced.                            |
| Properties | Define certain properties of the table. The schema cannot be changed for targets. |
| Preview    | Load a preview of the resulting view.                                             |

:::note
Every time the pipeline runs, the target is overwritten. This is because the view is recomputed from scratch based on the underlying logic, and any previously materialized results are discarded. No additional write modes are supported.
:::

### Seeds

Seeds are lightweight CSV datasets defined in your project. Seeds are source-only.

| Parameter  | Description                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Properties | Copy-paste your CSV data and define certain [properties](https://docs.getdbt.com/reference/seed-configs) of the table. |
| Preview    | Load a preview of your seed in table format.                                                                           |

:::note
Seeds are implemented as [dbt seeds](https://docs.getdbt.com/docs/build/seeds) under the hood. The CSV data you define is stored in your Prophecy project files and materialized as a table in your data warehouse. This table is created in the [default target dataset](/administration/fabrics/prophecy-fabrics/connections/bigquery#connection-parameters) specified in your BigQuery connection.
:::

## Reusing and sharing tables

After you create a table in Prophecy, you can reuse its configuration across your entire project. All created tables appear in the [Project](/analysts/project-editor) tab in the left sidebar. To make tables available to other teams, you can share your project as a package in the [Package Hub](/engineers/package-hub). Other users will be able to use the shared table configuration, provided they have the necessary permissions in BigQuery to access the underlying data.
