---
title: PipelineTrigger gem
id: pipeline-trigger-gem
slug: /analysts/pipeline-trigger-gem
description: Start pipeline runs from a gem in the canvas
tags:
  - pipeline
  - trigger
  - gem
---

The PipelineTrigger gem allows you to launch another pipeline from within your current pipeline. It consumes input data, evaluates trigger conditions, optionally passes parameters to the downstream pipeline, and outputs metadata about the triggered run.

This is useful for building orchestrated workflows directly in the visual canvas. You’ll find the gem under the **Custom** category in the gem drawer. The gem only completes execution only after the triggered pipeline finishes running.

:::tip
You can create pipelines solely dedicated to pipeline orchestration using multiple instances of this gem. Clearly label your orchestration pipelines to differentiate them from standard data pipelines.
:::

## Limitations

- The PipelineTrigger gem can only trigger pipelines within the same project.
- The Run History in the Monitoring page does not show the parent pipeline that contains the PipelineTrigger gems that initiated them.

## Input and Output

The Pipeline Trigger gem accepts the following inputs and produces one output.

| Port    | Description                                                                                                                                                                                                                                                                                           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset. All upstream columns are passed through. You can optionally include a `status` column. Upstream gems must finish running before this gem runs. This means in there is a previous PipelineTrigger gem, the following gems will not run until the triggered pipeline finishes executing. |
| **out** | Output dataset containing metadata about the triggered pipeline run.                                                                                                                                                                                                                                  |

### Output schema

#### Top level fields

| Column        | Type                | Description                                                            |
| ------------- | ------------------- | ---------------------------------------------------------------------- |
| `status`      | `string`            | Final status of the triggered pipeline (`success` or `failure`).       |
| `started_at`  | `timestamp`         | Time when the triggered pipeline started.                              |
| `finished_at` | `timestamp`         | Time when the triggered pipeline finished.                             |
| `error`       | `string`            | Error message, if any.                                                 |
| `logs`        | `array<string>`     | Log messages from the triggered pipeline.                              |
| `reads`       | `array<object>`     | Read operations from the triggered pipeline. See nested fields below.  |
| `writes`      | `array<object>`     | Write operations from the triggered pipeline. See nested fields below. |
| `inputs`      | `object` (optional) | Object containing all original input columns.                          |
| `url`         | `string`            | URL to the monitoring page for the triggered pipeline run.             |

#### `reads` and `writes` nested fields

| Field           | Type     | Description                                           |
| --------------- | -------- | ----------------------------------------------------- |
| `gem_label`     | `string` | Name of the read/write gem.                           |
| `rows_read`     | `long`   | _(reads only)_ Number of rows read. _(optional)_      |
| `bytes_read`    | `long`   | _(reads only)_ Number of bytes read. _(optional)_     |
| `rows_written`  | `long`   | _(writes only)_ Number of rows written. _(optional)_  |
| `bytes_written` | `long`   | _(writes only)_ Number of bytes written. _(optional)_ |
| `table`         | `string` | Fully qualified table name. _(optional)_              |

## Parameters

The PipelineTrigger gem accepts the following parameters.

| Parameter               | Description                                                                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Pipeline to run         | Select a pipeline from the dropdown or reference a column containing the pipeline ID.                                                        |
| Trigger only if         | Define a [condition](#trigger-conditions) to control when the trigger fires. Based on the `status` column from upstream gems or pipelines.   |
| Set pipeline parameters | Pass constants, expressions, or column values as parameters. If a parameter is not specified, the triggered pipeline uses its default value. |

### Trigger conditions

- **Always run** (default): Trigger runs unconditionally.
- **All pipelines succeeded**: Triggers only if all upstream `status` values are `success`.
- **All pipelines failed**: Triggers only if all upstream `status` values are not `success`.
- **All pipelines finished**: Triggers once all upstream runs complete, regardless of status.
- **Any pipeline succeeded**: Triggers if at least one upstream run is `success`.
- **Any pipeline failed**: Triggers if at least one upstream run is not `success`.

## Execution behavior

- **Sequential triggering**: PipelineTrigger gems wait for upstream pipelines to finish only when multiple PipelineTrigger gems are configured sequentially. Without sequencing or gem phases, triggers run concurrently.
- **Parallel triggering**: The gem supports parallel execution parallel branches are part of the same phase.
- **Recursive triggers**: Recursive execution is supported. If a triggered pipeline contains another Pipeline Trigger gem, it will execute as expected.
