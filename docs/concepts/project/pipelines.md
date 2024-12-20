---
title: "Pipelines"
id: pipeline
description: Spark Pipelines represent the data journey and can define multiple targets.
sidebar_position: 1
tags:
  - concepts
  - pipelines
---

Pipelines are based on Spark-native code, allowing users to utilize Spark's capabilities for data transformations. They are ideal for Spark environments like Databricks or EMR, particularly for tasks such as complex data ingestion (e.g., loading data from Salesforce or JDBC), handling advanced data transformations (e.g., working with complex data types), and supporting machine learning workflows.

## Actions

- To view a list of Pipelines in Prophecy, navigate to the **Metadata** page from the left sidebar.
- To create a new Pipeline, navigate to the **Create Entity** page from the left sidebar.

## Parameters

| Field       | Description                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project     | The Project to create the Pipeline in. This controls access to the Pipeline, groups Pipelines together, and lets you use Datasets in the project. |
| Branch      | The Git branch to use for Pipeline development.                                                                                                   |
| Name        | The name of the Pipeline.                                                                                                                         |
| Mode        | Whether the Pipeline will be Batch mode or Streaming.                                                                                             |
| Description | A field to descibe the purpose of the Pipeline.                                                                                                   |

## Edit a Pipeline

When editing a Pipeline, you'll be using the editor shown below.

![Editing a Pipeline](img/pipelines/edit_pipeline.png)

1. **Pipeline Config**: Buttons that bring up views related to the configuration of your Pipeline:
   1. [Config](/docs/Spark/configuration/configuration.md)
   2. Scheduling
   3. Unit Tests
   4. UDFs/UDAFs
   5. Dependencies
   6. Spark Version
   7. Visual Language
2. **View switch**: Switch between the Visual view and Code view. The generated code will only update if there are no errors detected in the Visual view.
3. **Fabric switch**: Select the [Fabric](/docs/concepts/fabrics/fabrics.md) to use during development; start a new cluster or connect to an existing one.
4. **Gem drawer**: Click to select a category, then click on the Gem you wish to insert into the editor. See [here](./gems.md) for more information on the Gems.
5. **Workspace**: Everything in the middle of the view is the _Workspace_. This is where you'll create and manipulate the Gems that make up this Pipeline.
6. **Git status**: In Prophecy almost everything is stored in Git, and this is where you can interact with the version control for your Pipeline. See [Projects & Git](/docs/concepts/project/project.md) for more information.
7. **Run**: If you just want to run your Pipeline from start to finish, click this button.

## What's next

Visit the [Spark](/Spark) documentation to learn more, or view how to use [Spark with Databricks](/docs/getting-started/getting-started-with-low-code-spark.md).
