---
title: SAP HANA connection
sidebar_label: SAP HANA
id: hana
description: Learn how to connect to SAP HANA
tags:
  - connections
  - hana
---

Prophecy supports direct integration with SAP HANA, allowing you to read from and write to the database as part of your data pipelines. This page explains how to configure the connection, what permissions are required, and how Hana connections are managed and shared within your team.

## Prerequisites

To connect Prophecy to SAP HANA, you need:

- **Database credentials**: Prophecy uses the credentials you provide to authenticate your session and authorize all read and write operations during pipeline execution.
- **User permissions**: Your SAP HANA account must have the required [object privileges](https://learning.sap.com/learning-journeys/installing-and-administering-sap-hana/describing-sap-hana-privileges-and-roles) to read from and write to the database.
- **Network setup**: A PrivateLink connection between the Prophecy network and your SAP HANA network. Contact Prophecy support for help setting up PrivateLink.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/hana-gem)                          | Yes       |
| Write data with a [Target gem](/analysts/hana-gem)                         | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Connection parameters

To create a connection to SAP HANA enter the following parameters.

| Parameter             | Description                                       |
| --------------------- | ------------------------------------------------- |
| Connection Name       | A unique name for the connection.                 |
| Authentication Method | Select **Username and Password** or **User Key**. |

### Authentication methods

#### Username and Password

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| Host      | The IP address or hostname of the SAP HANA server. |
| Port      | The port number used to connect to the server.     |
| Username  | Your SAP HANA username.                            |
| Password  | Your SAP HANA password.                            |

#### User Key

| Parameter | Description                                                                                                                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User Key  | The HDB user store key to authenticate the connection. See [SAP HANA User Store (hdbuserstore)](https://help.sap.com/docs/SAP_HANA_CLIENT/f1b440ded6144a54ada97ff95dac7adf/708e5fe0e44a4764a1b6b5ea549b88f4.html?version=2.24) for details. |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Hana connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from SAP HANA connections in the following ways:

- When you browse a connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of the table stored in Hana changes, you will need to re-infer the schema in Prophecy.
