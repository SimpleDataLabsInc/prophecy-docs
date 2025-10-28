---
title: Configure EMR job sizes
id: emr-job-sizes
description: Learn how to configure EMR job sizes for Spark fabrics
tags:
  - emr
  - configuration
  - fabric
---

Job sizes determine the compute resources allocated to your EMR clusters when running [EMR fabrics](docs/administration/fabrics/Spark-fabrics/emr.md). The job size configuration depends on the authentication method you use to connect to Amazon EMR. This guide walks you through creating and configuring job sizes for both static and SAML authentication methods.

## Add job size for static authentication

Static authentication uses keys stored directly in the fabric. To create a job size, follow these steps:

1. In the **Name** field, enter a descriptive identifier for your job size.
2. In the **Driver Cores (CPUs)** field, specify the number of CPU cores for the driver node.
3. In the **Driver Memory (in GB)** field, set the amount of memory in GB for the driver node.
4. In the **Executors** field, define the number of executor nodes to allocate.
5. In the **Executor Cores (CPUs)** field, specify the number of CPU cores per executor.
6. In the **Executor Memory (in GB)** field, set the amount of memory in GB for each executor.
7. In the **Spark Config (key-value pairs)** field, add any custom Spark configuration parameters as needed.
8. Click **Add** to save your job size configuration.

## Add job size for SAML authentication

SAML authentication uses Okta for secure access. To create a SAML-authenticated job size, follow these steps:

1. In the **Name** field, enter a descriptive identifier for your job size.
2. From the **Executor Size** dropdown menu, select a preset executor configuration.
3. Under **Executor Memory (GB)**, drag to set the executor memory for the job size.
4. Under **Executor Ephemeral Storage (GB)**, drag to set the ephemeral storage capacity.
5. In the **Executors** field, define an integer number of executors to allocate.
6. From the **Driver Size** dropdown menu, select a preset driver configuration.
7. Under **Driver Memory (GB)**, drag to set the driver memory allocation.
8. Under **Driver Ephemeral Storage (GB)**, drag to set the ephemeral storage for the driver node.
9. Click **Add** to save your job size configuration.

:::info
For more information about EMR worker configurations and sizing considerations, refer to the [Supported worker configurations](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/app-behavior.html#worker-configs) section of the AWS documentation.
:::
