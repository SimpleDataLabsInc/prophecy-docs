---
title: CountRecords
id: count-records
slug: /analysts/count-records
description: Returns one integer that represents the count of records in the input dataset
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.12+"
/>

The CountRecords gem allows you to count the number of rows in a dataset in different ways. You can count all rows, count non-null values in selected columns, or count distinct non-null values in selected columns.

## Input and Output

The CountRecords gem accepts the following input and output.

| Port    | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| **in0** | Input dataset with the columns to count.                                                   |
| **out** | Output dataset with the resulting count(s). Output has one row with the selected count(s). |

## Parameters

Configure the CountRecords gem using the following parameters.

| Parameter               | Description                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Count option            | Choose how the data should be counted. See [Count options](#count-options) below.         |
| Select columns to count | One or more columns to count. Required for counting non-null records or distinct records. |

### Count options

Choose one of the following strategies for counting records.

| Strategy                                     | Description                                                                   |
| -------------------------------------------- | ----------------------------------------------------------------------------- |
| Count number of total records                | Returns the total number of rows in the input dataset, including null values. |
| Count non-null records in selected column(s) | Returns the number of non-null rows for each selected column.                 |
| Count distinct records in selected column(s) | Returns the number of distinct, non-null values for each selected column.     |

## Example

Given a table of patient visits:

<div class="table-example">

| PatientID | VisitDate  | Department | Diagnosis |
| --------- | ---------- | ---------- | --------- |
| 1         | 2024-01-01 | Cardiology | Flu       |
| 2         | 2024-01-02 | Oncology   | Cancer    |
| 3         | 2024-01-03 | Cardiology | Flu       |
| 4         | 2024-01-04 | NULL       | Cold      |

</div>

If you choose:

- **Count distinct records** on `Department`: the result will be `2` (Cardiology, Oncology).
- **Count non-null records** on `Department`: the result will be `3`.
- **Count total number of records**: the result will be `4`.
