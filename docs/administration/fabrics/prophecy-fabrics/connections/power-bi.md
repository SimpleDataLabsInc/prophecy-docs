---
title: Microsoft Power BI connection
sidebar_label: Microsoft Power BI
id: power-bi
description: Learn how to connect with PowerBI
tags:
  - connections
  - tableau
---

Prophecy supports writing data to Microsoft Power BI using the Power BI REST API. By configuring a connection with the appropriate Microsoft Entra credentials and scopes, you can push data directly from your Prophecy pipelines into tables used in reports and dashboards.

## Prerequisites

To connect Prophecy to Power BI, your Microsoft administrator must first [register Prophecy as an application](https://learn.microsoft.com/en-us/graph/auth/auth-concepts#register-the-application) in Microsoft Entra ID. This registration provides the Client ID and Client Secret needed to authenticate Prophecy with Microsoft APIs.

As part of the setup, the following scope must be granted to the registered app:

- `Dataset.ReadWrite.All`

This lets Prophecy update tables in Power BI. For detailed instructions on adding scopes to your app, visit [Using the Power BI REST APIs](https://learn.microsoft.com/en-us/rest/api/power-bi/#scopes) in the Power BI documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read and write using [Source and Target gems](/analysts/source-target)     | No        |
| Write data with a [PowerBIWrite gem](/analysts/power-bi-write)             | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | No        |

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

Power BI connections are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams in Prophecy. Once a Power BI connection is added to a fabric, anyone on that team can use it to send data to Power BI from their pipelines. Everyone will inherit the permissions of the Microsoft Entra app used for connection setup.
