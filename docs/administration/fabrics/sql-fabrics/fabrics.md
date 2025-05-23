---
title: SQL fabrics
description: Perform SQL computations on a SQL warehouse
id: Fabrics
sidebar_class_name: hidden
tags: [fabric, SQL, execution, snowflake, databricks]
---

SQL [fabrics](docs/getting-started/concepts/fabrics.md) let Prophecy connect to SQL warehouses for storage and compute engine capabilities. Prophecy supports connections to Databricks and Snowflake SQL warehouses.

## When to use SQL fabrics

When working with SQL projects in Prophecy, you have the option to use either a [Prophecy fabric](/administration/fabrics/prophecy-fabrics) or a SQL fabric. The choice depends on whether your project requires external data integration or is confined to computations within a SQL warehouse. Use the following table to determine the appropriate fabric.

| Feature                                                        | Prophecy fabric | SQL fabric |
| -------------------------------------------------------------- | --------------- | ---------- |
| Compute models in your project                                 | Yes             | Yes        |
| Ingest data from external connections like Salesforce or SFTP  | Yes             | No         |
| Send data through external connections like Salesforce or SFTP | Yes             | No         |
| Operates entirely within a connected SQL warehouse             | No              | Yes        |
| Requires [Prophecy Automate](/administration/architecture)     | Yes             | No         |
| Run jobs or scheduled pipelines natively                       | Yes             | No         |

## Job scheduling

If you use a SQL fabric, you can set up jobs on a regular basis using:

- [Airflow](/engineers/airflow) (Snowflake users).
- [Databricks jobs](/engineers/databricks-jobs) (Databricks users).
