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

## Create a Prophecy fabric

Use the following instructions to create a Prophecy fabric.

1. From the left sidebar, click the **+** sign.
1. On the Create Entity page, select **Fabric**.

Each of the following sections corresponds to a tab of the fabric settings.

### Basic Info

| Parameter   | Description                                                                     | Required |
| ----------- | ------------------------------------------------------------------------------- | -------- |
| Name        | Name of the fabric.                                                             | Yes      |
| Description | Description of the fabric.                                                      | No       |
| Team        | [Team](docs/administration/teams-users/teamuser.md) that can access the fabric. | Yes      |

### Providers

| Parameter         | Description                                                                                                                                                    | Required |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Provider Type     | Type of fabric. Choose **Prophecy**.                                                                                                                           | Yes      |
| Provider          | Provider of the primary SQL warehouse. Prophecy supports Databricks, Snowflake, and BigQuery.                                                                  | Yes      |
| Advanced Settings | Option to use Prophecy Automate from a different networking zone (only applicable if [not deployed in Prophecy network](docs/administration/architecture.md)). | No       |

### Connections

| Parameter                  | Description                                                                                                     | Required |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| SQL Warehouse Connection   | Primary SQL warehouse connection. When you use this fabric, all SQL queries will be executed on this warehouse. | Yes      |
| Ingress/Egress Connections | Additional connections to external data providers that can be reused throughout pipelines.                      | No       |

:::info
Your SQL warehouse connection gives Prophecy access to both the execution environment and cloud storage of that connection. Additional ingress/egress connections in your fabric are only used for reading and writing data (not pipeline execution).
:::

### Secrets

| Parameter | Description                                                          | Required                         |
| --------- | -------------------------------------------------------------------- | -------------------------------- |
| Secrets   | Encrypted text/binary that can be used by anyone in the fabric team. | Required for certain connections |

## Save the fabric

Once you have configured these parameters:

1. Prophecy will test the connection for you.
1. If the connection fails, Prophecy will provide an error to help you troubleshoot the connection.
1. If the connection succeeds, you can **Save** the connection.
