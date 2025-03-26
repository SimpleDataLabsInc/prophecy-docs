---
title: Functions
id: functions
slug: /analysts/functions
description: Use dbt macros in your pipelines
tags:
  - gems
  - analyst
  - function
---

In SQL projects, functions are SQL macros that transform data at the column level. Unlike gems, which operate at the table level, functions apply transformations to individual columns, making them useful for data cleansing, formatting, and complex calculations. Functions are compiled into code using the Jinja templating language (standard for dbt macros).

You will use functions as [expressions](docs/analysts/development/gems/visual-expression-builder/visual-expression-builder.md) in gems.

## Create a function

To add a new function to your project, perform the following steps.

1. Open a SQL project.
1. Click **Add Entity** in the project sidebar.
1. Select **Function**.
1. Name the function.
1. Keep the function in the `macros` directory.
1. Click **Create**.

This opens the function configuration screen.

## Build the function

You can build functions visually by populating the following fields.

| Field       | Description                                                                                              |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| Description | A summary of what the function will do.                                                                  |
| Parameters  | The parameters (arguments) that will be passed to the function. Parameters can be values or table names. |
| Definition  | SQL code that will be executed by the function.                                                          |

## Example: Concatenate columns

Use the following example to learn how to build a function and use it in your pipeline. This example demonstrates a function that concatenates values from a `first_name` and `last_name` column in a customer table.

1. Click **+Add Entity** in the project sidebar.
1. Select **Function**.
1. Name the function `concat_name`.
1. Click **Create**.
1. Add the following description: `Concatenates customer first and last names in a new column`.
1. Add two parameters to the function: `first_name` and `last_name`.
1. Add the following to the macro body

```jinja
{% macro concat_name(first_name, last_name) %}
CONCAT(
    UPPER(LEFT({{ first_name }}, 1)),
    LOWER(SUBSTRING({{ first_name }}, 2)),
    ' ',
    UPPER(LEFT({{ last_name }}, 1)),
    LOWER(SUBSTRING({{ last_name }}, 2))
)
{% endmacro %}
```

To use this function in your pipeline:

1. Add a Reformat gem to the pipeline canvas.
1. For the target column, create a new column named `full_name`.
1. For the expression, select **Function > concat_name**.
1. For the function parameters, choose a first name columns and a last name column.
1. Save and run the gem.

In summary, this function inside of the Reformat gem let us combine customer first and last names into a new column: `full_name`.
