---
title: Pipelines
id: pipelines
description: Use pipelines in SQL projects
tags:
  - SQL
  - pipeline
  - analyst
---

Pipelines in SQL projects utilize the Prophecy runtime and a connected SQL warehouse to perform data ingestion, transformation, and output. You can build pipelines to read and write data to your SQL warehouse, or you can take it one step further and directly read from and write to external sources such as Tableau or Salesforce.

## Creation

If you want to create a new pipeline, you can do so from the **Create Entity** page in the left sidebar. You can also create pipelines directly within the [Project Editor](/getting-started/concepts/project/#project-editor). The following table describes the parameters for pipeline creation.

## Canvas

When you develop a pipeline, you do so from the [Project Editor](/getting-started/concepts/project/#project-editor). More specifically, you work inside the **Pipeline canvas**.

- **Canvas**: space to add and connect gems.
- **Gem drawer**: toolbox that contains all available gems.
- **Run button**: click to [execute the pipeline interactively](/analysts/development/execution/#interactive-execution).
- **Copilot**: AI assistant to help build your pipeline.

## Code view

When you switch to the code view, you will see your visually-developed pipeline compiled into code. All data transformations are converted into SQL queries that execute natively on your SQL warehouse.

## Parameters

If you want to create variables to use throughout your pipeline, you can configure **Pipeline Parameters**. Parameters let you define values or expressions that can be used to dynamically populate values during pipeline runs.

:::note
When you define parameters, variables will be automatically created in the SQL configuration.
:::

## Metadata

To view a list of pipelines in Prophecy, navigate to the **Metadata** page from the left sidebar. For more granular metadata, click into a pipeline. Pipeline metadata can also be accessed from the header of the [Project Editor](/getting-started/concepts/project/#project-editor).
