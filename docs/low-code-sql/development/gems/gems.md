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

In Prophecy and dbt, Data [Models](/docs/concepts/project/models.md) are SQL statements that build a single table or view. Prophecy visualizes Data Models to illustrate the many steps needed to generate a single table or view. Gems represent the individual steps. A Gem is a unit of functionality ranging from reading, transforming, writing, and various other ad-hoc operations on data.

Each Gem represents a SQL statement, and allows users to construct that statement by configuring a visual interface. Prophecy is smart about whether to construct a CTE or subquery for each Gem; users just configure the visual interface, and Prophecy includes the Gem's SQL statement as part of the Model. Here is a nice [overview](/docs/concepts/project/gems.md) of all the aspects of the Gem user interface. The table below outlines each Gem category: 

<div class="gems-table">

| <div style={{'width':'100px'}}>Gem</div>      | Category                                              | Description                                                                                                   |
| --------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Model](img/Model.png)                       | [**Model**](/docs/concepts/project/models.md)         | Each model is a DAG that defines a single table or view. A model can also serve as an input for other Models. |
| ![Source](img/Source%20and%20Target.png)      | [**Datasource**](./datasources/)                      | Gems related to loading data: Seeds, Sources, or Models can be used as datasources                            |
| ![Transform](img/Transform.png)               | [**Transform**](./Transformations/transformations.md) | Gems related to the transformation of data                                                                    |
| ![Join and Split](img/Join%20and%20Split.png) | [**Join**](./joins.md)                                | Gems related to splitting or joining tables together                                                          |
| ![Custom](img/Custom.png)                     | [**Custom**](./custom/custom.md)                      | The set of Gems built to extend Prophecy's capabilities.                                                      |

</div>


