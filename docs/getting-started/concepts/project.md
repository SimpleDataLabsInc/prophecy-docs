---
title: Projects
id: projects
slug: /projects
description: Keeping your pipelines, datasets and jobs under (source) control
tags:
  - concepts
  - project
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A **project** in Prophecy is the core unit for developing, organizing, and deploying data pipelines to production. It includes all the components required to build and execute data processes. Continue reading to learn about:

- [Project types](#project-types) for various use cases
- [Key components](#components) that support pipeline development within a project
- [Versioning](#versioning) and publishing of projects
- [Sharing](#access-and-sharing) projects across teams
- [Navigating](#project-editor) and editing projects

## Project types

Project components depend on your project type. Prophecy supports Python, Scala, and SQL projects. This language choice determines how your visual pipelines will be compiled into code. Your initial choice of project type determines your project's capabilities and workflow structure, so _it's important to choose correctly at the start since it cannot be changed later_.

Prophecy supports both SQL and Spark projects, and the choice depends on your data needs. Many organizations use both types of projects, leveraging SQL for **data analytics** and Spark for **data engineering**. Prophecy provides a platform where this can happen all in one place.

:::info Prophecy for Analysts
To make project creation easier, Prophecy provides [project creation templates](docs/getting-started/concepts/templates.md) that can cater to different needs. We suggest using the **Prophecy for Analysts** template when creating SQL projects for data analytics.
:::

<Tabs>

<TabItem value="SQL" label="SQL">

SQL is ideal when working with structured data in warehouses like Snowflake or Databricks SQL, offering simplicity, speed, and efficiency for moderate data volumes and interactive queries. It’s best for teams who need straightforward transformations without managing distributed infrastructure.

</TabItem>
<TabItem value="Spark" label="Python and Scala (Spark)">

Spark excels in executing complex pipelines and processing semi-structured data. Spark prioritizes performance and scalability are key, and requires more data engineering knowledge. Depending on what your data engineers are comfortable with, they can either choose Python or Scala as the backend code of Spark projects.

</TabItem>

</Tabs>

## Components

Project components vary based on project type. While SQL and Spark projects share common elements like pipelines and gems, their functionality differs significantly. Each is documented separately: [Pipeline development for Analysts](docs/analysts/development/development.md) focuses on SQL projects, while [Pipeline development for Engineers](/engineers/pipeline-development) focuses on Spark projects.

<Tabs>

<TabItem value="SQL" label="SQL">

| Component                                                               | Description                                                                                                                                                                                  |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Pipelines](docs/analysts/development/pipelines/pipelines.md)           | Sequences of steps that run on Prophecy Automate and SQL warehouses.                                                                                                                         |
| [Gems](docs/analysts/development/gems/gems.md)                          | Representations of individual data transformation steps in a pipeline or model.                                                                                                              |
| [Tables](docs/analysts/development/gems/source-target/source-target.md) | SQL tables, views, or seeds.                                                                                                                                                                 |
| [Functions](docs/analysts/development/functions/functions.md)           | SQL macros used in gem expressions.                                                                                                                                                          |
| [Tests](docs/analysts/development/data-tests/data-tests.md)             | Automated validations ensuring referential integrity, data consistency, and other quality checks.                                                                                            |
| [Schedules](docs/analysts/scheduling.md)                                | Schedules for periodic pipeline execution managed by Prophecy Automate.                                                                                                                      |
| [Models](/engineers/models)                                             | SQL transformations that define a single table or view. Models only appear in projects that enable **Normal** or **Fork per User** Git storage models. (Only applicable for data engineers.) |

</TabItem>
<TabItem value="Spark" label="Python and Scala (Spark)">

| Component                                   | Description                                                                                                |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Pipelines](/engineers/pipelines)           | Sequences of steps that run on Spark-native code.                                                          |
| [Datasets](/engineers/dataset)              | Pointers to tables that are stored in the external data provider defined in a fabric.                      |
| [Jobs](docs/Orchestration/Orchestration.md) | Schedules for pipeline execution managed by external orchestration tools like Databricks Jobs and Airflow. |
| [Gems](/engineers/gems)                     | Representations of individual data transformation steps in a pipeline.                                     |

</TabItem>

</Tabs>

## Versioning

All projects are automatically compiled into code and hosted on Git for powerful version control. Prophecy offers several version control options, which you can configure during project creation. The available options vary depending on the project type.

<Tabs>

<TabItem value="SQL" label="SQL">

| Parameter         | Options                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git Account       | <ul class="table-list"><li>Prophecy-managed: Prophecy hosts and manages the Git repository for your project. No external Git setup is required.</li><li>External Git: You connect your project to an external Git provider (e.g., GitHub, GitLab, Bitbucket) and manage repositories independently.</li></ul>                                                                                                                                                             |
| Git Storage Model | <ul class="table-list"><li>Simple: A minimal save and publish workflow that it built on Git. All work happens on the same development branch and is merged to main upon project publication.</li><li>Normal: All users work within a shared Git repository with standard branching and merging practices.</li><li>Fork per User (External Git only): Each user works on their own fork of the repository, enabling independent changes before merging upstream.</li></ul> |

</TabItem>
<TabItem value="Spark" label="Python and Scala (Spark)">

| Parameter         | Options                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git Account       | <ul class="table-list"><li>Prophecy-managed: Prophecy hosts and manages the Git repository for your project. This is not recommended for projects deployed to production.</li><li>External Git: You connect your project to an external Git provider (e.g., GitHub, GitLab, Bitbucket) and manage repositories independently.</li></ul> |
| Git Storage Model | <ul class="table-list"><li>Normal: All users work within a shared Git repository with standard branching and merging practices.</li><li>Fork per User (External Git only): Each user works on their own fork of the repository, enabling independent changes before merging upstream.</li></ul>                                         |

</TabItem>

</Tabs>

## Access and sharing

In Prophecy, each project is associated with a specific [team](docs/administration/teams-users/teamuser.md), which determines ownership and access permissions.

The user who creates a project becomes its owner (or admin). During project creation, the project owner assigns the project to a team, which lets all team members edit project components like pipelines and gems. However, project owners retain special privileges: for example, only project owners and team admins can release and deploy Spark projects.

When you first start using Prophecy, you are placed in your own personal, one-member team. This setup is ideal for private projects that only you can access. For collaborative work, your team admin will usually create shared teams.

### Sharing with other teams (read-only)

To extend the reach of your project, you can share it with other teams.

- **Read-only access:** Users from other teams cannot directly edit the original project's components.
- **Reuse components:** If you share the project with other teams and publish it to the [Package Hub](/engineers/package-hub), users can import the projects as packages in their own projects. While they can't edit the original components, they can use copies of them in their own projects.
- **Run pipelines:** If you share projects that contain [business apps](docs/analysts/business-apps/business-apps.md) with other teams, users can execute business apps that rely on the pipelines within the shared project.

## Metadata

The **Metadata** page in Prophecy provides a searchable directory of projects and project components including pipelines, models, and jobs. All projects that are shared with your teams are visible in the **Projects** tab of the Metadata page. You can click into each project to access more granular metadata about that project.

You can view and edit the following metadata for your projects:

| Metadata            | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| **About**           | An overview of your project and space for an in-depth description of the project.                              |
| **Content**         | A list of entities within the project like pipelines and jobs depending on your project type.                  |
| **Dependencies**    | The dependencies that exist in the project, including packages and Prophecy libraries.                         |
| **Version control** | Either the Git workflow of the project, or the version history of the project, depending on your project type. |
| **Deployments**     | A list of project versions that you have released and/or deployed (published).                                 |
| **Access**          | The teams that can view your project via the Package Hub.                                                      |
| **Settings**        | Different configuration options for building and deploying your project.                                       |

## Project editor

To begin pipeline development, open your project from the **IDE** tab in the sidebar. This opens the **project editor**, where you can configure transformation gems and interactively run pipelines. To learn more about pipeline development, visit [SQL pipeline development](docs/analysts/development/development.md) and [Spark pipeline development](/engineers/pipeline-development).

:::info
If you want to change the name of your project, you must do so in the project metadata (not the project editor).
:::

## What's next

To continue learning about projects:

- Create multiple projects and compare different project types.
- Follow one of our [tutorials](docs/getting-started/tutorials/tutorials.md) to build a project from end-to-end.
- Play with different project components to understand how they interact.
