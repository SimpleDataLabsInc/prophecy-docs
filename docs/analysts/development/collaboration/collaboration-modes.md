---
title: Real-time collaboration
id: collaboration-modes
description: Work together on projects simultaneously
tags: []
---

When multiple users are working on the same project, it's important to prevent conflicting changes from being made. There are two ways that Prophecy handles multiple users working on the same project at the same time.

The way you collaborate on a project depends on the Git mode of the project. This is configured during project creation.

| Git Storage Model | Git Account      | Audience                                                                                                                 |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Simple            | Prophecy-managed | Users who want a simple versioning and publication workflow that operates entirely in Prophecy.                          |
| Simple            | External Git     | Users who want a simple versioning and publication workflow, who may also need to maintain a CI/CD workflow through Git. |
| Normal            | External Git     | Users who are comfortable with typical Git branching and merging strategies who can manage CI/CD in Git.                 |

:::info
All projects that utilize the **Prophecy for Analysts** [project creation template](docs/administration/teams-users/project-creation-template.md) operate with Simple, Prophecy-managed Git.
:::

## Simple

When you create a project that uses [Simple](docs/analysts/version-control/version-control.md) Git, Prophecy restricts pipeline editing to a single user at a time.

Assume your colleague is actively editing a pipeline. What happens when you open and try to edit the same pipeline? You'll see that someone else is working on the pipeline. It will be read-only until the other user closes the pipeline. This way, you will not be able to produce conflicting edits.

SCREENSHOT

At a more granular level, you cannot make edits to **any project component** while someone else is working on it. This includes functions, tests, schedules, etc.

### Override

If you are locked from editing a pipeline or other project component, you can take override this and take control from the other user. If you know that your teammate is idle on the project, and you need to make changes, click **Override** to take editing control of the project.

SCREENSHOT

## Simple/External Git

A project that uses Simple Git with an external Git repository will have an additional layer of complexity. Users may make changes to a project through the Prophecy interface, or in the Git repository.

Because users developing in Simple Git mode are automatically working on a generated `dev` branch in Git, remote changes to the project files in that `dev` branch will also be incorporated into the project. This means two things:

- **Synchronize changes.** You will have to pull (integrate) these changes from the external Git into your project in Prophecy.

  SCREENSHOT

- **Resolve conflicts.** These external changes may conflict with changes made in your project in Prophecy.

  SCREENSHOT

To learn how to resolve merge conflicts from the Prophecy interface, visit [Resolve conflicts](docs/ci-cd/git/git-resolve.md).

## Normal/External Git

When you create a project that uses Normal Git mode, you will use a normal Git workflow for collaboration instead. In a normal Git workflow, you cannot make edits directly on the main branch of the project. Instead, each team member creates their own local development branch to work on new features or fixes independently without affecting others' work. The best practice is to give branches representative names so colleagues can quickly identify which changes are on which branch. To learn more about using the Git workflow, visit the [Git](docs/ci-cd/git/git.md) section of the documentation.
