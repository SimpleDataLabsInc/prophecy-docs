---
title: Oracle DB connection
sidebar_label: Oracle DB
id: oracle
description: Learn how to connect to Oracle
tags:
  - connections
  - oracle
---

Oracle DB is a relational database management system. In Prophecy, you can connect to Oracle to read from and write to database tables as part of your pipelines. This page explains how to set up the connection, including required parameters, permissions, and how connections are shared within teams.

## Prerequisites

Prophecy connects to Oracle using the database credentials you provide. These credentials are used to authenticate your session and authorize all data operations performed during pipeline execution. To use an Oracle connection effectively, your user account must have:

- Read access to query data from tables
- Write access to insert, update, or delete data

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                        | Supported |
| ------------------------------------------------------------------------------ | --------- |
| Read data with a [Source gem](/analysts/oracle)                                | Yes       |
| Write data with a Target gem                                                   | No        |
| Browse data in the [Environment browser](/analysts/project-editor#environment) | Yes       |

## Connection parameters

To create a connection with Oracle, enter the following parameters:

| Parameter                                                            | Description                                          |
| -------------------------------------------------------------------- | ---------------------------------------------------- |
| Connection name                                                      | A name to identify your connection in Prophecy       |
| Server                                                               | Hostname of the Oracle database server               |
| Port                                                                 | Port used by the Oracle database (default is `1521`) |
| Username                                                             | Username for connecting to the Oracle database       |
| Database                                                             | Oracle Service Name or SID of the target database    |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for the specified user                      |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once an Oracle connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Oracle connections in the following ways:

- When you browse an Oracle connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Oracle changes, Prophecy will automatically use the new schema.
