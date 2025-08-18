---
title: Fixed-width
id: fixed-width
slug: /analysts/fixed-width
description: Read and write fixed-width files
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read a fixed-width file from an external connection using a Source gem.

:::info
Writing fixed-width files using a Target gem is not supported.
:::

## Supported connections

You can read fixed-width files from the following connections:

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [Databricks](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)

## Configuration tabs

When you create a new Source gem, the gem dialog contains the following tabs.

- **Type**: Choose the file storage provider you will connect to.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the file path where you will read from.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Parameters

Configure a Source gem using the following parameters to read a fixed-width file.

| Parameter                   | Tab             | Description                                                                                     |
| --------------------------- | --------------- | ----------------------------------------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                                              |
| Format type                 | Source location | Format of the gem. In this case, `fixedwidth`.                                                  |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                               |
| Filepath                    | Source location | File path where you want to read and write files according to the connection type.              |
| Properties                  | Properties      | Optional table properties to apply. [Source](#source-properties) properties are outlined below. |
| Schema                      | Properties      | Schema definition of the table (**custom schema only**).                                        |

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
