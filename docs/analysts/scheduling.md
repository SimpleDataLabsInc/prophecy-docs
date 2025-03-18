---
title: Scheduling
id: scheduling
description: Schedule pipeline runs
tags: []
---

Prophecy lets you schedule and automate your data pipeline runs. Once you have developed a pipeline, you can run it at specific frequencies using Prophecy's native scheduler.

Schedules define when the pipeline will run and whether to send alerts about the pipeline run.

## Schedule pipeline

To schedule a pipeline to automatically run at a certain frequency:

1. Open the pipeline to schedule in the project editor.
1. Expand the **Options** (ellipses) menu in the project header.
1. Click **Schedule**.
1. Fill in the following parameters.
   - **Frequency:** How often the pipeline will run
   - **Repeat at:** The time that the pipeline will run
   - **Timezone:** The timezone of **Repeat at** time
   - **Alerts on the full job:** Enable to send an email on the start, success, and/or failure of the pipeline run
1. **Save** the schedule.

:::info
Schedules are created per pipeline. In other words, scheduled pipeline runs are independently configured.
:::

## Enable a schedule

Your schedule will not be enabled until you [publish](docs/analysts/development/version-control/version-control.md) your project. This activates a project deployment for the specific version you publish per fabric you publish to.

:::caution
Prophecy will not run schedules for pipelines in projects that have not been published.
:::

## Monitor scheduled pipelines

You and you team members might have many scheduled pipelines in your Prophecy environment. To see a list of deployed projects, scheduled pipelines, and pipeline run history, open the [Monitoring](docs/analysts/observability.md) page in Prophecy.
