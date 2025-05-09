---
title: Visual expressions reference
id: visual-expression-builder-reference
slug: /analysts/visual-expression-builder-reference
description: visual expression builder reference
tags:
  - reference
  - development
  - visual
  - functions
  - expression
  - sql
---

This page contains a reference of the different visual expression builder components, which include the expression options, operator options, and data types.

## Expression options

The visual expression builder supports the following expression options.

| Option                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column                 | Select an input column from your source tables.<br/>You can view all of the available input columns from the dropdown menu.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Value                  | Enter any value. <ul class="table-list"><li>If you enter a string value, it'll be considered as a string within quotes.</li><li>If you enter a number, it'll be considered a numerical value, but you can click <strong>Check to read value as string</strong>.</li><li>The same applies to boolean values. For example, if you enter <code>True</code>, it'll be considered a boolean unless you select <strong>Check to read value as string</strong>.</li></ul>                                                                                                   |
| Function               | Choose a function from a list of all supported function category groups.<br/>The list displays each function's description, including mandatory arguments. You can optionally add additional arguments if applicable.                                                                                                                                                                                                                                                                                                                                                |
| Data type cast         | Cast a variant column into its appropriate data type. <ul class="table-list"><li>Use <code>TRY_CAST</code> to avoid errors. On failure, it sets the value to <code>null</code>.</li><li><strong>Note:</strong> For Snowflake, <code>TRY_CAST</code> is only supported on string data types.</li></ul>                                                                                                                                                                                                                                                                |
| Conditional            | Use a conditional `WHEN` clause. <ul class="table-list"><li>Within <code>WHEN</code>, use a comparison expression.</li><li>Within <code>THEN</code>, use a simple expression.</li><li>You can add multiple <code>CASES</code> but only one <code>ELSE</code>.</li><li><code>ELSE</code> also uses a simple expression.</li><li>You can also add <code>IF</code>, <code>ELSEIF</code>, or <code>FOR</code> conditions.</li><li><code>FOR</code> uses a variable name and expression value.</li><li><code>IF</code> and <code>ELSEIF</code> are comparisons.</li></ul> |
| Configuration Variable | Use a variable from the list of your [pipeline parameters](/analysts/pipeline-parameters) or project variables.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Incremental            | Use advanced dbt configurations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Custom Code            | Write your own custom code for expressions not supported by the visual expression builder.<br/>As you type, suggestions will be provided.                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Data types

| Category | Supported Types                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Basic    | <ul class="table-list"><li>`Boolean`</li><li>`String` - String / Varchar</li><li>`Date & time` - Date / Datetime / Timestamp / Timestamp NTZ</li><li>`Number` - Integer / Long / Short</li><li>`Decimal number` - Decimal / Double / Float</li></ul> |
| Other    | <ul class="table-list"><li>`Binary`</li><li>`Byte`</li><li>`Char`</li><li>`Calendar interval` / `Day time interval` / `Year month interval`</li><li>`Null`</li><li>`Variant`</li></ul>                                                               |

## Comparison operators

| Operator                | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `equals`                | Checks if two values are equal.                        |
| `not equals`            | Checks if two values are not equal.                    |
| `less than`             | Checks if a value is less than another.                |
| `less than or equal`    | Checks if a value is less than or equal to another.    |
| `greater than`          | Checks if a value is greater than another.             |
| `greater than or equal` | Checks if a value is greater than or equal to another. |
| `between`               | Checks if a value lies between two others.             |

## Existence checks

| Operator      | Description                                 |
| ------------- | ------------------------------------------- |
| `is null`     | Checks if a value is null.                  |
| `is not null` | Checks if a value is not null.              |
| `in`          | Checks if a value exists in a given list.   |
| `not in`      | Checks if a value does not exist in a list. |

## Boolean predicates

| Type   | Predicates                                                                                                                                                                |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unary  | <ul class="table-list"><li>`Exists` (in subquery)</li><li>`In`</li><li>`Is null`</li></ul>                                                                                |
| Binary | <ul class="table-list"><li>`Between`</li><li>`Equality`</li><li>`Less than`</li><li>`Less than or equal`</li><li>`Greater than`</li><li>`Greater than or equal`</li></ul> |
| Groups | <ul class="table-list"><li>`Not`</li><li>`And`</li><li>`Or`</li></ul>                                                                                                     |
