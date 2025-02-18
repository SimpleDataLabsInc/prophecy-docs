---
title: Data explorer
id: data-explorer
description: Data explorer for Spark
tags:
  - execution
  - explorer
  - sort
  - filter
  - interim
  - data
---

During project development, you can interactively run your pipelines and analyze the [interim data samples](docs/Spark/execution/interactive-execution.md#interims) that result in the **data explorer**. Use the data explorer to confirm the structure of each column, review data entries, and make sure the data types are correct.

## Data preview

The **Data Preview** tab of the data explorer enables the following functionality.

- Sort the data
- Filter the data
- Search through the data
- Show or hide columns in the preview
- Export the data sample in CSV or JSON format
- Save the data transformation as a new gem

![Data_explorer](img/Data_Explorer.png)

When you filter, sort, or search through the data, you are only working with the **visible sample** of the data. To apply these to the whole dataset in the preview, you must either:

- Load the whole dataset into the preview by clicking **Load More** after the last record in the preview until all records are shown.
- Click **Run** in the top right corner of the data preview. This will filter and sort based on all of the data in the backend (rather than a sample).

### Large sample interims

If you want to see larger samples in the data explorer, you can enable the **Selective** data sampling setting. When you enable this option, you will be able to see up to 10,000 rows in the data sample by default. You'll also see all columns by default.

:::note

You can still load more records into the preview when using selective data sampling.

:::

If you disable the large data preview on an individual gem, you'll see a pale-color interim on its output after running the data pipeline. This means that no data sample was generated. If you want to generate the data preview, open the pale interim and it will load the data. After it loads, the interim will look like a normal interim.

### Data profile

The data preview also include data profiles for your interim data. You'll be able too see a high-level analysis for each column, including:

- Percent of non-blank values
- Percent of null values
- Percent of blank values
- Most common values

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

## Data diff

The **Data Diff** tab of the data explorer can help you understand the difference between target tables and your predefined expectations. Learn more in [Data Diff](docs/Spark/execution/data-diff.md).
