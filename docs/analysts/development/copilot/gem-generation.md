---
title: Generate gems
id: gem-generation
slug: /analysts/gem-generation
description: Automatically generate gems with natural language
tags:
  - analyst
  - copilot
---

Building data pipelines can be time-consuming, especially when you're starting from scratch or need to apply many different transformations. Copilot helps you move faster by translating natural language prompts into gems. Use our Copilot Agent to add data or transformations to your pipeline.

You can find the Copilot Agent in the **Chat** tab of the project's left sidebar.

## Explore tables

When starting from a blank canvas, you can ask Copilot to find relevant tables in your data warehouse to add as sources in your pipeline.

### View sample rows

You can ask Copilot to provide a sample of the dataset, and Copilot will show a small table directly in the chat.

### View data profile

### View charts

- Line chart
- Pie chart
- Bar chart

## Generate transformations

Once you’ve started building, Copilot can help you by suggesting different transformations based on your prompt. These transformations appear in yellow to indicate that they are Copilot suggestions.

## Review inputs and outputs

To make sure Copilot-generated transformations match your expectations, you can explore the input and result of each gem that Copilot suggested in the pipeline. Click **Inspect** in the chat to open the new or modified gems.

You can click through these gems with the **Previous** and **Next** buttons.

## Example prompts

The following are example prompts you can use to generate gems in your pipeline.

| Scenario           | Prompt                                                     | Suggested Gem |
| ------------------ | ---------------------------------------------------------- | ------------- |
| Filter records     | “Filter to only include customers from California.”        | Filter        |
| Add transformation | “Calculate the total order value as quantity \* price.”    | Reformat      |
| Clean data         | “Remove rows where email is null.”                         | DataCleansing |
| Aggregate data     | “Group by region and calculate average sales.”             | Aggregate     |
| Rename columns     | “Rename `cust_id` to `customer_id` and `amt` to `amount`.” | Reformat      |
