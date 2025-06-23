---
title: Databricks Serverless
id: databricks-serverless
description: Use Databricks Serverless to execute Prophecy pipelines
tags:
  - fabric
  - databricks
---

Databricks Serverless allows you to run workloads without provisioning a Spark cluster. This page explains the limitations of using Databricks Serverless to run pipelines in Prophecy.

For the complete list of limitations, visit [Serverless compute limitations](https://docs.databricks.com/aws/en/compute/serverless/limitations) in the Databricks documentation.

## Limitations

Below are the current limitations of Databricks Serverless and how they impact Prophecy pipelines.

- Scala is not supported by Databricks Serverless. Therefore, Prophecy projects written in Scala cannot run on Databricks Serverless.

- Databricks Serverless limits data sources to Unity Catalog locations. External sources (Redshift, Snowflake, etc.) are not supported.

- Databricks Serverless does not permit rows larger than 128MB.

- Databricks Serverless fixes its driver size to an undocumented size and cannot be changed.

- Databricks Serverless limits compatible data formats. XLSX, Fixed Format and custom format are not supported.

- Databricks Serverless does not allow user-defined functions (UDFs) to access the internet.

- Databricks Serverless only supports a limited number of [Spark configuration properties](https://docs.databricks.com/aws/en/spark/conf#configure-spark-properties-for-serverless-notebooks-and-jobs).

- When writing Script gems or custom code:

  - Only Spark connect APIs are supported. Spark RDD APIs are not supported.

  - Databricks Serverless does not support DataFrame and SQL cache APIs.
