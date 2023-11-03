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

:::info Guide
Detailed documentation on this feature, including setup instructions and best practices for your first Airflow implementation can be found in this [guide.](/docs/getting-started/getting-started-with-low-code-airflow.md). Below are general guidelines for interfacing from Prophecy with Airflow, for example, interface with a production-grade Airflow deployment.
:::

Apache Airflow is an open-source platform used to programmatically author, schedule, and monitor workflows.

Airflow allows users to define workflows as DAGs (Directed Acyclic Graphs), where each node in the graph represents a task that needs to be executed.
Tasks can be Python functions, scripts, or executable files. Dependencies between tasks are defined using operators, which are essentially plugins that define how tasks interact with each other.

Apache Airflow is particularly useful for creating and managing data pipelines. With its DAG-based architecture, it makes it easy to schedule and run complex data workflows. It also provides a powerful interface for monitoring and troubleshooting these workflows.

## Airflow Jobs in Prophecy

With Prophecy, you can create and manage Airflow jobs using a visual Drag and drop interface. This allows you to easily design and schedule complex workflows, without having to write any code.

### How to create an Airflow Fabric

To create an Airflow Fabric in Prophecy, you can use the "Airflow" Fabric type. This allows you to specify the parameters needed to connect to your Airflow instance based on the Provider. Currently, for Cloud Composer you would provider Airflow URL, Project Id, Dag location, and authentication key.

### How to create an Airflow Job

Once you've created the Fabric, you can use it to create and manage Airflow jobs within Prophecy. This makes it easy to build and schedule complex workflows without having to leave the Prophecy platform.

To create an Airflow Job in Prophecy, you can use the visual interface to define a DAG and its associated tasks. You can specify the already created Pipelines, and add your own scripts to be executed as tasks, and use the operators provided by Airflow to define dependencies between them.
Please see below video for example.

### Running and scheduling Airflow Jobs

Once you've defined your DAG, you can schedule it to run at specific intervals, or trigger it manually when needed.
Prophecy provides a powerful monitoring interface that allows you to track the progress of your DAGs and quickly identify any issues that may arise.
Please see below video for example

Once done, simply enable them and release your Project to schedule these Jobs on Airflow.
