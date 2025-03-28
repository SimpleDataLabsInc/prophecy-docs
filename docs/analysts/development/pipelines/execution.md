---
title: Pipeline execution
id: execution
slug: /analysts/pipeline-execution
description: Run a set of defined operations in a pipeline
tags: []
---

While SQL projects leverage SQL for core data transformations, pipeline execution is a hybrid process. [Prophecy fabrics](/administration/fabrics/prophecy-fabrics/) make it possible for [Prophecy Automate](docs/administration/architecture.md) to manage the overall pipeline flow and utilize the SQL warehouse for data processing tasks. This page describes how Prophecy runs pipelines in different execution scenarios.

## Converged execution

Prophecy uses different engines to perform execution.

- **SQL warehouse**: Your own external SQL environment used to store tables, create tables, and execute queries.
- **Prophecy Automate**: Runtime that handles orchestration and the flow of external data from systems like Salesforce and Tableau in and out of the pipeline. To learn more, jump to [external sources](#external-sources).

## Interactive execution

Prophecy lets you interactively run your pipeline in the pipeline canvas and preview data transformations at every step. This helps you understand and validate your data transformations during development. There are two ways to start an interactive run:

- Run the entire pipeline using the **play** button on the pipeline canvas.
- Execute the pipeline up to and including a particular gem using the **play** button on that gem.

After you run a pipeline, data samples will appear between nodes in your pipeline. When you click on a data sample, Prophecy loads the data and opens the [Data Explorer](docs/analysts/development/data-explorer.md). The Data Explorer lets you sort, filter, and search through the gem output.

## Scheduled execution

Scheduling allows you to automate your data pipelines at predefined intervals. For each pipeline in your project, you can configure independent schedules that specify how often a pipeline runs and whether to send alerts during the automated runs. The execution environment of the scheduled run is determined during project publication.

To learn more about deploying projects to specific execution environments, see [Versioning](/analysts/versioning) and [Scheduling](/analysts/scheduling).

## External sources

When you read from and write to external sources, your pipeline runs steps behind the scenes to make the data compatible with SQL. Because SQL requires [tables](/analysts/source-target/#tables) to perform transformations, Prophecy Automate will create temporary tables in your SQL warehouse throughout the pipeline when necessary. These tables allow SQL to process external data and transform it.

:::caution Note
You will not see these tables appear in the canvas during pipeline runs, and the tables will be deleted from the SQL warehouse after the pipeline run completes.
:::
