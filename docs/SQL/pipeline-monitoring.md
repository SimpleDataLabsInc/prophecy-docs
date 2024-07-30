---
title: Pipeline Monitoring
id: pipeline-monitoring
description: Pipeline Monitoring
sidebar_position: 6
tags:
  - concept
  - monitoring
  - sql
---

Pipeline Monitoring (beta)
Pipeline Monitoring enables Spark Copilot users to monitor and debug their scheduled and interactive Pipeline runs through Prophecy. When enabled, Prophecy highlights the Gem that causes the failure at runtime. Users can view log stack traces in the Prophecy UI to debug runtime issues faster. This feature is available for all interactive runs through the Prophecy UI and any scheduled Job runs.

To enable this, update the Prophecy Library version in your Project dependencies to the latest (1.9.9), and add the Enable Pipeline monitoring flag in Pipeline Settings. Note that this feature is currently in beta.
