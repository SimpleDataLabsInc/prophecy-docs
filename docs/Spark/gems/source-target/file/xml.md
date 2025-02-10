---
title: XML
id: xml
description: Seed
tags:
  - gems
  - file
  - xml
---

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
