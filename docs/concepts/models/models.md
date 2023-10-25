---
title: Models
id: model
description: SQL Models
sidebar_position: 5
tags:
  - concepts
  - models
  - sql
  - target
---

**Data modeling** refers to the shaping of your data from the raw state all the way to a transformed final state. Data engineers are typically responsible for building tables that represent source data, transforming the data and saving as intermediate tables/views, and building final tables that can be queried by a BI tool and drive decision making for an organization.

In Prophecy and dbt, **data models** are SQL select statements that represent the step-by-step logic to transform raw data to some intermediate or final state. These SQL select statements are stored in your Github repository project as `.sql` files. Each Model corresponds to a single table or view, aside from some advanced materialization cases.

Check out this getting started [guide](/docs/getting-started/getting-started-with-low-code-sql.md) for step-by-step instructions on working with low-code SQL in Prophecy. Here we focus specifically on Models.

### Using Models in Prophecy

Prophecy displays Models using the visual and code views; the `customers` model is shown in the figure below.
![models-overview](./img/models-overview.png)

Toggle to the code view to find the **(1)SQL select statement** for the `customers` model. The customers Model is stored inside the HelloWorld_SQL Project, in the `Models` directory, and has a `.sql` file extension. Typically, a Model corresponds to a single table or view. **(3)Here,** the `customers` model maps to the `customers` table; just click to `Config` to configure as a view.

Models contain data transformations which are expressed in **(4)both visual and code** formats. Here the `Join` step is represented visually as a `Join` Gem and in code as the highlighted statement. By popular demand, the visual and code formats are editable interchangeably, as illustrated [here.](/docs/low-code-sql/low-code-sql.md) Visual developers and SQL coders can work together in the same project, and both types of edits are incorporated to the project when committed and merged to the main branch. See [this page](/docs/metadata/git.md#how-to-commit-changes) to understand the commit and release process.

One model can **(5)refer** to another model; here the `customers` model refers to the `payments` model. The `payments` model defines a table as an earlier step in the data processing flow. Like Pipelines, Models can be **(6)run** using the play buttons to execute the entire model or execute upto a particular Gem. Click to open data previews. When the entire model is run, the table or view is materialized on the data warehouse.

### Models vs Pipelines

If you’re already familiar with Prophecy Pipelines, models are very similar. The major difference is that each Pipeline can create an arbitrary number of outputs, whereas a model only defines one output. Where Pipeline’s can exist only within Spark-based projects, models can exist within SQL-based ones.

Like Pipelines, Models can be configured, committed and released to [Git](/docs/metadata/git.md), according to software engineering best practices. More details on Model configuration coming soon!

### dbt Core™ models

Prophecy uses dbt Core™ as the underlying build system for SQL projects. Therefore, our concept of a model is equivalent to dbt’s. You can read more about dbt’s models and their properties [here.](https://docs.getdbt.com/docs/build/models) dbt supports two primary types of models: SQL-based and Python-based. Today, Prophecy’s visual interface supports SQL models only, however, Python support is coming out soon. If you’d like to define Python models you can still use them within the code interface.
