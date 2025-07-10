---
title: Unpivot
id: unpivot
slug: /analysts/unpivot
description: Convert your table from wide to long format
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.4+"
/>

The Unpivot gem is a data transformation tool designed to reshape datasets from a wide to a long format. This operation consolidates multiple columns containing similar data into two new columns: one representing the original column names and another holding their corresponding values.

This transformation is fundamental for various use cases, particularly for machine learning data preparation.

:::info
This functionality was previously available through the Transpose gem. While existing pipelines utilizing the Transpose gem will continue to operate, we recommend migrating to the Unpivot gem for new implementations.
:::

## Parameters

Configure the Unpivot gem using the following parameters.

| Parameter    | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| Key Columns  | Columns that act as identifiers for each row.                                        |
| Data Columns | Columns (wide format) that you want to transform into a single column (long format). |

## Example

Imagine you have sales data for different products, with each quarter's sales stored in its own column—this is known as wide format. Before modeling seasonal trends or doing time series analysis, it's often helpful to convert this into long format, where each row represents a single observation.

<div class="table-example">

| Product | Q1  | Q2  | Q3  | Q4  |
| ------- | --- | --- | --- | --- |
| A       | 100 | 150 | 130 | 170 |
| B       | 90  | 120 | 110 | 160 |

</div>

To configure a Unpivot gem for this table:

1. Identify and enter the key columns. In the example above, the `Product` column is the key column.
1. Select the data columns to unpivot. In the example above, all of the quarter columns (`Q1`, `Q2`, etc.) are your data columns.
1. Save and run the gem.

### Result

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
