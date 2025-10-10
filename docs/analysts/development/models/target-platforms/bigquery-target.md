---
title: BigQuery target models
id: bigquery-target
slug: /engineers/bigquery-target
description: Configure target models for BigQuery SQL
tags:
  - model
  - bigquery
---

:::edition Enterprise
Available for Enterprise Edition only.
:::

To configure a target model that will be written to BigQuery, reference the following sections.

## Type & Format

BigQuery supports the following materialization types for target models. The type determines the underlying physical format of your target model.

| Materialization type | Description                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View (default)       | Rebuilt as a view on each run. Views always reflect the latest source data but don’t store any data themselves.                                                              |
| Table                | Rebuilt as a table on each run. Tables are fast to query but can take longer to build. Target tables support multiple write modes.                                           |
| Ephemeral            | Not built in the database. The model’s logic is inlined into downstream models using a common table expression (CTE). Use for lightweight transformations early in your DAG. |
| Materialized View    | Acts like a hybrid of a view and a table. Supports use cases similar to incremental models. Creates a materialized view in the target warehouse.                             |

## Location

Review the location where your model will be written. Any changes you make to the **Overwrite location** section will be reflected in the **Location** that Prophecy generates.

| Location Parameter          | Description                                                                                   | Advanced mode |
| --------------------------- | --------------------------------------------------------------------------------------------- | ------------- |
| Project ID                  | Google Cloud project where the model will be built.                                           | Yes           |
| Database (BigQuery dataset) | Name of the BigQuery dataset where the model will be created. Acts as the schema in BigQuery. | Yes           |
| Alias                       | Sets the name of the resulting table or view. Defaults to the model name if not specified.    | No            |

## Schema

Define the schema of the dataset and optionally configure additional properties.

The schema includes column names, column data types, and optional column metadata. When you expand a row in the Schema table, you can add a column description, apply column tags, and enable/disable quoting for column names.

### Properties

Each property maps to a certain dbt configuration that may be generic to dbt or specific to a platform like BigQuery. If you do not add a property explicitly in the Schema tab, Prophecy uses the dbt default for that property.

| Property                    | Description                                                                                                                                                                               | Config type |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Dataset Tags                | Add tags to the dataset. These tags can be used as part of the resource selection syntax in dbt.                                                                                          | Generic     |
| Contract Enforced           | Enforce a [contract](https://docs.getdbt.com/docs/mesh/govern/model-contracts) for the model schema, preventing unintended changes.                                                       | Generic     |
| Show Docs                   | Control whether or not nodes are shown in the [auto-generated documentation website](https://docs.getdbt.com/docs/build/view-documentation).                                              | Generic     |
| Enabled                     | Control whether the model is included in builds. When a resource is disabled, dbt will not consider it as part of your project.                                                           | Generic     |
| Meta                        | Set metadata for the table using key-value pairs.                                                                                                                                         | Generic     |
| Group                       | Assign a group to the table.                                                                                                                                                              | Generic     |
| Persist Docs Columns        | Save column descriptions in the database.                                                                                                                                                 | Generic     |
| Persist Docs Relations      | Save model descriptions in the database.                                                                                                                                                  | Generic     |
| Cluster By                  | [Cluster data in the table](https://cloud.google.com/bigquery/docs/clustered-tables) by the values of specified columns to improve query performance and reduce costs.                    | BigQuery    |
| Partition Expiration Days   | If using date or timestamp partitions, this property defines the number of days from the partition date to expiration.                                                                    | BigQuery    |
| Require Partition Filter    | Requires anyone querying this model to specify a partition filter, otherwise their query will fail.                                                                                       | BigQuery    |
| Time Ingestion Partitioning | Enables partitioning based on when data is ingested into the table, using [BigQuery’s](https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time) `_PARTITIONTIME` column. | BigQuery    |

:::info
For more detailed information, see the [dbt reference documentation](https://docs.getdbt.com/reference/references-overview).
:::

## SQL Query

Add a custom SQL query at the end of your target model using the BigQuery SQL dialect. This allows you to apply a final transformation step, which can be useful if you're importing an existing codebase and need to add conditions or filters to the final output. Custom queries support Jinja, dbt templating, and [variable](/engineers/data-model-configurations) usage for your last-mile data processing.

You can reference any column present in the list of input ports beside the SQL query. You can only add additional input ports—the output port cannot be edited.

## Write Options

For a complete guide to defining how to write target tables, visit [Write Options](/table-write-options).

## Data Tests

A data test is an assertion you define about a dataset in your project. Data tests are run on target models to ensure the quality and integrity of the final data that gets written to the warehouse. Learn how to build tests in [Data tests](/analysts/data-tests).
