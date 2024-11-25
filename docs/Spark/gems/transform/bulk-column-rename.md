---
sidebar_position: 10
title: Bulk Column Rename
id: bulk-column-rename
description: Rename multiple columns in your dataset in a systematic way.
tags:
  - gems
  - rename
  - columns
---

Use the Bulk Column Rename Gem to rename multiple columns in your dataset in a systematic way.

## Parameters

| Parameter         | Description                                                                                  |
|-------------------|----------------------------------------------------------------------------------------------|
| Columns to rename | Select one or more columns to rename from the dropdown.                                      |
| Method            | Choose to add a prefix, add a suffix, or use a custom expression to change the column names. |

Based on the method you select, you will see an option to enter the prefix, suffix, or expression of your choice.

## Examples

### Add a prefix

One example may be to add the prefix `meta_` to tag columns that contain metadata.

<!-- ![Add prefix to multiple columns](./img/bulk-add-prefix.png) -->


### Use a custom expression

You can accomplish the same or more complex changes using a custom expression like `concat('meta_', column_name)`.

<!-- ![Add prefix to multiple columns using a custom expression](./img/bulk-add-prefix.png) -->
