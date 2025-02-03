---
title: Prophecy versions support
id: versions_support
description: Prophecy versions support
sidebar_position: 1
tags: [compatibility, matrix, version, chart, library, plib, plibs]
---

This page describes the Prophecy versioning system, version types, and version lifecycles.

## Release version system

The following table shows details of the different Prophecy version types.

| Version type                      | Example       | Frequency (approx.) | End-of-support   |
| --------------------------------- | ------------- | ------------------- | ---------------- |
| Extended Maintenance (EM) release | `v3.4.1.0 EM` | Every four months   | After one year   |
| Major                             | `v3.4.0.0`    | Every four months   | After six months |
| Minor                             | `v3.3.11.0`   | Every three weeks   | After six months |
| Patch                             | `v3.3.11.7`   | When needed         | After six months |

## Extended Maintenance release

Extended Maintenance (EM) releases provide you with a long-term support Prophecy version, along with the following benefits:

- Upgraded third party libraries for robust security posture
- Full performance and scale testing to check resource guidance
- Direct upgrade path from a previous EM release to the next one
- One year of technical support and hotfixes for critical issues

You can expect a new Extended Maintenance release two to six weeks after each Major release.

### Required resources

Starting with `v3.4.1.0 EM`, SQL Sandbox is enabled, so every SQL pipeline session will spin up an additional pod with the following configuration:

- CPU: 500m
- Memory: 512Mi

After upgrading to 3.4.1, you must enable SQL Sandbox Config in the UI by navigating to the **Sandbox Config** tab in the Config sub tab of the Admin Settings.

`"sqlSandboxPoolSize"` must be set to a minimum of `2`. This parameter determines the number of pods that are kept in a ready state. You will need additional SQL Sandbox resources for each simultaneous user session.

## Prophecy support lifecycles

The following table describes the support stages for Prophecy versions. Prophecy supports GA versions for six months, unless the version is an Extended Maintenance (EM) release, which Prophecy supports for one year. For information on supported Prophecy versions, see [Version Chart](/docs/release_notes/version_chart/version_chart.md).

Workloads on unsupported Prophecy versions may continue to run, but Prophecy doesn't provide support or fixes.

### Prophecy version lifecycle

| Phase                                              | Description                                                                                        |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| GA, full support for Extended Maintenance releases | Critical stability and security fixes are backported only for EM releases.                         |
| End of support                                     | If a version is unsupported, then workloads running on these versions receive no Prophecy support. |
| End of Life                                        | Prophecy reserves the right to completely remove a release version at any time after support ends. |

## Prophecy version

You can use the Software Version API to retrieve your current Prophecy version number.

### Software Version API

Example:

```
curl -s 'https://<prophecy-env-url>/athena/api/v1/cluster' | jq -r .current_version.controlplane_version
```

Response:

```
3.4.1.0
```
