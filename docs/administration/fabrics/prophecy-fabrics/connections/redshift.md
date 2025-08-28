---
title: Amazon Redshift
id: redshift
description: Learn how to connect to Redshift
tags:
  - connections
  - redshift
---

Connect Prophecy to your Amazon Redshift data warehouse to read from and write to tables from your pipelines. This page explains how to configure the connection, including required parameters, necessary permissions, and how connections are shared across teams.

## Prerequisites

Prophecy connects to Amazon Redshift using the database credentials you provide. These credentials are used to authenticate your session and authorize all data operations performed during pipeline execution. To use a Redshift connection effectively, your user must have the following permissions:

- `SELECT`, `INSERT`, `UPDATE`, and `DELETE` on the tables used in your Prophecy pipelines.
- `CREATE TABLE`, `DROP TABLE`, or `ALTER TABLE` if your pipelines create or replace tables.
- Access to specific schemas or databases where your tables reside.

To learn more about user permissions, visit [Default database user permissions](https://docs.aws.amazon.com/redshift/latest/dg/r_Privileges.html) in the Amazon Redshift documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)                     | Yes       |
| Write data with a [Target gem](/analysts/source-target)                    | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Data type mapping

When Prophecy processes data from Amazon Redshift using SQL warehouses, it converts Redshift-specific data types to formats compatible with your target warehouse. This table shows how [Amazon Redshift data types](https://docs.aws.amazon.com/redshift/latest/dg/c_Supported_data_types.html) are transformed for Databricks and BigQuery.

| Redshift           | Databricks      | BigQuery    |
| ------------------ | --------------- | ----------- |
| `SMALLINT`         | `INT`           | `INT64`     |
| `INTEGER`          | `BIGINT`        | `INT64`     |
| `BIGINT`           | `BIGINT`        | `INT64`     |
| `REAL`             | `DOUBLE`        | `FLOAT64`   |
| `DOUBLE PRECISION` | `DOUBLE`        | `FLOAT64`   |
| `DECIMAL`          | `DECIMAL(38,5)` | `NUMERIC`   |
| `BOOLEAN`          | `BOOLEAN`       | `BOOL`      |
| `CHAR`             | `STRING`        | `STRING`    |
| `VARCHAR`          | `STRING`        | `STRING`    |
| `DATE`             | `DATE`          | `DATE`      |
| `TIME`             | `TIMESTAMP`     | `TIME`      |
| `TIMETZ`           | `TIMESTAMP`     | `TIME`      |
| `TIMESTAMP`        | `TIMESTAMP`     | `TIMESTAMP` |
| `TIMESTAMPTZ`      | `TIMESTAMP`     | `TIMESTAMP` |
| `VARBYTE`          | `BINARY`        | `BYTES`     |
| `GEOMETRY`         | `STRING`        | `STRING`    |
| `GEOGRAPHY`        | `STRING`        | `STRING`    |
| `SUPER`            | `STRING`        | `STRING`    |
| `HLLSKETCH`        | `STRING`        | `STRING`    |
| `INTERVAL`         | `STRING`        | `STRING`    |

:::info
Learn more in [Supported data types](/analysts/data-types).
:::

## Connection parameters

To create a connection with Redshift, enter the following parameters:

| Parameter                                                            | Description                                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Connection Name                                                      | Name to identify your connection                                                                        |
| Server                                                               | Redshift cluster server<br/>Example: `redshift-cluster-1.abc123xyz789.us-west-2.redshift.amazonaws.com` |
| Port                                                                 | Port used by Redshift (default is `5439`)                                                               |
| Username                                                             | Your Redshift username                                                                                  |
| Database                                                             | Name of the Redshift database you want to connect to<br/>Example: `analytics_db`                        |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Your Redshift password                                                                                  |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Redshift connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Redshift connections in the following ways:

- When you browse a Redshift connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Redshift changes, Prophecy will automatically use the new schema.
