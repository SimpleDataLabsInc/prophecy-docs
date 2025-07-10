---
title: Teams
id: teams-users
description: Teams represent a group of users who work together
tags:
  - concepts
  - teams
  - users
---

Teams represent groups of users who collaborate on projects and share access to resources. When you create a [project](/projects) or a [fabric](docs/getting-started/concepts/fabrics.md), you assign it to a team. All users in that team will have access to the relevant project or fabric.

## Team types

There are two types of teams in Prophecy.

- **Shared teams:** Your [team admin](/administration/rbac#team-admins) typically creates additional team groupings. Team structures will vary across organizations. To learn about best practices for organizing teams, visit [Team-based access](/administration/team-based-access).
- **Personal teams:** When you start using Prophecy, you are automatically assigned to your own one-person team. You are also the team admin of this team. If you want a project or fabric to be accessible only to yourself, you can assign it to your personal team and keep it private.

## Team admins

Team admins are responsible for managing the structure and resources of a team. They can:

- Create and manage teams and team members
- Create and configure fabrics for the team
- Set up connections and secrets
- Manage additional team-level settings

There can be multiple team admins per team, and any existing team admin can promote another user to this role.

:::info
For more information, visit [Role-based access control](/administration/rbac#team-admins). Note that team admins are different from Prophecy cluster admins, who manage infrastructure, authentication, and deployment-wide settings.
:::

## Team metadata

Manage the entities within a team by accessing the team's metadata page.

1. Click on the **Metadata** icon in the left navigation bar.
1. Select the **Teams** tab in the page header.
1. Click on the team to open its metadata page.

The team metadata page includes the following information:

- Entities that the team owns, such as projects, pipelines, datasets, and jobs.
- Users that are members of the team.
- Settings that are only visible to team admins. See [Team metadata settings](#team-metadata-settings) for more information.

## Team metadata settings

This table describes each tab within the team's metadata settings.

| Tab                                                                                 | Description                                                                      |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Execution Metrics](/docs/Spark/execution/execution-metrics.md)                     | Displays metrics and data samples for each execution.                            |
| Code Generation                                                                     | Enables multi-file code generation in the case of code payload size limitations. |
| Advanced                                                                            | Update the artifactid, generative AI settings, etc. for a team's projects.       |
| [Default Project Settings](/administration/project-types/project-creation-template) | Configure project creation templates for the team.                               |

## Team management settings

Additional team settings, including team creation and user management, are available in the **Team** tab of the global [Settings](/administration/teams-users/settings) interface in your Prophecy environment.

1. Click the **...** button and the **gear** icon at the bottom of the left navigation bar.
1. Select the **Teams** tab.
1. In the **Teams** section, view, create, or delete teams. Teams can only be deleted by their team admin.
1. In the **Team Users** section, view, create, or remove users in teams. You can also assign or unassign users to the team admin role.
