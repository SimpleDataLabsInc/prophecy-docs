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

- [Avro](./file/avro)
- [CSV](./file/csv)
- [Delta](./file/delta)
- [Fixed Format](./file/fixed-format)
- [JSON](./file/json)
- [Kafka](./file/kafka)
- [ORC](./file/orc)
- [Parquet](./file/parquet)
- [Text](./file/text)
- [XLSX (Excel)](./file/xlsx)
- [XML](./file/xml)
- [Seed](./file/seed)
- [Binary](./file/binary)
- [Hudi](./file/hudi)

### Synthetic data generator

You can generate synthetic data with [the data generator file type](/docs/Spark/gems/source-target/file/synthetic-data-generator.md). It allows you to specify the data type of each column and populates them with randomly generated data. You can also specify additional requirements such as the boundaries for each row, and the percentage of rows that must have null values.

## Warehouse

You can use the Source and Target gems to help you connect to the following warehouse-style data sources:

- [BigQuery](./warehouse/bigquery)
- [CosmosDB](./warehouse/cosmos)
- [DB2](./warehouse/db2)
- [JDBC](./warehouse/jdbc)
- [MongoDB](./warehouse/mongodb)
- [Oracle](./warehouse/oracle)
- [Redshift](./warehouse/redshift)
- [Salesforce](./warehouse/salesforce)
- [Snowflake](./warehouse/snowflake)
- [Teradata](./warehouse/teradata)

## Catalog

You can use the Source and Target gems to help you work with the following table-based formats:

- [Delta](./catalog-table/delta)
- [Hive](./catalog-table/hive)
- [Iceberg](./catalog-table/iceberg)

## Lookup

[Lookup](/docs/Spark/gems/source-target/lookup.md) is a special component that allows you to broadcast any data and use it anywhere in your pipeline at a later time.
