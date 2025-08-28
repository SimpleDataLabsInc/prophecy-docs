---
title: MongoDB
id: mongodb
description: Learn how to connect with MongoDB
tags:
  - connections
  - mongodb
---

MongoDB is a NoSQL database designed to store and retrieve unstructured or semi-structured data using BSON documents.

## Prerequisites

When you create a MongoDB connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to collections.

To fully leverage a MongoDB connection in Prophecy, you need the following MongoDB permissions:

- `Read` from the collection defined in the connection
- `Write` to the collection defined in the connection

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)                     | Yes       |
| Write data with a [Target gem](/analysts/source-target)                    | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Connection parameters

To create a connection with MongoDB, enter the following parameters:

| Parameter                                                            | Description                                                                                                  |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Connection Name                                                      | Name to identify your connection                                                                             |
| Protocol                                                             | Protocol to use to communicate to the database<br/>Example:`mongodb+srv` for cloud-hosted clusters           |
| Host                                                                 | Where your MongoDB instance runs<br/>Example:`cluster0.<cluster-name>.mongodb.net` for cloud-hosted clusters |
| Username                                                             | Username for your MongoDB instance                                                                           |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Password for your MongoDB instance                                                                           |
| Database                                                             | Default database for reading and writing data                                                                |
| Collection                                                           | Collection to use for the connection                                                                         |

## Data type mapping

When Prophecy processes data from MongoDB using SQL warehouses, it converts MongoDB-specific data types to formats compatible with your target warehouse. This table shows how [MongoDB data types](https://www.mongodb.com/docs/manual/reference/bson-types/) are transformed for Databricks and BigQuery.

| MongoDB                                                                                     | Databricks                       | BigQuery                             |
| ------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------ |
| 32-bit integer                                                                              | INT<br/>Alias: Integer           | INT64<br/>Alias: Integer             |
| 64-bit integer                                                                              | BIGINT<br/>Alias: Bigint         | INT64<br/>Alias: Integer             |
| Double                                                                                      | DOUBLE<br/>Alias: Double         | FLOAT64<br/>Alias: Float             |
| Boolean                                                                                     | BOOLEAN<br/>Alias: Boolean       | BOOL<br/>Alias: Boolean              |
| String                                                                                      | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Date                                                                                        | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp       |
| Timestamp                                                                                   | TIMESTAMP<br/>Alias: Timestamp   | TIMESTAMP<br/>Alias: Timestamp       |
| Binary                                                                                      | BINARY<br/>Alias: Binary         | BYTES<br/>Alias: Bytes               |
| ObjectId                                                                                    | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Decimal128                                                                                  | DECIMAL(34,2)<br/>Alias: Decimal | BIGNUMERIC(34, 2)<br/>Alias: Numeric |
| Min key                                                                                     | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Max key                                                                                     | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Regular Expression                                                                          | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| DBPointer                                                                                   | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| JavaScript                                                                                  | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| JavaScript with scope                                                                       | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Symbol                                                                                      | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| [Embedded Document](https://www.mongodb.com/docs/manual/tutorial/query-embedded-documents/) | STRUCT<br/>Alias: Struct         | STRUCT<br/>Alias: Struct             |
| Array                                                                                       | ARRAY<br/>Alias: Array           | ARRAY<br/>Alias: Array               |
| Empty Array                                                                                 | ARRAY<br/>Alias: Array           | ARRAY<br/>Alias: Array               |
| Null                                                                                        | STRING<br/>Alias: String         | STRING<br/>Alias: String             |
| Unidentified                                                                                | STRING<br/>Alias: String         | STRING<br/>Alias: String             |

::::info
Learn more in [Supported data types](/analysts/data-types).
::::

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a MongoDB connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from MongoDB connections in the following ways:

- When you browse a MongoDB connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.
