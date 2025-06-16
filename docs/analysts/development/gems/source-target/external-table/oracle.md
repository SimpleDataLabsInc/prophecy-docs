---
title: Oracle
id: oracle
slug: /analysts/oracle
description: Read and write from Oracle
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a table from Oracle as an external source.

:::note
Oracle target not supported.
:::

## Source parameters

| Parameter                   | Tab             | Description                                                                                                                                                                                                  |
| --------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection type             | Type            | Location you want to connect from.                                                                                                                                                                           |
| Format type                 | Source location | Format of the gem. In this case, `oracle`.                                                                                                                                                                   |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                                                                                                                                            |
| Read using                  | Source location | Choose table or query.<ul class="table-list"><li>**Table**: Provide the schema and name of the table you want to read.</li><li>**Query**: Enter a SQL query directly in the gem to select a table.</li></ul> |
