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
| Index tables in the [Knowledge Graph](/knowledge-graph)                    | No        |

## Connection parameters

To create a connection with Microsoft SQL Server, enter the following parameters:

| Parameter                                                            | Description                             |
| -------------------------------------------------------------------- | --------------------------------------- |
| Connection Name                                                      | Name to identify your connection        |
| Server                                                               | Address of the server to connect to     |
| Port                                                                 | Port to use for the connection          |
| Username                                                             | Username for your MSSQL Server instance |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for your MSSQL Server instance |

## Data type mapping

When Prophecy processes data from Microsoft SQL Server (MSSQL) using SQL warehouses, it converts MSSQL-specific data types to formats compatible with your target warehouse. This table shows how [MSSQL data types](https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver17) are transformed for Databricks and BigQuery.

| MSSQL            | Databricks                     | BigQuery                       |
| ---------------- | ------------------------------ | ------------------------------ |
| tinyint          | INT<br/>Alias: Integer         | INT64<br/>Alias: Integer       |
| smallint         | INT<br/>Alias: Integer         | INT64<br/>Alias: Integer       |
| int              | INT<br/>Alias: Integer         | INT64<br/>Alias: Integer       |
| bigint           | BIGINT<br/>Alias: Bigint       | INT64<br/>Alias: Integer       |
| float / real     | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| decimal          | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| numeric          | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| money            | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| smallmoney       | DOUBLE<br/>Alias: Double       | FLOAT64<br/>Alias: Float       |
| bit              | BOOLEAN<br/>Alias: Boolean     | BOOL<br/>Alias: Boolean        |
| char             | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| varchar          | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| text             | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| nchar            | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| nvarchar         | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| ntext            | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| xml              | STRING<br/>Alias: String       | STRING<br/>Alias: String       |
| date             | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| time             | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| datetime         | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| datetime2        | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| smalldatetime    | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| datetimeoffset   | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| rowversion       | TIMESTAMP<br/>Alias: Timestamp | TIMESTAMP<br/>Alias: Timestamp |
| binary           | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| varbinary        | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| image            | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| uniqueidentifier | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| sql_variant      | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| geometry         | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| geography        | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |
| hierarchyid      | BINARY<br/>Alias: Binary       | BYTES<br/>Alias: Bytes         |

::::info
Learn more in [Supported data types](/analysts/data-types).
::::

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MSSQL connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from MSSQL connections in the following ways:

- When you browse a MSSQL connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in MSSQL changes, Prophecy will automatically use the new schema.
