---
title: Data exploration
id: data-explorer
slug: /engineers/data-explorer
description: Data explorer for Spark
tags:
  - execution
  - explorer
  - sort
  - filter
  - interim
  - data
---

During project development, you can interactively run your pipelines and analyze the [data samples](/engineers/execution/#interactive-execution) that result in the **data explorer**. Use the data explorer to confirm the structure of each column, review data entries, and make sure the data types are correct.

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

If you want to see larger samples in the data explorer, you can enable the [Selective](docs/Spark/execution/data-sampling.md#selective-recommended) data sampling setting. When you enable this option, you will be able to see up to 10,000 rows in the data sample by default. You'll also see all columns by default.

:::note
You can still load more records into the preview when using selective data sampling.
:::
