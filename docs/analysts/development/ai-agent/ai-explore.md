---
title: Explore data
id: ai-explore
slug: /analysts/ai-explore
description: Find data sources using Prophecy's AI agent
tags:
  - analyst
  - ai
  - agent
---

One way to leverage the Prophecy AI agent is to search your SQL warehouse, explore datasets, and generate insights with simple prompts. This way, you can add the appropriate sources to your pipeline that will undergo data processing. You must have source data in your pipeline to start building transformations.

The following sections describe ways you can interact with the agent in this context.

## Find tables in your SQL warehouse

Ask the agent to search for tables in your [primary SQL warehouse](docs/administration/fabrics/prophecy-fabrics/prophecy-fabrics.md). Based on your query, it returns:

- A short list of relevant datasets and their descriptions.
- A full list of datasets that match your criteria.

:::tip
You can add a dataset to the pipeline as a [Table gem](/analysts/table) directly from the chat.
:::

### Explore datasets

To learn more about a dataset, you can click on it inside the chat. This opens a dialog where you can:

- Preview a sample of the data in the dataset.
- Review the data profile of the sample.
- Find the location of the dataset in the warehouse.
- Look over the schema of the dataset.
- Open the **Explore** AI agent that limits responses to the context of the dataset.

This helps you quickly locate the correct data without having to manually browse through your data catalogs.

## Describe a dataset

If you want a summary of dataset information, you can ask the AI agent to describe a table.

The agent will provide a quick overview of key metadata, including the database and schema the table belongs to, as well as the names and data types of each column. This helps you understand the structure of the dataset without having to open or query it directly.

## Compare datasets

If you ask the AI agent to compare datasets, you can quickly assess which dataset is more suitable as a source for your pipeline by analyzing differences in schema structure, column names, data types, and size.

This way, you can identify which dataset aligns better with your pipeline’s requirements, such as having the right fields, consistent naming conventions, or expected formats, without needing to inspect the full data.

## View sample rows from a table

To preview data, ask the agent to return sample rows from a table. You can ask to:

- Display a random sample from the table.
- Retrieve specific rows, such as “the ten most recent purchases over $100.”

The agent returns:

- A small table showing sample data directly in the chat.
- An option to add the full dataset as a Table gem in the pipeline canvas.
- An option to preview the chart more closely.

### Table preview

To inspect the sample data more closely, click **Preview**. Inside the preview, you can:

- Download the data as a JSON, Excel, or CSV file.
- Show or hide columns.
- Add the full dataset to the pipeline canvas.

## Visualize table data

You can also explore data through visualizations. Use prompts like “visualize sales by region over time” to generate charts.

The agent returns:

- A chart embedded directly in the chat.
- An option to add the underlying dataset as a Table gem in the pipeline canvas.
- An option to preview the chart more closely.

### Chart preview

To see a larger version of the chart, click **Preview**. This opens the data visualization dialog, which has two tabs.

| Tab           | Available actions                                                                                                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Visualization | <ul class="table-list"><li>View a larger version of the chart</li><li>Download the chart as an image</li><li>Copy the chart as an image</li><li>Add the chart to a [Prophecy App](/analysts/business-applications)</li></ul> |
| Data          | <ul class="table-list"><li>View the underlying data</li><li>Download the data as a JSON, Excel, or CSV file</li><li>Show or hide columns</li></ul>                                                                           |

:::info
Learn more about data visualization in [Charts](/analysts/charts).
:::

## Sample prompts

Here are some sample prompts that you can ask to search, explore, and learn about the data.

| Scenario         | Prompt                                                                |
| ---------------- | --------------------------------------------------------------------- |
| Find dataset     | "Find the dataset that shows employee hiring information and history" |
| View data sample | "Return the top ten highest sales from @daily_orders"                 |
| Describe dataset | "Give me more details about @revenue_opportunities"                   |
| Visualize data   | "Plot the sales by country"                                           |
