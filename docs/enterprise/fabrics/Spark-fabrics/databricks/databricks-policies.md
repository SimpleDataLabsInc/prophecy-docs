---
title: Databricks policies
id: databricks-policies
description: Review the impact of Databricks policies in Prophecy
tags:
  - databricks
---

Review the following guidelines regarding [compute policies in Databricks](https://docs.databricks.com/aws/en/admin/clusters/policy-families) and their compatibility with Prophecy functionality.

:::info
Databricks policies differ from cluster access modes. View [UC cluster compatibility](docs/enterprise/fabrics/Spark-fabrics/databricks/UCShared.md) for more information on standard vs. dedicated cluster capabilities.
:::

## Overview

The following are default policies in a Databricks workspace:

- Personal Compute: Allows users to easily create a single-node compute resource with minimal configuration options.
- Shared Compute: Designed for multiple users to collaborate on workloads using a single cluster.
- Power User Compute: Intended for single users who need more resources than a personal compute environment provides.
- Job Compute: Allows users to create a general-purpose default compute for jobs.
- Unrestricted: If a user has unrestricted cluster creation permissions, then they will also have access to the Unrestricted policy.

## Power User Compute

Assigning the Power User policy to clusters in Databricks provide the following advantages:

- You are able to install JARs on the cluster.
- When you assign the power user policy to a cluster, multiple users can share the cluster permissions, resources, and object access. If one team member leaves, the team retains access, and work continuity is preserved.

The team that you create in Prophecy with access to this cluster via a fabric should mirror your team in Databricks that has access to this cluster. When you assign the cluster a policy in Databricks, Prophecy automatically inherits the policy restrictions using the credentials used to connect to Databricks.
