---
title: Create Execution Metric Tables
id: create-metrics-tables-livy
description: Capturing execution metrics tables for Livy
sidebar_position: 2
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

Following are sample Create table commands for tables with schema, User can store these tables using any format like Avro, Parquet, ORC, Delta etc.

- **Pipeline Metrics**

```sql
  CREATE TABLE IF NOT EXISTS <database.pipeline_runs_table_name>
  (
      uid STRING NOT NULL,
      pipeline_uri STRING NOT NULL,
      job_uri STRING,
      job_run_uid STRING,
      task_run_uid STRING,
      status STRING,
      fabric_uid STRING NOT NULL,
      time_taken LONG,
      rows_read LONG,
      rows_written LONG,
      created_at TIMESTAMP,
      created_by STRING NOT NULL,
      run_type STRING,
      input_datasets ARRAY<STRING>,
      output_datasets ARRAY<STRING>,
      workflow_code MAP<STRING, STRING>,
      expired Boolean,
      branch STRING,
      pipeline_config STRING,
      user_config STRING,
      expected_interims INT,
      actual_interims INT,
      logs STRING
  ) stored as parquet
  PARTITIONED BY (fabric_uid, pipeline_uri, created_by)
```

- **Component Metrics**

```sql
  CREATE TABLE IF NOT EXISTS <database.component_runs_table_name>
  (
      uid STRING NOT NULL,
      component_uri STRING NOT NULL,
      pipeline_uri STRING,
      pipeline_run_uid String NOT NULL,
      fabric_uid String NOT NULL,
      component_name STRING,
      interim_component_name STRING,
      component_type STRING,
      interim_subgraph_name STRING,
      interim_process_id STRING,
      interim_out_port STRING,
      created_at TIMESTAMP,
      created_by STRING NOT NULL,
      records LONG,
      bytes LONG,
      partitions LONG,
      expired BOOLEAN,
      run_type STRING,
      job_uri STRING,
      branch STRING
  ) stored as parquet
  PARTITIONED BY (fabric_uid, component_uri, created_by)
```

- **Interims**

```sql
  CREATE TABLE IF NOT EXISTS <database.interims_table_name>
  (
      uid STRING NOT NULL,
      interim STRING,
      created_by STRING,
      created_at,
      fabric_uid STRING
  ) stored as parquet
  PARTITIONED BY (created_by, fabric_uid)
```
