---
title: SQL Gems
id: sql-gems
description: Gems are data seeds, sources, transformations, and targets
tags:
  - gems
  - transformation
  - source
  - target
  - cte
---

In Prophecy and dbt, data [models](docs/data-modeling/models.md) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a [gem](/docs/getting-started/concepts/gems.md).

Each gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each gem should generate a CTE or a subquery. Users simply configure the gem's interface, and Prophecy integrates the resulting SQL into the larger data model.

The table below lists each gem available for data modeling.

| Category                                                                                   | Description                                                                                                           |
| ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [Aggregate](docs/analysts/development/gems/transform/aggregate.md)                         | Performs aggregation operations on datasets, such as computing sums, averages, and counts.                            |
| [BulkColumnExpressions](docs/analysts/development/gems/prepare/bulk-column-expressions.md) | Applies expressions to multiple columns simultaneously.                                                               |
| [BulkColumnRename](docs/analysts/development/gems/prepare/bulk-column-rename.md)           | Renames multiple columns in a dataset in one operation.                                                               |
| [DataCleansing](docs/analysts/development/gems/prepare/data-cleansing.md)                  | Identifies and corrects errors or inconsistencies in data formatting to improve quality.                              |
| [Deduplicate](docs/analysts/development/gems/prepare/deduplicate.md)                       | Removes duplicate records from a dataset to ensure data uniqueness and integrity.                                     |
| [DynamicReplace](docs/analysts/development/gems/join-split/dynamic-replace.md)             | Replaces values in a dataset based on dynamic criteria or patterns.                                                   |
| [DynamicSelect](docs/analysts/development/gems/prepare/dynamic-select.md)                  | Selects columns from a dataset dynamically based on specified conditions or patterns.                                 |
| [Filter](docs/analysts/development/gems/prepare/filter.md)                                 | Filters records in a dataset based on specified conditions, allowing for the selection of relevant data.              |
| [FlattenSchema](docs/analysts/development/gems/prepare/flatten-schema.md)                  | Converts nested or hierarchical data structures into a flat table format.                                             |
| [FuzzyMatch](docs/analysts/development/gems/join-split/fuzzy-match.md)                     | Performs approximate matching between datasets to identify similar but not identical records.                         |
| [Join](docs/analysts/development/gems/join-split/join.md)                                  | Combines two or more datasets based on a common key.                                                                  |
| [JSONParse](docs/analysts/development/gems/parse/json-parse.md)                            | Parses JSON-formatted strings into structured columns.                                                                |
| [Limit](docs/analysts/development/gems/prepare/limit.md)                                   | Restricts the number of records in a dataset to a specified number.                                                   |
| [Macro](docs/analysts/development/gems/custom/macro.md)                                    | Defines reusable code snippets or functions that can be invoked across multiple models.                               |
| [Models](docs/data-modeling/gems/datasources/datasources.md)                               | Sequences of steps to perform SQL-based transformations that results in a single table.                               |
| [OrderBy](docs/analysts/development/gems/prepare/order-by.md)                              | Sorts records in a dataset based on specified columns.                                                                |
| [Pivot](docs/analysts/development/gems/transform/pivot.md)                                 | Transforms data from a long format to a wide format by pivoting rows into columns.                                    |
| [Reformat](docs/analysts/development/gems/prepare/reformat.md)                             | Changes the format or structure of data within a dataset, such as modifying date formats or string cases.             |
| [RestAPI](docs/analysts/development/gems/custom/rest-api.md)                               | Integrates with RESTful APIs to fetch or send data so you can interact with external systems.                         |
| [Seed](docs/data-modeling/gems/datasources/datasources.md)                                 | Provides initial data to a pipeline or model, often used for testing or as reference data.                            |
| [SetOperation](docs/analysts/development/gems/join-split/union.md)                         | Performs set operations like union, intersection, or difference between datasets.                                     |
| [SQLStatement](docs/analysts/development/gems/custom/sql-statement.md)                     | Executes custom SQL statements within a pipeline or model, offering flexibility for complex transformations.          |
| [TextToColumns](docs/analysts/development/gems/parse/text-to-column.md)                    | Splits text fields into multiple columns based on a delimiter, aiding in data parsing.                                |
| [Unpivot](docs/analysts/development/gems/transform/unpivot.md)                             | Converts data from a wide format to a long format by transforming columns into rows.                                  |
| [WindowFunction](docs/analysts/development/gems/transform/window.md)                       | Performs calculations across a set of table rows related to the current row (like running totals or moving averages). |
| [XMLParse](docs/analysts/development/gems/parse/xml-parse.md)                              | Parses XML-formatted strings into structured columns, facilitating further data processing.                           |

## What's next

To understand the generic structure of a gem, review the [Gem](docs/getting-started/concepts/gems.md) concept page. To understand how to use visual expressions in SQL gems, visit [Visual Gem Builder](docs/analysts/development/gems/visual-expression-builder/visual-expression-builder.md).
