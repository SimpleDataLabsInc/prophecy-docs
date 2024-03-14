---
sidebar_position: 1
id: March_2024
description: Release notes for February
title: March 2024
tags:
  - release notes
  - changelog
  - march
---

## 3.3.2 (March 15,2024)

- Prophecy Python libs version: 1.8.9
- Prophecy Scala libs version: 7.1.79

### Features {#Features}

#### Automatic Code Regeneration for Jobs

With Prophecy 3.3.0, we facilitated automatic code regeneration whenever a user makes changes that could potentially impact the generated code for other Pipelines.
With this release, we have extended the same support to all Jobs too. So now, whenever user changes anything in Pipeline like Renaming, or any dependency is changed at Pipeline Level, the corresponding Jobs are auto-regenerated.

#### Support External Release tags

Prophecy now supports deploying externally created release tags through our UI. Moreover, users can pull in any release tag created directly in their Git provider, and use them as dependency in Prophecy Projects.

#### Low code SQL enhancements

We keep adding more Gems and features to our low code SQL offering to bring it to parity with DBT features and other SQL warehouse features.
With this release we have added support for DBT Snapshots. Users can now create Snapshots through Prophecy, and also use them as sources in their Models.
For snowflake users, we have added support for Snowflake pivot and unpivot Gems too.
