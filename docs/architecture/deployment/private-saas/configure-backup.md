---
title: Backup/Restore Configuration
id: backup-restore
description: Prophecy installations backup-restore being synced to object stores like S3, Azure Blob Storage etc.
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

:::note

Certain [object store level configurations](./configure-object-store.md) are shared with [audit event logs configurations here](./configure-audit-logs.md). Make sure to configure the [object store level configurations](./configure-object-store.md) before proceeding below.

:::

## Use case

- Prophecy, by design, does not store or own any customer data or code. Instead, it focuses on maintaining essential metadata related to various projects, user-created gems, users, and team information.
- Prophecy manages a persistence storage system, responsible for holding uncommitted changes, as well as other relevant data.
- To safeguard against potential disasters or unrecoverable failures, Prophecy offers a backup feature. This feature allows users to dump the database to remote cloud storage, ensuring the ability to restore it to a new cluster or the same cluster when necessary.
- The current backup support always performs full backups, providing comprehensive data protection.
  This backup functionality has been available since the release of Prophecy version 3.1.2.0.

:::tip

Note this doc is constantly updated with new features/options and hence it is better to always go with the latest version of Prophecy.

:::

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of backup-restore required.

### Navigating to the Backup config UI

To configure object store settings in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the `three dots` at the bottom left corner and select the `settings icon` from the submenu.
1. Navigate to the `Admin` main tab.
1. Within the Admin main tab, access the `Config` sub tab.
1. Finally, click on the `backupConfig` sub tab to configure the backup settings.

### JSON format

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options.

```
{
  "backupFrequency": "0 0 0 * * *",
  "backupRetentionCount": "30",
  "enableRegularBackups": false,
}
```

### Supported Configuration Variables

| Configuration variable name | Description                                                                                                                                                                               | Default value |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `backupFrequency`           | How frequently to purge old user events from the internal database. Defaults to daily at 00:00. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) | `0 0 0 * * *` |
| `backupRetentionCount`      | No. of last `N` backups to retain.                                                                                                                                                        | `30`          |
| `enableRegularBackups`      | Set to `true` to enable backups                                                                                                                                                           | `false`       |

## How to Backup

There are two ways to perform backup of data. Choose either one of the below options.

1. Set `enableRegularBackups` to `true` - To enable perodic backup of data according to CRON provided or on every athena pod restart (safety feature).
1. Trigger the backup through the backup API below.

### Trigger Backup API

:::note

To trigger a backup/restore manually you would require a API key. [Follow the API Key generation document to generate the same](./generate-api-key) before proceeding below.

:::

#### Triggering a backup

By default when you set the `ENABLE_REGULAR_BACKUPS` to `true`, backups are taken automatically at the configured `BACKUP_FREQUENCY` CRON schedule. However, we you would like to manually trigger a backup, you may use the API below.

To trigger an on-demand backup, make a REST call like so:

```
curl --location --request POST 'https://{prophecy-url}/api/backup' \
--header 'Cookie: prophecy-token={api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{}'
```

You should get a response like:

```
{
    "code": 202,
    "message": "Request Accepted with timestamp 2023-02-02t16-00-00"
}
```

The timestamp `2023-02-02t16-00-00` above would be the key used to trigger a restore in future.

On-demand backup is an asynchronous API. There are two APIs which can be used to query the status of a current or previous backup.

#### Get Latest Backup details

This API returns the status current/last backup operation triggered. It doesn't expect any paramters.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/api/backup/latest' \
--header 'Cookie: prophecy-token={api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{}'
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
curl --location --request GET 'https://{prophecy-url}/api/backup/status' \
--header 'Cookie: prophecy-token={api-key}' \
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
curl --location --request GET 'https://{prophecy-url}/api/backup/list' \
--header 'Cookie: prophecy-token={api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{}'
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

#### Delete Backup Entry

This API attempts the delete the backup data (local and upstream) and also the metadata (database entries) associated with it. Note that in case of `enableRegularBackups` set to `true`, backups are older than `backupRetentionCount` in reverse order are garbage collected automatically.

Sample API call

```
curl --location --request GET 'https://{prophecy-url}/api/backup/delete' \
--header 'Cookie: prophecy-token={api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
"timestamp": "2023-02-02t16-00-00"
}'
```

Sample response

```
{"success":true,"message":"Deleted backup entry successfully"}
```

## How to Restore

Restore is an on-demand based overwrite of the whole configuration to reflect the state at which backup is taken.

:::danger
This API should be used with extreme caution as triggering this will lead to loss of current state/data.
:::

Note the following:

- If backup was taken in Athena’s local Persistent Volume, it needs to be copied to Athena’s Persistent Volume in the destination cluster before the restore operation can be performed.
- Restore operation always assumes a running destination Prophecy cluster where the data and the configuration of source cluster will be restored.

### Starting a Restore

:::note

To trigger a backup/restore manually you would require a API key. [Follow the API Key generation document to generate the same](./generate-api-key) before proceeding below.

:::

The below API is used to trigger a store opertion. It expects one parameter which is the `timestamp` of a successful backup.

```
curl --location --request POST 'https://{prophecy-url}/api/restore' \
--header 'Cookie: prophecy-token={api-key}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-22t10-00-00",
    "sourceNamespace": "{Source cluster controlplane namespace}"
}'
```

Sample API call with disable of gitserver restore. You may use similar options for `artifactory` / `edweb` / `metagraph` / `openidfederator`.

```
curl --location --request POST 'https://{prophecy-url}/api/restore' \
--header 'Cookie: prophecy-token={api-key}' \
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
curl --location --request GET 'https://{prophecy-url}/api/restore/status' \
--header 'Cookie: prophecy-token={api-key}' \
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
