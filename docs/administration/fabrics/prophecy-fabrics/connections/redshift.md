---
title: Amazon Redshift
id: redshift
description: Learn how to connect to Redshift
tags:
  - connections
  - redshift
---

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Redshift, enter the following parameters:

| Parameter                                                            | Description                                                                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Connection Name                                                      | Name to to identify your connection                                                                     |
| Server                                                               | Redshift cluster server<br/>Example: `redshift-cluster-1.abc123xyz789.us-west-2.redshift.amazonaws.com` |
| Port                                                                 | Port used by Redshift (default is `5439`)                                                               |
| Username                                                             | Your Redshift username                                                                                  |
| Database                                                             | Name of the Redshift database you want to connect to<br/>Example: `analytics_db`                        |
| Password ([Secret required](docs/administration/secrets/secrets.md)) | Your Redshift password                                                                                  |

## Redshift permissions

When you create an Redshift connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to tables. To fully leverage an Redshift connection in Prophecy, you need read and write access to the tables you use.

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a Redshift connection is added to a fabric, all team members that have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from Redshift connections in the following ways:

- When you browse a Redshift connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Redshift changes, Prophecy will automatically use the new schema.
