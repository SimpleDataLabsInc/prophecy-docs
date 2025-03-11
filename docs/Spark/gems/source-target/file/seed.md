---
title: Seed
id: seed
description: Seed
tags:
  - gems
  - file
  - seed
---

You to manually write small CSV files into your Prophecy pipelines with the Seed files.

## Source

The Source gem reads data from Seed files.

### Source Parameters

| Parameter                            | Tab        | Description                                                                                                          |
| ------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Data                                 | Data       | Data you provide in CSV format.                                                                                      |
| Schema                               | Properties | Schema to apply to the data. You can define or edit the schema as a JSON or infer it with the `Infer Schema` button. |
| Delimiter                            | Properties | Character to separate data you enter.                                                                                |
| First row is header                  | Properties | Whether the first row is the table header.                                                                           |
| Enforce specified or inferred schema | Properties | Whether the output schema must match what you define in this tab.                                                    |
| Auto-infer schema from the data      | Properties | Whether you want to automatically enter the schema.                                                                  |

## Target

Prophecy does not support writing to Seed files.
