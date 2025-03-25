---
title: Versioning
id: version-control
description: Save and view project history
tags: []
---

When you build projects in Prophecy, you can save and publish your work with the click of a button. Prophecy creates a linear version history per project where you can audit changes, see collaborator activity, and revert to previous versions. Keep reading to learn about the different types of version control in Prophecy, the stages of the visual workflow, and the relationship to [Git](#powered-by-git).

<!-- insert image of simple version control menu in top-right corner -->

## Version control options

When you create a SQL project in Prophecy, you will have the option to select the Git storage model for the project. There are a few models to choose from.

| Git Storage Model | Description                                                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Simple            | Provides an intuitive visual workflow for project drafting and publication. Users all work on the same `dev` branch in the Git backend.  |
| Normal (no forks) | Enables the typical Git workflow aligned with DevOps best practices. Users all work in the same repository on different branches.        |
| Fork per user     | (External Git only) Enables the typical Git workflow aligned with DevOps best practices. Users work on their own copy of the repository. |

The following sections demonstrate the **visual workflow** for projects that use the Simple Git storage model. To view the workflow for normal Git, visit the section on [Git](docs/ci-cd/git/git.md) in the documentation.

:::note
The way you use Git will also influence how you collaborate in Prophecy. To learn more, visit [Real-time collaboration](docs/analysts/development/collaboration/collaboration-modes.md).
:::

## Versioning workflow

### Save to draft

As you develop your project, Prophecy automatically preserves your changes. In addition, we recommend periodically saving your changes as drafts. Click **Save to draft** on the project canvas to do so.

| Parameters               | Description                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| Version description      | Summarizes the changes made since the last saved version.                                   |
| Changes since last saved | Lists all the entities that anyone adds, removes, or modifies since the last saved version. |

### Publish new version

When you publish a project, the new version becomes available for:

- [Scheduled pipeline runs](docs/analysts/scheduling.md) (depending on the fabric)
- [Package Hub](docs/analysts/extensibility/extensibility.md#package-hub) packages
- [App Directory](docs/analysts/business-apps/business-apps.md) applications

To learn more, visit our page on [project publication](/analysts/version-control/publication).

### Show version history

The version history in Prophecy tracks different versions of your project that you save and publish. From the version history, you can view modifications in each version and revert to previous versions. You can access the version history from the project editor or within the [project metadata](docs/getting-started/concepts/project.md#metadata).

### Restore previous version

To restore a previous version:

1. Open the project version history.
1. Expand a version.
1. Click on a specific saved version.
1. Review the state of the project for this version and verify that you wish to restore it.
1. Click **Restore this version**.

## Powered by Git

As you move through the versioning workflow in your project, Prophecy actually maps these actions to Git processes in the backend. In other words, actions like saving, publishing, and restoring changes trigger Git commands. This is possible because all Prophecy projects are hosted on Git, regardless of the project's Git storage model (simple or normal).

The following table explains what each versioning action does in Git. If you connect to an external Git provider (rather than use Prophecy-managed Git), you can view how each action in is reflected in Git as you work on your project.

| Prophecy action          | Git backend                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save to draft            | <ul class="table-list"><li>Pulls changes from the remote development branch</li><li>Pulls changes from the main branch</li><li>Commits changes to a development branch</li></ul> |
| Publish                  | <ul class="table-list"><li>Merges changes into the main branch</li><li>Adds a Git tag with the published version number</li></ul>                                                |
| Restore previous version | <ul class="table-list"><li>Runs `git reset --soft`</li><li>Commits the changes</li><li>Pushes the changes</li></ul>                                                              |
