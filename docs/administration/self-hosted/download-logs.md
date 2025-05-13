---
title: Download logs
id: download-logs
description: Download Prophecy support logs
sidebar_position: 6
tags:
  - download
  - support logs
---

:::info
This feature requires Prophecy 3.4.1.0 or later.
:::

Prophecy lets you download logs to help debug issues with your Prophecy services. As an admin, you can download environment logs directly from Prophecy without needing access to your Prophecy cluster or assistance from Prophecy Support.

![Download logs](../../release_notes/2024/img/nov-download-logs.png)

This streamlines the process and reduces delays in troubleshooting by enabling you to quickly share logs and environment details with Zendesk for further analysis.

### Download logs features

You can use the Download Logs feature to capture logs using the Services and time selectors.

- All services are selected by default.
- The download supports one hour of logs from the Start Time.

The captured logs include all relevant Prophecy configurations, such as the following items:

- Kubernetes cluster configuration, including resource quotas and node configuration
- Cluster custom resources
- Config maps and files
- Resource consumption logs

:::note

Sensitive information, such as customer preview data, credentials, tokens, or passwords, is scrubbed or redacted from the download bundle.

:::

## Enable Prophecy Downloads logs

Before you can download logs, you must enable it in your [self-hosted](../prophecy-deployment) deployment.

See the following requirements for enabling the Prophecy logs:

- Prophecy collects the logs of all pods and stores it in the Athena Pod.
- Each pod uses an additional 500 MB ephemeral storage for temporary storage.
- Athena requires additional storage of around 100 GB to store one week of logs.
- A new container image fluentbit is required for this feature.

To enable Minio in Athena and provide it a volume, follow these steps:

1. Add env variables to Athena STS:

```
  - name: MINIO_ENDPOINT
    value: athena:9000
  - name: ENABLE_FLUENTBIT_SIDECARS
    value: "true"
  - name: RUN_ATHENA_MINIO
    value: "true"
```

2. Add volume to Athena STS:

```
  volumeClaimTemplates:
  ...
  - apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      creationTimestamp: null
      name: minio-storage
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 10Gi
      volumeMode: Filesystem
```

3. Add volume mount to Athena:

```
  volumeMounts:
  ...
  - mountPath: /minio/data
    name: minio-storage
```

4. Add the Minio port to Athena SVC:

```
  ports:
  ...
  - name: minio
    port: 9000
    protocol: TCP
    targetPort: 9000
```

## Navigate to the Download logs UI

To download logs in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the **three dots** at the bottom left corner and select the **Settings** icon from the submenu.
1. Navigate to the **Admin** main tab.
1. Within the Admin main tab, access the **Logs** sub tab.
1. Set the **Services** and **Start Date/Time**, and then click **Download**

After several seconds, the file will download via your browser. The download generates a compressed file containing logs, suitable for sharing with a Prophecy support engineer.
