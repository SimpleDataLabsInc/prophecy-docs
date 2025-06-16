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

<!--
### Source properties

| Property                     | Description                                           | Default           |
| ---------------------------- | ----------------------------------------------------- | ----------------- |
| Description                  | Description of the table.                             | Copilot-generated |
| Identifier                   | Specific name to identify the table.                  |                   |
| Loaded At Field              | Timestamp used to determine freshness of data.        |                   |
| Tags                         | Tags for organizing or classifying the source.        |                   |
| Freshness Warn After Count   | Threshold count before raising a warning.             | `0`               |
| Freshness Warn After Period  | Time unit used with above count.                      | hour              |
| Freshness Error After Count  | Threshold count before marking freshness as an error. | `0`               |
| Freshness Error After Period | Time unit used with above count.                      | hour              |
| Freshness Filter             | Optional SQL clause to restrict freshness checks.     |                   |
| Quoting Database             | Whether to quote database name in SQL                 |                   |
| Quoting Schema               | Whether to quote schema name in SQL                   |                   |
| Quoting Identifier           | Whether to quote identifier in SQL                    |                   | -->

## Target parameters

When you add a Table gem to the end of your pipeline, configure it with the following parameters.

| Parameter       | Description                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Type and Format | Select `Table`.                                                                                                                                              |
| Location        | Choose the location where the table will be stored. You can create a new table by writing a new table name.                                                  |
| Properties      | Define certain properties of the table. The schema cannot be changed for target tables.                                                                      |
| Write Options   | Select how you want the data to be written each time you run the pipeline. For more information, see [Write Options](/engineers/write-options-target-model). |
| Preview         | Load the data to see a preview before saving.                                                                                                                |

<!--
### Target properties

| Property                     | Description                                           | Default           |
| ---------------------------- | ----------------------------------------------------- | ----------------- |
| Description                  | Description of the table.                             | Copilot-generated |
| Identifier                   | Specific name to identify the table.                  | None              |
| Loaded At Field              | Timestamp used to determine freshness of data.        | None              |
| Tags                         | Tags for organizing or classifying the source.        | None              |
| Freshness Warn After Count   | Threshold count before raising a warning.             | `0`               |
| Freshness Warn After Period  | Time unit used with above count.                      | hour              |
| Freshness Error After Count  | Threshold count before marking freshness as an error. | `0`               |
| Freshness Error After Period | Time unit used with above count.                      | hour              |
| Freshness Filter             | Optional SQL clause to restrict freshness checks.     | None              |
| Quoting Database             | Whether to quote database name in SQL.                | Disabled          |
| Quoting Schema               | Whether to quote schema name in SQL.                  | Disabled          |
| Quoting Identifier           | Whether to quote identifier in SQL.                   | Disabled          |
| Contract Enforced            |                                                       | false             |
| Show Docs                    |                                                       | false             |
| Enabled                      | Enable or disable the model.                          | true              |
| Meta                         | Set metadata for the table.                           | None              |
| Group                        |                                                       | None              |
| Persist Docs Columns         |                                                       | false             |
| Persist Docs Relations       |                                                       | false             |
| Clustered By                 |                                                       | `+`               |
| Buckets                      |                                                       | `0`               | -->
