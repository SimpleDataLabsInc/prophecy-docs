---
title: MSSQL
id: mssql
slug: /analysts/mssql
description: Read and write from MSSQL database
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a table from MSSQL as an external source or target.

## Parameters

| Parameter                   | Tab             | Description                                                       |
| --------------------------- | --------------- | ----------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                |
| Format type                 | Source location | Format of the gem. In this case, `mssql`.                         |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one. |
| Database                    | Source location | Database where the table is or will be located.                   |
| Schema                      | Source location | Schema where the table is or will be located.                     |
| Name                        | Source location | Name of the external table.                                       |
