---
title: OrderBy
id: order-by
description: Sort your data based on one or more Columns
tags:
  - gems
  - order by
  - sort
  - ascending
  - descending
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1"
/>

Sorts a model on one or more columns in ascending or descending order.

### Parameters

| Parameter     | Description                                | Required |
| ------------- | ------------------------------------------ | -------- |
| Model         | Input Source to be sorted                  | True     |
| Order columns | Columns to sort the model by               | True     |
| Sort          | Order of sorting - ascending or descending | True     |

### Example

![Example usage of OrderBy](./img/orderby_eg_0.png)
