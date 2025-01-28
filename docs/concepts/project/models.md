---
title: Models
id: Model
description: SQL models define a single target table or view
sidebar_position: 2
tags:
  - concepts
  - Models
  - sql
  - target
---

Models are based on SQL-native code and use the dbt Core™️ build system. Models define a single dataset, typically a table or view, and are useful for transforming data directly in a data warehouse or for existing dbt users. They are best suited for data analytics and transformation needs.

You can build models from a **visual** or **code** interface. When using the visual interface, model components are automatically compiled into SQL select statements that you can reuse and customize.

## Data modeling

**Data modeling** refers to the shaping of your data from the raw state all the way to a transformed final state. Data engineers are typically responsible for building tables that represent source data, transforming the data and saving as intermediate tables/views, and building final tables that can be queried by a BI tool and drive decision making for an organization.

Typically business logic is stored as SQL files.

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="myFile.sql">

```
SELECT column1, column2, ...
FROM table_name;
```

</TabItem>
</Tabs>

````

But defining the business logic in a SQL file is only the first step. Data-ready teams know that data modeling with ad-hoc SQL statements is error-prone. How are the SQL files stored? How can the relationships between SQL files be understood? Or the relationships between tables? How is this logic shared? Can the business logic evolve as many team members contribute?

**Teams shouldn't have to puzzle through storing, sharing, and understanding which tables rely on which others. Business logic should be reusable and referenceable in subsequent work.**

In Prophecy and dbt, **Data Models** are SQL statements that build a single table or view - and allow for better management.

Data models incorporate the step-by-step logic to transform raw data to some intermediate or final state. Each model, stored as a `.sql` file on Git, is managed as software - with best practices like peer review and version control. The model can include Common Table Expressions (CTEs) and [refer](https://docs.getdbt.com/docs/build/sql-models#building-dependencies-between-models) to other models. Importantly, SQL statements with Prophecy and dbt are re-usable. When a model is updated, any reference to that model is likewise updated.

Here we explore how to use models in Prophecy, adopting the concept and vernacular from dbt Core™. Later, we'll see how to import dbt projects to Prophecy, or you can create a new project and models using Prophecy's drag-and-drop interface. After you've read this page, get hands on with models in the [SQL with Databricks](docs/getting-started/sql-with-databricks.md#44-Develop-your-first-model) getting-started guide.

### Using Models in Prophecy

Prophecy displays models using a lineage view, a visual view, and a code view.

![lineage-view](./img/models/lineage-view.png)
Open the HelloWorld_SQL project. See the **(1)Lineage** for the HelloWorld_SQL project pictured above. Each **(2)Project** contains folders of models, [seeds](docs/getting-started/sql-with-databricks.md#431-create-seeds), and sources. The Lineage provides a high level view of the project's **(3)Models** with **(4)dependencies** displayed from left to right. The `customers` model depends on seed `raw_customers` and models `stg_orders` and `stg_payments`. Click to open the `customers` model as shown in the figure below.

![model-view](./img/models/model-view.png)
Now we can explore the `customers` model more closely. The model is easy to understand with interchangable **(1)visual** and **(2)code** views. The visual view depicts each small step needed to move from the referenced tables/seeds/models to the final `customers` model. Each transformation step or Common Table Expression (CTE) is called a **(3)Gem** in Prophecy.

The **(4)`Aggregate`** step is represented visually as an `Aggregate` gem and in code as the highlighted CTE code fragment. By popular demand, the visual and code formats are editable interchangeably. Visual developers and SQL coders can work together in the same project, and both types of edits are incorporated to the project when [committed and merged](/docs/concepts/git/git.md).

### Models vs pipelines

If you’re already familiar with Prophecy pipelines, models are very similar. The major difference is that each pipeline can create an arbitrary number of outputs, whereas a model only defines one output. Where pipelines can exist only within Spark-based projects, models can exist within SQL-based ones.

Like pipelines, models can be configured, committed and released to [Git](/docs/concepts/git/git.md), according to software engineering best practices.

### dbt Core™ models

Prophecy uses dbt Core™ as the underlying build system for SQL projects. Therefore, our concept of a model is equivalent to dbt’s. You can read more about [dbt’s models and their properties](https://docs.getdbt.com/docs/build/models). dbt supports two primary types of models: SQL-based and Python-based. Today, Prophecy’s visual interface supports SQL models only. If you’d like to define Python models you can still use them within the code interface.

## What's next?

Visit the [SQL](/SQL) documentation to learn more. You can also get started with [SQL on Databricks](docs/getting-started/sql-with-databricks.md) or [Snowflake](docs/getting-started/sql-with-snowflake.md).
