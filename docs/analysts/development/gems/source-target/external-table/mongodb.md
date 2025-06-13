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

Use a table from MongoDB as an external source or target.

## Parameters

| Parameter                   | Tab             | Description                                                       |
| --------------------------- | --------------- | ----------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                |
| Format type                 | Source location | Format of the gem. In this case, `mongodb`.                       |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one. |
| Database                    | Source location | Database where the table is or will be located.                   |
| Name                        | Source location | Name of the external table.                                       |

### Source properties

| Property                                     | Description                                                            | Default |
| -------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| Description                                  | Description of the table.                                              | None    |
| No. of docs to consider for Schema inference | Number of documents to sample from the collection to infer the schema. | None    |

### Target properties

| Property    | Description                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------- |
| Description | Description of the table.                                                                            | None    |
| Write Mode  | Whether to overwrite the table, append new data to the table, or throw an error if the table exists. | None    |
