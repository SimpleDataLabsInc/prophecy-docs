---
title: AI chat
id: ai-chat
slug: /analysts/ai-chat
description: Chat with our AI agent to generate pipelines
tags:
  - analyst
  - ai
  - agent
---

As you build out SQL projects, you can leverage the AI agent chat to develop data pipelines from scratch. The AI agent can accomplish various tasks, such as:

- Exploring tables and searching for specific data in your SQL warehouse
- Adding gems to the canvas to create a linear pipeline
- Previewing the input and output of suggested transformations
- Generating data visualizations you can publish to business apps

AI chat is available as a tab in the left sidebar of your project. This way, you can view changes to the pipeline canvas as the agent saves them. Note that development with AI chat works best in the visual canvas, rather than the code view.

## Search for and explore data

### Find tables in your SQL warehouse

You can ask the AI agent to search the data in your warehouse and return relevant datasets. The AI agent will return a few suggested tables, and you will be able to:

- Drill down into a specific table to inspect its schema and contents.
- Ask questions about specific tables, like "Which orders have been placed in the last 30 days?"
- View a full list of suggested tables for more options.

### View sample rows from a table

You can ask the AI agent to return a set of rows from the table directly in the chat. You can either ask to:

- Display a random sample from the table.
- Retrieve specific rows, such as “the ten most recent purchases over $100.”

### Describe a dataset

You can ask the AI agent to summarize details about individual or multiple tables. It can return:

- The database and schema of the table.
- The name and data type of each column.
- A comparison between tables to identify similarities or differences.

### Visualize source data

Another way to explore source data is to visualize it. You can ask AI agent to generate charts based on prompts such as “visualize sales by region over time.”

The chart will be generated, and the AI chat will also return the steps taken to generate the visualization. More specifically, the chat will return the following steps:

- The SQL query associated with the visualization.
- What the SQL execution did (for example, retrieved three rows).
- The status of the SQL execution and chart generation.

Below the chart, you can click **Preview** for more information. The **Chart** tab shows a larger version of the chart, while the **Data** tab shows a sample of the raw data powering the chart. The Data tab also provides the option to add the visualization to a [Prophecy App](/analysts/business-applications) configuration. You can either choose an existing app in your project, or create a new one.

<!-- Can you add a chart element to an app NOT via chat? -->

### Upload files to the SQL warehouse

To upload files to your SQL warehouse inside the AI chat, click the paperclip icon. This opens the [file upload](/analysts/upload-file) workflow. Review the file upload documentation to view supported file types.

### Create output tables

To save pipeline results, you can write in the AI chat to display or save the pipeline output as a table. This table will be saved in your default database and schema defined in the attached fabric.

### Sample prompts {#sample-prompts-data}

Here are some sample prompts that you can ask to search, explore, and learn about the data.

| Scenario           | Prompt                                                |
| ------------------ | ----------------------------------------------------- |
| Find dataset       | "Filter to only include customers from California"    |
| View data sample   | "Return the top ten highest sales from @daily_orders" |
| Describe dataset   | "Remove rows where email is null"                     |
| Visualize data     | "Plot the sales by country"                           |
| Save output tables | "Show me the final output of the pipeline"            |

The @ symbol lets you reference entities in your project and in your warehouse. When you start typing after the @ symbol, Prophecy will offer suggestions as you type to make it easier to find things.

## Add transformations to the pipeline

### Provide a transformation

You can ask the AI agent to generate one or more gems in the pipeline to accomplish a certain goal. After you provide a prompt, you will see the AI agent populate the canvas with newly-generated transformations. You'll also see an explanation in the chat of what happened.

:::note
Each change the AI agent makes will be saved in the project. You can view each version saved in the [version history](/analysts/versioning). If you forget to save your project before using the AI agent, your changes will be automatically saved before the agent makes additional changes.
:::

### Inspect pipeline changes

Changes made by the AI agent will appear in the pipeline canvas. When you click **Inspect** on a transformation step in the chat, the inspect workflow opens.

- This opens the configuration of the first modified gem, which is highlighted in yellow.
- You can navigate to the previous or next modified gem to track the sequence of changes.
- You can hover over **Previous** and **Next** at each step to view a mini map of the pipeline. In other words, you can view a small image snapshot of where you are in the pipeline to help you understand which step you are inspecting.
- As you go, also examine the input and output of each gem to verify data transformations.

### Restore a previous state of the pipeline

In your chat history, you'll see the **Restore** option. This lets you revert your pipeline changes to a previous version that was provided in the chat.

:::note
You can also manage version history in the main versioning menu, rather than inside the chat.
:::

### Sample prompts {#sample-prompts-transformation}

Here are some sample prompts that can produce transformations in your pipeline.

| Scenario           | Prompt                                                 | Possible output   |
| ------------------ | ------------------------------------------------------ | ----------------- |
| Filter records     | "Filter to only include customers from California"     | Filter gem        |
| Add transformation | "Calculate the total order value as quantity \* price" | Reformat gem      |
| Clean data         | "Remove rows where email is null"                      | DataCleansing gem |
| Aggregate data     | "Group by region and calculate average sales"          | Aggregate gem     |
| Rename columns     | "Rename cust_id to customer_id and amt to amount"      | Reformat gem      |
