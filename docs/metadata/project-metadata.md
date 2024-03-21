---
title: Project Metadata
id: Project Metadata
description: Find items you need in your projects
sidebar_position: 1
tags:
  - metadata
  - Project
---

Prophecy's [Metadata](https://app.prophecy.io/metadata/entity/user) page provides a searchable directory of Projects and Project components including Pipelines, Models, and Jobs. We can also see Teams and importantly [Fabrics](/docs/concepts/fabrics/fabrics.md).

![Project Metadata](./img/project_metadata_1.png)

Typically a Team Administrator will setup Fabrics and each user will enter their own token to use the Fabric. Once your Administrator has setup [Spark Fabrics](/docs/low-code-spark/fabrics/fabrics.md), SQL Fabrics, or [Airflow Fabrics](/docs/low-code-jobs/airflow/setup/setup.md), then each Project can access data sources via the relevant Fabric. Notice the language Type is shown for each Fabric. SQL Projects can use SQL and Airflow fabrics. Python (and Scala) Projects can use Spark and Airflow Fabrics. Clicking on the Projects tab reveals all the projects my user has permission to view. Notice the **Language** is shown for each Project; this is the language for the output code on that Project.

![Project Metadata SQL](./img/project_metadata_2.png)

Projects are owned by Teams. A user would be a member of their own personal team as well as any Teams to which they have been added. The image above shows Projects owned by the user's personal team because the user has not been added to any other teams. There are Python and SQL projects shown here, and Prophecy also supports Scala projects. Clicking on a Project reveals Metadata specific to that Project.

### Project Content

The **About** tab displays the Project's language and description. Switch between the various Metadata views available for these Projects. Let's take a look at the **Content** tab.

![Project Metadata Python](./img/project_metadata_4.png)

Here we can search for the entities within this Project. Where SQL Projects capture a series of Data Transformation steps using **Models**, Python and Scala Projects use **Pipelines**. All Projects contain Jobs for scheduling the Models or Pipelines. SQL Projects have a few more items, including **Seeds** for defining starter datasets.

### Project Dependencies

Each Project can re-use logic from other projects and avoid code duplication. The Dependencies tab shows the Packages that the current Project is re-using. Read more about Packages and Dependencies [here](/docs/package-hub/package-builder/package-builder.md), including how to [Use a package](/docs/package-hub/package-hub.md#use-a-package) or even [build your own](/docs/package-hub/package-hub.md#build-a-package)!

### Project Commits

The `Commits` tab on the [Project Metadata](#project-metadata) page shows the current Git state of the project and allows you to step through the process of committing, merging, and releasing your chanages. For a walkthrough of the different phases of comitting a project, see [this page](/docs/concepts/project/project.md#3-integrate-changes).

### Project Releases and Deployments

This tab displays the history of released projects and deployed jobs. Click [here](/docs/deployment/deployment.md#releases-and-deployment-history) to learn more.
