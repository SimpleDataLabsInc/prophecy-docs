---
title: Sandbox Configuration
id: sandbox-config
description: Prophecy installations allows configuration of various sandbox configuration
sidebar_position: 4
tags:
  - sandbox
  - configuration
  - Scala
  - Python
  - reserve pods
---

In the traditional Prophecy deployment model, a single microservice known as the editor web was tasked with managing all user requests using a threading approach. Each user request corresponds to a browser tab (session) utilized by individuals to execute operations on their pipelines within our integrated development environment (IDE). However, this model encountered constraints in isolation and vertically scaling the micro-service to accommodate the growing volume of user requests. As a result, this engendered significant resource consumption within the editor web microservice, ultimately impairing its ability to efficiently handle requests.

## What is sandboxing

To tackle the aforementioned challenge, in Prophecy version 3.2, we introduced a novel approach to isolation and load manaGement known as sandboxing. This feature enables the provisioning of a pair of microservices for each user request: the Gem Plugin and Schema Analysis together termed as a single sandbox. This empowers users to execute their pipelines independently within dedicated environments. For instance, in a scenario where there are three users each with two browser tabs open in the IDE, this results in the provisioning of six pods each for the Gem Plugin and Schema Analysis. Consequently, users can seamlessly run their pipelines without interference in complete isolation.

## How to configure sandboxes

Newer versions of Prophecy are defaulted to use sandboxing (`ENABLE_SANDBOXING: true`) as the default way to deploy Prophecy services. To configure object store settings in the Prophecy UI, follow these steps:

1. Log in to the Prophecy UI as an admin user.
1. Click on the `three dots` at the bottom left corner and select the `settings icon` from the submenu.
1. Navigate to the `Admin` main tab.
1. Within the Admin main tab, access the `Config` sub tab.
1. Finally, click on the `sandboxConfig` sub tab to configure the settings.

## Configuration options

Below are JSON configurations within the Prophecy UI that need to be enabled to support this functionality. You will have to configure only the options which you require. Please make sure to maintain a JSON format mentioned below while configuring the different options.

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
