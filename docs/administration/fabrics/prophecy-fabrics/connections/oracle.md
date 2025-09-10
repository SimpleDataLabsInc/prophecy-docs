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

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/oracle)                            | Yes       |
| Write data with a Target gem                                               | No        |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

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

## Data type mapping

When Prophecy processes data from Oracle using SQL warehouses, it converts Oracle-specific data types to formats compatible with your target warehouse. This table shows how [Oracle data types](https://docs.oracle.com/en/database/oracle/oracle-database/23/sqlrf/Data-Types.html) are transformed for Databricks and BigQuery.

| Oracle                          | Databricks                       | BigQuery                                |
| ------------------------------- | -------------------------------- | --------------------------------------- |
| NUMBER                          | DECIMAL(38,5)<br/>Alias: Decimal | BIGNUMERIC(38, 5)<br/>Alias: BigNumeric |
| SMALLINT / INTEGER / NUMBER(38) | BIGINT<br/>Alias: Bigint         | INT64<br/>Alias: Integer                |
| FLOAT                           | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float                |
| REAL / FLOAT(63)                | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float                |
| DOUBLE PRECISION / FLOAT(126)   | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float                |
| BINARY_FLOAT                    | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float                |
| BINARY_DOUBLE                   | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float                |
| DECIMAL                         | DECIMAL(38,5)<br/>Alias: Decimal | BIGNUMERIC(38, 5)<br/>Alias: BigNumeric |
| NUMERIC                         | DECIMAL(38,5)<br/>Alias: Decimal | BIGNUMERIC(38, 5)<br/>Alias: BigNumeric |
| CHAR                            | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| VARCHAR                         | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| VARCHAR2                        | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| NCHAR                           | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| NVARCHAR2                       | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| LONG                            | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| CLOB                            | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| NCLOB                           | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| BLOB                            | BINARY<br/>Alias: Binary         | BYTES<br/>Alias: Bytes                  |
| DATE                            | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp          |
| TIMESTAMP                       | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp          |
| TIMESTAMP WITH TIME ZONE        | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp          |
| TIMESTAMP WITH LOCAL TIME ZONE  | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp          |
| INTERVAL YEAR TO MONTH          | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| INTERVAL DAY TO SECOND          | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| RAW                             | BINARY<br/>Alias: Binary         | BYTES<br/>Alias: Bytes                  |
| LONG RAW                        | BINARY<br/>Alias: Binary         | BYTES<br/>Alias: Bytes                  |
| XMLType                         | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| BOOLEAN                         | BOOLEAN<br/>Alias: Boolean       | BOOL<br/>Alias: Boolean                 |
| URIType                         | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| DBURIType                       | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| XDBURIType                      | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| HTTPURIType                     | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| LongVarChar                     | STRING<br/>Alias: String         | STRING<br/>Alias: String                |
| LongRaw                         | BINARY<br/>Alias: Binary         | BYTES<br/>Alias: Bytes                  |

::::info
Learn more in [Supported data types](/analysts/data-types).
::::

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
