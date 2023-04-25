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

Apache Airflow is an open-source platform used to programmatically author, schedule, and monitor workflows.

Airflow allows users to define workflows as DAGs (Directed Acyclic Graphs), where each node in the graph represents a task that needs to be executed.
Tasks can be Python functions, scripts, or executable files. Dependencies between tasks are defined using operators, which are essentially plugins that define how tasks interact with each other.

Apache Airflow is particularly useful for creating and managing data pipelines. With its DAG-based architecture, it makes it easy to schedule and run complex data workflows. It also provides a powerful interface for monitoring and troubleshooting these workflows.

## Airflow Jobs in Prophecy

:::info Do you want to learn more?
Prophecy Low-code Jobs on Airflow is currently in a restricted beta. If you're interested in finding out more, feel free
to schedule a quick demo session [here](https://www.prophecy.io/request-a-demo) or reach out directly at
[info@prophecy.io](mailto:info@prophecy.io).
:::
