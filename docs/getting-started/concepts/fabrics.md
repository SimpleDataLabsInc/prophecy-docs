---
title: Fabrics
id: Fabric
description: Run pipelines in execution environments
tags:
  - concepts
  - fabric
  - execution
---

Prophecy helps you develop data pipelines in high-quality Spark or SQL code—but what does Prophecy use to compute these pipelines? The first thing to understand before building any pipeline is that your pipeline must be connected to an **execution environment**.

This is why **fabrics** exist in Prophecy. Fabrics let Prophecy connect to specific execution environments and data storage.

## Fabric types

Different fabrics are designed to support specific project types. Use the table below to identify which fabric best aligns with your project's execution requirements.

| Fabric type                                            | Description                                           | Usage                                                                                             |
| ------------------------------------------------------ | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [Prophecy](/administration/fabrics/prophecy-fabrics/)  | Compute with the Prophecy runtime and a SQL warehouse | Run [pipelines](docs/analysts/development/pipelines/pipelines.md) in SQL projects.                |
| [Spark](/administration/fabrics/Spark-fabrics/Fabrics) | Compute with a Spark engine                           | Run [pipelines](docs/Spark/pipelines/pipelines.md) in PySpark/Scala projects and Databricks jobs. |
| [SQL](/administration/fabrics/sql-fabrics/Fabrics)     | Compute with a SQL warehouse                          | Run [models](docs/data-modeling/data-modeling.md) in SQL projects. You cannot run pipelines.      |
| [Airflow](/Orchestration/airflow/)                     | Compute with an Airflow-compatible engine             | Run [Airflow](docs/Orchestration/airflow/airflow.md) jobs.                                        |

## Use case

Here is one way you might set up your fabrics. First, the team admin creates:

- A team named Marketing_DSS for the Marketing Decision Support System users.
- A `dev` fabric for development activities that specifies the Marketing_DSS team.
- A `prod` fabric for production pipelines that specifies the Marketing_DSS team.

In this example, all users in the Marketing_DSS Team will have access to the `dev` and `prod` fabrics.

## Components

Fabrics include everything required to run a data pipeline. Because different execution environments are built differently, each fabric will require a unique configuration. You can find these requirements in the [administration](docs/administration/index.md) section of the documentation. Usually a team admin will create and configure fabrics for their team. The table below describes components at a high level.

| Component             | Description                                                                                                         | Required                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Credentials           | Prophecy securely encrypts your credentials and uses them to connect to your external environments.                 | Credentials are required to establish connections to external execution environments.                                                                               |
| Cluster configuration | This will determine the computation resources allocated to you.                                                     | Cluster configurations are required. Defaults are pre-configured based on your credentials.                                                                         |
| Connections           | To connect to multiple data providers for use in your pipelines, you can add additional connections to your fabric. | One connection to a primary execution environment is required. Additional connections are optional.                                                                 |
| Secrets               | Fabrics can store secrets from different secret providers such as HashiCorp Vault.                                  | Secrets are not required for fabric creation. However, sometimes secrets are required for connections. If a secret is required, you will be prompted to create one. |

[Team admins](docs/administration/teams-users/teamuser.md) typically set up fabrics. Detailed steps for fabric creation can be found in the [fabrics](docs/administration/fabrics.md) section of the documentation.

:::info
Prophecy provides a trial Prophecy-managed fabric that can get you started with building your pipelines. However, you will need to connect to external execution environments for your production workflows.
:::

## Fabric usage

To execute your pipelines, you must attach a fabric to your project, as fabrics define the project's execution environment. You can switch between different fabrics within a project based on factors such as whether you want to use a development or production execution environment. All fabrics created for your teams will be available for you to view and use.

To attach a fabric to a project:

1. Open a project from the Prophecy metadata page.
1. Open a pipeline or model that you want to work on.
1. Expand the **Attach Cluster** menu. This menu will differ slightly between Spark and SQL projects.
1. Select a fabric. You will be shown fabrics that have the same data provider as your project (e.g., Databricks).
1. Attach to a cluster or create a new cluster.
1. Run your pipeline or model. This executes the data transformation on the environment defined in the fabric!

![AttachCluster](./img/DatabricksAttachCluster.png)

:::note
Even though teams share fabrics, **each user must add their individual credentials** to be able to use the fabric in their projects.
:::

## Fabric metadata

A list of all fabrics available to you can be found in the **Fabrics** tab of the **Metadata** page.

![Fabric Metadata](./img/fabric_metadata_1.png)

You can click into each fabric to access the fabric settings. These will resemble the settings that appear during fabric creation.
