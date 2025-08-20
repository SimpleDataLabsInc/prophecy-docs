---
title: XML
id: xml
slug: /analysts/xml
description: Read and write XML files
tags: []
---

Read or write an XML file from an external connection using a Source or Target gem.

:::info
You can also use the [upload file](docs/analysts/development/gems/source-target/table/upload-files.md) feature to use XML files. These will be stored in the SQL warehouse configured in your fabric.
:::

## Supported connections

You can read XML files from the following connections:

- [Amazon S3](/administration/fabrics/prophecy-fabrics/connections/s3)
- [Databricks](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Microsoft OneDrive](/administration/fabrics/prophecy-fabrics/connections/onedrive)
- [SFTP](/administration/fabrics/prophecy-fabrics/connections/sftp)
- [SharePoint](/administration/fabrics/prophecy-fabrics/connections/sharepoint)

## Configuration tabs

When you create a new Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Choose the file storage provider you will connect to.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the file path where you will read from or write to.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Parameters

Configure a Source/Target gem using the following parameters for XML files.

| Parameter                   | Tab             | Description                                                                          |
| --------------------------- | --------------- | ------------------------------------------------------------------------------------ |
| Connection type             | Type            | Location you want to connect from.                                                   |
| Format type                 | Source location | Format of the gem. In this case, `xml`.                                              |
| Select or create connection | Source location | Whether to select an existing connection, or to create a new one.                    |
| Filepath                    | Source location | File path where you want to read and write files according to the connection type.   |
| Properties                  | Properties      | Optional table properties to apply. [Source](#source-properties) are outlined below. |
| Schema                      | Properties      | Schema definition of the table (custom or inferred).                                 |

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
