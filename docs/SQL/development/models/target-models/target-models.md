---
title: Target Models
id: target-models
description: Target Models are a sequence of data transformation steps which define a single table or view
sidebar_position: 2
tags:
  - concept
  - model
  - SQL
  - table
---

Target Models are easy to define, with no dbt knowledge required. SCD type 1 & 2 are supported.

We've updated the UX and capabilities of the target model in SQL projects. There are now the following tabs within the model:

- **[Type & Format](type-and-format.md)**: Update the format of the model from View to Table
- **[Location](location.md)**: Update the location by overwriting the Database, Schema, or Alias
- **[Schema](schema.md)**: Make schema changes
- **[SQL Query](sql-query.md)**: View and enable your custom SQL query
- **[Write Options](write-options.md)**: Use Write Modes such as Overwrite, Append, and Merge

## DBT concepts

### Views​

- The default materialization in dbt. A starting project has no configurations defined for materializations, which means everything is by default built as a view.
- Store only the SQL logic of the transformation in the warehouse, not the data. As such, they make a great default. They build almost instantly and cost almost nothing to build.
- Always reflect the most up-to-date version of the input data, as they’re run freshly every time they’re queried.
- Have to be processed every time they’re queried, so slower to return results than a table of the same data. That also means they can cost more over time, especially if they contain intensive transformations and are queried often.

### Tables​

- Tables store the data itself as opposed to views which store the query logic. This means we can pack all of the transformation compute into a single run. A view is storing a query in the warehouse. Even to preview that data we have to query it. A table is storing the literal rows and columns on disk.
- Querying lets us access that transformed data directly, so we get better performance. Tables feel faster and more responsive compared to views of the same logic.
- Improves compute costs. Compute is significantly more expensive than storage. So while tables use much more storage, it’s generally an economical tradeoff, as you only pay for the transformation compute when you build a table during a Job, rather than every time you query it.
- Ideal for models that get queried regularly, due to the combination of these qualities.
- Limited to the source data that was available when we did our most recent run. We’re ‘freezing’ the transformation logic into a table. So if we run a model as a table every hour, at 10:59a we still only have data up to 10a, because that was what was available in our source data when we ran the table last at 10a. Only at the next run will the newer data be included in our rebuild.

### Incremental models​

- Incremental models build a table in pieces over time, only adding and updating new or changed records.
- Builds more quickly than a regular table of the same logic.
- Initial runs are slow. Typically we use incremental models on very large Datasets, so building the initial table on the full Dataset is time consuming and equivalent to the table materialization.
- Add complexity. Incremental models require deeper consideration of layering and timing.
- Can drift from source data over time. As we’re not processing all of the source data when we run an incremental model, extra effort is required to capture changes to historical data.
