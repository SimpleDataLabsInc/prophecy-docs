---
title: MSSQL
id: mssql
description: Learn how to connect with Microsoft SQL Server
tags:
  - connections
  - msssql
---

Microsoft SQL Server (MSSQL) is a reliable, enterprise-grade relational database used for storing and querying structured data, with strong support for transactions, security, and complex SQL. It’s a popular choice for organizations already invested in the Microsoft ecosystem or needing a stable on-prem or cloud-compatible data platform.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Microsoft SQL Server, enter the following parameters:

| Parameter                                                            | Description                                     |
| -------------------------------------------------------------------- | ----------------------------------------------- |
| Connection Name                                                      | Name to to identify your connection             |
| Server                                                               | Server to use for the connection                |
| Port                                                                 | Port to use for the connection                  |
| Username                                                             | Username for your Microsoft SQL Server instance |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for your Microsoft SQL Server instance |

## MSSQL permissions

When you create an MSSQL connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your MSSQL credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage an MSSQL connection in Prophecy, you need the following MSSQL permissions:

- Example
- Example

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Sync connection

Prophecy fetches data from MSSQL connections in the following ways:

- When you browse a MSSQL connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
