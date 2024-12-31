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

Databricks Unity Catalog clusters in Shared mode have some [pecularities](https://docs.databricks.com/en/compute/access-mode-limitations.html#shared-access-mode-limitations-on-unity-catalog) that require adaptations in Prophecy. Please find your Gem of interest below, and see if that Gem is supported according to the UC Shared cluster version (12.2, 14.3, or 15.4). Each row indicates the minimum Prophecy Package version required for that Gem to be supported on the relevant UC Shared cluster version listed.

## Sources / Targets

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
| Createdata                | ProphecySparkAbinitioPython | Not Supported | Not Supported    | Pending          |
| Mtime                     | ProphecySparkAbinitioPython | Not Supported | Not Supported    | Pending          |

## Warehouses

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
| Cosmodb                      | ProphecyWarehousePython   | Pending       | Pending          | Pending          |
| Mongodb (Driver Mongodb+srv) | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Mongodb (Driver Mongodb)     | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |
| Redshift                     | ProphecyWarehousePython   | Not Supported | Not Supported    | Not Supported    |

## Catalog Table

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem           | Package                   | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------- | ------------------------- | ------------- | ---------------- | ---------------- |
| Catalog Table | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Iceberg       | ProphecySparkBasicsPython | Pending       | Pending          | Pending          |

## Application

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem        | Package              | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ---------- | -------------------- | ------------- | ---------------- | ---------------- |
| Salesforce | ProphecyWebAppPython | Pending       | Pending          | Pending          |

## Lookup

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem    | Package | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------ | ------- | ------------- | ---------------- | ---------------- |
| Lookup |         | Supported     | Supported        | Supported        |

## Transform

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
| Normalize                      | ProphecySparkAbinitioPython | Not Supported | 0.2.24           | 0.2.24           |
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

## Join/Split

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem            | Package                   | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| -------------- | ------------------------- | ------------- | ---------------- | ---------------- |
| Join           | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| Repartition    | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| RowDistributor | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |
| CompareColumns | ProphecySparkBasicsPython | 0.2.39        | 0.2.39           | 0.2.39           |

## Custom

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                       | Package                     | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------------- | --------------------------- | ------------- | ---------------- | ---------------- |
| Script                    |                             | Supported     | Supported        | Supported        |
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

## Subgraph

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem                | Package                    | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| ------------------ | -------------------------- | ------------- | ---------------- | ---------------- |
| Basic              |                            | Supported     | Supported        | Supported        |
| Published subgraph |                            | Supported     | Supported        | Supported        |
| WhileIterator      | ProphecySparkAlteryxPython | Not Supported | 0.0.4            | 0.0.4            |
| Table Iterator     | ProphecySparkBasicsPython  | 0.2.39        | 0.2.39           | 0.2.39           |
| Catalog            | ProphecyStreamingPython    | Pending       | Pending          | Pending          |

## Streaming

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters:

| Gem       | Package                 | 12.2 - Shared | 14.3 - UC shared | 15.4 - UC shared |
| --------- | ----------------------- | ------------- | ---------------- | ---------------- |
| Catalog   | ProphecyStreamingPython | Pending       | Pending          | Pending          |
| SplunkHEC | ProphecyStreamingPython | Pending       | Pending          | Pending          |
| Watermark | ProphecyStreamingPython | Pending       | Pending          | Pending          |
| CSV       | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
| Delta     | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
| JSON      | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
| Kafka     | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
| Orc       | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
| Parquet   | ProphecyStreamingPython | Not Supported | Not Supported    | Not Supported    |
