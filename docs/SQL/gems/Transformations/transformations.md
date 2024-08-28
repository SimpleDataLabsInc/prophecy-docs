---
title: Transformations
id: data-transformations
description: data transformation steps in SQL
sidebar_position: 12
tags:
  - gems
  - transformations
  - cte
---

Constitutes the set of Gems that help with transforming data

<div class="transformations-gems-table">

| <div style={{'width':'100px'}}>Transforms</div> | Description                                                                                                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Aggregate**                                   | Group data and apply aggregation functions such as avg or sum.                                               |
| **Filter**                                      | Select rows of data that meet a condition.                                                                   |
| **OrderBy**                                     | Arrange the rows in a table or view in alphanumeric order based on the values of the specified data columns. |
| **Reformat**                                    | Select columns, rename columns, or redefine existing columns from a table or view.                           |
| **Limit**                                       | Limit the number of rows in a table or view.                                                                 |
| **Pivot**                                       | ?Limit the number of rows in a table or view.                                                                |
| **Unpivot**                                     | ?Limit the number of rows in a table or view.                                                                |
| **SetOperation**                                | Allows you to perform addition or subtraction of rows in a table or view.                                    |
| **FlattenSchema**                               | Allows you to flatten complex data types into simpler schemas.                                               |

</div>

:::info
To learn more about the UI for Transformation Gems, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all Gems.
:::

## Run

When your Transformation Gem has the desired condition and expression, run interactively to view [sample data](/docs/SQL/development/visual-editor/interactive-development/data-explorer.md).

## What's next

To learn more about SQL transform Gems, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
