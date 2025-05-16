---
title: JSONParse
id: json-parse
slug: /analysts/json-parse
description: Parse JSON inside a table
tags:
  - gems
  - analyst
  - parse
---

<span class="badge">SQL</span><br/><br/>

The JSONParse gem lets you parse JSON that is included in a column of your table.

## Parameters

| Parameter              | Description                                                                  |
| ---------------------- | ---------------------------------------------------------------------------- |
| Select column to parse | Specifies the input column containing the JSON data to be parsed.            |
| Parsing method         | Determines how Prophecy derives the schema used to parse the JSON structure. |

When you select a parsing method, you have two options:

- **Parse from sample record**. Prophecy uses the schema from the sample record you provide.
- **Parse from schema**. Prophecy uses the schema you provide in the form of a schema struct.

## Output

The output schema of the JSONParse gem includes all of the input columns and the parsed content as a **struct** data type.

![JSONParse Output](img/json-parse.png)
