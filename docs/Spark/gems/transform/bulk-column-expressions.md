---
title: BulkColumnExpressions
id: bulk-column-expressions
description: Change the data type of multiple columns at once
tags:
  - gems
  - type
  - columns
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name=""
  python_package_version=""
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.1.9+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

The BulkColumnExpressions gem primarily lets you cast or change the data type of multiple columns at once. It provides additional functionality, including:

- Adding a prefix or suffix to selected columns.
- Applying a custom expression to selected columns.

## Parameters

| Parameter                                    | Description                                                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Data Type of the columns to do operations on | The data type of columns to select.                                                                                                                                      |
| Selected Columns                             | The columns on which to apply transformations.                                                                                                                           |
| Change output column name                    | An option to add a prefix or suffix to the selected column names.                                                                                                        |
| Change output column type                    | The data type that the columns will be transformed into.                                                                                                                 |
| Output Expression                            | A Spark SQL expression that can be applied to the selected columns. This field is required. If you only want to select the column, use `column_value` as the expression. |

## Example

Assume you have some columns in a table that represent zero-based indices and are stored as long data types. You want them to represent one-based indices and be stored as integers to optimize memory use.

Using the BulkColumnExpressions gem, you can:

- Filter your columns by long data types.
- Select the columns you wish to transform.
- Cast the output column(s) to be integers.
- Include `column_value + 1` in the expression field to shift the indices.
