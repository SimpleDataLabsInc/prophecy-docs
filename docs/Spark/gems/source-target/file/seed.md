---
title: Seed
id: seed
description: Parameters and properties to read from Seed files
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
  uc_shared="Not Supported"
  livy="3.2.0+"
/>

The Seed file type:

- Is a configuration file that provides initial data or settings for an application.
- Allows you to manually write small CSV files into your Prophecy pipelines.

You can only read data from Seed files in Prophecy.

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
