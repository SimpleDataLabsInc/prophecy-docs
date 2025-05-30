---
title: Transform data
id: ai-transform
slug: /analysts/ai-transform
description: Transform data sources using AI chat
tags:
  - analyst
  - ai
  - agent
---

You can use the AI agent to generate transformations based on natural language prompts. When you describe a data operation, the AI agent adds the corresponding gems to the pipeline and provides a summary of the changes in the chat interface.

The following sections describe how to add transformations, review modifications, and restore previous versions of the pipeline.

:::info Prerequisite
You need at least one [Source gem](/analysts/source-target) in your pipeline to add transformation gems with AI chat.
:::

## Provide a transformation

To generate a transformation, enter a prompt that describes the desired data operation. The AI agent adds one or more gems to the pipeline canvas and displays a description of the applied changes in the chat.

All changes made by the AI agent are saved in the project [version history](/analysts/versioning). Commits will be clearly marked as authored by the AI agent.

:::note
If you did not save your project before interacting with the AI agent, Prophecy will automatically save your changes before the agent proceeds.
:::

## Inspect pipeline changes

To review changes, select **Inspect** in the chat next to a transformation. This opens the configuration panel for the first modified gem, which is highlighted in yellow to indicate that it was added or updated.

Use the **Previous** and **Next** controls to move through other modified gems in sequence. When hovering over these controls, a minimap of the pipeline is displayed to provide context on the transformation’s location.

While reviewing each gem, examine both the input and output to confirm that the transformation produces the expected result.

## Restore a previous state of the pipeline

To revert changes, select **Restore** from a reply in the chat history. This reverts the pipeline to the selected earlier version.

:::note
You can also manage versions from the main project [version history](/analysts/versioning).
:::

## Create output tables

After adding various data transformations in your pipeline, you can save the result as a table. Ask the AI agent to save the output, and it will write the data to the default database and schema in your connected fabric. This allows you to persist results and reuse them in downstream workflows.

## Sample prompts

Here are some sample prompts that can produce transformations in your pipeline.

| Scenario           | Prompt                                                 | Expected output   |
| ------------------ | ------------------------------------------------------ | ----------------- |
| Filter records     | "Filter to only include customers from California"     | Filter gem        |
| Add transformation | "Calculate the total order value as quantity \* price" | Reformat gem      |
| Clean data         | "Remove rows where email is null"                      | DataCleansing gem |
| Aggregate data     | "Group by region and calculate average sales"          | Aggregate gem     |
| Rename columns     | "Rename cust_id to customer_id and amt to amount"      | Reformat gem      |
| Save output tables | "Show me and save the final output of the pipeline"    | Table gem         |
