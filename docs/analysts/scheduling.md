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

| Parameter              | Description                                                                       | Default                                   |
| ---------------------- | --------------------------------------------------------------------------------- | ----------------------------------------- |
| Frequency              | How often the pipeline will run                                                   | Daily                                     |
| Repeat at              | When the pipeline run will repeat                                                 | Varies depending on your chosen frequency |
| Timezone               | The timezone of **Repeat at** time                                                | The timezone where you are located        |
| Alerts on the full job | Enable to send an email on the start, success, and/or failure of the pipeline run | Disabled                                  |

## Schedule pipeline

To schedule a pipeline to automatically run at a certain frequency:

1. Open the pipeline to schedule in the project editor.
1. Expand the **Options** (ellipses) menu in the project header.
1. Click **Schedule**.
1. Fill in the required parameters.
1. Click **Schedule** to save the schedule.

:::info
Schedules are created per pipeline. In other words, scheduled pipeline runs are independently configured.
:::

## Enable a schedule

To enable scheduled execution of a pipeline, the pipeline's parent project must be [published](/analysts/project-publication). Configuring a schedule alone is not sufficient—scheduled runs will not occur unless the project is published and deployed to a fabric.

Project publication performs the following key functions that directly impact scheduling.

- **Defines the execution environment (fabric)**

  When you publish a project, you select one or more fabrics that serve as the execution environments for deployed projects. For each selected fabric, a separate deployment is created. Pipeline schedules are only enabled for deployed projects.

  :::caution
  If you do not select any fabrics during project publication, no deployments will be created. As a result, no scheduled executions will occur, even if a schedule has been configured.
  :::

- **Determines the pipeline version for execution**

  Publication determines what version of the pipeline will run during a scheduled execution. When a new project version is published, scheduled executions for the associated fabric(s) automatically begin using the updated pipeline version. Each deployment is isolated per fabric—publishing a new version to one fabric does not update deployments on other fabrics.

## Monitor scheduled pipelines

You and you team members might have many scheduled pipelines in your Prophecy environment. To see a list of deployed projects, scheduled pipelines, and pipeline run history, open the [Monitoring](/analysts/monitoring) page in Prophecy.

## External schedulers

By default, SQL projects leverage a Prophecy-native scheduler to automate pipeline runs. While we recommend using the Prophecy scheduler, you can also use external schedulers like Databricks Jobs or Apache Airflow if preferred. Projects that leverage the [Simple Git Storage Model](/analysts/versioning) are not compatible with external schedulers. To learn more about external schedulers, visit [Orchestration](docs/Orchestration/Orchestration.md).
