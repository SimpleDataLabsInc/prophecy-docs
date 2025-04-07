---
title: Tableau
id: tableau
description: Learn how to connect with Tableau
tags:
  - connections
  - tableau
---

A Tableau connection allows you to update data sources in Tableau projects. This integration is primarily used to upload data as `Hyper` files (Tableau’s high-performance, in-memory database format).

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

When you create an Tableau connection in Prophecy, access permissions are tied to the credentials you use. To fully leverage an Tableau connection in Prophecy, you need the following Tableau permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics that are assigned to certain teams. Once an Tableau connection is added to a fabric:

- Anyone in the team can use that connection to send data to Tableau from their pipeline. Everyone who uses the connection will operate with the same access level granted by the stored credentials.

## Limitations
