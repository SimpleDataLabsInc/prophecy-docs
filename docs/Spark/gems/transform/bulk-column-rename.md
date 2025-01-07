---
sidebar_position: 10
title: BulkColumnRename
id: bulk-column-rename
description: Rename multiple columns in your Dataset in a systematic way.
tags:
  - gems
  - rename
  - columns
---

import Requirements from "../\_gem-requirements.mdx";

<h3><span class="badge">Spark Gem</span></h3>

Use the BulkColumnRename Gem to rename multiple columns in your Dataset in a systematic way.

## Requirements

<Requirements packagename="ProphecySparkBasicPython"
  packageversion="0.2.11"
  scalalib="7.1.97"
  pythonlib="1.8.19"
  packageversion122="Not Supported"
  packageversion143="Not Supported"
  packageversion154="Not Supported"
/>

## Parameters

| Parameter         | Description                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| Columns to rename | Select one or more columns to rename from the dropdown.                                  |
| Method            | Choose to add a prefix, add a suffix, or use a custom expression to change column names. |

Based on the method you select, you will see an option to enter the prefix, suffix, or expression of your choice.

## Examples

### Add a prefix

One example is to add the prefix `meta_` to tag columns that contain metadata.

![Add prefix to multiple columns](./img/bulk-add-prefix.png)

### Use a custom expression

You can accomplish the same or more complex changes using a custom expression like `concat('meta_', column_name)`.
