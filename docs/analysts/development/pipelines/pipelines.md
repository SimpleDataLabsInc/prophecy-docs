---
title: Pipelines
id: pipelines
slug: /analysts/pipelines
description: Use pipelines in SQL projects
tags:
  - SQL
  - pipeline
  - analyst
---

In Prophecy, data pipelines are designed to facilitate efficient data movement and transformation. In SQL projects, these pipelines execute within a [Prophecy fabric](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md) that orchestrates operations using [Prophecy Automate](/analysts/pipeline-execution) in conjunction with your chosen SQL warehouse.

## Pipeline creation

To create a new pipeline, navigate to the **Create Entity** page in the left sidebar. You can also create pipelines directly within an open project.

The following table describes the parameters you must provide when you create a pipeline.

| Parameter      | Description                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project        | The project where the pipeline will live.                                                                                                          |
| Pipeline name  | The name that identifies the pipeline.                                                                                                             |
| Directory path | The file path where this pipeline information will be stored in the project Git repository.<br/>The default location is the `pipelines` directory. |

## Project editor

When you build a pipeline, it helps to be familiar with the project editor interface. The following sections describe each area of the project editor.

### Sidebar

The project sidebar includes the following elements:

| Element                 | Description                                                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project Browser**     | Allows you to browse through all of your existing pipelines and manage different components of your project, such as gems, tables, and functions. |
| **Environment Browser** | Provides access to the various data sources and connections that have been configured in your fabric.                                             |

### Canvas

The canvas includes the following elements:

| Element        | Description                                                                                                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Canvas**     | A workspace where you can add and connect various gems to build your pipeline.<br/>It provides a drag-and-drop interface for designing your data flow.                                                                                                                            |
| **Gem Drawer** | A toolbox that contains all the available gems, organized by gem category, that you can use in your pipeline.                                                                                                                                                                     |
| **Run Button** | A button to trigger interactive pipeline execution.<br/>This allows you to test and run the pipeline in real-time, which makes it easier to troubleshoot and verify the pipeline's performance before deployment. To learn more, visit [Execution](/analysts/pipeline-execution). |
| **Copilot**    | An AI-powered assistant that helps build your pipeline.<br/>Copilot can generate gems for you or fix diagnostic errors, making it easier to create complex workflows.                                                                                                             |

### Header

The project header includes the following elements:

| Element                   | Description                                                                                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Config**                | Settings where you define dynamic pipeline parameters that control how your pipeline behaves at runtime.                                                                                                                                                            |
| **Pipeline Options Menu** | Accesses various settings and metadata for your pipeline.<br/>It allows you to configure things like execution frequency, project dependencies, and other project-specific settings.                                                                                |
| **Visual/Code Toggle**    | Switch to the code view to see your visually-developed pipeline compiled into raw code.<br/>This view helps users who prefer working with code to understand the underlying logic.                                                                                  |
| **Version Menu**          | If you create your project using the [simple Git storage model](docs/analysts/version-control/version-control.md), you will see the version menu in the project header.<br/>Use this menu to save your project, publish your project, or view your project history. |

### Footer

The project footer includes the following elements:

| Element          | Description                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Diagnostics**  | Highlights any issues or errors in your pipeline that need attention.<br/>It provides detailed feedback on what needs to be fixed to ensure that your pipeline runs successfully.                                                   |
| **Runtime Logs** | Offers detailed insights into the status and progress of your pipeline executions.<br/>They show real-time information, errors, and other diagnostic messages, which helps you monitor and troubleshoot the pipeline's performance. |
| **Git Workflow** | If you create your project using the [normal Git storage model](docs/analysts/version-control/version-control.md), you will see the Git workflow in the project footer.                                                             |
