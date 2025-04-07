---
title: Microsoft Sharepoint
id: sharepoint
description: Learn how to connect with Sharepoint
tags:
  - connections
  - sharepoint
---

The Microsoft SharePoint connection in Prophecy allows you to integrate SharePoint data into your workflows for analysis, transformation, and reporting. SharePoint is widely used for document management, collaboration, and storing structured or unstructured data.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Sharepoint, enter the following parameters:

| Parameter                                                                 | Description                                                                                     |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Connection Name                                                           | Unique name for the connection (e.g., `MySharePointConnection`)                                 |
| Tenant ID                                                                 | Unique identifier (GUID) of your Microsoft 365 tenant                                           |
| Client ID                                                                 | Your SharePoint Client ID                                                                       |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Your SharePoint Client Secret                                                                   |
| Site URL                                                                  | URL of the SharePoint site to connect (e.g., `https://yourcompany.sharepoint.com/sites/mysite`) |

## Sharepoint permissions

When you create an Sharepoint connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the files and folders your Sharepoint credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage an Sharepoint connection in Prophecy, you need the following Sharepoint permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an Sharepoint connection is added to a fabric:

- Anyone in the team can use that connection in pipelines and browse it in the Environment browser.
- Team members do not need to reauthenticate. They inherit the same access and permissions as the original connection setup.

Everyone who uses the connection will operate with the same access level granted by the stored credentials.

:::caution
Be mindful of what permissions the credentials provide. If they allow access to sensitive data, anyone on the team using that connection will have the same level of access.
:::

## Sync connection

As you start using Sharepoint connections in Prophecy, it’s important to understand how data is fetched and kept up to date in a project.

- When you browse an Sharepoint connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
