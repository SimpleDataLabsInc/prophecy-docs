---
title: JSON
id: json
slug: /analysts/json
description: Read and write JSON files
tags: []
---

This page describes the **JSON-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for JSON files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [Microsoft OneDrive](/analysts/onedrive-gem)
- [SFTP](/analysts/sftp-gem)
- [SharePoint](/analysts/sharepoint-gem)

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use JSON files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Properties

### Source properties

The following properties are available for the JSON Source gem.

| Property                      | Description                                                           | Default |
| ----------------------------- | --------------------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                             | None    |
| Multiple documents per file   | Whether the file contains multiple JSON objects separated by newline. | False   |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.            | `0`     |

### Target properties

The following properties are available for the JSON Target gem.

| Property                    | Description                                                               | Default |
| --------------------------- | ------------------------------------------------------------------------- | ------- |
| Description                 | Description of the table.                                                 | None    |
| Multiple documents per file | Whether the file will contain multiple JSON objects separated by newline. | False   |
