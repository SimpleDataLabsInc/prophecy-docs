---
title: Pipeline execution
id: execution
slug: /analysts/pipeline-execution
description: Run a set of defined operations in a pipeline
tags: []
---

To run a SQL project pipeline, you need to define **where** it will be executed (computed) via a [Prophecy fabric](/administration/fabrics/prophecy-fabrics/), which encompasses:

- **Prophecy Automate**: Handles the flow of data in and out of the pipeline. To learn more, jump to [external sources](#external-sources).
- **SQL warehouse**: Executes the data transformations using dbt framework.

In other words, Prophecy will use both of these runtimes to perform execution. There are different scenarios where execution occurs: during interactive or scheduled executions.

## Interactive execution

Interactive execution in Prophecy allows you to run your pipeline in the pipeline canvas and preview data transformations at every step. This helps you understand and validate your data transformations during development.

When you run your pipeline interactively, **data samples** are generated to let you preview the outputs of your gems. This can be helpful during development and debugging. You can produce this data sample in two ways:

- Run the entire pipeline using the **play** button on the pipeline canvas.
- Execute the pipeline up to and including a particular gem using the **play** button on that gem.

When you click on a data sample, you load the data and open the [Data Explorer](docs/analysts/development/data-explorer.md). The Data Explorer lets you sort, filter, and search through the gem output.

## Scheduled execution

Prophecy lets you automate your data pipelines by scheduling executions at predefined intervals. For each pipeline in a project, you can configure independent schedules that specify how often a pipeline runs and whether alerts should be sent during the automated runs. The execution environment of the scheduled run is determined during project publication.

To learn more about deploying projects to specific execution environments, visit [Versioning](docs/analysts/version-control/version-control.md) and [Scheduling](docs/analysts/scheduling.md).

## External sources

When you read from and write to external sources, your pipeline runs steps behind the scenes to make the data compatible with SQL. Because SQL requires [tables](/analysts/source-target/#tables) to perform transformations, Prophecy Automate will create temporary tables in your SQL warehouse throughout the pipeline when necessary. These tables allow SQL to process external data and transform it.

**You will not see these tables appear in the canvas during pipeline runs, and the tables will be deleted from the SQL warehouse after the pipeline run completes.**
