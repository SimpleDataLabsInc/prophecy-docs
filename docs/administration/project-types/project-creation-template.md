---
title: Project creation templates
id: project-creation-template
slug: /project-creation-template
description: Create templates that include predefined project creation settings
tags:
  - templates
---

At the team level, you can create multiple templates that include predefined project creation parameters. This is useful if your team creates many projects that use the same settings when they are created. **Only team admins can access the template settings for their team.**

## Template settings

To find existing templates or add new templates:

1. Open the relevant **team** metadata.
1. Click on the **Settings** tab.
1. Navigate to the **Default Project Settings** subtab.

Here, you can review or update existing templates by clicking through the **Templates** dropdown. To create a new template, click **+ Add New**.

## Parameters

When you add a new template for your team, you need to fill in the following parameters. Parameters will differ between Spark and SQL projects.

### Spark

| Parameter                  | Description                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Template Name              | A name to identify the template.                                                                           |
| Project Type               | The project language. Select Python or Scala for Spark projects.                                           |
| Allowed to customize       | Whether the template settings can be modified when a user creates a project with the template (Yes or No). |
| Git Provider               | Whether the project will use Prophecy-managed Git or an external Git provider.                             |
| Git Storage Model          | The option to choose **Normal** Git or **Fork per User**.                                                  |
| Select as Default template | The option to make the template preselected during project creation.                                       |
| Default Main Branch        | The default main branch name.                                                                              |

### SQL

| Parameter                  | Description                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Template Name              | A name to identify the template.                                                                           |
| Project Type               | The project language. Select SQL for SQL projects.                                                         |
| Allowed to customize       | Whether the template settings can be modified when a user creates a project with the template (Yes or No). |
| SQL Provider               | The SQL provider that will execute dbt.                                                                    |
| Default Main Branch        | The default main branch name.                                                                              |
| Default Development Branch | The default development branch name. This field appears **only if using external Git**.                    |
| Select as Default template | The option to make the template preselected during project creation.                                       |
| Git Provider               | Whether the project will use Prophecy-managed Git or an external Git provider.                             |
| Git Storage Model          | The option to choose **Simple** Git, **Normal** Git, or **Fork per User**.                                 |

## Usage

When you have templates for a certain team, users who select that team during project creation will see those templates.

If you select a customizable template, you will still be able to make changes to settings during project creation.
