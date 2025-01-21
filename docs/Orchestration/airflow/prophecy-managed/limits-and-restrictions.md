---
title: Limits and Restrictions
id: prophecy_managed_airflow_fabric_limits
description: Limits and Security restrictions for Prophecy Managed Airflow
tags:
  - scheduling
  - airflow
  - jobs
  - prophecyManaged
  - fabric
---

## Whitelisting

To allow Prophecy Managed Airflow connecting to your downstream applications like Snowflake, Databricks etc., you would need to Whitelist the NAT IP `34.28.21.243` in your applications.
This should now allow Prophecy Managed Airflow to connect, and run any tasks when required.

## Limits

We run our Prophecy Managed Airflow On Composer instance of Size Large. This has a limit of maximum number of DAGs as `1000`.
We also have restricted total number of concurrent tasks running in parallel to `10`.

:::info
Please reach out to Prophecy support team, in case you run into any of above limits.
:::

## Restrictions

For security purposes, we have blocked certain type of tasks and operations on Prophecy Managed Airflow. For example, running Python or Script tasks are restricted.
This is to prevent any misuse by malicious code in these tasks.

:::info
Please reach out to Prophecy support team, if any of these restrictions or limits is blocking your use-cases.
:::
