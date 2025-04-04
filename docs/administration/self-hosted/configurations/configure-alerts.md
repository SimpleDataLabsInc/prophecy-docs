---
title: Alerts Configuration
id: configure-alerts
description: Prophecy alerts configuration
sidebar_position: 1
tags:
  - alerts
  - alerting
  - monitoring
---

One way to monitor resource usage in Prophecy-managed microservices is to configure alerts. Some configurations include:

- Alerting when resource utilization approaches defined thresholds.
- Email setup for alerts (**strongly recommended**).
- Critical service suspension in the event of resource overflows.

Resource monitoring is enabled by default, providing insights into CPU, memory, and disk usage for critical services. This feature reports current usage levels alongside defined limits, ensuring admins have a clear view of resource consumption. This feature can be disabled if not necessary.

## Requirements

Alerting is supported for Prophecy version 3.4.1 and above.

## Alerting features

Alerts are of two levels:

- **WARNING**: Nearing configured limits
- **CRITICAL**: At or above configured limits

Different thresholds are tracked:

| Parameter    | Alerts generated on        | Suggested action                                                                                                |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| CPU_USAGE    | **CRITICAL**               | Evaluate whether the CPU usage persists or is temporary. Increase CPU provisioned if high usage persists.       |
| DISK_USAGE   | **WARNING** & **CRITICAL** | Take preventative steps upon **WARNING** alert to increase PVC storage capacity.                                |
| FILE_COUNT   | **WARNING** & **CRITICAL** | Take preventative steps upon **WARNING** alert to increase PVC storage capacity.                                |
| MEMORY_USAGE | **CRITICAL**               | Evaluate whether the memory usage persists or is temporary. Increase memory provisioned if high usage persists. |

To prevent data corruption, certain critical services, such as Metagraph and Gitserver, are automatically suspended when disk usage limits are reached. This feature is enabled by default but can be disabled if needed.

By default, alerts are displayed as notification banners in the Prophecy UI, which direct users to a comprehensive view on the monitoring page for detailed insights.

We also support email-based alerts, which can be configured by providing the necessary SMTP details. On resolution of alerts, email notifications are sent.

## Configuration

There are certain environment variables that need to be configured in the Prophecy admin UI.

### Edit Alert Configs

To edit the alert configurations in Prophecy, follow these steps:

1. Log in to Prophecy as an admin user.
1. Navigate to the **Admin** tab of the Prophecy **Settings** page.
1. Within the Admin main tab, select the **Config** subtab.
1. Click on the **Alert Config** subtab to configure the alert settings.

### JSON format

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options. Most of the values below are defaults or sample values.

```
{
  "alertConfigs": [
    {
      "maxAllowedOccurrenceCount": 20,
      "metricsType": "CPU_USAGE",
      "thresholdValue": 0.95
    },
    {
      "maxAllowedOccurrenceCount": 3,
      "metricsType": "DISK_USAGE",
      "thresholdValue": 0.95
    },
    {
      "maxAllowedOccurrenceCount": 3,
      "metricsType": "FILE_COUNT",
      "thresholdValue": 0.95
    },
    {
      "maxAllowedOccurrenceCount": 20,
      "metricsType": "MEMORY_USAGE",
      "thresholdValue": 0.8
    }
  ],
  "enableAlerts": true,
  "enableServiceSuspend": true,
  "notificationEmailIDs": [
    "customer1@test.com",
    "customer2@test.com"
  ],
  "reAlertIntervalinMinutes": 120,
  "relativeWarningThreshold": 0.05,
  "smtp": {
    "password": "********",
    "senderEmailID": "sender@test.com",
    "serverHostname": "smtp.test.com",
    "serverPort": 587
  },
  "suspensionWindowinMinutes": 60
}
```

### Supported configuration variables

| Configuration variable name              | Description                                                                                                                                                                                                                  | Default value                                                               |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `alertConfigs.maxAllowedOccurrenceCount` | Number of consecutive occurrences to hit before triggering an alert (warning/critical). Every interval defaults to 30s.                                                                                                      | `20 (or) 10mins` for CPU/Memory, `3 (or) 1.5mins` for Disk Usage/File Count |
| `alertConfigs.metricsType`               | The metric type tracked                                                                                                                                                                                                      | CPU_USAGE, DISK_USAGE, FILE_COUNT, MEMORY_USAGE                             |
| `alertConfigs.thresholdValue`            | The threshold value beyond which alert is triggered. This is a fractional value between 0 and 1                                                                                                                              | `0.8` for MEMORY_USAGE and `0.95` for others                                |
| `enableAlerts`                           | Enabling of alerting system                                                                                                                                                                                                  | `true`                                                                      |
| `notificationEmailIDs`                   | List of emails to notify in case of hitting alerts, this list is comma separated                                                                                                                                             | `[]`                                                                        |
| `reAlertIntervalinMinutes`               | How often should triggered alerts resend the email in minutes                                                                                                                                                                | `120`                                                                       |
| `relativeWarningThreshold`               | It is the (configured threshold - relativeWarningThreshold) value after which `WARNING` is generated before hitting `CRITICAL` state. This is a fractional value between 0 and 1. Defaulted to 5% less than threshold value. | `0.05`                                                                      |
| `smtp.password`                          | The password of the SMTP server credential. This is an encrypted value. Setting this to `NULL` will disable email alerting.                                                                                                  | `NULL`                                                                      |
| `smtp.senderEmailID`                     | The send email ID at the SMTP server. Setting this to `NULL` will disable SMTP email alerting.                                                                                                                               | `NULL`                                                                      |
| `smtp.serverHostname`                    | The SMTP hostname of the server.                                                                                                                                                                                             | `smtp.gmail.com`                                                            |
| `smtp.serverPort`                        | The SMTP port of the server credential. Setting this to `0` will disable SMTP email alerting.                                                                                                                                | `587`                                                                       |
| `suspensionWindowinMinutes`              | Time after which suspension of critical services is to be done in minutes                                                                                                                                                    | `60`                                                                        |

## Alerting guidelines

- The default configured values satisfy most use cases.
- If you set `enableAlerts` to false, this will disable the alerting system. Monitoring will still work and be visible from the Admin Monitoring subtab.
