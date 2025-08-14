---
title: Script gem
sidebar_label: Script
id: script
slug: /analysts/script
description: Leverage a Python script in your pipeline
tags:
  - gems
  - analyst
  - custom
---

Use the Script gem to embed custom Python script in your pipeline.

## Parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| Script    | Where you will write your Python script |

:::info
Number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab.
:::

## Where the script runs

The execution environment for the Script gem depends on the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/#connections) configured in your Prophecy fabric.

| SQL warehouse provider | Execution environment |
| ---------------------- | --------------------- |
| Databricks             | Databricks Serverless |
| BigQuery               | Prophecy Automate     |

This ensures your Python logic runs in an environment optimized for your data platform.
