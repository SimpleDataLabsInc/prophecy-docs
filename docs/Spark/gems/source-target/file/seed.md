---
title: Seed
id: seed
description: Seed
tags:
  - gems
  - file
  - seed
---

Seeds let you manually write small CSV files into your Prophecy pipelines. They can only be used via Source gems.

## Source Parameters

| Parameter                            | Tab        | Description                                                                                                      |
| ------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Data                                 | Data       | Data provided in CSV format                                                                                      |
| Schema                               | Properties | Schema applied to the loaded data. Schema can be defined/edited as JSON or inferred using `Infer Schema` button. |
| Delimiter                            | Properties | Character used to separate entered data.                                                                         |
| First row is header                  | Properties | Checkbox to enable when the first row is the table header.                                                       |
| Enforce specified or inferred schema | Properties | Checkbox to enable when the output schema must match what has been defined in this tab.                          |
| Auto-infer schema from the data      | Properties | Checkbox to enable when you do not want to manually enter the schema.                                            |
