---
title: MongoDB
id: mongodb
description: Learn how to connect with MongoDB
tags:
  - connections
  - sql
  - mongodb
---

## Parameters

| Parameter                   | Description                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Location type               | Location you want to connect from. The value is `mongodb`.                                                                                             |
| Select or create connection | Whether to select an existing connection, or to create a new one. For a list of properties for a new one, see [Create connection](#create-connection). |
| Database                    | Database to use for the session after you connect.                                                                                                     |
| Schema                      | Schema to use for the session after you connect.                                                                                                       |
| Name                        | Name to to identify your connection.                                                                                                                   |

### Create connection

| Property name   | Description                                          |
| --------------- | ---------------------------------------------------- |
| Connection Name | Name to to identify your connection.                 |
| Protocol        | Protocol to use to communicate to the database.      |
| Host            | Where your MongoDB instance runs.                    |
| Username        | Username for your MongoDB instance.                  |
| Password        | Password for your MongoDB instance.                  |
| Database        | Database to use for the session after you connect.   |
| Collection      | Collection to use for the session after you connect. |
