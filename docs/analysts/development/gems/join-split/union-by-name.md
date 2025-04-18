---
title: UnionByName
id: union-by-name
slug: /analysts/union-by-name
description: Combine datasets by aligning columns with the same name
tags: []
---

<span class="badge">SQL</span><br/><br/>

Use **UnionByName** to combine rows from multiple datasets by matching column names, not positions. This is especially helpful when working with data from different sources where schemas might vary slightly in order or structure, but the column names are consistent.

## Input and Output

| Port    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| **in0** | The first input table.                                                     |
| **in1** | The second input table.                                                    |
| **inN** | Optional: Additional input tables to include in the union.                 |
| **out** | A single table containing the combined rows, with columns matched by name. |

## Parameters

| Parameter      | Description                                                                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Operation Type | <ul class="table-list"><li>Union By Name (No Missing Columns): All columns must be present in both tables</li><li>Union By Name (Allow Missing Columns): Columns do not have to match between tables</li></ul> |

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

| order_id | customer_id | order_date |
| -------- | ----------- | ---------- |
| 103      | 1           | 2025-01-15 |
| 104      | 3           | 2025-02-10 |
| 105      | 4           | 2025-03-05 |
| 106      | 2           | 2025-03-07 |

</div>

### UNION BY NAME (Allow Missing Columns) Result

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
