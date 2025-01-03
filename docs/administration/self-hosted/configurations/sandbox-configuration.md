---
title: Sandbox Configuration
id: sandbox-configuration
description: Prophecy installations allows configuration of various sandbox configuration
sidebar_position: 7
tags:
  - sandbox
  - configuration
  - Scala
  - Python
  - reserve pods
---

In the traditional Prophecy deployment model, a single microservice, known as the editor web, handled all user requests using a threading approach. Each user request corresponded to a browser tab (session) used to perform operations on pipelines within the integrated development environment (IDE). However, this model faced limitations in isolating sessions and scaling the microservice vertically to handle increasing user requests. These limitations led to significant resource consumption in the editor web microservice, reducing its ability to manage requests effectively.

## What is sandboxing?

To address these challenges, Prophecy version 3.2 introduced a new approach to isolation and load management called sandboxing. This feature provisions a pair of microservices for each user request: the Gem Plugin and Schema Analysis, collectively referred to as a sandbox. This allows users to run their pipelines independently in isolated environments.

For example, if three users each open two browser tabs in the IDE, six pods are provisioned for both the Gem Plugin and Schema Analysis. This ensures that users can run their pipelines without interference, maintaining complete isolation.

## How to configure sandboxes

Newer versions of Prophecy are defaulted to use sandboxing (`ENABLE_SANDBOXING: true`) as the default way to deploy Prophecy services. To configure object store settings in the Prophecy UI, follow these steps:

1. Log in to Prophecy as an admin user.
1. Navigate to the **Admin** tab of the Prophecy **Settings** page.
1. Within the Admin main tab, select the **Config** subtab.
1. Finally, click on the **Sandbox Config** subtab to configure the settings.

## Configuration options

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Make sure to maintain a JSON format mentioned below while configuring the different options.

```
{
  "enableSandboxSharing": false,
  "PythonSandbox": {
    "GemPluginPod": {
      "cpu": {
        "limit": "2",
        "request": "0.5"
      },
      "memory": {
        "limit": "2.5Gi",
        "request": "2.5Gi"
      }
    },
    "schemaAnalysisPod": {
      "cpu": {
        "limit": "2",
        "request": "0.5"
      },
      "memory": {
        "limit": "2.5Gi",
        "request": "2.5Gi"
      }
    }
  },
  "PythonSandboxPoolSize": 2,
  "sandboxImageRegistry": "gcr.io/prophecy-share",
  "sandboxImageTag": "<current-prophecy-version>",
  "sandboxMaxTotalPods": 100,
  "sandboxMonitoringInterval": 2,
  "sandboxPoolHealthCheckInterval": 100,
  "sandboxStalePodsCleanupInterval": 4,
  "ScalaSandbox": {
    "GemPluginPod": {
      "cpu": {
        "limit": "2",
        "request": "0.5"
      },
      "memory": {
        "limit": "2.5Gi",
        "request": "2.5Gi"
      }
    },
    "schemaAnalysisPod": {
      "cpu": {
        "limit": "2",
        "request": "0.5"
      },
      "memory": {
        "limit": "2.5Gi",
        "request": "2.5Gi"
      }
    }
  },
  "ScalaSandboxPoolSize": 3
}
```

### Configuration Variables

These are the generic configurations which are required to be set irrespective of the provider.

| Configuration variable name                      | Description                                                                                                                                                  | Default value                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ |
| `enableSandboxSharing`                           | is an advanced feature that let's users share a sandbox between multiple sessions                                                                            | `false`                              |
| `PythonSandbox.GemPluginPod.cpu.limit`           | Configures the CPU limit of the Python Gem plugin pod                                                                                                        | `2`                                  |
| `PythonSandbox.GemPluginPod.cpu.request`         | Configures the CPU request of the Python Gem plugin pod                                                                                                      | `0.5`                                |
| `PythonSandbox.GemPluginPod.memory.limit`        | Configures the Memory limit of the Python Gem plugin pod                                                                                                     | `2.5Gi`                              |
| `PythonSandbox.GemPluginPod.memory.request`      | Configures the Memory request of the Python Gem plugin pod                                                                                                   | `2.5Gi`                              |
| `PythonSandbox.schemaAnalysisPod.cpu.limit`      | Configures the CPU limit of the Python schema analysis pod                                                                                                   | `2`                                  |
| `PythonSandbox.schemaAnalysisPod.cpu.request`    | Configures the CPU request of the Python schema analysis pod                                                                                                 | `0.5`                                |
| `PythonSandbox.schemaAnalysisPod.memory.limit`   | Configures the Memory limit of the Python schema analysis pod                                                                                                | `2.5Gi`                              |
| `PythonSandbox.schemaAnalysisPod.memory.request` | Configures the Memory request of the Python schema analysis pod                                                                                              | `2.5Gi`                              |
| `PythonSandboxPoolSize`                          | number of concurrent Python sessions/tabs startup (reserved) allowed                                                                                         | `2`                                  |
| `sandboxImageRegistry`                           | image registry to be used for pulling sandbox images from                                                                                                    | `gcr.io/prophecy-share`              |
| `sandboxImageTag`                                | image tag to be used for pulling sandbox images. Defaulted to current Prophecy version                                                                       | `<current-prophecy-version-running>` |
| `sandboxMaxTotalPods`                            | maximum number of Scala + Python (Gem plugin + schema analysis) pods allowed. This is used to restrict the number of pods spun up in case of surge of users. | `false`                              |
| `sandboxMonitoringInterval`                      | Monitoring interval used to spin up new sandbox pods as per session requests in seconds (s).                                                                 | `2`                                  |
| `sandboxPoolHealthCheckInterval`                 | Pool health check interval used to check the health of each pod in seconds (s).                                                                              | `100`                                |
| `sandboxStalePodsCleanupInterval`                | Clean up period used to clean up unused pods in seconds (s).                                                                                                 | `4`                                  |
| `ScalaSandbox.GemPluginPod.cpu.limit`            | Configures the CPU limit of the Scala Gem plugin pod                                                                                                         | `2`                                  |
| `ScalaSandbox.GemPluginPod.cpu.request`          | Configures the CPU request of the Scala Gem plugin pod                                                                                                       | `0.5`                                |
| `ScalaSandbox.GemPluginPod.memory.limit`         | Configures the Memory limit of the Scala Gem plugin pod                                                                                                      | `2.5Gi`                              |
| `ScalaSandbox.GemPluginPod.memory.request`       | Configures the Memory request of the Scala Gem plugin pod                                                                                                    | `2.5Gi`                              |
| `ScalaSandbox.schemaAnalysisPod.cpu.limit`       | Configures the CPU limit of the Scala schema analysis pod                                                                                                    | `2`                                  |
| `ScalaSandbox.schemaAnalysisPod.cpu.request`     | Configures the CPU request of the Scala schema analysis pod                                                                                                  | `0.5`                                |
| `ScalaSandbox.schemaAnalysisPod.memory.limit`    | Configures the Memory limit of the Scala schema analysis pod                                                                                                 | `2.5Gi`                              |
| `ScalaSandbox.schemaAnalysisPod.memory.request`  | Configures the Memory request of the Scala schema analysis pod                                                                                               | `2.5Gi`                              |
| `ScalaSandboxPoolSize`                           | number of concurrent Scala sessions/tabs startup (reserved) allowed                                                                                          | `3`                                  |
