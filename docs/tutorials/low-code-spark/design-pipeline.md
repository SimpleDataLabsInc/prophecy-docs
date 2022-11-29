---
title: Design a Pipeline
id: design-Pipeline
description: how to design your first Pipeline
sidebar_position: 2
tags:
  - Pipelines
  - tutorial
---

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/i61o34x245?seo=false?videoFoam=true" title="Design a Pipeline Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Summary

Design a data transformation Pipeline and generate a report - all using a low-code interface for Apache Spark.

### Description

Using a low-code interface, ingest a shipments Dataset and create a pricing summary report. Read and write from multiple data sources, including Snowflake and Delta Catalog Table. Run the Pipeline interactively and see the Job in Databricks. View the generated code - either Python or Scala - which runs on Apache Spark. In the next trainings, we'll see how to commit this code to Git, version our changes, schedule, and test our Pipeline.

### Script

Let’s get started on Prophecy for Databricks. After logging into Prophecy, create a project called Reporting. All the Pipelines that you’re going to build are turned into high quality code. Here you can choose the programming language of that code - either Python or Scala.

Prophecy will store all of that code in repositories on Git. Git enables you to version all of your changes, collaborate easily with your team, and track exactly what code is deployed to production. You can connect to one of your existing Git repositories. If you don’t have one, Prophecy can create one for you.

As part of our Reporting project, let’s create our pricingReport Pipeline. Connect to a Spark Cluster. With one click, we can see our Spark cluster running in Databricks.

Coming back to the Prophecy UI; we’re going to build a Pipeline to report the amount of business that was billed, shipped, and returned. With Prophecy I can read and write to any data source. We’re going to read from Snowflake. I store my credentials as Databricks secrets. Read from the ordershipments table. This table contains information about each order, whether the order was billed, shipped, or returned. We can see the schema right away. Load a data preview - the data looks as expected. Each record is an item to be shipped. We’ll use the columns relating to price and shipping status.

Let’s start to design our Pipeline by choosing some transformations: a Reformat Gem to Cleanup the Data, an Aggregate Gem to Sum the Amounts,an OrderBy Gem to OrderBy Shipment Status, then a Target Gem to write the Report to a Catalog table.

Configure each transformation. Select the columns of interest for our pricing report. Create some expressions to cleanup the Dataset. If the Tax is null, specify a default tax rate. Let’s also create a column to capture a business rule: a 'case when' statement marking an item as clearance

Configure the aggregate expressions. Start with basic SQL functions, and Prophecy will help you build expressions. Later Prophecy will convert these SparkSQL expressions into Python or Scala. Compute a sum of prices, discounts, and tax. Count the orders and whether the item was marked Clearance. Group-by whether the item was returned, and whether the item was delivered.

Run the Pipeline upto the sumAmounts Gem. Organize the Gems on the canvas. Let’s see what we’ve got so far. We can see the interim sample data output from each Gem. Data types are correct. We can see the summed amounts and orders, the returned or delivery statuses, and how many of these orders were marked clearance. We can see some basic statistics for each column.

Configure the OrderBy Gem. We want to know if the item was returned and/or delivered.

Configure the target Dataset. We’ll choose to write to a Delta Catalog table. Specify the details and some properties. Here we’ll overwrite the table schema, but there are lots of options

Run the Pipeline one final time to write the report to a Catalog table.

We designed our Pipeline! Let’s see what the code looks like behind the scenes. Here is the graph representation, each function represents a Gem: the shipments Dataset, the cleanup function, the sumAmounts function. See the Cleanup function code; this is what you write as a highly skilled data engineer

Great!
In the next few trainings, we’ll see how to commit our code to Git, version our changes, schedule and test our Pipeline.

See you next time!
