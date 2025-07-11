---
title: Databricks targets
id: databricks-target
slug: /engineers/databricks-target
description: Configure target models for Databricks SQL
tags:
  - model
  - databricks
---

To configure a target model that will be written to Databricks, reference the following sections.

## Type & Format

Databricks supports the following materialization types for target models. The type determines the underlying physical format of your target model.

| Materialization type | Description                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View (default)       | Rebuilt as a view on each run. Views always reflect the latest source data but don’t store any data themselves.                                                              |
| Table                | Rebuilt as a table on each run. Tables are fast to query but can take longer to build. Target tables support multiple write modes.                                           |
| Ephemeral            | Not built in the database. The model’s logic is inlined into downstream models using a common table expression (CTE). Use for lightweight transformations early in your DAG. |
| Materialized View    | Acts like a hybrid of a view and a table. Supports use cases similar to incremental models. Creates a materialized view in the target warehouse.                             |

## Location

Review the location where your model will be written. Any changes you make to the **Overwrite location** section will be reflected in the **Location** that Prophecy generates.

| Location Parameter | Description                                                                                | Advanced mode |
| ------------------ | ------------------------------------------------------------------------------------------ | ------------- |
| Catalog            | Catalog where the model will be created.                                                   | Yes           |
| Schema             | Schema inside the catalog where the model will be created.                                 | Yes           |
| Alias              | Sets the name of the resulting table or view. Defaults to the model name if not specified. | No            |

## Schema

Define the schema of the dataset and optionally configure additional properties.

The schema includes column names, column data types, and optional column metadata. When you expand a row in the Schema table, you can add a column description, apply column tags, and enable/disable quoting for column names.

### Properties

Each property maps to a certain dbt configuration that may be generic to dbt or specific to a platform like Databricks. If you do not add a property explicitly in the Schema tab, Prophecy uses the dbt default for that property.

| Property               | Description                                                                                                                                  | Config type |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Dataset Tags           | Add tags to the dataset. These tags can be used as part of the resource selection syntax in dbt.                                             | Generic     |
| Contract Enforced      | Enforce a [contract](https://docs.getdbt.com/docs/mesh/govern/model-contracts) for the model schema, preventing unintended changes.          | Generic     |
| Show Docs              | Control whether or not nodes are shown in the [auto-generated documentation website](https://docs.getdbt.com/docs/build/view-documentation). | Generic     |
| Enabled                | Control whether the model is included in builds. When a resource is disabled, dbt will not consider it as part of your project.              | Generic     |
| Meta                   | Set metadata for the table using key-value pairs.                                                                                            | Generic     |
| Group                  | Assign a group to the table.                                                                                                                 | Generic     |
| Persist Docs Columns   | Save column descriptions in the database.                                                                                                    | Generic     |
| Persist Docs Relations | Save model descriptions in the database.                                                                                                     | Generic     |
| Clustered By           | Each partition in the created table will be split into a fixed number of buckets by the specified columns.                                   | Databricks  |
| Buckets                | The number of buckets to create while clustering. Required if **Clustered By** is specified.                                                 | Databricks  |

:::info
For more detailed information, see the [dbt reference documentation](https://docs.getdbt.com/reference/references-overview).
:::

## SQL Query

Add a custom SQL query at the end of your target model using the Databricks SQL dialect. This allows you to apply a final transformation step, which can be useful if you're importing an existing codebase and need to add conditions or filters to the final output. Custom queries support Jinja, dbt templating, and [variable](/engineers/data-model-configurations) usage for your last-mile data processing.

You can reference any column present in the list of input ports beside the SQL query. You can only add additional input ports—the output port cannot be edited.

## Write Options

The **Write Options** tab lets you determine how you will store your processed data and handle changes to the data over time.

| Write Mode          | Description                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overwrite (default) | Replaces all existing data with new data on each run. The incoming table must have the same schema as the existing table.                                       |
| Append              | Adds new rows to the existing table. Best used when unique keys aren’t required and duplicate records are acceptable. For key-based updates, use Merge instead. |
| Merge               | Updates existing records and inserts new ones based on defined keys. Supports multiple merge strategies to handle changes accurately over time.                 |

### Merge approaches

When you select the Merge write mode, there are multiple merge approaches to choose from. To find an example use case for each strategy, see [Merge approach examples](/engineers/merge-approaches).

#### Specify columns

Only update specified columns during the merge. All other columns remain unchanged.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unique Key                                         | The key used to match existing records in the target dataset for merging.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Merge Columns                                      | Specifies which columns to update during the merge. If empty, the merge includes all columns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Exclude Columns                                    | Defines columns that should be excluded from the merge operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| On Schema Change                                   | Specifies how schema changes should be handled during the merge process.<ul style={{margin:0}}><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### SCD2

Tracks historical changes by adding new rows instead of updating existing ones. Each record will include additional columns containing start and end timestamps to indicate when a record was valid.

<div class="fixed-table">

| Parameter                                                         | Description                                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Unique Key                                                        | The key used to match existing records in the target dataset for merging.            |
| Invalidate deleted rows                                           | When enabled, records that match deleted rows will be marked as no longer valid.     |
| Determine new records by checking timestamp column                | Recognizes new records by the time from the timestamp column that you define.        |
| Determine new records by looking for differences in column values | Recognizes new records based on a change of values in one or more specified columns. |

</div>

#### Insert and overwrite

Replace entire partitions in the target table. Only partitions including updated data will be overwritten. Other partitions will not be rebuilt.

<div class="fixed-table">

| Parameter        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Partition By     | Defines the partitioning column used to determine which data to replace during the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| On Schema Change | Specifies how schema changes should be handled during the merge process.<ul style={{margin:0}}><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

If **Partition By** is specified, dbt runs an atomic insert overwrite statement that dynamically replaces all partitions included in your query. If no partition is specified, the strategy replaces the entire table, overriding all existing data with only the new records while maintaining the original schema.

:::info
To learn more about this merge approach, see the [insert overwrite strategy](https://docs.getdbt.com/reference/resource-configs/databricks-configs#the-insert_overwrite-strategy) in the dbt documentation.
:::

## Replace where

The **Replace where** approach lets you update records that match the condition defined in the predicate.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| On Schema Change                                   | Specifies how schema changes should be handled during the merge process.<ul style={{margin:0}}><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

## Data Tests

A data test is an assertion you define about a dataset in your project. Data tests are run on target models to ensure the quality and integrity of the final data that gets written to the warehouse. Learn how to build tests in [Data tests](/analysts/data-tests).
