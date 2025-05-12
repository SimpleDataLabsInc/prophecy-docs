---
title: Intersect
id: intersect
slug: /analysts/intersect
description: Return only the rows that are common across all input datasets
tags: []
---

<span class="badge">SQL</span><br/><br/>

Use the Intersect Gem to return only the rows that appear in **all** input tables. This is useful for identifying overlapping data, such as customers who are active on multiple platforms, or transactions that appear across different systems or logs.

## Input and Output

| Port    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| **in0** | The first input table to compare.                                        |
| **in1** | The second input table to compare.                                       |
| **inN** | Optional: Additional tables to compare.                                  |
| **out** | A single table containing only rows that appear in **all** input tables. |

To add additional input ports, click `+` next to **Ports**.

All input tables must have **identical schemas** (matching column names and data types).

## Parameters

| Parameter               | Description                                      |
| ----------------------- | ------------------------------------------------ |
| Operation Type          | Shows that the set operation type is `Intersect` |
| Preserve duplicate rows | Checkbox to keep duplicates in the output table  |

## Example

Let’s say you’re working with two tables: **Table A** and **Table B**.

- Both tables contain order-related data.
- **Table A** contains order information from customer `1`, `2`, and `3`.
- **Table B** contains order information from customer `1`, `2`, `3`, and `4`.
- **Tables A and B** each contain some identical records (duplicates).

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
| 101      | 1           | 2024-12-01 | 250.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 105      | 4           | 2025-03-05 | 400.00 |
| 106      | 2           | 2025-03-07 | 180.00 |
| 101      | 1           | 2024-12-01 | 250.00 |

</div>

### Result

#### Default

The table that results from the Intersect gem only includes the records present in all the input tables.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 104      | 3           | 2025-02-10 | 200.00 |

</div>

The output indicates that order `101` and `104` appear in both **Table A** and **Table B**.
By default, the duplicate row for order `101` is removed from the output.

#### Preserve duplicates

If the `preserve duplicates` option is selected, the duplicates from both inputs are preserved.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 101      | 1           | 2024-12-01 | 250.00 |
| 104      | 3           | 2025-02-10 | 200.00 |

</div>

The output is the same as above, except the duplicate order `101` is retained.
