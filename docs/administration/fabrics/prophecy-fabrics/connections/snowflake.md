---
title: Snowflake
id: snowflake
description: Learn how to connect with Snowflake
tags:
  - connections
  - sql
  - snowflake
---

## Parameters

| Parameter                   | Description                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Location type               | Location you want to connect from. The value is `snowflake`.                                                                                           |
| Select or create connection | Whether to select an existing connection, or to create a new one. For a list of properties for a new one, see [Create connection](#create-connection). |
| Database                    | Database to use for the session after you connect.                                                                                                     |
| Schema                      | Schema to use for the session after you connect.                                                                                                       |
| Name                        | Name to to identify your connection.                                                                                                                   |

### Create connection

| Property name         | Description                                                                                    |
| --------------------- | ---------------------------------------------------------------------------------------------- |
| Connection Name       | Name to to identify your connection.                                                           |
| Account               | Account to use for the session after you connect.                                              |
| Database              | Database to use for the session after you connect.                                             |
| Schema                | Schema to use for the session after you connect.                                               |
| Warehouse             | Default virtual warehouse to use for the session after you connect.                            |
| Role                  | Default security role to use for the session after you connect.                                |
| Authentication method | How you want to authenticate your Snowflake account. Possible ways are: `OAuth` or `Password`. |
