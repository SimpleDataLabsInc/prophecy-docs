---
title: Bring your own Spark (BYOS)
sidebar_label: Bring your own Spark
id: bring-your-own-spark
description: Use your own Spark services in your Prophecy deployment
sidebar_position: 4
tags:
  - spark
  - self-hosted
---

Prophecy services utilize various Spark libraries, and Prophecy consistently updates these libraries with the latest available versions. However, some organizations prefer to bring their own commercially-supported Spark distribution to their self-hosted Prophecy deployment.

:::info
Bring your own Spark (BYOS) only applies to the various Spark libraries used for **services in the Prophecy deployment**. The Spark you use in a fabric for pipeline execution is separate from BYOS.
:::

## Prerequisites

Review the following prerequisites for BYOS.

- BYOS only applies to self-hosted deployments.

- The following Spark versions have been validated for BYOS:

  - Apache Spark: 3.5.x (recommended: 3.5.1)

  - Databricks Spark: 3.5.x (recommended: 3.5.0)

## Set up BYOS

### Download Spark libraries

1. Download Spark libraries from your preferred source.
1. Extract the archive on your local machine.
1. Locate the `jars` folder.
1. Upload the files into the `pkg-manager` pod.

   ```
   kubectl -n <namespace> cp jars/* <pkg-manager-pod-name>:/prophecy/sparklibs --retries=-1
   ```

### Enable environment settings

1. Ensure the package manager is enabled in your environment.

1. Make sure the following image is available in your container registry: `prophecyinit:1.0.0`

### Update Athena environment variables

Update Athena with the following environment variables:

```yaml
- name: ENABLE_SLIM_IMAGES
  value: "true"
- name: IMAGE_REGISTRY
  value: <your-image-registry>
```

### Restart services

Once the Spark libraries have been uploaded, restart the necessary pods:

```
app / metagraph / edweb / sparkedge / transpiler / edwed / execution
```

This will allow all services to initialize with the custom Spark libraries.
