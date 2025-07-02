---
title: Redshift
id: redshift
slug: /analysts/redshift
description: Read and write from Redshift
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Use a table from Redshift as an external source or target.

## Source configuration

### Source location

| Parameter                   | Description                                                                                                                                      |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Format type                 | Format of the gem. In this case, `redshift`.                                                                                                     |
| Select or create connection | Select or create a new [Redshift connection](/administration/fabrics/prophecy-fabrics/connections/redshift) in the Prophecy fabric you will use. |
| Database                    | Database where the table is or will be located.                                                                                                  |
| Schema                      | Schema where the table is or will be located.                                                                                                    |
| Name                        | Name of the external table.                                                                                                                      |

### Source properties

## Table configuration

### Table location

### Table properties
