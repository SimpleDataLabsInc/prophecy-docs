---
title: Sources and targets
id: sources-and-targets
slug: /analysts/model-sources-and-targets
description: Use models to read and write data
tags:
  - SQL
  - sources
  - seeds
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Model sources and targets vary slightly from those of the pipeline. The primary difference is that all model sources and targets must point to tables in the SQL warehouse.

## Sources

When you create a new model, you need to define an input data source. The data source can be:

- Another model. You can drag a model from the Project tab of the left sidebar onto your canvas to use it as a source.
- A [Table gem](/analysts/table). You can either use pre-configured tables from the Project tab of the left sidebar, or you can browse SQL warehouse tables in the Environment tab of the left sidebar.

## Targets

Target models let you define how you want to materialize your data using write formats.

### Target model tabs

When you open a Target model configuration, you'll see the following tabs:

- **[Type & Format](type-and-format.md)**: Update the format of the model between different types of materializations
- **[Location](location.md)**: Update the location by overwriting the Database, Schema, or Alias
- **[Schema](schema.md)**: Make schema changes
- **[SQL Query](sql-query.md)**: View and enable your custom SQL query
- **[Write Options](write-options.md)**: Use Write Modes such as Overwrite, Append, and Merge

![Target Model tabs](img/type-and-format.png)

### dbt advanced settings

You can find advanced settings are available for defining model write formats and other DBT options. These include all dbt native settings, traditionally accessible from the `.yaml` file.

To open dbt advanced settings, click **...** > **Advanced Settings**. The object properties describe everything from physical locations, materialization logic, business metadata, and access control definitions.

![Advance Settings](img/advance-settings.png)

### dbt properties mapping

The following table maps all of the dbt properties for Databricks and Snowflake to the tabs of Prophecy’s Target model:

| dbt property name      | Provider         | Target model tab |
| ---------------------- | ---------------- | ---------------- |
| file_format            | Databricks       | Type & Format    |
| alias                  | All              | Location         |
| database               | All              | Location         |
| location_root          | Databricks       | Location         |
| contract               | All              | Schema           |
| enabled                | All              | Schema           |
| schema                 | All              | Schema           |
| tags                   | All              | Schema           |
| cluster_by             | Snowflake        | Schema           |
| partition_by           | Snowflake        | Schema           |
| clustered_by           | Databricks       | Schema           |
| buckets                | Databricks       | Schema           |
| transient              | Snowflake        | Schema           |
| query_tag              | Snowflake        | Schema           |
| automatic_clustering   | Snowflake        | Schema           |
| snowflake_warehouse    | Snowflake        | Schema           |
| copy_grants            | Snowflake        | Schema           |
| secure                 | Snowflake        | Schema           |
| target_lag             | Snowflake        | Schema           |
| docs                   | All              | Schema           |
| group                  | All              | Schema           |
| meta                   | All              | Schema           |
| persist_docs           | All              | Schema           |
| full_refresh           | All              | Write Options    |
| incremental_predicates | All              | Write Options    |
| incremental_strategy   | All              | Write Options    |
| materialized           | All              | Write Options    |
| on_schema_change       | All              | Write Options    |
| merge_exclude_columns  | Snowflake, Spark | Write Options    |
| merge_update_columns   | Snowflake, Spark | Write Options    |
