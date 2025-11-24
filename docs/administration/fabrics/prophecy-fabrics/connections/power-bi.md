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

| Parameter                                                                                          | Description                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Connection Name                                                                                    | Unique name for the connection         |
| Tenant ID                                                                                          | Your Microsoft Entra tenant ID         |
| Client ID                                                                                          | Your Microsoft Entra app Client ID     |
| Client Secret ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md)) | Your Microsoft Entra app Client Secret |

## Data type mapping

Prophecy processes data using a SQL warehouse like Databricks SQL or BigQuery. When you are ready to write your transformed data to Power BI, data types are converted to [Power BI data types](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-types) using the following mapping.

| Databricks                      | BigQuery                                   | Power BI       |
| ------------------------------- | ------------------------------------------ | -------------- |
| STRING<br/>Alias: String        | STRING<br/>Alias: String                   | Text           |
| BOOLEAN<br/>Alias: Boolean      | BOOL<br/>Alias: Boolean                    | True/False     |
| BYTE<br/>Alias: Byte            | INT64<br/>Alias: Integer                   | Whole number   |
| SHORT<br/>Alias: Short          | INT64<br/>Alias: Integer                   | Whole number   |
| INT<br/>Alias: Integer          | INT64<br/>Alias: Integer                   | Whole number   |
| LONG<br/>Alias: Long            | INT64<br/>Alias: Integer                   | Whole number   |
| FLOAT<br/>Alias: Float          | FLOAT64<br/>Alias: Float                   | Decimal number |
| DOUBLE<br/>Alias: Double        | FLOAT64<br/>Alias: Float                   | Decimal number |
| DECIMAL(p,s)<br/>Alias: Decimal | NUMERIC/DECIMAL<br/>Alias: Numeric/Decimal | Decimal number |
| DATE<br/>Alias: Date            | DATE<br/>Alias: Date                       | Date/Time      |
| TIMESTAMP<br/>Alias: Timestamp  | TIMESTAMP<br/>Alias: Timestamp             | Date/Time      |
| BINARY<br/>Alias: Binary        | BYTES<br/>Alias: Bytes                     | Text (Base64)  |
| ARRAY<br/>Alias: Array          | REPEATED<br/>Alias: Repeated               | Text           |
| MAP&lt;K,V&gt;<br/>Alias: Map   | RECORD<br/>Alias: Record                   | Text           |
| STRUCT<br/>Alias: Struct        | RECORD<br/>Alias: Record                   | Text           |
| NULLTYPE<br/>Alias: Nulltype    | NULL<br/>Alias: Null                       | Blank          |

## Sharing connections within teams

Power BI connections are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams in Prophecy. Once a Power BI connection is added to a fabric, anyone on that team can use it to send data to Power BI from their pipelines. Everyone will inherit the permissions of the Microsoft Entra app used for connection setup.
