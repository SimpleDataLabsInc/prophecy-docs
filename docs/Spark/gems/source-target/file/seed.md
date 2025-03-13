---
title: Seed
id: seed
description: Seed
tags:
  - gems
  - file
  - seed
---

The Seed file type helps you standardize all new designs. This means that each new design (\*.dgn) file contains the same work units, color table, views as the seed file. You can only read data from Seed files in Prophecy.

## Parameters

| Parameter | Tab        | Description                                                                                                          |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Data      | Data       | Data you provide in the Seed format.                                                                                 |
| Schema    | Properties | Schema to apply on the data. You can define or edit the schema as a JSON or infer it with the `Infer Schema` button. |

## Source

The Source gem reads data from Seed files and allows you to optionally specify additional properties.

### Source properties

| Property name                                    | Description                                                       | Default |
| ------------------------------------------------ | ----------------------------------------------------------------- | ------- |
| Select an appropriate delimiter for entered data | Character to separate data you enter.                             | Comma   |
| First row is header                              | Whether the first row is the table header.                        | True    |
| Enforce specified or inferred schema             | Whether the output schema must match what you define in this tab. | False   |
| Auto Infer schema from the data                  | Whether you want to automatically enter the schema.               | False   |

## Target

The Target gem does not support writing to Seed files.
