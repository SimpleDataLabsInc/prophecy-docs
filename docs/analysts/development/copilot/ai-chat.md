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

AI chat is available as a tab in the left sidebar of your project. This way, you can view changes to the pipeline canvas as the agent saves them. Note that development with AI chat works best when you have the visual canvas open, rather than the code view.

## Chat modes

When chatting with the AI agent, you may want to prevent it from modifying your existing pipeline. Use the chat mode toggle to control what the agent is allowed to change.

- **Edit**: Allow the agent to rebuild the pipeline and change existing gems.
- **Extend**: Only allow the agent to add new gems to the pipeline. Existing gems cannot be edited.

## Search for and explore data

One way to leverage AI chat is to search your SQL warehouse, explore datasets, and generate insights with simple prompts. To get you started, the following sections describe ways you can interact with the AI chat in this context.

### Find tables in your SQL warehouse

Ask the AI agent to search for tables in your connected warehouse. Based on your query, it returns a short list of relevant datasets. To find more information, you can:

- Explore a broader set of suggestions to find the most relevant table.
- Open and inspect a specific table to view the location, schema, contents, and data profile.
- Ask additional targeted questions to the **Explore** AI chat inside the table preview.

This helps you quickly locate the data you need without manually browsing through your data catalogs.

:::tip
You can add these datasets to the pipeline as [Table gems](/analysts/table) directly from the chat.
:::

### Describe a dataset

If you want a summary of dataset information, you can ask for a description of individual or multiple tables. The summary can include details like:

- The database and schema of the table.
- The name and data type of each column.
- A comparison between tables to identify similarities or differences.

### View sample rows from a table

To preview data, ask the AI agent to return sample rows from a table. You can ask to:

- Display a random sample from the table.
- Retrieve specific rows, such as “the ten most recent purchases over $100.”

A small table will appear directly in the chat showing the sample data.

### Visualize table data

You can also explore data through visualizations. Use prompts like “visualize sales by region over time” to generate charts. The AI chat returns:

- A visual chart embedded in the chat.
- The SQL query used to generate it.
- A summary of the SQL execution and output (for example, number of rows retrieved and execution status).

To see a larger version of the chart, click **Preview**. This opens the **Chart** tab of the data visualization dialog.

Switch to the **Data** tab to view the data that powers the chart. From here, you can add the visualization to a [Prophecy App](/analysts/business-applications) configuration if relevant. You can either choose an existing app in your project or create a new one.

### Upload files to the SQL warehouse

To upload data from your local system, click the paperclip icon in the AI chat. This opens the [upload file](/analysts/upload-file) dialog. Uploaded files will be added as tables in your SQL warehouse. Prophecy supports several file types for upload—see the documentation for details.

Once uploaded, you'll be able to use your data as you do any other table in the warehouse.

### Create output tables

After adding various data transformations in your pipeline, you can save the result as a table. Ask the AI agent to save the output, and it will write the data to the default database and schema in your connected fabric.

This allows you to persist results and reuse them in downstream workflows.

### Sample prompts {#sample-prompts-data}

Here are some sample prompts that you can ask to search, explore, and learn about the data.

:::tip
Use the @ symbol to reference tables in your SQL warehouse. As you type, Prophecy suggests matching datasets to help you find what you need faster.
:::

| Scenario           | Prompt                                                                |
| ------------------ | --------------------------------------------------------------------- |
| Find dataset       | "Find the dataset that shows employee hiring information and history" |
| View data sample   | "Return the top ten highest sales from @daily_orders"                 |
| Describe dataset   | "Give me more details about @revenue_opportunities"                   |
| Visualize data     | "Plot the sales by country"                                           |
| Save output tables | "Show me and save the final output of the pipeline"                   |

## Add transformations to the pipeline

You can use the AI agent to generate transformations based on natural language prompts. When you describe a data operation, the AI agent adds the corresponding gems to the pipeline and provides a summary of the changes in the chat interface. This section describes how to add transformations, review modifications, and restore previous versions of the pipeline.

### Provide a transformation

To generate a transformation, enter a prompt that describes the desired data operation. The AI agent adds one or more gems to the pipeline canvas and displays a description of the applied changes in the chat.

All changes made by the AI agent are saved in the project [version history](/analysts/versioning). Commits will be clearly marked as authored by the AI agent.

:::note
If you did not save your project before interacting with the AI agent, Prophecy will automatically save your changes before the agent proceeds.
:::

### Inspect pipeline changes

To review changes, select **Inspect** in the chat next to a transformation. This opens the configuration panel for the first modified gem, which is highlighted in yellow to indicate that it was added or updated.

Use the **Previous** and **Next** controls to move through other modified gems in sequence. When hovering over these controls, a minimap of the pipeline is displayed to provide context on the transformation’s location.

While reviewing each gem, examine both the input and output to confirm that the transformation produces the expected result.

### Restore a previous state of the pipeline

To revert changes, select **Restore** from a reply in the chat history. This reverts the pipeline to the selected earlier version.

:::note
You can also manage versions from the main project [version history](/analysts/versioning).
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
