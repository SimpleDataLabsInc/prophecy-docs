---
title: Azure Synapse dedicated SQL pools
sidebar_label: Azure Synapse
id: synapse
description: Learn how to connect with Azure Synapse
tags:
  - connections
  - synapse
---

Prophecy's Azure Synapse connector supports connecting to [dedicated SQL pools](https://learn.microsoft.com/en-us/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-overview-what-is) that run Microsoft SQL Server (MSSQL). Use this connection instead of the [MSSQL connection](/administration/fabrics/prophecy-fabrics/connections/mssql) when you host MSSQL in Azure Synapse dedicated SQL pool.

This page describes how to set up the connection.

## Prerequisites

Prophecy connects to Azure Synapse using the database credentials you provide. These credentials are used to authenticate your session and authorize all data operations during pipeline execution. To use an Azure Synapse connection effectively, your user account must have:

- `SELECT`, `INSERT`, `UPDATE`, and `DELETE` on the tables used in your Prophecy pipelines.
- Access to the database and schema where tables are located.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                        | Supported |
| ------------------------------------------------------------------------------ | --------- |
| Read data with a [Source gem](/analysts/synapse)                               | Yes       |
| Write data with a Target gem                                                   | No        |
| Browse data in the [Environment browser](/analysts/project-editor#environment) | Yes       |

## Connection parameters

To create a connection with Azure Synapse, enter the following parameters:

| Parameter                                                            | Description                                                    |
| -------------------------------------------------------------------- | -------------------------------------------------------------- |
| Connection Name                                                      | Name to identify your connection                               |
| Server                                                               | Address of the server to connect to                            |
| Port                                                                 | Port to use for the connection                                 |
| Username                                                             | Username for Synapse authentication                            |
| Database                                                             | Name of the specific SQL database within your Synapse SQL pool |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for Synapse authentication                            |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Synapse connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Synapse connections in the following ways:

- When you browse a Synapse connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Synapse changes, Prophecy will automatically use the new schema.
