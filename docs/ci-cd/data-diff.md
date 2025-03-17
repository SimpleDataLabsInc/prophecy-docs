---
title: Data diff
id: data-diff
description: View the difference between a target dataset and an expected dataset
tags:
  - data diff
  - target
---

Data diffs can help you identify when pipeline outputs do not meet predefined expectations. This can be useful for:

- Understanding the success of your pipeline migrations.
- Catching discrepancies before deploying pipelines to production.
- Detecting unintended schema changes in datasets over time.
- Identifying data mismatches when troubleshooting data transformation issues.

<!-- ![Data diff](img/data-diff.png) -->

## Requirements

To compute a data diff, you need:

- **Prophecy 4.0 or later.**
- **A Prophecy Python project.** Data diffs are not supported for Scala or SQL projects.
- **ProphecyLibsPython 1.9.37 or later** as a dependency for your project. For more information, see [Prophecy libraries](docs/extensibility/dependencies/prophecy-libs.md).
- **An expected dataset**. It must be in Parquet or Databricks Catalog Table format.

## What is data diff?

Data diffs are outputs of Target gems that show you differences between your target table and an expected table. Similar to a data sample, you can explore the data diff after [interactively running](docs/Spark/execution/interactive-execution.md) a pipeline.

<!-- ![Data diff output](img/data-diff-output.png) -->

The data diff has four views:

- **Overview**: A summary that displays various high-level comparisons of the generated (target) and expected datasets. Review the following section to understand each statistic in more detail.

<!-- ![Data diff overview](img/data-diff-overview.png) -->

- **Column differences**: The dataset schemas and the number of matching values for each column in both datasets.

<!-- ![Data diff column](img/data-diff-columns.png) -->

- **Values differences**: A table that displays side-by-side differences of every value in both datasets. This will show a sample of the data.

<!-- ![Data diff values](img/data-diff-values.png) -->

- **Data samples**: Samples of the generated and expected datasets for data exploration.

<!-- ![Data diff samples](img/data-diff-samples.png) -->

:::note
Data diffs only temporarily appear in the pipeline. They are not persisted in your project.
:::

### Overview

The following table provide in-depth descriptions of each statistic in the Overview tab of the data diff.

| Field                      | Description                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Datasets matching status   | Whether the datasets are matching or not.                                                                              |
| Number of columns matching | The number of columns that match. Two columns match if they have the same name and the same set of values.             |
| Number of rows matching    | The number of rows that match. Two rows match if they have the same key column(s) and the same values for each column. |
| Location                   | The location of the generated and expected datasets.                                                                   |
| Primary keys               | The primary keys defined in the data diff configuration.                                                               |
| Number of columns          | The number of columns in the generated and expected datasets.                                                          |
| Number of rows             | The number of rows in the generated and expected datasets.                                                             |
| Unique primary keys        | The number of unique primary keys in the generated and expected datasets.                                              |
| Duplicate primary keys     | The number of duplicate keys in the generated and expected datasets.                                                   |

### Unique and duplicated primary keys

Prophecy only calculates the data diff on rows with unique primary keys. Why is that?

Assume you have a the following table, where **first_name** and **last_name** are the primary keys:

| first_name | last_name | cust_id |
| ---------- | --------- | ------- |
| John       | Smith     | 23542   |
| John       | Smith     | 49203   |
| Jane       | Doe       | 43291   |
| Jane       | Brown     | 09312   |

If you try to compute the data diff **John Smith**, how will you know which row is the correct match? It is impossible to match the rows with 100% confidence. Because of this ambiguity, **Prophecy ignores rows with duplicated primary keys in the data diff.**

## Configuration

Data diffs are configured in **Target** gems.

1. Open a Target gem in your pipeline.
1. In the top right of the gem dialogue, click the **Options** (ellipses) menu.
1. Select **Data Diff**. This adds the Data Diff step to your Target gem configuration.
1. Open the **Data Diff** step.
1. Fill in the required parameters and **Save** the gem.

Review the data diff configuration parameters in the following table.

| Parameter                                    | Description                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Specify the key columns to join datasets on  | The column(s) that will match rows between datasets. In other words, rows are "joined" on these columns for comparison. Rows with duplicated primary keys **will not** be included in the data diff calculation. You can view the number of unique and duplicated primary keys in the **Overview** tab of the data diff. |
| Specify an alternative Parquet dataset path  | The path to the expected dataset in Parquet format.                                                                                                                                                                                                                                                                      |
| Specify an alternative dataset Catalog Table | The location of the Catalog Table in Databricks. This includes the database, schema (Unity Catalog only), and table names.                                                                                                                                                                                               |

:::note
The row order of the generated and expected dataset does not matter, as the rows are joined by keys, rather than row order.
:::

## Enable or disable

If you have configured data diff in your Target gem, Prophecy will automatically generate the data diff output. However, you can disable this feature from the gem action menu if needed. Disabling data diff (without deleting it) can be useful for large datasets, as it helps reduce computation time.
