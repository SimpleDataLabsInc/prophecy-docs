---
title: Project Lifecycle for Analysts
id: sql-with-prophecy
slug: /analysts/project-lifecycle
description: Getting started with a SQL project
tags:
  - SQL
  - tutorial
---

To become more familiar with the end-to-end workflow for data analysts in Prophecy, complete this tutorial!

## Objectives

- Create a Prophecy fabric.
- Create a new SQL project.
- Develop a pipeline using various data sources and transformations.
- Save and publish the project.
- Create a schedule.

## Requirements

- Prophecy 4.0+
- A Databricks or Snowflake SQL warehouse

## Create a fabric

1. Open Prophecy.
1. Click on the **Create Entity** button in the left navigation bar.
1. Select the **Fabric** tile.
1. Give the fabric any name, like `SQLPipelineTutorial`.
1. Select the team that will be able to use the fabric. For this tutorial, you might want to select your personal team. (It will match your individual user email.)
1. Click **Continue**.

Next, you'll configure the Provider type.

1. Choose **Prophecy** as the Provider Type. This will enable the use of Prophecy Automate.
1. Select your SQL provider (either Snowflake or Databricks).
1. Click **Continue**.

In the Connections page, you'll add your SQL warehouse credentials.

1. Click **+ Connect SQL Warehouse**.
1. Name the connection.
1. Verify that the connection type matches your SQL provider.
1. Enter the **JDBC URL**. It will look something like `jdbc:databricks://<server-hostname>:443;httpPath=<http-path>[;<setting1>=<value1>;<settingN>=<valueN>]`.
1. Enter the **Catalog** that will be used for target tables.
1. Enter the **Schema** that will be used for target tables.
1. Choose the appropriate **Authentication method**.
1. Prophecy will automatically test the connection to validate it.
1. **Save** the connection.

## Create a project

1. Once again, click on the **Create Entity** button in the left navigation bar.
1. Hover over the **Project** tile and select **Create**.
1. Give your project a name.
1. Select the team that will have access to your project. Again, you might want to use your personal team.
1. Select the **Prophecy for Analysts** template.
1. Click **Complete**.

This will open your new project. You will be prompted to select a fabric to continue.

1. Choose the fabric that you created in the previous section.
1. Click **Save**.

## Add pipeline

Now, you'll need to add your first pipeline to this project!

1. Hover **Pipelines** in the left sidebar.
1. Click on the **plus** sign.
1. Name your pipeline.
1. Keep the default directory path.
1. Click **Create**.

## Add source

1. Create seed.

## Save your work

1. Save draft.

## Transform the data

1. Add aggregate gem.

## Publish your project

1. Save draft.
1. Publish project.

## Schedule pipeline runs

1. Create schedule.
1. Use fabric that you published to.

## What's next

To make pipeline development even easier, add connections to browse through your different external data sources. To create more complex pipelines, review the list of gems that are available to you and try them out!
