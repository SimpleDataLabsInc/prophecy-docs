---
title: Teams and users
id: teams-users
description: Teams represent a group of users who work together
tags:
  - concepts
  - teams
  - users
---

Teams represent groups of users who collaborate on projects and share access to resources. When you create a [project](/projects) or a [fabric](docs/getting-started/concepts/fabrics.md), you assign it to a team. All users in that team will have access to the relevant project or fabric.

There are two types of teams:

- **Personal teams.** When you start using Prophecy, you are automatically assigned to your own one-person team. You are also the team admin of this team. If you want a project or fabric to be accessible only to yourself, you can assign it to your personal team and keep it private.
- **Shared teams.** Your team admin typically creates additional team groupings. Team structures will vary across organizations.

## Team admins

Team admins are responsible for managing the composition of teams in Prophecy. They typically create and maintain teams, manage team membership, and oversee resources such as fabrics and projects assigned to those teams. Each team can have one or more team admins.

Team admins have administrative privileges within their teams, including the ability to add or remove users and promote other users to admin status. However, their responsibilities are limited to team-level management. They are distinct from Prophecy cluster admins, who manage the installation, deployment, and overall infrastructure of the Prophecy platform.

## Team management

To manage your teams, you need to open the **Settings** UI in Prophecy.

1. Click the **...** button and the **gear** icon at the bottom of the left navigation bar.
1. Select the **Teams** tab.
1. In the **Teams** section, view, create, or delete teams. Teams can only be deleted by their team admin.
1. In the **Team Users** section, view, create, or remove users in teams. You can also assign or unassign users to the team admin role.

:::info
For more information about the **Settings** UI, visit [Settings](/administration/settings).
:::

## Team metadata

Manage the entities within a team by accessing the team's metadata page.

1. Click on the **Metadata** icon in the left navigation bar.
1. Select the **Teams** tab in the page header.
1. Click on the team to open its metadata page.

The team metadata page includes the following information:

- Entities that the team owns, such as projects, pipelines, datasets, and jobs.
- Users that are members of the team.
- Settings that are only visible to team admins. See [Team settings](#team-settings) for more information.

### Team settings

This table describes each tab within the team settings.

| Tab                      | Description                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Execution Metrics        | Enable/disable [metrics](/docs/Spark/execution/execution-metrics.md) for each pipeline execution.             |
| Code Generation          | Enables multi-file code generation in the case of code payload size limitations.                              |
| Advanced                 | Update the Artifact ID, copilot settings, and more for a team's projects.                                     |
| Default Project Settings | Configure [project creation templates](/administration/project-types/project-creation-template) for the team. |
