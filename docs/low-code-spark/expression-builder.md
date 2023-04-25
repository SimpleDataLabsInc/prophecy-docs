---
title: Expression Builder
id: expression-builder
description: Expression Builder
sidebar_position: 4
tags:
  - spark
  - development
  - functions
  - expressions
---

To perform data analysis and manipulation, Spark has provided various functions. These functions enable users to perform various data analysis tasks on their data.
In order to perform complex data analysis tasks, it's important to be able to construct expressions that combine the Spark functions in various ways.
Prophecy has now made this easy with support of **Expression Builder**. Using the Spark Expression Builder can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments.

### Access Expression Builder

To access the Spark Expression Builder, navigate to the column you want to edit, and open the expanded editor. Here click on the Expression Builder button. From there, you can search and insert functions onto the canvas and specify their arguments.
This tool can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments.

Please see below video for example

### Search and Insert

To search for functions in Spark Expression Builder, you can use the search bar at the top of the screen.
Simply type in the name of the function you are looking for, and a list of matching functions will appear. To insert a function into your expression, click on the insert button. You can then specify the arguments for the function by clicking on it and filling in the required fields.
You can also insert configs and input columns directly.

Please see below video for example

### Run and Verify the output

You can now Attach to a cluster and Run your Pipeline till current Gem from the same screen. Once the code has finished running, you can verify the results to make sure they match your expectations. This Data is same as what you see in [interims](./execution/executions_on_databricks_clusters#interims) view.
By testing and verifying your expressions, you can ensure that your data analysis tasks are accurate and reliable.

Please see below video for example
