---
title: Type and Format
id: type-and-format
description: Type and Format of Target Models
sidebar_position: 3
tags:
  - concept
  - model
  - type
  - format
  - SQL
---

You can use the Type & format tab to update the format of the model between different types of materializations. This determines the underlying physical format of your Target Model.

You can select the type of data you want to write from. The Warehouse represents all warehouse native and optimized data formats.

## Materialization types

The model materialization types include the following:

- **View**: The model is rebuilt as a view on each run. No additional data is stored, views on top of source data will always have the latest records in them. So it's just a query based on other tables. Views are best suited for models that do not do significant transformation, e.g. renaming, or recasting columns. This is the default type.
- **Table**: The model is rebuilt as a table on each run. Tables are fast to query but can take a long time to rebuild. Use the table materialization for any models being queried by BI tools, for a faster experience.
- **Ephemeral**: Ephemeral models are not directly built into the database. Instead, the code is inserted from an ephemeral model into its dependent models using a common table expression (CTE). Ephemeral models can help keep your data warehouse clean by reducing clutter. Use the ephemeral materialization for very light-weight transformations that are early on in your DAG.
- **Materialized View**: Materialized View models allow the creation and maintenance of materialized views in the target database Warehouse type. Materialized views are a combination of a view and a table, and serve use cases similar to incremental models.

  ![Type & Format](img/type-and-format.png)
