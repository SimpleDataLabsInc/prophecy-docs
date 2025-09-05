---
title: Text
id: text
slug: /analysts/text
description: Read and write text files
tags: []
---

This page describes the **Text-specific properties** that appear in the **Properties** tab of Source and Target gems. These settings are the same for text files regardless of which connection type is configured in the gem (for example, S3, SFTP, or SharePoint).

If you need details on configuring a Source or Target gem end to end (including all tabs such as **Location**), see the documentation for the specific file storage connection:

- [Amazon S3](/analysts/s3-gem)
- [Databricks](/analysts/databricks-volumes-gem)
- [SFTP](/analysts/sftp-gem)

## Properties

### Source properties

The following properties are available for the Text Source gem.

| Property                      | Description                                                | Default |
| ----------------------------- | ---------------------------------------------------------- | ------- |
| Description                   | Description of the table.                                  | None    |
| Inference Data Sampling Limit | Maximum number of rows to sample for inferring the schema. | `0`     |

### Target properties

The following properties are available for the Text Target gem.

| Property    | Description               | Default |
| ----------- | ------------------------- | ------- |
| Description | Description of the table. | None    |
