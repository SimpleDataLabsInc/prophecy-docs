---
title: ProphecyManaged connection
sidebar_label: ProphecyManaged
id: prophecy-managed
description: Learn about the default ProphecyManaged fabric connection
tags:
  - connections
  - sql
---

:::edition Free and Professional
Available for the Free and Professional Editions only.
:::

When you first sign in to Prophecy (Free or Professional Edition), you get access to automatically-provisioned [Prophecy fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md). Each fabric includes a default SQL warehouse connection called **ProphecyManaged**.

This connection provides a ready-to-use environment for running SQL pipelines without additional configuration.

## Key features

Review the following features to understand how the ProphecyManaged connection works.

| Feature                | Description                                                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Compute & Database** | Each connection has its own allocated compute resources and database in the warehouse. Prophecy uses a DuckDB warehouse under the hood.                                        |
| **Default Schema**     | Outputs are written to a schema named `default` by default. You can change this in the connection settings. AI agents write to the default schema when creating target tables. |
| **Configuration**      | Connection details (host, port, credentials) are fixed and cannot be modified.                                                                                                 |
| **Knowledge Graph**    | You can reindex the connection to update the metadata so the AI Agent has current table information.                                                                           |

:::info
Data cannot be transferred between different ProphecyManaged connections. To share data with other users, add them to the team that owns the fabric with this connection.
:::
