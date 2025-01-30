---
title: DynamicReplace
id: dynamic-replace
description: Dynamically generate values depending on certain conditions
tags:
  - gems
  - transform
---

<h3><span class="badge">Spark Gem</span></h3>

Use the DynamicReplace gem to replace a set of values with dynamically generated values depending on certain conditions.

## Parameters

| Parameter                | Description                                                                                                                                            |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Field Name Field         | Column from the in1 input that contains field names from the in0 input.                                                                                |
| Boolean Expression Field | Column from the in1 input that contains an expression that is used to evaluate the data from the in0 input.                                            |
| Output Value Field       | Column from the in1 input that contains replacement data. The column can contain static values or expressions that act on the data from the in0 input. |
| Values are Expressions   | Checkbox to enable if the column selected for Output Value Field contains expressions that will act on the data from the in0 input.                    |
