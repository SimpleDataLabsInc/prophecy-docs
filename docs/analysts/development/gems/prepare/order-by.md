---
title: OrderBy
id: order-by
slug: /analysts/order-by
description: Sort the data
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

Sorts a model on one or more columns in ascending or descending order.

## Parameters

| Parameter     | Description                                | Required |
| ------------- | ------------------------------------------ | -------- |
| Order columns | Columns to sort the model by               | True     |
| Sort          | Order of sorting (ascending or descending) | True     |

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

The follow table results when you order by the `HumidityPercent` column in **ascending** order.

<div class="table-example">

| DatePrediction | TemperatureCelsius | HumidityPercent | WindSpeed | Condition |
| -------------- | ------------------ | --------------- | --------- | --------- |
| 2025-03-01     | 15                 | 65              | 10        | Sunny     |
| 2025-03-03     | 16                 | 68              | 11        | Rainy     |
| 2025-03-02     | 17                 | 70              | 12        | Cloudy    |
| 2025-03-04     | 14                 | 72              | 9         | Sunny     |

</div>
