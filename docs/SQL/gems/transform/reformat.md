---
title: Reformat
id: reformat
description: Select one or more columns or values using expressions and functions.
tags:
  - gems
  - select
  - reformat
  - transform
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

Transforms one or more column names or values by using expressions and/or functions. It's useful when we need to extract only the required columns or make changes column-wise.

## Parameters

| Parameter     | Description                                | Required                                 |
| :------------ | :----------------------------------------- | :--------------------------------------- |
| Model         | Input Source on which changes are required | True                                     |
| Target column | Output column name                         | False                                    |
| Expression    | Expression to compute target column        | Required if a `Target column` is present |

:::info
If no columns are selected, then all columns are passed through to the output
:::

## Example

![Example usage of Reformat](./img/reformat_eg_0.png)
