---
title: Data Explorer
id: data-explorer
description: Data Explorer for SQL
tags:
  - execution
  - explorer
  - sort
  - filter
  - interim
  - data
---

The Data Explorer can help you navigate your [interim data samples](docs/SQL/execution/execution.md#interims) and understand your data better. Use it to confirm the structure of each column, review data entries, and make sure the data types are correct.

When you open the Data Explorer for an interim, you can:

1. Filter the data.
1. Sort the data.
1. Search through the data.
1. Show or hide columns.
1. Load more rows into the preview sample.
1. Download data in CSV or JSON format.
1. Create a new gem.

![DataExplorationSQL](./img/DataExplorationSQL.png)

## Data sample

When you filter, sort, or search through the data, you are only working with the **visible sample** of the data. To apply these to the whole dataset in the preview, you must either:

- Load the whole dataset into the preview by clicking **Load More** after the last record in the preview until all records are shown.
- Click **Run** in the top right corner of the data preview. This will filter and sort based on all of the data in the backend (rather than a sample).

## Create gems

After analyzing the data, you can retain the filter and sort options in the pipeline by clicking on the **Create Gems** option. This action saves the applied filter and sort as a `Filter` and `OrderBy` gem in the pipeline.
