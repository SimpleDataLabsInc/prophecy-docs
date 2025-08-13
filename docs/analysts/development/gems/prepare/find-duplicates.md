---
title: FindDuplicates
id: find-duplicates
slug: /analysts/find-duplicates
description: Return rows that match a certain count
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.12+"
/>

The FindDuplicates gem filters rows in a dataset based on how frequently they appear. You can configure the gem to return the first occurrence of each unique group, identify groups that have duplicates, or apply custom filters based on group frequency or row position within groups.

## Input and Output

The FindDuplicates gem accepts the following input and generates one output.

| Port    | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| **in0** | Input dataset to evaluate for duplicates.                                                  |
| **out** | Output dataset with rows filtered according to the selected uniqueness and count criteria. |

## Parameters

Configure the FindDuplicates gem using the following parameters.

### Unique rows generation scope

Choose how to identify duplicates in your dataset.

- **Uniqueness across all columns**: Considers the entire row when checking for uniqueness. Use this option when you want to find rows that are completely identical across every column.
- **Uniqueness across selected columns**: Considers only specific columns when checking for uniqueness. Use this option when you want to find duplicates based on specific business keys or field combinations.

### Configure Grouping and Sorting

Complete this step only if you selected **Uniqueness across selected columns**.

- **Group By Columns**: Select the columns that determine whether rows are considered duplicates. For example, to find duplicate customer accounts, select the `email` column.
- **Order rows within each group (Optional)**: Select columns to sort by and specify the sort order (ascending or descending). When multiple duplicates exist, this controls which row appears first in the results.

### Output records selection strategy

Choose what to include in the output results. For each strategy, if you did not define a group, the dataset is grouped by all columns (groups consist of complete row matches).

#### Unique

Returns the first row in each group. All other rows in the group are considered duplicates and are excluded.

#### Duplicate

Returns all rows in a group except the first one. This is the inverse of Unique.

#### Custom group count

Filters rows based on how many times each group appears.

Select a filter type:

- **Group count equal to**: Returns rows that appear exactly `n` times
- **Group count less than**: Returns rows that appear fewer than `n` times
- **Group count greater than**: Returns rows that appear more than `n` times
- **Group count not equal to**: Returns rows whose count differs from `n`
- **Group count between**: Returns rows with count within a specified range

In the **Grouped count** field, specify the count value `n`.

#### Custom row number

Filters rows based on position within each group.

Select a filter type:

- **Row number equal to**: Returns only the row with the specified position
- **Row number less than**: Returns rows with a position less than `n`
- **Row number greater than**: Returns rows with a position greater than `n`
- **Row number not equal to**: Returns all rows except the one with the specified position
- **Row number between**: Returns rows with a position within a specified range

In the **Row number** field, specify the position value.

:::note
Row numbering starts at 1 for each group.
:::

## Example: Custom group count

Given the following product catalog dataset:

<div class="table-example">

| product_id | category | region  | last_updated |
| ---------- | -------- | ------- | ------------ |
| 001        | laptop   | us-east | 2024-01-01   |
| 002        | tablet   | us-east | 2024-01-02   |
| 003        | laptop   | us-east | 2024-01-15   |
| 004        | laptop   | us-west | 2024-01-03   |
| 005        | laptop   | us-east | 2024-01-20   |

</div>

If you configure the gem with the following settings:

- **Group by**: `category`, `region`
- **Order by**: `last_updated` (descending)
- **Output strategy**: Custom group count equal to 3

The gem creates the following groups:

- `laptop` + `us-east`: 3 occurrences
- `tablet` + `us-east`: 1 occurrence
- `laptop` + `us-west`: 1 occurrence

The output returns rows `005`, `003`, and `001` (laptop in us-east group) because this group appears exactly 3 times. The rows are ordered by most recent update date first.

## Example: Custom row number

Given the following sales transactions dataset:

<div class="table-example">

| transaction_id | customer_id | date       | amount |
| -------------- | ----------- | ---------- | ------ |
| T001           | C101        | 2024-01-05 | 120.00 |
| T002           | C101        | 2024-02-10 | 250.00 |
| T003           | C102        | 2024-01-07 | 75.00  |
| T004           | C101        | 2024-03-15 | 300.00 |
| T005           | C102        | 2024-02-20 | 150.00 |

</div>

If you configure the gem with the following settings:

- **Group by**: `customer_id`
- **Order by**: `date` (descending)
- **Output strategy**: Row number greater than 1

The gem creates the following groups:

- `C101`: 3 occurrences
- `C102`: 2 occurrences

The output keeps only rows whose position in the sorted order within their group is greater than 1.

<div class="table-example">

| transaction_id | customer_id | date       | amount |
| -------------- | ----------- | ---------- | ------ |
| T002           | C101        | 2024-02-10 | 250.00 |
| T001           | C101        | 2024-01-05 | 120.00 |
| T003           | C102        | 2024-01-07 | 75.00  |

</div>

This output excludes the first (most recent) transaction from each customer group and returns all remaining transactions. Groups with only one row would not appear in the results.
