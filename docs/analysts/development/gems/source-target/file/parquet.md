---
title: Parquet
id: parquet
slug: /analysts/parquet
description: Read and write Parquet files
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

Read or write a Parquet file from an external connection.

## Supported connections

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)

## Parameters

| Parameter                   | Tab             | Description                                                                                                                      |
| --------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Connection type             | Type            | Location you want to connect from.                                                                                               |
| Format type                 | Source location | Format of the gem. In this case, `parquet`.                                                                                      |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                                                                |
| Filepath                    | Source location | File path where you want to read and write files according to the connection type.                                               |
| Properties                  | Properties      | Optional table properties to apply. [Source](#source-properties) and [target](#target-properties) properties are outlined below. |
| Schema                      | Properties      | Schema definition of the table (custom or inferred).                                                                             |

### Source properties

| Property                      | Description                                                | Default |
| ----------------------------- | ---------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                  | None    |
| Multiple documents per file   | Whether the file contains multiple Parquet documents.      | False   |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema. | `0`     |

### Target properties

| Property    | Description               | Default |
| ----------- | ------------------------- | ------- |
| Description | Description of the table. | None    |
