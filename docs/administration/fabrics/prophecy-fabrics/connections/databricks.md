---
title: Databricks
id: databricks
description: Learn how to connect with Databricks
tags:
  - connections
  - sql
  - databricks
---

A Databricks connection lets you access your cloud data warehouse. It’s optimized for analytics and built to support modern data warehousing workloads with high performance and scalability.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Databricks, enter the following parameters:

| Parameter             | Description                                          |
| --------------------- | ---------------------------------------------------- |
| Connection Name       | Name to to identify your connection                  |
| JDBC URL              | URL to connect to your SQL warehouse                 |
| Catalog               | Default catalog for reading and writing data         |
| Schema                | Default schema for reading and writing data          |
| Authentication method | How you want to authenticate your Databricks account |

## Authentication methods

You can configure your Databricks connection with one of three authentication methods:

- **Databricks [OAuth](docs/administration/authentication/databricks-oauth.md).** Prophecy prompts you to sign in with Databricks.
- **Personal Access Token (PAT).** Use a [secret](docs/administration/secrets/secrets.md) to enter your PAT.

## Databricks permissions

When you create an Databricks connection in Prophecy, access permissions are tied to the credentials you use. This means you will only see data your Databricks credentials have permission to access. Any actions you perform—such as reading or writing files—are done using those credentials.

To fully leverage a Databricks connection in Prophecy, you need the following Databricks permissions:

- Example
- Example

## Sharing connections within teams

Connections are stored inside fabrics, which are assigned to certain teams. The way Databricks connections are shared depends on the authentication method used to configure the connection.

### OAuth

When you create a Databricks connection with OAuth:

- Team members who use the connection will have to sign in with OAuth using their personal credentials.
- Permissions will be inherited from their personal credentials.

### Personal Access Token (PAT)

When you create a Databricks connection using a PAT:

- All team members that have access to the fabric can use the connection in their projects.
- No additional authentication is required. Team members automatically inherit the access and permissions of the original connection.

:::caution
Be mindful of the access level granted by the stored credentials. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Sync connection

Prophecy fetches data from Databricks connections in the following ways:

- When you browse an Databricks connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. Keep in mind that schema evolution may or may not be picked up automatically depending on the type of Source gem used.

## Limitations
