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

When you create an Smartsheet connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your Smartsheet credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials. For example, if you are a Viewer on a sheet, you won't be able to write data to that sheet with a Target gem.

To learn more about permissions in Smartsheet, visit [Sharing permission levels](https://help.smartsheet.com/articles/1155182-sharing-permission-levels).

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an Smartsheet connection is added to a fabric:

- Anyone in the team can use that connection in pipelines and browse it in the Environment browser.
- Team members do not need to reauthenticate. They inherit the same access and permissions as the original connection setup.

Everyone who uses the connection will operate with the same access level granted by the stored credentials.

:::caution
Be mindful of what permissions the credentials provide. If they allow access to sensitive data, anyone on the team using that connection will have the same level of access.
:::

## Sync connection

As you start using Smartsheet connections in Prophecy, it’s important to understand how data is fetched and kept up to date in a project.

- When you browse an Smartsheet connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema evolves in the external connection, you will need to re-infer the schema in Prophecy.

## Limitations

Keep in mind the following limitations when using the Smartsheet connection.

- Smartsheet defines capacity limits in their [Limitations](https://developers.smartsheet.com/api/smartsheet/guides/basics/limitations) documentation.

- Smartsheet allows users to create sheets with the same name in the same file location. Prophecy handles this situation in the following ways:

  - **Reading from Smartsheet when there are duplicate files.** In this case, Prophecy appends a `(n)` to the duplicate files for differentiation in Prophecy.

    ![Duplicate Smartsheet file in Prophecy file browser](img/smartsheet-duplicates.png)

  - **Writing to Smartsheet when there are duplicate files.** In this case, the pipeline run will fail in Prophecy. Prophecy will not choose which file to overwrite with the Target gem.
