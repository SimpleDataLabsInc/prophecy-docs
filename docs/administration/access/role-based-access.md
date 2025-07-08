---
title: Role-based access control (RBAC)
sidebar_label: Role-based access
id: role-based-access
description: Manage access by role
tags: []
---

Prophecy uses role-based access control (RBAC) to manage permissions across users and teams. Each user is assigned one or more roles that determine what actions they can perform and what resources they can access.

There are three key roles in Prophecy:

- **Standard users**: Can access and work within the teams they belong to
- **Team admins**: Manage team membership and team-level resources like fabrics and connections
- **Prophecy cluster admins**: Administer the overall Prophecy deployment and infrastructure

All users start as standard users by default. They can be granted the team admin role for specific teams, and automatically become the team admin for any team they create. In contrast, Prophecy cluster admin roles are managed by Prophecy and assigned at the deployment level.

## Standard users

Standard users access resources through team assignments. In other words, permissions are governed by team-level access controls. Standard users can:

- Create projects within their teams
- Attach to fabrics that are assigned to their teams

Users cannot create or edit fabrics for a team unless they are also a [team admin](#team-admins).

:::info
For more information about best practices, visit [Team-based access](/administration/access/team-based-access).
:::

### Personal team

Every user is automatically given a personal team, named after their login email. This team includes only the user and grants them team admin permissions, allowing them to create both projects and fabrics for individual use.

## Team admins

Team admins manage teams and create resources for their [teams](docs/administration/teams-users/teamuser.md). This includes responsibilities like:

- Adding and removing users from teams
- Creating fabrics that correspond to different execution environments
- Setting up connections with the appropriate credentials
- Deploying projects to run scheduled pipelines

The user who creates a team is automatically assigned as its team admin. Additional team admins can be added or disabled from the **Teams** tab in [Settings](/administration/teams-users/settings).

:::info
For recommendations regarding team setup and organization, visit [Team-based access](/administration/access/team-based-access).
:::

## Prophecy cluster admins

Prophecy cluster admins manage clusters, infrastructure, compute resources, and Prophecy deployment. This includes responsibilities such as:

- Setting up authentication like SSO for the Prophecy environment
- Managing audit log review and storage
- Upgrading Prophecy to a newer version
- Downloading system logs to send to Prophecy's Support team

Prophecy automatically provisions one Prophecy cluster admin per deployment. Additional cluster admins can be created if required.
