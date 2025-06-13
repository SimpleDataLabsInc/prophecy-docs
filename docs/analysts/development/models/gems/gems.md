---
title: SQL Gems
id: sql-gems
slug: /engineers/data-modeling-gems
description: Gems are data seeds, sources, transformations, and targets
tags:
  - gems
  - transformation
  - source
  - target
  - cte
---

In Prophecy and dbt, [models](/engineers/models) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the model as a series of steps, each represented by a [gem](/analysts/gems).

Each gem maps to a SQL statement. As you configure gems on the visual canvas, Prophecy automatically generates the corresponding SQL, determines whether to use a CTE or subquery for each step, and integrates your changes into the overall model.

## Identifying SQL gems

Models run exclusively in your SQL warehouse and can only use gems supported in that environment.

Gems that can run in SQL are marked with the following badge: <a href="https://docs.prophecy.io/administration/fabrics/prophecy-fabrics/"><span className="badge">SQL Warehouse</span></a>

:::note
Pipelines run on both a SQL warehouse and Prophecy Automate, making a broader set of gems available compared to models.
:::
