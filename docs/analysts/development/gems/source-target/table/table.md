---
title: Table
id: table
slug: /analysts/table
description: Tables in the SQL warehouse
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Tables represent persistent storage of structured data in your SQL warehouse. In a pipeline, tables can serve as sources, targets, or intermediate stages. This is useful for adding checkpoints to long-running jobs, persisting intermediate results for debugging or auditing, and enabling downstream reuse of cleaned or transformed data.

## Source parameters

When you create a Table gem at the beginning of your pipeline, configure it with the following parameters.

| Parameter       | Description                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Type and Format | Select `Table`.                                                                                             |
| Location        | Choose the location where the table will be stored. You can create a new table by writing a new table name. |
| Properties      | Define certain properties of the table, including the table schema.                                         |
| Preview         | Load the data to see a preview before saving.                                                               |

## Target parameters

When you add a Table gem to the end of your pipeline, configure it with the following parameters.

| Parameter       | Description                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| Type and Format | Select `Table`.                                                                                             |
| Location        | Choose the location where the table will be stored. You can create a new table by writing a new table name. |
| Properties      | Define certain properties of the table. The schema cannot be changed for target tables.                     |
| Write Options   | Select how you want the data to be written each time you run the pipeline.                                  |
| Preview         | Load the data to see a preview before saving.                                                               |
