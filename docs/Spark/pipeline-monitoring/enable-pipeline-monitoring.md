---
title: Enable Pipeline Monitoring
id: enable-pipeline-monitoring
description: How to enable Pipeline Monitoring for Spark
sidebar_position: 2
tags:
  - how-to
  - setup
  - monitoring
  - spark
---

To use Pipeline Monitoring, you must enable it by updating the Prophecy Library version in your Project dependencies, and turn on the Pipeline Monitoring flag in Pipeline Settings.

## Update Prophecy Library version

Pipeline Monitoring requires your Project to be on Prophecy Python libs version 1.9.9 or above. You can check your **ProphecyLibsPython** version under **Dependencies**.

- If your Project's Prophecy Python libs version is below 1.9.9, **Update** it.

![ProphecyLibsPython](img/prophecy-libs-python.png)

If you have uncommitted changes in your Pipelines, you may be prompted to either **Commit & Save** or **Save Without Committing**. The update will affect all Pipelines in your Project.

For an up-to-date list of Prophecy versions and libraries, see [Version Chart](/docs/release_notes/version_chart.md).

## Turn on the Pipeline Monitoring flag

By default, Pipeline Monitoring is enabled for all new Pipelines. For existing Pipelines, the feature is turned off by default in order to prevent unexpected changes in your generated Pipeline code.

- To turn on Pipeline Monitoring, you must toggle on **Enable Pipeline monitoring** in **Pipeline Settings**.

![Turn on Pipeline Monitoring](img/turn-on-pipeline-monitoring.png)

You can check the code view to see added instrument annotations that adds all of the details for monitoring your Pipeline.
