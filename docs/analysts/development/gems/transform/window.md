---
title: WindowFunction
id: window
slug: /analysts/window
description: Create moving aggregations and transformation
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

The **WindowFunction** gem lets you perform calculations for individual records across a defined window of rows. This enables transformations such as moving averages, rankings, lead/lag comparisons, and cumulative metrics.

Unlike regular aggregations, window functions retain the original row structure while adding new columns that reflect insights based on neighboring rows. You can configure the window using partitions, sorting, and frame definitions to control how each calculation is applied.

This page explains how to configure partitions, sort data, and choose frames to achieve the intended behavior.

## Use cases

Here are a few common use cases for window functions.

| Use case                                  | Example                          |
| ----------------------------------------- | -------------------------------- |
| Compute metrics over rolling time periods | Find 7-day average               |
| Rank or number rows within groups         | Rank city population per country |
| Compare values from previous or next rows | Find week-over-week change       |
| Apply cumulative calculations             | Get running totals               |

## Input and Output

The WindowFunction gem uses the following input and output ports.

| Port    | Description                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| **in0** | The input dataset containing the columns you want to analyze using window functions.                            |
| **out** | The output dataset, which includes all columns from `in0` and new columns from [window functions](#window-use). |

:::note
This gem only supports a single input and output port.
:::

## Parameters

Explore the following sections to understand how to configure the WindowFunction gem.

### Partition By

The **Partition By** tab allows you to define whether you want to partition your data. When you define partitions, windows will apply starting with each group. If no partition is given, one window operates over the whole dataset. You can define multiple partition columns to make your groupings more granular. Columns can be added and kept as is, or you can use an expression to define the column.

You can specify one or more columns to partition by. This is useful for calculating things like rankings or rolling metrics within categories, such as per user, region, or product. You can also use expressions to define custom partition logic.

> Example: Partitioning by `customer_id` when calculating `row_number()` will restart the row count at 1 for each customer.

### Order By

The **Order By** tab controls the order in which rows are processed within each partition. This ordering is essential for functions that depend on sequence, such as calculating rankings, lead or lag time, and rolling averages by date. If no order is specified, the window function output is nondeterministic, since row order may vary between runs.

You can sort by column types including numeric, string, date, or timestamp. You can also control whether the sort is ascending or descending, and how null values are treated.

> Example: To calculate a rolling average by date, order by a date column in ascending order.

:::note
You must define an Order By column to use a [range frame](#range-frame) window frame.
:::

### Window Frame

The Window Frame defines the subset of rows used to compute each window function result. When no window is specified, the window includes all rows in the partition up to the current row. However, you can customize the frame to include only a specific range of rows.

Prophecy supports both [Row Frame](#row-frame) and [Range Frame](#range-frame) options, which are explained below.

#### Row Frame

The **Row Frame** option defines the window size based on the number of rows before and after the current row.

This is useful when you want a fixed number of rows in your window, such as calculating a 3-row moving average, regardless of the values in the ordered column.

You configure the frame by setting a **Start** and an **End** boundary. The boundaries can be:

- Unbounded Preceding: Includes all rows before the current row.
- Unbounded Following: Includes all rows after the current row.
- Current Row: Starts or ends at the current row.
- Row Number: A specific number of rows before or after the current row.

When using row offset, use:

- Negative numbers to go backward (e.g., -2 means 2 rows before)
- Positive numbers to go forward (e.g., 2 means 2 rows after)
- 0 to refer to the current row.

> Example: A 2-row moving average might use a frame of `-2` to the current row. This frame includes the current row and the two rows before it in the ordered set.

#### Range Frame

The Range Frame defines the window using values in the Order By column. This allows you to frame your window based on a value range around the current row, such as a date range or a numerical difference. This is useful when your data has gaps or uneven intervals.

You configure the frame by setting a **Start** and an **End** boundary. The boundaries can be:

- Unbounded Preceding: Includes all rows before the current row.
- Unbounded Following: Includes all rows after the current row.
- Current Row: Starts or ends at the current row.
- Range Value: A numeric or interval value defining how far before or after the current row to look.

Prophecy automatically interprets the unit of the **Range Value** based on the type of the **Order By** column:

- If ordering by a date or timestamp, a value of 1 means "1 day forward", and -1 means "1 day backward".
- If ordering by a numeric column, 1 means "up to 1 unit above", and -1 means "up to 1 unit below".

Because the Range Frame depends on actual data values (not row positions), the number of rows in the window may vary for each record. For example, some window frames may include only one match within 5 days, while others may include ten.

### Window Use

In the **Window Use** tab, you can apply window functions that calculate values for each row based on a the defined window frame of surrounding rows. Each function you configure adds a new column to the output dataset.

You can apply functions such as:

- Ranking functions: `row_number()`, `rank()`, `dense_rank()` and `ntile()`.
- Analytical functions: `lead()`, `lag()`, and `cume_dist()`.
- Aggregate functions: `min()`, `max()`, and `avg()`.

You can add multiple window functions within a single WindowFunction gem. However, all these functions will share the same partitioning and ordering configuration. If you need different partition or order columns for different window calculations, use multiple WindowFunction gems sequentially.

:::info
For a full list of available functions, visit the [Window functions](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-window-functions#parameters) page of the Databricks documentation.
:::
