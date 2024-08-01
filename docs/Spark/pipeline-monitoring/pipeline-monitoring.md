---
title: Pipeline Monitoring
id: pipeline-monitoring
description: Pipeline Monitoring
sidebar_position: 1
tags:
  - concept
  - monitoring
  - spark
---

Pipeline Monitoring enables Spark Copilot users to monitor and debug their scheduled and interactive Pipeline runs through Prophecy. The primary goal of Pipeline, Model, and Job observability is to assist you in quickly pinpointing errors, minimize the cost of fixes, and reduce downtime.

When enabled, Prophecy highlights the Gem that causes the failure at runtime. You can view log stack traces in the Prophecy UI in order to to debug runtime issues. Pipeline Monitoring is available for all interactive runs through the Prophecy UI and any scheduled Job runs.

## Monitoring features

You can seamlessly address data health issues and monitor scheduled or ad-hoc runs without the need to switch to Databricks or Snowflake.

- **Detect and monitor**: You can identify errors at runtime or development time, and monitor scheduled production runs.
- **Alert**: Alerts you promptly in case of failures according to severity.
- **Troubleshoot and recommended solutions**: You can identify the cause of failures, fix them with recommended solutions, and rerun failed or skipped tasks via Prophecy. It encompasses all functionalities equivalent to those found in Databricks Workflows and Airflow Jobs.

## Possible errors and failures

During runtime or development, a Pipeline can fail due to different kinds of errors or failures such as the following:

- Failure before plan execution started by Spark
- Failure when the Gem has diagnostics or compilation issues because of a change in some common component
- Runtime error due to unexpected data, such as data type mismatch
- Error during write, such as write mode error or target data type mismatch
- Driver/Executor errors like exceeding memory limits (OOMs)

## What's next

To set up a enable and use Pipeline Monitoring, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
