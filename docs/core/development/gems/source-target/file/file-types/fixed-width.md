---
title: Fixed-width
id: fixed-width
slug: /analysts/fixed-width
description: Read fixed-width files
tags: []
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes the **Fixed-width-specific properties** that appear in the **Properties** tab of Source gems. These settings are the same for fixed-width files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

:::info
Writing fixed-width files using a Target gem is not supported.
:::

If you need details on configuring a Source gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [Microsoft OneDrive](/analysts/onedrive-gem)
- [SFTP](/analysts/sftp-gem)
- [SharePoint](/analysts/sharepoint-gem)

## Properties

## Source schema

Define the schema of your dataset in the **Properties** tab of the gem. This determines the structure of your dataset.

:::info
You must define the schema manually for fixed-width files. Schema inference isn't supported.
:::

Each row in the **Schema** table corresponds to a fixed-width column in the file and includes the following attributes:

| Field    | Description                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
| Name     | Name of the column.                                                                       |
| Type     | Type of data in the column.                                                               |
| Offset   | Starting character position in the row for this column.                                   |
| Length   | Number of characters for this column.                                                     |
| Metadata | Additional information about the column. Some data types require certain metadata fields. |

### Metadata fields

Hover over a row in the Schema table to reveal a dropdown arrow next to the Metadata field. Use this dropdown to add column details, such as a description or tags. Metadata is optional for the majority of data types but is sometimes required.

The tables below list metadata fields specific to certain data types per SQL warehouse provider:

<Tabs>
<TabItem value="Databricks" label="Databricks">

| Data type | Specific metadata fields                                                                               | Required |
| --------- | ------------------------------------------------------------------------------------------------------ | -------- |
| Array     | **Number of occurrences**: Number of elements in the array.                                            | Yes      |
| Decimal   | **Scale**: Number of digits after the decimal point.                                                   | No       |
| Date      | **Format**: Expected format of the date that can override the global default at the column level.      | No       |
| Time      | **Format**: Expected format of the time that can override the global default at the column level.      | No       |
| Timestamp | **Format**: Expected format of the timestamp that can override the global default at the column level. | No       |

  </TabItem>
  <TabItem value="BigQuery" label="BigQuery">

| Data type  | Specific metadata fields                                                                               | Required |
| ---------- | ------------------------------------------------------------------------------------------------------ | -------- |
| Array      | **Number of occurrences**: Number of elements in the array.                                            | Yes      |
| BigNumeric | **Scale**: Number of digits after the decimal point.                                                   | No       |
| Numeric    | **Scale**: Number of digits after the decimal point.                                                   | No       |
| Datetime   | **Format**: Expected format of the datetime that can override the global default at the column level.  | No       |
| Time       | **Format**: Expected format of the time that can override the global default at the column level.      | No       |
| Date       | **Format**: Expected format of the date that can override the global default at the column level.      | No       |
| Timestamp  | **Format**: Expected format of the timestamp that can override the global default at the column level. | No       |

  </TabItem>
</Tabs>

:::note
For a complete list of supported data types, visit [Supported data types](/analysts/data-types/).
:::

## Source properties

The following properties are available to customize how how fixed-width files are read.

| Property                             | Description                                                                     | Default               |
| ------------------------------------ | ------------------------------------------------------------------------------- | --------------------- |
| Description                          | Description of the table.                                                       | None                  |
| Line Delimited                       | Whether each record ends with a newline character.                              | Disabled              |
| Strip Trailing Blanks                | Strip trailing whitespace from string values when reading the data.             | Disabled              |
| Number of Initial Rows to Skip       | Number of lines to skip before the data begins, usually `1` for the header row. | `0`                   |
| Number of Bytes to Skip Between Rows | Usually used by the Transpiler.                                                 | `0`                   |
| Date Format Reference                | Global default format for parsing date columns.                                 | `2006-01-02`          |
| Time Format Reference                | Global default format for parsing time columns.                                 | `15:04:05`            |
| Timestamp Format Reference           | Global default format for parsing timestamp columns.                            | `2006-01-02 15:04:05` |
| Decimal Point                        | Character used as a decimal point.                                              | `.`                   |
