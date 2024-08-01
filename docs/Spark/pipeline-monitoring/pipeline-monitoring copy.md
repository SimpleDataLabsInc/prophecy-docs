---
title: Enable Pipeline Monitoring
id: pipeline-monitoring-enable
description: Enable Pipeline Monitoring
sidebar_position: 2
tags:
  - how-to
  - monitoring
  - spark
---

To enable this, update the Prophecy Library version in your Project dependencies to the latest (1.9.9), and add the Enable Pipeline monitoring flag in Pipeline Settings.

Update Prophecy Libs Version
Pipeline Monitoring requires the Project to be on Prophecy Python libs version 1.9.9 or above. Update the Prophecy Python libs dependencies. ss. if not, Update it. See /release_notes/version_chart

![Configure_Reformat](img/configure_reformat.png)

Enable Pipeline Monitoring flag
By default, for existing Pipeline the flag remains off. You can turn it on in Pipeline settings. For new Pipelines, the flag is on by default. This is to prevent unexpected changes in the generated Pipeline code. ... > Pipeline Settings > ss
In Code view you'll see instrument annotation that adds all details for monitoring your Pipeline, ss
