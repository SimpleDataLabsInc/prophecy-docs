---
title: Clone projects
id: clone-projects
slug: /analysts/clone-projects
description: Create independent copies of existing projects
tags: []
---

Clone a project to create a copy of that project. Cloning creates a completely independent project with:

- A new Git repository containing a copy of the project code
- Separate version history going forward
- Independent development that won't affect the original project

Unlike [importing](/analysts/import-projects), which connects to an existing repository, cloning creates a fresh repository for the new project.

## Create a clone

To create a clone:

1. Navigate to **Metadata > Projects**.
1. Open the project you want to clone.
1. Click **... > Clone**.
1. Configure the clone settings:

   - **Name**: Display name for the cloned project
   - **Team**: The team that will own the clone
   - **Git Storage Model**: Choose between Simple or Normal [Git model](/analysts/versioning#version-control-options)
   - **Git account**: Select which Git account will host the new repository
   - **Repository details**: If using external Git, specify where the new repository will be created
   - **Copy all release tags** (optional): Check this to transfer release versions to the clone

1. Click **Clone Project**.

You will see the new project appear in your chosen team.

:::info
Prophecy only copies the main branch from the source project when cloning. If you have uncommitted changes or changes on other branches, publish the project before cloning (merge changes into main). Otherwise, those changes won't appear in the cloned project.
:::
