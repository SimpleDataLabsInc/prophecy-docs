---
title: Pipeline gem
id: pipeline-trigger-gem
slug: /analysts/pipeline-trigger-gem
description: Start pipeline runs from a gem in the canvas
tags:
  - pipeline
  - trigger
  - gem
---

The Pipeline gem allows you to launch another pipeline from within your current pipeline. It consumes input data, evaluates trigger conditions, optionally passes parameters to the downstream pipeline, and outputs metadata about the triggered run.

This is useful for building orchestrated workflows directly in the visual canvas. You’ll find the gem under the **Custom** category in the gem drawer. The gem only completes execution only after the triggered pipeline finishes running.

:::tip
You can create pipelines solely dedicated to pipeline orchestration using multiple instances of this gem. Clearly label your orchestration pipelines to differentiate them from standard data pipelines.
:::

## Limitations

- The Pipeline gem can only trigger pipelines within the same project.
- The Run History in the Monitoring page does not show the parent pipeline that contains the Pipeline gems that initiated them.

## Input and Output

The Pipeline gem accepts the following inputs and produces one output.

| Port    | Description                                                                                                                                                                                                                                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | (Optional) Accepts a single input dataset. Each row in the dataset triggers a separate run of the child pipeline. You can include columns to pass parameter values into each run. If a status column is present, it will be used to evaluate the trigger condition. If no input is connected, the downstream pipeline will run once per Pipeline gem execution. |
| **out** | Returns one row of metadata for each child pipeline run triggered by the Pipeline gem. If an input dataset is provided, the number of output rows matches the number of input rows. If there’s no input, the output contains a single row.                                                                                                                      |

:::tip
Use multiple input rows to launch parallel runs of the same pipeline with different parameter values.
:::

### Output schema

#### Top level fields

| Column        | Type                | Description                                                                                                                                |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `status`      | `string`            | Final status of the triggered pipeline: `success`, `failure`, or `skipped`. Skipped occurs when the pipeline trigger condition is not met. |
| `started_at`  | `timestamp`         | Time when the triggered pipeline started.                                                                                                  |
| `finished_at` | `timestamp`         | Time when the triggered pipeline finished.                                                                                                 |
| `error`       | `string`            | Error message, if any.                                                                                                                     |
| `logs`        | `array<string>`     | Log messages from the triggered pipeline.                                                                                                  |
| `inputs`      | `object` (optional) | Object containing all original input columns.                                                                                              |
| `url`         | `string`            | URL to the monitoring page for the triggered pipeline run.                                                                                 |

## Parameters

The Pipeline gem accepts the following parameters.

| Parameter               | Description                                                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pipeline to run         | Select a pipeline from the dropdown of pipelines inside the project.                                                                                                                                           |
| Trigger only if         | Choose a [condition](#trigger-conditions) to control when the trigger fires. Based on the `status` column from upstream gems or pipelines. If no input `status` is present, pipeline will always be triggered. |
| Maximum                 | Set a maximum number of time the child pipeline runs per Pipeline gem run. Max is 10,000.                                                                                                                      |
| Set pipeline parameters | Pass constants, expressions, or column values as parameters. If a parameter is not specified, the triggered pipeline uses its default value.                                                                   |

### Trigger conditions

- **Always run** (default): Trigger runs unconditionally.
- **All pipelines succeeded**: Triggers only if all rows in single input port `status` values are `success`.
- **All pipelines failed**: Triggers only if all rows in single input port `status` values are not `success`.
- **All pipelines finished**: Triggers once pipelines triggered from input pipeline complete, regardless of status.
- **Any pipeline succeeded**: Triggers if at least one row in single input port is status is `success`.
- **Any pipeline failed**: Triggers if at least one row in single input port is status is `failure`.

## Execution behavior

- **Sequential triggering**: Pipeline gems wait for upstream pipelines to finish only when multiple Pipeline gems are configured sequentially. Without sequencing or gem phases, triggers run concurrently.
- **Parallel triggering**: The gem supports parallel execution parallel branches are part of the same phase.
- **Recursive triggers**: Recursive execution is supported. If a triggered pipeline contains another Pipeline Trigger gem, it will execute as expected.
