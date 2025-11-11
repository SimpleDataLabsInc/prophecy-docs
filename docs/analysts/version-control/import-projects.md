---
title: Import projects
id: import-projects
slug: /analysts/import-projects
description: Import projects from existing Git repositories
tags: []
---

Import existing Prophecy projects from external Git repositories into your workspace. This connects your Prophecy project to the repository without creating a copy of the repository.

:::info
You can only import projects from external Git providers (GitHub, GitLab, Bitbucket, etc.). Projects stored in Prophecy-managed Git cannot be imported using this method.
:::

## Import a project

To import a project from Git:

1. Open **Create Entity** from the left sidebar.
1. Hover over the **Project** tile.
1. Click **Import**.
1. Connect to the Git account that hosts your project repository.
1. Select your repository from the **Repository** dropdown.

   If your repository doesn't appear (common with forked repositories), paste the repository URL directly into the Repository field.

1. Verify the **Default Branch** field auto-populates correctly.
1. Keep the default root path or specify a path to the project folder within the repository.
1. Click **Continue**.
1. Configure your project settings:

   - **Name**: Display name for the project in Prophecy
   - **Description**: Optional context about the project
   - **Team**: The team that will own this project
   - **Project type**: Prophecy automatically sets the language based on the repository content (cannot be changed)
   - **Provider**: Where pipelines will execute

1. Click **Complete**.

## Import vs. clone

Importing a project connects directly to the existing repository without creating a new copy. This means:

- Multiple Prophecy projects can point to the same Git repository
- Changes made in any connected project affect the shared repository
- All projects connected to the same repository will see each other's commits

Use caution when multiple projects share a repository, as changes are not isolated between projects.
