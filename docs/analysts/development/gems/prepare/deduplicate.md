---
title: Deduplicate
id: deduplicate
slug: /analysts/deduplicate
description: Remove duplicates from your data
tags:
  - gems
  - analyst
  - prepare
---

<span class="badge">SQL</span><br/><br/>

Removes rows with duplicate values of specified columns.

## Mode

Next to **Deduplicate On Columns**, choose how to keep certain rows.

| Mode                        | Description                                      | Additional parameters                                                                                                         | Output                                                                                                      |
| --------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Distinct Rows** (Default) | Keeps all distinct rows.                         | None                                                                                                                          | All columns are passed through unless columns are specified. Specified columns are persisted in the output. |
| **Unique Only**             | Keeps rows that do not have duplicates.          | <ul class="table-list"><li>Expression: Column that determines uniqueness</li></ul>                                            | All columns are passed through.                                                                             |
| **First**                   | Keeps the first occurrence of the duplicate row. | <ul class="table-list"><li>Expression: Column that determines uniqueness</li><li>Use Custom Order By: Sort the rows</li></ul> | All columns are passed through.                                                                             |
| **Last**                    | Keeps the last occurrence of the duplicate row.  | <ul class="table-list"><li>Expression: Column that determines uniqueness</li><li>Use Custom Order By: Sort the rows</li></ul> | All columns are passed through.                                                                             |

## Example

Suppose you're deduplicating the following table.

<div class="table-example">

| First_Name | Last_Name | Type  | Contact           |
| :--------- | :-------- | :---- | :---------------- |
| John       | Doe       | phone | 123-456-7890      |
| John       | Doe       | phone | 123-456-7890      |
| John       | Doe       | phone | 123-456-7890      |
| Alice      | Johnson   | phone | 246-135-0987      |
| Alice      | Johnson   | phone | 246-135-0987      |
| Alice      | Johnson   | email | alice@johnson.com |
| Alice      | Johnson   | email | alice@johnson.com |
| Bob        | Smith     | email | bob@smith.com     |

</div>

## Distinct Rows

If you use **Distinct Rows**, the output would be:

<div class="table-example">

| First_Name | Last_Name | Type  | Contact           |
| :--------- | :-------- | :---- | :---------------- |
| John       | Doe       | phone | 123-456-7890      |
| Alice      | Johnson   | phone | 246-135-0987      |
| Alice      | Johnson   | email | alice@johnson.com |
| Bob        | Smith     | email | bob@smith.com     |

</div>

If you want to remove the Alice Johnson duplicates, you can specify a subset of columns to deduplicate. In this case, you want to determine duplication based on `First_Name` and `Last_Name` columns. However, this will remove additional columns. Use First or Last to preserve the other columns in the output.

<div class="table-example">

| First_Name | Last_Name |
| :--------- | :-------- |
| John       | Doe       |
| Alice      | Johnson   |
| Bob        | Smith     |

</div>

## Unique Only

For **Unique Only**, the output would be:

<div class="table-example">

| First_Name | Last_Name | Type  | Contact       |
| :--------- | :-------- | :---- | :------------ |
| Bob        | Smith     | email | bob@smith.com |

</div>

This outputs one unique row because the rest were duplicates.

## First and Last

The **First** and **Last** options work similarly to **Distinct Rows**, but they keep the first and last occurrence of the duplicate rows respectively.
