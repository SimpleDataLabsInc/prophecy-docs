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

In Prophecy and dbt, data [models](/engineers/models) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a [gem](/docs/getting-started/concepts/gems.md).

Each gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each gem should generate a CTE or a subquery. Users simply configure the gem's interface, and Prophecy integrates the resulting SQL into the larger data model.

The table below lists each gem available for data modeling.

| Category                                                                           | Description                                                                                                           |
| ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [Aggregate](docs/analysts/development/gems/transform/aggregate.md)                 | Performs aggregation operations on datasets, such as computing sums, averages, and counts.                            |
| [MultiColumnEdit](docs/analysts/development/gems/prepare/multi-column-edit.md)     | Applies expressions to multiple columns simultaneously.                                                               |
| [MultiColumnRename](docs/analysts/development/gems/prepare/multi-column-rename.md) | Renames multiple columns in a dataset in one operation.                                                               |
| [DataCleansing](docs/analysts/development/gems/prepare/data-cleansing.md)          | Identifies and corrects errors or inconsistencies in data formatting to improve quality.                              |
| [Deduplicate](docs/analysts/development/gems/prepare/deduplicate.md)               | Removes duplicate records from a dataset to ensure data uniqueness and integrity.                                     |
| [DynamicSelect](/analysts/dynamic-select)                                          | Selects columns from a dataset dynamically based on specified conditions or patterns.                                 |
| [Filter](docs/analysts/development/gems/prepare/filter.md)                         | Filters records in a dataset based on specified conditions, allowing for the selection of relevant data.              |
| [FlattenSchema](docs/analysts/development/gems/prepare/flatten-schema.md)          | Converts nested or hierarchical data structures into a flat table format.                                             |
| [Join](docs/analysts/development/gems/join-split/join.md)                          | Combines two or more datasets based on a common key.                                                                  |
| [Limit](docs/analysts/development/gems/prepare/limit.md)                           | Restricts the number of records in a dataset to a specified number.                                                   |
| [Macro](docs/analysts/development/gems/custom/macro.md)                            | Defines reusable code snippets or functions that can be invoked across multiple models.                               |
| [Models](/engineers/model-sources)                                                 | Sequences of steps to perform SQL-based transformations that results in a single table.                               |
| [OrderBy](docs/analysts/development/gems/prepare/order-by.md)                      | Sorts records in a dataset based on specified columns.                                                                |
| [Reformat](docs/analysts/development/gems/prepare/reformat.md)                     | Changes the format or structure of data within a dataset, such as modifying date formats or string cases.             |
| [Seed](/engineers/model-sources)                                                   | Provides initial data to a pipeline or model, often used for testing or as reference data.                            |
| [SQLStatement](docs/analysts/development/gems/custom/sql-statement.md)             | Executes custom SQL statements within a pipeline or model, offering flexibility for complex transformations.          |
| [WindowFunction](docs/analysts/development/gems/transform/window.md)               | Performs calculations across a set of table rows related to the current row (like running totals or moving averages). |

## What's next

To understand the generic structure of a gem, review the [Gem](docs/getting-started/concepts/gems.md) concept page. To understand how to use visual expressions in SQL gems, visit [Visual Gem Builder](docs/analysts/development/gems/visual-expression-builder/visual-expression-builder.md).
