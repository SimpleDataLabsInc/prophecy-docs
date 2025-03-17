---
title: Data diff
id: data-diff
description: View the difference between a target dataset and an expected dataset
tags:
  - data diff
  - target
---

Data diffs can help you identify when target datasets do not meet their predefined expectations.

## What is a data diff?

Data diffs are outputs of Target gems that show you the differences between your target table and an expected table. Similar to a data sample, you can explore the data diff after [interactively running](docs/Spark/execution/interactive-execution.md) a pipeline.

The data diff has four views:

- **Overview**: A summary of the data diff that displays various high-level information about the generated (target) and expected datasets. This information includes the location, primary keys, number of columns, and number of rows of the datasets.
- **Column differences**: The dataset schemas and the number of matching values for each column in both datasets.
- **Values differences**: A table that displays side-by-side differences of every value in both datasets.
- **Data samples**: Samples of the generated and expected datasets for data exploration.

## Parameters

| Parameter                                    | Description |
| -------------------------------------------- | ----------- |
| Specify the key columns to join datasets on  |             |
| Specify an alternative dataset path          |             |
| Specify an alternative dataset Catalog Table |             |

## Configure the data diff

Data diffs are configured in **Target** gems.

1. Open a Target gem in your pipeline.
1. In the top right of the gem dialogue, click the **Options** (ellipses) menu.
1. Select **Data Diff**. This adds the Data Diff step to your Target gem configuration.
1. Open the **Data Diff** step.
1. Fill in the required parameters and **Save** the gem.
