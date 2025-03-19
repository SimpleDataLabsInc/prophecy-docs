---
title: Source And Target
id: source-target
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

| Formats                             |                           |                             |
| ----------------------------------- | ------------------------- | --------------------------- |
| [Avro](./file/avro)                 | [JSON](./file/json)       | [Seed](./file/seed)         |
| [CSV](./file/csv)                   | [Kafka](./file/kafka)     | [Text](./file/text)         |
| [Delta](./file/delta)               | [ORC](./file/orc)         | [XLSX (Excel)](./file/xlsx) |
| [Fixed Format](./file/fixed-format) | [Parquet](./file/parquet) | [XML](./file/xml)           |

### Synthetic data generator

You can generate synthetic data with [the data generator file type](/docs/Spark/gems/source-target/file/synthetic-data-generator.md). It allows you to specify the data type of each column and populates them with randomly generated data. You can also specify additional requirements such as the boundaries for each row, and the percentage of rows that must have null values.

## Warehouse

You can use the Source and Target gems to help you connect to the following warehouse-style data sources:

| Data Sources                     |                                      |                                    |
| -------------------------------- | ------------------------------------ | ---------------------------------- |
| [BigQuery](./warehouse/bigquery) | [MongoDB](./warehouse/mongodb)       | [Snowflake](./warehouse/snowflake) |
| [CosmosDB](./warehouse/cosmos)   | [Oracle](./warehouse/oracle)         | [Teradata](./warehouse/teradata)   |
| [DB2](./warehouse/db2)           | [Redshift](./warehouse/redshift)     |                                    |
| [JDBC](./warehouse/jdbc)         | [Salesforce](./warehouse/salesforce) |                                    |

## Catalog

You can use the Source and Target gems to help you work with the following table-based formats:

| Formats                        |                              |                                    |
| ------------------------------ | ---------------------------- | ---------------------------------- |
| [Delta](./catalog-table/delta) | [Hive](./catalog-table/hive) | [Iceberg](./catalog-table/iceberg) |

## Lookup

[Lookup](/docs/Spark/gems/source-target/lookup.md) is a special component that allows you to broadcast any data and use it anywhere in your pipeline at a later time.
