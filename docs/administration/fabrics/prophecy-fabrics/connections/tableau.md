---
title: Tableau
id: tableau
description: Learn how to connect with Tableau
tags:
  - connections
  - tableau
---

Prophecy uses the [Tableau REST API](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm) to send data to Tableau as `.hyper` files (Tableau’s in-memory format). This page describes how to set up and use a Tableau connection, so you can publish and update data sources in your Tableau projects directly from Prophecy pipelines.

## Prerequisites

To connect Prophecy to Tableau, you need to provide credentials in the form of a personal access token. These credentials are used to authenticate all actions performed via the Tableau REST API. To use a Tableau connection effectively, ensure that the personal access token has the necessary Publish capability for the Tableau project where you will publish data sources.

For more details on Tableau permissions, see the Tableau documentation on [Permission Capabilities](https://help.tableau.com/current/server/en-us/permissions_capabilities.htm).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)                     | No        |
| Write data with a [TableauWrite gem](/analysts/tableau)                    | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | No        |

## Limitations

Using Tableau Hyper files is a legacy approach that Prophecy supports mainly for backward compatibility. It helps users keep existing dashboards running smoothly while migrating from older systems.

For a modern, cloud-native workflow, write pipeline outputs directly to a supported cloud data platform like Databricks, Snowflake, or BigQuery. Then connect Tableau to that platform to visualize the data—no need to set up a separate Tableau connection or perform extra export steps in Prophecy.

## Connection parameters

To create a connection with Tableau, enter the following parameters:

| Parameter                                                                 | Description                                                           |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Connection Name                                                           | Unique name for the connection                                        |
| Tableau Server URL                                                        | URL of your Tableau Server<br/>Example: `https://tableau.example.com` |
| Tableau Token Name                                                        | Name of your Tableau personal access token                            |
| Tableau Token ([Secret required](docs/administration/secrets/secrets.md)) | Your Tableau personal access token                                    |
| Tableau Site Name                                                         | Name of the Tableau site you're connecting to                         |

## Data type mapping

Prophecy processes data using a SQL warehouse. When you are ready to write your transformed data to Tableau, data types are converted to [Tableau data types](https://help.tableau.com/current/pro/desktop/en-us/datafields_typesandroles_datatypes.htm) using the following mapping.

| Databricks    | BigQuery           | Tableau          |
| ------------- | ------------------ | ---------------- |
| BOOLEAN       | BOOL               | Boolean          |
| TINYINT       | INT64              | Number (whole)   |
| SMALLINT      | INT64              | Number (whole)   |
| INT           | INT64              | Number (whole)   |
| BIGINT        | INT64              | Number (whole)   |
| FLOAT         | FLOAT64            | Number (decimal) |
| DOUBLE        | FLOAT64            | Number (decimal) |
| DECIMAL(p,s)  | NUMERIC/BIGNUMERIC | Number (decimal) |
| STRING        | STRING             | String           |
| BINARY        | BYTES              | String           |
| DATE          | DATE               | Date             |
| TIMESTAMP     | TIMESTAMP          | Date & Time      |
| TIMESTAMP_NTZ | DATETIME           | Date & Time      |
| INTERVAL      | INTERVAL           | String           |
| ARRAY         | ARRAY              | String           |
| STRUCT        | STRUCT             | String           |
| VOID          | NULL               | Null             |

## Sharing connections within teams

Tableau connections are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams in Prophecy. Once a Tableau connection is added to a fabric, anyone on that team can use it to send data to Tableau from their pipelines. Everyone will inherit the permissions of the user authenticated during connection setup.
