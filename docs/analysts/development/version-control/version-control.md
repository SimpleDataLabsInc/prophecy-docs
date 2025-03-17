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

When you publish a project, the new version is used for:

- Scheduled pipeline runs (depending on the fabric)
- Package Hub packages
- App Directory applications

If you want to publish the current state of your project, click **Publish** on the project canvas.

| Parameters                      | Description                                                                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Version details                 | Copilot automatically populates the version details, but you can edit the version number or description if necessary.                                                                            |
| Changes that will be published  | Prophecy lists the saved drafts that include changes to be reflected in the new published version.                                                                                               |
| Select the fabric(s) to publish | Prophecy creates a new project deployment for each fabric. If a deployment already exists, it is updated. To see your deployments, review the [Monitoring](docs/analysts/observability.md) page. |

Prophecy lets you publish different versions of a project to different fabrics. This might be useful if you want `Version 1` published on a development fabric and `Version 2` published on a production fabric. (You cannot publish two different versions to the same fabric.)

### Request to publish

Prophecy lets multiple users work on the same project simultaneously. If you try to publish the project while multiple people are working on it, you can **request to publish** the project. This way, all collaborators can approve the action.

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

| Prophecy action          | Git backend                                                                                                                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save to draft            | <ul class="table-list"><li>Pulls changes from the remote development branch</li><li>Pulls changes from the main branch</li><li>Commits changes to a development branch</li></ul>                                                                   |
| Publish                  | <ul class="table-list"><li>Merges changes into the main branch</li><li>Adds a Git tag with the published version number</li><li>If you select a fabric to publish the version, this will also deploy all of the pipelines in the project</li></ul> |
| Restore previous version | <ul class="table-list"><li>Runs `git reset --soft`</li><li>Commits the changes</li><li>Pushes the changes</li></ul>                                                                                                                                |

:::note
If there are changes to the project on an external remote Git repository, you will be prompted in Prophecy to save your changes and pull the remote changes. If there is a merge conflict, you will be taken to the [merge resolution dialogue](docs/ci-cd/git/git-resolve.md). **This situation is uncommon.**
:::
