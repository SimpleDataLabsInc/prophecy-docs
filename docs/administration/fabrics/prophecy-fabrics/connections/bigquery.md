---
title: Google BigQuery
id: bigquery
description: Learn how to connect with BigQuery
tags:
  - connections
  - sql
  - bigquery
---

A BigQuery connection allows Prophecy to access tables and compute resources in your BigQuery project. This page explains how to use and configure a Google BigQuery connection in Prophecy.

## Prerequisites

Prophecy connects to BigQuery using the credentials you provide. These credentials are used to authenticate your session and authorize all data operations during pipeline execution, including reading from and writing to tables. To use a BigQuery connection effectively, your user or service account should have:

- `OWNER` dataset role to be able to read, insert, update, and delete datasets.

To learn more, visit [Basic roles and permissions](https://cloud.google.com/bigquery/docs/access-control-basic-roles) in the BigQuery documentation.

## Connection type

Prophecy supports BigQuery as both a SQL Warehouse connection and an Ingress/Egress connection. To learn more about these different connection types, visit [Prophecy fabrics](/administration/fabrics/prophecy-fabrics/#connections).

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                         | Supported                           |
| --------------------------------------------------------------- | ----------------------------------- |
| Run SQL queries                                                 | Yes — SQL Warehouse Connection only |
| Read and write data with a [Table gem](/analysts/source-target) | Yes — SQL Warehouse Connection only |
| Read data with a [Source gem](/analysts/source-target)          | Yes                                 |
| Write data with a [Target gem](/analysts/source-target)         | Yes                                 |
| Browse data in the [Environment browser](/analysts/pipelines)   | Yes                                 |

## Connection parameters

To create a connection with BigQuery, enter the following parameters.

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection Name       | A unique name to identify the connection.                                                                                                                                                                                                                                                                                                                    |
| Project ID            | The ID of your [Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects).                                                                                                                                                                                                                                            |
| Dataset               | The default location for target tables and [temporary tables](/analysts/pipeline-execution#external-data-handling). Requires write permissions.                                                                                                                                                                                                              |
| Authentication Method | The method used to authenticate with BigQuery. See [Authentication methods](#authentication-methods) for details.                                                                                                                                                                                                                                            |
| Bucket Name           | A [Google Cloud Storage bucket](https://cloud.google.com/storage/docs/buckets) used for write optimization (recommended). When specified, Prophecy writes data to the bucket, then loads it into BigQuery. Loading data from a bucket offers better performance than writing with the [BigQuery API](https://cloud.google.com/bigquery/docs/reference/rest). |

## Authentication methods

You can authenticate your BigQuery connection using either **OAuth** or a **Private Key**. Each method grants Prophecy the ability to read and write data in your BigQuery environment based on the permissions assigned to the authenticated identity.

### OAuth

Use OAuth to authenticate with your Google account. This method is best for interactive sessions or environments where users manage their own credentials.

- Prophecy will prompt you to sign in with your Google account when using the connection.
- The connection uses the provided credentials and the associated [IAM](https://cloud.google.com/iam/docs/overview) roles to authorize access.
- Token refresh is handled by Google. The default [refresh token expiration](https://developers.google.com/identity/protocols/oauth2#expiration) time is 7 days.

For more about OAuth and how it works with Google Cloud, see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2).

### Private Key

Use a Service Account when you want an identity distinct from user accounts for authentication. To use this method:

1. Create and download a [Service Account Key](https://developers.google.com/workspace/guides/create-credentials#service-account) from the Google Cloud console.
1. Paste the full JSON content into a [Prophecy secret](/administration/secrets/secret-providers) as text. Binary upload is not supported.
1. Use this secret in the **Service Account Key** field of the BigQuery connection setup.

When you use the Private Key authentication method, all team members who have access to the fabric can use the connection in their projects. Team members automatically inherit the access and permissions of the stored connection credentials.
