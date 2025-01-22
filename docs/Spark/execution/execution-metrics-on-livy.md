---
title: Execution on Livy
id: executions_on_livy_clusters
description: Execution on Livy
tags:
  - execution
  - interim
  - livy
  - cdp
  - cloudera
  - emr
  - dataproc
  - metrics
  - spark
---

## Cluster Types

Execution metrics is supported for all types of clusters having Livy enabled and have a Hive metastore (HMS).
we can just provide the table names in [execution metric setup page](./execution-metrics#team-level-access-control).

- Prophecy **automatically creates** table if they do not exist, Or users can also create their own table with [required table schema](./execution-metrics#creating-tables-for-livy).
- Creating tables can be specially useful if user want to use **External tables** or want to change the default storage format (**parquet**).

## Interims on Livy

During development, often the user will want to see their data to make more sense of it and to check whether the expected output is getting
generated or not after the transformation. Prophecy generates these data samples as `Interims`, which are temporarily cached previews of data after each gem.
To check more about interims, please refer [here](/docs/Spark/execution/interactive-execution.md#interims).

We have interims available after each gem of pipeline.

![Regular Interims](img/SingleModeInterims.png)

## Execution Metrics on Livy

When running pipelines and Jobs, you may be interested to know few metrics related to execution like records
read/written, bytes read/written, total time taken and Data samples b/w components. These Dataset, pipeline-run and
Job-run related metrics are accumulated and stored on your data plane and can be viewed later from Prophecy UI. For more details please refer [here](./execution-metrics)

Please refer below images for Execution Metrics on pipelines page.

![pipeline_Execution_Metrics](img/execution-metrics-pipeline.png)

Each row here is one run of the pipeline. You can click and go to a particular run and see the interims for that run or metrics like Rows read/written, time taken etc

![Execution_Metrics](img/ExecutionMetrics.png)

You can also see Execution Metrics for each Dataset in the pipeline.

![Dataset_metrcis](img/execution-metrcis-dataset1.png)

Each row here is one run where this Dataset was used. You can click and go to a particular run and see more detailed insights on your data along with preview.

![Dataset_stats](img/dataset-statistics.png)
