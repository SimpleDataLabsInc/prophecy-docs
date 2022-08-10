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

When using Databricks Jobs there are two Gem types available:

#### Pipeline Gem

The Pipeline Gem triggers a Spark Pipeline developed in Prophecy.

#### Script Gem

Script Gem can be used to write any ad-hoc code.

### Visual == Code

The visual graph created on the jobs page is automatically converted to code (JSON) behind the scenes.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174399585-40067429-953e-4157-a5db-d80e25713d24.mp4" title="Avro Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Configuration

## Deployment

## Monitoring

## Guides

1. [How to trigger a job from another job?](/tutorials/low-code-jobs/multi-jobs-trigger)
2. [How to design a reliable CI/CD process?](/tutorials/low-code-jobs/reliable-ci-cd)
