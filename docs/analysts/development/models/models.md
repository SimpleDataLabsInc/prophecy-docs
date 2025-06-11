---
title: Models
id: models
slug: /engineers/models
description: SQL models define a single target table or view
sidebar_position: 2
tags:
  - concepts
  - Models
  - sql
  - target
---

Models transform data inside tables or views using SQL. Models follow the dbt build system and are ideal for in-warehouse transformations. You can develop the step-by-step logic of the data model visually with Prophecy gems. Alternatively, you can develop models directly in the code view, which is automatically synced with the visual view.

In Prophecy, each model is a SQL file stored in Git, allowing you to version, release, and reuse logic through packages.

## Prerequisites

To build models visually in Prophecy, you must:

- Create a SQL project using the [Normal Git Storage Model](/analysts/versioning).
- Attach to a SQL or Prophecy fabric.

If you are working on a project using a Simple Git Storage Model, you can still view and edit the code of [underlying models](/analysts/pipeline-execution#execution-environment) that drive data transformation. However, you cannot create or edit models visually.

:::note
Prophecy’s visual interface supports SQL models only. If you’d like to define Python models, you can still use them within the code interface.
:::

## Models vs pipelines

Models are data transformations that run exclusively on a SQL warehouse using dbt. Because of this, models follow dbt limitations (for example, each model can only define one output). Pipelines, on the other hand, can use a Spark engine (for Python or Scala projects) or Prophecy Automate (for SQL projects) for computation. Because of this, pipelines are more flexible in their capabilities.

:::tip
Models can be dropped into pipelines as data sources.
:::
