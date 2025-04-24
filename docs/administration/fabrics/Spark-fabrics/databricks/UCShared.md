---
title: Feature compatibility with UC clusters
sidebar_label: UC cluster compatibility
id: ucshared
description: Gem support for Unity Catalog standard and dedicated access mode
sidebar_position: 1
tags:
  - unitycatalog
  - shared
  - uc
  - unity
  - catalog
  - fabric
  - databricks
---

When you configure a Databricks cluster, you must specify the cluster [access mode](https://docs.databricks.com/aws/en/compute/configure#access-modes). This page provides an overview of how different Prophecy features perform across various Unity Catalog cluster types.

## High-level features

Review the table below to determine which Prophecy features are available based on the cluster access mode you choose.

| Prophecy Feature                                                                                      | Dedicated (formerly single user)                                                                                | Standard (formerly shared)                    | No isolation-shared (legacy) | Unity Catalog Dedicated (formerly single user) | Unity Catalog Standard (formerly shared) |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------- | ---------------------------------------------- | ---------------------------------------- |
| Library installations                                                                                 | Supported                                                                                                       | Supported but interim nodes can't be attached | Supported                    | Supported                                      | Version-dependent                        |
| [Data samples](/engineers/execution/#interactive-execution)                                           | [Regular](/engineers/data-sampling#all-default) and [Selective](/engineers/data-sampling#selective-recommended) | [Vanilla](/engineers/data-sampling#vanilla)   | Regular and Selective        | Regular and Selective                          | Vanilla and Selective                    |
| [Execution metrics](docs/Spark/execution/execution-metrics.md)                                        | Supported                                                                                                       | Not Supported                                 | Supported                    | Supported                                      | **Not Supported**                        |
| [Run history](docs/Orchestration/pipeline-monitoring/use-pipeline-monitoring.md#view-historical-runs) | Supported                                                                                                       | Not Supported                                 | Supported                    | Supported                                      | **Not Supported**                        |
| [Interactive run](/engineers/execution) progress                                                      | Supported                                                                                                       | Not Supported                                 | Supported                    | Supported                                      | **Not Supported**                        |
| Interactive runs on pre-existing clusters                                                             | Supported                                                                                                       | Not Supported                                 | Supported                    | Supported                                      | **Not Supported**                        |
| [User-defined functions](/engineers/user-defined-functions)                                           | Supported                                                                                                       | Not supported                                 | Supported                    | Supported                                      | Supported\*                              |

:::info \*UDF support
Graviton instance support for [UDFs on Unity Catalog-enabled clusters](https://docs.databricks.com/aws/en/udf/) is available in Databricks Runtime 15.2 and above. Clusters must have standard access mode for Python UDFs.
:::

## Gem support

A subset of Prophecy gems are not supported on UC standard clusters according to the UC standard cluster version (12.2, 14.3, or 15.4). Each row indicates the minimum Prophecy Package version required for that gem to be supported on the relevant UC standard cluster version listed.

:::info
The following tables apply to **Python** gems only. Support for Scala gems may differ.
:::

:::note
Legacy Shared clusters 12.2 and below are shown for reference only. Later versions are strongly recommended.
:::

### Sources / Targets

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem                       | Package                     | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------------------------- | --------------------------- | ------------- | ------------------ | ------------------ |
| Avro                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Csv (Only File Path)      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Csv (SFTP - Source)       | ProphecySparkBasicsPython   | Not Supported | 0.2.44             | 0.2.44             |
| Csv (SharePoint - Source) | ProphecySparkBasicsPython   | Not Supported | 0.2.44             | 0.2.44             |
| Delta                     | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Json                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| ORC                       | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Parquet                   | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Text                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Fixed Format              | ProphecySparkBasicsPython   | Not Supported | Not Supported      | Not Supported      |
| Xlsx                      | ProphecySparkBasicsPython   | Not Supported | Not Supported      | Not Supported      |
| Xml                       | ProphecySparkBasicsPython   | Not Supported | 0.2.39             | 0.2.39             |
| Seed                      | ProphecySparkBasicsPython   | Not Supported | 0.2.39             | 0.2.39             |
| Createdata                | ProphecySparkAbinitioPython | Not Supported | Not Supported      | Not Supported      |
| Mtime                     | ProphecySparkAbinitioPython | Not Supported | Not Supported      | Not Supported      |

### Warehouses

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem                          | Package                   | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ---------------------------- | ------------------------- | ------------- | ------------------ | ------------------ |
| JDBC                         | ProphecySparkBasicsPython | Not Supported | 0.2.39             | 0.2.39             |
| synapse                      | ProphecyWarehousePython   | 0.0.8         | Not Supported      | Not Supported      |
| Data Generator               | ProphecySparkBasicsPython | Not Supported | Not Supported      | 0.2.39             |
| Kafka (Source)               | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| Kafka (Target)               | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| Bigquery (Source)            | ProphecyWarehousePython   | Not Supported | 0.0.9              | 0.0.9              |
| Bigquery (Target)            | ProphecyWarehousePython   | Not Supported | 0.0.9              | 0.0.9              |
| Mongodb (Driver Mongodb+srv) | ProphecyWarehousePython   | Not Supported | Not Supported      | Not Supported      |
| Mongodb (Driver Mongodb)     | ProphecyWarehousePython   | Not Supported | Not Supported      | Not Supported      |
| Redshift                     | ProphecyWarehousePython   | Not Supported | Not Supported      | Not Supported      |

### Catalog Table

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem           | Package                   | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------------- | ------------------------- | ------------- | ------------------ | ------------------ |
| Catalog Table | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| Iceberg       | ProphecySparkBasicsPython | Pending       | Pending            | Pending            |

### Lookup

The following table defines Lookup support Databricks Unity Catalog Standard Clusters. If `Lookup` is not supported, use a `Left join` instead.

| Gem    | Package | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------ | ------- | ------------- | ------------------ | ------------------ |
| Lookup | N/A     | Not Supported | Not Supported      | Supported\*        |

:::info \*Lookup support
Lookups are implemented as user-defined functions under the hood in Prophecy. Graviton instance support for [UDFs on Unity Catalog-enabled clusters](https://docs.databricks.com/aws/en/udf/) is available in Databricks Runtime 15.2 and above.
:::

### Transform

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem                            | Package                     | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------------------------------ | --------------------------- | ------------- | ------------------ | ------------------ |
| Aggregate                      | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| BulkColumnExpressions          | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| SampleRows                     | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Unpivot                        | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| ColumnParser                   | ProphecySparkBasicsPython   | Not Supported | 0.2.39             | 0.2.39             |
| DynamicSelect                  | ProphecySparkBasicsPython   | Not Supported | Not Supported      | Not Supported      |
| Deduplicate                    | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Filter                         | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| FlattenSchema                  | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Limit                          | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| OrderBy                        | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| Reformat                       | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| DataCleansing                  | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| SchemaTransform                | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| SetOperation                   | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| WindowFunction                 | ProphecySparkBasicsPython   | 0.2.39        | 0.2.39             | 0.2.39             |
| BulkColumnRename               | ProphecySparkBasicsPython   | Not Supported | Not Supported      | Not Supported      |
| Normalize                      | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| MetaPivot                      | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| ReadRaw                        | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| ReadSeparated Values           | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| WriteSeparated Values          | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| SyncDataFrameColumnsWithSchema | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| Sequence                       | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| AssignKeys                     | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| RoundRobinPartition            | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| CompareRecords                 | ProphecySparkAbinitioPython | Not Supported | 0.2.24             | 0.2.24             |
| DynamicReplace                 | ProphecySparkAlteryxPython  | Not Supported | Pending            | Pending            |
| FuzzyMatch                     | ProphecySparkAlteryxPython  | Not Supported | Pending            | Pending            |

### Join/Split

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem            | Package                   | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| -------------- | ------------------------- | ------------- | ------------------ | ------------------ |
| Join           | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| Repartition    | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| RowDistributor | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |
| CompareColumns | ProphecySparkBasicsPython | 0.2.39        | 0.2.39             | 0.2.39             |

### Custom

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem                       | Package                     | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------------------------- | --------------------------- | ------------- | ------------------ | ------------------ |
| Script                    | N/A                         | Supported     | Supported          | Supported          |
| DeltaTableOperations      | ProphecySparkBasicsPython   | Supported     | Supported          | Supported          |
| FileOperation (DBFS Copy) | ProphecySparkBasicsPython   | Supported     | Supported          | Supported          |
| FileOperation             | ProphecySparkBasicsPython   | Pending       | Pending            | Pending            |
| Directory                 | ProphecySparkBasicsPython   | Not Supported | Not Supported      | Not Supported      |
| RestAPlEnrich             | ProphecySparkBasicsPython   | Not Supported | Not Supported      | 0.0.24             |
| Email                     | ProphecyWebAppPython        | Not Supported | 0.1.2              | 0.1.2              |
| EmailData                 | ProphecyWebAppPython        | Not Supported | 0.1.2              | 0.1.2              |
| Tableau                   | ProphecyWebAppPython        | Not Supported | Not Supported      | Not Supported      |
| ReadMultipleFiles         | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| WriteMultipleFiles        | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| Display                   | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| Trash                     | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| Todo                      | ProphecySparkAbinitioPython | Not Supported | Pending            | Pending            |
| Assertions                | ProphecySparkAbinitioPython | Not Supported | 0.0.24             | 0.0.24             |
| Log                       | ProphecySparkAbinitioPython | Not Supported | 0.0.24             | 0.0.24             |

### Subgraph

Minimum Prophecy Package version required to support Databricks Unity Catalog Standard Clusters:

| Gem                | Package                    | 12.2 - Shared | 14.3 - UC standard | 15.4 - UC standard |
| ------------------ | -------------------------- | ------------- | ------------------ | ------------------ |
| Basic              | N/A                        | Supported     | Supported          | Supported          |
| Published subgraph | N/A                        | Supported     | Supported          | Supported          |
| WhileIterator      | ProphecySparkAlteryxPython | Not Supported | 0.0.4              | 0.0.4              |
| Table Iterator     | ProphecySparkBasicsPython  | 0.2.39        | 0.2.39             | 0.2.39             |
| Catalog            | ProphecyStreamingPython    | Pending       | Pending            | Pending            |

### Streaming

Streaming gems and capabilities are not supported on UC standard clusters as of Prophecy 3.4.x.
