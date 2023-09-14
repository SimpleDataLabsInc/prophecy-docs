---
sidebar_position: 2
title: Airflow
id: airflow
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

Apache Airflow is an open-source workflow automation and orchestration platform that helps organizations schedule, monitor, and manage complex data workflows.
It is a popular choice for organizations of all sizes to handle data pipelines, ETL processes, and task automation.

## Key Features of Apache Airflow

### DAGs (Directed Acyclic Graphs)

Airflow allows you to define workflows using Directed Acyclic Graphs, where each node represents a task, and the edges define the sequence and dependencies between tasks. In Prophecy, you define these DAGs as Airflow Jobs. Each Airflow Job represent a DAG in Airflow.

### Extensibility

Airflow is highly extensible, allowing you to define custom operators and sensors to suit your specific needs. It supports a wide range of plugins and integrations. Prophecy maintains this extensibility via Gem builder. Users can create Gems to represent any custom Operator or Sensor.

### Dynamic Workflow Scheduling

Airflow provides a flexible scheduling system that allows you to set up complex dependencies, retries, and time-based triggers for your tasks. All these can be set in the settings page for a Job.

### Monitoring and Logging

It offers built-in tools for monitoring task progress, logging, and alerting. You can easily track the status of your workflows through a web-based UI. Users would be able to monitor and debug these Jobs directly via Prophecy UI as well.

### Parallel Execution and Scalability

Airflow can execute multiple tasks in parallel. It can also scale horizontally to accommodate high workloads by adding more worker nodes.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
