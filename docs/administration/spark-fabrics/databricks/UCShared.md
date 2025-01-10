---
title: UC Shared Cluster Support
id: ucshared
description: Gem support for UC Shared clusters
sidebar_position: 1
tags:
  - unitycatalog
  - shared
  - uc
  - unity
  - catalog
  - Fabric
  - databricks
---

## Cluster Types

Databricks clusters come with various [Access Modes](https://docs.databricks.com/clusters/create-cluster.html#what-is-cluster-access-mode).

To implement features including interactive pipeline runs, Prophecy has written some libraries in Python and Scala. These libraries need to be installed on the cluster.

As a result, some Prophecy features are not supported on all cluster access modes. See the table below to check if a particular Prophecy feature is supported on a cluster access mode.

| Prophecy Feature                                                                                      | Single User      | Shared                                        | No isolation shared | Unity Catalog Single User                                                                  | Unity Catalog Shared                                                                           |
| ----------------------------------------------------------------------------------------------------- | ---------------- | --------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Library installations allowed?                                                                        | Supported        | Supported but interim nodes can't be attached | Supported           | Supported                                                                                  | Version-dependent                                                                              |
| [Interims](docs/Spark/execution/databricks-clusters-behaviors.md#interims)                            | Regular Interims | Vanilla Interims                              | Regular Interims    | [Regular Interims](docs/Spark/execution/databricks-clusters-behaviors.md#regular-interims) | [**Vanilla Interims**](docs/Spark/execution/databricks-clusters-behaviors.md#vanilla-interims) |
| [Execution metrics](docs/Spark/execution/databricks-clusters-behaviors.md#execution-metrics)          | Supported        | Not Supported                                 | Supported           | Supported                                                                                  | **Not Supported**                                                                              |
| [Run history](docs/Orchestration/pipeline-monitoring/use-pipeline-monitoring.md#view-historical-runs) | Supported        | Not Supported                                 | Supported           | Supported                                                                                  | **Not Supported**                                                                              |
| [Interactive run](../../execution/interactive-execution) progress                                     | Supported        | Not Supported                                 | Supported           | Supported                                                                                  | **Not Supported**                                                                              |
| Interactive runs on pre-existing clusters                                                             | Supported        | Not Supported                                 | Supported           | Supported                                                                                  | **Not Supported**                                                                              |

When using Databricks with a `Shared` access mode, you must also connect to `Shared Mode` clusters.

## Gem Support

A subset of Prophecy Gems are not supported on UC Shared clusters according to the UC Shared cluster version (12.2, 14.3, or 15.4). Each row indicates the minimum Prophecy Package version required for that Gem to be supported on the relevant UC Shared cluster version listed.

Legacy Shared clusters 12.2 and below are shown for reference only; the later versions are strongly recommended.

### Sources / Targets

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                       | Package                     | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------------- | --------------------------- | ------------- | ---------------- | ---------------- |
| Avro                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Csv (Only File Path)      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Csv (SFTP - Source)       | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Csv (Sharepoint - Source) | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Delta                     | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Json                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| ORC                       | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Parque                    | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Text                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Fixed Format              | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Xlsx                      | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Xml                       | ProphecySparkBasicsPython   | Not Supported | 0.2.39           | 0.2.39           |
| Seed                      | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Createdata                | ProphecySparkAbinitioPython | Not Supported | Not Supported    | Not Supported    |
| Mtime                     | ProphecySparkAbinitioPython | Not Supported | Not Supported    | Not Supported    |

### Warehouses

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                          | Package                   | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ---------------------------- | ------------------------- | ------------- | ---------------- | ---------------- |
| JDBC                         | ProphecySparkBasicsPython | Not Supported | 0.2.39           | 0.2.39           |
| synapse                      | ProphecyWarehousePython   | 0.0.8         | Not Supported    | Not Supported    |
| Data Generator               | ProphecySparkBasicsPython | Not Supported | Not Supported    | 0.2.39           |
| Kafka (Source)               | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Kafka (Target)               | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Bigquery (Source)            | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Bigquery (Target)            | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Mongodb (Driver Mongodb+srv) | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Mongodb (Driver Mongodb)     | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Redshift                     | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |

### Catalog Table

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem           | Package                   | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------- | ------------------------- | ------------- | ---------------- | ---------------- |
| Catalog Table | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Iceberg       | ProphecySparkBasicsPython | Pending       | Pending          | Pending          |

### Lookup

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem    | Package | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------ | ------- | ------------- | ---------------- | ---------------- |
| Lookup | N/A     | Not Supported | Not Supported    | Not Supported    |

### Transform

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                            | Package                     | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------------------ | --------------------------- | ------------- | ---------------- | ---------------- |
| Aggregate                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| BulkColumnExpressions          | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| SampleRows                     | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Unpivot                        | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| ColumnParser                   | ProphecySparkBasicsPython   | Not Supported | 0.2.39           | 0.2.39           |
| DynamicSelect                  | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Deduplicate                    | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Filter                         | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| FlattenSchema                  | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Limit                          | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| OrderBy                        | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| Reformat                       | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| DataCleansing                  | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| SchemaTransform                | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| SetOperation                   | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| WindowFunction                 | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39           | 0.2.39           |
| BulkColumnRename               | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| Not Supportedrmalize           | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| MetaPivot                      | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| ReadRaw                        | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| ReadSeparated Values           | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| WriteSeparated Values          | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| SyncDataFrameColumnsWithSchema | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| Sequence                       | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| AssignKeys                     | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| RoundRobinPartition            | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| CompareRecords                 | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
| DynamicReplace                 | ProphecySparkAlteryxPython  | Not Supported | Pending          | Pending          |
| FuzzyMatch                     | ProphecySparkAlteryxPython  | Not Supported | Pending          | Pending          |

### Join/Split

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem            | Package                   | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| -------------- | ------------------------- | ------------- | ---------------- | ---------------- |
| Join           | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Repartition    | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| RowDistributor | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| CompareColumns | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |

### Custom

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                       | Package                     | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------------- | --------------------------- | ------------- | ---------------- | ---------------- |
| Script                    | N/A                         | Supported     | Supported        | Supported        |
| DeltaTableOperations      | ProphecySparkBasicsPython   | Supported     | Supported        | Supported        |
| FileOperation (DBFS Copy) | ProphecySparkBasicsPython   | Supported     | Supported        | Supported        |
| FileOperation             | ProphecySparkBasicsPython   | Pending       | Pending          | Pending          |
| Directory                 | ProphecySparkBasicsPython   | Not Supported | Not Supported    | Not Supported    |
| RestAPlEnrich             | ProphecySparkBasicsPython   | Not Supported | Not Supported    | 0.0.24           |
| Email                     | ProphecyWebAppPython        | Not Supported | Not Supported    | Not Supported    |
| EmailData                 | ProphecyWebAppPython        | Not Supported | Not Supported    | Not Supported    |
| Tableau                   | ProphecyWebAppPython        | Not Supported | Not Supported    | Not Supported    |
| ReadMultipleFiles         | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| WriteMultipleFiles        | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| Display                   | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| Trash                     | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| Todo                      | ProphecySparkAbinitioPython | Not Supported | Pending          | Pending          |
| Assertions                | ProphecySparkAbinitioPython | Not Supported | 0.0.24           | 0.0.24           |
| Log                       | ProphecySparkAbinitioPython | Not Supported | 0.0.24           | 0.0.24           |

### Subgraph

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                | Package                    | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------ | -------------------------- | ------------- | ---------------- | ---------------- |
| Basic              | N/A                        | Supported     | Supported        | Supported        |
| Published subgraph | N/A                        | Supported     | Supported        | Supported        |
| WhileIterator      | ProphecySparkAlteryxPython | Not Supported | 0.0.4            | 0.0.4            |
| Table Iterator     | ProphecySparkBasicsPython  | 0.2.39        | 0.2.39           | 0.2.39           |
| Catalog            | ProphecyStreamingPython    | Pending       | Pending          | Pending          |

### Streaming

Streaming Gems and capabilities are not supported on UC Shared clusters as of Prophecy 3.4.x.
