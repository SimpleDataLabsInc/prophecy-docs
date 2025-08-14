---
title: Except gem
id: except
slug: /analysts/except
description: Return rows from the first dataset that do not appear in any of the others
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Use the Except gem to extract rows that are present in the **first table** but **absent** from all subsequent tables. This is useful for identifying gaps, such as missing orders, unprocessed records, or customers who haven’t returned.

## Input and Output

| Port    | Description                                                                                   |
| ------- | --------------------------------------------------------------------------------------------- |
| **in0** | The primary input table.                                                                      |
| **in1** | The second input table. Any matching rows from `in0` will be excluded from the output.        |
| **inN** | Optional: Additional input tables. Matching rows from `in0` will be excluded from the output. |
| **out** | A table containing rows from `in0` that do **not** appear in any other input.                 |

To add additional input ports, click `+` next to **Ports**.

All input tables must have **identical schemas** (matching column names and data types).

## Parameters

| Parameter               | Description                                     |
| ----------------------- | ----------------------------------------------- |
| Operation Type          | Shows that the set operation type is `Except`   |
| Preserve duplicate rows | Checkbox to keep duplicates in the output table |

## Example

Let’s say you’re working with two tables: **Table A** and **Table B**.

- Both tables contain order-related data.
- **Table A** contains order information from customer `1`, `2`, and `3`.
- **Table B** contains order information from customer `1`, `2`, `3`, and `4`.
- These tables contain some identical records (duplicates).

### Table A

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |
| 101      | 1           | 2024-12-01 | 250.00 |
| 104      | 3           | 2025-02-10 | 200.00 |

</div>

### Table B

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 105      | 4           | 2025-03-05 | 400.00 |
| 106      | 2           | 2025-03-07 | 180.00 |

</div>

### Result

#### Default

The table that results from the Except gem only includes records in Table A that are not in Table B.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |

</div>

The output indicates that order `101` and `102` appear in **Table A**, but not in **Table B**.

#### Preserve duplicates

If you select the `preserve duplicates` option, the gem preserves the duplicates from Table A.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 102      | 2           | 2024-12-03 | 150.00 |
| 101      | 1           | 2024-12-01 | 250.00 |
| 101      | 1           | 2024-12-01 | 250.00 |

The output is the same as above, except the gem also retains the duplicate order `101`.

</div>
