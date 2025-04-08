---
title: Real-time collaboration
id: collaboration-modes
slug: /analysts/collaboration-modes
description: Work together on projects simultaneously
tags: []
---

Prophecy provides mechanisms to manage concurrent edits and prevent conflicts when multiple users work on the same project. The specific collaboration workflow is dictated by the project's Git mode, a setting established when the project is initially created.

## Collaboration workflows

The following project settings dictate a project's collaboration workflow.

| Git Storage Model | Git Account      | Audience                                                                                                                 |
| ----------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Simple            | Prophecy-managed | Users who want a simple versioning and publication workflow that operates entirely in Prophecy.                          |
| Simple            | External Git     | Users who want a simple versioning and publication workflow, who may also need to maintain a CI/CD workflow through Git. |
| Normal or Fork    | External Git     | Users who are comfortable with typical Git branching and merging strategies who can manage CI/CD in Git.                 |

:::info
All projects that utilize the **Prophecy for Analysts** [project creation template](/templates) operate with Simple, Prophecy-managed Git.
:::

## Simple/Prophecy-managed

When you create a project that uses [Simple](docs/analysts/version-control/version-control.md) Git, Prophecy restricts pipeline editing to a single user at a time.

Assume your colleague is actively editing a pipeline. What happens when you open and try to edit the same pipeline? You'll see that someone else is working on the pipeline. It will be read-only until the other user closes the pipeline. This way, you will not be able to produce conflicting edits.

At a more granular level, you cannot edit **any project component** while someone else is working on it. This includes functions, tests, schedules, etc.

### Override

If you are locked from editing a pipeline or other project component, you can override this and take control from the other user. If you know that your teammate is idle on the project, and you need to make changes, click **Override** to take editing control of the project.

## Simple/External Git

A project that uses Simple Git with an external Git repository will have an additional layer of complexity. Users may make changes to a project through the Prophecy interface, or in the Git repository.

Because users developing in Simple Git mode are automatically working on a generated `dev` branch in Git, remote changes to the project files in that `dev` branch will also be incorporated into the project. This means two things:

- **Synchronize changes.** You will have to pull (integrate) these changes from the external Git into your project in Prophecy.
- **Resolve conflicts.** These external changes may conflict with changes made in your project in Prophecy.

To learn how to resolve merge conflicts from the Prophecy interface, visit [Resolve conflicts](/engineers/resolve-git-conflicts).

## Normal/External Git

When you create a project that uses Normal Git mode, you will use a normal Git workflow for collaboration instead. In a normal Git workflow, you cannot make edits directly on the main branch of the project. Instead, each team member creates their own local development branch to work on new features or fixes independently without affecting others' work. The best practice is to give branches representative names so colleagues can quickly identify which changes are on which branch. To learn more about using the Git workflow, visit the [Git](/engineers/git) section of the documentation.
