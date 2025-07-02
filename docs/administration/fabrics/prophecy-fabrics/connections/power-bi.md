---
title: Microsoft Power BI
id: power-bi
draft: true
description: Learn how to connect with PowerBI
tags:
  - connections
  - tableau
---

## Prerequisites

To use a Power BI connection, your Microsoft account admin needs to:

- [Register Prophecy](https://learn.microsoft.com/en-us/power-bi/developer/embedded/register-app) as a Microsoft Entra app. This will generate the Client ID and Client Secret that Prophecy will use to connect to Microsoft.

- Prophecy uses Power BI APIs for the [PowerBIWrite gem](/analysts/power-bi). To use this gem with a Power BI connection, you need to assign the following scope to your Microsoft Entra app. A scope defines the permissions your app has that can be used for the API.

  `Dataset.ReadWrite.All`

  For detailed instructions on adding scopes to your app, visit [Using the Power BI REST APIs](https://learn.microsoft.com/en-us/rest/api/power-bi/#scopes) in the Power BI documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | No        |
| Write data with a [PowerBIWrite gem](/analysts/power-bi)      | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | No        |

## Limitations

Prophecy uses the Power BI connection for the [Push Datasets](https://learn.microsoft.com/en-us/rest/api/power-bi/push-datasets) Power BI API. For the full list of limitations for this API, visit [Push semantic model limitations](https://learn.microsoft.com/en-us/power-bi/developer/embedded/push-datasets-limitations) in the Power BI documentation.

## Connection parameters

To create a connection with Power BI, enter the following parameters. You can find the Tenant ID, Client ID, and Client Secret in your Microsoft Entra app.

| Parameter                                                                 | Description                            |
| ------------------------------------------------------------------------- | -------------------------------------- |
| Connection Name                                                           | Unique name for the connection         |
| Tenant ID                                                                 | Your Microsoft Entra tenant ID         |
| Client ID                                                                 | Your Microsoft Entra app Client ID     |
| Client Secret ([Secret required](docs/administration/secrets/secrets.md)) | Your Microsoft Entra app Client Secret |

## Sharing connections within teams

Power BI connections are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams in Prophecy. Once a Power BI connection is added to a fabric, anyone on that team can use it to send data to Power BI from their pipelines. Everyone will inherit the permissions of the user authenticated during connection setup.
