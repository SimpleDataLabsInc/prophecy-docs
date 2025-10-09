---
title: Databricks Jobs
description: Databricks jobs
id: databricks-jobs
slug: /engineers/databricks-jobs
tags:
  - jobs
  - deployment
  - scheduling
---

Prophecy provides a visual orchestration layer over native Databricks Jobs.
A Prophecy Databricks job corresponds to a Databricks job definition under the hood, enabling you to add and link pipelines, scripts, and conditional logic to a job. Jobs run in Databricks.

## Schedule a Databricks job

You can create a job from three places:

- To schedule from a pipeline, click the **Schedule** button at the top of the visual canvas. (You can still add other pipelines to the job.)
- To schedule a job from within a project, click **+** to the right of **Jobs** in the left sidebar.
- To schedule a job for any project, click the **Create Entity** button in the left navigation bar. Hover over the **Job** tile and select **Create**.

When you create a new job, you're asked for the following details:

| Field Name                | Description                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project                   | Which [Project](/projects) to create the job in. This controls who has access to the job, groups jobs together for lineage, and allows you to use pipelines already published within that project. Added automatically when you schedule a job from a pipeline or from within a project.                                                                      |
| Branch                    | Which Git branch to use when developing this job. When you schedule a job from a pipeline or project, the job uses the current branch,                                                                                                                                                                                                                        |
| Name                      | Unique name for job.                                                                                                                                                                                                                                                                                                                                          |
| Scheduler                 | The underlying engine that's going to execute your job. We recommend using Databricks.                                                                                                                                                                                                                                                                        |
| Fabric                    | The [execution fabric](/engineers/fabrics) to which the job is going to be deployed.                                                                                                                                                                                                                                                                          |
| Job Size                  | The [default size](docs/getting-started/concepts/fabrics.md) of the cluster that's going to be created for the job to run.                                                                                                                                                                                                                                    |
| Schedule Interval         | Defines how often your job is going to run. The interval is defined using the [Quartz format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html). For example: `0 0/5 * * * ?` means "runs every 5 minutes," while `0 0 12 * * ?` means "runs daily at noon UTC." You can click on the clock icon to select the interval. |
| Description               | Optional description of job.                                                                                                                                                                                                                                                                                                                                  |
| Alerts email              | Comma separated list of emails that are going to receive notifications on specific job status events (start, failure, or success).                                                                                                                                                                                                                            |
| Per Gem Timeout           | Timeout for each gem in job pipeline.                                                                                                                                                                                                                                                                                                                         |
| Number of retries per gem | Number of retries for each gem in job pipeline.                                                                                                                                                                                                                                                                                                               |

![Example Configuration](img/databricks-job-config-example.png)

## Build the job

Once you add a job, Prophecy opens a visual canvas that lets you add and connect gems for the job.

Seven gem types are available when defining Databricks jobs:

| Gem Type          | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Pipeline          | Runs a Prophecy pipeline                     |
| Script            | Runs a custom Python or shell script         |
| Notebook          | Runs a Databricks notebook                   |
| If/Else           | Branches job execution conditionally         |
| RunJob            | Runs another Prophecy job                    |
| Model             | Deploys or scores a model                    |
| Delta Live Tables | Runs a Databricks Delta Live Tables pipeline |

### Pipeline Gem

The Pipeline gem triggers a Spark pipeline developed in Prophecy.

To configure a Pipeline gem:

1. Add and open the gem.
2. Give the pipeline a name.
3. If desired, add a **run condition** for the pipeline:
   - All succeeded
   - At least one succeeded
   - None failed
   - All done
   - At least one failed
4. Select **Pipeline Config** or use default. If you select a custom pipeline config, you can set values in the **Config** tab.
5. Click **Save**.

![Pipeline configuration](img/databricks-jobs-pipeline-config.png)

Settings for the pipeline component can be inherited from overall job configuration or can be set inside the component itself.

### Script Gem

You can use the Script gem to write any ad-hoc code.

The settings for the script component can be inherited from overall job configuration or can be set inside the component itself.

### Notebook Gem

You can include notebooks that you have created in Databricks in a job. (Prophecy does not support creating notebooks directly in Prophecy).

1. Add **Notebook** gem.

1. Enter **Notebook Path** in gem. Make sure the user running the pipeline has Databricks permissions for this location.

### If Else Gem

The If Else gem lets you branch the job and set a condition for running either branch.

If the given condition is satisfied, the Databricks job continues with the upper branch. If the given condition is not satisfied, the Databricks job continues with the lower branch.

### RunJob Gem

The RunJob gem lets you run another job in your workspace.

1. Add **RunJob** gem.
2. Either select job from the dropdown menu or enter the job id manually.

### Model Gem

The Model gem lets you add a model to the job.

### Delta Live Tables Pipeline Gem

The Delta Live Tables Pipeline gem lets you run data pipelines previously created in Databricks.

## Run the job

When you are satisfied with the job's configuration, you can run the job

To run the job

1. Make sure you are connected to a fabric.

2. Click the run button in the lower right-hand corner of the job configuration page.

If the job fails, Prophecy displays an error message indicating what went wrong. If the job succeeds, Prophecy displays a page indicating that all stages have succeeded.

While the job runs, Prophecy displays a **Job Status: Running** message with a **Detail** button. To view a job's progress, click the **Detail** button. A modal opens showing the job as a series of stages. You can view details on a stage by clicking **+** to the right of the stage. If the job fails, Prophecy displays an error message for the stage at which the job failed.

![Jobs Montitoring Modal](/Users/drewstrombeck/prophecy-docs/docs/Orchestration/img/databricks-job-monitoring.png)

## Configure cluster for job gem to support multi cluster

By default, all Jobs gems run in the same cluster. You can configure clusters for individual gems.

To do so:

1. Select the gem by clicking its border.
2. Click **Configure a Cluster**.
3. Once cluster is created, select cluster from dropdown menu.
4. Choose **Multi** at the top of the visual canvas.

   When the job runs, each node runs in its own independent cluster. All clusters are the same size as the cluster selected for the job.

## Deployment Modes

To deploy a job on Databricks, we need to release the project from Prophecy UI as shown in example below. As soon as the project is released, the job will appear in the Databricks jobs page.

:::info

Make sure to enable the job before creating a Release. If not enabled, the job will not run.

<!--need to figure this out too--I don't think this is necessary-->

If a job's selected fabric is changed it will create a separate Databricks job definition. The previous job (with the previous fabric) will be paused automatically and the new version will be scheduled.
:::

## Guides

1. [How to trigger a job from another job?](multi-jobs-trigger)
<!--I think we can do this now without code?-->
2. [How to design a reliable CI/CD process?](/engineers/ci-cd)
