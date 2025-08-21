---
title: XML
id: xml
slug: /analysts/xml
description: Read and write XML files
tags: []
---

This page describes the **XML-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for XML files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [Microsoft OneDrive](/analysts/onedrive-gem)
- [SFTP](/analysts/sftp-gem)
- [SharePoint](/analysts/sharepoint-gem)

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use XML files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Properties

### Source properties

The following properties are available for the XML Source gem.

| Property                      | Description                                                    | Default |
| ----------------------------- | -------------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                      | None    |
| Row Tag                       | XML tag that identifies a single row or record in the dataset. | None    |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema.     | `0`     |

### Target properties

The following properties are available for the XML Target gem.

| Property    | Description               | Default |
| ----------- | ------------------------- | ------- |
| Description | Description of the table. | None    |
