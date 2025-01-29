---
title: Fabrics
id: Fabric
description: Logical execution environments
sidebar_position: 4
tags:
  - concepts
  - fabric
  - source
  - target
  - datasets
---

Prophecy helps you develop data pipelines in high-quality Spark or SQL code—but what does Prophecy use to compute these pipelines? The first thing you need to understand before building any pipeline is that your pipeline must be connected to an **execution environment**.

This is why **fabrics** exist in Prophecy. Fabrics let Prophecy connect to specific execution environments.

Prophecy provides a Prophecy-managed fabric that can get you started with building your pipelines. However, you can also create your own fabrics to connect to other execution environments, such as a Databricks workspace.

## Example

Here is one way you might set up your fabrics. First, the Admin creates:

- A team named Marketing_DSS for the Marketing Decision Support System users.
- A `dev` fabric for development activities that specifies the Marketing_DSS team.
- A `prod` fabric for production pipelines that specifies the Marketing_DSS team.

In this example, all users in the Marketing_DSS Team will have access to the `dev` and `prod` fabrics.

## Components

Fabrics include everything required to run a data pipeline.

![Data pipeline](img/fabric.png)

### Spark Environment

A **Spark Environment** is a named environment owned by one team but can be shared among multiple teams. It includes the following components:

- **Connection Credentials**: For Databricks, these include the _Workspace URL_ and the _Access Token_.
- **Cluster Configuration**: For Databricks, this specifies the _Databricks Runtime Version_, _Machine Type_, and _Idle Timeout_.
- **Job Sizes**: Prophecy allows you to define commonly used cluster sizes and assign them names for easy reference. For example, an "XL" cluster might consist of 10 servers using the `i3.xlarge` instance type, providing 40 CPUs and 70GB of memory.

### Scheduler

The **Scheduler** executes one or more Spark data pipelines on a defined schedule, such as every weekday at 9 a.m. Databricks workspaces include a default scheduler that is always available. For enterprise environments, an Airflow Scheduler option is also provided.

### Database Connections

Data pipelines often require connections to operational databases, such as MySQL or Postgres, or to data warehouses, such as Snowflake. These connections, using JDBC or other protocols, can be securely stored on the fabric for convenient reuse.

### Metadata Connection

Optionally, you can enhance your fabric by creating a **Metadata Connection**. This is especially useful for users managing hundreds or thousands of tables in their data providers. For more details, see the [Metadata Connections documentation](/docs/concepts/fabrics/metadata-connections.md).

### Credentials and Secrets

Prophecy enables you to securely store credentials in the Databricks environment. When connecting to Databricks, you can either use a Personal Access Token (PAT) or leverage [Databricks OAuth](/docs/administration/authentication/databricks-oauth.md).

Key-value pairs can be stored as secrets, which are accessible to running workflows. After a secret is created, it can only be read by running jobs, and Prophecy does not have access to its value.

## Hands on

Get started with hands-on guides. Learn step by step how to connect to your execution engine by creating a fabric:

1. Create a SQL fabric with a JDBC or Unity Catalog connection following [this guide](docs/getting-started/tutorials/sql-with-databricks.md#setup-prophecys-Fabric).
2. Create a Databricks fabric following [these steps](/docs/administration/Spark-fabrics/databricks/databricks.md).
3. Create an EMR fabric with Livy step by step [here](/docs/administration/Spark-fabrics/emr.mdx).

## What's next

To learn more about fabrics and the Prophecy Libraries, see the following page:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
