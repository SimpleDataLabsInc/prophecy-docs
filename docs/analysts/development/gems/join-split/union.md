---
title: Union
id: union
slug: /analysts/union
description: Perform addition of rows from multiple tables
tags: []
---

<span class="badge">SQL</span><br/><br/>

The Union gem lets you combine records from different tables for cases such as merging customer databases or aggregating logs from multiple servers.

## Input and Output

| Port    | Description                                           |
| ------- | ----------------------------------------------------- |
| **in0** | The first input table.                                |
| **in1** | The second input table.                               |
| **inN** | Optional: Additional input tables.                    |
| **out** | A single table containing all rows from input tables. |

To add additional input ports, click `+` next to **Ports**.

All input tables must have **identical schemas** (matching column names and data types). If table columns have different orders or a different number of columns, use the [UnionByName](/analysts/union-by-name) gem.

## Parameters

| Parameter               | Description                                    |
| ----------------------- | ---------------------------------------------- |
| Operation Type          | Union                                          |
| Preserve duplicate rows | Allow duplicates to appear in the output table |

## Example

Let’s say you’re working with two tables: **Table A** and **Table B**.

- Both tables contain order-related data.
- **Table A** contains order information from customer `1`, `2`, and `3`.
- **Table B** contains order information from customer `1`, `2`, `3`, and `4`.
- These tables contain some identical records (duplicates).

This example helps illustrate how the Union gem operates on the tables.

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

### Result with duplicates

The following is the output table with duplicates.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 105      | 4           | 2025-03-05 | 400.00 |
| 106      | 2           | 2025-03-07 | 180.00 |

</div>

:::tip
Order `103` and `104` are duplicate records.
:::

### Result without duplicates

The following is the output table without duplicates.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 105      | 4           | 2025-03-05 | 400.00 |
| 106      | 2           | 2025-03-07 | 180.00 |

</div>
