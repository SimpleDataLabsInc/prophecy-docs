---
title: Smartsheet
id: smartsheet
description: Learn how to connect with Smartsheet
tags:
  - connections
  - smartsheet
---

SmartSheet is used for managing tasks, projects, and workflows using a spreadsheet-like interface, and it stores data in the form of sheets, which can contain rows, columns, and cell data.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Smartsheet, enter the following parameters:

| Parameter                                                                | Description                                                     |
| ------------------------------------------------------------------------ | --------------------------------------------------------------- |
| Connection Name                                                          | Unique name for the connection (e.g., `MySmartsheetConnection`) |
| Access Token ([Secret required](docs/administration/secrets/secrets.md)) | Your Smartsheet API access token                                |

## Smartsheet permissions

When you create an Smartsheet connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the data your Smartsheet credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage an Smartsheet connection in Prophecy, you need the following Smartsheet permissions:

- Example
- Example

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

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
