---
title: Microsoft OneDrive connection
sidebar_label: Microsoft OneDrive
id: onedrive
description: Learn how to connect to OneDrive
tags:
  - connections
  - onedrive
---

Microsoft OneDrive is a cloud-based file storage service that allows teams to store, access, and share files. In Prophecy, you can connect to OneDrive to read and write data as part of your data pipelines.

## Prerequisites

To connect Prophecy to OneDrive, your Microsoft administrator must first [register Prophecy as an application](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#register-the-application) in Microsoft Entra ID. This registration provides the Client ID and Client Secret needed to authenticate Prophecy with Microsoft APIs.

As part of the setup, the following application-level permission must be granted to the registered app:

- `Files.ReadWrite.All`

This lets Prophecy read, create, update, and delete files in all site collections. Learn more in [Permissions for OneDrive API](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/concepts/permissions_reference?view=odsp-graph-online).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                        | Supported |
| ------------------------------------------------------------------------------ | --------- |
| Read data with a [Source gem](/analysts/source-target)                         | Yes       |
| Write data with a [Target gem](/analysts/source-target)                        | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#environment) | Yes       |

## Connection parameters

To create a connection with OneDrive, enter the following parameters. You can find the Tenant ID, Client ID, and Client Secret in your Microsoft Entra app.

| Parameter                                                                 | Description                                                                                               |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Connection Name                                                           | Name to identify your connection                                                                          |
| Tenant ID                                                                 | Your Microsoft Entra [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant) |
| Client ID                                                                 | Your Microsoft Entra app Client ID                                                                        |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Your Microsoft Entra app Client Secret                                                                    |
| User Principal Name                                                       | Email you use to sign into Microsoft                                                                      |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a OneDrive connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from OneDrive connections in the following ways:

- When you browse a OneDrive connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in OneDrive changes, Prophecy will automatically use the new schema.
