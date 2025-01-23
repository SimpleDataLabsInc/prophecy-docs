---
title: Pipelines
id: pipeline
description: Flows that represent the data journey
sidebar_position: 1
tags:
  - concepts
  - pipelines
---

Pipelines are groups of data transformations that you can build from a **visual** or **code** interface. When using the visual interface, each component of a pipeline is automatically compiled into code that you can reuse and customize.

Under the hood, pipelines are based on Spark-native code. pipelines are ideal for Spark environments like Databricks or EMR, particularly for tasks such as complex data ingestion (e.g., loading data from Salesforce or JDBC), handling advanced data transformations (e.g., working with complex data types), and supporting machine learning workflows.

## Actions

- To view a list of pipelines in Prophecy, navigate to the **Metadata** page from the left sidebar.
- To create a new pipeline, navigate to the **Create Entity** page from the left sidebar.

## Parameters

| Field       | Description                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project     | The project to create the pipeline in. This controls access to the pipeline, groups pipelines together, and lets you use datasets in the project. |
| Branch      | The Git branch to use for pipeline development.                                                                                                   |
| Name        | The name of the pipeline.                                                                                                                         |
| Mode        | Whether the pipeline will be Batch mode or Streaming.                                                                                             |
| Description | A field to describe the purpose of the pipeline.                                                                                                  |

## Edit a pipeline

When editing a pipeline, you'll be using the editor shown below.

![Editing a pipeline](img/pipelines/edit_pipeline.png)

1. **Pipeline Config**: Buttons that bring up views related to the configuration of your pipeline:
   1. [Config](/docs/Spark/configuration.md)
   2. Scheduling
   3. Unit Tests
   4. UDFs/UDAFs
   5. Dependencies
   6. Spark Version
   7. Visual Language
2. **View switch**: Switch between the Visual view and Code view. The generated code will only update if there are no errors detected in the Visual view.
3. **Fabric switch**: Select the [fabric](/docs/concepts/fabrics/fabrics.md) to use during development; start a new cluster or connect to an existing one.
4. **Gem drawer**: Click to select a category, then click on the gem you wish to insert into the editor. See [here](./gems.md) for more information on the gems.
5. **Workspace**: Everything in the middle of the view is the _Workspace_. This is where you'll create and manipulate the gems that make up this pipeline.
6. **Git status**: In Prophecy almost everything is stored in Git, and this is where you can interact with the version control for your pipeline. See [Projects & Git](/docs/concepts/project/project.md) for more information.
7. **Run**: If you just want to run your pipeline from start to finish, click this button.

## What's next

Visit the [Spark](/Spark) documentation to learn more, or view how to use [Spark with Databricks](/docs/tutorials/end-to-end/getting-started-with-low-code-spark.md).
