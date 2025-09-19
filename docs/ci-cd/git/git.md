---
title: Git
id: Git
slug: /engineers/git
description: Understand how Prophecy uses Git for version control
tags:
  - metadata
  - Git
---

Prophecy utilizes [Git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) to align with DevOps practices. Git lets you:

- Store your visual pipelines as code.
- Track your project metadata, including workflows, schedules, datasets, and computed metadata.
- Collaborate on your projects and perform code reviews.
- Track changes across time.

## Projects and Git repositories

When you create a project in Prophecy, you must choose an empty Git repository or a path in a repository to host the underlying project code. This way, Prophecy can keep track of any changes to the project (including pipelines, models, datasets, and jobs) in a systematic way.

If you're unfamiliar with Git, or you don't need to connect to an external Git repository, you can connect your projects to **Prophecy-managed** repositories. To leverage the full functionality of Git, however, you need to connect your projects to external Git repositories. To do so, you need to add external Git credentials to Prophecy.

## Add Git credentials to Prophecy {#Git-credentials}

When you create a project in Prophecy, You can either choose a Prophecy-managed repository or connect an external repository.

To add an external Git account to your Prophecy environment:

1. Open **Settings** from the ellipses menu in the left sidebar.
1. Select the **Git** tab. You will see any existing Git credentials here.
1. Click **Add new**.
1. Choose the relevant **Git Provider** and provide the following details:
   - An alias for your Git credentials.
   - Your Git email.
   - Your Git username.
   - Your Git personal access token (PAT). You should be able to find instructions on accessing your personal access token in each external provider's documentation.
1. Click **Connect** to save the credentials.

You can also enter new Git credentials directly when creating a new project.

### Share credentials

In Prophecy, you can share your Git credentials with teams so they can access Git repositories without signing in to your Git provider (for example, GitHub or GitLab). This allows them to work with Prophecy projects in external repositories while keeping your Git provider account private.

Team members with shared access can:

- Connect new Prophecy projects to repositories available to the connected Git account.
- Access existing Prophecy projects already connected to repositories in the connected Git account.
- Migrate Prophecy projects from Prophecy-managed Git to an external repository in the connected Git account.

In **Settings > Git**, you'll see your credential split into three sections:

- **Personal Git Credentials**: Credentials you own that are available only to you..
- **Team Credentials (Owned by you)**: Credentials you own and have shared with teams.
- **Team Credentials (Shared with you)**: Credentials owned by others and shared with you.

To share credentials, select the **Share credentials with teams** checkbox when adding or editing your Git credentials, and choose the teams you want to share them with.

:::note
You can only edit the credentials you own. You cannot modify credentials that have been shared with you.
:::

### GitHub Oauth

If you choose GitHub as your external Git provider, you can add your Git credentials using GitHub Oauth.

To use GitHub Oauth, a GitHub admin will need to [authorize Prophecy](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps) to access the APIs required to access your organization's repositories. Follow the [approval steps](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) to set this up.

## Fork per User

When you create a project, you have the option to choose a single repository shared among users, or to **Fork per User**. When you Fork per User, every user gets their own [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the repository.

When you fork a repository, you must already have both the upstream repository and a Fork per User repository present.

:::note

- Changes made in forked repository do not affect the upstream repository.
- Please follow the normal Git flow for raising pull requests to the original repository from the forked repository.

:::

## What's next

Learn more about the [Git workflow](/engineers/git-workflow) or try it yourself in [Develop and deploy a project](/engineers/deployment).
