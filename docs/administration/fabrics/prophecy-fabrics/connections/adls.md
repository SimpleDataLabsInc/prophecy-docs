---
title: Azure Data Lake Storage connection
sidebar_label: Azure Data Lake Storage
id: adls
description: Learn how to connect to Azure Data Lake Storage (ADLS) accounts and containers
tags:
  - connections
  - adls
---

Prophecy supports direct integration with [Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) (ADLS), allowing you to read from and write to ADLS containers as part of your data pipelines. This page explains how to configure the connection, what permissions are required, and how ADLS connections are managed and shared within your team.

## Prerequisites

Prophecy connects to ADLS using the credentials you provide. These are used to authenticate requests and authorize all file operations during pipeline execution.

To ensure Prophecy can read from and write to your storage account, you must have the following **Azure RBAC role** or equivalent permissions:

- **Storage Blob Data Contributor**: Read, write, and delete access to Blob storage containers and blobs.

To learn more, see [Access control model in Azure Data Lake Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-access-control-model).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                                                     | Supported |
| ----------------------------------------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/adls-gem)                                                           | Yes       |
| Write data with a [Target gem](/analysts/adls-gem)                                                          | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar)                                  | Yes       |
| Trigger scheduled pipeline upon [file arrival or change](/analysts/triggers#file-arrival-or-change-trigger) | Yes       |

## Connection parameters

To create a connection with your ADLS account, enter the following parameters:

| Parameter                                                                                          | Description                                                                                                                                          |
| -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                                                    | Unique name for the connection.                                                                                                                      |
| Client ID                                                                                          | Your Microsoft Entra app client ID                                                                                                                   |
| Tenant ID                                                                                          | Your Microsoft Entra [tenant ID](https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant)                                            |
| Client Secret ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md)) | Your Microsoft Entra app client secret                                                                                                               |
| Account Name                                                                                       | Name of your ADLS [storage account](https://learn.microsoft.com/en-us/azure/storage/blobs/create-data-lake-storage-account) that hosts the container |
| Container Name                                                                                     | Name of the [container](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers) within the storage account      |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once an ADLS connection is added to a fabric, all team members who have access to that fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored credentials.
