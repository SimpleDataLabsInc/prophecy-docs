---
title: Smartsheet connection
sidebar_label: Smartsheet
id: smartsheet
description: Learn how to connect with Smartsheet
tags:
  - connections
  - smartsheet
---

Smartsheet manages tasks, projects, and workflows using a spreadsheet-like interface that can contain rows, columns, and cell data. Prophecy uses the [Smartsheet API](https://developers.smartsheet.com/api/smartsheet/introduction) to establish the connection.

## Prerequisites

Prophecy connects to Smartsheet using an API access token associated with your Smartsheet account. All operations—such as reading from or writing to sheets—are performed using the permissions granted to your user. To use a Smartsheet connection effectively, you must have the appropriate sharing permissions on the sheets you want to access. For example:

- Viewer permission allows you to read sheet data but not modify it.
- Editor permission is required to update or write data using a Target gem.

Before setting up the connection, ensure your account has the necessary access to all relevant sheets. For more details, visit [Sharing permission levels](https://help.smartsheet.com/articles/1155182-sharing-permission-levels).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/smartsheet-gem)                    | Yes       |
| Write data with a [Target gem](/analysts/smartsheet-gem)                   | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Limitations

Keep in mind the following limitations when using the Smartsheet connection.

- Smartsheet defines capacity limits in the [Limitations](https://developers.smartsheet.com/api/smartsheet/guides/basics/limitations) documentation.

- Smartsheet allows users to create sheets with the same name in the same file location. Prophecy handles this situation in the following ways:

  - **Writing to Smartsheet when there are duplicate files.** In this case, the pipeline run will fail in Prophecy. Prophecy will not choose which file to overwrite with the Target gem.

  - **Reading from Smartsheet when there are duplicate files.** In this case, Prophecy appends a `(n)` to the duplicate files for differentiation in Prophecy.

  ![Duplicate Smartsheet file in Prophecy file browser](img/smartsheet-duplicates.png)

## Connection parameters

To create a connection with Smartsheet, enter the following parameters:

| Parameter                                                                    | Description                                                                                                                                   |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                              | Unique name for the connection                                                                                                                |
| Access Token ([Secret required](docs/enterprise/fabrics/secrets/secrets.md)) | Your [Smartsheet API access token](https://developers.smartsheet.com/api/smartsheet/guides/basics/authentication#access-token-best-practices) |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/core/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Smartsheet connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Smartsheet in the following ways:

- When you browse a Smartsheet connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema changes in Smartsheet, you will need to re-infer the schema in Prophecy.
