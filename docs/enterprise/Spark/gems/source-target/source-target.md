---
title: Source And Target
id: source-target
slug: /engineers/source-target
description: Set of gems related to reading and writing data
tags:
  - gems
  - file
  - warehouse
  - catalog
  - lookup
---

The Source and Target gems to help you work with various file-based formats, connect to a warehouse-style data source, and work with various table-based formats.

## File

You can use the Source and Target gems to help you work with following file-based formats:

| Formats                                 |                               |                                 |
| --------------------------------------- | ----------------------------- | ------------------------------- |
| [Avro](/engineers/avro)                 | [JSON](/engineers/json)       | [Seed](/engineers/seed)         |
| [CSV](/engineers/csv)                   | [Kafka](/engineers/kafka)     | [Text](/engineers/text)         |
| [Delta](/engineers/delta)               | [ORC](/engineers/orc)         | [XLSX (Excel)](/engineers/xlsx) |
| [Fixed Format](/engineers/fixed-format) | [Parquet](/engineers/parquet) | [XML](/engineers/xml)           |

### Synthetic data generator

You can generate synthetic data with [the data generator file type](/engineers/data-generator). It allows you to specify the data type of each column and populates them with randomly generated data. You can also specify additional requirements such as the boundaries for each row, and the percentage of rows that must have null values.

## Warehouse

You can use the Source and Target gems to help you connect to the following warehouse-style data sources:

| Data Sources                    |                                     |                                   |
| ------------------------------- | ----------------------------------- | --------------------------------- |
| [BigQuery](/engineers/bigquery) | [MongoDB](/engineers/mongodb)       | [Snowflake](/engineers/snowflake) |
| [CosmosDB](/engineers/cosmosdb) | [Oracle](/engineers/oracle)         | [Teradata](/engineers/teradata)   |
| [DB2](/engineers/db2)           | [Redshift](/engineers/redshift)     |                                   |
| [JDBC](/engineers/jdbc)         | [Salesforce](/engineers/salesforce) |                                   |

## Catalog

You can use the Source and Target gems to help you work with the following table-based formats:

| Formats                   |                               |                               |
| ------------------------- | ----------------------------- | ----------------------------- |
| [Delta](/engineers/delta) | [Hive](/engineers/hive-table) | [Iceberg](/engineers/iceberg) |

## Lookup

[Lookup](/engineers/lookup) is a special component that allows you to broadcast any data and use it anywhere in your pipeline at a later time.
