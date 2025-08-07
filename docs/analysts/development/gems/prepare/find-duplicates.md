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

The FindDuplicates gem allows you to identify unique or duplicate rows in a dataset based on selected columns. You can return only unique rows, only duplicates, or apply advanced filtering based on how often a group of values appears.

## Input and Output

| Port    | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| **in0** | Input dataset to evaluate for duplicates.                                                  |
| **out** | Output dataset with rows filtered according to the selected uniqueness and count criteria. |

## Parameters

Configure the FindDuplicates gem using the following parameters.

| Parameter                         | Description                                                                                         |
| --------------------------------- | --------------------------------------------------------------------------------------------------- |
| Unique rows generation scope      | Defines the criteria for considering rows as unique. See [Uniqueness scope](#uniqueness-scope).     |
| Output records selection strategy | Determines which rows to include based on group count. See [Output strategies](#output-strategies). |

### Uniqueness scope

Choose how to define uniqueness in the dataset:

- **Uniqueness across all columns**: Considers the entire row when checking for uniqueness.

- **Uniqueness across selected columns**: Select specific columns to group by when identifying duplicates.

  - **Group by**: Specify the columns to group by and optionally set an order for processing.

### Output strategies

Decide which rows to include in the output based on how frequently they appear:

- **Unique**: Returns the first instance of each row or group.

- **Duplicate**: Returns the first instance of each row or group that occurs more than once.

- **Custom group count**: Filter rows based on group count using custom logic. You have the following options:

  - **Group count equal to**: Includes rows that appear exactly `n` times.

  - **Group count less than**: Includes rows that appear fewer than `n` times.

  - **Group count greater than**: Includes rows that appear more than `n` times.

  - **Group count not equal to**: Includes rows whose count is different from `n`.

  - **Group count between**: Includes rows with count within a specified range.

- **Custom row number**: Filter rows based row numbers. You have the following options:

  - **Row number equal to**: Includes only the row with the specified row number.

  - **Row number less than**: Includes rows with a row number less than n.

  - **Row number greater than**: Includes rows with a row number greater than n.

  - **Row number not equal to**: Includes all rows except the one with the specified row number.

  - **Row number between**: Includes rows with a row number within a specified range.

## Example

Given the following dataset:

<div class="table-example">

| ID  | Name  | City     |
| --- | ----- | -------- |
| 1   | Alice | Boston   |
| 2   | Bob   | Boston   |
| 3   | Alice | Boston   |
| 4   | Alice | New York |
| 5   | Alice | Boston   |

</div>

If you select:

- **Group by**: `Name`, `City`
- **Output strategy**: `Group count equal to 2`

The result will return rows 1 and 3 (Alice in Boston), because that group appears exactly twice (even though a third instance exists, it will still group accordingly unless deduplicated).
