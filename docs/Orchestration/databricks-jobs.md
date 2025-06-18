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

Once you have developed a [Spark pipeline](/engineers/pipelines) using Prophecy, you will want to schedule it to run at
some frequency. To support this, Prophecy provides a visual layer on top of Databricks jobs for an easy orchestration.

## Development

### Your first job

You can create a job from two places. If you're going to schedule only a single pipeline, the easiest way to
build a job for it is to do it directly from the pipeline editor screen. This way your job is automatically initialized
with the pipeline you create it from.

![Databricks job Creation From pipeline](img/databricks-job-creation-from-pipeline.png)

To do that, simply navigate to your pipeline, and click on the Schedule button (1). That opens a modal that shows all
the jobs that refer to this job or allow you to create a completely new job from scratch. Upon clicking
Create New (2) you are redirected to the [job building page](/engineers/databricks-jobs/#building-the-job).

![Databricks Job Creation](img/databricks-job-creation.png)

Alternatively, if you'd like to create a new job completely from scratch, you can do that directly from the entity
creation page (1). There you can choose the job tile (2) and that opens a similar modal where you can define your
job details (3).

Whenever, creating a new job you're asked for the following details:

| Field Name        | Description                                                                                                                                                                                                                                   |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project           | Which [Project](/projects) to create the job in. This controls who has access to the job, groups jobs together for lineage, and allows you to use pipelines already published within that project.                                            |
| Branch            | Which Git branch to use when developing this job.                                                                                                                                                                                             |
| Name              | Unique job name.                                                                                                                                                                                                                              |
| Scheduler         | The underlying engine that's going to execute your job. Databricks is recommended.                                                                                                                                                            |
| Fabric            | The [execution fabric](docs/getting-started/concepts/fabrics.md) to which the job is going to be deployed.                                                                                                                                    |
| Job Size          | The [default size](docs/getting-started/concepts/fabrics.md) of the cluster that's going to be created for the job to run.                                                                                                                    |
| Schedule Interval | Defines how often your job is going to run. The interval is defined using the [Quartz format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html). You can click on the clock icon to select the interval. |
| Alerts email      | Comma separated list of emails that are going to receive notifications on specific job status events (start, failure, or success).                                                                                                            |

### Building the job

![Example Databricks job](img/databricks-job-example.png)

Now that you've created your first job, you can start adding gems to the canvas to define which pipelines will
be run during the job. To define dependencies between the pipelines within the job you can simply connect them
by dragging-and-dropping the edges between gems.

Two gem types are available when defining Databricks jobs:

#### Pipeline Gem

The Pipeline gem triggers a Spark pipeline developed in Prophecy.

![Pipeline Component](img/databricks-jobs-pipeline-config.png)

Settings for pipeline component can be inherited from overall job configuration or can be set inside the component itself.

#### Script Gem

Script gem can be used to write any ad-hoc code.

![Script Component](img/databricks-jobs-script-config.png)

Settings for script component can be inherited from overall job configuration or can be set inside the component itself.

## Visual == Code

The visual graph created on the jobs page is automatically converted to code (JSON) in the backend which gets committed to Git.

![Code View](img/databricks-jobs-code-view.png)

## Job Configuration

![Example Configuration](img/databricks-job-config-example.png)

---

| Field Name                | Description                                                                                                                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheduler                 | The underlying engine that's going to execute your job. Databricks is recommended.                                                                                                                                                            |
| Fabric                    | The [execution fabric](docs/getting-started/concepts/fabrics.md) to which the job is going to be deployed.                                                                                                                                    |
| Cluster Size              | The [default size](docs/getting-started/concepts/fabrics.md) of the cluster that's going to be created for the job to run.                                                                                                                    |
| Cluster Mode              | Can be selected as `Single` (all gems within the job re-use the same Cluster) or `Multi` (all gems within the job run on a separate new cluster)                                                                                              |
| Schedule Interval         | Defines how often your job is going to run. The interval is defined using the [Quartz format](http://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html). You can click on the clock icon to select the interval. |
| Pipeline level Timeout    | Timeout at pipeline level                                                                                                                                                                                                                     |
| Alerts Email for pipeline | Comma separated list of emails, that are going to receive notifications on specific job status events (job start, failure, or success) for entire pipeline.                                                                                   |
| Per Gem Timeout           | Timeout for each gem in job pipeline                                                                                                                                                                                                          |
| Number of retries per gem | Number of retries for each gem in job pipeline                                                                                                                                                                                                |
| Alerts Email per gem      | Comma separated list of emails that are going to receive notifications on specific job status events (start, failure, or success) for each gem in job pipeline.                                                                               |

To change the job name itself, go to Prophecy's metadata page. Locate the job within a project, and click the pencil icon.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/hlqqxqyq87?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Deployment Modes

To deploy a job on Databricks, we need to release the project from Prophecy UI as shown in example below. As soon as the project is
released, the job would start appearing on Databricks jobs page as well.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726064-67e3df01-ba4c-431e-92e9-8bda92a19530.mp4" title="Job Deployment" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

---

:::info

Make sure to enable the job before creating a Release. If it is not enabled the job will not run on the specified schedule.

If a job's selected fabric is changed it will create a separate Databricks job definition. The previous job (with the previous fabric) will be paused automatically and the new version will be scheduled.
:::

Prophecy supports two different job deployment models. Each has different impacts on job cost and parallelism.

### Multi Job Cluster Mode

In this mode, each component of job will spawn a separate cluster of its own.

Here's how the Databricks UI looks for Prophecy's Multi Cluster Mode.

![Multi Job Cluster](img/databricks-jobs-multi-cluster-eg.png)

### Single Job Cluster Mode

In this mode, each component of job will run on the same cluster.

:::info
To use single cluster mode the package name across each pipeline in job should be unique.
This is done to ensure that the folder structure for one pipeline does not overwrite another.
Please refer to the steps below in continuation to our earlier [Example](databricks-jobs#deployment-modes) on how to configure package name in pipeline.
:::

---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726133-51bf76ec-31d7-4976-8d7d-68230c28e233.mp4" title="Single Cluster Mode" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

Here's how the Databricks UI looks for Prophecy's Single Cluster Mode.

![Single Job Cluster](img/databricks-jobs-single-cluster-eg.png)

## Job Monitoring

Prophecy provides monitoring page which shows the status (enable/disable) of all the jobs deployed via Prophecy and
status of historic/current runs (success/failure/in-progress) for quick reference.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/184726121-d2b7c5c7-ec01-48b1-9764-781292940f53.mp4" title="Monitoring" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Guides

1. [How to trigger a job from another job?](multi-jobs-trigger)
2. [How to design a reliable CI/CD process?](/engineers/ci-cd)
