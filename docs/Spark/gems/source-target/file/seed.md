---
title: Seed
id: seed
description: Seed
tags:
  - gems
  - file
  - seed
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.2.31+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.2.5.6"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared=""
  livy="3.2.0"
/>

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
