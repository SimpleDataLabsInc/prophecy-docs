---
title: Versioning
id: version-control
description: Save and view project history
tags: []
---

When you build projects in Prophecy, you can save and publish your work with the click of a button. Prophecy will maintain a linear version history for you, from which you can audit changes, see collaborator activity, and revert to previous versions.

## Save version history

As you develop your project, Prophecy automatically preserves your changes. However, you should periodically save your changes in logical stages.

## Publish projects

Each time you publish a project, you are creating a new deployed project version. Publication versions are tracked in Prophecy and scheduled pipeline runs will utilize the latest published version of your project.

## Show version history

The version history in Prophecy tracks different versions of your project that you save and publish. From here, you can view modifications in each version and, if you want, revert to previous versions.

## Git in the backend

Versioning in Prophecy is built on top of [Git](docs/ci-cd/git/git.md) in the backend. This means that your project is hosted on and tracked in a Git repository. If you want to connect your external Git provider for project hosting, you can do so. That way, you can also view your version history in Git and follow your organization's Git workflow requirements.

| Prophecy action         | Git backend                                     |
| ----------------------- | ----------------------------------------------- |
| Save to version history | Commit changes to main branch                   |
| Publish                 | Add a Git tag with the published version number |
