---
title: Smartsheet
id: smartsheet
description: Learn how to connect with Smartsheet
tags:
  - connections
  - smartsheet
---

Smartsheet is used for managing tasks, projects, and workflows using a spreadsheet-like interface that can contain rows, columns, and cell data. Prophecy uses the [Smartsheet API](https://developers.smartsheet.com/api/smartsheet/introduction) to establish the connection.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Smartsheet, enter the following parameters:

| Parameter                                                                | Description                                                                                                                                   |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                          | Unique name for the connection (e.g., `MySmartsheetConnection`)                                                                               |
| Access Token ([Secret required](docs/administration/secrets/secrets.md)) | Your [Smartsheet API access token](https://developers.smartsheet.com/api/smartsheet/guides/basics/authentication#access-token-best-practices) |

## Smartsheet permissions

When you create a Smartsheet connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your Smartsheet credentials have permission to access. Any data operations—such as reading from or writing to tables—are executed using your credentials. For example, if you are a `Viewer` on a sheet, you won't be able to write data to that sheet with a Target gem.

To learn more about Smartsheet permissions, visit [Sharing permission levels](https://help.smartsheet.com/articles/1155182-sharing-permission-levels).

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Smartsheet connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Smartsheet in the following ways:

- When you browse a Smartsheet connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema changes in Smartsheet, you will need to re-infer the schema in Prophecy.

## Limitations

Keep in mind the following limitations when using the Smartsheet connection.

- Smartsheet defines capacity limits in their [Limitations](https://developers.smartsheet.com/api/smartsheet/guides/basics/limitations) documentation.

- Smartsheet allows users to create sheets with the same name in the same file location. Prophecy handles this situation in the following ways:

  - **Writing to Smartsheet when there are duplicate files.** In this case, the pipeline run will fail in Prophecy. Prophecy will not choose which file to overwrite with the Target gem.

  - **Reading from Smartsheet when there are duplicate files.** In this case, Prophecy appends a `(n)` to the duplicate files for differentiation in Prophecy.

  ![Duplicate Smartsheet file in Prophecy file browser](img/smartsheet-duplicates.png)
