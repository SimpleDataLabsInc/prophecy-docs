---
title: XML
id: xml
description: Seed
tags:
  - gems
  - file
  - xml
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecySparkBasicsPython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecySparkBasicsScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.2.0"
/>

Prophecy supports reading and writing data in XML format.

## Source Parameters

| Parameter | Tab        | Description                                                                                                      |
| --------- | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path in database file system that contains the XML file.                                                    |
| Schema    | Properties | Schema applied to the loaded data. Schema can be defined/edited as JSON or inferred using `Infer Schema` button. |
| Row Tag   | Properties | The value of the XML element which identifies a row of data.                                                     |

## Target Parameters

| Parameter | Tab        | Description                                                          |
| --------- | ---------- | -------------------------------------------------------------------- |
| Location  | Location   | File path in database file system where you will write the XML file. |
| Schema    | Properties | Schema for the written table.                                        |
| Row Tag   | Properties | The value of the XML element which identifies a row of data.         |
| Root Tag  | Properties | The value of the XML element which encloses all other elements.      |
