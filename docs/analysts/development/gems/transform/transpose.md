---
title: Transpose
id: transpose
slug: /analysts/transpose
description: Convert your table from wide to long format
tags:
  - gems
  - analyst
  - transform
---

<span class="badge">SQL</span><br/><br/>

Use the Transpose gem to reshape your dataset by unpivoting columns—perfect for preparing time series data, feeding models, or simplifying analysis. This transformation:

- Takes data in wide format (multiple columns for similar data)
- Converts it to long format (stacked rows with a single column for names and one for values)

## Parameters

| Parameter    | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| Key Columns  | Columns that act as identifiers for each row.                                                  |
| Data Columns | The columns (wide format) that you would like to transform into a single column (long format). |

## Example

Imagine you have sales data for different products, with each quarter's sales stored in its own column—this is known as wide format. Before modeling seasonal trends or doing time series analysis, it's often helpful to convert this into long format, where each row represents a single observation.

<div class="table-example">

| Product | Q1  | Q2  | Q3  | Q4  |
| ------- | --- | --- | --- | --- |
| A       | 100 | 150 | 130 | 170 |
| B       | 90  | 120 | 110 | 160 |

</div>

To configure a Transpose gem for this table:

1. Identify the key columns. In the example above, the `Product` column is the key column.
1. Select the data columns to unpivot. In the example above, all of the quarter columns (`Q1`, `Q2`, etc.) are your data columns.
1. Save and run the gem.

After the transformation:

- The quarter names (`Q1`, `Q2`, etc.) will move into a new `Name` column.
- The corresponding sales values will be stored in a `Value` column.

<div class="table-example">

| Product | Name | Value |
| ------- | ---- | ----- |
| A       | Q1   | 100   |
| A       | Q2   | 150   |
| A       | Q3   | 130   |
| A       | Q4   | 170   |
| B       | Q1   | 90    |
| B       | Q2   | 120   |
| B       | Q3   | 110   |
| B       | Q4   | 160   |

</div>

This makes your data easier to analyze over time, since each row now represents one product's sales for a specific quarter.
