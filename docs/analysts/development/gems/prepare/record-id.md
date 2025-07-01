---
title: RecordID
id: record-id
slug: /analysts/record-d
description: Assign each row a unique ID
tags:
  - gems
  - analyst
  - prepare
---

Assigning unique identifiers to each row in a dataset is a common requirement for data preparation. The RecordID gem allows you to easily generate row-level IDs using two methods: UUID for randomly generated values, and Incremental ID for ordered, sequential values. You can customize how IDs are added, including naming the column, setting the data type and format, and specifying where the column appears in the output schema.

## Input and Output

| Port    | Description                                                     |
| ------- | --------------------------------------------------------------- |
| **in0** | Input dataset containing the records you wish to assign IDs to. |
| **out** | Output dataset with a new record ID column.                     |

## Parameters

Review the following gem parameters by method.

### UUID

The UUID method... assigns random values to columns

| Parameter                   | Description                                                                        |
| --------------------------- | ---------------------------------------------------------------------------------- |
| Column Name                 | Name of the new output column containing record IDs.                               |
| First Column or Last Column | Whether to add the new record id column as the first or last column in the schema. |

### Incremental ID

The Incremental ID method... increments by 1...

| Parameter                   | Description                                                                                                                                                             |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column Name                 | Name of the new output column containing record IDs.                                                                                                                    |
| Starting Value              | First number in the count.                                                                                                                                              |
| Type                        | String or Integer                                                                                                                                                       |
| Size (String only)          | Number of characters in the string. Appends leading zeros if starting value has fewer characters than the size you define here.                                         |
| Group By Column Names       | Record IDs will be assigned per group. Optional                                                                                                                         |
| Order Columns               | Columns will be sorted in ascending or descending order. The first column order will be privileged first. You can also use expressions to define columns here. Optional |
| First Column or Last Column | Whether to add the new record id column as the first or last column in the schema.                                                                                      |
