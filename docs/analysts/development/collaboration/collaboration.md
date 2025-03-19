---
title: Collaboration
id: collaboration
description: Work together on projects simultaneously
tags: []
---

When multiple users are working on the same project, it's important to prevent conflicting changes from being made. There are two ways that Prophecy handles multiple users working on the same project at the same time.

- **Simple**: Restricts pipeline editing to a single user at a time.
- **Advanced**: Leverages Git best practices like branching and merging for project collaboration.

The collaboration mode will depend on the Git mode (Simple or Normal) you select during project creation.

## Simple

When you create a project that uses [Simple versioning](docs/analysts/version-control/version-control.md), Prophecy restricts pipeline editing to a single user at a time.

Assume your colleague is actively editing a pipeline. What happens when you open and try to edit the same pipeline? You'll see that someone else is working on the pipeline. It will be read-only until the other user closes the pipeline. This way, you will not be able to produce conflicting edits.

:::info
All projects that utilize the **Prophecy for Analysts** [project creation template](docs/administration/teams-users/project-creation-template.md) operate with Simple versioning and single-player mode.
:::

## Advanced

When you create a project that uses [Advanced Git](docs/ci-cd/git/git.md) mode, you will use Git for collaboration instead.

For example, you cannot make edits directly on the main branch of the project. Instead, each team member creates their own local development branch to work on new features or fixes independently without affecting others' work. The best practice is to give branches representative names so colleagues can quickly identify which changes are on which branch.
