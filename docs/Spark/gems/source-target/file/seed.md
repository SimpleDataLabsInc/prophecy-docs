---
title: Seed
id: seed
description: Paramters and properties to read from Seed files
tags:
  - gems
  - file
  - seed
---

The Seed file type helps you standardize all new designs. This means that each new design (\*.dgn) file contains the same work units, color table, views as the seed file. You can only read data from Seed files in Prophecy.

## Parameters

| Parameter | Tab        | Description                                                                                                           |
| --------- | ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Data      | Data       | Data you provide in the Seed format.                                                                                  |
| Schema    | Properties | Schema to apply on the data. You can define or edit the schema as a JSON, or infer it with the `Infer Schema` button. |

## Source

The Source gem reads data from Seed files and allows you to optionally specify the following additional properties.

### Source properties

| Property name                                    | Description                                                       | Default |
| ------------------------------------------------ | ----------------------------------------------------------------- | ------- |
| Select an appropriate delimiter for entered data | Character to separate data you enter.                             | `,`     |
| First row is header                              | Whether the first row is the table header.                        | true    |
| Enforce specified or inferred schema             | Whether the output schema must match what you define in this tab. | false   |
| Auto Infer schema from the data                  | Whether you want to automatically enter the schema.               | false   |

## Target

The Target gem does not support writing to Seed files.
