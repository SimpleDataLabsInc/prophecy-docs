---
title: MSSQL connection
sidebar_label: MSSQL
id: mssql
description: Learn how to connect with Microsoft SQL Server
tags:
  - connections
  - msssql
---

This page describes how to use and configure a connection to Microsoft SQL Server (MSSQL) in Prophecy. MSSQL is a relational database used for storing and querying structured data.

## Prerequisites

Prophecy connects to Microsoft SQL Server (MSSQL) using the database credentials you provide. These credentials are used to authenticate your session and authorize all data operations during pipeline execution. To use an MSSQL connection effectively, your user account must have:

- `SELECT`, `INSERT`, `UPDATE`, and `DELETE` on the tables used in your Prophecy pipelines.
- Access to the database and schema where tables are located.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/mssql)                             | Yes       |
| Write data with a [Target gem](/analysts/mssql)                            | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Connection parameters

To create a connection with Microsoft SQL Server, enter the following parameters:

| Parameter                                                           | Description                             |
| ------------------------------------------------------------------- | --------------------------------------- |
| Connection Name                                                     | Name to identify your connection        |
| Server                                                              | Address of the server to connect to     |
| Port                                                                | Port to use for the connection          |
| Username                                                            | Username for your MSSQL Server instance |
| Password ([Secret required](docs/core/prophecy-fabrics/secrets.md)) | Password for your MSSQL Server instance |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/core/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from MSSQL connections in the following ways:

- When you browse a MSSQL connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in MSSQL changes, Prophecy will automatically use the new schema.
