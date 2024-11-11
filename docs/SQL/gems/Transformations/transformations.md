---
title: Transformations
id: sql-transformations
description: data transformation steps in SQL
sidebar_position: 12
tags:
  - gems
  - transformations
  - cte
---

Constitutes the set of Gems that help with transforming data.

<div class="transformations-gems-table">

| <div style={{'width':'100px'}}>Transforms</div> | Description                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **[Aggregate](./aggregate.md)**                 | Group data and apply aggregation functions such as avg or sum.                                                   |
| **[Deduplicate](./deduplicate.md)**             | Removes rows with duplicate values of specified columns.                                                         |
| **Filter**                                      | Select rows of data that meet a condition.                                                                       |
| **[FlattenSchema](./flattenschema.md)**         | FlattenSchema works on Snowflake sources that have nested columns that you'd like to extract into a flat schema. |
| **Limit**                                       | Limit the number of rows in a table or view.                                                                     |
| **OrderBy**                                     | Arrange the rows in a table or view in alphanumeric order based on the values of the specified data columns.     |
| **Reformat**                                    | Select columns, rename columns, or redefine existing columns from a table or view.                               |

</div>

:::info
To learn more about the UI for Transformation Gems, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all Gems, or the [Aggregate](./aggregate.md) Gem page, which provides a thorough description for using SQL Gems.
:::

## Run

When your Transformation Gem has the desired condition and expression, run interactively to view [sample data](/docs/SQL/execution/data-explorer.md).
