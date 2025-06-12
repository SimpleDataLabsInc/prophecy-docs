---
title: SQL Gems
id: sql-gems
slug: /engineers/data-modeling-gems
description: Gems are data seeds, sources, transformations, and targets
tags:
  - gems
  - transformation
  - source
  - target
  - cte
---

In Prophecy and dbt, [models](/engineers/models) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the model as a series of steps, each represented by a [gem](/docs/getting-started/concepts/gems.md).

Each gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each gem should generate a CTE or a subquery. Users simply configure the gem's interface, and Prophecy integrates the resulting SQL into the larger data model.

The table below lists each gem available for models.

| Gem                                                            | Description                                                                                                           |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Model Source and Target](/analysts/model-sources-and-targets) | Read and write data using dbt models.                                                                                 |
| [Aggregate](/analysts/aggregate)                               | Performs aggregation operations on datasets, such as computing sums, averages, and counts.                            |
| [Deduplicate](/analysts/deduplicate)                           | Removes duplicate records from a dataset to ensure data uniqueness and integrity.                                     |
| [Except](/analysts/except)                                     | Extract rows that are present in the first table but absent from all subsequent tables.                               |
| [Filter](/analysts/filter)                                     | Filters records in a dataset based on specified conditions, allowing for the selection of relevant data.              |
| [FlattenSchema](/analysts/flatten-schema)                      | Converts nested or hierarchical data structures into a flat table format.                                             |
| [Intersect](/analysts/intersect)                               | Return only the rows that appear in all input tables.                                                                 |
| [Join](/analysts/join)                                         | Combines two or more datasets based on a common key.                                                                  |
| [Limit](/analysts/limit)                                       | Restricts the number of records in a dataset to a specified number.                                                   |
| [Macro](/analysts/macro)                                       | Defines reusable code snippets or functions that can be invoked across multiple models.                               |
| [Models](/engineers/model-sources)                             | Sequences of steps to perform SQL-based transformations that results in a single table.                               |
| [OrderBy](/analysts/order-by)                                  | Sorts records in a dataset based on specified columns.                                                                |
| [Reformat](/analysts/reformat)                                 | Changes the format or structure of data within a dataset, such as modifying date formats or string cases.             |
| [Seed](/analysts/seed)                                         | Provides initial data to a pipeline or model, often used for testing or as reference data.                            |
| [SQLStatement](/analysts/sql-statement)                        | Executes custom SQL statements within a pipeline or model, offering flexibility for complex transformations.          |
| [Union](/analysts/union)                                       | Combine records from different sources.                                                                               |
| [WindowFunction](/analysts/window)                             | Performs calculations across a set of table rows related to the current row (like running totals or moving averages). |
