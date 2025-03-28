---
title: Union
id: union
slug: /analysts/union
description: Perform addition or subtraction of rows
draft: true
tags: []
---

<span class="badge">SQL</span><br/><br/>

Use the Union gem to perform set operations on tables with **identical schemas** and different data. This gem simplifies working with multiple datasets by letting you merge, compare, and filter data efficiently.

- **Merge data** (Union): Combine records from different sources, such as merging customer databases or aggregating logs from multiple servers.
- **Find common records** (Intersect): Identify rows that exist in all datasets, like customers active on multiple platforms or transactions appearing in multiple systems.
- **Filter differences** (Except): Extract records from one dataset that aren’t in others, such as detecting missing orders, unprocessed records, or customers who haven’t returned.

## Input and Output

| Port    | Description                                         |
| ------- | --------------------------------------------------- |
| **in0** | The first input table.                              |
| **in1** | The second input table.                             |
| **inN** | Optional: Additional input tables.                  |
| **out** | A single table that results from the set operation. |

To add additional input ports, click `+` next to **Ports**.

## Operation types

| Operation type | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| **Union**      | Combines rows from all input sources into a single table                          |
| **Intersect**  | Returns only the rows that are present in all input sources.                      |
| **Except**     | Returns rows from the first source that do not appear in any of the other sources |

Selecting the **Preserve duplicate rows** checkbox will allow duplicates to appear in the output table.
