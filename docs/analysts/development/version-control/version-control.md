---
title: Versioning
id: version-control
description: Save and view project history
tags: []
---

When you build projects in Prophecy, you can save and publish your work with the click of a button. Prophecy will maintain a linear version history for you, from which you can audit changes, see collaborator activity, and revert to previous versions.

<!-- insert image of simple version control menu in top-right corner -->

## Save to draft

As you develop your project, Prophecy automatically preserves your changes. However, you should periodically save your changes in logical stages. To do so, you can click **Save to draft** on the project canvas.

| Parameters               | Description                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| Version description      | A short summery of the changes made since the last draft was saved.                                  |
| Changes since last saved | Lists all of the entities that have been added, removed, or modified since the last draft was saved. |

## Publish new version

If you want to publish the current state of your project, you can click **Publish** on the project canvas.

| Parameters                                 | Description                                                                                                              |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Version details                            | The version details are automatically populated by Copilot. You can edit the version number or description if necessary. |
| Changes that will be published             | A list of commits that will be published in the new version.                                                             |
| Select the fabric(s) to publish (Optional) | The fabric that will be used to build and deploy the project.                                                            |
| Select version                             | Publish an older version to deploy on a new fabric.                                                                      |

Each time you publish a project, you create a **new deployed project version**. This new version will update the projects used for:

- Scheduled pipeline runs
- Package Hub packages
- App Directory applications

## Show version history

The version history in Prophecy tracks different versions of your project that you save and publish. From here, you can view modifications in each version and, if you want, revert to previous versions. You can also view the version history within the [project metadata](getting-started/concepts/project#project-metadata).

## Git in the backend

Versioning in Prophecy is built on top of [Git](docs/ci-cd/git/git.md) in the backend. This means that your project is hosted on and tracked in a Git repository. If you want to connect your external Git provider for project hosting, you can do so. That way, you can also view your version history in Git and follow your organization's Git workflow requirements.

| Prophecy action | Git backend                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Save to draft   | <ul class="table-list"><li>Pull changes from the main branch (normally will not do anything)</li><li>Commit changes to a development branch</li></ul>                                                                    |
| Publish         | <ul class="table-list"><li>Merge changes into the main branch</li><li>Add a Git tag with the published version number</li><li>If you select a fabric to publish the version, this will also deploy the project</li></ul> |
