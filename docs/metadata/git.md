---
title: Git
id: git
description: Source control
sidebar_position: 1
tags:
  - metadata
  - git
---

## How to connect to external GIT

To connect to an external git, the process is as easy as configuring your:

1. GIT Repo URL: e.g. `https://github.com/user/git_demo.git`
2. Path: path to project inside the repo. e.g. `/first_project`
3. Email and username
4. Access token

Please refer below video for step-by-step example:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550405-4ffad723-6740-40a0-8888-d5368cc671c9.mp4" title="External GIT" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## How to commit changes

When you create your first project, `dev` branch is automatically created for you. This is to ensure that no edits/commits are
made directly on the `main` branch and a proper CICD flow is followed during development.

Creation of first project and commit changes to `dev` branch:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550520-ccd5ef9c-4733-47ed-abec-8012018b103f.mp4" title="How to commit" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## How to create/checkout branch

Currently we are on `dev` branch which has our first_pipeline.
Now let's see how to go back to our `main` branch and also create a new `second_branch` from the main branch.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550774-0f71fd10-da7c-4ed5-bd7a-d724fe5aa7b7.mp4" title="How to create branch" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## How to merge changes

Let's merge our `first_pipeline` from `dev` branch into `main` branch.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550866-10de3632-0576-417f-99dd-8a71a916bed6.mp4" title="How to merge changes" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## How to Pull changes

Pulling changes from a branch is as simple as in any GUI based git interface.
Let's pull our `main` branch into the empty `second_branch` which we created earlier. Please refer the below video for step-by-step example:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550900-b1f701bc-f1ef-4c5f-a39f-bd0378f71c27.mp4" title="How to pull changes" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

:::note
Currently pull only from `main` branch to any specific branch is supported.
:::

## How to release a branch

Once the changes are merged, we can `release` a branch straight from the UI itself.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174550916-7d8beb20-2013-401d-be30-67c02983958f.mp4" title="How to release a branch" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

![GIT after release](./img/git_release_eg1.png)

:::note
Databricks scheduler changes would only come into effect once the project is released.
:::

## How to resolve conflicts during merging

Now let's create a project in `third_branch` with same name as `first_pipeline` and put a different path in dataset.
Post this once we pull the changes from `main` into this branch, it would have conflicts as first_pipeline exists both in
`main` and `current` branch.

One way is to use the git interface directly to resolve conflicts between branches.

Or we can use the simple merge UI on prophecy to resolve the conflicts

Let's see in the video below on how to resolve conflicts using simple merge on prophecy:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174733075-b878a77d-97df-4bc9-8baf-5fcc72e268db.mp4" title="How to resolve conflicts" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

## How to use fork per usage GIT storage model

During the creation of project there is an option to choose fork per usage as GIT Storage model.
When you fork a repository, you create a copy of the original repository (upstream repository) but the repository remains on your GitHub account.

When using the fork per usage GIT storage model while creating a new project, apart from the `upstream repository` details, below extra
pop-up would come for details of `forked repository`.

![Fork repo setup](./img/fork_repo_eg1.png)


Let's create a fork of our original repository and pull `main` branch from original repository to our newly created forked repository.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/174733053-a45b61e3-1ebb-4ca2-99d9-5ad0d8b67ddb.mp4" title="How to create fork" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

Now to pull main branch from upstream repository or from origin of current repository is as simple as clicking on below
`Pull Upstream` or `Pull Origin` options

![Fork repo options](./img/fork_repo_eg2.png)

:::note

1. Any changes made in forked repository would not effect the `upstream repository` and would only reflect in the `forked repository`.
2. Please follow the normal git flow for raising pull requests to the `original repository` (upstream repository) from the `forked repository`.
   :::
