---
title: Expression builder
id: expression-builder
description: Expression Builder
tags:
  - spark
  - development
  - functions
  - expressions
---

You can perform data analysis and manipulation with Spark functions that allow you to perform various data analysis tasks on your data.
To perform complex data analysis tasks, construct expressions that combine the Spark functions in various ways.
Prophecy simplifies this process with the support of **Expression Builder**, which can save you time and effort when constructing complex expressions, and can help you to better understand the relationships between different functions and their arguments.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/958ccd09f1a5435fa4348be6dca3996e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

## Spark Expression Builder

To navigate to the Spark Expression Builder:

1. Navigate to the column you want to edit, and open the expanded editor.
1. Click on the **Expression Builder** button.

   Now, you can search for, and insert functions, columns or configurations in your canvas.

### Search

To search for a function in Spark Expression Builder:

1. Click the **fx** button.
1. In the search bar at the top of the screen, type the function name.

   A list of matching functions appears. When you click on a function, you see information about its syntax, arguments, and an example on how to use it.

### Insert

You can insert a function, column, or configuration into your expression.

To insert a function:

1. Navigate to, or search for the function you want to use.
1. Click on the **Insert Function** button.

   To specify an argument for the function, click on the function and fill in the required fields.

To insert a column:

1. Click the **Columns** tab.
1. Click on the column you want to insert, and click **Insert Column**.

To insert a configuration:

1. Click the **Configurations** tab.
1. Click on the column you want to insert, and click **Insert Configuration**.

### Run and Verify the output

You can attach to a cluster and run your pipeline for the current gem on the same screen.

To run your code:

1. Click the **Run** button.
1. Click the **Data** button to see your results.

   Verify the results to ensure that your data analysis tasks are accurate and reliable.

:::note
This data is same as what you see in [interims](./execution/executions_on_databricks_clusters#interims) view.
:::
