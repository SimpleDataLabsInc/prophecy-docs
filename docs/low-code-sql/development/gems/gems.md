---
title: Gems
id: sql-gems
description: Gems are data seeds, sources, transformations, and targets
sidebar_position: 2
tags:
  - gems
  - transformation
  - source
  - target
  - cte
---

A Gem is a unit of functionality ranging from reading, transforming, writing, and various other ad-hoc operations on data. [Models](/docs/concepts/project/models.md) are typically composed of multiple Gems. Each Gem represents a SQL statement, and allows users to construct that statement by configuring a visual interface.

<div class="gems-table">

| <div style={{'width':'100px'}}>Gem</div>      | Category                                              | Description                                                                               |
| --------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Source](img/Source%20and%20Target.png)      | [**Datasource**](./datasources.md)                    | Gems related to loading data: Seeds, Sources, or Models can be used as datasources        |
| ![Transform](img/Transform.png)               | [**Transform**](./transformations/transformations.md) | Gems related to the transformation of your data                                           |
| ![Join and Split](img/Join%20and%20Split.png) | [**Join**](./joins.md)                                | Gems related to splitting or joining tables together                                      |
| ![Custom](img/Custom.png)                     | [**Custom**](./custom/custom.md)                      | The set of Gems built to extend Prophecy's capabilities.                                  |
| ![Model](img/Model.png)                       | [**Model**](/docs/concepts/project/models.md)         | Each model defines a single table or view; the model can also be considered a Target Gem. |

</div>
