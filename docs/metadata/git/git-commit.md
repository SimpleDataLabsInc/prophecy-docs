---
title: Commit changes
id: git-commit
description: Source Control
sidebar_position: 2
tags:
  - metadata
  - Git
  - commit
---

This page describes how to commit your changes and create new branches from the main branch.

## Commit changes into the dev branch

When you create your first Project, `dev/$USERNAME` branch is automatically suggested for you to create. This is to ensure that no edits/commits are made directly on the `main` [branch](/concepts/Project/#Project-commits).

Within a Project, create a Pipeline and commit changes to the `dev` branch:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.Githubusercontent.com/121796483/216262123-8f1c71d2-f4d9-40a4-bc6f-a11b81e2b68c.mp4" title="How to commit" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

### View code changes

You can view the code changes of your commit when you start the process to commit changes. This gives you granular change visibility so that you can understand the detailed changes being made to your Pipelines, Models, datasets, and other entities.

![View Git code changes](img/git-code-changes.png)

- **(A)** **Code Changes** - The Code Changes tab shows all of the files with changes.
- **(B)** **Metadata changes** - The Metadata changes tab shows all of the Prophecy metadata files with changes.
- **(C)** **Code changes** - Toggling on **Code changes** allows you to view the code differences, with highlighted lines for additions and deletions.
- **(D)** **Reset** - Clicking **Reset** allows you to revert the changes.
- **(E)** **Change files** - This shows the total number of changed files and the number of added and delete lines.

## Create or checkout a branch

Currently we are on `dev` branch which has our `first_Pipeline`.
Now let's see how to go back to our `main` branch and also create a new `second_branch` from the main branch.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.Githubusercontent.com/103921419/174550774-0f71fd10-da7c-4ed5-bd7a-d724fe5aa7b7.mp4" title="How to create branch" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
