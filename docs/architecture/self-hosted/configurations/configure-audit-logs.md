---
title: Audit Events Configuration
id: configure-audit-logs
description: Track and log user actions for auditing purposes
sidebar_position: 2
tags:
  - audit events
  - audit logs
  - disaster recovery
  - s3
  - azure blob
  - NFS
  - GCS
---

Prophecy provides strong support for storing audit events (logs) in cloud object stores, including AWS S3, Azure Blob Storage, GCP Cloud Storage, or local persistent volumes (PV). Customize the audit events configuration to:

- Track and log every user action.
- Enable retrieval of user activity records from persistent storage or an object store for auditing.
- Store user actions in designated database tables for structured tracking.
- Periodically transfer recorded data to an object store for efficient long-term storage and management.

:::info

Events storage depends on [object store configurations](./configure-object-store.md). Make sure to configure these before proceeding below.

:::

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of user events audit logs required.

### Edit Audit Configs

To edit audit configurations in Prophecy, follow these steps:

1. Log in to Prophecy as an admin user.
1. Navigate to the **Admin** tab of the Prophecy **Settings** page.
1. Within the Admin main tab, select the **Config** subtab.
1. Finally, click on the **Audit Config** subtab to configure the audit settings.

### JSON format

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options.

```
{
  "disableUeventsGC": false,
  "enableUserEvents": false,
  "ueventsGCSchedule": "0 0 1 * * *",
  "ueventsSchedule": "0 0 */1 * * *"
}
```

### Supported Configuration Variables

| Configuration variable name | Description                                                                                                                                                                                                                                                                                                    | Default value   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `disableUeventsGC`          | Garbage collection of user events from local DB is enabled by default once the events have been pushed to upstream object store. Set this to `true` to disable this garbage collection to retain this data locally as well. Note that setting this to `true` could potentially result in a very large DB size. | `false`         |
| `enableUserEvents`          | Set to `true` to enable user event audit logs                                                                                                                                                                                                                                                                  | `false`         |
| `ueventsSchedule`           | How frequently to push user events to object store. Defaults to every one hour. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format)                                                                                                                                      | `0 0 */1 * * *` |
| `ueventsGCSchedule`         | How frequently to purge old user events from the internal database. Defaults to daily 1 am. Uses [6-digit CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format)                                                                                                                          | `0 0 1 * * *`   |

### To enable user events audit logs

- Set `enableUserEvents` to `true`
- Set `ueventsSchedule` to the [CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) string for how frequently you'd like user events pushed to the object store.
- Set `ueventsGCSchedule` to the [CRON](https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format) string for how frequently you'd like old user events removed from the database.
  PVC Mount point with storage | `/backup` |

## User events audit logs output

By default pushes events to `/namespace/audit/` directory in the S3 bucket configured.

### Sample output of user audit logs

```
{"opType": "Query", "createdAt": 1690610557857, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"adminuser@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 11}
{"opType": "Query", "createdAt": 1690552930350, "nameHints": ["ProjectReleaseByProjectIdAndStatus"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"statuses": "[Pending,Running,Retrying]"}, "requestPayload": "[\"_id\",\"releaseTag\",\"status\",\"attempt\",\"createdBy\",\"project{_id name}\"]", "latencyInMillis": 5}
{"opType": "Query", "createdAt": 1690610557967, "nameHints": ["User"], "userEmail": "prophecy-system@prophecy.io", "customerName": "prophecy.io", "responseCode": 200, "requestParams": {"email": "\"adminuser@prophecy.io\""}, "requestPayload": "[\"_id\",\"name\",\"firstName\",\"lastName\",\"email\",\"created\",\"createdBy\",\"aspects(aspect:[Info]){AspectName AspectValue}\"]", "latencyInMillis": 10}
```
