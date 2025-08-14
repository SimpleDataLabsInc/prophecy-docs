---
title: Filter gem
id: filter
slug: /analysts/filter
description: Filter the data
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Filters models based on the provided filter condition.

## Parameters

| Parameter        | Description                                                 | Required |
| :--------------- | :---------------------------------------------------------- | :------- |
| Model            | Input Source on which the filter condition will be applied. | True     |
| Filter Condition | BooleanType column or boolean expression.                   | True     |

## Example

Assume you have the following weather prediction table.

<div class="table-example">

| DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-01     | 15                 | 65              | 10        | Sunny     |
| 2025-03-02     | 17                 | 70              | 12        | Cloudy    |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>

### Result

The follow table results when you use the following filter condition: `DatePrediction > '2025-03-02'`

<div class="table-example">

| DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>
