---
sidebar_position: 5
title: Flatten Schema
id: flatten-schema
description: Flatten nested data
tags:
  - gems
  - schema
  - explode
  - flatten
---

When processing raw data it can be useful to flatten complex data types like `Struct`s and `Array`s into simpler, flatter schemas.

![The FlattenSchema gem](./img/flatten_gem.png)

## The Input

FlattenSchema works on DataFrames that have nested columns that you'd like to extract into a flat schema.

For example, with an input schema like so:

![Input schema](./img/flatten_input.png)

And the data looks like so:

![Input data](./img/flatten_input_interim.png)

We want to extract `count`, and all of the columns from the `struct`s in `events` into a flattened schema.

## The Expressions

Having added a `FlattenSchema` Gem to your Pipeline, all you need to do is click the column names you wish to extract and they'll be added to the `Expressions` section. Once added you can change the `Target Column` for a given row to change the name of the Column in the output.

![Adding Expressions](./img/flatten_add_exp.gif)

The `Columns Delimiter` dropdown allows you to control how the names of the new columns are derived. Currently dashes and underscores are supported.

## The Output

If we check the `Output` tab in the Gem, you'll see the schema that we've created using the selected columns.

![Output schema](./img/flatten_output.png)

And here's what the output data looks like:

![Output interim](./img/flatten_output_interim.png)

No more nested structures!

:::info
For more advanced use cases, the Spark `explode` function is available to use in the [Reformat](./reformat.md) Gem, [Custom SQL](../custom/sql-statement.md) Gem, or anywhere else that accepts Spark expressions.
:::
