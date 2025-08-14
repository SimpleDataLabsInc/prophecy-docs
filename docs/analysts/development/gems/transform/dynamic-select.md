---
title: DynamicSelect gem
id: dynamic-select
slug: /analysts/dynamic-select
description: Dynamically filter columns of your dataset based on a set of conditions
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

Use the DynamicSelect gem to dynamically filter columns of your dataset based on a set of conditions to avoid hard-coding your choice of columns.

## Parameters

| Parameter     | Description                                                                                                                                                                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Configuration | Whether to filter the columns visually or with code.<ul class="table-list"><li>Select field types: Use checkboxes to select column types to keep in the dataset, such as string, decimal, or date.</li><li>Select via expression: Create an expression that limits the type of columns to keep in the dataset.</li></ul> |

## Example

Let's say you have the following table with weather prediction data.

<div class="table-example">

| DatePrediction - `Date` | TemperatureCelsius - `Integer` | HumidityPercent - `Integer` | WindSpeed - `Float` | Condition - `String` |
| ----------------------- | ------------------------------ | --------------------------- | ------------------- | -------------------- |
| 2025-03-01              | 15                             | 65                          | 10.0                | Sunny                |
| 2025-03-02              | 17                             | 70                          | 12.2                | Cloudy               |
| 2025-03-03              | 16                             | 68                          | 11.0                | Rainy                |
| 2025-03-04              | 14                             | 72                          | 9.8                 | Sunny                |

</div>

### Remove columns using field type

Assume you would like to remove irrelevant float and string columns from your dataset. You can do so with the **Select field types** method by selecting all field types to maintain, except for float and string.

### Remove columns with an expression

Using the same example, you can accomplish the same task with the **Select via expression** method by inputting the the expression `column_type NOT IN ('Float', 'String')`.

:::note
Be aware that column types are case sensitive. Use the same format shown in the input table schemas in the gem configuration.
:::

### Result

<div class="table-example">

| DatePrediction - `Date` | TemperatureCelsius - `Integer` | HumidityPercent - `Integer` |
| ----------------------- | ------------------------------ | --------------------------- |
| 2025-03-01              | 15                             | 65                          |
| 2025-03-02              | 17                             | 70                          |
| 2025-03-03              | 16                             | 68                          |
| 2025-03-04              | 14                             | 72                          |

</div>
