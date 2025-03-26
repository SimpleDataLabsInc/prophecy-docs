---
title: BulkColumnExpressions
id: bulk-column-expressions
slug: /analysts/sql/bulk-column-expressions
description: Change the data type of multiple columns at once
tags:
  - gems
  - analyst
  - prepare
---

<span class="badge">SQL</span><br/><br/>

The BulkColumnExpressions Gem primarily lets you cast or change the data type of multiple columns at once. It provides additional functionality, including:

- Adding a prefix or suffix to selected columns.
- Applying a custom expression to selected columns.

## Parameters

| Parameter                                    | Description                                                                                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Data Type of the columns to do operations on | The data type of columns to select.                                                                                                                                |
| Selected Columns                             | The columns on which to apply transformations.                                                                                                                     |
| Change output column name                    | An option to add a prefix or suffix to the selected column names.                                                                                                  |
| Change output column type                    | The data type that the columns will be transformed into.                                                                                                           |
| Output Expression                            | A SQL expression that can be applied to the selected columns. This field is required. If you only want to select the column, use `column_value` as the expression. |
