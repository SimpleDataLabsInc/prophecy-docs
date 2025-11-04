---
title: GenerateRows gem
sidebar_label: GenerateRows
id: generate-rows
slug: /analysts/generate-rows
description: Create new rows of data using iterative expressions
tags:
  - gems
  - analyst
  - prepare
---

The GenerateRows gem creates new rows of data at the record level using iterative expressions. This gem generates sequences of numbers, dates, or other values based on initialization, condition, and loop expressions.

The gem follows a three-step process to create rows:

1. **Initialization Expression**: Sets the starting value for the first row.
2. **Condition Expression**: Defines when to stop generating rows (true/false condition).
3. **Loop Expression**: Specifies how values change between iterations.

The gem continues generating rows until the condition expression evaluates to false, at which point the generation process terminates.

## Input and Output

The GenerateRows gem accepts optional input data and produces one output dataset containing the generated rows.

| Port    | Description                                                                                                                                                                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Optional input dataset. Columns from this dataset can be referenced in the gem expressions. <ul><li>If an input dataset is provided, the gem generates a separate sequence of rows for each input row. </li><li>If no input is provided, the gem generates a single sequence.</li></ul> |
| **out** | Output dataset containing: <ul><li>All original input columns (if input is provided)</li><li>The new generated column with values created by the iterative expressions</li></ul> Each input row may produce multiple output rows depending on the loop and condition expressions.       |

## Parameters

Configure the GenerateRows gem using the following parameters.

| Parameter                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Choose output column name         | Name of the column that will contain the generated values. Each generated value in this column corresponds to one row created by the gem’s iterative process.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Configure row generation strategy | SQL logic for generating rows using three expressions: <ul><li>**Initialization expression**: Sets the starting value for the generation process. This is the value of the first generated row.</li><li>**Condition expression**: Determines how long to continue generating rows. Rows are added while this expression evaluates to true. Can reference input columns or the output column value.</li><li>**Loop expression (usually incremental)**: Specifies how the generated value changes each iteration. Typically an increment, but can be any expression that modifies the output column value.</li></ul> |
| Max rows per iteration            | Maximum number of rows generated per sequence. This limit prevents infinite loops or excessive memory usage. <br/>**Default**: 100,000 rows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

:::info Reference Columns
To reference input columns in the **Condition expression** and **Loop expression** fields, you must use the following format:

`payload.<columnName>`

:::

### Expression examples

Reference the following examples to understand how to build different expressions for this gem. All expressions must be valid SQL. To reference the iterative value, use the output column name you defined.

#### Initialization expression examples

| Expression       | Description                                        |
| ---------------- | -------------------------------------------------- |
| `1`              | Start with the number 1                            |
| `StartDate`      | Use a value from an input column named `StartDate` |
| `CURRENT_DATE()` | Start with today's date                            |

#### Condition expression examples

| Expression         | Description                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| `value <= 10`      | Generate rows while value is less than or equal to 10                     |
| `value < MaxValue` | Continue until value reaches a maximum from input column named `MaxValue` |
| `date <= EndDate`  | Generate dates until reaching an end date defined in an `EndDate` column  |

#### Loop expression examples

| Expression              | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| `value + 1`             | Increment by 1 each iteration                                            |
| `value + StepSize`      | Increment by a variable step size defined in the input column `StepSize` |
| `date + INTERVAL 1 DAY` | Add one day for date sequences                                           |

## Gem examples

The following sections demonstrate different gem configurations and their corresponding outputs.

### Create sequence

Assume you need to create a sequence of numbers from 1 to 10 for testing purposes or to generate row IDs. You want to create a simple numeric sequence that can be used as a foundation for other data operations. Use the following configuration:

- **Input dataset**: none
- **Choose output column name**: `value`
- **Initialization expression**: `1`
- **Condition expression**: `value <= 10`
- **Loop expression (usually incremental)**: `value + 1`
- **Max rows per iteration**: `100`

If no input table is present, the following output table is generated:

<div class="table-example">

| value |
| ----- |
| 1     |
| 2     |
| 3     |
| 4     |
| 5     |
| 6     |
| 7     |
| 8     |
| 9     |
| 10    |

</div>

The gem generates 10 rows with sequential values from 1 to 10. The process starts with the initialization value of 1, continues generating rows while the condition `value <= 10` is true, and increments the value by 1 in each iteration.

### Increment dates

Assume you want to generate a range of dates. To do so, you can use the following gem configuration:

- **Input dataset**: none
- **Choose output column name**: `date`
- **Initialization expression**: `'2024-01-01'`
- **Condition expression**: `date <= '2024-01-07'`
- **Loop expression (usually incremental)**: `date + INTERVAL 1 DAY`

This would generate 7 rows with consecutive dates from January 1st through January 7th, 2024.

### Leverage input data

Assume you have input data that you want to use to influence the expressions in the gem configuration. You might have the following input table called `Constants`:

<div class="table-example">

| min_value | max_value | step_size |
| --------- | --------- | --------- |
| 5         | 20        | 3         |

</div>

To leverage this table, you can use the following gem configuration:

- **Input dataset**: `Constants` table
- **Choose output column name**: `sequence`
- **Initialization expression**: `min_value`
- **Condition expression**: `sequence <= max_value`
- **Loop expression (usually incremental)**: `sequence + step_size`

This would produce the following output table:

<div class="table-example">

| min_value | max_value | step_size | sequence |
| --------- | --------- | --------- | -------- |
| 5         | 20        | 3         | 5        |
| 5         | 20        | 3         | 8        |
| 5         | 20        | 3         | 11       |
| 5         | 20        | 3         | 14       |
| 5         | 20        | 3         | 17       |
| 5         | 20        | 3         | 20       |

</div>

The gem processes the input row and generates a sequence starting at 5, incrementing by 3, and continuing until reaching 20.
