---
title: MongoDB
id: mongodb
description: Learn how to connect with MongoDB
tags:
  - connections
  - mongodb
---

MongoDB is a NoSQL database designed to store and retrieve unstructured or semi-structured data using BSON documents.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with MongoDB, enter the following parameters:

| Parameter                                                            | Description                                    |
| -------------------------------------------------------------------- | ---------------------------------------------- |
| Connection Name                                                      | Name to to identify your connection            |
| Protocol                                                             | Protocol to use to communicate to the database |
| Host                                                                 | Where your MongoDB instance runs               |
| Username                                                             | Username for your MongoDB instance             |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for your MongoDB instance             |
| Database                                                             | Default database for reading and writing data  |
| Collection                                                           | Collection to use for the connection           |

## MongoDB permissions

When you create an MongoDB connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to collections.

To fully leverage a MongoDB connection in Prophecy, you need the following MongoDB permissions:

- `Read` from the collection defined in the connection
- `Write` to the collection defined in the connection

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MongoDB connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from MongoDB connections in the following ways:

- When you browse an MongoDB connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.
