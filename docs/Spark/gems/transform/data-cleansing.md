---
title: DataCleansing
id: data-cleansing
description: Standardize data formats and address missing or null values in the data
tags:
  - gems
  - clean
  - format
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name=""
  python_package_version=""
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1"
/>

Use the DataCleansing gem to standardize data formats and address missing or null values in the data.

## Parameters

| Parameter                        | Description                                                     |
| -------------------------------- | --------------------------------------------------------------- |
| Select columns you want to clean | The set of columns on which to perform cleaning transformations |
| Remove null data                 | The method used to remove null data                             |
| Replace null values in column    | The method used to replace null values                          |
| Clean data                       | Different ways to standardize the format of data in columns     |

## Example

Assume you have a table that includes customer feedback on individual orders. In this scenario, some customers may not provide feedback, resulting in null values in the data. You can use the DataCleansing gem to replace null values with the string `NA`.

![Replace null with string](./img/replace-null-with-string.png)
