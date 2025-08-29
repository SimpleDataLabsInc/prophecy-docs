---
title: Salesforce connection
sidebar_label: Salesforce
id: salesforce
description: Learn how to connect with Salesforce
tags:
  - connections
  - salesforce
---

The Salesforce connection lets you access your [datasets](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_datasets.htm&type=5) and [objects](https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_concepts.htm) from Salesforce in Prophecy. Prophecy leverages the Salesforce API to access and update your data.

## Prerequisites

Prophecy connects to Salesforce using an API access token associated with your Salesforce account. Access to datasets and objects is controlled by the permissions granted to the account. Before setting up the connection, ensure your account has the necessary access to all relevant resources.

For more details, visit [Dataset Security](https://help.salesforce.com/s/articleView?id=analytics.bi_integrate_dataset_security.htm&type=5) and [Object Permissions](https://help.salesforce.com/s/articleView?id=platform.users_profiles_object_perms.htm&type=5) in the Salesforce documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported |
| -------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/salesforce)                        | Yes       |
| Write data with a Target gem                                               | No        |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes       |

## Limitations

You cannot browse your Salesforce datasets and objects in the Environment browser. Therefore, you cannot drag and drop tables from the Salesforce connection onto your canvas. Instead, all Salesforce Source and Target gems must be manually configured.

## Connection parameters

To create a connection with Salesforce, enter the following parameters:

| Parameter                                                                | Description                                                                                                                                               |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                          | Unique name for the connection                                                                                                                            |
| Salesforce URL                                                           | The base URL for your Salesforce instance. <br/>Example: `https://yourcompany.my.salesforce.com`                                                          |
| Username ([Secret required](docs/administration/secrets/secrets.md))     | Your Salesforce username used for authentication                                                                                                          |
| Password ([Secret required](docs/administration/secrets/secrets.md))     | Your Salesforce password used for authentication                                                                                                          |
| Access Token ([Secret required](docs/administration/secrets/secrets.md)) | The [Salesforce API access token](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_access_tokens.htm&type=5) associated with your account |
| Salesforce API Version                                                   | The version of the Salesforce API to use                                                                                                                  |

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Salesforce connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored connection credentials.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::
