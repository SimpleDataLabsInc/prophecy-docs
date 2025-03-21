---
title: Pipelines
id: pipelines
description: Use pipelines in SQL projects
tags:
  - SQL
  - pipeline
  - analyst
---

SQL project pipelines utilize the Prophecy runtime and a connected SQL warehouse to perform data ingestion, transformation, and output. You can read and write data directly in your SQL warehouse, or you can read and write to external sources such as Tableau or Salesforce.

To view a list of pipelines in Prophecy, navigate to the **Metadata** page from the left sidebar.

## Pipeline creation

If you want to create a new pipeline, you can do so from the **Create Entity** page in the left sidebar. You can also create pipelines directly within the project editor. The following table describes the parameters for pipeline creation.

| Parameter      | Description                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Pipeline name  | The name that identifies the pipeline.                                                                                                         |
| Directory path | The file path where this pipeline information will be stored in the project Git repository. The default location is the `pipelines` directory. |

## Project editor

When building your pipelines, it helps to be familiar with the project editor interface. The following table describes different areas of the project editor.

### Sidebar

The project sidebar includes:

- **Project Browser:** Allows you to browse through all of your existing pipelines and manage different components of your project, such as gems, tables, and functions.
- **Environment Browser:** Provides access to the various data sources and connections that have been configured in your fabric.

### Canvas

The canvas includes:

- **Canvas:** A workspace where you can add and connect various gems to build your pipeline. It provides a drag-and-drop interface for designing your data flow.
- **Gem Drawer:** A toolbox that contains all the available gems you can use in your pipeline organized by gem category.
- **Run Button:** A button to trigger interactive pipeline execution. This allows you to test and run the pipeline in real-time, making it easier to troubleshoot and verify the pipeline's performance before deployment. To learn more, visit [Execution](/analysts/development/pipelines/execution/#interactive-execution).
- **Copilot:** An AI-powered assistant that helps build your pipeline. Copilot can generate gems for you or fix diagnostic errors, making it easier to create complex workflows.

### Header

The project header includes:

- **Parameters:** Define dynamic pipeline parameters that control how your pipeline behaves.
- **Pipeline Options Menu:** Access various settings and metadata for the pipeline. It allows you to configure things like execution frequency, project dependencies, and other project-specific settings.
- **Visual/Code Toggle:** Switch to the code view to see your visually-developed pipeline compiled into raw code. This view helps users who prefer working with code to understand the underlying logic.
- **Version Menu:** If you create your project using the [simple Git storage model](docs/analysts/version-control/version-control.md), you will see the version menu in the project header. Use this menu to save your project, publish the project, or view project history.

### Footer

The project footer includes:

- **Diagnostics:** Highlights any issues or errors in your pipeline that need attention. It provides detailed feedback on what needs to be fixed to ensure that your pipeline runs successfully.
- **Runtime Logs:** Offers detailed insights into the status and progress of your pipeline executions. They show real-time information, errors, and other diagnostic messages, helping you monitor and troubleshoot the pipeline's performance.
- **Git workflow**. If you create your project using the [normal Git storage model](docs/analysts/version-control/version-control.md), you will see the Git workflow in the project footer.
