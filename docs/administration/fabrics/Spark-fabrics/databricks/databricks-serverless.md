---
title: Databricks Serverless
id: databricks-serverless
description: Use Databricks Serverless to execute Prophecy pipelines
tags:
  - fabric
  - databricks
---

Databricks Serverless allows you to run workloads without provisioning a Spark cluster. This page explains the limitations of using Databricks Serverless to run pipelines in Prophecy.

:::note
For the complete list of limitations, visit [Serverless compute limitations](https://docs.databricks.com/aws/en/compute/serverless/limitations) in the Databricks documentation.
:::

## Limitations

Below are the current limitations of Databricks Serverless and how they impact Prophecy project development.

| **Feature**                              | **Limitation**                                                                                                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Scala support                            | Databricks serverless only supports Python and SQL. <br/>[Scala projects](/projects#project-types) cannot run on Databricks Serverless.                                                                                  |
| Secret management                        | Only Databricks and HashiCorp Vault [secrets](/administration/secrets/) are supported.                                                                                                                                   |
| Data sampling                            | Only Selective and Vanilla [data sampling modes](/engineers/data-sampling) are supported.                                                                                                                                |
| Dependencies                             | [Dependencies](/engineers/dependencies) must be added through the Prophecy UI. <br/>You cannot install dependencies to the serverless compute directly in Databricks.                                                    |
| Data sources                             | Only [Unity Catalog volumes](https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-volumes) are supported [data sources](/engineers/source-target). <br/>Catalog tables and external sources are not supported. |
| Row size                                 | Maximum row size is 128MB.                                                                                                                                                                                               |
| Driver size                              | Databricks serverless driver size is fixed and cannot be changed.                                                                                                                                                        |
| Supported data formats                   | XLSX, fixed format, and custom formats are not supported.                                                                                                                                                                |
| UDF network access                       | [UDFs](/engineers/user-defined-functions) cannot access the internet.                                                                                                                                                    |
| Spark configuration                      | Databricks Serverless only supports a limited number of [Spark configuration properties](https://docs.databricks.com/aws/en/spark/conf#configure-spark-properties-for-serverless-notebooks-and-jobs).                    |
| APIs in [Script gems](/engineers/script) | Spark Connect APIs are supported. <br/>Spark RDD APIs are not supported. <br/>DataFrame and SQL cache APIs are not supported.                                                                                            |
