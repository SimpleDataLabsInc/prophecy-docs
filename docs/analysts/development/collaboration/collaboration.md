---
title: Collaboration
id: collaboration
description: Work together on projects simultaneously
tags: []
---

When multiple users are working on the same project, you'll want to prevent conflicting changes from being written simultaneously. Prophecy helps by restricting pipeline editing to a single user at a time.

## Single-player mode

When you create a project that uses [Simple versioning](docs/analysts/development/version-control/version-control.md), you'll be able to edit the project in single-player mode. Let's review what this means.

Assume your colleague is actively editing a pipeline. What happens when you open and try to edit the same pipeline? You'll see that someone else is working on the pipeline. It will be read-only until the other user closes the pipeline. This way, you will not be able to produce conflicting edits.

:::info
All projects that utilize the **Prophecy for Analysts** [project creation template](docs/administration/teams-users/project-creation-template.md) operate with Simple versioning and single-player mode.
:::

## Advanced Git

When you create a project that uses [Advanced Git](docs/ci-cd/git/git.md) mode, you will use Git for collaboration instead.

For example, you cannot make edits directly on the main branch of the project. Instead, each team member creates their own development branch to work on new features or fixes independently without affecting others' work. The best practice is to give branches representative names so colleagues can quickly identify which changes are on which branch. Prophecy does not explicitly limit the number of collaborators on a pipeline in this case.
