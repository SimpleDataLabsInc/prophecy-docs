---
title: Airflow
id: airflow
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

[Apache Airflow](https://airflow.apache.org/) is an open-source workflow automation and orchestration platform that helps organizations schedule, monitor, and manage complex data workflows.
It is a popular choice for organizations of all sizes to handle data pipelines, ETL processes, and task automation.

### Key Features of Apache Airflow

#### DAGs (Directed Acyclic Graphs)

Airflow allows you to define workflows using [Directed Acyclic Graphs](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html), where each node represents a task, and the edges define the sequence and dependencies between tasks. In Prophecy, you define these DAGs as Airflow jobs. Each Airflow job represent a DAG in Airflow.

#### Dynamic Workflow Scheduling

Airflow provides a flexible scheduling system that allows you to set up complex dependencies, retries, and time-based triggers for your tasks. All these can be set in the settings page for a job.

#### Extensibility

Airflow is highly extensible, allowing you to define custom operators and sensors to suit your specific needs. It supports a wide range of plugins and integrations. Prophecy maintains this extensibility via [Package Hub](docs/extensibility/package-hub/package-hub.md). Users can create gems to represent any custom Operator or Sensor.

#### Monitoring and Logging

It offers built-in tools for monitoring task progress, logging, and alerting. You can easily track the status of your workflows through a web-based UI. Users would be able to monitor and debug these jobs directly via Prophecy UI as well.

#### Parallel Execution and Scalability

Airflow can execute multiple tasks in parallel. It can also scale horizontally to accommodate high workloads by adding more worker nodes.

## Low Code Airflow in Prophecy

Prophecy simplifies orchestration with a visual layer on top of Airflow, offering ease and efficiency. What the user builds visually in Prophecy, turns into high-quality and open-source Airflow code on Git.
You have the flexibility to integrate and utilize Prophecy with your managed Airflow. If you are new to Airflow, We also offer a Prophecy-managed Airflow, which expedites your setup without having to manage your own Airflow instance.

### Key features and components of Airflow in Prophecy

- **Setup**: Seamlessly connect to your Airflow Instance, or use Prophecy hosted Airflow for getting started.

- **Development**: A visual drag-and-drop interface that allows users to design jobs by connecting gems and defining dependencies effortlessly.

- **Scheduling and Triggers**: Easily set up schedules for your jobs and define triggers to automate the execution.

- **Monitoring and Reporting**: Monitor the progress of your jobs, receive notifications on status, and access logs and reporting features for real-time insights into jobs execution.

- **Extensibility**: For advanced users, Prophecy's Airflow interface offers scripting capabilities and gem builder to accommodate custom requirements.

This combination of visual development and the power of Airflow enables organizations to streamline data pipelines, reduce development time, and improve operational efficiency.

### Benefits of Using Prophecy's Airflow Interface

Visual development for Airflow in Prophecy brings numerous advantages to data engineers, analysts, and organizations:

- **Simplified Workflow Development**: With a user-friendly visual interface, even users with limited programming experience can create and manage complex data workflows, reducing the learning curve.

- **Accelerated Development**: Rapidly build, test, and deploy jobs, reducing the time and effort needed to set up and execute data processes.

- **Reduced Maintenance**: Visually designed jobs are easier to maintain and update, as they require less coding, resulting in fewer errors and quicker adjustments.

- **Centralized Management**: Streamline the management of workflows by having them all in one platform, providing a unified view of your data pipeline.

- **Automation and Scheduling**: Automate data processes and set schedules for tasks, ensuring that critical data operations occur at the right time.

- **Error Handling and Monitoring**: Easily track task execution, set up error handling, and receive alerts when issues arise, improving data pipeline reliability.

- **Cost Savings**: Visually designed Airflow can lead to cost savings through increased operational efficiency and decreased development time.

- **Scalability**: As your data processing needs grow, Prophecy's Airflow interface can scale with your organization, handling more extensive and complex jobs.

## What's next

Let's dive deeper into the specifics of utilizing Airflow in Prophecy.
