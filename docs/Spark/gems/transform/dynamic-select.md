---
sidebar_position: 10
title: Dynamic Select
id: dynamic-select
description: Dynamically filter columns of your dataset based on a set of conditions.
tags:
  - gems
  - filter
  - dynamic
---

Use the Dynamic Select Gem to dynamically filter columns of your dataset based on a set of conditions.

## Configuration

There are two ways to configure the Dynamic Select.

| Configuration         | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| Select field types    | Choose one or more types of columns to keep in the dataset, such as `String`, `Decimal`, or `Date`.       |
| Select via expression | Create an expression that limits the type of columns to keep in the dataset.                              |

## Example

You’ll use Dynamic Select when you want to avoid hard-coding your choice of columns. In other words, rather than define each column to keep in your Pipeline, you let the system automatically choose the columns based on certain conditions or rules.

### Remove date columns using field type

Assume you would like to remove irrelevant date and timestamp columns from your dataset. You can do so by selecting all field types to maintain, except for date and timestamp.

<!-- ![Keep all columns except Date and Timestamp column using the visual interface](./img/remove-date-timestamp.png) -->

### Remove date columns with an expression

Using the same example, you can also accomplish this using the expression `column_type != date`.

<!-- ![Keep all columns except Date and Timestamp columns using an expression](./img/remove-date-timestamp.png) -->
