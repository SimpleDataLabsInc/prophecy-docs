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

| Parameter               | Description                                    |
| ----------------------- | ---------------------------------------------- |
| Operation Type          | Intersect                                      |
| Preserve duplicate rows | Allow duplicates to appear in the output table |

## Example

### Table A

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |
| 103      | 1           | 2025-01-15 | 300.00 |
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

### Table A INTERSECT Table B

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |

</div>
