---
title: Microsoft OneDrive
id: onedrive
description: Learn how to connect to OneDrive
tags:
  - connections
  - onedrive
---

Microsoft OneDrive is a cloud-based file storage service that allows teams to store, access, and share files. In Prophecy, you can connect to OneDrive to read and write data as part of your data pipelines.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Prerequisites

To use a OneDrive connection, your Microsoft account admin needs to:

- [Register Prophecy](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#register-the-application) as an application in Microsoft. This will generate the Client ID and Client Secret that Prophecy will use to connect to Microsoft.

## Parameters

To create a connection with OneDrive, enter the following parameters:

| Parameter                                                                 | Description                                        |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| Connection Name                                                           | Name to to identify your connection                |
| Tenant ID                                                                 | Microsoft 365 tenant ID                            |
| Client ID                                                                 | Application (client) ID from your app registration |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Client secret generated during app registration    |
| User Principal Name                                                       | Email you use to sign into Microsoft               |

## OneDrive permissions

When you create an OneDrive connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading or writing files. To fully leverage an OneDrive connection in Prophecy, you need read and write access to the folders you use.

To learn more about OneDrive permissions, see [Share OneDrive files and folders](https://support.microsoft.com/en-us/office/share-onedrive-files-and-folders-9fcc2f7d-de0c-4cec-93b0-a82024800c07).

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a OneDrive connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from OneDrive connections in the following ways:

- When you browse a OneDrive connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in OneDrive changes, Prophecy will automatically use the new schema.
