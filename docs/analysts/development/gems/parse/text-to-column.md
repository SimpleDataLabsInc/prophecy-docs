---
title: TextToColumn
id: text-to-column
slug: /analysts/text-to-column
description: Convert text into a column in your table
tags:
  - gems
  - analyst
  - parse
---

<span class="badge">SQL</span><br/><br/>

When working with certain tables, you might encounter text columns that contain multiple values separated by specific characters such as commas or semicolons.

Use the TextToColumn gem to parse this text and simplify further analysis and processing.

## Parameters

| Parameter              | Description                                                                                                                                                                                              |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Column to Split | The column that contains the text you would like to split.                                                                                                                                               |
| Delimiter              | The character that delimits the separate values.                                                                                                                                                         |
| Select Split Strategy  | <ul class="table-list"><li>Split to columns: Values will be split into individual rows in one or more columns.</li><li>Split to rows: Values will be split into individual rows in one column.</li></ul> |

## Example

Let's say you have the following table that includes bank account information. Note that some values in the `Beneficiaries` column contain multiple names separated by semicolons.

<div class="table-example">

| Account_Number | Account_Type | Balance  | Beneficiaries                          |
| -------------- | ------------ | -------- | -------------------------------------- |
| 123456789      | Checking     | 75000.50 | Amina Yusuf; Juan Pérez                |
| 987654321      | Savings      | 12000.00 | Chen Wei                               |
| 456789123      | Checking     | 3400.50  | Yuki Tanaka; Leila Haddad; Ivan Petrov |
| 789123456      | Checking     | 800.00   | NULL                                   |
| 321654987      | Savings      | 2200.95  | Mei Lin; Noah Schmidt                  |

</div>

You can use the TextToColumn gem to automatically split these values into separate rows or columns, making your data cleaner and easier to work with.

1. Open the TextToColumn gem.
1. Select the `Beneficiaries` column to split.
1. Under **Delimiter**, input `;` as the delimiting character.
1. Select the split strategy.

Let's explore the outputs that result from the different split strategies.

### Split to columns

When you use the **Split to columns** strategy, each name should be split into its own column.

1. Select **Split to columns**.
1. Under **Number of columns**, type `2`.
1. Keep the default **Extra Characters** setting to `Leave extra in last column`.
1. Keep or change the default column prefix and suffix.

The resulting table will have two new columns. The output table has the same number of rows as the input table.

<div class="table-example">

| Account_Number | Account_Type | Balance  | Beneficiaries                          | root_1_generated | root_2_generated          |
| -------------- | ------------ | -------- | -------------------------------------- | ---------------- | ------------------------- |
| 123456789      | Checking     | 75000.50 | Amina Yusuf; Juan Pérez                | Amina Yusuf      | Juan Pérez                |
| 987654321      | Savings      | 12000.00 | Chen Wei                               | Chen Wei         | NULL                      |
| 456789123      | Checking     | 3400.50  | Yuki Tanaka; Leila Haddad; Ivan Petrov | Yuki Tanaka      | Leila Haddad; Ivan Petrov |
| 789123456      | Checking     | 800.00   | NULL                                   | NULL             | NULL                      |
| 321654987      | Savings      | 2200.95  | Mei Lin; Noah Schmidt                  | Mei Lin          | Noah Schmidt              |

</div>

Notice that one the of cells still has a semicolon: `Leila Haddad; Ivan Petrov`.

This is because the gem was configured to generate two new columns. Extra characters are kept in the last column. If the gem was configured to generate three columns instead, each beneficiary would have their own column.

### Split to rows

The **Split to rows** strategy creates a separate row for each value in the selected column. All other column values are copied to each new row. Use this strategy when:

- The number of items in a cell (such as beneficiaries) varies between rows.
- You don’t know the maximum number of items in the column.

To apply this strategy:

1. Select **Split to rows**.
1. Keep or change the default generated column name.

In the output table, each beneficiary has their own row. The output table has more rows than the input table.

<div class="table-example">

| Account_Number | Account_Type | Balance | Beneficiaries                          | generated_column |
| -------------- | ------------ | ------- | -------------------------------------- | ---------------- |
| 123456789      | Checking     | 75000.5 | Amina Yusuf; Juan Pérez                | Amina Yusuf      |
| 123456789      | Checking     | 75000.5 | Amina Yusuf; Juan Pérez                | Juan Pérez       |
| 987654321      | Savings      | 12000   | Chen Wei                               | Chen Wei         |
| 456789123      | Checking     | 3400.5  | Yuki Tanaka; Leila Haddad; Ivan Petrov | Yuki Tanaka      |
| 456789123      | Checking     | 3400.5  | Yuki Tanaka; Leila Haddad; Ivan Petrov | Leila Haddad     |
| 456789123      | Checking     | 3400.5  | Yuki Tanaka; Leila Haddad; Ivan Petrov | Ivan Petrov      |
| 789123456      | Checking     | 800     | NULL                                   | NULL             |
| 321654987      | Savings      | 2200.95 | Mei Lin; Noah Schmidt                  | Mei Lin          |
| 321654987      | Savings      | 2200.95 | Mei Lin; Noah Schmidt                  | Noah Schmidt     |

</div>
