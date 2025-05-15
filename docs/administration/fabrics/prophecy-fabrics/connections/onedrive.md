---
title: Microsoft OneDrive
id: onedrive
description: Learn how to connect to OneDrive
tags:
  - connections
  - onedrive
---

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with OneDrive, enter the following parameters:

| Parameter                                                                 | Description                                                 |
| ------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Connection Name                                                           | Name to to identify your connection                         |
| Tenant ID                                                                 | Azure Active Directory tenant ID for your Microsoft account |
| Client ID                                                                 | Application (client) ID from your Azure app registration    |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Client secret generated during Azure app registration       |
| User Principal Name                                                       | Email you use to sign into Microsoft                        |

## OneDrive permissions

When you create an OneDrive connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading or writing files. To fully leverage an OneDrive connection in Prophecy, you need read and write access to the folders you use.

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a OneDrive connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from OneDrive connections in the following ways:

- When you browse a OneDrive connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in OneDrive changes, Prophecy will automatically use the new schema.
