---
title: Google Cloud Storage connection
sidebar_label: Google Cloud Storage
id: gcs
description: Learn how to connect to Google Cloud Storage (GCS) buckets
tags:
  - connections
  - gcs
---

Prophecy supports direct integration with Google Cloud Storage (GCS), allowing you to read from and write to GCS buckets as part of your data pipelines. This page explains how to configure the connection, what permissions are required, and how GCS connections are managed and shared within your team.

## Prerequisites

Prophecy connects to GCS using a Google Cloud service account key that you provide. This key is used to authenticate requests and authorize all file operations during pipeline execution.

To ensure Prophecy can read from and write to GCS as needed, the service account must have the following permissions:

- `storage.objects.list` — to list the contents of the bucket
- `storage.objects.get` — to read files from the bucket
- `storage.objects.create` — to write files to the bucket

To learn more, visit [IAM permissions for Cloud Storage](https://cloud.google.com/storage/docs/access-control/iam-permissions) in the Google Cloud documentation.

## Feature support

The table below outlines whether the connection supports certain Prophecy features.

| Feature                                                                                                     | Supported |
| ----------------------------------------------------------------------------------------------------------- | --------- |
| Read data with a [Source gem](/analysts/gcs-gem)                                                            | Yes       |
| Write data with a [Target gem](/analysts/gcs-gem)                                                           | Yes       |
| Browse data in the [Environment browser](/analysts/project-editor#sidebar)                                  | Yes       |
| Trigger scheduled pipeline upon [file arrival or change](/analysts/triggers#file-arrival-or-change-trigger) | Yes       |

## Connection parameters

To create a connection with your GCS buckets, enter the following parameters:

| Parameter                                                                                                | Description                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name                                                                                          | Unique name for the connection.                                                                                                                                        |
| Service Account Key ([Secret required](docs/administration/fabrics/prophecy-fabrics/secrets/secrets.md)) | Key used to authenticate the connection. <br/>See [Create and delete service account keys](https://cloud.google.com/iam/docs/keys-create-delete) for more information. |
| Project ID                                                                                               | Google Cloud project ID that owns the bucket.                                                                                                                          |
| Bucket Name                                                                                              | Name of your GCS bucket.                                                                                                                                               |

:::info Service Account Key
Paste the full JSON content of your GCP service account key into a [Prophecy secret](/analysts/secrets) as text. Binary upload is not supported.
:::

## Sharing connections within teams

Connections in Prophecy are stored within [fabrics](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md), which are assigned to specific teams. Once a GCS connection is added to a fabric, all team members who have access to the fabric can use the connection in their projects. No additional authentication is required—team members automatically inherit the access and permissions of the stored service account credentials.

:::caution
Be mindful of the access level granted by the stored service account key. Anyone on the team will have the same permissions—including access to sensitive data if allowed.

To manage this securely, consider creating a dedicated fabric and team for high-sensitivity connections. This way, only approved users have access to those credentials.
:::

## Fetching data

Prophecy fetches data from GCS connections in the following ways:

- When you browse a GCS connection in the [Environment browser](/analysts/pipelines), Prophecy fetches data on demand as you expand folders. You can manually refresh the Environment browser to see updated files.
- When a pipeline runs, Source gems will read the latest available version of the data. If the schema of the data stored in GCS changes, you will need to re-infer the schema in Prophecy.
