---
title: BigQuery Fabric API
id: big-query-fabric
description: Orchestrate creating and managing BigQuery fabrics
tags: []
---

The BigQuery Orchestration API allows teams to create and manage a Prophecy fabric that uses BigQuery as its execution environment. This API is intended for automated environment provisioning, CI/CD pipelines, and large-scale workspace setup, where fabrics need to be created or updated programmatically rather than through the UI.

The API is organized into three categories:

**Fabric**
Fabric endpoints manage the fabric as a whole. They allow clients to create a new BigQuery fabric, retrieve its configuration, update fabric-level properties, or delete it. The fabric serves as the top-level object; all connection details and secrets are tied to its ID.

**Connection**
Connection endpoints manage the non-secret configuration required for BigQuery orchestration. These operations cover project ID, dataset, region, artifact settings, and other public configuration fields. Users can modify connection settings without recreating the entire fabric.

**Secret**
Secret endpoints manage the credentials used to authenticate with BigQuery. These endpoints support uploading new service-account keys, rotating credentials, and removing secret material when the fabric is deleted or replaced. Secret values are never returned by the API; they can only be submitted or rotated.

Together, these categories represent the full lifecycle of a BigQuery orchestration fabric: creating the fabric, configuring its connection behavior, and supplying the credentials it needs to execute workflows securely.
