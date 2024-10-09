---
title: Fork a repository
id: git-fork
description: Source Control
sidebar_position: 5
tags:
  - metadata
  - Git
  - fork
---

This page describes how to fork a repository in cases where you may want to create a copy of the original repository.

## Use fork per user Git storage model

During the creation of Project there is an option to choose fork per usage as Git Storage model.
When you fork a repository, you create a copy of the original repository (upstream repository) but the repository remains on your GitHub account.

When using the fork per usage Git storage model while creating a new Project, apart from the `upstream repository` details, some additional information is needed for the `forked repository`.

![Fork repo setup](./img/fork_repo_eg1.png)

Let's create a fork of our original repository and pull `main` branch from original repository to our newly created forked repository.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.Githubusercontent.com/103921419/174733053-a45b61e3-1ebb-4ca2-99d9-5ad0d8b67ddb.mp4" title="How to create fork" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

Now to pull main branch from upstream repository or from origin of current repository is as simple as clicking on below
`Pull Upstream` or `Pull Origin` options.

![Fork repo extra options](./img/fork_repo_eg2.png)

:::note

1. Any changes made in forked repository would not effect the `upstream repository` and would only reflect in the `forked repository`.
2. Please follow the normal Gßit flow for raising pull requests to the `original repository` (upstream repository) from the `forked repository`.

:::
