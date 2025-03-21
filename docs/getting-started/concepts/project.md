---
title: Projects
id: project
description: Keeping your pipelines, datasets and jobs under (source) control
tags:
  - concepts
  - project
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A **project** in Prophecy is the core unit for developing, organizing, and deploying data workflows to production. It encompasses all the components needed for building and running data processes. Each project is automatically compiled into code and is hosted on Git in the backend.

## Project types

Project components depend on your project type. A project must be written in Python, Scala, or SQL. This language choice determines how your visual pipelines will be compiled into code. You initial choice of **project type** fundamentally determines your project's capabilities and workflow structure, so it's important to choose correctly at the start since it cannot be changed later.

Prophecy supports both SQL and Spark for data engineering, and the choice depends on your data needs. Many organizations use both types of projects, leveraging SQL for analytics and Spark for heavy-duty transformations. Prophecy provides a platform where this can happen all in one place.

### SQL

SQL is ideal when working with structured data in warehouses like Snowflake or Databricks SQL, offering simplicity, speed, and efficiency for moderate data volumes and interactive queries. It’s best for teams with SQL expertise who need straightforward transformations without managing distributed infrastructure.

### Spark

Spark is better for large-scale data processing, like handling terabytes or petabytes across distributed clusters. It excels in executing complex pipelines, processing semi-structured data, and integrating with big data ecosystems like Databricks. Spark prioritizes performance and scalability are key, and required more data engineering knowledge. Depending on what your data engineers are comfortable with, they can either choose Python or Scala as the backend code of Spark projects.

## Project components

The project components will differ depending on the project type.

<Tabs>

<TabItem value="Spark" label="Python and Scala (Spark)">

| Component                                      | Description                                                   |
| ---------------------------------------------- | ------------------------------------------------------------- |
| [Pipelines](docs/Spark/pipelines/pipelines.md) | Sequence of steps that run on Spark-native code               |
| [Datasets](docs/Spark/dataset.md)              | Pointer to data in your data provider                         |
| [Jobs](docs/Orchestration/Orchestration.md)    | Schedule for pipeline execution                               |
| [Gems](docs/Spark/gems/gems.md)                | Representation of each data transformation step in a pipeline |

</TabItem>
<TabItem value="SQL" label="SQL">

| Component                                                               | Description                                                                              |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [Pipelines](docs/analysts/development/pipelines/pipelines.md)           | Sequence of steps that run on Prophecy runtime and SQL warehouse                         |
| [Models](docs/data-modeling/models.md)                                  | SQL transformations that define a single table or view                                   |
| [Gems](docs/analysts/development/gems/gems.md)                          | Representation of each data transformation step in a pipeline or model                   |
| [Tables](docs/analysts/development/gems/source-target/source-target.md) | SQL table, view, or seed                                                                 |
| Functions                                                               | SQL macro that can be invoked using a Macro gem                                          |
| [Tests](docs/analysts/development/data-tests/data-tests.md)             | Validate data automatically by testing for referential integrity, data consistency, etc. |
| [Schedules](docs/analysts/scheduling.md)                                | Schedule for pipeline execution                                                          |

</TabItem>
</Tabs>

## Project team

Projects are always assigned to a certain [team](docs/administration/teams-users/teamuser.md). This means that the project will be shared among all users in that team.

:::note
When you begin using Prophecy, you are added to your own one-person team. Your team administrator will typically create other team groupings.
:::

## Project metadata

The **Metadata** page in Prophecy provides a searchable directory of projects and project components including pipelines, models, and jobs. All projects that are shared with your teams are visible in the **Projects** tab of the Metadata page. You can click into each project to access more granular metadata about that project.

You can view and edit the following metadata for you projects:

- **About**: An overview of your project and space for an in-depth description of the project.
- **Content**: A list of entities within the project like pipelines and jobs depending on your project type.
- **Dependencies**: The dependencies that exist in the project, including packages and Prophecy libraries.
- **Version control**: Either the Git workflow of the project, or the version history of the project, depending on your project type.
- **Deployments**: A list of project versions that you have released and/or deployed (published).
- **Access**: The teams that can view your project via the Package Hub.
- **Settings**: Different configuration options for building and deploying your project.

## Project editor

To begin pipeline development, open your project from the **IDE** tab in the sidebar. This opens the **project editor**, where you can configure transformation gems and interactively run pipelines. To learn more about pipeline development, visit [SQL pipeline development](docs/analysts/development/development.md) and [Spark pipeline development](docs/Spark/Spark.md).

:::info
If you want to change the name of your project, you must do so in the project metadata (not the project editor).
:::

## What's next

To continue learning about projects:

- Create multiple projects and compare different project types.
- Follow one of our [tutorials](docs/getting-started/tutorials/tutorials.md) to build a project from end-to-end.
- Play with different project components to understand how they interact.
