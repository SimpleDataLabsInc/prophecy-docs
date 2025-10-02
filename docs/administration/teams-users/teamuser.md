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

- Create and manage teams and team members.
- Create and configure fabrics for the team.
- Set up connections and secrets.
- Manage additional team-level settings.

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

### Team metadata settings

The following sections describe each tab within the team's metadata settings.

#### Execution Metrics (Spark only)

In the Execution Metrics tab, you can enable or disable [execution metrics](/engineers/execution-metrics) at the team level. You can also specify in which tables to store execution metrics for each pipeline run.

#### Code Generation (Spark only)

When the **Enable multi file code generation** setting is enabled, Prophecy splits interactive execution code into multiple files instead of generating a single large file. Interactive execution code (generated when clicking the play button) differs from the project code committed to Git - it's optimized for running in Spark shell environments. This optimization reduces code recompilation by only updating changed portions of the pipeline during interactive runs, improving execution performance.

#### Advanced

Configure the following settings in the Advanced tab of the team settings.

- **Artifact ID (Spark only):** Sets the parent artifact identifier for project JAR and wheel packages. This identifier is used when packaging your Spark project dependencies and becomes part of the artifact metadata for deployment and distribution.
- **Data context in copilot:** When enabled, sample data from interim runs will be used to improve Copilot suggestion quality. Note that this data is not used to improve the AI Agent.
- **Default projects:** Manage default project dependencies that are automatically imported into new projects. You can select any project from the Package Hub to include here.

#### Default Project Settings

In the Default Project Settings tab, you can create new project templates that users can select while creating a new project. The project template determines settings such as project language, Git provider, default transformation entity, and more. To learn how to configure new templates or change the default template for your team, visit [Project creation templates](/administration/project-types/project-creation-template).

## Team management settings

Additional team settings, including team creation and user management, are available in the **Team** tab of the global Settings interface in your Prophecy environment.

1. Click the **...** button and the **gear** icon at the bottom of the left navigation bar.
1. Select the **Teams** tab.
1. In the **Teams** section, you can:

   - See the list of teams you belong to.
   - Create and manage teams you own.
   - Delete teams (if you are a team admin).

1. In the **Team Users** section, you can:

   - See all users in your shared teams and their team assignments.
   - Create new users and invite them to Prophecy.
   - Add or remove users from teams (if you are a team admin).
   - Assign or remove team admin roles from users (if you are a team admin).
