---
title: Fabrics
id: Fabric
description: Logical execution environments
sidebar_position: 4
tags:
  - concepts
  - Fabric
  - source
  - target
  - datasets
---

Fabric is a logical execution environment. Teams organize their data engineering into multiple environments such as _development_, _staging_, and _production_.

## Common Usage Pattern

- Admin sets up a Prophecy account and creates a `dev` Fabric for _development_, and `prod` Fabric for _production_
- Admin adds a team for Marketing Decision Support System (`Marketing_DSS`)
- Users in the `Marketing_DSS` Team have access to
  - `dev` Fabric for development
  - `prod` Fabric for production Pipelines

## What's in a Fabric

Fabric includes everything required to run a data Pipeline

![Data Pipeline](img/fabric.png)

- **Spark Environment**
  - This is a named Spark environment, owned by one team and used by _one or more_ teams
  - It contains
    - **Connection Credentials** - for Databricks this includes the _Workspace URL_ and the _Access Token_
    - **Cluster Configuration** - for Databricks this includes the _Databricks Runtime Version_, _Machine Type_, and _Idle Timeout_
    - **Job Sizes** - for convenience Prophecy enables you to create commonly used cluster sizes and name them. For example an XL cluster might be 10 servers of `i3.xlarge` instance type that will have 40 CPUs and 70GB memory
- **Scheduler**
  - Scheduler runs one more Spark data Pipelines based on a schedule (e.g. every weekday at 9am)
  - Databricks workspaces come with a default scheduler that is always available
  - Enterprise environments have the Airflow Scheduler option as well
- **Database Connections**
  - Data Pipelines will often read operational databases such as MySql or Postgres, and read/write Data Warehouses such as Snowflake
  - JDBC or other connections to these databases can be stored on the Fabric
- **Metadata Connection**
  - Optionally, enhance your Fabric by creating a [Metadata Connection](/docs/metadata/metadata-connections.md), recommended for users with hundreds or thousands of tables housed in their data provider(s).
- **Credentials and Secrets**
  - Prophecy enables you to store credentials safely in the Databricks environment. You can store key-value pairs as secrets that are made available for reading to the running workflows.
  - Please note that after a secret is created it is only readable by a running Job. Prophecy does not have access to this value.

## Hands on

Get started with hands-on guides. Learn step by step how to connect to your execution engine by creating a Fabric:

1. Create a SQL Fabric with a JDBC or Unity Catalog connection following [this guide](/docs/getting-started/getting-started-with-low-code-sql.md#23-setup-prophecys-Fabric).
2. Create a Databricks Fabric following [these steps](/docs/Spark/fabrics/databricks.md).
3. Create an EMR Fabric with Livy step by step [here](/docs/Spark/fabrics/emr-fabric.md).
