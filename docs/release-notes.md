---
sidebar_position: 11
id: release-notes
description: prophecy monthly release notes
tags: [release notes, changelog]
title: Release Notes
sidebar_label: Release Notes
---

### Release 2.6.0.0 February 2022

The following new features, behavior changes, and updates (enhancements, fixes, etc.) have been introduced this month. If you have any questions about these additions, please [contact Prophecy](mailto:contact.us@Prophecy.io).

#### Important

Each release may include updates that require the web interface to be refreshed.

As a general practice, to ensure these updates do not impact your usage, we recommend refreshing the web interface after each Prophecy release has been deployed.

## New Features

### Streaming Data Support: Read data from Kafka and utilize streaming capabilities to provide low data latency

With this release, Prophecy is pleased to announce the support for streaming
data Pipeline. This feature allows users to design and build streaming
Pipelines for data freshness. For example, a user can utilize a Kafka source to
continuously consume data from a Kafka topic and transform the data in near
real-time powered by Spark Structured Streaming.

### GCP Support: Prophecy can be deployed on GCP via Databricks Partner Connect

With this release, Prophecy is pleased to announce the support for integrating with Prophecy through Databricks Partner Connect on GCP. For example, when Databricks is deployed and running on GCP and integration between Prophecy and Databricks is needed, the user can integrate with Prophecy through Databricks Partner Connect.

### Data Fabric ACL

With this release, Prophecy is pleased to announce the support for Data Fabric authorization. This feature allows administrators within a team to assign proper access to its team members. For example, only a team’s administrator can perform tasks such as creation and deletion of Data Fabrics.

### Wide data set optimization

With this release, Prophecy is pleased to announce the optimization for wide data sets. The new optimization speeds up wide table processing by adding pre-optimization phases. For example, for data with 200+ columns, processing time is optimized from double digit seconds to milliseconds.

### Team-level execution metrics

With this release, Prophecy is pleased to announce team-level execution metrics. An administrator will have the option to create the following tables at the time of team creation. The administrator will grant access to the tables accordingly to their team members.

- Pipeline Metrics Table
- Component (Dataset) Metrics Table
- Interim Table

### Interims for Unity Catalog Workspaces

With this release, Prophecy is pleased to announce the ability to see interims in Unity Catalog workspaces and standalone Gems. Execution Metrics are now available in shared mode for non-Unity Catalog workspaces.

### Spark configurations in Livy Fabric

With this release, Prophecy is pleased to announce the ability to add Spark configurations in Livy Fabric. Users are able to provide Spark configurations when creating a Livy session. For example, a user can set Spark.dynamicAllocation.enabled=false through Prophecy.

Prophecy's low-code designer provides a visual drag-and-drop canvas to develop data Pipelines, where business logic can be written as simple SQL expressions. We believe it is superior in every way to developing custom scripts:

## Gem Updates

### Add Union By Name and Union to SetOperation Gem (Transform)

With this release, a user can utilize **Union By Name** and **Union** in SetOperation Gem. This new expressing will allow union by column names when column positions are different in the datasets.
