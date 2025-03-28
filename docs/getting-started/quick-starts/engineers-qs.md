---
title: Quick start for Engineers
id: engineers-qs
slug: /engineers/quick-start
description: Create a Spark pipeline with Prophecy's visual interface
tags:
  - Spark
  - quick start
  - onboarding
---

Follow this 15 minute quick start to learn how to create a Spark pipeline with Prophecy's visual interface.

## Objectives

In this quick start, you will:

- Create a new project and attach a fabric.
- Develop a pipeline with a source and a transformation.
- Run the pipeline interactively.
- Save your changes.

## Prerequisites

To complete this quick start, you need:

- A configured [fabric](docs/getting-started/concepts/fabrics.md) (your execution environment).

If you need a fabric, you have a few options:

- Create a fabric that connects to [Prophecy-managed Databricks](docs/administration/fabrics/Spark-fabrics/prophecy-managed.md). Free trial users will automatically have this fabric.
- Ask a [team admin](docs/administration/teams-users/teamuser.md) to create a fabric for you that connects to an existing external Spark engine.

## Create a project

1. Click on the **Create Entity** button in the left navigation bar.
1. Hover over the **Project** tile and select **Create**.
1. Give your project a name.
1. Under **Team**, select your personal team. (It will match your individual user email.)
1. Under **Select Template**, choose **Custom**.
1. For the **Project Type**, choose **Spark/Python (PySpark)**.
1. Click **Continue**.
1. Under **Connect Git Account**, select **Prophecy Managed Git Credentials**.
1. Click **Continue**.
1. Take a brief look at the default project packages, and then click **Complete**.

Your project is ready! Click **Create Pipeline** to open your first pipeline configuration.

## Build a pipeline

Let's set up the pipeline.

1. Ensure the pipeline links to the correct project.
1. Create a new development branch called `devQS`. Your pipeline will not appear in the `main` branch until you merge your changes.
1. Name your pipeline `weather`.
1. Leave the default **Batch** processing mode.
1. Click **Create New**.

Prophecy will open the pipeline canvas for your new pipeline in the project editor. Before moving on, you must attach to a Spark cluster.

1. In the project header, click **Attach a cluster**.
1. Choose an appropriate fabric to connect you to the Spark environment.
1. Select an existing cluster, or create a new one. New clusters may take a few minutes to start up.

:::info
If you have trouble attaching a cluster, you might not have the right permissions to access or create a cluster in your external Spark environment.
:::

### Add a source

For this quick start, you'll create a [Seed](docs/Spark/gems/source-target/file/seed.md) as the data source.

1. Open the **Source/Target** gem category.
1. Click **Source**. This adds a new Source gem to the canvas.
1. Hover over the gem and click **Open**.

Fill in the gem configuration.

1. Select **+ New Dataset**.
1. Name the dataset `weather_forecast`.
1. In the **Type & Format** tab, select the **Seed** type.
1. In the **Data** tab, paste the following data provided in CSV format. Then, click **Next**.

```csv
DatePrediction,TemperatureCelsius,HumidityPercent,WindSpeed,Condition
2025-03-01,15,65,10,Sunny
2025-03-02,17,70,12,Cloudy
2025-03-03,16,68,11,Rainy
2025-03-04,14,72,9,Sunny
2025-03-05,18,60,13,Windy
2025-03-06,19,58,14,Cloudy
2025-03-07,21,55,16,Rainy
2025-03-08,20,57,15,Sunny
2025-03-09,22,50,18,Windy
2025-03-10,23,48,20,Cloudy
```

Now, let's make sure the data is properly loaded. Because the copy-pasted data is standard CSV format, the pre-configured properties in the **Properties** tab are correct. Because of this, Prophecy will know how to infer the schema of the data.

1. Click the **Infer Schema** button.
1. Review the inferred schema. Depending on your Spark engine, you might see different inferred types.
1. If the **DatePrediction** column is assigned a `string` type, change the type to `date`.
1. Enable the **Enforce specified or inferred schema** checkbox to enforce this change downstream.
1. Optional: Click on the **Copilot** icon to generate metadata descriptions of each column.
1. Click **Next**.
1. Click **Load Data** to preview the data in tabular format.
1. Click **Create Dataset** to save your seed as a dataset.

### Add a reformat transformation

Now, you'll configure your first data transformation using the [Reformat](docs/Spark/gems/transform/reformat.md) gem.

1. From the **Transform** gem category, add a **Reformat** gem to your canvas.
1. Drag the Reformat gem near your Table gem to auto-connect them.
1. Open the Reformat gem configuration.
1. Notice that the first input port **in0** displays your table and its schema.
1. Hover over your table name, and click **Add 5 columns**.

When you add columns to the **Target Columns** of a gem, Prophecy includes the columns in the output of the gem. Currently, this configuration would have the gem return **the same table that was passed in**. Let's apply a few transformations.

1. Change the **WindSpeed** target column name to `WindSpeedKMH`. This renames the column.
1. Add a new target column called `TemperatureFahrenheit`.
1. Next to the new target column, write the expression `(((TemperatureCelsius * 9.0D) / 5.0D) + 32)` to convert the temperature into Fahrenheit. If your column name is descriptive, Copilot will write an expression for you.
1. After configuring the expression, click **Save**.

:::note
By default, gem expressions expect Spark SQL code.
:::

## Generate data previews

At this point, you may be curious to know what your data looks like. Generate [data previews](docs/Spark/data-explorer/data-explorer.md) with the following steps:

1. Click the play button in the bottom right corner of the canvas.
1. As the pipeline runs, preview icons should appear as gem outputs.
1. Click on the Reformat output to preview the data in the Data Explorer.

## Save the pipeline

In a real-world situation, your pipeline would be much more complex. Typically, pipelines require multiple transformation steps and send data to external outputs. For the purposes of this tutorial, we will save the pipeline as-is.

1. In the project footer, click **Commit Changes**. This opens the Git workflow dialog.
1. Review the commit history on the left side. You should only see the initial project commit at this point.
1. Review the entities changed in this commit on the right side. You should see the new **weather** pipeline and **weather_forecast** dataset.
1. Verify or update the Copilot-generated commit message that describes these changes.
1. Click **Commit**.

Now, you'll be able to view this commit in the branch history. Feel free to continue in the Git workflow diagram to merge these changes into the `main` branch.

## What's next

Continue your Prophecy learning journey:

- Try our [end-to-end tutorial](docs/getting-started/tutorials/spark-with-databricks.md) on the project lifecycle in Prophecy
- Discover the different [Spark gems](docs/Spark/gems/gems.md) that you can use for data transformation
- [Reach out to us](docs/getting-help/getting-help.md) if you need additional help or guidance
