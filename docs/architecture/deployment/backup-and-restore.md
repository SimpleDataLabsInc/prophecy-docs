---
title: "Backup And Restore"
id: backup-and-restore
description: Backup and Restore
sidebar_position: 4
tags:
  - bakcup
  - restore
---

## Overview

Prophecy provides robust support for both periodic and on-demand backup and restore operations for various components, including **Postgres Volumes**, **Metagraph Volumes**, **Gitserver Volumes**, and the configuration setup stored in the form of an **Environment configmap**.
This is supported in **Athena Service**. Backups can be stored either in an S3 bucket or in Athena's Persistent Volume.

### Configuration

There are certain environment variables that need to be configured in Athena based on the kind of backup needed-

#### Periodic Backups

To enable periodic backups, please set below environment variables in Athena.

- **ENABLE_REGULAR_BACKUPS**: Set this flag as true to enable periodic backups. (Default: false)
- **BACKUP_FREQUENCY**: Set the cron expression at which you want the backup to run. Example: "0 0 _/4 _ \* _" (Default: "0 0 _/2 \* \* \*")

#### S3 Backup Configuration

For the backup location as S3, set the below environment variables.

- **BACKUP_LOCATION_TYPE**: s3 (Default: local)
- **AWS_S3_BUCKET_NAME**: Name of S3 bucket where the backup will be stored (Default: athena-ondemand-backup)
- **AWS_S3_REGION**: Region of S3 bucket
- **AWS_ACCESS_KEY**: Access key of the AWS
- **AWS_SECRET_KEY**: Secret key to access AWS

#### Local Persistent Volume Backup Configuration

For keep the backup in local, set below environment variables.

- **BACKUP_LOCATION_TYPE**: local (Default: local)
- **LOCAL_BACKUP_LOCATION**: Path where Persistent Volume of Athena is mounted (Default: /backup)

#### AWS RDS Configuration\*\* (if using AWS RDS)

If AWS RDS is setup instead of local postgres during installation, Athena will rely on AWS RDS snapshotting APIs for the backup. For that, environment variables that need to be set are

- **AWS_RDS_IDENTIFIER**: Name of the RDS instance in AWS
- **AWS_RDS_REGION**: Region in which RDS instance is deployed

#### Backup Retention Period

Backup also has a retention period in days. Backups older than that retention period are cleaned up regularly.

- **BACKUP_RETENTION_PERIOD**: Number of days backup needs to be retained for. (Default: 90)

### Backup APIs

Here are some APIs which you can use to trigger an on demand backup, get details of any previous backup or list all backups.

#### On Demand Backup

Use below Curl request to trigger an On demand Backup.

````mdx-code-block
```Curl
curl --location --request POST 'https://<prophecy-url>/athena/api/v1/ondemandbackup' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
}'
```
````

Body of this API can be modified if backup is to be taken of just configuration of the setup as shown below.

````mdx-code-block
```Curl
curl --location --request POST 'https://<prophecy-url>/athena/api/v1/ondemandbackup' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
 "onlyConfig": true
}'
```
````

This is an asynchronous API. Please find the sample response below.

````mdx-code-block
```Json
{
"code": 202,
"message": "Request Accepted with timestamp 2023-02-02t17-03-15"
}
```
````

The response includes a timestamp, which can be used to query the backup status.

#### Get Latest Backup Details

````mdx-code-block
```Curl
curl --location --request GET 'https://<prophecy-url>/athena/api/v1/backup/latest' \
--header 'Authorization: <api-key>' \
--data-raw ''
```
````

Sample Response of this API:

````mdx-code-block
```Json
{
"backupurl": "https://s3.console.aws.amazon.com/s3/buckets/<your-backup-bucket>?region=us-west-2&prefix=app/2023-02-02t16-00-00/&showversions=false",
"namespace": "app",
"status": "Success",
"timestamp": "2023-02-02t16-00-00"
}

```
````

#### Get Status of Given Backup

This API is useful in getting status of backup given the timestamp to know whether the backup failed or succeeded.

````mdx-code-block
```curl
curl --location --request GET 'https://<prophecy-url>/athena/api/v1/backupstatus' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
"timestamp": "2023-01-27t16-42-41"
}'
```
````

Sample response of this API is similar to the one for Get latest Backup Api.

#### List All Backups

````mdx-code-block
```curl
curl --location --request GET 'https://app.prophecy.io/athena/api/v1/backuplist' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw ''
```
````

### Restore

Athena provides an API for restoring operations, offering the flexibility to restore data for all or specific services from a designated backup.
The restoration process includes upgrading the destination cluster to the version aligned with the source cluster at the time of the backup.
Additionally, post-restoration health checks are conducted.
Post restore, a Disaster Recovery report is also generated. This report offers a concise overview of the restoration procedure, detailing the time taken for the restore.

:::note
Please note that the Disaster Recovery report feature is currently only available for SaaS setups. For SaaS, Athena also supports executing a Jenkins test suite to verify the health of the setup after the restoration process.
:::

#### On-demand Restore

````mdx-code-block
```curl

curl --location --request POST 'https://<destination-prophecy-url>/athena/api/v1/ondemandrestore' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-22t10-00-00",
    "sourceNamespace": "<Source cluster controlplane namespace>",
    "enableReportGeneration": false,
    "enableJenkinsTestRun": false,
    "disableUpgrade": false,
    "disablePreRestoreChecks": false,
    "disablePostRestoreChecks": false,
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

````

In above API,

- **timestamp** is the backup timestamp from which restore is to be performed
- **sourceNamespace** is the namespace in which source cluster’s controlplane was installed.
- **enableReportGeneration**: This is to generate the Disaster Recovery report and needs to be kept false for non-SaaS setups
- **enableJenkinsTestRun**: This is to run Jenkins test suite post restore to check the health of the restored setup. This needs to be kept false for non-SaaS setups
- **disableUpgrade**: Set this to true if you are only interested in restoring the data and don’t want to upgrade the setup to the source cluster’s version.
- **disablePreRestoreChecks**: Set this to true if you are only interesting in restoring the data and don’t want to perform any cluster health checks prior to restore.
- **disablePostRestoreChecks**: Set this to true if you don’t want to perform any cluster health checks post restore.
- **svcs**: This json object needs to be set only when you wish to skip restore of any particular service by making disabled as true for it. Otherwise, you can skip svcs field entirely.

Restore API is also an asynchronous API whose sample response looks like below and status of restore can be checked by making a get call for its status.

````mdx-code-block
```json
{
    "code": 202,
    "message": "Request Accepted"
}

```
````

#### Get Status of Restore

````mdx-code-block

```curl
curl --location --request GET 'https://<destination-prophecy-url>/athena/api/v1/restorestatus' \
--header 'Authorization: <api-key>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp": "2022-11-28t18-22-12"
}'

```
````

Here, timestamp is the backup timestamp from which restore was performed. Please find below the sample response.

````mdx-code-block
```json
{
    "backupurl": "https://s3.console.aws.amazon.com/s3/buckets/<your-backup-bucket>?region=us-west-2&prefix=<your-namespace>/2022-11-28t18-22-12/&showversions=false",
    "namespace": "<your-namespace>",
    "status": "Success",
    "timestamp": "2022-11-28t18-22-12"
}

```
````

:::caution
Please Ensure that backups taken in Athena's local Persistent Volume are copied to the destination cluster's Persistent Volume before performing a restore operation. The restore operation assumes a running destination Prophecy cluster where data and configuration will be restored.
:::
