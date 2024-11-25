---
sidebar_position: 10
title: Bulk Column Expressions
id: bulk-column-expressions
description: Change the data type of multiple columns at once.
tags:
  - gems
  - type
  - columns
---

The Bulk Column Expressions Gem primarily lets you change the data type of multiple columns at once. It provides additional functionality as well, such as renaming... 


# Parameters

| Parameter                                    | Description                                                             | Required |
|----------------------------------------------|-------------------------------------------------------------------------|----------|
| Data Type of the columns to do operations on | The data type of columns to select.                                     | False    |
| Selected Columns                             | The columns on which to apply transformations.                          | False    |
| Change output column name                    | An option to add a prefix or suffix to the selected column names.       | False    |
| Copy incoming columns to output              | When "Change output column name" is selected, this is the option to ... | False    |
| Change output column type                    | The data type that the columns will be transformed into.                | False    |
| Output Expression                            | A Spark SQL expression that can be applied to the selected columns.     | False    |


# Examples