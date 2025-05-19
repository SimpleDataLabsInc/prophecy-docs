---
title: Microsoft SharePoint
id: sharepoint
description: Learn how to connect with SharePoint
tags:
  - connections
  - sharepoint
---

The Microsoft SharePoint connection in Prophecy allows you to integrate SharePoint data into your workflows for analysis, transformation, and reporting. SharePoint is widely used for document management, collaboration, and storing structured or unstructured data.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Limitations

Prophecy can only access files stored in the [document library](https://support.microsoft.com/en-us/office/what-is-a-document-library-3b5976dd-65cf-4c9e-bf5a-713c10ca2872) of your SharePoint site. Make sure any files you want to import are placed there.

## Prerequisites

To use a SharePoint connection, your Microsoft account admin needs to:

- [Register Prophecy](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app) as an application in Microsoft. This will generate the Client ID and Client Secret that Prophecy will use to connect to Microsoft.
- Grant the following application-level permission to the application: `Sites.Manage.All`.

## Parameters

To create a connection with SharePoint, enter the following parameters:

| Parameter                                                                 | Description                                                                                          |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Connection Name                                                           | Unique name for the connection                                                                       |
| Tenant ID                                                                 | Microsoft 365 tenant ID                                                                              |
| Client ID                                                                 | Application (client) ID from your app registration                                                   |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Client secret generated during app registration                                                      |
| Site URL                                                                  | URL of the SharePoint site to connect<br/>Example: `https://yourcompany.sharepoint.com/sites/mysite` |

## SharePoint permissions

When you create a SharePoint connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to your document library. For example, if you are a `Visitor` on a site, you won't be able to edit site content from Prophecy.

To learn more about SharePoint permissions, [click here](https://support.microsoft.com/en-us/office/overview-site-governance-permission-and-sharing-for-site-owners-95e83c3d-e1b0-4aae-9d08-e94dcaa4942e).

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a SharePoint connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from SharePoint in the following ways:

- When you browse a SharePoint connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of the data stored in SharePoint changes, you will need to re-infer the schema in Prophecy.
