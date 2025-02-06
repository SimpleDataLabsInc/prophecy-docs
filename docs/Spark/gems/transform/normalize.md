---
title: Normalize
id: normalize
description: Generate multiple output records per input record
draft: true
tags:
  - gems
  - normalize
---

<h3><span class="badge">Spark Gem</span></h3>

Use the Normalize gem to generate multiple output records from each of its input records. This is useful if some records have multiple values in one field, like when a column is populated with arrays.

## Parameters

### Expand Condition

| Parameter           | Description                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------ |
| Length Expression   | Expression that specifies the number of times the Normalize function is to be called for the current record. |
| Finished Expression | Expression used in Filter Condition during its evaluation for duplication of records.                        |
| Finished Condition  | Expression used to duplicate input records until condition result is false.                                  |

You can either use the **Length Expression** or the **Finished Expression and Finished Condition**. You cannot use all of the parameters simultaneously.

### Index Alias

| Parameter | Description                                                                                                                                                                                                |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alias     | Defines the name of the index (which is initialized at `0` and incremented per iteration). This will also be the name of the additional output column that shows the index at which a record is generated. |

### Output Columns

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| Columns   | Lists the columns that will appear in the output table. |

### Local Expressions

| Parameter | Description                           |
| --------- | ------------------------------------- |
| Columns   | Temporary transformation definitions. |

### Global Expressions

| Parameter | Description                        |
| --------- | ---------------------------------- |
| Columns   | Global transformation definitions. |
