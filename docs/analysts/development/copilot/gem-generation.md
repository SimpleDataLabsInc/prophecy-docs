---
title: Generate gems
id: gem-generation
slug: /analysts/gem-generation
description: Automatically generate gems with natural language
tags:
  - analyst
  - copilot
---

Building data pipelines can be time-consuming, especially when you're starting from scratch or need to apply common transformations. Copilot helps you move faster by translating natural language prompts into gems.

Whether you're generating an entirely new pipeline or adding the next transformation step, Copilot suggests relevant gems based on your intent. This page walks you through the different ways to use Copilot to generate pipelines and gems, along with example prompts to get you started.

## Start a new pipeline

When starting from a blank canvas, you can ask Copilot to suggest an initial pipeline flow based on the tables already defined in your project. This helps you get a head start by quickly scaffolding the overall structure of your pipeline. You can accept or reject Copilot's suggestion.

![Generate pipelines](./img/copilot-generate-pipeline.gif)

:::info
Copilot can only use sources that have already been defined as [tables](/analysts/source-target#tables) in your project.
:::

## Ask for the next gem

Once you’ve started building, Copilot can help you by suggesting the next gem based on your prompt.

Select a gem, click the Copilot icon in the top-left corner of the canvas, and describe the logic or transformation you want to apply.

![Generate gems](./img/copilot-generate-gem.gif)

:::note
You can also ask Copilot for next gems by hovering a gem’s output branch and clicking the **+** icon.
:::

## Example prompts {#example-prompts-gems}

The following are example prompts you can use to generate gems in your pipeline.

| Scenario           | Prompt                                                     | Suggested Gem |
| ------------------ | ---------------------------------------------------------- | ------------- |
| Filter records     | “Filter to only include customers from California.”        | Filter        |
| Add transformation | “Calculate the total order value as quantity \* price.”    | Reformat      |
| Clean data         | “Remove rows where email is null.”                         | DataCleansing |
| Aggregate data     | “Group by region and calculate average sales.”             | Aggregate     |
| Rename columns     | “Rename `cust_id` to `customer_id` and `amt` to `amount`.” | Reformat      |
