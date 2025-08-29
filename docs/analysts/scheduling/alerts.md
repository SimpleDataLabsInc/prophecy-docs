---
title: Email alerts
id: schedule-email-alerts
slug: /analysts/schedule-email-alerts
description: Report the outcome of a scheduled pipeline run
tags:
  - schedule
  - alert
  - email
---

The built-in Prophecy scheduler supports email alerts for pipeline schedules. You can configure alerts to notify you or others when a scheduled pipeline run starts, succeeds, or fails.

## Parameters

When you enable **Alerts on the full job** in a schedule, configure the alert with the following parameters.

| Parameter         | Description                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email             | One or more email addresses that Prophecy will sent the alert to.                                                                                                                                                                                                   |
| Trigger alerts on | When the alert will run. You can select multiple triggers.<br/><ul><li>**Start**: Send an email when the pipeline run begins</li><li>**Success**: Send an email if the pipeline run succeeds</li><li>**Failure**: Send an email if the pipeline run fails</li></ul> |
