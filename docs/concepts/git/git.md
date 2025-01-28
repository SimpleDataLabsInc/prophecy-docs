---
title: Git
id: Git
description: Understand how Prophecy uses Git for version control
sidebar_position: 1
tags:
  - metadata
  - Git
---

Prophecy utilizes Git to align with DevOps practices. Git lets you:

- Store your visual pipelines as code.
- Track your project metadata, including workflows, schedules, datasets, and computed metadata.
- Collaborate on your projects and perform code reviews.
- Track changes across time.

## Connect a Git repository

When you create a project in Prophecy, you must choose an empty Git repository or a path in a repository to host the project code. You can either choose a Prophecy-managed repository, or connect an external repository.

To add a Git account to your Prohecy environment:

1. Open **Settings** from the more options menu in the left sidebar.
1. Select the **Git** tab. You will see any existing Git credentials here, including the Prophecy Managed Git Credentials.
1. Click **Add new**.
1. Choose the relevant Git Provider and provide your login details.

You can also enter new Git credentials directly in the project creation page.

:::info

If you are a member of a GitHub Organization, you may need to [authorize our application](https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/authorizing-oauth-apps) to access your organization. This authorization step is necessary to ensure that our application can authenticate the APIs required to access the repositories. Follow the [approval steps](https://docs.github.com/en/organizations/managing-oauth-access-to-your-organizations-data/approving-oauth-apps-for-your-organization) to do so.

If you encounter any issues during the authorization process or have any questions regarding organization access, please reach out to us at [contact us](mailto:success@Prophecy.io) for assistance.

:::

## Git workflow

You can interact with a project's Git workflow from the project metadata page or within the project editor.

![Git workflow](img/git-workflow.png)

### Checkout

In Prophecy, you cannot make edits directly on the `main` branch of your project. Instead, you have to make changes on a development branch and merge those changes into the main branch.

Therefore, the Git workflow begins by creating and checking out a new branch.

![Git checkout](img/git-checkout.png)

When you are selecting a branch to checkout, you might be able to select branches that have been created remotely. Once you checkout a remote branch, it will be cloned locally, and it will no longer show up in the list of remote branches.

### Commit

When you make changes to your pipeline, you need to commit these changes to save them. You can view these changes either visually, or using the **Code changes** view.

![View Git changes](img/git-code-changes.png)

| **Feature**          | **View** | **Description**                                                                              |
| -------------------- | -------- | -------------------------------------------------------------------------------------------- |
| Branch history       | Visual   | Shows previous commits on the branch.                                                        |
| Entities changed     | Visual   | Explains which entities were modified.                                                       |
| Code changes toggle  | Code     | Allows you to view the code differences, with highlighted lines for additions and deletions. |
| Code changes tab     | Code     | Displays all of the files with changes.                                                      |
| Metadata changes tab | Code     | Displays all of the Prophecy metadata files with changes.                                    |
| Reset                | Both     | Reverts the changes.                                                                         |
| Commit Message       | Both     | Explains the changes that will be saved in this commit.                                      |

### Pull

Sometimes, you will be able to go straight from committing your changes to merging your changes. However, there are a few steps you might need to complete before merging your changes:

1. Pull **remote** changes into the **local** current branch.
1. Pull **remote** changes into the **local** base branch. Note that the base branch will be `main` by default.
1. Pull changes from the **local** base branch into the **local** current branch. You will not be able to complete this step before pulling remote commits.

![Git pull](img/git-pull.png)

Once you complete these steps, you might run into merge conflicts. If that happens, you can [use the Prophecy interface](git-resolve) to resolve them.

:::note
Before you pull remote changes into local branches, you will have to commit (or discard) your local changes.
:::

### Merge

Once you have committed your changes, you have the ability to **merge** them to a different branch. If you merged your branch in your external repository, you can tell Prophecy that you did so.

![Merge branch](img/merge-branch.png)

### Release and Deploy

Once the changes are merged, you can [release](/ci-cd/deployment/) a branch from the Prophecy user interface.

## Fork per User

When you create a project, you have the option to choose a single repository shared among users, or to **Fork per User**. When you Fork per User, every user gets their own [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the repository.

When you fork a repository, you must already have both the upstream repository and a Fork per User repository present.

:::note

1. Changes made in forked repository do not effect the upstream repository.
2. Please follow the normal Git flow for raising pull requests to the original repository from the forked repository.

:::

## What's next

Learn more about how to integrate Git in your project lifecycle in [Develop and deploy a project](docs/ci-cd/deployment/deployment.md).
