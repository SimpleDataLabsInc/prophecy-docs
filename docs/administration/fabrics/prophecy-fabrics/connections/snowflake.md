---
title: Snowflake
id: snowflake
description: Learn how to connect with Snowflake
tags:
  - connections
  - sql
  - snowflake
---

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

- **Snowflake [OAuth](docs/administration/authentication/databricks-oauth.md).** Prophecy prompts you to sign in with Snowflake.
- **Password**. Enter your Snowflake username and use a [secret](docs/administration/secrets/secrets.md) to enter your password.
