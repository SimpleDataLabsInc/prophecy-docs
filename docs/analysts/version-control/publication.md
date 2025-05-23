---
title: Project publication
sidebar_label: Publication
id: publication
slug: /analysts/project-publication
description: Publish your projects to create new deployments
tags: []
---

Project publication is an essential step in the project lifecycle. Each published version marks the project as production-ready and enables its use across different systems.

## Release and deployment

When you publish a project, two key processes occur: release and deployment.

First, the project is released, creating a new version and preparing it for distribution. During this process, Prophecy assigns a version label to the project and makes the new version available in packages and Prophecy Apps.

Next, the project is deployed, configuring it for execution in different environments. The deployment process builds the project in each target environment ([fabric](docs/getting-started/concepts/fabrics.md)) and enables pipeline [schedules](docs/analysts/scheduling.md) for each fabric.

## Permissions

You can publish to a fabric only if that fabric is assigned to one of your teams. This means fabric-level permissions control who can deploy to specific environments. To restrict access to production, assign the production fabric to a limited-access team.

However, publishing a project without selecting a fabric only releases the project—it **does not deploy** it to any environment. Anyone in the project team can do this, regardless of their fabric access.

Learn more in [Team-based access](/administration/teams-users/team-based-access).

## Parameters

Once you save your project as a draft, you have the option to Publish that version of the project. Review the following table to understand the publication parameters.

| Parameters                      | Description                                                                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version details                 | Copilot automatically populates the version details, but you can edit the version number or description if necessary.                                                                  |
| Changes that will be published  | Prophecy lists the saved drafts that include changes to be reflected in the new published version.                                                                                     |
| Select the fabric(s) to publish | Prophecy creates a new project deployment for each fabric. If a deployment already exists, it is updated. To see your deployments, review the [Monitoring](/analysts/monitoring) page. |

Prophecy lets you publish different versions of a project to different fabrics. This might be useful if you want `Version 1` published on a development fabric and `Version 2` published on a production fabric. (You cannot publish two different versions to the same fabric.)

## Publish the project

Follow the steps below to understand how to publish your project from the Prophecy interface.

1. Click **Publish** from the project header.
1. Review the version details and the changes to be published.
1. Select one or more fabrics to publish to.
1. Click **Publish**.

:::note
If you use the version dropdown and select **Publish new version** before saving as a draft, you will be prompted to save your project to the version history first.
:::

## Request to publish

Prophecy lets multiple users work on the same project [simultaneously](docs/analysts/development/collaboration/collaboration.md). If you try to publish the project while multiple people are working on it, you can **request to publish** the project. This way, all collaborators can be aware of the publication as they work on the project and approve or veto the action.

## Monitor deployed projects

All of your teams' published projects will appear in the [Monitoring](/analysts/monitoring) page in Prophecy. This lets you see information like build results, deployment versions, publication dates, and more.
