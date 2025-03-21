---
title: MSSQL
id: mssql
description: Learn how to connect with Microsoft SQL Server
tags:
  - connections
  - sql
  - msssql
---

## Parameters

| Parameter                   | Description                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Location type               | Location you want to connect from. The value is `mssql`.                                                                                               |
| Select or create connection | Whether to select an existing connection, or to create a new one. For a list of properties for a new one, see [Create connection](#create-connection). |
| Database                    | Database to use for the session after you connect.                                                                                                     |
| Schema                      | Schema to use for the session after you connect.                                                                                                       |
| Name                        | Name to to identify your connection.                                                                                                                   |

### Create connection

| Property name   | Description                                      |
| --------------- | ------------------------------------------------ |
| Connection Name | Name to to identify your connection.             |
| Server          | Server to use for the session after you connect. |
| Port            | Port to use for the session after you connect.   |
| Username        | Username for your Microsoft SQL Server instance. |
| Password        | Password for your Microsoft SQL Server instance. |
