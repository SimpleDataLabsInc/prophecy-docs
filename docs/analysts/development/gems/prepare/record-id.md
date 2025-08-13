---
title: RecordID
id: record-id
slug: /analysts/record-id
description: Assign each row a unique ID
tags:
  - gems
  - analyst
  - prepare
---

Assigning unique identifiers to each row in a dataset is a common requirement for data preparation. The RecordID gem allows you to easily generate row-level IDs using two methods: UUID for randomly generated values, and Incremental ID for ordered, sequential values. You can customize how IDs are added, including naming the column, setting the data type and format, and specifying where the column appears in the output schema.

## Input and Output

The RecordID gem accepts the following input and generates one output.

| Port    | Description                                                     |
| ------- | --------------------------------------------------------------- |
| **in0** | Input dataset containing the records you wish to assign IDs to. |
| **out** | Output dataset with a new record ID column.                     |

## Parameters

Review the following gem parameters by method.

### UUID

The UUID method assigns a universally unique identifier (UUID) to each row. These values are randomly generated and are ideal when you need non-sequential, non-predictable IDs.

| Parameter          | Description                                                                        |
| ------------------ | ---------------------------------------------------------------------------------- |
| Output Column Name | Name of the new column where the generated UUIDs will be stored.                   |
| Column position    | Choose to **add as first column** or **add as last column** in the output dataset. |

### Incremental ID

The Incremental ID method generates sequential values starting from a specified number and increasing by 1 for each row. You can also group and sort the data to restart numbering within each group and control the order in which IDs are assigned.

| Parameter                               | Description                                                                                                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Output Column Name                      | Name of the new column that will contain the generated record IDs.                                                                                                                 |
| Starting Value                          | The first number in the sequence.                                                                                                                                                  |
| Data type                               | Select **integer** or **string** as the output type of the record ID values.                                                                                                       |
| Size (String only)                      | Total number of characters in the string. <br/>Leading zeros will be added if the starting value is shorter than the defined size.                                                 |
| Column position                         | Choose to **add as first column** or **add as last column** in the output dataset.                                                                                                 |
| Record ID Generation Scope              | Specify whether to generate IDs **across entire table** or **within each group** defined by selected columns.                                                                      |
| Group By Columns                        | When generating IDs within groups, choose one or more columns to group the data by.                                                                                                |
| Order Rows Within Each Group (Optional) | (Optional) Define the columns to determine the order in which rows are numbered within each group. You can select multiple columns and sort them in ascending or descending order. |
