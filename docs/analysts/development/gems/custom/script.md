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

Use the Script gem to embed a custom Python script in your pipeline.

## Parameters

| Parameter | Description                             |
| --------- | --------------------------------------- |
| Script    | Where you will write your Python script |

:::info
Number of inputs and outputs can be changed as needed by clicking the `+` button on the respective tab.
:::

## Where the script runs

The execution environment for the Script gem depends on the [SQL Warehouse Connection](docs/administration/fabrics/prophecy-fabrics/create-fabric.md#connections) configured in your Prophecy fabric.

| SQL warehouse provider | Execution environment |
| ---------------------- | --------------------- |
| Databricks             | Databricks Serverless |
| BigQuery               | Prophecy Automate     |

This ensures your Python logic runs in an environment optimized for your data platform.

## Troubleshooting

### Permission error with service principals

When using a fabric with [service principal authentication for Databricks](/databricks-oauth-authentication#use-cases-supported-by-databricks), you may encounter the following error:

```
Failed due to: Unable to get run status for job id: INTERNAL_ERROR
Cannot read the python file dbfs:/prophecy_tmp/prophecy_script_gem_[uuid].py
User does not have permission SELECT on ANY File
```

This occurs because the Script gem uploads Python scripts to DBFS for execution. Service principals require explicit permissions to read files from DBFS.

To solve this, contact your Databricks administrator for assistance. One workaround is to grant the service principal `SELECT` permission on `ANY FILE`:

```sql
GRANT SELECT ON ANY FILE TO <your_service_principal_uuid>;
```

:::caution
Granting `SELECT ON ANY FILE` provides broad read access to the file system. Consider the security implications for your environment before implementing this workaround.
:::
