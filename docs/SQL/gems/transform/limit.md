---
title: Limit
id: limit
description: Limit the number of rows
tags:
  - gems
  - limit
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

Limits the number of rows in the output.

### Parameters

| Parameter | Description                                                               | Required |
| :-------- | :------------------------------------------------------------------------ | :------- |
| Model     | Input Source                                                              | True     |
| Limit     | Number of rows required in output (Allowed range: [0, 2<sup>31</sup> -1]) | True     |

### Example

![Example usage of Limit](./img/limit_eg_1.png)
