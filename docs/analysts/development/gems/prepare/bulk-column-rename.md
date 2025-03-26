---
title: BulkColumnRename
id: bulk-column-rename
slug: /analysts/bulk-column-rename
description: Rename multiple columns in your dataset in a systematic way
tags:
  - gems
  - analyst
  - prepare
---

<span class="badge">SQL</span><br/><br/>

The BulkColumnRename gem can be used to systematically rename multiple columns at once.

## Parameters

| Field             | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Table name        | The name of input table.                                                                                                          |
| Rename method     | The way you will rename columns. You can either add a prefix, add a suffix, or use a custom SQL expression.                       |
| Columns to rename | The set of columns that you will rename.                                                                                          |
| Custom expression | The SQL expression that will determine the output column name(s). (This only appears if you select the custom expression method.) |
