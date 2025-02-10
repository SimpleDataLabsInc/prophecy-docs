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

:::note

If you want to create new columns based on a set of conditions (rather than perform in-place replacement), you can use [business rules](docs/Spark/functions/business-rules-engine/business-rules-engine.md).

:::

## Parameters

| Parameter                | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| Field Name Field         | Column from **in1** that contains field names from **in0**.                                                                        |
| Boolean Expression Field | Column from **in1** that contains an expression that is used to evaluate the data from **in0**.                                    |
| Output Value Field       | Column from **in1** that contains replacement data. It can contain static values or expressions that act on the data from **in0**. |
| Values are Expressions   | Checkbox to enable if the Output Value column contains expressions to define the replacement value.                                |

If a value does not meet a condition, then it will be replaced with a **null** value.

:::note

Expressions must be in Spark SQL format.

:::

## Example

If you have a dataset with a numeric column and need to apply an upper limit to its values dynamically, you can use the DynamicReplace gem. In this example, any value in a certain column over 200,000 (like 250,000) will be replaced with the value 200,000.

### Define datasets

The DynamicReplace gem requires two inputs. These are:

- The **original dataset**. This contains the target column(s) for replacement and is the **in0** of the DynamicReplace gem.
- The **parameters dataset**. This contains the dynamic replacement parameters and is the **in1** of the DynamicReplace gem.

The parameters dataset must follow a specific format to define how values should be replaced. Below is an example parameters table:

| original_column | condition       | output_value |
| --------------- | --------------- | ------------ |
| sales           | sales > 200000  | 200000       |
| sales           | sales <= 200000 | sales        |

Each row represents a condition that will be applied to a certain column. In this case, these conditions are:

- If the value of a sale is more than 200,000, it is replaced with 200,000.
- If the value of a sale is less than or equal to 200,000, it remains unchanged.

:::tip

You can also add conditions for multiple columns in this parameters dataset if required by your use case.

:::

### Configure the gem

Once you have both datasets in your pipeline:

1. Add a DynamicReplace gem to the pipeline canvas.
1. Connect the inputs to the DynamicReplace gem.
1. Configure the DynamicReplace gem.

For this example, you would configure the gem using the following values:

| Parameter                | Value           |
| ------------------------ | --------------- |
| Field Name Field         | original_column |
| Boolean Expression Field | condition       |
| Output Value Field       | output_value    |
| Values are Expressions   | enabled         |
