---
title: Project lifecycle for Analysts
id: sql-with-prophecy
slug: /analysts/project-lifecycle
description: Getting started with a SQL project
tags:
  - SQL
  - tutorial
---

To become more familiar with the end-to-end workflow for data analysts in Prophecy, complete this tutorial!

## Objectives

In this tutorial, you will:

- Create a Prophecy fabric and a new SQL project.
- Develop a pipeline using various data sources and transformations.
- Create a schedule to run the pipeline on a regular basis.
- Save and publish the project.
- Review your deployed projects and pipelines.

## Requirements

For this tutorial, you will need:

- Prophecy 4.0 or later.
- A Databricks or Snowflake SQL warehouse.

## Create a fabric

Before you can work on a project, you need to configure where that project will be computed. For this tutorial, you will use a Prophecy fabric to let you run pipelines in Prophecy Automate and your own SQL warehouse.

1. Open Prophecy.
1. Click on the **Create Entity** button in the left navigation bar.
1. Select the **Fabric** tile.
1. Give the fabric any name, like `SQLPipelineTutorial`.
1. Select the team that will be able to use the fabric. For this tutorial, you might want to select your personal team. (It will match your individual user email.)
1. Click **Continue**.

Next, you'll configure the **Provider**.

1. Choose **Prophecy** as the Provider Type. This will enable the use of Prophecy Automate.
1. Select your SQL provider (either Snowflake or Databricks).
1. Click **Continue**.

In the **Connections** page, you'll add your SQL warehouse credentials.

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

Now that you have a fabric, create a new project.

1. Click on the **Create Entity** button in the left navigation bar.
1. Hover over the **Project** tile and select **Create**.
1. Give your project a name.
1. Select the team that will have access to your project. Again, you might want to use your personal team.
1. Select the **Prophecy for Analysts** template.
1. Click **Complete**. This will open your new project.
1. You will be prompted to select a fabric to continue. Choose the fabric that you created in the previous section.
1. Click **Save**.

## Build a pipeline

In this step, you'll add your first pipeline to this project!

1. Hover **Pipelines** in the left sidebar.
1. Click on the **+** icon.
1. Name your pipeline.
1. Keep the default directory path.
1. Click **Create**.

### Add source data

At this point, the pipeline canvas is empty. Let's add some gems! To begin, you'll create a [Seed](/analysts/databricks-table#seeds) as the data source.

1. Open the **Source/Target** gem category.
1. Click **Table**. This adds a new Table gem to the canvas.
1. Hover over the gem and click **Open**.

Fill in the gem configuration.

1. Select **+ New Table**.
1. For the Type and Format, choose **Seed**.
1. Name the seed `web_traffic`.
1. For the Seed path, choose `seeds`. This is the directory where the seed is saved in the backend.
1. Click **Next**.
1. In the **Properties** tab, paste the following data provided in CSV format. Then, click **Next**.

```csv
timestamp,page_url,referrer,device,location,session_duration,bounce_rate
2024-02-09,/home,linkedin.com,desktop,India,489,1
2024-01-16,/about,direct,mobile,UK,204,0
2024-02-27,/blog,twitter.com,desktop,Canada,542,1
2024-02-12,/blog,direct,desktop,Germany,201,1
2024-01-06,/products,facebook.com,mobile,USA,529,1
2024-01-21,/about,facebook.com,desktop,Germany,308,1
2024-02-11,/about,google.com,mobile,USA,465,1
2024-02-25,/home,linkedin.com,desktop,USA,152,1
2024-02-10,/products,linkedin.com,mobile,USA,573,0
2024-01-25,/contact,direct,desktop,USA,162,0
2024-02-09,/contact,google.com,mobile,UK,355,1
2024-01-17,/about,google.com,tablet,Canada,317,0
2024-02-02,/home,linkedin.com,tablet,USA,79,0
2024-01-05,/home,direct,desktop,Germany,51,1
2024-01-08,/home,direct,desktop,USA,451,0
2024-02-21,/about,facebook.com,desktop,Canada,325,0
2024-02-17,/home,facebook.com,mobile,India,583,0
2024-01-10,/contact,linkedin.com,desktop,Germany,565,1
2024-02-12,/blog,facebook.com,tablet,Canada,70,1
2024-01-30,/about,facebook.com,mobile,India,174,1
```

Finally, you can preview the data in tabular format, then click **Save**.

### Transform the data

Now, you'll configure your first data transformation using the [Aggregate](/analysts/aggregate) gem.

1. From the **Transform** gem category, add a **Aggregate** gem to your canvas.
1. Drag the Transform gem near your Table gem to auto-connect them.
1. Open the Transform gem configuration.
1. In the **Group By Columns** tile, add the **page_url** column as an expression.
1. In the **Expressions** tile, add three target columns:
   - **page_url**. This column will contain the original page URL.
   - **page_url_count**. This column will contain the count of records in the table per URL.
   - **page_average_session**. This column will contain the average session time users spent per page.

#### Define the aggregations

There are a few ways to define the expression for each target column.

- Use the visual expression builder in the **Visual** view.
- Switch to the **Code** view and write SQL expressions.
- Ask Copilot to write your expression in either view.

The following table shows how to write expressions for this example.

| Target Column    | Expression (Visual)                                                                             | Expression (Code)       |
| ---------------- | ----------------------------------------------------------------------------------------------- | ----------------------- |
| page_url         | Click **Column > page_url**.                                                                    | `page_url`              |
| page_url_count   | Click **Function > count**. Then, click **Column > page_url** inside the visual function.       | `count(page_url)`       |
| page_avg_session | Click **Function > avg**. Then, click **Column > session_duration** inside the visual function. | `avg(session_duration)` |

### Generate data previews

At this point, you may be curious to know what your data looks like. Generate [data previews](/analysts/data-explorer) with the following steps:

1. Click the play button in the bottom right corner of the canvas.
1. As the pipeline runs, preview icons should appear as gem outputs.
1. Click on the Aggregate output to preview the data in the Data Explorer.

### Write the data

The final step in the pipeline captures the output data. Follow these steps to write the data to the SQL warehouse:

1. From the **Source/Target** gem category, add a **Table** gem to your canvas.
1. Drag the Table gem near the Aggregate gem’s output to auto-connect them.
1. Open the Table gem configuration.

Unlike the previous step where we configured the table as a seed, we will now set this target as a table.

1. Select **+ New Table**.
1. Set the **Type and Format** to **Table**, then click **Next**.
1. Choose a location for the table based on your SQL connection. You can select an existing table or create a new one.
1. Click **Next**, review the table schema, then click **Next** again.
1. In the **Write Options** tab, set **Write Mode** to **Overwrite** to replace the table each time the pipeline runs.
1. Click **Next** and then **Load Data** to preview a sample of the target data.

## Schedule pipeline runs

Assume you want to process new web traffic data every day. Create a schedule that runs every morning to integrate and process new data from the previous day.

1. Expand the **Options** (ellipses) menu in the project header.
1. Click **Schedule**.
1. Fill in the following parameters.
   - **Frequency:** Daily
   - **Repeat at:** `6:00 AM`
   - **Timezone:** Keep the default (the timezone of your current location)
1. Click **Schedule** to save the schedule.

Even though schedules are enabled by default, they do not begin to run until the project is published. You don't want to run schedules in production on a draft project! We will save and publish the project in the following sections.

## Save your work

You want to periodically save your work in logical stages. To do so:

1. In the project header, select **Save to Draft**.
1. Give your saved version a description like `Aggregate daily web traffic data`.
1. Review the **Changes since last saved**. You will see the new pipeline and tables you created.
1. Toggle **Show changed files** to view the files that will be changed in the backend.
1. Click **Save**.

Now, you will be able to view this version of the pipeline in the project [version history](/analysts/versioning).

## Publish your project

Let's publish this version of the project. When you publish a project, it becomes available for external use in scheduling, Prophecy Apps, and packages.

1. In the project header, select **Publish**.
1. Review the Copilot-generated description of the project version.
1. Notice that the changes to be published include the initial project creation and your saved draft.
1. Select one or more fabrics to publish the project to. This dictates the fabric(s) that your scheduled pipeline will run on. Prophecy creates a new deployment for each fabric selected.
1. Click **Publish**.

As Prophecy publishes your project, a set of logs are generated. Click through each step like fetching fabric info, packaging project, or deploying to fabric to understand the success (or failure) of your project deployment.

:::note See Also
To further your understanding about publication, visit [Project publication](/analysts/project-publication).
:::

## Monitor deployed projects

At this point, you have built a pipeline, scheduled a periodic pipeline run, and published the related project. This means that your schedule has been activated. To view deployed projects and pipeline schedules:

1. Open the **Monitoring** page from the left navigation bar.
1. Find your deployed project on the **Deployed Projects** tab.
1. Find your pipeline on the **Scheduled Pipelines** tab.
1. Review the record of your pipeline runs across deployed projects in the **Run History** tab.

:::info
To disable a pipeline schedule, you must do so in the schedule settings AND republish the project.
:::

## What's next

To make pipeline development even easier, add [connections](/core/prophecy-fabrics/connections/) to browse through your different external data sources. To create more complex pipelines, review the list of gems(/analysts/gems) that are available to you and try them out!
