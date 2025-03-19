---
title: Versioning
id: version-control
description: Save and view project history
tags: []
---

When you build projects in Prophecy, you can save and publish your work with the click of a button. Prophecy creates a linear version history per project where you can audit changes, see collaborator activity, and revert to previous versions.

<!-- insert image of simple version control menu in top-right corner -->

## Save to draft

As you develop your project, Prophecy automatically preserves your changes. In addition, we recommend periodically saving your changes as drafts. Click **Save to draft** on the project canvas to do so.

| Parameters               | Description                                                                                 |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| Version description      | Summarizes the changes made since the last saved version.                                   |
| Changes since last saved | Lists all the entities that anyone adds, removes, or modifies since the last saved version. |

## Publish new version

When you publish a project, the new version becomes available for:

- [Scheduled pipeline runs](docs/analysts/scheduling.md) (depending on the fabric)
- [Package Hub](docs/analysts/extensibility/extensibility.md#package-hub) packages
- [App Directory](docs/analysts/business-apps/business-apps.md) applications

To learn more, visit our page on [project publication](/analysts/version-control/publication).

## Show version history

The version history in Prophecy tracks different versions of your project that you save and publish. From the version history, you can view modifications in each version and revert to previous versions. You can access the version history from the project editor or within the [project metadata](getting-started/concepts/project#project-metadata).

## Restore previous version

To restore a previous version:

1. Open the project version history.
1. Expand a version.
1. Click on a specific saved version.
1. Review the state of the project for this version and verify that you wish to restore it.
1. Click **Restore this version**.

## Git in the backend

Versioning in Prophecy is built on [Git](docs/ci-cd/git/git.md) in the backend. This means that Prophecy stores your project in a managed or external repository. If you connect to an external Git provider, you can view how each action in Prophecy is reflected in Git.

| Prophecy action          | Git backend                                                                                                                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save to draft            | <ul class="table-list"><li>Pulls changes from the remote development branch</li><li>Pulls changes from the main branch</li><li>Commits changes to a development branch</li></ul> |
| Publish                  | <ul class="table-list"><li>Merges changes into the main branch</li><li>Adds a Git tag with the published version number</li></ul>                                                |
| Restore previous version | <ul class="table-list"><li>Runs `git reset --soft`</li><li>Commits the changes</li><li>Pushes the changes</li></ul>                                                              |

:::note
If there are changes to the project on an external remote Git repository, you will be prompted in Prophecy to save your changes and pull the remote changes. If there is a merge conflict, you will be taken to the [merge resolution dialogue](docs/ci-cd/git/git-resolve.md). **This situation is uncommon.**
:::
