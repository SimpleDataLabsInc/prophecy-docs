---
title: Execution
id: execution
description: Execution
tags: [execution, spark]
sidebar_position: 3
---

## What is interactive execution?

When running a Pipeline or Job, you'll want to see a data sample (interim) after each step in the Pipeline. Any errors will be surfaced in the Pipeline canvas along with logs to quickly get moving.

After running a Pipeline multiple times, you may be interested to compare metrics related to execution like records read/written, bytes read/written, total time taken and Data samples between components. These Dataset, Pipeline-run and Job-run related metrics are accumulated and stored on your data plane and can be viewed later from the Prophecy UI.

## How to setup interactive execution

Prophecy supports interactive execution on any Spark cluster which has a Hive metastore.

1. **Databricks** - [Setup](/docs/low-code-spark/execution/setup-execution/databricks/execution-metrics-on-databricks.md) Databricks Clusters for execution metrics and [create the tables](/docs/low-code-spark/execution/setup-execution/databricks/databricks-create-tables.md) to store execution metrics.

2. **Livy** - EMR, Cloudera, Dataproc, and CDP are all accessible via Livy. [Setup](/docs/low-code-spark/execution/setup-execution/livy/execution-metrics-on-livy.md) Livy clusters for execution metrics and [create the tables](/docs/low-code-spark/execution/setup-execution/livy/livy-create-tables.md) to store execution metrics.
   ~  
   ~
