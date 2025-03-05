---
title: Interactive execution
id: interactive-execution
description: Run a pipeline interactively in the pipeline canvas
tags:
  - spark
  - interactive
  - development
---

When developing pipelines in Prophecy, you can run the pipeline interactively in the pipeline canvas. In other words, you can preview the output of your data transformations at every step in your pipeline.

## Interim data samples {#interims}

When you run a pipeline in the pipeline canvas, Prophecy generates **interim** data samples that let you preview the output of your data transformations. There are two ways to run a pipeline interactively:

- Run the entire pipeline using the **play** button on the pipeline canvas.
- Execute the pipeline up to and including a particular gem using the **play** button on that gem.

![Interactive run options](img/interactive-execution-play-options.png)

After you run your pipeline, the interims will appear between gems. These previews are temporarily cached. Learn more about how to navigate the interim data samples in [Data Explorer](docs/Spark/execution/data-explorer.md).

## Data sampling settings

Data sampling is enabled by default for interactive execution. However, you can change how data sampling works at the pipeline or fabric level.

### Pipeline settings

For each pipeline, you can enable, disable, or change interactive data sampling and job data sampling modes. For more information, visit our [pipeline settings](docs/Spark/pipeline-settings.md) documentation.

![Data and Job Sampling](img/interactive-execution-job-data-sampling.png)

### Fabric settings

In a fabric, you can enable or disable data sampling and override pipeline-level settings when a pipeline runs on that fabric. This option is available in the **Advanced** tab of a fabric. A common use case is preventing interim data generation in production pipelines.

![Create a new model test](./img/limit-data-preview-interims.png)

By default, only team admins can access the Advanced tab in a fabric. However, there are two flags you can set in your deployment to change this behavior:

- `ALLOW_FABRIC_ACCESS_CLUSTER_ADMIN`: Grants cluster admins full access to fabrics, even if they are not team admins.
- `DISALLOW_FABRIC_CODEDEPS_UPDATE_TEAM_ADMIN`: Prevents team admins from modifying the data sampling settings within a fabric.

## Execution information

Once you run a pipeline, there are several ways for you to better understand the execution.

| Callout | Information                                                    | Description                                                                                                             |
| ------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **1**   | Problems                                                       | Errors from your pipeline execution that will be shown in a dialog window, as well as in the canvas footer.             |
| **2**   | Runtime logs                                                   | The progress with timestamps of your pipeline runs and any errors.                                                      |
| **3**   | Execution code                                                 | The code Prophecy runs to execute your pipeline. You can copy and paste this code elsewhere for debugging.              |
| **4**   | Runtime metrics                                                | Various Spark metrics collected during runtime.                                                                         |
| **5**   | [Execution metrics](docs/Spark/execution/execution-metrics.md) | Metrics that can be found in the **Metadata** of a pipeline, or from the **Run History** button under the **...** menu. |

Use the image below to help you find the relevant information.

![Execution information](./img/run-info.png)

## Shell

Prophecy comes with an built-in interactive Spark shell that supports both Python and Scala. The shell is an easy way to quickly analyze data or test Spark commands.

![Interactive execution](./img/int_exc_1.png)

:::info
`Spark context` and `session` are available within the shell as variables `sc` and `spark` respectively.
:::
