---
title: Audit Events Configuration
id: configure-audit-logs
description: Prophecy installations audit events (logs) being synced to object stores like S3, Azure Blob Storage, GCP Cloud Storage etc.
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

Prophecy offers robust support for storing audit events (logs) on two of the industry's leading cloud object stores: AWS S3, Azure Blob Storage, GCP Cloud Storage or even local persistent volume (PV). Leveraging the capabilities of these object stores, Prophecy seamlessly synchronizes and persistently stores audit events. This not only ensures the secure retention of crucial data but also facilitates streamlined tracking and in-depth analysis of user interactions and activities for enhanced operational insights.

:::note

Certain [object store level configurations](./configure-object-store.md) are shared with [backup restore configurations](../upgrade-backup-restore.md). Make sure to configure the [object store level configurations](./configure-object-store.md) before proceeding below.

:::

## Use case

- The overarching objective is to comprehensively track and log every user-level action.
- All user actions will be meticulously recorded and stored, enabling easy retrieval from a persistent storage or object store, particularly when an audit is required.
- To achieve this, each user action will be meticulously tracked and written into designated database tables.
- The data accumulated in these database tables will be periodically transferred and pushed to an object store for efficient storage and management.

## Configuration

There are certain environment variables that need to be configured in Athena based on the kind of user events audit logs required.

### Navigate to the Audit config UI

To configure object store settings in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the `three dots` at the bottom left corner and select the `settings icon` from the submenu.
1. Navigate to the `Admin` main tab.
1. Within the Admin main tab, access the `Config` sub tab.
1. Finally, click on the `auditConfig` sub tab to configure the audit settings.

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
