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

When you create a Sharepoint connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see the files and folders your Sharepoint credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage a Sharepoint connection in Prophecy, you need the following Sharepoint permissions:

- Example
- Example

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Sharepoint connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Sync connection

Prophecy fetches data from Sharepoint in the following ways:

- When you browse a Sharepoint connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
