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

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                       | Supported |
| ------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/source-target)        | Yes       |
| Write data with a [Target gem](/analysts/source-target)       | Yes       |
| Browse data in the [Environment browser](/analysts/pipelines) | Yes       |

## Parameters

To create a connection with Databricks, enter the following parameters:

| Parameter             | Description                                                                                                                                                                             |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | Name to to identify your connection                                                                                                                                                     |
| JDBC URL              | URL to connect to your SQL warehouse<br/>Example: `jdbc:databricks://<databricks-instance>:443/default;transportMode=http;ssl=1;AuthMech=3;httpPath=/sql/1.0/warehouses/<warehouse-id>` |
| Catalog               | Default catalog for reading and writing data                                                                                                                                            |
| Schema                | Default schema for reading and writing data                                                                                                                                             |
| Authentication method | How you want to authenticate your Databricks account (OAuth or PAT)                                                                                                                     |

## Authentication methods

You can configure your Databricks connection using the following authentication methods.

### OAuth

When you choose Databricks [OAuth](docs/administration/authentication/databricks-oauth.md) for the authentication method, there are two modes.

| OAuth Method      | Description                                                                                                                                    | Use cases                                                                                                       | Access type |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ----------- |
| User              | Each user signs in with their own Databricks account when prompted during interactive sessions.                                                | Development workflows, testing, or when real-time user interaction is needed.                                   | Individual  |
| Service Principal | Uses a [service principal](https://docs.databricks.com/aws/en/admin/users-groups/service-principals) to authenticate without user interaction. | Automated or scheduled pipelines that require stable, long-term access without re-authentication interruptions. | Shared      |

#### Choose the appropriate OAuth method

We [recommend using separate fabrics](/administration/teams-users/team-based-access) for development and production environments. Each fabric should use a different OAuth method to align with its purpose.

- **Development fabric**: Utilize user-based OAuth.

  Developers authenticate using their own Databricks accounts so they only have access to the correct set of resources. Regular re-authentication enforces better security and reflects changes in individual user permissions.

- **Production fabric**: Use service principal-based OAuth.

  For automated or scheduled pipelines, use a service principal to ensure uninterrupted access. Unlike user identities, service principals don't expire or become deactivated, so pipelines continue running reliably. Limit fabric access to trusted users, since all members share the service principal’s credentials.

### Personal Access Token (PAT)

When you choose **Personal Access Token** (PAT) for the authentication method, you'll authenticate using a [Databricks personal access token](https://docs.databricks.com/aws/en/dev-tools/auth/pat). When you set up the connection, you will use a [secret](docs/administration/secrets/secrets.md) to enter your PAT.

Using the PAT authentication method:

- All team members that have access to the fabric can use the connection in their projects.
- No additional authentication is required. Team members automatically inherit the access and permissions of the stored connection credentials.

## Databricks permissions

When you create an Databricks connection in Prophecy, access permissions are tied to the credentials you use. This is because Prophecy uses your credentials to execute all data operations, such as reading from or writing to tables.

To fully leverage a Databricks connection in Prophecy, you need the following Databricks permissions:

- Create Schema
- Create or Replace Table
- Drop Table
- Insert Into
- Create Volume `PROPHECY_ORCHESTRATOR_VOLUME`
- Access to `/Volumes/<catalog>/<schema>/PROPHECY_ORCHESTRATOR_VOLUME`
- Remove File permission inside the volume
- Copy Into (from the volume)

## Fetching data

Prophecy fetches data from Databricks connections in the following ways:

- When you browse an Databricks connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.

- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of your data in Databricks changes, Prophecy will automatically use the new schema.
