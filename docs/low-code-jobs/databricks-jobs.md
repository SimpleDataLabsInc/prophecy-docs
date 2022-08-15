---
sidebar_position: 1
title: Databricks Jobs
description: Databricks jobs
id: databricks-jobs
tags:
  - jobs
  - deployment
  - scheduling
---

Once you have developed a [Spark Pipeline](/concepts/Pipeline) using Prophecy, you will want to schedule it to run at
some frequency. To support this, Prophecy provides a low-code layer on top of Databricks Jobs
or [Airflow](/low-code-jobs/airflow) for an easy orchestration.

## Development

### Your first job

You can create a job from two places. If you're going to schedule only a single Pipeline, the easiest way to
build a job for it is to do it directly from the Pipeline editor screen. This way your job is automatically initialized
with the Pipeline you create it from.

![Databricks Job Creation From Pipeline](img/databricks-job-creation-from-Pipeline.png)

To do that, simply navigate to your Pipeline, and click on the Schedule button (1). That opens a modal that shows all
the jobs that refer to this job or allow you to create a completely new job from scratch. Upon clicking
Create New (2) you are redirected to the [job building page](/low-code-jobs/databricks-jobs#building-the-job).

![Databricks Job Creation](img/databricks-job-creation.png)

Alternatively, if you'd like to create a new job completely from scratch, you can do that directly from the entity
creation page (1). There you can choose the job tile (2) and that opens a similar modal where you can define your
job details (3).

Whenever, creating a new job you're asked for the following details:

| Field Name        | Description                                                                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project           | Which [project](/concepts/project) to create the Job in. This controls who has access to the Job, groups Jobs' together for lineage, and allows you to use Pipelines already published within that project.                                         |
| Branch            | Which Git branch to use when developing this Job.                                                                                                                                                                                                   |
| Name              | Unique job name.                                                                                                                                                                                                                                    |
| Scheduler         | The underlying engine that's going to execute your job. Databricks is recommended.                                                                                                                                                                  |
| Fabric            | The [execution fabric](/concepts/fabric) to which the job is going to be deployed.                                                                                                                                                                  |
| Job Size          | The [default size](/concepts/fabric#whats-in-a-fabric) of the cluster, that's going to be created for the job to run.                                                                                                                               |
| Schedule Interval | Defines how often your job is going to run. The interval is defined using the [Quartz format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html). You can click on the clock icon, to easily pick the interval. |
| Alerts email      | Comma separated list of emails, that are going to receive notifications on specific job status events (job start, failure, or success).                                                                                                             |

### Building the job

![Example Databricks Job](img/databricks-job-example.png)

Now that you've created your first job, you can start adding the Gems onto the canvas to run them, during the job run
time. To define dependencies between Gems, you can simply connect them, by dragging-and-dropping, the edges between
them.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4" title="Avro Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

When using Databricks Jobs there are two Gem types available:

#### Pipeline Gem

The Pipeline Gem triggers a Spark Pipeline developed in Prophecy.

![Pipeline Component](img/databricks-jobs-Pipeline-config.png)

Settings for Pipeline component can be inherited from overall job configuration or can be set inside the component itself.

#### Script Gem

Script Gem can be used to write any ad-hoc code.

![Script Component](img/databricks-jobs-script-config.png)

Settings for script component can be inherited from overall job configuration or can be set inside the component itself.

### Visual == Code

The visual graph created on the jobs page is automatically converted to code (JSON) behind the scenes, which is passed to Databricks j

![Code View](img/databricks-jobs-code-view.png)

## Configuration

![Example Configuration](img/databricks-job-config-example.png)

---

| Field Name                | Description                                                                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheduler                 | The underlying engine that's going to execute your job. Databricks is recommended.                                                                                                                                                                  |
| Fabric                    | The [execution fabric](/concepts/fabric) to which the job is going to be deployed.                                                                                                                                                                  |
| Cluster Size              | The [default size](/concepts/fabric#whats-in-a-fabric) of the cluster, that's going to be created for the job to run.                                                                                                                               |
| Cluster Mode              | Can be selected as `Single` (all Gems within job run on single cluster) or `Multi` (all Gems within job run on separate new cluster)                                                                                                                |
| Schedule Interval         | Defines how often your job is going to run. The interval is defined using the [Quartz format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html). You can click on the clock icon, to easily pick the interval. |
| Pipeline level Timeout    | Timeout at Pipeline level                                                                                                                                                                                                                           |
| Alerts Email for Pipeline | Comma separated list of emails, that are going to receive notifications on specific job status events (job start, failure, or success) for entire Pipeline.                                                                                         |
| Per Gem Timeout           | Timeout for each Gem in job Pipeline                                                                                                                                                                                                                |
| Number of retries per Gem | Number of retries for each Gem in job Pipeline                                                                                                                                                                                                      |
| Alerts Email per Gem      | Comma separated list of emails, that are going to receive notifications on specific job status events (job start, failure, or success) for each Gem in job Pipeline.                                                                                |

## Deployment

To deploy a job on Databricks, we need to release the project from Prophecy UI as shown in example below. As soon as the project is
released, the job would start appearing on Databricks jobs page as well.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726064-67e3df01-ba4c-431e-92e9-8bda92a19530.mp4" title="Job Deployment" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

---

:::info

1. Please ensure to enable the job before release on the job page for it to run on the specified schedule.
   If it is not enabled, then the job would get released but with paused state.
2. If fabric is changed in the job, then it would create a new job in the Databricks jobs page,
   but the job with older fabric would be paused automatically and the new job would be scheduled.
   :::

### Deployment modes

Currently, there are 2 type of cluster options available to deploy jobs:

#### Multi Job Cluster Mode

In this mode, each component of job would spawn a separate cluster of its own.

![Multi Job Cluster](img/databricks-jobs-multi-cluster-eg.png)

#### Single Job Cluster Mode

In this mode, each component of job would run on the same cluster.

:::info
To use single cluster mode, package name across each Pipeline in job should be unique.
This is done to ensure that the folder structure for pipelines does not overwrite one another.
Please refer below example, for steps on how to configure package name in Pipeline.
:::

---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726133-51bf76ec-31d7-4976-8d7d-68230c28e233.mp4" title="Single Cluster Mode" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

![Single Job Cluster](img/databricks-jobs-single-cluster-eg.png)

#### Fully Configurable Cluster Mode

**Coming Soon!!!**

## Monitoring

Prophecy provides monitoring page as shown in example below to review all the jobs that has been released for quick reference.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726121-d2b7c5c7-ec01-48b1-9764-781292940f53.mp4" title=Monitoring" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Guides

1. [How to trigger a job from another job?](/tutorials/low-code-jobs/multi-jobs-trigger)
2. [How to design a reliable CI/CD process?](/tutorials/low-code-jobs/reliable-ci-cd)
