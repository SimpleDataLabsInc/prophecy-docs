---
title: Supported data types
id: data-types
slug: /analysts/data-types
description: Review the set of data types supported in pipelines
tags: []
---

Pipelines in SQL projects can process and transform a variety of data types. Understand the supported data types to help you design pipelines and ensure compatibility with external systems.

The table below lists the data types Prophecy supports. The data types correspond to the [supported data types in Databricks SQL](https://docs.databricks.com/aws/en/sql/).

| Data type | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| Array     | Represents values comprising a sequence of elements.                                      |
| Bigint    | Represents 8-byte signed integer numbers.                                                 |
| Binary    | Represents byte sequence values. Only partially supported in the Prophecy UI.             |
| Boolean   | Represents true and false values.                                                         |
| Date      | Represents values comprising year, month, and day, without a timezone.                    |
| Decimal   | Represents numbers with maximum precision and fixed scale.                                |
| Double    | Represents 8-byte double-precision floating point numbers.                                |
| Float     | Represents 4-byte single-precision floating point numbers.                                |
| Integer   | Represents 4-byte signed integer numbers.                                                 |
| Smallint  | Represents 2-byte signed integer numbers.                                                 |
| String    | Represents character string values.                                                       |
| Struct    | Represents values with the structure described by a sequence of fields.                   |
| Timestamp | Represents values comprising year, month, day, hour, minute, and second, with a timezone. |
| Tinyint   | Represents 1-byte signed integer numbers.                                                 |
| Variant   | Represents semi-structured data. Only partially supported in the Prophecy UI.             |
| Void      | Represents the untyped NULL. Only partially supported in the Prophecy UI.                 |

:::note
Pipelines in SQL projects can only execute on Databricks SQL at this time.
:::
