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

Prophecy helps you develop data pipelines in high-quality Spark or SQL code—but what does Prophecy use to compute these pipelines? The first thing to understand before building any pipeline is that your pipeline must be connected to an **execution environment**.

This is why **fabrics** exist in Prophecy. Fabrics let Prophecy connect to specific execution environments. When you do so, you can access the data sources available to you in that environment.

## Fabric types

Certain fabrics will be compatible with certain project types. Review the table below to understand the different fabric types.

| Fabric type                                    | Description                                            | Usage                                                       |
| ---------------------------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| [Prophecy](/administration/prophecy-fabrics/)  | Computation using the Prophecy engine and a SQL engine | Run pipelines in SQL projects                               |
| [Spark](/administration/Spark-fabrics/Fabrics) | Computation using a Spark engine                       | Run pipelines in PySpark/Scala projects and Databricks jobs |
| [SQL](/administration/sql-fabrics/Fabrics)     | Computation using Spark SQL engines or SQL warehouses  | Run models in SQL projects                                  |
| [Airflow](/Orchestration/airflow/)             | Computation using Airflow-compatible engines           | Run Airflow jobs                                            |

## Fabric team

When you create a fabric, you assign it to a [team](docs/administration/teams-users/teamuser.md). The fabric then becomes available to all users in the team.

:::info
Even though teams share fabrics, users will be prompted to add their individual credentials to be able to use the fabric in their projects.
:::

## Use case

Here is one way you might set up your fabrics. First, the team admin creates:

- A team named Marketing_DSS for the Marketing Decision Support System users.
- A `dev` fabric for development activities that specifies the Marketing_DSS team.
- A `prod` fabric for production pipelines that specifies the Marketing_DSS team.

In this example, all users in the Marketing_DSS Team will have access to the `dev` and `prod` fabrics.

## Components

Fabrics include everything required to run a data pipeline. Because different execution environments are built differently, each fabric will require a unique configuration. You can find these requirements in the [administration](docs/administration/index.md) section of the documentation. Usually a team admin will create and configure fabrics for their team.

Fabrics generally include:

- **Credentials**. Prophecy securely encrypts your credentials and uses them to connect to your external environments.
- **Cluster configuration**. This will determine the computation resources allocated to you.
- **Connections**. To connect to multiple data providers for use in your pipelines, you can add additional connections to your fabric.
- **Secrets**. Fabrics can store secrets from different secret providers such as HashiCorp Vault.

## Fabric metadata

A list of all fabrics available to you can be found in the **Fabrics** tab of the **Metadata** page.

![Fabric Metadata](./img/fabric_metadata_1.png)

You can click into each fabric to access the fabric settings. These will resemble the settings that appear during fabric creation.
