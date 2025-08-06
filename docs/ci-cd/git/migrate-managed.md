---
title: Migrate project repository from Prophecy-managed Git to external Git
sidebar_label: Migrate project repository
id: migrate-managed
slug: /engineers/migrate-managed-projects
description: Move the repository of a project from managed-Git to external Git
tags:
  - git
---

This guide explains how to migrate a project that was started in Prophecy-managed Git to an external Git repository (such as Bitbucket or GitHub). You'll get an understanding of the process, the reasons behind this workflow, and the prerequisites for a smooth migration. This process might be helpful when you want to:

- Allow analysts to quickly create and iterate on projects in Prophecy, even if they lack credentials for the company’s external Git.
- Allow the engineering team to manage CI/CD and code promotions as per company standards in an external repository once pipelines are ready for production.

:::note
Migrating a project's repository is not the same as cloning a project. A cloned project is a new, distinct project with its own repository. Migration moves the existing project and its ID to the new repo.
:::

## Prerequisites

Before migrating a project repository from Prophecy-managed Git to an external Git provider, ensure the following:

- The original project must be a SQL project that uses the [Simple Git Storage Model](/analysts/versioning/#version-control-options).
- You must be either the project owner (the user who created the project) or a team admin of the team associated with the project.
- You must have valid credentials for the external Git provider. If you don’t, team members can [share credentials](/engineers/git/#share-credentials) with you in Prophecy.
- You must have access to an empty repository in the external Git provider where the project will be migrated.
- The external repository must contain a dedicated branch that will receive updates when you publish the project from Prophecy. (This branch doesn’t have to be named `main`; you can choose any branch to serve as the main publishing branch.)

## Step-by-step guide

### Initiate the migration

Once you’ve confirmed all prerequisites are in place, you can begin the migration process from within your Prophecy project.

1. Open your Prophecy project.
1. Click the `...` menu in the top right corner.
1. Select **Set up on External Git**.
1. Select the credential you wish to use.

### Fill migration details

After initiating the migration, you'll be prompted to provide the following information about the external repository.

1. Fill in the following fields:

   - **Repository** — Select the repository from the external Git provider to store the project code.
   - **Path** — Write a non-root path where the project code will be stored (for example, `/myproject`, not just `/`).
   - **Main Branch** — Reference an existing branch in the external repo that will be the project publication branch.
   - **Development Branch** — Name the branch where users will continue to do development work in the project.
   - **Copy all release tags** - Option to migrate release tags to the new repo.

1. Click **Set up on External Git** to confirm the migration.

Prophecy will move the entire project’s Git history to the path (directory) defined in the external repo in the specified development branch.

### Post-migration

After the migration, your team can continue collaborating on the project using shared credentials in Prophecy, ensuring that analysts and engineers maintain access without requiring individual Git credentials. With the project now hosted in your external Git provider, you can integrate it into your organization's CI/CD workflows for code promotion, security scanning, and managed deployment.
