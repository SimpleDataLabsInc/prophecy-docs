---
title: UnionByName
id: union-by-name
slug: /analysts/union-by-name
description: Combine datasets by aligning columns with the same name
tags: []
---

<span class="badge">SQL</span><br/><br/>

Use the UnionByName gem to combine rows from multiple datasets by matching column names. This can help when working with data from different sources where schemas might vary slightly in order or structure, but the column names are consistent.

## Input and Output

| Port    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| **in0** | The first input table.                                                     |
| **in1** | The second input table.                                                    |
| **inN** | Optional: Additional input tables to include in the union.                 |
| **out** | A single table containing the combined rows, with columns matched by name. |

To add additional input ports, click `+` next to **Ports**.

## Parameters

| Parameter      | Description                                                                                                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operation Type | Choose between two different operations.<ul class="table-list"><li>Union By Name (No Missing Columns): All columns must be present in both tables.</li><li>Union By Name (Allow Missing Columns): Columns do not have to match between tables.</li></ul> |

## Example

Let’s say you’re working with two tables: **Table A** and **Table B**.

- Both tables contain order-related data.
- Table B is missing the `amount` column that exists in Table A.
- The columns in **Table B** that match **Table A** are ordered differently.

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

| order_id | order_date | customer_id |
| -------- | ---------- | ----------- |
| 103      | 2025-01-15 | 1           |
| 104      | 2025-02-10 | 3           |
| 105      | 2025-03-05 | 4           |
| 106      | 2025-03-07 | 2           |

</div>

### Result

The table below shows the output after running a UnionByName gem with **Allow Missing Columns** enabled.

Since **Table B** doesn’t have the `amount` column, Prophecy fills in null values for rows coming from Table B.

<div class="table-example">

| order_id | customer_id | order_date | amount |
| -------- | ----------- | ---------- | ------ |
| 101      | 1           | 2024-12-01 | 250.00 |
| 102      | 2           | 2024-12-03 | 150.00 |
| 103      | 1           | 2025-01-15 | 300.00 |
| 104      | 3           | 2025-02-10 | 200.00 |
| 103      | 1           | 2025-01-15 | NULL   |
| 104      | 3           | 2025-02-10 | NULL   |
| 105      | 4           | 2025-03-05 | NULL   |
| 106      | 2           | 2025-03-07 | NULL   |

</div>

:::caution
This example will fail if you select **No Missing Columns** in the gem settings, since **Table B** is missing a column in **Table A**.
:::
