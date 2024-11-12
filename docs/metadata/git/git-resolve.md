---
title: Resolve conflicts
id: git-resolve
description: Source Control
sidebar_position: 4
tags:
  - metadata
  - Git
  - resolve
---

This page describes how to resolve conflicts that you may run into while merging your changes.

## Resolve conflicts during merging

Now let's create a Project in `third_branch` with same name as `first_Pipeline` and put a different path in Dataset.
Post this once we pull the changes from `main` into this branch, it would have conflicts as `first_Pipeline` exists both in
`main` and `current` branch.

One way is to use the Git interface directly to resolve conflicts between branches.

Or we can use the simple merge UI on Prophecy to resolve the conflicts

Let's see in the video below on how to resolve conflicts using simple merge on Prophecy:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.Githubusercontent.com/103921419/174733075-b878a77d-97df-4bc9-8baf-5fcc72e268db.mp4" title="How to resolve conflicts" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## Resolve conflicts using manual merge

You can use manual merge to resolve conflicts. This provides you with simple, yet effective ways to resolve merge conflicts for granular changes.

### Use Left or Right merge strategy

The Left or Right merge strategy gives you a the option to resolve the conflict by choosing one version of your code to keep. After choosing, you can click **Next** to continue the merge process.

![Choose a Git conflict manual merge](img/git-conflict-manual-merge.png)

- **(A)** **Strategy** - You must choose a preferred strategy to resolve the conflict. Here the Left strategy keeps the version on branch `master`, while the Right strategy keeps the version on branch `dev`.
- **(B)** **Open on master** - Clicking this opens the Model on branch `master` for you to view.
- **(C)** **Open on dev** - Clicking this opens the Model on branch `dev` for you to view.

Here are the read-only views on branch `master` on the left and branch `dev` on the right:

![View Git conflict merge strategies](img/git-conflict-merge-strategy.png)

### Use Code Changes strategy

For SQL, you can also toggle on **Code Changes** to view and edit the code before validating. You can resolve conflicts by making code changes directly on the files.

![View Git conflict merge strategies](img/git-conflict-code-changes.png)

Once you've made the changes that you want to keep, click **Next**. The merge process will compile the files.

:::info Errors caused by conflict resolution
In rare cases, your merge attempt may result in an error after the compile completes. You'll be asked to fix the error before proceeding. See **Diagnostics** at the bottom for details on what the error is and how you might go about fixing it. Once you've fixed the error, click **Try Again**.

If you're confident that the errors are fine to leave as is, click **Ignore Errors**.
:::
