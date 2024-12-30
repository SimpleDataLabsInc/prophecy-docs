---
title: UC Shared Cluster Support
id: uc-shared
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

Databricks Unity Catalog clusters in Shared mode have some pecularities that require adaptations in Prophecy. Please find your Gem of interest below, and see if that Gem is supported according to the UC Shared cluster version (12.2, 14.3, or 15.4). Each row indicates the minimum Prophecy Package version required for that Gem to be supported on the relevant UC Shared cluster version listed.

## Sources / Targets

Minimum Prophecy Package version required to support Databricks Unity Catalog Shared Clusters

| Gem                       | 12.2 - shared | 14.3 - UC shared | 15.4 - UC shared | Package                     |
| ------------------------- | ------------- | ---------------- | ---------------- | --------------------------- |
| Avro                      | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Csv (Only File Path)      | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Csv (SFTP - Source)       | Not Supported | Not Supported    | Not Supported    | ProphecySparkBasicsPython   |
| Csv (Sharepoint - Source) | Not Supported | Not Supported    | Not Supported    | ProphecySparkBasicsPython   |
| Delta                     | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Json                      | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| ORC                       | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Parque                    | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Text                      | 0.2.39        | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Fixed Format              | Not Supported | Not Supported    | Not Supported    | ProphecySparkBasicsPython   |
| Xlsx                      | Not Supported | Not Supported    | Not Supported    | ProphecySparkBasicsPython   |
| Xml                       | Not Supported | 0.2.39           | 0.2.39           | ProphecySparkBasicsPython   |
| Seed                      | Not Supported | Not Supported    | Not Supported    | ProphecySparkBasicsPython   |
| CreateData                | Not Supported | Not Supported    | Not Supported    | ProphecySparkAbinitioPython |
| Mtime                     | Not Supported | Not Supported    | Not Supported    | ProphecySparkAbinitioPython |

## Warehouses

## Catalog Table

## Application

## Lookup

## Transform

## Join/Split

## Custom

## Subgraph

## Streaming

## User Defined Custom Gems
