---
title: Quick start for Analysts
id: analysts-qs
slug: /analysts/quick-start
description: Create a pipeline with Prophecy for Analysts
tags:
  - SQL
  - quick start
  - onboarding
---

Follow this 15 minute quick start to learn how to create a pipeline in a [Prophecy for Analysts](/templates) project.

## Objectives

In this quick start, you will:

- Create a new project and attach a fabric.
- Develop a pipeline with a source and a transformation.
- Run the pipeline interactively.
- Save your changes.

## Prerequisites

To complete this quick start, you need:

- Prophecy 4.0 or later.
- A [Prophecy fabric](docs/core/prophecy-fabrics/prophecy-fabrics.md) with a Databricks SQL Warehouse Connection (your execution environment).

If you need a fabric, you have a few options:

- Sign up for Prophecy via [Databricks Partner Connect](/databricks-partner-connect).
- Ask a [team admin](/teams) to create a fabric for you that connects to an existing external SQL warehouse.

## Create a project

First, you need to create the project where you will build your pipeline.

1. Click on the **Create Entity** button in the left navigation bar.
1. Hover over the **Project** tile and select **Create**.
1. Give your project a name.
1. Under **Team**, select your personal team. (It will match your individual user email.)
1. Under **Select Template**, choose **Prophecy for Analysts**.
1. Click **Complete**.

Prophecy will open the project editor, and you will be prompted to select a fabric.

1. From the dropdown, select a fabric.
1. Click **Save**.

You may need to verify your credentials for the external SQL warehouse defined in the fabric.

## Build a pipeline

Let's add a pipeline component to the project.

1. On the project landing page, click **Create Pipeline**.
1. For the **Pipeline Name**, enter `weather`.
1. Leave the default directory path `pipelines`. This is where your compiled pipeline code will be stored in the backend.
1. Click **Create**.

### Add a source

For this quick start, you'll create a [Seed](/analysts/databricks-table#seeds) as the data source.

1. Open the **Source/Target** gem category.
1. Click **Table**. This adds a new Table gem to the canvas.
1. Hover over the gem and click **Open**.

Fill in the gem configuration.

1. Select **+ New Table**.
1. For the Type and Format, choose **Seed**.
1. Name the seed `weather_forecast`.
1. For the Seed path, choose `seeds`. This is the directory where the seed is saved in the backend.
1. Click **Next**.
1. In the **Properties** tab, paste the following data provided in CSV format. Then, click **Next**.

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

Finally, you can preview the data in tabular format, then click **Save**.

### Add a reformat transformation

Now, you'll configure your first data transformation using the [Reformat](/analysts/reformat) gem.

1. From the **Prepare** gem category, add a **Reformat** gem to your canvas.
1. Drag the Reformat gem near your Table gem to auto-connect them.
1. Open the Reformat gem configuration.
1. Notice that the first input port **in0** displays your table and its schema.
1. Hover over your table name, and click **Add 5 columns**.

When you add columns to the **Target Columns** of a gem, Prophecy includes the columns in the output of the gem. Currently, this configuration would have the gem return **the same table that was passed in**. Let's apply a few transformations.

1. Change the **WindSpeed** target column name to `WindSpeedKMH`. This renames the column.
1. Add a new target column called `TemperatureFahrenheit`.
1. Next to the new target column, click **Select Expression**. You have a few options here:
   - Click **Ask AI** and write a prompt like: `Convert the TemperatureCelsius column to Fahrenheit`.
   - Use the **Function** option to configure the conversion visually.
   - Choose **Custom Code** and type the following expression: `(TemperatureCelsius * 9 / 5) + 32`.
1. After configuring the expression, click **Save**.

## Generate data previews

At this point, you may be curious to know what your data looks like. Generate [data previews](/analysts/data-explorer) with the following steps:

1. Click the play button in the bottom right corner of the canvas.
1. As the pipeline runs, preview icons should appear as gem outputs.
1. Click on the Reformat output to preview the data in the Data Explorer.

## Save the pipeline

In a real-world situation, your pipeline would be much more complex. Typically, pipelines require multiple transformation steps and send data to external outputs. For the purposes of this tutorial, we will save the pipeline as-is.

1. In the project header, select **Save to Draft**.
1. Give your saved version a description like `Reformat weather data`.
1. Review the **Changes since last saved**. You will see the two components you created: a pipeline and a Seed table.
1. Toggle **Show changed files** to view the files that will be changed in the backend.
1. Click **Save**.

Now, you will be able to view this version of the pipeline in the project [version history](/analysts/versioning).

## What's next

Continue your Prophecy learning journey:

- Try our [end-to-end tutorial](/analysts/project-lifecycle) on the project lifecycle in Prophecy
- Discover the different [gems](/analysts/gems) that you can use for data transformation
- [Reach out to us](docs/getting-started/getting-help/getting-help.md) if you need additional help or guidance
