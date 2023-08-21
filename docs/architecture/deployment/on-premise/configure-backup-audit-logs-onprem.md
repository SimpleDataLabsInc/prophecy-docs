---
title: Backup and audit logs for on-prem
id: backup
description: Prophecy on-prem installations backup-restore and audit logs being synced to object stores like S3, Azure Blob Storage etc.
sidebar_position: 2
tags:
  - audit logs
  - backup
  - restore
  - disaster recovery
  - s3
---

Prophecy supports the usage of object stores as a service for two leading cloud providers: AWS S3 and Azure Blob Storage. These object stores can be configured to serve two distinct functions within the Prophecy app:

- Backup: All crucial data used by the Prophecy app can be regularly backed up using the chosen object store. This backup ensures that data can be readily restored in the future if needed.
- Audit User Logs/Events: The object store is also utilized to synchronize and persistently store audit user logs and events. This allows for efficient tracking and analysis of user interactions and activities."

## Usecase

### Backup-Restore

- Prophecy, by design, does not store or own any customer data or code. Instead, it focuses on maintaining essential metadata related to various projects, user-created gems, users, and team information.
- Prophecy manages a persistence storage system, responsible for holding uncommitted changes, as well as other relevant data.
- To safeguard against potential disasters or unrecoverable failures, Prophecy offers a backup feature. This feature allows users to dump the database to remote cloud storage, ensuring the ability to restore it to a new cluster or the same cluster when necessary.
- The current backup support always performs full backups, providing comprehensive data protection.
  This backup functionality has been available since the release of Prophecy version 3.1.2.0.

### User events audit logs

- The overarching objective is to comprehensively track and log every user-level action.
- All user actions will be meticulously recorded and stored, enabling easy retrieval from a persistent storage or object store, particularly when an audit is required.
- To achieve this, each user action will be meticulously tracked and written into designated database tables.
- The data accumulated in these database tables will be periodically transferred and pushed to an object store for efficient storage and management.

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of backup-restore or user events audit logs required.

### Supported Environment Variables

| Environment variable name    | Description                                                                                             | Default value  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------- | -------------- |
| `ENABLE_REGULAR_BACKUPS`     | Set to `true` to enable backups                                                                         | `false`        |
| `ENABLE_USER_EVENTS`         | Set to `true` to enable user event audit logs                                                           | `false`        |
| `UEVENTS_SCHEDULE`           | How frequently to push user events to object store. Defaults to daily. Uses CRON syntax                 | `0 0 \* \* \*` |
| `UEVENTS_GC_SCHEDULE`        | How frequently to purge old user events from the internal database. Defaults to daily. Uses CRON syntax | `0 1 \* \* \*` |
| `OBJECT_STORE_LOCATION_TYPE` | Which provider to use for the object store. Supports `local`, `s3`, `azure-blob-storage`                | `local`        |

### To enable backup

- Set `ENABLE_REGULAR_BACKUPS` to `true`

### To enable user events audit logs

- Set `ENABLE_USER_EVENTS` to `true`
- Set `UEVENTS_SCHEDULE` to the [CRON](https://crontab.guru) string for how frequently you'd like user events pushed to the object store.
- Set `UEVENTS_GC_SCHEDULE` to the [CRON](https://crontab.guru) string for how frequently you'd like old user events removed from the database.

### Configuration for object store

The following providers are supported where data can be pushed to. This can be switched using the `OBJECT_STORE_LOCATION_TYPE` environment variable

#### AWS S3

For this provider, set `OBJECT_STORE_LOCATION_TYPE` to `s3` and configure using the following variables:

| Environment variable name     | Description                                 | Default value                                   |
| ----------------------------- | ------------------------------------------- | ----------------------------------------------- |
| `OBJECT_STORE_LOCATION_LOCAL` | Any PVC Mount point with storage            | `/backup`                                       |
| `AWS_S3_BUCKET_NAME`          | S3 Bucket name                              | `athena-ondemand-backup`                        |
| `AWS_S3_BUCKET_URL_PREFIX`    | S3 URL Prefix                               | `https://s3.console.aws.amazon.com/s3/buckets/` |
| `AWS_S3_BUCKET_URL_SUFFIX`    | S3 URL Suffix                               | `&prefix=%v/%v/&showversions=false`             |
| `AWS_S3_REGION`               | S3 Region                                   | `us-west-2`                                     |
| `AWS_ACCESS_KEY`              | AWS Access key with the required privileges |                                                 |
| `AWS_SECRET_KEY`              | AWS Secret key with the required privileges |                                                 |

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

For backup in Athena’s local Persistent Volume, `OBJECT_STORE_LOCATION_LOCAL` should be set to `local` (its default value). You can also set:

- `OBJECT_STORE_LOCATION_LOCAL` : The path where the Persistent Volume is mounted (Default: `/backup`)

## User events audit logs output

By default pushes events to `/namespace/user-events-audit/` directory in the S3 bucket configured.

### Sample output of user audit logs

```
{"opType": "Query", "createdAt": 1690610557857, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"admin@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 11}
{"opType": "Query", "createdAt": 1690552930350, "nameHints": ["ProjectReleaseByProjectIdAndStatus"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"statuses": "[Pending,Running,Retrying]"}, "requestPayload": "[\"_id\",\"releaseTag\",\"status\",\"attempt\",\"createdBy\",\"project{_id name}\"]", "latencyInMillis": 5}
{"opType": "Query", "createdAt": 1690610557967, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"admin@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 10}
```

## Backup API

### Triggering a backup

To trigger an on-demand backup, make a REST call like so:

```
curl --location --request POST 'https://{prophecy-url}/athena/api/v1/ondemandbackup' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
}'
```

You should get a response like:

```
{
    "code": 202,
    "message": "Request Accepted with timestamp 2023-02-02t17-03-15"
}
```

#### Backing up configuration only

The body of the backup request can be modified if you just wish to back up the configuration

```
{
  "onlyConfig": true
}
```

### On-demand backup status

On-demand backup is an asynchronous API. The timestamp of the backup is used to query for a specific status

#### Get Latest Backup details

```
curl --location --request GET 'https://{prophecy-url}/athena/api/v1/backup/latest' \
--header 'Authorization: {api-key}' \
--data-raw ''
```

Sample response:

```
{
    "backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t16-00-00/&showversions=false",
    "namespace": "app",
    "status": "Success",
    "timestamp": "2023-02-02t16-00-00"
}
```

## Restore APIs

Restore is an on-demand based overwrite of the whole configuration to reflect the state at which backup is taken.

:::error
This API should be used with extreme caution
:::

Note:

- If backup was taken in Athena’s local Persistent Volume, it needs to be copied to Athena’s Persistent Volume in the destination cluster before the restore operation can be performed.
- Restore operation always assumes a running destination Prophecy cluster where the data and the configuration of source cluster will be restored.

### Starting a Restore

```
curl --location --request POST 'https://{destination-prophecy-url}/athena/api/v1/ondemandrestore' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-22t10-00-00",
    "sourceNamespace": "{Source cluster controlplane namespace}",
    "svcs": {
        "gitserver": {
            "disable": false
        },
        "metagraph": {
            "disable": false
        },
        "postgres":  {
            "disable": false
        }
    }
}'
```

Sample response:

```
{
    "code": 202,
    "message": "Request Accepted"
}
```

In the above API:

- `timestamp` is the timestamp of the backup to use to perform the restore
- `sourceNamespace` is the namespace in which source cluster’s control plane was installed.
- `svcs`: This JSON object needs to be set only when you wish to skip restore of any particular service by setting `disabled` as `true`. Otherwise, you can skip `svcs` field entirely.

### Restore status

The Restore API is also an asynchronous API and can be used like such:

```
curl --location --request GET 'https://{destination-prophecy-url}/athena/api/v1/restorestatus' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-28t18-22-12"
}
```

Here, `timestamp` is the backup timestamp from which restore was performed.

Sample response of this API

```
{
    "backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix={your-namespace}/2022-11-28t18-22-12/&showversions=false",
    "namespace": {your-namespace},
    "status": "Success",
    "timestamp": "2022-11-28t18-22-12"
}
```

## Backup/Restore guidelines

1. Take backup regularly, preferably to cloud storage
2. Create a Disaster Recovery Kubernetes in a different region
3. Install Prophecy in the remote Kubernetes and keep it in standby. (i.e scale down all pods)
4. Disaster Recovery restore can be initiated from the remote region when the primary goes down
5. Once the restore is done the Disaster Recovery site is available for work to continue.

## Migrating to different cluster

If there is a requirement to migrate to a different Kubernetes cluster, you can leverage the backups for that:

1. Create a new Kubernetes cluster and install Prophecy based on Prophecy installation requirements
2. Take backup of source cluster (see above)
3. Restore the backup into new cluster
4. Check that everything works as expected
5. Plan a downtime for the source cluster, initiate a fresh backup and restore it to the new cluster
6. If the new cluster needs to use the old DNS, the DNS entry of old cluster should point to new cluster's `Loadbalancer` and the `Ingress` of the new cluster needs to be changed to use the old name. Contact support if you require assistance with these steps.
