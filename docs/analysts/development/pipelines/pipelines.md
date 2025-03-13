---
title: Pipelines
id: pipelines
description: Use pipelines in SQL projects
tags:
  - SQL
  - pipeline
  - analyst
---

SQL project pipelines utilize the Prophecy runtime and a connected SQL warehouse to perform data ingestion, transformation, and output. You can read and write data directly in your SQL warehouse, or you can read and write to external sources such as Tableau or Salesforce.

To view a list of pipelines in Prophecy, navigate to the **Metadata** page from the left sidebar.

## Creation

If you want to create a new pipeline, you can do so from the **Create Entity** page in the left sidebar. You can also create pipelines directly within the [Project Editor](/getting-started/concepts/project/#project-editor). The following table describes the parameters for pipeline creation.

## Project editor

When building your pipelines, it helps to be familiar with the project editor interface. The following table describes different areas of the project editor.

### Header

- Configs: pipeline parameters
- Pipeline options menu: settings and metadata
- Visual/Code toggle: When you switch to the code view, you will see your visually-developed pipeline compiled into code. All data transformations are converted into SQL queries that execute natively on your SQL warehouse.
- Version menu: save and publish your project

### Footer

- Diagnostics
- Runtime logs

### Sidebar

- Project tab: browse your pipelines and project components
- Environment tab: browse data from the different connections configured if your fabric.

### Canvas

Let's take a closer look at the pipeline canvas. The canvas includes:

- **Canvas**: space to add and connect gems.
- **Gem drawer**: toolbox that contains all available gems.
- **Run button**: click to [execute the pipeline interactively](/analysts/development/pipelines/execution/#interactive-execution).
- **Copilot**: AI assistant to help build your pipeline.
