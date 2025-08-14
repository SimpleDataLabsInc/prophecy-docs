---
title: Unpivot gem
sidebar_label: Unpivot
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
  sql_package_name=""
  sql_package_version=""
/>

The Unpivot gem is a data transformation tool designed to reshape datasets from a wide to a long format. This operation consolidates multiple columns containing similar data into two new columns: one representing the original column names, and another holding their corresponding values.

This transformation is fundamental for various use cases, particularly for machine learning data preparation.

:::info
This functionality was previously available through the Transpose gem. While existing pipelines utilizing the Transpose gem will continue to operate, we recommend migrating to the Unpivot gem for new implementations.
:::

## Input and Output

The Unpivot gem uses the following input and output ports.

| Port    | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | The source table containing data in wide format, where multiple columns hold similar types of data that need to be consolidated.                                                                                                                                                                                                                                              |
| **out** | The output table in long format containing: <br/>• All original key columns (identifiers) <br/>• A new column containing the names of the unpivoted columns. Default column name: `Name` <br/>• A new column with the corresponding values from the unpivoted columns. Default column name: `Value` <br/>The output will be in long format and have more rows than the input. |

## Parameters

Configure the Unpivot gem using the following parameters.

### Key Columns

Key columns serve as unique identifiers and will be preserved in the output. These columns remain unchanged during the unpivot operation and help maintain the relationship between the original and transformed data. Select all columns that you want to keep as identifiers for each row.

> Example: In a test scores dataset with columns `Student_ID`, `Subject`, `Test1`, `Test2`, `Test3`, you would select `Student_ID` and `Subject` as key columns to maintain student and subject identifiers in your transformed data.

### Data Columns

Data columns contain the actual data values that you want to transform from wide format (multiple columns) to long format (single column). These columns will be transformed into two new columns: one containing the column names and another containing their values.

> Example: In a test scores dataset with columns `Student_ID`, `Subject`, `Test1`, `Test2`, `Test3`, you would select `Test1`, `Test2`, and `Test3` as data columns to transform multiple test scores into a single column structure where each test becomes a separate row.

### Use custom output column names

When **Use custom output column names for Name & Value pairs** is enabled, you can override the default column names (`Name` and `Value`) with custom names that better describe your data.

> Example: In a test scores dataset with columns `Student_ID`, `Subject`, `Test1`, `Test2`, `Test3`, enable this option and rename **Name** to `Test_Number` and **Value** to `Score` for better semantic meaning in your transformed dataset.

## Example: Sales per quarter

Imagine you have sales data for different products, with each quarter's sales (units sold) stored in its own column. This structure is known as wide format. Before modeling seasonal trends or doing time series analysis, it's often helpful to convert this into long format, where each row represents a **single observation**.

<div class="table-example">

| Product | Q1  | Q2  | Q3  | Q4  |
| ------- | --- | --- | --- | --- |
| A       | 100 | 150 | 130 | 170 |
| B       | 90  | 120 | 110 | 160 |

</div>

To configure a Unpivot gem for this table:

1. For **Key Columns**, select the `Product` column. This allows you to identify quarterly sales per product.
1. For **Data Columns**, select all of the quarter columns (`Q1`, `Q2`, etc.) for your data columns.
1. Select the **Use custom output column names for Name & Value pairs** checkbox.
1. Rename the **Name** column to `Quarter`.
1. Rename the **Value** column to `Units_Sold`.
1. Save and run the gem.

### Result

After the transformation:

- The quarter names (`Q1`, `Q2`, etc.) will move into a new `Quarter` column.
- The corresponding units sold per quarter will be stored in a `Units_Sold` column.

<div class="table-example">

| Product | Quarter | Units_Sold |
| ------- | ------- | ---------- |
| A       | Q1      | 100        |
| A       | Q2      | 150        |
| A       | Q3      | 130        |
| A       | Q4      | 170        |
| B       | Q1      | 90         |
| B       | Q2      | 120        |
| B       | Q3      | 110        |
| B       | Q4      | 160        |

</div>
