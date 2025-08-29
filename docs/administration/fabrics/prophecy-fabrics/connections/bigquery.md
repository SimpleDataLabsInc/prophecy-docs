---
title: Google BigQuery connection
sidebar_label: Google BigQuery
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

| Feature                                                                    | Supported                           |
| -------------------------------------------------------------------------- | ----------------------------------- |
| Run SQL queries                                                            | Yes — SQL Warehouse Connection only |
| Read and write data with a [Table gem](/analysts/bigquery-table)           | Yes — SQL Warehouse Connection only |
| Read data with a [Source gem](/analysts/bigquery)                          | Yes                                 |
| Write data with a [Target gem](/analysts/bigquery)                         | Yes                                 |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar) | Yes                                 |

## Connection parameters

To create a connection with BigQuery, enter the following parameters.

| Parameter             | Description                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name       | A unique name to identify the connection.                                                                                                                                                                                                                                                                                                                                              |
| Project ID            | The ID of your [Google Cloud project](https://cloud.google.com/resource-manager/docs/creating-managing-projects).                                                                                                                                                                                                                                                                      |
| Dataset               | The default location for target tables and [temporary tables](/analysts/pipeline-execution#external-data-handling). <br/>Requires write permissions.                                                                                                                                                                                                                                   |
| Authentication Method | The method used to authenticate with BigQuery. <br/>See [Authentication methods](#authentication-methods) for details.                                                                                                                                                                                                                                                                 |
| Bucket Name           | A [Google Cloud Storage bucket](https://cloud.google.com/storage/docs/buckets) used for write optimization (recommended). <br/>When specified, Prophecy writes data to the bucket, then loads it into BigQuery. <br/>Note: Loading data from a bucket offers better performance than writing with the [BigQuery API](https://cloud.google.com/bigquery/docs/reference/rest) (default). |

## Authentication methods

You can authenticate your BigQuery connection using either [OAuth](#oauth-user-to-machine) or a [Private Key](#private-key-machine-to-machine).

Each method grants Prophecy the ability to read and write data in your BigQuery environment based on the [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/overview) roles assigned to the authenticated identity.

### OAuth (User-to-Machine)

OAuth is a user-based authentication method best suited for interactive pipeline development. It allows each user to sign in with their own Google account, which ensures that data access is governed by their individual IAM roles and permissions.

When your fabric is configured to use OAuth, the following occurs when a user attaches the fabric to their project:

1. The user is prompted to sign in with their Google account.
1. Prophecy uses the user's credentials to authenticate the connection.
1. The connection operates with the user's IAM roles and permissions.
1. Token management, including refresh, is handled automatically by Google. The default [refresh token expiration](https://developers.google.com/identity/protocols/oauth2#expiration) time is 7 days.

For more about OAuth and how it works with Google Cloud, see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2).

### Private Key (Machine-to-Machine)

Use a Service Account when you want a non-user identity for authentication. This is ideal for automated or shared processes that require stable, long-term access without re-authentication interruptions.

1. Create and download a [Service Account Key](https://developers.google.com/workspace/guides/create-credentials#service-account) from the Google Cloud console.
1. Paste the full JSON content into a [Prophecy secret](/administration/secrets/secret-providers) as text. Binary upload is not supported.
1. Use this secret in the **Service Account Key** field of the BigQuery connection setup.

This method allows all team members with access to the fabric to use the connection in their projects. Those users inherit the access and permissions of the Service Account, as defined in its IAM roles.
