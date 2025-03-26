---
title: Scheduling
id: scheduling
slug: /analysts/scheduling
description: Schedule pipeline runs
tags: []
---

Prophecy lets you schedule and automate your data pipeline runs. Once you have developed a pipeline, you can run it at specific frequencies using Prophecy's native scheduler.

Schedules define when the pipeline will run and whether to send alerts about the pipeline run.

## Parameters

The following table describes schedule parameters for a pipeline.

| Parameter              | Description                                                                       | Default                            |
| ---------------------- | --------------------------------------------------------------------------------- | ---------------------------------- |
| Frequency              | How often the pipeline will run                                                   | Daily                              |
| Repeat at              | The time that the pipeline will run                                               | 2:00 AM                            |
| Timezone               | The timezone of **Repeat at** time                                                | The timezone where you are located |
| Alerts on the full job | Enable to send an email on the start, success, and/or failure of the pipeline run | Disabled                           |

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

A pipeline will not execute on a schedule until its parent project is published. This is because project [publication](/analysts/project-publication) determines:

- **The execution environment (fabric):** The pipeline runs on the fabric selected during publication. If multiple fabrics are chosen, separate schedules are created, and the pipeline will execute once per fabric for each scheduled run.
- **The pipeline version:** Scheduled executions always run the version of the pipeline associated with the most recent project version published to the fabric. If a new project version is published to a fabric, the schedule for that fabric will automatically use the updated pipeline version.

If a project is not published or deployed, **scheduled execution will not occur** even if a schedule has been configured.

## Monitor scheduled pipelines

You and you team members might have many scheduled pipelines in your Prophecy environment. To see a list of deployed projects, scheduled pipelines, and pipeline run history, open the [Monitoring](docs/analysts/observability.md) page in Prophecy.

## External schedulers

By default, SQL projects leverage a Prophecy-native scheduler to automate pipeline runs. While we recommend using the Prophecy scheduler, you can also use external schedulers like Databricks Jobs or Apache Airflow if preferred. To learn more about external schedulers, visit [Orchestration](docs/Orchestration/Orchestration.md).
