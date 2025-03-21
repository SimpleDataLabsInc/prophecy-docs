---
title: Flatten Schema
id: flattenschema
description: Flatten nested data
tags:
  - gems
  - schema
  - explode
  - flatten
---

<h3><span class="badge">SQL Gem</span></h3>

The FlattenScema gem helps you flatten complex data types, such as `Struct` and `Array`, to preserve all schemas when you process raw data.

![The FlattenSchema gem](./img/flatten_gem.png)

You can use the FlattenSchema gem with Snowflake sources that have nested columns that you'd like to extract into a flat schema.

## Example

Assume you have the following input schema:

![Input schema](./img/flatten_input.png)

And, you have the following data:

![Input data](./img/flatten_input_interim.png)

And, you want to extract the `contact` field.

### Expressions

The FlattenSchema gem allows you to extract nested fields into a flattened schema.

For example, to extract the `contact` field:

1. In the **Input** tab, navigate to the `contact` field.
1. Hover over the `contact` field and click the **Add Column** button.

   Now, the `contact` field is in the `Expressions` section.

   :::tip
   You can click to add all columns, which would make all nested leaf level values of an object visible as columns.
   :::

1. (Optional) To change the name of the column in the output, change the value in the `Output Column` for the `contact` row.

![Adding expressions](./img/flatten_add_exp.png)

### Output

The `Output` tab shows you the schema based on the selected columns:

![Output interim](./img/flatten_output_interim.png)

The FlattenSchema gem flattened the `contact` field, which gives you individual rows for each `content` type.

## Advanced settings

You can use advanced settings to customize the optional column arguments.

To use the advanced settings:

1. Hover over the column you want to flatten.
1. Click the dropdown arrow.

   ![Advanced settings](./img/flatten_advanced_settings.png)

   You can customize the following options:

   | Option                              | Description                                                                                 | Default |
   | ----------------------------------- | ------------------------------------------------------------------------------------------- | ------- |
   | Path to the element                 | Path to the element within the variant data structure that you want to flatten.             | None    |
   | Flatten all elements recursively    | Whether to expand all sub-elements recursively.                                             | `false` |
   | Preserve rows with missing field    | Whether to include rows with missing fields as `null` in the key, index, and value columns. | `false` |
   | Datatype that needs to be flattened | Data type that you want to flatten. Possible values are: `Object`, `Array`, or `Both`.      | `Both`  |
