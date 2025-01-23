---
title: Fabrics
description: Fabrics define execution engines
id: Fabrics
sidebar_class_name: hidden
tags: [Fabric, SQL, Execution, Snowflake, Databricks]
---

A fabric is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production. SQL fabrics define the credentials for Prophecy to connect to the SQL Warehouse or Lakehouse. Importantly, each user must update the relevant fabric with their own credentials. Once a SQL fabric is created, Prophecy can access data, execute data models and generate target tables.

Prophecy supports Databricks and Snowflake SQL Warehouses.
![Providers](./img/Providers.png)

1. **[Snowflake SQL fabrics](./snowflake.md)** - Provide Prophecy access to use the Snowflake warehouse data storage and compute engine capabilities.

2. **[Databricks SQL fabrics](./databricks.md)** - Provide Prophecy access to use the Databricks' Warehouse storage and compute engine capabilities.

## Job Scheduling

In addition to secure, ad-hoc model runs on Snowflake and Databricks, job scheduling is done with a visual, easy-to-use interface.

1. Snowflake users schedule jobs with Airflow. Prophecy's [Airflow fabric](/docs/Orchestration/airflow/setup/setup.md) facilitates a [Connection](/docs/Orchestration/airflow/setup/mwaa.md#setting-up-snowflake-connection) to the Snowflake fabric.

2. Databricks users schedule jobs with [Databricks jobs](/docs/Orchestration/databricks-jobs.md) in Prophecy.

Once a Snowflake or Databricks SQL fabric is setup, Prophecy's interface makes it easy to run Models on a daily, weekly, or monthly basis using Airflow or Databricks jobs.

## What's next

To continue creating fabrics, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
