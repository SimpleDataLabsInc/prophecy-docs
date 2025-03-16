---
title: Filter
id: filter
description: Filter your data based on a custom filter condition
tags:
  - gems
  - filter
  - where
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

Filters models based on the provided filter condition.

### Parameters

| Parameter        | Description                                                 | Required |
| :--------------- | :---------------------------------------------------------- | :------- |
| Model            | Input Source on which the filter condition will be applied. | True     |
| Filter Condition | BooleanType column or boolean expression.                   | True     |

### Example

![Example usage of Filter](./img/filter_eg_1.png)
