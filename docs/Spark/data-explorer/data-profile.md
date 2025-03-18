---
title: Data profiling
id: data-profile
description: Review a summary of data quality
tags:
  - data profile
  - data quality
---

To quickly find a summary of your data quality, view data profiles of your data samples in the Data Explorer. Use data profiling to:

- Find instant data insights
- Detect anomalies and inconsistencies early
- Visualize value distributions and data completeness

## Enable data profile

Data profiling is most important **early** in your pipeline. To enable or disable data profiling per gem in the pipeline:

1. Open the gem action menu.
1. Select or deselect the Data Profile checkbox.

:::info
Be conscious of how often you enable data profiling throughout the pipeline. This can add unnecessary computation time to your pipeline execution.
:::

## Quick profile

The data explorer includes data profiles that are generated on your sample data. You'll be able to see high-level statistics for each column, including:

- Percent of non-blank values
- Percent of null values
- Percent of blank values
- Most common values

## Full profile

When you open the data explorer, you'll only see the data profile of the data **sample**. When you load the full data profile, Prophecy generates a more in-depth analysis on **all of the records** in the interim dataset. The full profile displays the following information:

- **Data type**: The data type of the column.
- **Unique values**: The number of unique values in the column.
- **Longest value**: The longest value in the column and its length.
- **Shortest value**: The shortest value in the column and its length.
- **Most frequent value**: The most frequent value in the column and its number of occurrences.
- **Least frequent value**: The least frequent value in the column and its number of occurrences.
- **Minimum value**: The minimum value in the column.
- **Maximum value**: The maximum value in the column.
- **Average value length**: The average length of each value in the column.
- **Null values**: The percent and number of null values in the column.
- **Blank values**: The percent and number of blank values in the column.
- **Non-blank values**: The percent and number of non-blank values in the column.
- **Data summary**: An overview of the most common values in the column.
