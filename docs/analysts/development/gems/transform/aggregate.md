---
title: Aggregate
id: aggregate
slug: /analysts/sql/aggregate
description: Group and pivot your data
tags:
  - gems
  - analyst
  - transform
---

<span class="badge">SQL</span><br/><br/>

Use the Aggregate gem to group data and perform aggregations on each group.

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
