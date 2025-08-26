---
title: Projects
id: projects
slug: /projects
description: Understanding your workspace for building data pipelines in Prophecy
tags:
  - concepts
  - project
---

Projects serve as your primary workspace in Prophecy for building data pipelines. Think of a project as a container that organizes related data transformations, tests, and schedules in one place. Projects provide four core capabilities that support your data pipeline development:

- **Organization**: Keep related pipelines, data sources, and schedules together in a logical structure
- **Collaboration**: Share your work with team members and other teams through controlled access
- **Version Control**: Track changes and manage versions of your data transformations over time
- **Deployment**: Move your work from development to production environments systematically

## Project Types

When you create a project in Prophecy, you must choose between two fundamental project types: SQL or Python/Scala. This choice determines the programming language used for your data transformations and the execution environment where your pipelines will run.

:::note
You cannot change your project type after creation. This decision affects the underlying architecture and code generation patterns.
:::

### SQL Projects

SQL projects are designed for users who work primarily with SQL data warehouses and focus on business analytics. Choose SQL if you:

- Are a **business analyst** or **data analyst**
- Use existing SQL warehouses like Databricks SQL or BigQuery
- Focus on transforming data for business intelligence and reporting
- Prefer visual interfaces over writing code
- Benefit from built-in scheduling capabilities and API triggers (Prophecy Automate)

### Python/Scala Projects

Python/Scala projects are designed for users who need more control over data processing and work with distributed computing environments. Choose Python/Scala if you:

- Are a **data engineer** or **platform engineer** building complex data processing systems
- Work with Spark clusters
- Need full control over the code and execution environment
- Use external orchestration tools like Databricks Jobs

:::info
For detailed capabilities and feature comparisons, see [Project Types by Persona](/administration/project-types/project-types.md).
:::

:::note
SQL projects are tied to SQL warehouse providers. For example, you must choose a provider upon project creation, like Databricks. Python/Scala projects, on the other hand, are agnostic and can be run on any Spark cluster (Databricks or Livy for example). However, outcomes may vary -- for example, some gems are only supported on certain Spark versions.
:::

## Project Components

Your project contains different components depending on the type you choose. These components work together to create complete data transformation workflows.

### SQL Project Components

SQL projects organize your work around pipelines that combine SQL transformations with external integrations:

- **Pipelines**: Visual workflows that sequence data transformation steps. Pipelines run in your SQL warehouse for data processing and in Prophecy Automate for external integrations like API calls and email notifications.
- **Gems**: Individual transformation components that you configure visually. Each gem represents a specific data operation like filtering, joining, or aggregating data.
- **Tables**: References to data sources and targets configured through Source and Target gems. These represent the actual tables in your SQL warehouse or other data storage.
- **Schedules**: Automated pipeline execution managed by Prophecy Automate. Schedules allow you to run pipelines at specified intervals without manual intervention.

### Python/Scala Project Components

Python/Scala projects organize your work around pipelines that execute on Spark clusters:

- **Pipelines**: Visual workflows that sequence data transformation steps. Pipelines run on Spark clusters.
- **Gems**: Individual transformation components that you configure visually. Each gem represents a specific data operation that corresponds to Python or Scala code.
- **Datasets**: References to data sources and targets configured through Source and Target gems. These represent the tables or files that you define.
- **Jobs**: Automated pipeline execution managed by external orchestration tools like Databricks Jobs.

:::note
**Prophecy 4.0+**: SQL projects use pipelines as the main transformation entity, which can include both SQL warehouse operations and Prophecy Automate functions like email notifications and API calls.

**Pre-4.0**: SQL projects used models (dbt-based) that only supported SQL warehouse operations. If you're working with an older version, models will be your primary transformation entity.
:::

## Version Control

All projects in Prophecy are automatically compiled into code and hosted on Git for version control. This ensures that every change to your data transformations is tracked, versioned, and can be audited. The version control options available depend on your project type and team requirements.

### Git Repository Options

Projects can be hosted on two types of Git repositories:

| Git Repository Type      | Description                                                                                | Use Case                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Prophecy-managed Git** | Prophecy hosts and manages everything for you. No external Git setup required.             | Teams new to Git or preferring simplified workflows             |
| **External Git**         | Connect to GitHub, GitLab, or Bitbucket. You have full control over repository management. | Teams with existing Git workflows or complex CI/CD requirements |

### Git Storage Models

Projects can leverage different Git storage models depending on your collaboration needs:

| Git Storage Model                       | Description                                                                                                   | Best For                                                      |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **Simple workflow** (SQL projects only) | Simplified save and publish process. Changes are still hosted on Git but abstracted in the project interface. | Data analysts and teams preferring visual workflows           |
| **Normal workflow**                     | Standard Git branching and merging with full control over the development process.                            | Teams comfortable with Git workflows and branching strategies |
| **Fork per user** (External Git only)   | Each user works on their own fork of the repository, enabling isolated development.                           | Large teams requiring strict isolation between developers     |

## Access and Sharing

Projects in Prophecy use a team-based access model that determines ownership and permissions. This model ensures that only authorized users can access and modify your data transformations while enabling controlled collaboration.

### Team Assignment

Each project is associated with a specific team that determines access permissions. The user who creates a project becomes its owner and can assign the project to a team during creation. Team membership grants users the ability to edit project components like pipelines and gems, while project owners retain special privileges such as the ability to release and deploy projects.

When you first start using Prophecy, you are placed in your own personal, one-member team. This setup is ideal for private projects that only you can access. For collaborative work, your team administrator will typically create shared teams that include multiple users.

### Cross-Team Sharing

Projects can be shared with other teams to extend their reach and enable reuse of data transformations:

- **Read-only access**: Users from other teams cannot directly edit the original project's components.
- **Component reuse**: When you share a project and publish it to the Package Hub, users can import the project as a dependency in their own projects. This allows them to use copies of your components without affecting the original.
- **Pipeline execution**: If you share projects containing Prophecy Apps with other teams, users can execute those apps to run pipelines within the shared project. Prophecy Apps are only available for pipelines in SQL projects.

## Project Metadata

The Metadata page in Prophecy provides a comprehensive view of your projects and their components. This centralized directory allows you to search, discover, and manage all projects accessible to your teams. All of your team's projects are visible in the Projects tab of the Metadata page, where you can access detailed information about each project.

You can view and edit the following metadata for projects:

| Metadata            | Description                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| **About**           | An overview of your project and space for an in-depth description of the project.                              |
| **Content**         | A list of entities within the project like pipelines and jobs depending on your project type.                  |
| **Dependencies**    | The dependencies that exist in the project, including packages and Prophecy libraries.                         |
| **Version control** | Either the Git workflow of the project, or the version history of the project, depending on your project type. |
| **Deployments**     | A list of project versions that you have released and/or deployed (published).                                 |
| **Access**          | The teams that can view your project via the Package Hub.                                                      |
| **Settings**        | Different configuration options for building and deploying your project.                                       |

## Common Questions

<details>
<summary>What is a Prophecy for Analysts project?</summary>

Prophecy for Analysts is a project creation template designed specifically for data analysts. When you select this template, Prophecy automatically configures your project with Prophecy-managed Git in Simple mode and initializes it for a Databricks SQL warehouse. This template provides the most streamlined experience for users who primarily work with SQL and prefer visual interfaces over complex Git workflows.

</details>

<details>
<summary>Can I change my project type after creation?</summary>

No, project types cannot be changed after creation. This limitation exists because SQL and Python/Scala projects have fundamentally different architectures and code generation patterns. SQL projects generate dbt models and use Prophecy Automate, while Python/Scala projects generate Spark code and use external orchestration tools.

If you need a different project type, you'll need to create a new project and manually recreate your pipelines. Consider starting with SQL if you're unsure about your requirements, as it provides a gentler learning curve for most analytics work.

</details>

<details>
<summary>When should I use models vs pipelines in SQL projects?</summary>

In Prophecy 4.0+, SQL projects primarily use pipelines as the main transformation entity. Pipelines can include both SQL warehouse operations and Prophecy Automate functions like API calls and email notifications.

Models (dbt-based) are still available for pure SQL transformations that will be orchestrated externally through tools like Databricks Jobs. Use models when you need to integrate with existing dbt workflows or external orchestration systems.

</details>

## What's Next

To continue your journey with Prophecy projects, follow these recommended paths based on your project type:

**For SQL projects:**

- [Create your first pipeline](/analysts/development/pipelines/pipelines.md) to build visual data transformation workflows
- [Set up Prophecy Automate scheduling](/analysts/scheduling) to automate your pipeline execution
- [Build a Prophecy App](/analysts/business-apps/business-apps.md) to create user-friendly interfaces for your data pipelines

**For Python/Scala projects:**

- [Create your first pipeline](/engineers/pipelines) to build Spark-based data processing workflows
- [Set up external orchestration](/engineers/orchestration) to schedule your pipelines with tools like Databricks Jobs
- [Configure Spark fabrics](/administration/fabrics/Spark-fabrics/Fabrics) to connect to your execution environments

**For all projects:**

- [Understand version control](/analysts/version-control/version-control.md) for SQL projects or [Git workflows](/engineers/git) for Python/Scala projects
- [Explore the Package Hub](/engineers/package-hub) to discover reusable components and share your work
- [Follow tutorials](/getting-started/tutorials/tutorials.md) to build complete projects from start to finish
