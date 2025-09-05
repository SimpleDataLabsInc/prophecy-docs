---
title: Supported data types
id: data-types
slug: /analysts/data-types
description: Review the set of data types supported in pipelines
tags: []
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pipelines in SQL projects can process and transform a variety of data types. Understand the supported data types to help you design pipelines and ensure compatibility with external systems.

The tables below list the data types Prophecy supports depending on the [SQL warehouse](/core/prophecy-fabrics/) you use for processing.

<Tabs>
<TabItem value="Databricks" label="Databricks">

These data types correspond to [data types in Databricks SQL](https://docs.databricks.com/aws/en/sql/).

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

</TabItem>

<TabItem value="BigQuery" label="BigQuery">

These data types correspond to the [data types in BigQuery](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types).

| Data type  | Description                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------- |
| Record     | Represents a column with [nested data](https://cloud.google.com/bigquery/docs/nested-repeated). |
| Array      | Represents a list of non-array values of the same data type.                                    |
| BigNumeric | Represents a decimal value with precision of 76.76 digits.                                      |
| Numeric    | Represents a decimal value with precision of 38 digits.                                         |
| Datetime   | Represents a Gregorian date and a time, independent of time zone.                               |
| Time       | Represents a time of day, independent of a specific date and time zone.                         |
| Date       | Represents a Gregorian calendar date, independent of time zone.                                 |
| Timestamp  | Represents an absolute point in time, with microsecond precision and no timezone context.       |
| Boolean    | Represents true and false values.                                                               |
| Float      | Represents an approximate double-precision numeric value.                                       |
| Integer    | Represents a 64-bit integer.                                                                    |
| Bytes      | Represents variable-length binary data.                                                         |
| String     | Represents variable-length character strings.                                                   |

:::info

Prophecy does not support BigQuery `Interval`, `Geography`, or `JSON` data types directly.

- **Geography / JSON:** Serialized and stored as strings.
- **Interval:** Converted to a month-day-nano interval type for display and processing.

:::

</TabItem>
</Tabs>
