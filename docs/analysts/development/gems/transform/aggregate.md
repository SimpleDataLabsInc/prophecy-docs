---
title: Aggregate
id: aggregate
slug: /analysts/aggregate
description: Group and pivot your data
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

Use the Aggregate gem to group data and perform aggregations on each group.

::::info Interactive Gem Example
The Aggregate gem has a corresponding interactive gem example. See [Interactive gem examples](/analysts/gems#interactive-gem-examples) to learn how to run sample pipelines for this and other gems.
::::

## Parameters

| Parameter         | Description                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| Group By          | Defines the column(s) that include the categories that you will group by.                              |
| Expressions       | Includes the aggregations that you wish to perform. Each aggregation will produce a new output column. |
| Having Conditions | Filter after the GROUP BY operation.                                                                   |

## Example

Suppose you have a dataset of orders that includes the customer_id of each customer. You can use the Aggregate gem to:

- Group by the **customer_id** column. This will apply aggregations per each unique customer.
- Count the number of orders per customer using `count(order_id)`.
- Retrieve the total amount spent by the customer using `sum(order_amount)`.
- View customers who made less than three orders. To do so, add the **Having** condition `count(order_id) < 3`.
