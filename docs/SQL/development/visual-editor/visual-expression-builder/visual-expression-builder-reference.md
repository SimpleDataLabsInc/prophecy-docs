---
title: Visual Expression Builder reference
id: visual-expression-builder-reference
description: Visual Expression Builder reference
sidebar_position: 3
tags:
  - reference
  - development
  - visual
  - functions
  - expression
  - sql
---

This page contains a reference of the different Visual Expression Builder components, which include the expression options, operator options, and data types.

## Expression options

The Visual Expression Builder supports the following expression options:

- **Column**: Allows you to select an input column from your source tables. You can view all of the available input columns from under the dropdown menu or under **Input** on the left-hand side of the Gem dialog.
- **Value**: Allows you to enter any kind of value.
  - If you enter a string value, it'll be considered as a string within quotes.
  - If you enter a number, it'll be considered as a numerical value, but you have the option to click to **Check to read value as string**.
  - The same applies to a boolean value. For example, if you enter `True`, then it'll be considered a boolean value unless you **Check to read value as string**.
- **Function**: Includes a list of all of the function category groups and functions that are supported. The list displays each function description, including mandatory arguments.
- **Data type cast**: Allows you to cast a variant column into its appropriate data type. Instead of explicit casting, you can use `TRY_CAST` to avoid errors by setting the data type to `null` on failure.
  :::note
  For Snowflake, `TRY_CAST` is only supported on string type of data.
  :::
- **Conditional**: Allows you to use a conditional `WHEN` clause.
  - Within `WHEN`, you use a comparison expression.
  - Within `THEN` you use a simple expression.
  - You can add multiple `CASES` of the `WHEN` clause, but you can only have one `ELSE` statement.
    - `ELSE` also uses a simple expression.
  - You can also add `IF`, `ELSEIF`, or `FOR` conditions between each of your expressions.
    - `FOR` conditions take a variable name and an expression value.
    - `IF` and `ELSEIF` conditions are considered comparisons.
    - These are available only in expressions tables in Aggregate, Join, and Reformat Gems.
- **Configuration Variable**: Consists of **Model Variables** and **Project Variables**. You can see and edit your variables from the canvas settings by navigating to **...** > **Configuration**. When you select a Project Variable, you can add a default value if no value is set in the Configuration setting.
- **Incremental**: Allows you to use for advanced dbt configurations.
- **Custom Code**: Allows you can write your own custom code to create your own expressions that are not yet supported by the Visual Expression Builder. For example, you can use custom code to use mathematical operations, such as addition and subtraction. As you type, you'll be given suggestions.

## Operator options

The Visual Expression Builder supports the following operator options.

### Comparison operators

Expressions can use the following comparison operators:

- **equals**
- **not equals**
- **less than**
- **less than or equal**
- **greater than**
- **greater than or equal**
- **between**

### Existence checks

Expressions support the following existence checks:

- **is null**
- **is not null**
- **in**
- **not in**

## Data types

The Visual Expression Builder supports the following data types:

- **Basic**:
  - Boolean
  - String - String / Varchar
  - Date & time - Date / Datetime / Timestamp / Timestamp NTZ
  - Number - Integer / Long / Short
  - Decimal number - Decimal / Double / Float
- **Other**:
  - Binary
  - Byte
  - Char
  - Calendar interval / Day time interval / Year month interval
  - Null
  - Variant

### Booleon predicates

Expressions support the following boolean predicates:

- **Unary**:
  - Exists (in subquery)
  - In
  - Is null
- **Binary**:
  - Between
  - Equality
  - Less than
  - Then than or equal
  - Greater than
  - Greater than or equal
- **Groups**:
  - Not
  - And
  - Or
