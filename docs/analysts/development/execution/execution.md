---
title: Execution
id: execution
description: Run a set of defined operations in a pipeline
tags: []
---

In Prophecy, execution refers to running a set of defined operations in a model or pipeline.

## Fabrics

[Fabrics](docs/getting-started/concepts/fabrics.md) define the execution environment of your pipeline. This refers to where the computation happens. Projects for data analysts utilize [Prophecy fabrics](docs/administration/prophecy-fabrics) that combine the Prophecy engine and a SQL engine to run pipelines.

## Interactive execution

Running your pipeline during development can help you understand how your data is being transformed. For instance, when you configure a new gem in the pipeline, you might want to inspect its output. You can produce this data sample in two ways:

- Click the **play** button on the pipeline canvas to run the entire pipeline.
- Click the **play** button on a particular gem to run the pipeline **up to and including** that gem. This is useful for testing and debugging when you don't want to run the entire pipeline.

When you click on an interim data sample, you open the [Data Explorer](docs/analysts/development/execution/data-samples.md). The Data Explorer displays the data preview, the data profile, and the data diff of the sample.

:::note
By default, each gem that runs will produce an output data sample. To change this behavior, update the sampling settings in the pipeline settings.
:::

## Job execution

When you schedule a job, you must define where that job will run.
