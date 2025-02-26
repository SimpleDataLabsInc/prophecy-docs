---
title: SQL Gems
id: sql-gems
description: Gems are data seeds, sources, transformations, and targets
tags:
  - gems
  - transformation
  - source
  - target
  - cte
---

In Prophecy and dbt, data [models](docs/data-modeling/models.md) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a [gem](/docs/getting-started/concepts/gems.md).

Each gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each gem should generate a CTE or a subquery. Users simply configure the gem's interface, and Prophecy integrates the resulting SQL into the larger data model.

The table below lists each gem available for data modeling.

| Category   | Description                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Models     | Each model is a DAG that defines a single table or view. A model can also serve as an input for other models. |
| Limit      |                                                                                                               |
| FuzzyMatch |                                                                                                               |
