---
title: DynamicSelect
id: dynamic-select
slug: /analysts/dynamic-select
description: Dynamically filter columns of your dataset based on a set of conditions
tags:
  - gems
  - analyst
  - prepare
---

<span class="badge">SQL</span><br/><br/>

Use the DynamicSelect gem to dynamically filter columns of your dataset based on a set of conditions.

## Parameters

| Parameter     | Description                                                                                                                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration | <ul class="table-list"><li>Select field types: Use checkboxes to select column types to keep in the dataset, such as string, decimal, or date.</li><li>Select via expression: Create an expression that limits the type of columns to keep in the dataset.</li></ul> |

## Examples

You’ll use DynamicSelect when you want to avoid hard-coding your choice of columns. In other words, rather than define each column to keep in your pipeline, you let the Prophecy automatically choose the columns based on certain conditions or rules.

### Remove date columns using field type

Assume you would like to remove irrelevant date and timestamp columns from your dataset. You can do so with the **Select field types** method by selecting all field types to maintain, except for date and timestamp.

### Remove date columns with an expression

Using the same example, you can accomplish the same task with the **Select via expression** method by inputting the the expression `column_type NOT IN ('date', 'timestamp')`.
