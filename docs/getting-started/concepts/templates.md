---
title: Project templates
id: templates
sidebar_label: Templates
slug: /templates
description: Select templates for project creation
tags:
  - project
  - template
---

Project templates make it easy to create new projects with predefined settings. Templates are particularly useful when working within a team that follows standardized project structures.

## Default templates

Prophecy provides one template accessible to all teams:

- **Prophecy for Analysts**. Choose this template to streamline project creation for business analysts. Team admins can update the default values in this template for their own team.

  | Parameter                  | Default value | Description                                                                                                                  |
  | -------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
  | Project Type               | SQL           | Prophecy automatically compiles your project into SQL code                                                                   |
  | Allowed to customize       | Disabled      | Users are not allowed to change template configurations upon project creation for this template.                             |
  | SQL Provider               | Databricks    | The project will require a Databricks SQL warehouse connection for pipeline execution.                                       |
  | Select as Default template | Yes           | When you create a project, this will be the default template that appears.                                                   |
  | Git Provider               | Prophecy      | The project code will be hosted on Prophecy-managed Git.                                                                     |
  | Git Storage Model          | Simple        | The project will use the Simple Git storage model. This model simplifies the Git workflow into a save and publish framework. |

## Additional templates

Team admins have permission to create new templates. To learn more, see [Project creation templates](docs/administration/teams-users/project-creation-template.md).
