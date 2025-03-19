---
title: Databricks
id: databricks
description: Learn how to connect with Databricks
tags:
  - connections
  - sql
  - databricks
---

## Parameters

| Parameter                   | Description                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Location type               | Location you want to connect from. The value is `databricks`.                                                                                          |
| Select or create connection | Whether to select an existing connection, or to create a new one. For a list of properties for a new one, see [Create connection](#create-connection). |
| Database                    | Database to use for the session after you connect.                                                                                                     |
| Schema                      | Schema to use for the session after you connect.                                                                                                       |
| Name                        | Name to to identify your connection.                                                                                                                   |

### Create connection

| Property name         | Description                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | Name to to identify your connection.                                                                                                |
| JDBC URL              | URL to connect to your SQL warehouse.                                                                                               |
| Catalog               | Catalog to use for the session after you connect.                                                                                   |
| Schema                | Schema to use for the session after you connect.                                                                                    |
| Authentication method | How you want to authenticate your Databricks account. Possible ways are: `OAuth`, `Personal Access Token`, or `Client Credentials`. |
| Token                 | Token to use to authenticate REST API calls.                                                                                        |
