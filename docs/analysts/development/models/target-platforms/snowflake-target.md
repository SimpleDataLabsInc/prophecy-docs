---
title: Snowflake targets
id: snowflake-target
slug: /engineers/snowflake-target
description: Configure target models for Snowflake SQL
tags:
  - model
  - snowflake
---

To configure a target model that will be written to Snowflake, reference the following sections.

## Type & Format

Snowflake supports the following materialization types for target models. The type determines the underlying physical format of your target model.

| Materialization type | Description                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| View (default)       | Rebuilt as a view on each run. Views always reflect the latest source data but don’t store any data themselves.                                                              |
| Table                | Rebuilt as a table on each run. Tables are fast to query but can take longer to build. Target tables support multiple write modes.                                           |
| Ephemeral            | Not built in the database. The model’s logic is inlined into downstream models using a common table expression (CTE). Use for lightweight transformations early in your DAG. |

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

Each property maps to a certain dbt configuration that may be generic to dbt or specific to a platform like Snowflake. If you do not add a property explicitly in the Schema tab, Prophecy uses the dbt default for that property.

| Property               | Description                                                                                                                                                                                                                                             | Config type |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Dataset Tags           | Add tags to the dataset. These tags can be used as part of the resource selection syntax in dbt.                                                                                                                                                        | Generic     |
| Contract Enforced      | Enforce a [contract](https://docs.getdbt.com/docs/mesh/govern/model-contracts) for the model schema, preventing unintended changes.                                                                                                                     | Generic     |
| Show Docs              | Control whether or not nodes are shown in the [auto-generated documentation website](https://docs.getdbt.com/docs/build/view-documentation).                                                                                                            | Generic     |
| Enabled                | Control whether the model is included in builds. When a resource is disabled, dbt will not consider it as part of your project.                                                                                                                         | Generic     |
| Meta                   | Set metadata for the table using key-value pairs.                                                                                                                                                                                                       | Generic     |
| Group                  | Assign a group to the table.                                                                                                                                                                                                                            | Generic     |
| Persist Docs Columns   | Save column descriptions in the database.                                                                                                                                                                                                               | Generic     |
| Persist Docs Relations | Save model descriptions in the database.                                                                                                                                                                                                                | Generic     |
| Cluster By             | Order and cluster the table by specified keys to reduce Snowflake’s automatic clustering work. Accepts a string or list of strings.                                                                                                                     | Snowflake   |
| Transient              | Write the table as a Snowflake [transient table](https://docs.snowflake.com/en/user-guide/tables-temp-transient#transient-tables), which does not preserve history and can reduce costs. By default, all Snowflake tables created by dbt are transient. | Snowflake   |
| Automatic Clustering   | Enables automatic clustering if manual clustering is enabled for your Snowflake account. You do not need to use this property if automatic clustering is enabled by default on your Snowflake account.                                                  | Snowflake   |
| Snowflake Warehouse    | Override the Snowflake warehouse that is used for this target model.                                                                                                                                                                                    | Snowflake   |
| Query Tag              | Add [query tags](https://docs.snowflake.com/en/sql-reference/parameters#query-tag) to your model.                                                                                                                                                       | Snowflake   |
| Copy Grants            | Enable to preserve any existing access control grants (like GRANT SELECT TO ROLE analyst) when rebuilding the table or view.                                                                                                                            | Snowflake   |
| Secure                 | Create a [secure view](https://docs.snowflake.com/en/user-guide/views-secure) that hides underlying data from unauthorized users.                                                                                                                       | Snowflake   |
| Target Lag             | Defines how frequently the table should be [automatically refreshed](https://docs.snowflake.com/en/user-guide/dynamic-tables-target-lag).                                                                                                               | Snowflake   |

:::info
For more detailed information, see the [dbt reference documentation](https://docs.getdbt.com/reference/references-overview).
:::

## SQL Query

Add a custom SQL query at the end of your target model using the Snowflake SQL dialect. This allows you to apply a final transformation step, which can be useful if you're importing an existing codebase and need to add conditions or filters to the final output. Custom queries support Jinja, dbt templating, and [variable](/engineers/data-model-configurations) usage for your last-mile data processing.

You can reference any column present in the list of input ports beside the SQL query. You can only add additional input ports—the output port cannot be edited.

## Write Options

For a complete guide to defining how to write target tables, visit [Write Options](/table-write-options).

## Data Tests

A data test is an assertion you define about a dataset in your project. Data tests are run on target models to ensure the quality and integrity of the final data that gets written to the warehouse. Learn how to build tests in [Data tests](/analysts/data-tests).
