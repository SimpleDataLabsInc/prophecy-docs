---
title: Document pipelines
id: ai-documentation
description: Automatically create comprehensive documentation for your data pipelines using Prophecy's AI agent
slug: /analysts/ai-documentation
tags:
  - agent
---

Instead of writing documentation manually, you can use Prophecy's AI agent to generate detailed specifications automatically. Pipeline documentation helps team members understand how input fields are transformed to produce the final output.

## Generate documentation

To create documentation for your pipeline:

1. Open your pipeline in Prophecy.
1. Click the **Chat** tab in the left sidebar.
1. Ask the AI agent to document your pipeline using a prompt like:

```
Create documentation for the current pipeline
```

The agent analyzes your pipeline and generates a Markdown document.

![Ask agent to generate documentation](img/agent-generate-docs.png)

### What happens during generation

The AI agent:

1. Displays a preparation checklist showing progress.
1. Analyzes your pipeline components.
1. Generates structured documentation.
1. Saves the Markdown file to the `documents` directory in your project.

You can find the generated document under **Documents** in the project sidebar.

![Generated documentation](img/agent-docs-list.png)

## Documentation structure

Generated documentation follows a consistent structure to make information easy to find.

- **Introduction**: High-level overview of the pipeline's purpose, business context, and strategy.
- **Input sources**: Each data source listed with its full name, description, and fields used in the pipeline (rather than the entire set of input fields).
- **Output targets**: Each output table with its description, dependencies, complete column schema, and transformation logic.
- **Transformation steps**: Ordered list of data processing steps with logic mapped to gems.

## Example documentation

The following example shows documentation generated for a healthcare billing pipeline:

```markdown
# Introduction

This document outlines the specification for the daily billing report data pipeline used to monitor and analyze patient billings by provider. The pipeline aggregates and summarizes encounter data for a specific reporting day, enabling insight into billing volumes and provider activity. The specification includes details on all data inputs, transformations, and the single output target used to deliver summary billing metrics per provider per day.

# Input Sources

The data pipeline utilizes a single input data source containing detailed encounter records. This source includes information about healthcare encounters, such as patient, provider, encounter dates, and costs. Data from this source is transformed and summarized to provide daily billing insights.

### 1. analyst_samples.healthcare.L0_raw_encounters

- **Description:** Contains raw healthcare encounter data, representing every recorded interaction between patients and providers in the system. This dataset is foundational for calculating billing and utilization analytics.
- **Fields Used:**
  - start
  - patient
  - provider
  - baseEncounterCost

# Output Targets

The data pipeline produces a single summary report table that aggregates the number of unique patients and total billings by provider for each day. This facilitates daily monitoring of provider activity and billing volume.

### 1. playground.playground_schema_11083_gd4.L2_gold_billing_daily_report

- **Description:** A daily table that summarizes, at the provider level, key billing metrics, including the number of patients and total billed cost for all encounters occurring on a specified date. Enables daily operational analysis for healthcare providers.
- **Depends On:**

  - analyst_samples.healthcare.L0_raw_encounters

- **Columns:**

| #   | Name        | Data Type | Transformation                                                                                                                                                 |
| --- | ----------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | day         | DATE      | Aggregated date of encounter. Extracted as DATE from the start field of analyst_samples.healthcare.L0_raw_encounters and filtered to match the execution date. |
| 2   | provider    | VARCHAR   | Unique identifier for the healthcare provider. Directly taken from the provider field in analyst_samples.healthcare.L0_raw_encounters.                         |
| 3   | numPatients | INT       | Number of unique patients who had an encounter with the provider on the given day. Computed as COUNT(patient) grouped by day and provider.                     |
| 4   | billings    | FLOAT     | Total billing amount for the provider on the given day. Computed as SUM(baseEncounterCost) grouped by day and provider.                                        |

# Transformation Steps

The transformation process consolidates detailed encounter data into a meaningful daily summary, aiding business users in tracking daily billing activity across all providers.

- **Step 1: Extract relevant encounter details**
  - Selects encounter date (DATE from start), patient, provider, and base encounter cost from analyst_samples.healthcare.L0_raw_encounters.
- **Step 2: Filter encounters to reporting day**
  - Keeps only those encounters where the encounterDate matches the specified executionDate variable, ensuring daily analysis.
- **Step 3: Aggregate patient and billing data by provider**
  - For each provider on the reporting day, calculates the total number of patient encounters and sums the total billed amount by grouping on the encounter date and provider fields.
```

## Edit generated documentation

After generation, you can:

- View and edit the document in the visual editor
- Switch to the **Code** tab to edit the Markdown code
- Update content as your pipeline changes

Documentation files are stored in your project repository and can be version-controlled with your code.
