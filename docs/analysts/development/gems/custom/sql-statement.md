---
title: SQLStatement
id: sql-statement
slug: /analysts/sql-statement
description: Use a custom SQL statement
tags:
  - gems
  - analyst
  - custom
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Use a custom SQL statement in your pipeline. The SQLStatement gem supports SELECT statements.

### Parameters

| Parameter | Meaning                       |
| --------- | ----------------------------- |
| Out       | SQL query for each output tab |

### Example

![SQL example 1](./img/sqlstatement_eg_1.png)

:::info
Number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab.
:::
