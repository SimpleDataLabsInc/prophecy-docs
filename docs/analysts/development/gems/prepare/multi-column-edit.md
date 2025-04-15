---
title: MultiColumnEdit
id: multi-column-edit
slug: /analysts/multi-column-edit
description: Change the data type of multiple columns at once
tags:
  - gems
  - analyst
  - prepare
---

<span class="badge">SQL</span><br/><br/>

The MultiColumnEdit gem primarily lets you cast or change the data type of multiple columns at once. It provides additional functionality, including:

- Adding a prefix or suffix to selected columns.
- Applying a custom expression to selected columns.

## Parameters

| Parameter                                                             | Description                                                                                                                                         | Required |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Selected columns to edit                                              | Choose which columns you want to transform.                                                                                                         | Yes      |
| Maintain the original columns and add prefix/suffix to the new column | If checked, the original columns will stay the same and new ones will be added with the prefix/suffix. Otherwise, the original column names change. | No       |
| Prefix/Suffix dropdown                                                | Lets you choose whether to add text at the beginning (prefix) or end (suffix) of the column names.                                                  | No       |
| Build a single expression to apply to all selected columns            | A SQL expression you apply to each selected column. Simply put `column_value` if you don't want to change the values.                               | Yes      |
