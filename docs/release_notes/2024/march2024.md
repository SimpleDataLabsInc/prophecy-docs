---
sidebar_position: 9
id: March_2024
description: Release notes for March
title: March 2024
tags:
  - release notes
  - changelog
  - march
---

## 3.3.2.\* (March 15, 2024)

- Prophecy Python libs version: 1.8.9
- Prophecy Scala libs version: 7.1.79

### Features {#Features}

#### Automatic Code Regeneration for Jobs

In Prophecy 3.3.0, we introduced automatic code regeneration whenever users make changes that could potentially impact the generated code for other Pipelines.
With this release, we’ve extended the same support to all jobs as well. Now, whenever users modify anything in a Pipeline such as renaming or changing dependencies at the Pipeline level the corresponding jobs are automatically regenerated.

#### Support for External Release Tags

Prophecy now allows deploying externally created release tags through our user interface. Users can pull in any release tag directly from their Git provider, deploy it or use it as a dependency in Prophecy projects.

#### Enhancements in Low-Code SQL

We continuously enhance our low-code SQL offering to match DBT features and other SQL warehouse capabilities. In this release, we’ve added support for DBT snapshots. Users can create snapshots through Prophecy and use them as sources in their models. Additionally, for Snowflake users, we’ve included support for Snowflake pivot and unpivot gems.
