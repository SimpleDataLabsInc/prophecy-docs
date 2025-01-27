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

In Prophecy and dbt, data [models](/docs/get-started/concepts/project/models.md) are groups of SQL statements used to create a single table or view. Prophecy simplifies data modeling by visualizing the data model as a series of steps, each represented by a [Gem](/docs/get-started/concepts/project/gems.md). Gems are functional units that perform tasks such as reading, transforming, writing, or handling other data operations.

Each Gem corresponds to a SQL statement, which users can construct through an intuitive visual interface. Prophecy handles the underlying complexity by deciding whether each Gem should generate a CTE or a subquery. Users simply configure the Gem's interface, and Prophecy integrates the resulting SQL into the larger data model.

The table below outlines the different SQL Gem categories.

<div class="gems-table">

| <div style={{'width':'100px'}}>Gem</div>      | Category                                                  | Description                                                                                                   |
| --------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| ![Model](img/Model.png)                       | [**Model**](docs/SQL/gems/target-models/target-models.md) | Each model is a DAG that defines a single table or view. A model can also serve as an input for other Models. |
| ![Source](img/Source%20and%20Target.png)      | [**Datasource**](./datasources/)                          | Gems related to loading data: Seeds, Sources, or Models can be used as datasources.                           |
| ![Transform](img/Transform.png)               | [**Transform**](./transform/)                             | Gems related to the transformation of data.                                                                   |
| ![Join and Split](img/Join%20and%20Split.png) | [**Join**](./joins.md)                                    | Gems related to splitting or joining tables together.                                                         |
| ![Custom](img/Custom.png)                     | [**Custom**](./custom/custom.md)                          | The set of Gems built to extend Prophecy's capabilities.                                                      |

</div>
