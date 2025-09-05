---
title: MongoDB
id: mongodb
slug: /analysts/mongodb
description: Read and write from MongoDB
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

This page describes how to configure MongoDB Source and Target gems, including connection setup, schema options, and available write modes. Use the MongoDB Source or Target gem to read from or write to MongoDB collections within your pipeline.

## Configuration tabs

When you create a new external Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Select the MongoDB table option.
- **Source/Target location**: Choose the [connection](/core/prophecy-fabrics/connections/) and define the location where you will read/write tables in MongoDB.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure a MongoDB Source gem for reading data from a collection.

### Source location

| Parameter                   | Description                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the target. For MongoDB, set to `mongodb`.                                                                  |
| Select or create connection | Select or create a new [MongoDB connection](/core/prophecy-fabrics/connections/mongodb) in the Prophecy fabric you will use. |
| Database                    | Database containing the table you want to read from.                                                                         |
| Name                        | Name of the MongoDB table to read.                                                                                           |

### Source properties

| Property                                     | Description                                                            | Default |
| -------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| Description                                  | Description of the table.                                              | None    |
| No. of docs to consider for Schema inference | Number of documents to sample from the collection to infer the schema. | None    |

## Target configuration

Use these settings to configure a MongoDB Target gem for writing data to a collection.

### Target location

| Parameter                   | Description                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the target. For MongoDB, set to `mongodb`.                                                                  |
| Select or create connection | Select or create a new [MongoDB connection](/core/prophecy-fabrics/connections/mongodb) in the Prophecy fabric you will use. |
| Database                    | Database where the target table will be created or updated.                                                                  |
| Name                        | Name of the MongoDB table to write data to. If the table doesn’t exist, it will be created automatically.                    |

### Target properties

| Property    | Description                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                            | None    |
| Write Mode  | Whether to overwrite the table, append new data to the table, or throw an error if the table exists. | None    |
