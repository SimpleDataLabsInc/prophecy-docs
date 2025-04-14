---
title: Copilot for Analysts
id: copilot-analysts
slug: /analysts/copilot
description: Automatically generate pipelines from business specifications
tags:
  - project
  - pipeline
  - analyst
  - copilot
---

Copilot is your intelligent assistant for building and understanding data pipelines. It helps you:

- Generate gems and pipelines using natural language.
- Speed up data transformation with smart, context-aware suggestions.
- Label and explain parts of a pipeline for better documentation and collaboration.
- Detect and correct errors automatically.

## Generate gems and pipelines

Copilot can help you accelerate pipeline development by generating transformation logic and downstream components. Once you have a Source gem on the canvas, you can prompt Copilot to build the rest of the pipeline for you.

![Generate gems](img/generate-gem.gif)

You can initiate this process in the following ways:

- Select a gem, click the Copilot icon in the top-left corner of the canvas, and enter a prompt describing the logic or transformations you want to apply.

- Hover over a gem’s output branch, click the + icon, and enter a prompt to define the next step in your pipeline.

### Example prompts {#example-prompts-gems}

| Scenario           | Prompt                                                               |
| ------------------ | -------------------------------------------------------------------- |
| Filter records     | “Filter to only include customers from California.”                  |
| Add transformation | “Add a gem to calculate the total order value as quantity \* price.” |
| Join datasets      | “Join this with the customers dataset on customer_id.”               |
| Clean data         | “Remove rows where email is null or invalid.”                        |
| Aggregate data     | “Group by region and calculate average sales.”                       |
| Rename columns     | “Rename `cust_id` to `customer_id` and `amt` to `amount`.”           |

## Expression building

Copilot enhances the expression-building experience within gem configurations by generating context-aware suggestions and expressions based on your input and column metadata.

![Copilot expressions](img/copilot-expressions.gif)

- In many cases, Copilot pre-populates expressions based on semantic cues from your column names. For best results, use descriptive column names.

  - `customer_email` → Clear intent, likely to produce accurate suggestions.

  - `col1` → Ambiguous, may result in less reliable output.

- You can enter prompts in the expression builder, available in both the visual and code views, to generate the desired logic automatically.

### Example prompts {#example-prompts-expressions}

| Scenario             | Prompt                                                             |
| -------------------- | ------------------------------------------------------------------ |
| Basic transformation | “Extract the domain from the `email` column.”                      |
| String formatting    | “Capitalize the first letter of each word in `customer_name`.”     |
| Date parsing         | “Convert `order_date` to YYYY-MM format.”                          |
| Conditional logic    | “If `amount` > 1000, then label as ‘high value’, else ‘standard’.” |
| Null handling        | “Replace null values in `zipcode` with ‘00000’.”                   |
| Math calculation     | “Calculate discount as `price` \* `discount_rate`.”                |

## Pipeline explanation and labeling

As pipelines scale, they can become harder to interpret and maintain. To improve clarity and collaboration, Prophecy allows you to add labels and descriptions to gems, helping others understand the purpose of each step in the pipeline. To streamline this process, Copilot can automatically generate or update labels and descriptions for you.

![Generate gem description](img/gem-explain.gif)

Both options are available through the gem's action menu. To learn more, visit the documentation on [gems](/analysts/gems).

## Error detection and mitigation

Troubleshooting pipeline errors manually can be time-consuming. Prophecy simplifies this process by offering multiple ways to detect and resolve issues quickly.

| Method            | Description                                                                                                                                                                                               |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inline fix**    | Click an expression inside a gem with an error and select **Fix it** to apply an automatic correction.                                                                                                    |
| **Fix on save**   | When saving a gem with detected errors, Prophecy prompts you to either **Fix Diagnostics** or **Save without fixing**. <br/>Selecting **Fix Diagnostics** triggers Copilot to resolve the issues for you. |
| **Gem-level fix** | On the pipeline canvas, open a gem’s action menu and select **Fix** to automatically correct errors within that component.                                                                                |

After Copilot completes the fix, Prophecy will always provide a summary of the changes made.

![Copilot inline fix](img/copilot-fix.gif)
