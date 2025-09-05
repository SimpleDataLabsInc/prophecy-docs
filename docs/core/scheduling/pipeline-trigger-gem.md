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

The Pipeline gem allows you to run another pipeline from within your current pipeline. It supports conditional triggering, parameter passing, and metadata return for each run. Each Pipeline gem execution can trigger the target pipeline multiple times, with each instance running sequentially. The gem completes only after all triggered runs finish.

This is useful for building orchestrated workflows directly in the visual canvas. You’ll find the gem under the **Custom** category in the gem drawer.

:::tip
You can create pipelines solely dedicated to pipeline orchestration using multiple instances of this gem. Clearly label your orchestration pipelines to differentiate them from standard data pipelines.
:::

## Limitations

The Pipeline gem has the following limitations:

- It can trigger only pipelines within the same project.
- The Monitoring page doesn't show the parent pipeline that triggered a run using the Pipeline gem.

## Input and Output

The following table describes what the Pipeline gem expects as input, and what it will produce as output.

| Port    | Description                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Optional input dataset that may include a `status` column and additional columns. <br/>Each row of the input triggers a separate pipeline run per Pipeline gem execution. |
| **out** | One output dataset that contains the metadata for each triggered pipeline run. <br/>The Pipeline gem returns one row per triggered run.                                   |

When no input is connected:

- The Pipeline gem triggers the child pipeline once.
- The output contains a single row of metadata for that run.

When an input dataset is connected:

- The `status` column, if present, is used to evaluate trigger conditions.
- If the trigger condition is met, the Pipeline gem triggers the child pipeline once per each input row.
- Additional columns can be used to pass parameter values into each run.
- The output contains one row of metadata per input row.

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
Pipelines are `skipped` when the input does not meet the trigger condition set in the gem.
:::

## Parameters

The Pipeline gem accepts the following parameters.

| Parameter                           | Description                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Pipeline to run                     | Select a pipeline to trigger in the list of pipelines from the same project.                                                                                                                                                                                                               |
| Trigger only if                     | Choose a [condition](#trigger-conditions) to control when the trigger fires based on the `status` column of the input dataset (if present). If the condition is not met, the Pipeline gem runs but no pipelines are triggered. The output will show that all pipeline runs were `skipped`. |
| Maximum number of pipeline triggers | Set a maximum number of time the child pipeline runs per Pipeline gem execution. Maximum is `10,000`.                                                                                                                                                                                      |
| Set pipeline parameters             | Pass constants, expressions, or column values as parameters to the child pipeline. If a parameter is not specified, the triggered pipeline uses the default parameter value.                                                                                                               |

:::tip
Use multiple input rows to launch runs of the same pipeline with different sets of parameter values.
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

- **Sequential execution**: When one Pipeline gem triggers a target pipeline multiple times, pipeline instances run sequentially. The Pipeline gem does not finish running until all instances of the target pipeline finish running.

- **Sequential triggering**: Pipeline gems wait for upstream pipelines to finish running when multiple Pipeline gems are configured sequentially or are configured with sequential [gem phases](/analysts/gems/#gem-phase).

- **Parallel triggering**: The gem supports parallel execution when separate pipeline branches have the same gem phase.

- **Recursive triggers**: Recursive execution is supported. If a triggered pipeline contains another Pipeline gem, it will execute as expected.
