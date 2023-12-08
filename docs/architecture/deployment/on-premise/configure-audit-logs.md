---
title: Audit Events Configuration
id: audit-events
description: Prophecy on-prem installations audit events (logs) being synced to object stores like S3, Azure Blob Storage etc.
sidebar_position: 1
tags:
  - audit events
  - audit logs
  - disaster recovery
  - s3
  - azure blob
  - NFS
---

Prophecy offers robust support for storing audit events (logs) on two of the industry's leading cloud object stores: AWS S3 and Azure Blob Storage or even local persistent volume (PV). Leveraging the capabilities of these object stores, Prophecy seamlessly synchronizes and persistently stores audit events. This not only ensures the secure retention of crucial data but also facilitates streamlined tracking and in-depth analysis of user interactions and activities for enhanced operational insights.

:warning: Certain object store level configurations are shared with [backup restore configurations here](./configure-backup.md) as they both use a shared object store to store/backup their data.

## Usecase

- The overarching objective is to comprehensively track and log every user-level action.
- All user actions will be meticulously recorded and stored, enabling easy retrieval from a persistent storage or object store, particularly when an audit is required.
- To achieve this, each user action will be meticulously tracked and written into designated database tables.
- The data accumulated in these database tables will be periodically transferred and pushed to an object store for efficient storage and management.

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of user events audit logs required.

### Supported Environment Variables

| Environment variable name     | Description                                                                                                                                                                           | Default value   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `ENABLE_USER_EVENTS`          | Set to `true` to enable user event audit logs                                                                                                                                         | `false`         |
| `OBJECT_STORE_LOCATION_TYPE`  | Which provider to use for the object store. Supports `local`, `s3`, `azure-blob-storage`                                                                                              | `local`         |
| `OBJECT_STORE_LOCATION_LOCAL` | Any PVC Mount point with storage                                                                                                                                                      | `/backup`       |
| `UEVENTS_SCHEDULE`            | How frequently to push user events to object store. Defaults to every one hour. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format)             | `0 0 */1 * * *` |
| `UEVENTS_GC_SCHEDULE`         | How frequently to purge old user events from the internal database. Defaults to daily 1 am. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) | `0 0 1 * * *`   |

### To enable user events audit logs

- Set `ENABLE_USER_EVENTS` to `true`
- Set `UEVENTS_SCHEDULE` to the [CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) string for how frequently you'd like user events pushed to the object store.
- Set `UEVENTS_GC_SCHEDULE` to the [CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) string for how frequently you'd like old user events removed from the database.

### Configuration for different object stores

The following providers are supported where data can be pushed to. This can be switched using the `OBJECT_STORE_LOCATION_TYPE` environment variable

#### AWS S3

For this provider, set `OBJECT_STORE_LOCATION_TYPE` to `s3` and configure using the following variables:

| Environment variable name     | Description                                 | Default value                        |
| ----------------------------- | ------------------------------------------- | ------------------------------------ |
| `OBJECT_STORE_LOCATION_LOCAL` | Any PVC Mount point with storage            | `/backup`                            |
| `AWS_S3_BUCKET_NAME`          | S3 Bucket name                              | `athena-ondemand-backup`             |
| `AWS_S3_ENDPOINT`             | S3 Endpoint used to communicate with        | `https://s3.us-west-2.amazonaws.com` |
| `AWS_S3_FORCE_PATH_STYLE`     | If S3 should use path style for bucket name | `true`                               |
| `AWS_S3_REGION`               | S3 Region                                   | `us-west-2`                          |
| `AWS_ACCESS_KEY`              | AWS Access key with the required privileges |                                      |
| `AWS_SECRET_KEY`              | AWS Secret key with the required privileges |                                      |

#### Azure Blob Storage

For this provider, set `OBJECT_STORE_LOCATION_TYPE` to `azure-blob-storage` and configure using the following variables:

| Environment variable name           | Description                               | Default value                                         |
| ----------------------------------- | ----------------------------------------- | ----------------------------------------------------- |
| `OBJECT_STORE_LOCATION_LOCAL`       | Any PVC Mount point with storage          | `/backup`                                             |
| `AZURE_STORAGE_ACCOUNT_NAME`        | Storage Account name                      | `prophecyathenabackup`                                |
| `AZURE_STORAGE_ACCOUNT_SERVICE_URL` | Storage Account Service URL               | `https://prophecyathenabackup.blob.core.windows.net/` |
| `AZURE_STORAGE_CONTAINER_NAME`      | Container name within the Storage Account | `athena-ondemand-backup`                              |
| `AZURE_STORAGE_ACCESS_KEY`          | Storage Access key                        |                                                       |

#### Local Persistent Storage Volume (PV based)

For backup in Athena’s local Persistent Volume (could be NFS), `OBJECT_STORE_LOCATION_LOCAL` should be set to `local` (its default value). You can also set:

| Environment variable name     | Description                      | Default value |
| ----------------------------- | -------------------------------- | ------------- |
| `OBJECT_STORE_LOCATION_LOCAL` | Any PVC Mount point with storage | `/backup`     |

## User events audit logs output

By default pushes events to `/namespace/user-events-audit/` directory in the S3 bucket configured.

### Sample output of user audit logs

```
{"opType": "Query", "createdAt": 1690610557857, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"adminuser@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 11}
{"opType": "Query", "createdAt": 1690552930350, "nameHints": ["ProjectReleaseByProjectIdAndStatus"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"statuses": "[Pending,Running,Retrying]"}, "requestPayload": "[\"_id\",\"releaseTag\",\"status\",\"attempt\",\"createdBy\",\"project{_id name}\"]", "latencyInMillis": 5}
{"opType": "Query", "createdAt": 1690610557967, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"adminuser@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 10}
```
