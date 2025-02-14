---
title: Data Explorer
id: data-samples
description: View data samples during development
tags: []
---

During project development, you can interactively run your pipelines and analyze the interim data samples that result in the **Data Explorer**.

## Data preview

The **Data Preview** tab of the Data Explorer enables the following functionality.

- Sort the data
- Filter the data
- Export the data sample
- Save the data transformation as a new gem

### Data profile

The data preview also include data profiles for your interim data. You'll be able too see a high-level analysis for each column, including:

- Percent of non-blank values
- Percent of null values
- Percent of blank values
- Most common values

When you open the Data Explorer, you'll only see the data profile of the data **sample**. When you load the full data profile, Prophecy generates a more in-depth analysis on **all of the records** in the interim dataset. The full profile displays the following information:

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

## Data diff

The **Data Diff** tab of the Data Explorer can help you understand the difference between the interim dataset and the ? dataset.
