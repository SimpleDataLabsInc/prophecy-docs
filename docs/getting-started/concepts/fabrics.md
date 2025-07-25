---
title: Fabrics
id: Fabric
slug: /fabrics
description: Run pipelines in execution environments
tags:
  - concepts
  - fabric
  - execution
---

Prophecy enables you to develop high-quality data pipelines, but where do these pipelines actually run? Before building a pipeline, it's essential to understand that it must be executed within an **execution environment**.

While Prophecy offers some built-in execution capabilities through [Prophecy Automate](docs/administration/architecture.md) (the Prophecy-native runtime), the majority of computation and all data storage occur in **external** environments like Databricks or Snowflake. This is where **fabrics** come in—they serve as the bridge between Prophecy and these execution environments for seamless connectivity and integration.

## Fabric types

Different fabrics are designed to support specific project types. Use the table below to identify which fabric best aligns with your project's execution requirements.

| Fabric type                                            | Description                                        | Usage                                                                                |
| ------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Prophecy](/administration/fabrics/prophecy-fabrics/)  | Compute with Prophecy Automate and a SQL warehouse | Run [pipelines](docs/analysts/development/pipelines/pipelines.md) in SQL projects.   |
| [Spark](/administration/fabrics/Spark-fabrics/Fabrics) | Compute with a Spark engine                        | Run [pipelines](/engineers/pipelines) in PySpark/Scala projects and Databricks jobs. |
| [SQL](/administration/fabrics/sql-fabrics/Fabrics)     | Compute with a SQL warehouse                       | Run [models](/engineers/models) in SQL projects. You cannot run pipelines.           |

## Separate environments and access

Fabrics provide a structured way to separate working environments with team-based access. At minimum, you might have a development and production environment, but you may also have fabrics for QA, Staging, etc.

- **Development fabric:** Environment used for testing and experimentation, where pipelines can be iterated on without impacting live data or processes.
- **Production fabric:** Environment hosts stable, validated pipelines that process live data for business operations.

When you create a fabric, you assign it to a team. Only users in that team can access the fabric. To control access in your production environment, create a team with only those users who can execute and deploy pipelines in production.

## Components

Fabrics define all the necessary components that Prophecy needs to communicate with a specific execution environment. Each execution environment will require its own unique fabric configuration. Fabric creation, outlined in the [administration](docs/administration/index.md) section of the documentation, is typically handled by team admins.

Find the key components below that correspond to distinct sections within the fabric's settings.

| Component             | Description                                                                                                         | Required                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Credentials           | Prophecy securely encrypts your credentials and uses them to connect to your external environments.                 | Credentials are required to establish connections to external execution environments.                                                                               |
| Cluster configuration | This will determine the computation resources allocated to you.                                                     | Cluster configurations are required. Defaults are pre-configured based on your credentials.                                                                         |
| Connections           | To connect to multiple data providers for use in your pipelines, you can add additional connections to your fabric. | One connection to a primary execution environment is required. Additional connections are optional.                                                                 |
| Secrets               | Fabrics can store secrets from different secret providers such as HashiCorp Vault.                                  | Secrets are not required for fabric creation. However, sometimes secrets are required for connections. If a secret is required, you will be prompted to create one. |

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

A list of all fabrics available to you can be found in the **Fabrics** tab of the **Metadata** page. You can click into each fabric to access the fabric settings. These will resemble the settings that appear during fabric creation.

## What's next

Fabrics are often configured by team admins. Learn more about different types of fabrics in our Administration documentation on [Fabric setup](/administration/fabrics).
