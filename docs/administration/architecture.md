---
title: Architecture
id: architecture
description: Understand the high-level design and organization of Prophecy
tags:
  - architecture
---

Prophecy is written as a set of microservices that run on Kubernetes and can run on various cloud platforms. There are four components of a successful Prophecy deployment.

| Component          | Description                                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Prophecy IDE**   | The development environment, including Prophecy microservices and cloud infrastructure, that is deployed.                                                                                                    |
| **Data engine**    | The [SQL](#sql) or [Spark](#spark) execution environment, like Snowflake or Databricks. You'll set this up through our secure interface. None of your data is stored on Prophecy’s environment.              |
| **Source control** | Prophecy natively integrates with Git and platforms like Bitbucket. An encrypted copy of your code is stored within Prophecy’s environment for fast access, while the source-of-truth code is stored on Git. |
| **Authentication** | For simple user authentication and permission control, Prophecy can utilize your identity provider of choice.                                                                                                |

### Prophecy IDE

A user who logs into Prophecy has access to the integrated development environment (IDE). This includes everything needed to enable all data users to transform raw data into reliable, analytics-ready data using visual data pipelines.

![Prophecy IDE](./img/arch_ide.png)

Teams are the primary mechanism of ownership. Teams own projects where pipelines, datasets, and jobs live. Teams also own execution fabrics that provide the execution and storage resources for execution including on SQL Warehouses and Spark clusters.

### SQL

Prophecy can connect to Snowflake and Databricks warehouses for SQL query execution.

#### Snowflake

To connect with data stored in a SQL Warehouse, or to allow for interactive SQL execution, Prophecy can connect to an existing Snowflake execution environment through secure and performant [Snowpark](https://docs.snowflake.com/en/developer-guide/snowpark/index) or [Snowflake](https://docs.snowflake.com/en/developer-guide/sql-api/reference) APIs.

Each [fabric](../../concepts/fabrics) defined in Prophecy connects to a single Snowflake Warehouse and each user is required to provide credentials to authenticate to it.

![Arch_Diagram](./img/arch_snowflake.png)

Notice the data provider (e.g. Snowflake) matches up to a fabric. For another scenario, consider the same architecture diagram where the fabric connects to a Databricks SQL warehouse instead of Snowflake.

### Spark

To allow for interactive code execution Prophecy can connect to either [Databricks](#databricks) or any other Spark through [Apache Livy](https://livy.apache.org/) (e.g. MapR, CDP, HDP, Spark on Kubernetes).

#### Databricks

Prophecy connects to Databricks using [Rest API](https://docs.databricks.com/dev-tools/api/latest/index.html). Each [fabric](../../concepts/fabrics) defined in Prophecy connects to a single [Databricks workspace](https://docs.databricks.com/workspace/index.html). You can connect a Databricks workspace to your fabric using a [personal access token (PAT)](https://docs.databricks.com/dev-tools/api/latest/authentication.html) or [Databricks OAuth](docs/administration/authentication/databricks-oauth.md).

:::note
When using **Active Directory**, Prophecy takes care of the auto-generation and refreshing of the Databricks personal access tokens. Read more about it [here](https://docs.microsoft.com/en-us/azure/databricks/dev-tools/api/latest/aad/).
:::

Prophecy primarily uses Databricks for the following functionalities:

- **Interactive Execution**: Prophecy allows its users to spin up new clusters or connect to existing clusters. When a cluster connection exists, Prophecy allows the user to run their code in the interactive mode. Interactive code queries are sent to Databricks using the [Databricks Command API 1.2](https://docs.databricks.com/dev-tools/api/1.2/index.html).
- **Scheduling**: Prophecy allows the user to build and orchestrate Databricks jobs. This works through the [Databricks Jobs API 2.1](https://docs.databricks.com/dev-tools/api/latest/jobs.html).

![Prophecy to Databricks Connectivity](./img/arch_databricks.png)
