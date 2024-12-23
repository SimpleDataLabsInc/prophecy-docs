---
title: Projects
id: project
description: Keeping your Pipelines, Datasets and Jobs under (source) control
sidebar_position: 1
tags:
  - concepts
  - project
---

A **Project** in Prophecy is the core unit for developing, organizing, and deploying data workflows to production. It encompasses all the components needed for building and running data processes.

## Project types

When you create a project, you must choose a **Project Type**: Spark/Python, Spark/Scala, or SQL. Visually designed pipelines will generate code in the selected Project output language.

![Project language](../img/project_language.png)

Spark projects contain [Pipelines](docs/concepts/project/pipelines.md), [Datasets](docs/concepts/project/dataset.md), and [Jobs](docs/Orchestration/Orchestration.md). SQL Projects contain [Models](docs/concepts/project/models.md), [Datasets](docs/concepts/project/dataset.md), and [Jobs](docs/Orchestration/Orchestration.md). You can view these components in the **Metadata** tab of the Prophecy user interface.

:::note
It is not currently possible to switch the output language of a Project after it has been created.
:::

## Projects and Git

Each project must be stored in a Git repository. You can either choose to host your project on a Prophecy-managed repository, or you can connect your own external repository, like one on GitHub. Additionally, all assets within a Project (like Pipelines, Models, Datasets, and Jobs) are stored as code in the Project's Git repository.

Open any Pipeline (left) or Model (right) in your Project. Simply toggle from visual to code to see the underlying code for that Pipeline or Model, as well as the rest of the Project components.

![Visual To Code](img/code-to-visual.png)

Version control lets users and teams collaborate on Projects, contribute simultaneously, and reuse code.

## Project deployment
