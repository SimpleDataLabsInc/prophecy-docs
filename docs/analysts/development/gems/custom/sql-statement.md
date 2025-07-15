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

Use a custom SQL statement in your pipeline. The SQLStatement gem supports SELECT statements. This gem does not support actions like inserting or deleting tables.

## Input and Output

The SQLStatement gem uses the following input and output ports.

| Port    | Description                           |
| ------- | ------------------------------------- |
| **in0** | (Optional) Input table used in query. |
| **out** | Output table with query results.      |

By default, the SQL statement gem does not include an input port. To add a port, click the `+` button next to **Ports**. Alternatively, connect the previous gem to the SQLStatement gem directly to add a new input port.

:::info
Number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab.
To learn more about adding and removing ports, see [Gem ports](/analysts/gems#gem-ports).
:::

## Parameters

Configure the SQLStatement gem using the following parameters.

| Parameter | Meaning                                   |
| --------- | ----------------------------------------- |
| Out       | SQL query that defines the output result. |

:::note
Write your SQL query in the syntax of your SQL warehouse provider. For example, if you're connected to a Databricks SQL warehouse, use Databricks SQL dialect.
:::

:::tip
To reference the input table in the SQL query, use the name of the gem that generates the input table.
:::

## Example

Assume you have a gem named `weather_predictions`. It outputs the following table.

<div class="table-example">

| DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-01     | 15                 | 65              | 10        | Sunny     |
| 2025-03-02     | 17                 | 70              | 12        | Cloudy    |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>

To filter out predictions before March 3:

1. Add a SQLStatement gem to the canvas.

1. Connect the `weather_predictions` gem to the SQLStatement gem directly in the canvas.

   Alternatively, add an input port in the gem configuration and choose the `weather_predictions` gem for **in0**.

1. In the code editor, paste the following query.

   ```sql
   SELECT *
   FROM weather_predictions
   WHERE DatePrediction > '2025-03-02'
   ```

   This query uses the gem name `weather_predictions` as the table name in the SELECT statement.

1. Run the gem. The following table appears as the gem output.

   <div class="table-example">

   | DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
   | -------------- | ------------------ | --------------- | --------- | --------- |
   | 2025-03-03     | 16                 | 68              | 11        | Rainy     |
   | 2025-03-04     | 14                 | 72              | 9         | Sunny     |

   </div>
