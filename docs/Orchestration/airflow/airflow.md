---
title: Airflow
id: airflow
slug: /engineers/airflow
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

[Apache Airflow](https://airflow.apache.org/) is an open-source workflow automation and orchestration platform that helps organizations schedule, monitor, and manage complex data workflows.
It is a popular choice for organizations of all sizes to handle data pipelines, ETL processes, and task automation.

## Features

| Feature                            | Description                                                                                                                                                                      |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Directed acyclic graphs (DAGs)     | Each job in Prophecy represents an Airflow [DAG](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html), and contains gems that represent various tasks. |
| Dynamic workflow scheduling        | In the job settings, you can configure complex dependencies, retries, and time-based triggers for tasks.                                                                         |
| Extensibility                      | Custom gems can be written and used within Airflow jobs. These gems can be shared via the [Package Hub](/engineers/package-hub).                                                 |
| Monitoring and logging             | Task progress, logging, and alerting can be monitored from the Airflow environment or the Prophecy UI.                                                                           |
| Parallel execution and scalability | Airflow can execute multiple tasks in parallel and scale horizontally to accommodate high workloads.                                                                             |
| Visual and code views              | Visually-developed Airflow jobs are automatically compiled into high-quality and open-source Airflow code.                                                                       |

## Airflow Gems

Prophecy provides a set of gems that you can use in your Airflow jobs. They are listed below and grouped by category.

### Sensor

<div class="fixed-table">

| Gem               | Description                               |
| ----------------- | ----------------------------------------- |
| EMRClusterSensor  | Waits for a specific EMR cluster state    |
| EMRPipelineSensor | Waits for a specific EMR pipeline state   |
| HTTPSensor        | Waits for a specific HTTP endpoint        |
| S3FileSensor      | Waits for a specific S3 file              |
| SFTPSensor        | Waits for a specific file on an SFTP path |

</div>

### Data Transfer

<div class="fixed-table">

| Gem             | Description                                            |
| --------------- | ------------------------------------------------------ |
| SFTPToS3        | Transfer files from an SFTP server to Amazon S3        |
| SFTPToSnowflake | Copies data from SFTP to Snowflake and creates a table |
| TableauExtract  | Generates Tableau Hyper files                          |

</div>

### Spark/SQL

<div class="fixed-table">

| Gem                        | Description                               |
| -------------------------- | ----------------------------------------- |
| DatabricksPipeline         | Runs a Databricks pipeline (Spark or SQL) |
| DataprocPipeline           | Runs a pipeline on Dataproc               |
| DataprocServerlessPipeline | Runs a pipeline on Dataproc serverless    |
| DataprocTesting            | Runs a pipeline on Dataproc               |
| EMRCreateCluster           | Creates an EMR cluster                    |
| EMRPipeline                | Runs an pipeline on EMR                   |
| Model                      | Runs a SQL model                          |
| OnPremPipeline             | Runs a pipeline on a Hadoop cluster       |
| SnowflakeSQL               | Runs a SQL query on Snowflake             |

</div>

### Trigger/Notify

<div class="fixed-table">

| Gem        | Description                                        |
| ---------- | -------------------------------------------------- |
| Email      | Sends a notification via email                     |
| Slack      | Sends a notification via Slack                     |
| TriggerDag | Trigger another Airflow job via its name or DAG ID |

</div>

### Custom

<div class="fixed-table">

| Gem    | Description                        |
| ------ | ---------------------------------- |
| Branch | Insert a Python lambda or function |
| Python | Insert Python code                 |
| Script | Insert a Shell script              |

</div>

### Subgraph

<div class="fixed-table">

| Gem         | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| ForEachLoop | Iterate through a set of gems depending on code, a JSON list, or gem output |
| TaskGroup   | Group a set of gems in your Airflow job                                     |

</div>
