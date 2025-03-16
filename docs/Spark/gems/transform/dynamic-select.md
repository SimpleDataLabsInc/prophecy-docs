---
title: DynamicSelect
id: dynamic-select
description: Dynamically filter columns of your dataset based on a set of conditions
tags:
  - gems
  - filter
  - dynamic
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.27+"
  scala_package_name=""
  scala_package_version=""
  scala_lib="8.2.1"
  python_lib="1.9.16"
  uc_single="14.3+"
  uc_shared=""
  livy="3.0.1"
/>

Use the DynamicSelect gem to dynamically filter columns of your dataset based on a set of conditions.

## Configuration

There are two ways to configure the DynamicSelect.

| Configuration         | Description                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------- |
| Select field types    | Choose one or more types of columns to keep in the dataset, such as string, decimal, or date. |
| Select via expression | Create an expression that limits the type of columns to keep in the dataset.                  |

## Examples

You’ll use DynamicSelect when you want to avoid hard-coding your choice of columns. In other words, rather than define each column to keep in your pipeline, you let the system automatically choose the columns based on certain conditions or rules.

### Remove date columns using field type

Assume you would like to remove irrelevant date and timestamp columns from your dataset. You can do so with the **Select field types** method by selecting all field types to maintain, except for date and timestamp.

![Keep all columns except Date and Timestamp column using the visual interface](./img/remove-date-timestamp.png)

### Remove date columns with an expression

Using the same example, you can accomplish the same task with the **Select via expression** method by inputting the the expression `column_type NOT IN ('date', 'timestamp')`.
