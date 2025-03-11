---
title: Execution
id: execution
description: Run a set of defined operations in a pipeline
tags: []
---

In Prophecy, execution refers to running a set of defined operations in a model or pipeline. Pipelines in SQL projects can utilize a few resources for computation:

- **Prophecy Runtime**: handles the flow of data in and out of the pipeline.
- **SQL Warehouse**: executes the data transformations.

When you create a [Prophecy fabric](/administration/prophecy-fabrics/), you can choose which SQL warehouse to use for pipeline execution.

## Interactive execution

Running your pipeline during development can help you understand how your data is being transformed. For instance, when you configure a new gem in the pipeline, you might want to inspect its output. You can produce this data sample in two ways:

- Run the entire pipeline using the **play** button on the pipeline canvas.
- Execute the pipeline up to and including a particular gem using the **play** button on that gem.

When you click on an interim data sample, you load the data and open the [Data Explorer](docs/analysts/development/data-explorer.md). The Data Explorer lets you sort, filter, and search through the gem output.

## External sources

When you read from and write to external sources, certain steps happen in the backend during pipeline runs to make the data compatible with SQL. Because SQL requires [tables](/analysts/development/gems/source-target/#tables) to perform transformations, the Prophecy runtime will automatically create temporary tables in your SQL warehouse throughout the pipeline when necessary. These tables allow SQL to process external data and transform it.

**You will not see these tables appear in the canvas during pipeline runs, and the tables will be deleted from the SQL warehouse after the pipeline run completes.**
