---
title: MongoDB
id: mongodb
slug: /analysts/mongodb
description: Read and write from MongoDB
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Use a table from MongoDB as an external source or target.

## Parameters

| Parameter                   | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| Location type               | Location you want to connect from.                                |
| Select or create connection | Whether to select an existing connection, or to create a new one. |
| Database                    | Database where the table is or will be located.                   |
| Name                        | The name of the external table.                                   |

## Source Properties

| Property                                     | Description                                                            | Default |
| -------------------------------------------- | ---------------------------------------------------------------------- | ------- |
| Description                                  | Description of the table.                                              | None    |
| No. of docs to consider for Schema inference | Number of documents to sample from the collection to infer the schema. | None    |
