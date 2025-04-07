---
title: Snowflake
id: snowflake
description: Learn how to connect with Snowflake
tags:
  - connections
  - sql
  - snowflake
---

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Snowflake, enter the following parameters:

| Parameter             | Description                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | Name to to identify your connection                                                                                  |
| Account               | URL of your Snowflake account, typically in the format<br/>`https://<orgname>-<account_name>.snowflakecomputing.com` |
| Database              | Default database for reading and writing data                                                                        |
| Schema                | Default schema for reading and writing data                                                                          |
| Warehouse             | Name of the SQL warehouse to use for the connection                                                                  |
| Role                  | Snowflake [role](https://docs.snowflake.com/en/user-guide/security-access-control-overview) of the user to connect   |
| Authentication method | How you want to authenticate your Snowflake account                                                                  |

## Authentication methods

You can configure your Snowflake connection with one of the following authentication methods:

<!-- - **Snowflake [OAuth](docs/administration/authentication/databricks-oauth.md).** Prophecy prompts you to sign in with Snowflake. -->

- **Password**. Enter your Snowflake username and use a [secret](docs/administration/secrets/secrets.md) to enter your password.

## Snowflake permissions

When you create an Snowflake connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your Snowflake credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage an Snowflake connection in Prophecy, you need the following Snowflake permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an Snowflake connection is added to a fabric:

- Anyone in the team can use that connection in pipelines and browse it in the Environment browser.
- Team members do not need to reauthenticate. They inherit the same access and permissions as the original connection setup.

Everyone who uses the connection will operate with the same access level granted by the stored credentials.

:::caution
Be mindful of what permissions the credentials provide. If they allow access to sensitive data, anyone on the team using that connection will have the same level of access.
:::

## Sync connection

As you start using Snowflake connections in Prophecy, it’s important to understand how data is fetched and kept up to date in a project.

- When you browse an Snowflake connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
