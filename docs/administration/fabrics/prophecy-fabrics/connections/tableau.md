---
title: Tableau
id: tableau
description: Learn how to connect with Tableau
tags:
  - connections
  - tableau
---

A Tableau connection allows you to update data sources in Tableau projects. Use this integration to upload data from your pipeline as `Hyper` files (Tableau’s high-performance, in-memory database format).

Prophecy uses the [Tableau REST API](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm) to perform actions like sign in, data upload, and data source publication.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | No        |
| Write data with a Report gem                                  | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | No        |

## Parameters

To create a connection with Tableau, enter the following parameters:

| Parameter                                                                 | Description                                                      |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Connection Name                                                           | Unique name for the connection (e.g., `MyTableauConnection`)     |
| Tableau Server URL                                                        | URL of your Tableau Server (e.g., `https://tableau.example.com`) |
| Tableau Token Name                                                        | Name of your Tableau personal access token                       |
| Tableau Token ([Secret required](docs/administration/secrets/secrets.md)) | Your Tableau personal access token                               |
| Tableau Site Name                                                         | Name of the Tableau site you're connecting to                    |

<!-- You can leverage your Tableau connection with the [TableauWrite](docs/analysts/development/gems/report/tableau.md) gem. -->

## Tableau permissions

When you use a Tableau connection in Prophecy, permissions are determined by the credentials you provide. To use the connection to publish data, those credentials must have the **Publish** capability in Tableau for the project containing the target data source.

For more details on Tableau permissions, see their documentation on [Permission Capabilities](https://help.tableau.com/current/server/en-us/permissions_capabilities.htm).

## Sharing connections within teams

Tableau connections are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams in Prophecy. Once a Tableau connection is added to a fabric, anyone on that team can use it to send data to Tableau from their pipelines. Everyone will inherit the permissions of the user authenticated during connection setup.
