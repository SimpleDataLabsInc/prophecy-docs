---
title: MultiColumnRename gem
sidebar_label: MultiColumnRename
id: multi-column-rename
slug: /analysts/multi-column-rename
description: Rename multiple columns in your dataset in a systematic way
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.4+"
/>

The MultiColumnRename gem can be used to systematically rename multiple columns at once.

## Parameters

| Field                    | Description                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Select columns to rename | Set of columns that you will rename.                                                                              |
| Rename method            | How you will rename columns. <br/>You can either add a prefix/suffix, or choose advanced rename (SQL expression). |

## Example

Assume you have the following table that includes the weather forecast for the next four days.

<div class="table-example">

| DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-01     | 15                 | 65              | 10        | Sunny     |
| 2025-03-02     | 17                 | 70              | 12        | Cloudy    |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>

To standardize column names by converting them to lowercase, use the **Advanced rename** option in the MultiColumnRename gem with a custom SQL expression.

1. Create a **MultiColumnRename** gem.

1. Open the gem configuration and stay in the **Visual** view.

1. Under **Select columns to rename**, select all columns.

1. For the **Rename method**, choose **Advanced rename**.

1. Click **Select expression > Function**.

1. Search for and select the `lower` function.

1. Inside of the `lower` function, click **expr > Custom Code**.

1. Inside of the code box, write `column_name`. This applies the function to the column name.

1. Click **Done** on the code box, and then click **Save** on your gem.

### Result

After saving and running the gem, all selected columns will be renamed using the lower function. In this case, all column names will be lowercase in the output table.

<div class="table-example">

| dateprediction | temperaturecelsius | humiditypercent | windspeed | condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-01     | 15                 | 65              | 10        | Sunny     |
| 2025-03-02     | 17                 | 70              | 12        | Cloudy    |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>
