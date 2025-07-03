---
title: Set up schedule
id: schedule-setup
slug: /analysts/schedule-setup
description: Automate a pipeline with the Prophecy scheduler
tags:
  - schedule
  - automate
---

Use Prophecy's built-in scheduler to automate pipeline runs based on time or file triggers. Each schedule is specific to a single pipeline.

:::info
Schedules can only run on [Prophecy fabrics](/administration/fabrics/prophecy-fabrics/).
:::

## Configure a schedule

To configure a schedule for a pipeline:

1. Open a pipeline in the project editor.
1. Expand the **...** menu in the project header.
1. Click **Schedule**.
1. Configure the [trigger](/analysts/triggers) for the schedule.
1. Optionally, set up an [email alert](/analysts/schedule-email-alerts) in your schedule.
1. Click the **Enabled** toggle to enable the schedule.
1. Click **Schedule** to save the schedule.

## Activate the schedule

Enabling a schedule does **not** automatically activate it. To activate your schedule, [publish the project](/analysts/project-publication). When you publish a project, Prophecy deploys all enabled schedules to your selected fabrics. In other words, your scheduled pipelines will begin running in the fabrics you selected.

Any time you make changes to a schedule (including enabling, disabling, or editing the configuration), you must republish the project for those changes to take effect.

## What’s next

Once you have set up your first schedule:

- Monitor automated pipeline runs in the [Observability](/analysts/monitoring) interface.
- Set up [email alerts](/analysts/schedule-email-alerts) to stay informed about your scheduled pipeline runs.
- Learn more about different [trigger types](/analysts/triggers).
