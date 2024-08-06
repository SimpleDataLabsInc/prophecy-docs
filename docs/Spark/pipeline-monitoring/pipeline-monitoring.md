---
title: Pipeline Monitoring
id: pipeline-monitoring
description: About Pipeline Monitoring for Spark
sidebar_position: 1
tags:
  - concept
  - monitoring
  - spark
---

Pipeline Monitoring enables you as a Spark Copilot user to monitor and debug your scheduled and interactive Pipeline runs through Prophecy. The primary goal of Pipeline, Model, and Job observability is to assist you in quickly pinpointing errors, minimize the cost of fixes, and reduce downtime.

When enabled, Prophecy highlights the Gem that causes the failure at runtime. You can view log stack traces in the Prophecy UI in order to to debug runtime issues. Pipeline Monitoring is available for any scheduled Job runs and all interactive runs through the Prophecy UI.

## Pipeline Monitoring features

You can seamlessly address data health issues and monitor scheduled or ad-hoc runs without the need to switch to Databricks or Snowflake by using the following features:

- **Detect and monitor**: Identify errors at runtime, and monitor scheduled production runs.
- **Alert**: Get prompt alerts in case of failures according to severity.
- **Troubleshoot and fix with recommended solutions**: Identify the cause of failures, fix them AI recommended solutions, and rerun failed or skipped tasks. Prophecy's Pipeline Monitoring encompasses all functionalities equivalent to those found in Databricks Workflows and Airflow Jobs.

## Possible Pipeline errors and failures

During runtime, a Pipeline can fail due to different kinds of errors or failures such as the following:

- Failure before plan execution started by Spark
- Failure when the Gem has diagnostics or compilation issues because of a change in some common component
- Runtime error due to unexpected data, such as data type mismatch
- Error during write, such as write mode error or target data type mismatch
- Driver/Executor errors like exceeding memory limits (OOMs)

## What's next

To enable and use Pipeline Monitoring, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

For information on the stored execution metrics, see [Execution Metrics](/../../Spark/execution/execution-metrics).
