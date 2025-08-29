---
title: Snowflake connection
sidebar_label: Snowflake
id: snowflake
description: Learn how to connect with Snowflake
tags:
  - connections
  - sql
  - snowflake
---

Learn how to set up and use a Snowflake connection in Prophecy. With a Snowflake connection, you can read from and write to your Snowflake data warehouse using Source and Target gems, browse data in the Environment browser, and run pipelines that process Snowflake data.

## Prerequisites

When you create a Snowflake connection in Prophecy, all data operations—such as reading or writing—are executed using the Snowflake credentials you provide. Ensure that your Snowflake user has the following permissions:

- `SELECT`, `INSERT`, `UPDATE`, and `DELETE` on the tables used in your Prophecy pipelines.
- `OWNERSHIP` on the table, if Prophecy needs to alter or replace it.

Additionally, Prophecy writes data to Snowflake by uploading Parquet files to a stage. This requires:

- `CREATE FILE FORMAT` in the target schema.
- `USAGE` on any file formats used for reading/writing Parquet files.
- Write access to your user stage

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/snowflake)                         | Yes       |
| Write data with a [Target gem](/analysts/snowflake)                        | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Limitations

There are a few limitations on the data types you can read from Snowflake:

- Prophecy reads `Object`, `Array`, and `Variant` types as `String` type.
- Prophecy does not support writing `Binary` type columns.

## Connection parameters

To create a connection with Snowflake, enter the following parameters:

| Parameter             | Description                                                                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | Name to identify your connection                                                                                                               |
| Account               | URL of your Snowflake account<br/>Example: `https://<orgname>-<account_name>.snowflakecomputing.com`                                           |
| Database              | Default database for reading and writing data                                                                                                  |
| Schema                | Default schema for reading and writing data                                                                                                    |
| Warehouse             | Name of the SQL warehouse to use for the connection                                                                                            |
| Role                  | Snowflake [role](https://docs.snowflake.com/en/user-guide/security-access-control-overview) of the user to connect<br/>Example: `ACCOUNTADMIN` |
| Authentication method | Enter your Snowflake username and use a [secret](docs/administration/secrets/secrets.md) to enter your password.                               |

<!-- ## Authentication methods

You can configure your Snowflake connection with one of the following authentication methods:

- **Snowflake [OAuth](docs/administration/authentication/databricks-oauth.md).** Prophecy prompts you to sign in with Snowflake.
- **Password**. Enter your Snowflake username and use a [secret](docs/administration/secrets/secrets.md) to enter your password. -->

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Snowflake connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Snowflake connections in the following ways:

- When you browse a Snowflake connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Snowflake changes, Prophecy will automatically use the new schema.
