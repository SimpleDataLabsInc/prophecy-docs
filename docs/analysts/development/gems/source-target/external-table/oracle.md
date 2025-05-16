---
title: Oracle
id: oracle
slug: /analysts/oracle
description: Read and write from Oracle
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Use a table from Oracle as an external source.

:::note
Oracle target not supported.
:::

## Source parameters

| Parameter                   | Tab             | Description                                                       |
| --------------------------- | --------------- | ----------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                |
| Format type                 | Source location | Format of the gem. In this case, `oracle`.                        |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one. |
| Read using                  | Source location | Whether to read with tables or queries.                           |

## Read using table

When you read with a table, you need to provide the:

- **Schema**: Schema where the table is located.
- **Name**: Name of the external table to read.

## Read using query

When you read using a query, you can write a query directly in the source gem to retrieve the correct table.
