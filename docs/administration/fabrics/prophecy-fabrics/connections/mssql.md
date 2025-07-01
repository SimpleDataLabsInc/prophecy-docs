---
title: MSSQL
id: mssql
description: Learn how to connect with Microsoft SQL Server
tags:
  - connections
  - msssql
---

Use this connection to integrate with Microsoft SQL Server (MSSQL)—a relational database used for storing and querying structured data, with strong support for transactions, security, and complex SQL.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Connection parameters

To create a connection with Microsoft SQL Server, enter the following parameters:

| Parameter                                                            | Description                             |
| -------------------------------------------------------------------- | --------------------------------------- |
| Connection Name                                                      | Name to to identify your connection     |
| Server                                                               | Address of the server to connect to     |
| Port                                                                 | Port to use for the connection          |
| Username                                                             | Username for your MSSQL Server instance |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for your MSSQL Server instance |

## MSSQL permissions

When you create an MSSQL connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to tables. To fully leverage an MSSQL connection in Prophecy, you need read and write access to the tables you use.

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from MSSQL connections in the following ways:

- When you browse a MSSQL connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in MSSQL changes, Prophecy will automatically use the new schema.
