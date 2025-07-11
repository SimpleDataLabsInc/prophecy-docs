---
title: Databricks serverless compute for PySpark
sidebar_label: Databricks serverless
id: databricks-serverless
description: Use Databricks serverless compute to execute PySpark pipelines
tags:
  - fabric
  - databricks
---

[Databricks serverless compute](https://docs.databricks.com/aws/en/compute/serverless/) allows you to run workloads without manually provisioning a Spark cluster. With serverless compute, Databricks takes care of the infrastructure in the background, so your jobs start up quickly and scale as needed. Prophecy supports serverless compute for running pipelines in PySpark projects on Databricks.

This page explains how to use serverless compute with Prophecy, including supported data sources, data sampling modes, and current limitations.

:::info
Databricks serverless compute differs from [serverless SQL warehouses](https://docs.databricks.com/aws/en/compute/sql-warehouse/#what-is-serverless-sql). Prophecy uses serverless compute to run Spark pipelines on Spark fabrics. In contrast, serverless SQL warehouses are connected to Prophecy via JDBC and are used to run SQL queries generated from pipelines in SQL projects.
:::

## Prerequisites

To use serverless compute in Prophecy, you need:

- [Access to serverless compute](https://docs.databricks.com/aws/en/compute/serverless/#enable-serverless-compute) in Databricks
- [PySpark projects](/projects#project-types) in Prophecy (Scala not supported)

## Supported data sources

You can run the following sources on Databricks serverless compute:

- [Avro](/engineers/avro)
- [CSV](/engineers/csv)
- [Data Generator](/engineers/data-generator)
- [Delta file](/engineers/delta)
- [JSON](/engineers/JSON)
- [Kafka](/engineers/kafka)
- [ORC](/engineers/orc)
- [Parquet](/engineers/parquet)
- [Seed files](/engineers/seed)
- [Unity Catalog tables](https://docs.databricks.com/aws/en/tables/)
- [Unity Catalog volumes](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-volumes)
- [XML](/engineers/xml)

## Supported data sampling modes

You can use the following data sampling modes when using Databricks serverless compute:

- [Selective](/engineers/data-sampling#selective-recommended)
- [Vanilla](/engineers/data-sampling#vanilla)

## Limitations

Below are the current limitations of Databricks Serverless and how they impact Prophecy project development.

| **Feature**                              | **Limitation**                                                                                                                                                                                                 |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scala support                            | Databricks serverless only supports Python and SQL. <br/>[Scala projects](/projects#project-types) cannot run on Databricks Serverless.                                                                        |
| Dependencies                             | Only Python dependencies are supported. <br/>[Dependencies](/engineers/dependencies) must be added through the Prophecy UI. <br/>You cannot install dependencies to serverless compute directly in Databricks. |
| Row size                                 | Maximum row size is 128MB.                                                                                                                                                                                     |
| Driver size                              | Databricks serverless driver size is unknown and cannot be changed.                                                                                                                                            |
| Supported data formats                   | XLSX, fixed format, and custom formats are not supported.                                                                                                                                                      |
| UDF network access                       | [UDFs](/engineers/user-defined-functions) cannot access the internet.                                                                                                                                          |
| Spark configuration                      | Databricks Serverless only supports a limited number of [Spark configuration properties](https://docs.databricks.com/aws/en/spark/conf#configure-spark-properties-for-serverless-notebooks-and-jobs).          |
| APIs in [Script gems](/engineers/script) | Spark Connect APIs are supported. <br/>Spark RDD APIs are not supported. <br/>DataFrame and SQL cache APIs are not supported.                                                                                  |

:::note
For the complete list of limitations, visit [Serverless compute limitations](https://docs.databricks.com/aws/en/compute/serverless/limitations) in the Databricks documentation.
:::
