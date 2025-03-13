---
title: Prophecy Managed Airflow
id: prophecy_managed_airflow_fabric
description: How Prophecy create a Prophecy Managed Airflow fabric
tags:
  - scheduling
  - airflow
  - jobs
  - prophecyManaged
  - fabric
---

If you are new to Airflow and do not have an Airflow instance, you can use **Prophecy Managed Airflow** to try it out. When you create an Airflow fabric using Prophecy Managed Airflow, the fabric will be available to you for 21 days. Let's see how to set up this fabric.

## Create the fabric

To create a new Airflow fabric:

1. Click the **Create Entity** button.
1. Choose **Create Fabric** option.
1. On the Basic Info page:
   - Enter a **Fabric Name**.
   - Enter a **Fabric Description**.
   - Choose the **Team** that will own the fabric.
1. Click **Continue**.
1. Configure the Provider information.
   - Choose **Prophecy Managed**.

## Add Airflow connections

To perform actions like running a pipeline in your Airflow job, you need add various Airflow connections. For example, to run a Spark pipeline, we need to add a connection to a Spark engine.

In the **Connections** tab, click **+ Add Connection** to set up a new connection. You can add multiple connections in the fabric.

To view a list of connection types with configuration details, visit our page on [Airflow connections](docs/administration/airflow-fabrics/connections/connections.md).

:::info
To let Prophecy Managed Airflow connect to applications like Snowflake, you may need to Whitelist the NAT IP `34.28.21.243` in your applications.
:::

## Limitations

Prophecy Managed Airflow has the following limitations:

- Prophecy Managed Airflow is run on a Composer instance of size **large**. The maximum number of DAGs is `1000`. The maximum total number of concurrent tasks running in parallel is `10`.
- For security purposes, some types of tasks and operations are blocked on Prophecy Managed Airflow. For example, running Python or Script tasks are restricted.
  This is to prevent any misuse by malicious code in these tasks.

Please reach out to Prophecy support team if any of these restrictions or limits is blocking your use cases.
