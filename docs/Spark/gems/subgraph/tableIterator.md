---
sidebar_position: 2
title: Table Iterator
id: table-iterator
description: Loop over each row of an input Dataframe
tags:
  - loop
  - table
  - Iterator
---

Table Iterator allows you to iterate over one or more Gems for each row of the first input DataFrame.
Let's see how to create a Basic Loop which loops over a Metadata Table, and for each row of the table will run the Gems inside the Subgraph.

## Creating a Table Iterator Gem

First add the Input Gem on which you want to Iterate over. For this, simply use an existing Dataset or create a new [Source Gem](/docs/Spark/gems/source-target/source-target.md) pointing to your Metadata table.
You can run this Source Gem to see the data your loop would be running for.

Now, Drag and Drop the **(1) Table Iterator** Gem from the Subgraph Menu, and connect it to the above created Source Gem.

![Create_table_iterator](img/Create_table_iterator.png)

## Configure the Table Iterator

Open the Table Iterator Gem, and click on **(1) Configure** to open the Settings dialog.
Here, on the left side panel you can edit the **(2) Name ** of your Gem, check the **(3) Input Schema** for your DataFrame on which the loop will iterate.

On the right side, you can define your Iterator Settings, and any other Subgraph Configs you want to use in the Subgraph.
In the **(4) Max Iterations** field, you can control the maximum number of Iterations this loop can have. This is to safeguard that nobody runs the loop on a very large DataFrame by mistake. The default value is set to 1000.

You can also **(5) Enable Parallel Execution**.

![configure_loop](img/Configure_table_iterator.png)

When you check Enable Parallel Execution, you can also control **(1) Number of threads** to run in parallel as shown below.

![loop_settings](img/loop_settings.png)

In the table below that, map the columns from the incoming DataFrame, to the configs of the Subgraph.
When you pick a column name in **(2) Source column**, a config is automatically created with the same name in **(3) Config name**. You can see the configs created by switching to the **(4) Configuration** tab.

This will show all the configurations created for this Subgraph as shown below.

![loop_configs](img/loop_configs.png)

You can add default values for any of these by switching to the **(1) Config Tab**, as shown above. You can also add more configurations in case you want to use in your subgraph.

:::info
Please note, the configurations associated with a source column will have different values for each iteration based on the input data's current row value for that column.
The configs which are not mapped to a source column, will have a fixed value for each Iteration provided in the Config tab.
:::

Once done, click on **(2) Save**, to save the Iterator configurations.

Now you can add the Gems to your Subgraph on which you want to loop on. To do this simply Drag and Drop any Gem onto the Subgraph Canvas.
You can add any Source, Target or any other transformation Gem and use the configs inside these Gems to change the values for each Iteration.

## Running the Loop

Once you have added the Gems to your Subgraph, Click on the **(1) Run button** to start execution.
As the execution starts, you will see a new **(2) Iteration** button. This will show for which Iteration you are seeing the current interims.
You can click on the **(3) Interim** to check values for that Iteration.

![run_loop](img/Run_loop.png)

Click on the **(2) Iteration** button, and it will open up the Iterations table as shown below. Here you can see all iterations and config values for each of them.

![iterations](img/Iterations.png)

## Adding Inputs and Outputs to TableIterator

For a Table Iterator Gem, the first input port is for your DataFrame on which you want to Iterate Over.
You can **(1)Add** more Inputs or Switch to **(2) Output** tab to add more Outputs as needed. These extra inputs would not change for every iteration.
Also, the output will be a Union of output of all Iterations. You can **(3) Delete** any port by hovering over it.

![table_iterator_ports](img/loop_additional_ports.png)
