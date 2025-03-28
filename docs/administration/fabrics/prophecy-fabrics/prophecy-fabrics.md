---
title: Prophecy fabrics
description: Use Prophecy and SQL to run pipelines
id: prophecy-fabrics
sidebar_label: Prophecy fabrics
tags:
  - fabric
  - SQL
  - analyst
---

To build SQL project, connect to Prophecy fabrics for pipeline execution. Prophecy fabrics leverage multiple engines for execution:

- **Primary SQL warehouse**: This is your external SQL environment, serving as the default data storage and query execution engine. A primary SQL warehouse connection is mandatory when configuring a Prophecy fabric. All SQL queries within your pipelines are executed in the primary warehouse.
- **Prophecy Automate**: This is Prophecy's runtime environment, responsible for pipeline orchestration and data flow management. It facilitates data movement between external systems (e.g., Salesforce, Tableau) and the SQL warehouse.

:::info Primary SQL warehouse
Prophecy executes SQL queries exclusively in the primary SQL warehouse. If you configure additional SQL connections in your fabric, Prophecy will use only use them for explicit data read and write operations within specific pipeline components.
:::

## Create a Prophecy fabric

Use the following instructions to create a Prophecy fabric.

1. From the left sidebar, click the **+** sign.
1. On the Create Entity page, select **Fabric**.

Each of the following sections corresponds to a tab of the fabric settings.

### Basic Info

| Parameter                                           | Description                                   | Required |
| --------------------------------------------------- | --------------------------------------------- | -------- |
| Name                                                | The name of the fabric.                       | Yes      |
| Description                                         | A description of the fabric.                  | No       |
| [Team](docs/administration/teams-users/teamuser.md) | The team that will have access to the fabric. | Yes      |

### Providers

| Parameter         | Description                                                                                                                                                        | Required |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Provider Type     | The type of fabric. Choose **Prophecy**.                                                                                                                           | Yes      |
| Provider          | The provider of the primary SQL warehouse. Prophecy supports Databricks, Snowflake, and BigQuery.                                                                  | Yes      |
| Advanced Settings | The option to use Prophecy Automate from a different networking zone (only applicable if [not deployed in Prophecy network](docs/administration/architecture.md)). | No       |

### Connections

| Parameter                | Description                                                                                                         | Required |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------- | -------- |
| SQL Warehouse Connection | The primary SQL warehouse connection. When you use this fabric, all SQL queries will be executed on this warehouse. | Yes      |
| Connections              | Additional connections to external data providers that will be accessible to those who use this fabric.             | No       |

### Secrets

| Parameter | Description                                                   | Required                         |
| --------- | ------------------------------------------------------------- | -------------------------------- |
| Secrets   | Secrets that will be accessible to those who use this fabric. | Required for certain connections |

## Save the fabric

Once you have configured these parameters:

1. Prophecy will test the connection for you.
1. If the connection fails, Prophecy will provide an error to help you troubleshoot the connection.
1. If the connection succeeds, you can **Save** the connection.
