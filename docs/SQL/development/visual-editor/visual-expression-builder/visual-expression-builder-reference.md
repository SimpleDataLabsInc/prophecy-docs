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

This page contains a reference of the different Visual Expression Builder components and options.

## Expression components

We support the following expression types and data types.

### Supported expression types

An expression can be build out of the following expression types:

- Static (native to SQL):
  - Column selection - e.g. `customer_id`, `amounts`, `right.customer_id`
  - Hardcoded value (based on the types listed below) - e.g. `15`, `Poland`, `Some longer value`
  - Function call - e.g. `concat(amount, " ", currency)`
  - Case statement - e.g. `WHEN active_flag = True THEN first_name OTHERWISE last_name`
- Dynamic (native to Prophecy - externally provided):
  - Configuration value - e.g. `$currency`
  - Secret value - e.g. `$jdbc_url`

### Supported data types

An expression can use the following data types:

- Basic:
  - Boolean
  - String: String / Varchar
  - Date & time: Date / Datetime / Timestamp / Timestamp NTZ
  - Number: Integer / Long / Short
  - Decimal number: Decimal / Double / Float
- Other (for future versions):
  - Binary
  - Byte
  - Char
  - Calendar interval / Day time interval / Year month interval
  - Null

And we support the following boolean predicates:

- Unary:
  - Exists (In subquery)
  - In
  - Is null
- Binary:
  - Between
  - Equality
  - Less than
  - Then than or equal
  - Greater than
  - Greater than or equal
- Groups:
  - Not
  - And
  - Or

## Expression

- **Column**: Select an input column. You can view all of the available input columns under the dropdown menu or under **Input** on the left.
- **Value**: You can type any kind of value. If you type a string value, we consider it as a string within quotes. If you type a number, it will be considered as a numerical value but you have the option to "Check to read value as string". The same applies to a boolean value. If you type `True`, then it will be considered a boolean value unless you "Check to read value as string".
- **Function**: List of all of the function category groups and functions we support. We display the function description, including mandatory arguments.
- **Conditional**: is a when clause. Within WHEN you can select your columns and operator, and within THEN you can add a single simple expression. You can add multiple cases, but you can only have one else statement. ELSE is also a simple expression.
  You can also add If, Else If, or For conditions between each of your expressions. For conditions take a variable name and an expression value. If and Else If conditions are comparisons.
- **Configuration Variable**: Consists of Model Variables and Project Variables. You can see and edit your variables from **...** > **Configuration**. When you select a Project Variable, you can add a default value if no value is set in the Configuration setting.
- **Incremental**: available for dbt configs.
- **Custom Code**: you can write your own custom code to create your own expressions that are not yet supported by the Visual Expression Builder. For example, you can use custom code to use mathematical operations, such as addition and subtraction.As you type, you'll be given suggestions.

## Operator

### Comparison operators

- **equals**:
- **not equals**:
- **less than**:
- **less than or equal**:
- **greater than**:
- **greater than or equal**:
- **between**:

### Existence checks

- **is null**:
- **is not null**:
- **in**:
- **not in**:
