---
sidebar_position: 1
id: August_2024
description: Release notes for August
title: August 2024
tags:
  - release notes
  - changelog
  - august
---

## 3.3.10.\* (August 30, 2024)

- Prophecy Python libs version: 1.9.9
- Prophecy Scala libs version: 8.0.31

### Features {#Features3310}

#### Spark Copilot Enhancements {#Spark3310}

- **Source suggestion**: While working on your Pipeline, if there is an unconnected source, Data Copilot will now suggest other sources that you can add to it on the graph.

#### SQL Copilot Enhancements {#SQL3310}

- **SQL Subgraph**: We now support Subgraphs in your SQL models. Subgraphs allow you to wrap multiple different Gems under a single parent Gem. These logical groupings can simplify the Visual view of your model.

- **Support for configurations in the Target Model**: The Target Model supports column selection and project-level configurations.

- **Schedule button**: Just as you can schedule a Pipeline in Spark, you can now use the Schedule button to schedule a model in SQL. Opening the Schedule screen shows all existing Jobs. You can also create a new Job.

- **Support dragging function parameters**: You can drag and drop function parameters in the Visual view of the expression builder.

### UX Improvements {#UXImprovements3310}

- **Support teams search**: You can use search on the teams select box during Fabric creation.

- **SQL upload file button**: The SQL upload file button is now always present on the Environment tab.

### Minor Improvements {#MinorImprovements3310}

- **Auto describe Datasets**: We now automatically describe columns using interim data when you run your model and when you drop a Dataset from the Environment tab.

- **Prevent unnecessary code changes**: Unnecessary code changes are no longer made for the following cases:

  - after a new user loads a Job that was created by another user in the Pipeline
  - after multiple users open a Pipeline with published subgraphs

- **UI doesn't refresh after pull origin fix**: We've fixed an issue where merged changes didn't appear after pulling origin in Prophecy until you've refreshed the UI.

- **Fabric configuration reset fix**: We've fixed an issue where the Fabric configuration would reset during creation when adding a Job size and selecting JSON.

- **Upgrade dbt version**: We've upgraded our dbt supported version to v1.8.

## 3.3.9.\* (August 12, 2024)

- Prophecy Python libs version: 1.9.9
- Prophecy Scala libs version: 8.0.29

### Features {#Features339}

#### Spark Copilot Enhancements {#Spark339}

- **Support custom artifactory resolve plibs version**: We now support adding custom Pypi or Maven dependencies for Pipelines running on all Spark Fabrics including EMR, Dataproc, etc.

- **Support for config resolution inside call_func()**: Config variables inside of the `call_function()` and `call_func()` are now supported. The new syntax is `call_function("{{catalogName}}.{{database}}.{{funcName}}", "{{firstArg}}")`.

- **Support for proxy-user impersonation in Kerberos Livy Fabric Auth**: As an admin user, you can configure multiple Keytab accounts in the [Admin Settings](../../../architecture/authentication/admin-settings.md). You can upload the Keytab files and set up proxy-user impersonation in Kerberos for secure authentication to Livy Fabrics.

#### SQL Copilot Enhancements {#SQL339}

In this release, we've updated the UX and capabilities of the expression builder, target model, and more. Read our [New SQL UI Onboarding Guide](./new-ui-sql.md) to get familiar with the updated interface.

#### Airflow Copilot Enhancements {#Airflow339}

- **Support for partial run for Airflow Jobs**: We've added play buttons on Gems, which you can use to start partial runs for Airflow Jobs.

- **Ability to create a model from the model dropdown**: While configuring the model Gem in your Job, you now have the option to create a model from the Model dropdown.

### Minor Improvements {#MinorImprovements339}

- **Clone a Prophecy Job**: You can now clone a Prophecy Job just as you may clone a Pipeline. This is useful for Job renaming issues.
