---
title: Parquet
id: parquet
slug: /analysts/parquet
description: Read and write Parquet files
tags: []
---

This page describes the **Parquet-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for Parquet files regardless of which connection type is configured in the gem (for example, S3, SFTP, or Databricks).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [SFTP](/analysts/sftp-gem)

## Properties

### Source properties

The following properties are available for the Parquet Source gem.

| Property                      | Description                                                | Default |
| ----------------------------- | ---------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                  | None    |
| Multiple documents per file   | Whether the file contains multiple Parquet documents.      | False   |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema. | `0`     |

### Target properties

The following properties are available for the Parquet Target gem.

| Property    | Description               | Default |
| ----------- | ------------------------- | ------- |
| Description | Description of the table. | None    |
