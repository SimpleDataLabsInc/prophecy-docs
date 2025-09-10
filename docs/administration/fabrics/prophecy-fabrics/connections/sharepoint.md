---
title: Microsoft SharePoint connection
sidebar_label: Microsoft SharePoint
id: sharepoint
description: Learn how to connect with SharePoint
tags:
  - connections
  - sharepoint
---

Prophecy supports integration with Microsoft SharePoint, allowing you to read from and write to SharePoint document libraries as part of your data pipelines. This connection enables you to work directly with files stored in SharePoint for processing, transformation, and reporting.

## Prerequisites

To connect Prophecy to OneDrive, your Microsoft administrator must first [register Prophecy as an application](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#register-the-application) in Microsoft Entra ID. This registration provides the Client ID and Client Secret needed to authenticate Prophecy with Microsoft APIs.

As part of the setup, the following application-level permission must be granted to the registered app:

- `Sites.Manage.All`

This allows Prophecy to read and write content across SharePoint sites. Learn more in [Permissions for OneDrive and SharePoint API](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/concepts/permissions_reference?view=odsp-graph-online).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/sharepoint-gem)                    | Yes       |
| Write data with a [Target gem](/analysts/sharepoint-gem)                   | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Limitations

Prophecy can only access files stored in the [document library](https://support.microsoft.com/en-us/office/what-is-a-document-library-3b5976dd-65cf-4c9e-bf5a-713c10ca2872) of your SharePoint site. Make sure any files you want to import are placed there.

## Connection parameters

To create a connection with SharePoint, enter the following parameters. You can find the Tenant ID, Client ID, and Client Secret in your Microsoft Entra app.

| Parameter                                                                 | Description                                                                                               |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Connection Name                                                           | Unique name for the connection                                                                            |
| Tenant ID                                                                 | Your Microsoft Entra [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) |
| Client ID                                                                 | Your Microsoft Entra app Client ID                                                                        |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Your Microsoft Entra app Client Secret                                                                    |
| Site URL                                                                  | URL of the SharePoint site to connect<br/>Example: `https://yourcompany.sharepoint.com/sites/mysite`      |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a SharePoint connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from SharePoint in the following ways:

- When you browse a SharePoint connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of the data stored in SharePoint changes, you will need to re-infer the schema in Prophecy.
