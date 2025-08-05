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

You can share your Git credentials with teams in Prophecy to let team members access Git repositories without giving them direct access to your Git provider (e.g., GitHub or GitLab). This is useful when you want users to work within Prophecy but not sign in to the Git provider through the browser or CLI, for instance.

To share credentials, select the **Share credentials with teams** checkbox when adding or editing your Git credentials, and choose the teams you want to share them with.

Teams members with access to your shared credentials will be able to connect projects in Prophecy to existing repositories accessible to the account associated with the credentials.

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
