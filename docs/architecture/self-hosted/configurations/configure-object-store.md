---
title: Object Store Configuration
id: configure-object-store
description: Prophecy installations allow certain critical data like backups and audit logs to synced to object stores like S3, Azure Blob Storage, GCS etc.
sidebar_position: 5
tags:
  - object store
  - configuration
  - disaster recovery
  - AWS
  - s3
  - azure blob
  - NFS
  - GCP
  - GCS
---

Prophecy provides reliable support for storing essential data such as backups and audit logs. However, to enable this functionality, a storage location is required. Prophecy seamlessly integrates with the industry's leading cloud (provider) object stores, including AWS S3, Azure Blob Storage, and GCP Cloud Storage, as well as local persistent volumes (which could be backed by a NFS). This section outlines how to configure these storage options effectively.

## Edit Object Store Configurations

To edit object store configurations in Prophecy, follow these steps:

1. Log in to Prophecy as an admin user.
1. Navigate to the **Admin** tab of the Prophecy **Settings** page.
1. Within the Admin main tab, select the **Config** subtab.
1. Finally, click on the `Object Store Config` sub tab to configure the object store settings.

## Configuration options

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options.

:::caution
All sensitive keys are displayed in `********` format. However, you may supply the new values in normal text and save the JSON to update the keys.
:::

```
{
  "aws": {
    "accessKey": "********",
    "s3": {
      "bucketName": "athena-ondemand-backup",
      "endpoint": "https://s3.us-west-2.amazonaws.com",
      "forcePathStyle": true,
      "region": "us-west-2"
    },
    "secretKey": "********"
  },
  "azure": {
    "accessKey": "********",
    "blobStorage": {
      "accountName": "prophecyathenabackup",
      "containerName": "athena-ondemand-backup",
      "serviceURL": "https://prophecyathenabackup.blob.core.windows.net/"
    },
    "useManagedIdentityToAuthenticate": false
  },
  "cloudProvider": "gcp",
  "gcp": {
    "cloudStorage": {
      "bucketName": "athena-ondemand-backup"
    },
    "serviceAccount": "********"
  },
  "localLocation": "/backup",
  "locationType": "gcp-cloud-stoage"
}
```

### Generic Configuration Variables

These are the generic configurations which are required to be set irrespective of the provider.

| Configuration variable name | Description                                                                                                                      | Default value |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `locationType`              | Which provider to use for the object store. Supports `local`, `s3`, `azure-blob-storage`, `gcp-cloud-storage`                    | `local`       |
| `localLocation`             | Any PVC Mount point with where local backup is done. Is required even for provider based object stores for a temporary location. | `/backup`     |

### Provider specific configuration

This section outlines there various configurations at each provider level.

#### AWS S3

For this provider, set `locationType` to `s3` and configure using the following variables:

| Environment variable name | Description                                 | Default value                        |
| ------------------------- | ------------------------------------------- | ------------------------------------ |
| `aws.s3.bucketName`       | S3 Bucket name                              | `athena-ondemand-backup`             |
| `aws.s3.endpoint`         | S3 Endpoint used to communicate with        | `https://s3.us-west-2.amazonaws.com` |
| `aws.s3.forcePathStyle`   | If S3 should use path style for bucket name | `true`                               |
| `aws.s3.region`           | S3 Region                                   | `us-west-2`                          |
| `aws.accessKey`           | AWS Access key with the required privileges |                                      |
| `aws.secretKey`           | AWS Secret key with the required privileges |                                      |
| `localLocation`           | Any PVC Mount point with storage            | `/backup`                            |
| `locationType`            | Set to AWS S3                               | `s3`                                 |

#### Azure Blob Storage

For this provider, set `locationType` to `azure-blob-storage` and configure using the following variables:

| Environment variable name                | Description                                                    | Default value                                         |
| ---------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| `azure.blobStorage.accountName`          | Storage Account name                                           | `prophecyathenabackup`                                |
| `azure.blobStorage.serviceURL`           | Storage Account Service URL                                    | `https://prophecyathenabackup.blob.core.windows.net/` |
| `azure.blobStorage.containerName`        | Container name within the Storage Account                      | `athena-ondemand-backup`                              |
| `azure.useManagedIdentityToAuthenticate` | Wheather to use system managed identity (role) to authenticate | `false`                                               |
| `azure.accessKey`                        | Storage Access key                                             |                                                       |
| `localLocation`                          | Any PVC Mount point with storage                               | `/backup`                                             |
| `locationType`                           | Set to Azure Blob Storage                                      | `azure-blob-storage`                                  |

#### GCP Cloud Storage

For this provider, set `locationType` to `gcp-cloud-storage` and configure using the following variables:

| Environment variable name     | Description                                                                      | Default value            |
| ----------------------------- | -------------------------------------------------------------------------------- | ------------------------ |
| `gcp.serviceAccount`          | Is the GCP Service Account in Base64 Encoded format with the required privileges |                          |
| `gcp.cloudStorage.bucketName` | Container name within the Storage Account                                        | `athena-ondemand-backup` |
| `localLocation`               | Any PVC Mount point with storage                                                 | `/backup`                |
| `locationType`                | Set to GCP Cloud Storage                                                         | `gcp-cloud-storage`      |

#### Local PV (NFS)

As this utilizes the local persistent volumes (PVs) offered by Kubernetes, no extra configuration is needed. All backups are stored directly on the disk, which can be supported by protocols such as NFS.

| Environment variable name | Description                      | Default value |
| ------------------------- | -------------------------------- | ------------- |
| `localLocation`           | Any PVC Mount point with storage | `/backup`     |
| `locationType`            | Set to local                     | `local`       |
