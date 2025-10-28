---
title: Databricks connection
sidebar_label: Databricks
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

Prophecy supports Databricks as both a SQL Warehouse connection and an Ingress/Egress connection. To learn more about these different connection types, visit [Prophecy fabrics](docs/administration/fabrics/prophecy-fabrics/create-fabric.md#connections).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                    | Supported                           |
| -------------------------------------------------------------------------- | ----------------------------------- |
| Run SQL queries                                                            | Yes — SQL Warehouse Connection only |
| Read and write data with a [Table gem](/analysts/databricks-table)         | Yes — SQL Warehouse Connection only |
| Read data with a [Source gem](/analysts/databricks)                        | Yes                                 |
| Write data with a [Target gem](/analysts/databricks)                       | Yes                                 |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes                                 |
| Index tables in the [Knowledge Graph](/knowledge-graph)                    | Yes                                 |

## Connection parameters

To create a connection with Databricks, enter the following parameters.

| Parameter                             | Description                                                                                                                                                                                                                                                                                             |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                       | Name to identify your connection.                                                                                                                                                                                                                                                                       |
| JDBC URL                              | URL to connect to your SQL warehouse. For example: `jdbc:databricks://<databricks-instance>:443/default;transportMode=http;ssl=1;AuthMech=3;httpPath=/sql/1.0/warehouses/<warehouse-id>`                                                                                                                |
| Catalog                               | Default write location for target tables.                                                                                                                                                                                                                                                               |
| Schema                                | Default write location for target tables.                                                                                                                                                                                                                                                               |
| Authentication method                 | How you want to authenticate your Databricks account. Learn more in [Authentication methods](#authentication-methods).                                                                                                                                                                                  |
| Select a cluster to run the script on | Cluster where [Script gems](/analysts/script) run. Specify a cluster if you want to install libraries on your cluster to use in your scripts.<br/>The dropdown will only display running clusters (inactive clusters will not appear). <br/>If not specified, Script gems run on Databricks Serverless. |

:::info
When you use Databricks as your primary SQL warehouse, Prophecy also uses the catalog and schema you define in the connection to store temporary tables during [pipeline execution](/analysts/pipeline-execution#external-data-handling). Therefore, you must have write access to the schema in Databricks. To avoid conflicts, define distinct catalog and schema locations for each fabric.
:::

## Authentication methods

You can configure your Databricks connection using the following authentication methods.

### OAuth

When you select OAuth as your authentication method for the connection, Prophecy can authenticate using either user-based (U2M) or service principal-based (M2M) OAuth. A single fabric cannot use both methods for the same connection. To use both U2M and M2M, create separate fabrics.

| OAuth Type                  | Authentication                | Requirements                                                          | Token Expiry                        | Best For                   |
| --------------------------- | ----------------------------- | --------------------------------------------------------------------- | ----------------------------------- | -------------------------- |
| **User-based (U2M)**        | Individual user accounts      | [App Registration](docs/administration/authentication/oauth-setup.md) | Periodic re-authentication required | Interactive development    |
| **Service Principal (M2M)** | Service principal credentials | Service Principal Client ID and Service Principal Client Secret       | No expiration                       | Scheduled jobs, automation |

You can schedule pipelines with user-based OAuth, but you’ll need to re-authenticate periodically. Prophecy estimates token expiry based on Databricks’ response and prompts you when re-authentication is needed. To avoid interruptions, switch to service principal-based OAuth for production workloads.

Use different fabrics for development and production to align authentication with your environment’s needs.

| Environment     | OAuth Type              | Description                                                                                                                                                     |
| --------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Development** | User-based (U2M)        | Developers log in with personal Databricks accounts. Reflects individual permissions and enhances security through regular re-authentication.                   |
| **Production**  | Service Principal (M2M) | Pipelines run under a shared service principal for continuous, unattended operation. Access should be restricted to trusted users since credentials are shared. |

### Personal Access Token (PAT)

When you choose **Personal Access Token** (PAT) for the authentication method, you'll authenticate using a [Databricks personal access token](https://docs.databricks.com/aws/en/dev-tools/auth/pat). When you set up the connection, you will use a [secret](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md) to enter your PAT.

Using the PAT authentication method:

- All team members who have access to the fabric can use the connection in their projects.
- No additional authentication is required. Team members automatically inherit the access and permissions of the stored connection credentials.

## Data type mapping

When Prophecy processes data from Databricks using an external SQL warehouse, it converts Databricks data types to compatible types.

| Databricks | BigQuery                       |
| ---------- | ------------------------------ |
| INT        | INT64<br/>Alias: Integer       |
| TINYINT    | INT64<br/>Alias: Integer       |
| SMALLINT   | INT64<br/>Alias: Integer       |
| BIGINT     | INT64<br/>Alias: Integer       |
| STRING     | STRING<br/>Alias: String       |
| BOOLEAN    | BOOL<br/>Alias: Boolean        |
| DECIMAL    | NUMERIC<br/>Alias: Numeric     |
| FLOAT      | FLOAT64<br/>Alias: Float       |
| DOUBLE     | FLOAT64<br/>Alias: Float       |
| BINARY     | BYTES<br/>Alias: Bytes         |
| TIMESTAMP  | TIMESTAMP<br/>Alias: Timestamp |
| DATE       | DATE<br/>Alias: Date           |
| MAP        | JSON<br/>Alias: JSON           |
| ARRAY      | ARRAY<br/>Alias: Array         |
| STRUCT     | STRUCT<br/>Alias: Struct       |
| VOID       | BYTES<br/>Alias: Bytes         |
| VARIANT    | STRUCT<br/>Alias: Struct       |

::::info
Learn more in [Supported data types](/analysts/data-types).
::::

## Fetching data

Prophecy fetches data from Databricks connections in the following ways:

- When you browse a Databricks connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Databricks changes, Prophecy will automatically use the new schema.
