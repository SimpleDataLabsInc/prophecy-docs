---
title: Transform
id: transform
description: Data transformation steps in SQL
tags:
  - gems
  - transformations
  - cte
---

Constitutes the set of gems that help with transforming data.

<div class="transformations-gems-table">

| <div style={{'width':'100px'}}>Transforms</div> | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **[Aggregate](./aggregate.md)**                 | Group data and apply aggregation functions such as avg or sum.                                                   |
| **[Deduplicate](./deduplicate.md)**             | Removes rows with duplicate values of specified columns.                                                         |
| **[Filter](./filter.md)**                       | Select rows of data that meet a condition.                                                                       |
| **[FlattenSchema](./flattenschema.md)**         | FlattenSchema works on Snowflake sources that have nested columns that you'd like to extract into a flat schema. |
| **[Limit](./limit.md)**                         | Limit the number of rows in a table or view.                                                                     |
| **[OrderBy](./order-by.md)**                    | Arrange the rows in a table or view in alphanumeric order based on the values of the specified data columns.     |
| **[Reformat](./reformat.md)**                   | Select columns, rename columns, or redefine existing columns from a table or view.                               |
| **[SetOperation](./set-operation.md)**          | Add or subtract rows with identical schemas and different data.                                                  |
| **[Unpivot](./unpivot.md)**                     | Transform data from a wide format to a long one.                                                                 |
| **[WindowFunction](./window-function.md)**      | Define a WindowSpec and apply window functions on a Model.                                                       |

</div>

:::info
To learn more about the UI for Transformation gems, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all gems, or the [Aggregate](./aggregate.md) gem page, which provides a thorough description for using SQL gems.
:::

## Run

When your Transformation gem has the desired condition and expression, run interactively to view [sample data](/docs/SQL/execution/data-explorer.md).
