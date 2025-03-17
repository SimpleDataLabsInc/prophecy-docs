---
title: Functions
id: functions
description: Use dbt macros in your pipelines
tags:
  - gems
  - analyst
  - function
---

In SQL projects, functions are SQL macros that transform data at the column level. Unlike gems, which operate at the table level, functions apply transformations to individual columns, making them useful for data cleansing, formatting, and complex calculations.

Functions will be used as expressions in gems.

## Create a function

1. Open a SQL project.
1. Click **Add Entity** in the project sidebar.
1. Select **Function**.
1. Name the function.
1. Keep the function in the `macros` directory.
1. Click **Create**.

This opens the function configuration screen.

## Build the function

You can build functions visually by populating the following fields.

| Field       | Description                                                     |
| ----------- | --------------------------------------------------------------- |
| Description | A summary of what the function will do.                         |
| Parameters  | The parameters (variables) that will be passed to the function. |
| Definition  | SQL code that will be executed by the function.                 |

### Example

Assume you are building a function according to the following description: `Concatenates customer first and last names in a new column`.

## Add function to pipeline

To add the function to a pipeline, you can either:

1. Add it from the project sidebar.
1. Add a Macro gem and call the function.

## Code syntax

Functions are compiled into code using the Jinja templating language (standard for dbt macros).

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
