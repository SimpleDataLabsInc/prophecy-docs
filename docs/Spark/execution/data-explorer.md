---
title: Data explorer
id: data-explorer
description: Data Explorer for Spark
tags:
  - execution
  - explorer
  - sort
  - filter
  - interim
  - data
---

The Data Explorer feature empowers users to seamlessly explore and analyze their data samples directly within the user interface (UI). This feature provides a range of capabilities to help users gain insights, verify data accuracy, and make informed decisions.

![Data_explorer](img/Data_Explorer.png)

## Default Data Explorer

The default Data Explorer can help you navigate your interim datasets and understand your data better. With the Data Explorer, when you open an interim dataset, you can:

1. Filter the data.
1. Sort the data.
1. Search through the data.
1. Show or hide columns.
1. Load more rows into the preview sample.
1. Download data in CSV or JSON format.
1. Create a new gem.

### Data sample

When you filter, sort, or search through the data, you are only working with the **visible sample** of the data. To apply these to the whole dataset in the preview, you must either:

- Load the whole dataset into the preview by clicking **Load More** after the last record in the preview until all records are shown.
- Click **Run** in the top right corner of the data preview. This will filter and sort based on all of the data in the backend (rather than a sample).

### Create gem

After analyzing the data, you can retain the filter and sort options in the pipeline by clicking on the **Create gems** option. This action saves the applied filter and sort as a `Filter` and `OrderBy` gem in the pipeline.

## Large-sample Data Explorer

If you want to automatically see larger samples in the Data Explorer, you can enable the **Selective** data sampling setting to do so.

When you enable this option, you will be able to see up to 10,000 rows in the Data Explorer. You'll also see all of the columns in the preview.

### Disable per gem

If you disable the large data preview on an individual gem, you'll see a pale-color interim on its output after running the data pipeline. If you want to load the data preview, open the pale interim and it will load the preview. After it loads, the interim will look like a normal interim.
