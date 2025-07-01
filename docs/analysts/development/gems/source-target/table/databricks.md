---
title: Databricks
id: databricks
slug: /analysts/databricks-table
description: Process Databricks tables in the SQL warehouse
tags: []
---

## Table types

The following table types are supported for Databricks tables.

| Name  | Description                                                                                                   | Type             |
| ----- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           | Source or Target |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). | Source or Target |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               | **Source only**  |

Table parameters and properties may vary across table types.

## Source parameters

When you create a Table gem at the beginning of your pipeline, configure it with the following parameters.

| Parameter       | Description                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Type and Format | Select `Table`, `View`, or `Seed`.                                                                                                                                                                                                            |
| Location        | Choose the location where the table will be stored. You can create a new table by writing a new table name. The **Location** tab of the seed configuration is grayed out. This is because seeds are stored as CSV files in your project code. |
| Properties      | Define certain properties of the table, including the table schema. If using seed, copy-paste your CSV data and define certain properties of the table.                                                                                       |
| Preview         | Load the data to see a preview before saving.                                                                                                                                                                                                 |

:::note
Tables in pipelines do not support dbt properties, which are only applicable to [model sources and targets](/analysts/model-sources-and-targets).
:::

## Target parameters

When you add a Table gem to the end of your pipeline, configure it with the following parameters.

| Parameter       | Description                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Type and Format | Select `Table`, `View`, or `Seed`.                                                                          |
| Location        | Choose the location where the table will be stored. You can create a new table by writing a new table name. |
| Properties      | Define certain properties of the table. The schema cannot be changed for target tables.                     |
| Write Options   | Select how you want the data to be written each time you run the pipeline (Table only).                     |
| Preview         | Load the data to see a preview before saving.                                                               |

:::note
Tables in pipelines do not support dbt properties, which are only applicable to [model sources and targets](/analysts/model-sources-and-targets).
:::

:::note
When you use a view as a target table, views are always overwritten each run. This means every time the pipeline runs, the view is recomputed from scratch based on the underlying logic, and any previously materialized results are discarded. No additional write modes are supported.
:::
