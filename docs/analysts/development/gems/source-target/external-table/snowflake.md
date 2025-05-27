---
title: Snowflake
id: snowflake
slug: /analysts/snowflake
description: Read and write from Snowflake
tags: []
---

<span class="badge">Prophecy Automate</span><br/><br/>

Use a table from Snowflake as an external source or target.

## Parameters

| Parameter                   | Tab             | Description                                                       |
| --------------------------- | --------------- | ----------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                |
| Format type                 | Source location | Format of the gem. In this case, `snowflake`.                     |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one. |
| Database                    | Source location | Database where the table is or will be located.                   |
| Schema                      | Source location | Schema where the table is or will be located.                     |
| Name                        | Source location | Name of the external table.                                       |
