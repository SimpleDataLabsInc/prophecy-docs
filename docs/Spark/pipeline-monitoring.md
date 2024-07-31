---
title: Pipeline Monitoring
id: pipeline-monitoring
description: Pipeline Monitoring
sidebar_position: 9
tags:
  - concept
  - monitoring
  - sql
---

## Pipeline Monitoring

Pipeline Monitoring enables Spark Copilot users to monitor and debug their scheduled and interactive Pipeline runs through Prophecy. The primary goal of Pipeline, Model, and Job observability is to assist customers in quickly pinpointing errors, minimizing the cost of fixes, and reducing downtime. When enabled, Prophecy highlights the Gem that causes the failure at runtime. Users can view log stack traces in the Prophecy UI to debug runtime issues faster. This feature is available for all interactive runs through the Prophecy UI and any scheduled Job runs.

The Prophecy platform aims to be the sole source of truth for data health and reliability, facilitating data-driven decisions founded on trust. Users can effortlessly monitor scheduled/ad-hoc runs, promptly detect errors, receive timely alerts, and benefit from copilot-powered troubleshooting with recommended solutions. Users can seamlessly address data health issues and monitor scheduled/ad-hoc runs without the need to switch to Snowflake or Databricks.

- Detect and Monitor: Users can effortlessly monitor scheduled production runs and promptly identify errors at runtime or development time.
- Alert : Alert users promptly in case of failures according to severity.
- Troubleshoot and Recommended solutions : Users can identify the cause of failures, fix them, and rerun failed or skipped tasks via Prophecy. It encompasses all functionalities equivalent to those found in Databricks Workflows and Airflow Jobs for these.

### Possible failures

Make it easier and seamless for customers to detect and pinpoint any errors when running Pipelines interactively. Highlight the Gems and expressions breaking, and suggest solutions wherever possible.

During development, a Pipeline can fail due to different kind of failures like:

- Failure before plan execution started by Spark
- Failure when the Gem has diagnostics/compilation issues because of change in some common component
- Runtime Error due to unexpected Data (data type mismatch, etc)
- Error during Write ( write mode error, Target Data type Mismatch, etc)
- Driver/Executor Errors like OOMs https://docs.qubole.com/en/latest/troubleshooting-guide/spark-ts/troubleshoot-spark.html#ten

## Enable

To enable this, update the Prophecy Library version in your Project dependencies to the latest (1.9.9), and add the Enable Pipeline monitoring flag in Pipeline Settings. Note that this feature is currently in beta.
