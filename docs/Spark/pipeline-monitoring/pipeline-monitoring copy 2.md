---
title: Enable Pipeline Monitoring2
id: pipeline-monitoring-enable2
description: Enable Pipeline Monitoring2
sidebar_position: 3
tags:
  - how-to
  - monitoring
  - spark
---

Pipeline Monitoring identify errors at runtime. You can identify the cause of failures, fix them with recommended solutions, and rerun failed or skipped tasks via Prophecy.

highlight Gem with error at runtime, what is the failure, (and fix the problem with help from Spark Copilot AI)
see Gem names in the Logs. Identify where the failure is happening in the Pipeline
hover over the Gem to see failure details, duration and Exception. Click Open Logs to open Runtime Logs of that Gem. Then click More details to see entire the Exception. x3 ss

Historical runs logging and debugging
See complete history with logs and other debugging details for all scheduled and ad-hoc runs
All scheduled runs from jobs in Databricks Workflows and Airflow Jobs
Run History toggle. ss how you know what is happening in your scheduled runs. takes you to the Historical View of your Pipeline in your particular Fabric. ss. You can view different versions of your Pipeline from the dropdown. Successful runs have a green checkmark icon :heavy_check_mark:, failed run have an orange warning icon :warning:.
See number of rows read and written at the top right.
