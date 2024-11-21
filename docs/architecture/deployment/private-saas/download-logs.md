---
title: Download Logs
id: download-logs
description: Download Prophecy support logs
sidebar_position: 3
tags:
  - download
  - support logs
---

As an admin user, you can download your environment logs from Prophecy without needing access to your Prophecy cluster or the assistance of Prophecy Support. This reduces the delay in debugging any issues with your Prophecy services.

## Use case

- The overarching objective is to debug what is going on with your Prophecy services.
- To achieve this, we've enabled admins to be able to download Prophecy logs and environment information so that they can upload them to Zendesk.

### Download Logs features

You can use the Download Logs feature to capture logs using the Services and time selectors.

- All services are selected by default.
- The download supports one hour of logs from the Start Time.

The captured logs include all relevant Prophecy configurations, such as the following items:

- Kubernetes cluster configuration
  - Resource quotas
  - Node configuration
- Cluster custom resources
- Config maps and files
- Resource consumption logs

:::note

Sensitive information, such as customer preview data, credentials, tokens, or passwords, is scrubbed or redacted from the download bundle.

:::

### Navigating to the Download Logs UI

To download logs in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the **three dots** at the bottom left corner and select the **Settings** icon from the submenu.
1. Navigate to the **Admin** main tab.
1. Within the Admin main tab, access the **Logs** sub tab.
1. Set the **Services** and **Start Date/Time**, and then click **Download**

After several seconds, the file will download via your browser. The download generates a compressed file containing logs, suitable for sharing with a Prophecy support engineer.
