---
title: Backup/Restore Configuration
id: backup-restore
description: Prophecy on-prem installations backup-restore being synced to object stores like S3, Azure Blob Storage etc.
sidebar_position: 2
tags:
  - backup
  - restore
  - disaster recovery
  - s3
  - azure blob
  - NFS
---

Prophecy provides a reliable backup mechanism for safeguarding all critical data utilized by the Prophecy app. Users can consistently back up essential data through their preferred object store, such as AWS S3, Azure Blob Storage, or local storage (which could be backed up by a NFS). This systematic backup process guarantees the accessibility of data for future restoration needs. Prophecy leverages the advanced capabilities of these object stores to seamlessly synchronize the backups, ensuring a robust and efficient data protection strategy.

:warning: Certain object store level configurations are shared with [audit event logs configurations here](./configure-audit-logs.md) as they both use a shared object store to store/backup their data.

## Usecase

- Prophecy, by design, does not store or own any customer data or code. Instead, it focuses on maintaining essential metadata related to various projects, user-created gems, users, and team information.
- Prophecy manages a persistence storage system, responsible for holding uncommitted changes, as well as other relevant data.
- To safeguard against potential disasters or unrecoverable failures, Prophecy offers a backup feature. This feature allows users to dump the database to remote cloud storage, ensuring the ability to restore it to a new cluster or the same cluster when necessary.
- The current backup support always performs full backups, providing comprehensive data protection.
  This backup functionality has been available since the release of Prophecy version 3.1.2.0.

:warning: Please note this doc is constantly updated with new features/options and hence it is better to always go with the latest version of Prophecy.

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of backup-restore required.

### Supported Environment Variables

| Environment variable name    | Description                                                                                                                                                                               | Default value |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `ENABLE_REGULAR_BACKUPS`     | Set to `true` to enable backups                                                                                                                                                           | `false`       |
| `OBJECT_STORE_LOCATION_TYPE` | Which provider to use for the object store. Supports `local`, `s3`, `azure-blob-storage`                                                                                                  | `local`       |
| `BACKUP_FREQUENCY`           | How frequently to purge old user events from the internal database. Defaults to daily at 00:00. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) | `0 0 0 * * *` |

### To enable backup

- Set `ENABLE_REGULAR_BACKUPS` to `true`

### Configuration for object store

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

For backup in Athena’s local Persistent Volume, `OBJECT_STORE_LOCATION_LOCAL` should be set to `local` (its default value). You can also set:

| Environment variable name     | Description                      | Default value |
| ----------------------------- | -------------------------------- | ------------- |
| `OBJECT_STORE_LOCATION_LOCAL` | Any PVC Mount point with storage | `/backup`     |

## Backup API

### Triggering a backup

By default when you set the `ENABLE_REGULAR_BACKUPS` to `true`, backups are taken automatically at the configured `BACKUP_FREQUENCY` CRON schedule. However, we you would like to manually trigger a backup, you may use the API below.

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
    "message": "Request Accepted with timestamp 2023-02-02t16-00-00"
}
```

The timestamp `2023-02-02t16-00-00` above would be the key used to trigger a restore in future.

### On-demand backup status

On-demand backup is an asynchronous API. There are two APIs which can be used to query the status of a current or previous backup.

#### Get Latest Backup details

This API returns the status current/last backup operation triggered. It doesn't expect any paramters.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/athena/api/v1/backup/latest' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json'
```

Sample response when there is no ongoing backup. It returns the last backup operation status.

```
{
    "backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t16-00-00/&showversions=false",
    "namespace": "app",
    "status": "Success",
    "timestamp": "2023-02-02t16-00-00"
}
```

Sample response when there is an ongoing backup. When all (almost) all pending DBs and pending Volumes move to completed list, then the backup completes.

```
{
  "status":"backup/restore operation ongoing with pending DBs: [airflow gogs exec metadata] and pending Volumes: [gitserver metagraph openidfederator] and completed DBs: [asp] and completed Volumes: [artifactory edweb]"
}
```

#### Get Backup Status

This API returns the status of the backup for which timestamp is passed. It expects one paramter as `timestamp`.
If there is no timestamp passed and there is an ongoing backup, the status for the same is returned.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/athena/api/v1/backup/status' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json'  \
--data-raw '{
"timestamp": "2023-02-02t16-00-00"
}'
```

Sample response when the required `timestamp` of backup is passed.

```
{
    "backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t16-00-00/&showversions=false",
    "namespace": "app",
    "status": "Success",
    "timestamp": "2023-02-02t16-00-00"
}
```

Sample response when there is an ongoing backup and when there is no `timestamp` passed. When all (almost) all pending DBs and pending Volumes move to completed list, then the backup completes.

```
{
  "status":"backup/restore operation ongoing with pending DBs: [airflow gogs exec metadata] and pending Volumes: [gitserver metagraph openidfederator] and completed DBs: [asp] and completed Volumes: [artifactory edweb]"
}
```

#### Get List of Available Backups

This API returns the list of available backups. It doesn't expect any parameters.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/athena/api/v1/backup/list' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json'
```

Sample response

```
{
	"backup-list": [
		{
			"backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t16-00-00/&showversions=false",
			"namespace": "app",
			"status": "Success",
			"timestamp": "2023-02-02t16-00-00"
		},
		{
			"backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t17-00-00/&showversions=false",
			"namespace": "app",
			"status": "Success",
			"timestamp": "2023-02-02t17-00-00"
		},
		{
			"backupurl": "https://s3.console.aws.amazon.com/s3/buckets/{your-backup-bucket}?region=us-west-2&prefix=app/2023-02-02t18-00-00/&showversions=false",
			"namespace": "app",
			"status": "Success",
			"timestamp": "2023-02-02t18-00-00"
		}
  ]
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

The below API is used to trigger a store opertion. It expects one parameter which is the `timestamp` of a successful backup.

```
curl --location --request POST 'https://{destination-prophecy-url}/athena/api/v1/ondemandrestore' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-22t10-00-00",
    "sourceNamespace": "{Source cluster controlplane namespace}"
}'
```

Sample API call with disable of gitserver restore. You may use similar options for `artifactory` / `edweb` / `metagraph` / `openidfederator`.

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
    }
}'
```

In the above API:

- `timestamp` is the timestamp of the backup to use to perform the restore
- `sourceNamespace` is the namespace in which source cluster’s control plane was installed.
- `svcs`: This JSON object needs to be set only when you wish to skip restore of any particular service by setting `disabled` as `true`. Otherwise, you can skip `svcs` field entirely.

Sample response

```
{
    "code": 202,
    "message": "Request Accepted"
}
```

### Restore status

This API returns the status of the restore operation for which timestamp is passed. It expects one paramter as `timestamp`.
If there is no timestamp passed and there is an ongoing restore, the status for the same is returned.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/athena/api/v1/restore/status' \
--header 'Authorization: {api-key}' \
--header 'Content-Type: application/json'  \
--data-raw '{
"timestamp": "2023-02-02t16-00-00"
}'
```

Sample response when the required `timestamp` of backup is passed.

```
{
	"backupurl": "/backup",
	"namespace": "app",
	"status": "error copying tar of gitserver data from backup location to data directory: exit status 1",
	"timestamp": "2023-02-02t16-00-00"
}

```

Sample response when there is an ongoing backup and when there is no `timestamp` passed. When all (almost) all pending DBs and pending Volumes move to completed list, then the backup completes.

```
{"status":"backup/restore operation ongoing with pending DBs: [airflow gogs exec metadata] and pending Volumes: [gitserver metagraph openidfederator] and completed DBs: [asp] and completed Volumes: [artifactory edweb]"}
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
