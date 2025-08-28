---
title: Databricks
id: databricks
description: Learn how to connect with Databricks
tags:
  - connections
  - sql
  - databricks
---

This page explains how to use and configure a Databricks connection in Prophecy. A Databricks connection allows Prophecy to access files, tables, and compute resources in your Databricks workspace. You can use the same connection to access any of these resources, as long as the authenticated account in the connection has the appropriate permissions.

## Prerequisites

Prophecy connects to Databricks using the credentials you provide. These credentials are used to authenticate your session and authorize all data operations during pipeline execution, including reading from and writing to tables. To use a Databricks connection effectively, your user or service principal must have the following:

- [Basic table permissions](https://docs.databricks.com/aws/en/tables/#basic-table-permissions) defined in the Databricks documentation.
- Additional [Unity Catalog privileges](https://docs.databricks.com/aws/en/data-governance/unity-catalog/manage-privileges/privileges):
  - `CREATE VOLUME` for permission to create the `PROPHECY_ORCHESTRATOR_VOLUME`
  - `READ VOLUME` for the path `/Volumes/<catalog>/<schema>/PROPHECY_ORCHESTRATOR_VOLUME`
  - `WRITE VOLUME` for permission to delete intermediate files from the volume

## Connection type

Prophecy supports Databricks as both a SQL Warehouse connection and an Ingress/Egress connection. To learn more about these different connection types, visit [Prophecy fabrics](/administration/fabrics/prophecy-fabrics/#connections).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported                           |
| -------------------------------------------------------------------------- | ----------------------------------- |
| Run SQL queries                                                            | Yes — SQL Warehouse Connection only |
| Read and write data with a [Table gem](/analysts/source-target)            | Yes — SQL Warehouse Connection only |
| Read data with a [Source gem](/analysts/source-target)                     | Yes                                 |
| Write data with a [Target gem](/analysts/source-target)                    | Yes                                 |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes                                 |

## Connection parameters

To create a connection with Databricks, enter the following parameters.

| Parameter             | Description                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | Name to identify your connection.                                                                                                                                                       |
| JDBC URL              | URL to connect to your SQL warehouse<br/>Example: `jdbc:databricks://<databricks-instance>:443/default;transportMode=http;ssl=1;AuthMech=3;httpPath=/sql/1.0/warehouses/<warehouse-id>` |
| Catalog               | Default write location for target tables.                                                                                                                                               |
| Schema                | Default write location for target tables.                                                                                                                                               |
| Authentication method | How you want to authenticate your Databricks account. Learn more in [Authentication methods](#authentication-methods).                                                                  |

:::info
When you use Databricks as your primary SQL warehouse, Prophecy also uses the catalog and schema you define in the connection to store temporary tables during [pipeline execution](/analysts/pipeline-execution#external-data-handling). Therefore, you must have write access to the schema in Databricks. To avoid conflicts, define distinct catalog and schema locations for each fabric.
:::

## Authentication methods

You can configure your Databricks connection using the following authentication methods.

### OAuth

When you choose [Databricks OAuth](docs/administration/authentication/databricks-oauth.md) for the authentication method, there are two modes.

| OAuth Method      | Description                                                                                                                                             | Use cases                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| User              | Each user signs in with their own Databricks account when prompted during interactive sessions.                                                         | Development workflows, testing, or when real-time user interaction is needed.                                   |
| Service Principal | Prophecy uses a [service principal](https://docs.databricks.com/aws/en/admin/users-groups/service-principals) to authenticate without user interaction. | Automated or scheduled pipelines that require stable, long-term access without re-authentication interruptions. |

#### Choose the appropriate OAuth method

We [recommend using separate fabrics](/administration/team-based-access) for development and production environments. Each fabric should use a different OAuth method to align with its purpose.

- **Development fabric**: Utilize user-based OAuth.

  Developers authenticate using their own Databricks accounts so they only have access to the correct set of resources. Regular re-authentication enforces better security and reflects changes in individual user permissions.

- **Production fabric**: Use service principal-based OAuth.

  For automated or scheduled pipelines, use a service principal to ensure uninterrupted access. Unlike user identities, service principals don't expire or become deactivated, so pipelines continue running reliably. Limit fabric access to trusted users, since all members share the service principal’s credentials.

:::info

You can use User OAuth to schedule pipelines without service principal credentials. However, you'll need to periodically re-authenticate each Databricks connection in the fabric to keep schedules running.

Because Prophecy can't retrieve the exact token expiration time from Databricks, it estimates when to prompt you for re-authentication. To avoid interruptions, we recommend switching to Service Principal OAuth when deploying projects to production.

:::

### Personal Access Token (PAT)

When you choose **Personal Access Token** (PAT) for the authentication method, you'll authenticate using a [Databricks personal access token](https://docs.databricks.com/aws/en/dev-tools/auth/pat). When you set up the connection, you will use a [secret](docs/administration/secrets/secrets.md) to enter your PAT.

Using the PAT authentication method:

- All team members who have access to the fabric can use the connection in their projects.
- No additional authentication is required. Team members automatically inherit the access and permissions of the stored connection credentials.

## Fetching data

Prophecy fetches data from Databricks connections in the following ways:

- When you browse a Databricks connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Databricks changes, Prophecy will automatically use the new schema.
