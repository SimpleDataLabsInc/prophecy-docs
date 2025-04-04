---
title: Create apps
id: app-creation
slug: /analysts/create-business-applications
draft: true
description: Build applications make pipelines accessible
tags: []
---

Business applications in Prophecy enable teams to create interactive and reusable workflows that simplify data processing. More specifically, these applications allow users to parameterize pipelines, interact with data, and schedule pipeline runs without modifying the underlying pipeline logic.

When creating a business application, it is essential to structure it using [pipeline parameters](docs/analysts/development/pipelines/pipeline-params.md). Pipeline parameters allow applications to dynamically adjust values during execution. When you add interactive components to your business apps, users can define the values of these parameters while keeping the rest of the pipeline unchanged.

This guide walks you through the process of creating, configuring, and publishing an app to the App Directory.

---

## Example: Filter web traffic data

This example demonstrates the essential functionality of a business application using a pipeline which:

- Ingests web traffic data from Databricks.
- Filters the data by device type (desktop, mobile, or tablet).
- Saves the filtered data to a table.

<!-- ![App pipeline](img/app-pipeline.png) -->

Using this pipeline, you'll learn how to create a business application where users can:

- Upload their own data as a pipeline source.
- Filter the data based on device type.
- Preview the output data.

### Configure the pipeline

To build the application, configure [pipeline parameters](docs/analysts/development/pipelines/pipeline-params.md). These parameters enable dynamic behavior within the pipeline.

#### Create a pipeline parameter

Pipeline parameters are scoped per pipeline. Follow these steps to create a new parameter:

1. Open the pipeline that will be used for the app.
1. Click **Config** in the project header.
1. Select **+ Add Parameter**.
1. Name the parameter `DeviceType`.
1. Set the parameter type to `string`.
1. Click **Select expression > Value**.
1. Enter `Desktop` as the default value to be used during [interactive pipeline runs](docs/analysts/development/pipelines/execution.md).
1. Click **Save**.

The default parameter value can be overridden when you create the business app.

#### Apply the parameter in a Filter gem

To use the parameter in the pipeline:

1. Open the **Filter** gem.
1. Stay in the **Visual** view.
1. Remove the hardcoded `desktop` value in the filter expression.
1. Click **Select expression > Configuration Variable**. This will show a list of available pipeline parameters.
1. Choose **DeviceType**.

Now, the filter condition dynamically applies based on the value of the parameter.

### Create a new business app

Business applications are created directly within a project.

1. In the project browser, hover over **Apps** and click the **+** icon.
1. Fill in the required fields.
   - **App name**: Enter a name for the application.
   - **Description**: Provide a description.
   - **Pipeline name**: Select the pipeline that the app will run.
   - **Directory path**: Define where the app code will be stored.
1. Click **Create App** to open the App Builder.

### Add components

Use components to define the business application's interface. For a full list of components and their attributes, visit [App components](/analysts/business-application-components).

#### Add a Text component

First, add a Text component that will be the title of your business app.

1. Open the **Content** dropdown and select **Text**.
1. In the **Inspect** tab of the right sidebar, enter `Filter Web Traffic` as the component text.
1. Choose **Heading 1** as the text format.

#### Add a File Upload component

Next, add a component where users can upload their own data.

1. Open the **Data Integration** dropdown and select **File Upload**.
1. In the **Inspect** tab, for the **Source component**, choose the Source gem that the uploaded data will override.

If no file is uploaded, the pipeline uses the default source data configured in the Source gem.

#### Add a Dropdown component

Let's add a Dropdown component to let the user choose how to filter the data.

1. Open the **Interactive** dropdown and select **Dropdown**.
1. In the **Inspect** tab, for the **Configuration field**, select **DeviceType**. This is the pipeline parameter.
1. For the **Label**, enter a descriptive label.
1. Next to **Options**, click **+** to add selectable values (`desktop`, `mobile`, `tablet`).

#### Add a Data Preview component

Users that run the business app should be able to view and download the output data.

1. Open the **Data Integration** dropdown and select **Data Preview**.
1. In the **Inspect** tab, select the pipeline's output table.
1. For the **Label**, enter a descriptive label.

### Publish

Once the application is complete, publish it to make it accessible.

1. Open any pipeline within the project.
1. In the project header, next to **Save to Draft**, click the dropdown arrow.
1. Select **Publish new version**.
1. Review Copilot's description of your changes and click **Save**.
1. Enter a description for the new published version.
1. Leave the **Select the fabric(s) to publish** field blank, as business apps do not require deployment.
1. Click **Publish**.

The application is now available in the App Directory.

### Share with other teams

To grant other teams access to run the business application:

1. Open the **Metadata** page in the left navigation bar.
1. Locate and open the project metadata.
1. Navigate to the **Access** tab.
1. In the **Teams** dropdown, select the team to share the project with.
1. Click **Send Invitation**.

The selected team can now run the business application but cannot edit the project.
