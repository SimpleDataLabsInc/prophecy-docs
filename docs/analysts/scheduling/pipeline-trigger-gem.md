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

The Pipeline gem has the following limitations:

- It can trigger only pipelines within the same project.
- The Monitoring page doesn't show the parent pipeline that triggered a run using the Pipeline gem.

## Input and Output

The Pipeline gem only accepts `0` or `1` inputs and will always produce `1` output.

| Port    | Description                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------------------------- |
| **in0** | Optional input dataset. Each row triggers a separate pipeline run. Can include parameter values and status columns. |
| **out** | Metadata for each triggered pipeline run. The Pipeline gem returns one row per triggered run.                       |

### Input behavior

- When no input is present: The child pipeline runs once per Pipeline gem execution
- When an input dataset is present:

  - Each row in the dataset triggers a separate run of the child pipeline per Pipeline gem execution
  - Include additional columns to accomplish tasks such as passing parameter values into each pipeline run
  - If present, this value of the `status` column used to evaluate the trigger condition for each run

### Output behavior

- When no input is present: Pipeline gem triggers the child pipeline once, so the output dataset contains a single row
- When an input dataset is present: Number of output rows always matches the number of input rows

### Output schema

Each row in the output table represents a pipeline run triggered from the Pipeline gem. The output schema provides you will the following information for each pipeline run.

| Column          | Type         | Description                                                                 |
| --------------- | ------------ | --------------------------------------------------------------------------- |
| `status`        | String       | Final status of the triggered pipeline: `success`, `failure`, or `skipped`. |
| `pipelineRunID` | String       | Unique ID of the triggered pipeline run.                                    |
| `startTime`     | Timestamp    | Time when the triggered pipeline started.                                   |
| `endTime`       | Timestamp    | Time when the triggered pipeline finished.                                  |
| `error`         | String       | Error message, if any.                                                      |
| `logs`          | String Array | Log messages from the triggered pipeline.                                   |

:::note
A pipeline run is marked as `skipped` when its input row does not meet the trigger condition set in the gem parameters.
:::

## Parameters

The Pipeline gem accepts the following parameters.

| Parameter                           | Description                                                                                                                                                                                                                                                                                   |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pipeline to run                     | Select a pipeline from the dropdown of pipelines inside the project.                                                                                                                                                                                                                          |
| Trigger only if                     | Choose a [condition](#trigger-conditions) to control when the trigger fires. Based on the `status` column from upstream gems or pipelines. If no input `status` is present, pipeline will always be triggered. If the condition is not met for a pipeline input row, the pipeline is skipped. |
| Maximum number of pipeline triggers | Set a maximum number of time the child pipeline runs per Pipeline gem run. Max is 10,000.                                                                                                                                                                                                     |
| Set pipeline parameters             | Pass constants, expressions, or column values as parameters. If a parameter is not specified, the triggered pipeline uses its default value.                                                                                                                                                  |

:::tip
Use multiple input rows to launch sequential runs of the same pipeline per Pipeline gem execution with different sets of parameter values.
:::

### Trigger conditions

You can define the pipeline trigger condition by choosing from the following list.

- **Always run** (default): Executes the pipeline unconditionally, regardless of input status (or absence of status).
- **All pipelines succeeded**: Executes only when every input row has a `success` status.
- **All pipelines failed**: Executes only when every input row has a `failure` status.
- **All pipelines finished**: Executes after all input pipelines complete, regardless of their success or failure.
- **Any pipeline succeeded**: Executes if at least one input row has a `success` status.
- **Any pipeline failed**: Executes if at least one input row has a `failure` status.

## Execution behavior

Prophecy supports the following execution behaviors when running a Pipeline gem.

- **Sequential triggering**: Pipeline gems wait for upstream pipelines to finish when multiple Pipeline gems are configured sequentially or are configured with different [gem phases](/analysts/gems/#gem-phase).
- **Parallel triggering**: The gem supports parallel execution when separate pipeline branches have the same gem phase.
- **Recursive triggers**: Recursive execution is supported. If a triggered pipeline contains another Pipeline Trigger gem, it will execute as expected.
