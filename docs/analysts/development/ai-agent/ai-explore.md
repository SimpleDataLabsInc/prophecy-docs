---
title: Explore data
id: ai-explore
slug: /analysts/ai-explore
description: Find data sources using AI chat
tags:
  - analyst
  - ai
  - agent
---

One way to leverage AI chat is to search your SQL warehouse, explore datasets, and generate insights with simple prompts. This way, you can add the appropriate sources to your pipeline that will undergo data processing. You must have source data in your pipeline to start building transformations.

To get you started, the following sections describe ways you can interact with the AI chat in this context.

## Find tables in your SQL warehouse

Ask the AI agent to search for tables in your connected warehouse. Based on your query, it returns a short list of relevant datasets. To find more information, you can:

- Explore a broader set of suggestions to find the most relevant table.
- Open and inspect a specific table to view the location, schema, contents, and data profile.
- Ask additional targeted questions to the **Explore** AI chat inside the table preview. This chat is limited to the context of the specific table.

This helps you quickly locate the data you need without manually browsing through your data catalogs.

:::tip
You can add these datasets to the pipeline as [Table gems](/analysts/table) directly from the chat.
:::

## Describe a dataset

If you want a summary of dataset information, you can ask AI chat to describe a table. This will provide a quick overview of key metadata, including the database and schema the table belongs to, as well as the names and data types of each column. This helps you understand the structure of the dataset without having to open or query it directly.

## Compare datasets

If you ask AI chat to compare datasets, you can quickly assess which dataset is more suitable as a source for your pipeline by analyzing differences in schema structure, column names, data types, and size. This way, you can identify which dataset aligns better with your pipeline’s requirements, such as having the right fields, consistent naming conventions, or expected formats, without needing to inspect the full data.

## View sample rows from a table

To preview data, ask the AI agent to return sample rows from a table. You can ask to:

- Display a random sample from the table.
- Retrieve specific rows, such as “the ten most recent purchases over $100.”

A small table will appear directly in the chat showing the sample data.

## Visualize table data

You can also explore data through visualizations. Use prompts like “visualize sales by region over time” to generate charts. The AI chat returns:

- A visual chart embedded in the chat.
- The SQL query used to generate it.
- A summary of the SQL execution and output (for example, number of rows retrieved and execution status).

To see a larger version of the chart, click **Preview**. This opens the **Chart** tab of the data visualization dialog.

Switch to the **Data** tab to view the data that powers the chart. From here, you can add the visualization to a [Prophecy App](/analysts/business-applications) configuration if relevant. You can either choose an existing app in your project or create a new one.

## Sample prompts

Here are some sample prompts that you can ask to search, explore, and learn about the data.

| Scenario         | Prompt                                                                |
| ---------------- | --------------------------------------------------------------------- |
| Find dataset     | "Find the dataset that shows employee hiring information and history" |
| View data sample | "Return the top ten highest sales from @daily_orders"                 |
| Describe dataset | "Give me more details about @revenue_opportunities"                   |
| Visualize data   | "Plot the sales by country"                                           |
