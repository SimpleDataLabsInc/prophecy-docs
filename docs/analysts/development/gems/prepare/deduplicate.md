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

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

When working with data, it’s common to run into duplicate information. Duplicates can come from multiple data sources, system errors, or repeated updates over time.

Leverage the Deduplication gem to remove these duplicates, and pay close attention to the Deduplication mode that you use.

## Parameters

| Parameter           | Description                                                    |
| ------------------- | -------------------------------------------------------------- |
| Mode                | Deduplication method                                           |
| Expression          | Column(s) to check for duplicates                              |
| Use Custom Order By | Sort rows before deduplicating (First and Last mode **only**). |

## Mode

Next to **Deduplicate On Columns**, choose how to keep certain rows.

| Mode          | Description                                                                 | Output                                                              |
| ------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Distinct Rows | Keeps one version of each duplicated row, removing extra duplicates.        | All columns are passed through unless target columns are specified. |
| Unique Only   | Keeps only the rows that appear exactly once and removes any duplicate rows | All columns are passed through.                                     |
| First         | Keeps the first occurrence of the duplicate row.                            | All columns are passed through.                                     |
| Last          | Keeps the last occurrence of the duplicate row.                             | All columns are passed through.                                     |

## Example

Assume you have a table of contact information where some people appear more than once. This could be due to updates over time or repeated data entry. You want to identify and clean up these duplicates based on fields like email or phone number.

Here is your original table:

<div class="table-example">

| email                  | phone        | first_name | last_name | date_added |
| ---------------------- | ------------ | ---------- | --------- | ---------- |
| `alex.t@example.com`   | 123-456-7890 | Alex       | Taylor    | 2023-01-01 |
| `alex.t@example.com`   | 123-456-7890 | Alex       | Taylor    | 2023-07-01 |
| `sam.p@example.com`    | 987-654-3210 | Sam        | Patel     | 2024-03-15 |
| `casey.l@example.com`  | 555-111-2222 | Casey      | Lee       | 2024-05-01 |
| `casey.l@example.com`  | 555-111-2222 | Casey      | Lee       | 2025-01-01 |
| `jordan.k@example.com` | 333-444-5555 | Jordan     | Kelly     | 2023-09-10 |
| `morgan.s@example.com` | 666-777-8888 | Morgan     | Smith     | 2025-01-01 |

</div>

### Distinct Rows

Let’s look at what happens with our original table when using **Distinct Rows** without selecting any specific columns. If two rows match exactly—every value in every column—they are considered duplicates, and only one will be kept.

<div class="table-example">

| email                  | phone        | first_name | last_name | date_added |
| ---------------------- | ------------ | ---------- | --------- | ---------- |
| `alex.t@example.com`   | 123-456-7890 | Alex       | Taylor    | 2023-01-01 |
| `alex.t@example.com`   | 123-456-7890 | Alex       | Taylor    | 2023-07-01 |
| `sam.p@example.com`    | 987-654-3210 | Sam        | Patel     | 2024-03-15 |
| `casey.l@example.com`  | 555-111-2222 | Casey      | Lee       | 2024-05-01 |
| `casey.l@example.com`  | 555-111-2222 | Casey      | Lee       | 2025-01-01 |
| `jordan.k@example.com` | 333-444-5555 | Jordan     | Kelly     | 2023-09-10 |
| `morgan.s@example.com` | 666-777-8888 | Morgan     | Smith     | 2025-01-01 |

</div>

The result is identical to the input because no two rows are exact matches across all columns.

### Distinct Rows with Target Columns

Often, you want to identify duplicates based on just one or a few columns, like `email`. You can do this by selecting the columns to deduplicate on. Here is the result when email is selected as the target column:

<div class="table-example">

| email                  |
| ---------------------- |
| `alex.t@example.com`   |
| `sam.p@example.com`    |
| `casey.l@example.com`  |
| `jordan.k@example.com` |
| `morgan.s@example.com` |

</div>

Only the distinct values from the email column are returned. Other columns are not included, because Prophecy doesn’t assume which corresponding values (like `phone` or `date_added`) to keep. If you want to keep related columns, use the First or Last deduplication methods.

### First and Last

The **First** and **Last** options help you keep just one row for each duplicate based on the order of the data. You’ll typically combine this with sorting to control which version is retained.

For example, if you want to keep the most recent entry for each duplicate email address, you can:

- Choose **First** and sort by `date_added` descending
- Choose **Last** and sort by `date_added` ascending

Here’s the result when deduplicating by `email`, keeping the most recent record for each:

<div class="table-example">

| email                  | phone        | first_name | last_name | date_added |
| ---------------------- | ------------ | ---------- | --------- | ---------- |
| `alex.t@example.com`   | 123-456-8888 | Alex       | Taylor    | 2023-07-01 |
| `sam.p@example.com`    | 987-654-3210 | Sam        | Patel     | 2024-03-15 |
| `casey.l@example.com`  | 555-111-2222 | Casey      | Lee       | 2025-01-01 |
| `jordan.k@example.com` | 333-444-5555 | Jordan     | Kelly     | 2023-09-10 |
| `morgan.s@example.com` | 666-777-8888 | Morgan     | Smith     | 2025-01-01 |

</div>

### Unique Only

The **Unique Only** option removes all rows with duplicates. It keeps only the rows that appear exactly once, based on the selected columns.

For example, if you choose to deduplicate based on `email`, any row that contains an email address that appears more than once will be removed entirely. Here’s the result when using **Unique Only** on the original table with `email` as the target column:

<div class="table-example">

| email                  | phone        | first_name | last_name | date_added |
| ---------------------- | ------------ | ---------- | --------- | ---------- |
| `sam.p@example.com`    | 987-654-3210 | Sam        | Patel     | 2024-03-15 |
| `jordan.k@example.com` | 333-444-5555 | Jordan     | Kelly     | 2023-09-10 |
| `morgan.s@example.com` | 666-777-8888 | Morgan     | Smith     | 2025-01-01 |

</div>
