---
title: Pipeline folders
id: folders
slug: /analysts/folders
description: Keep your project organized by grouping pipelines in folders
tags:
  - pipeline
  - organization
  - folder
---

Use folders to organize pipelines within your Prophecy project and facilitate project navigation and collaboration. Folders help you manage large numbers of pipelines by grouping them systematically. You'll be able to see new folders in both the visual and code view of the project.

:::note
Pipeline folders must be created inside the `pipelines` directory of the project.
:::

## Limitations

Pipeline folders have the following limitations:

- Folders can only be created, not edited or removed
- You cannot rename folders after creation
- You cannot move pipelines between folders after they are created

## Create a folder

### Method 1: Create the folder directly

This is the most straightforward method to create a new folder.

1. Open the project editor.
1. In the left sidebar, hover over **Pipelines**.
1. Click the **+** (plus) icon.
1. Click the folder icon next to the directory path.
1. Select the `pipelines` directory.
1. Click **Add Folder**.
1. Enter your folder name.
1. Click **Save**.

The folder is created. You can either create a new pipeline inside the folder or exit the new pipeline dialog.

:::tip
If you exit the dialog, you can add a pipeline to the new folder later.
:::

### Method 2: Create the folder and a new pipeline

For this method, you type the pipeline path directly. However, it requires that you also create a new pipeline simultaneously.

1. Open the project editor.
1. In the left sidebar, hover over **Pipelines**.
1. Click the **+** (plus) icon.
1. In the **Pipeline Name** field, name your new pipeline.
1. In the **Directory Path** field, type the new folder path (for example, `pipelines/finance`).
1. Click **Create** to save the new pipeline and the new folder.
