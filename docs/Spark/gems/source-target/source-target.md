---
title: Source & Target
id: source-target
description: Set of gems related to the input and output of data
tags: []
---

Constitutes the set of Gems that help with loading and saving data.

## File

A collection of Gems related to working with various file-based formats.

| Name                                | Description                                                                                                       |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Avro](./file/avro)                 | Avro format is a row-based storage format for Hadoop, which is widely used as a serialization platform.           |
| [CSV](./file/csv)                   | Allows you to read or write a delimited file (often called Comma Separated File, CSV).                            |
| [Delta](./file/delta)               | Reads data from Delta files present at a path and writes Delta files to a path based on configuration.            |
| [Fixed Format](./file/fixed-format) | Read data from fixed format files with expected schema, or write data to fixed format files with expected schema. |
| [Iceberg](./file/iceberg)           | Reads data from Iceberg files present at a path and writes Iceberg files to a path based on configuration.        |
| [JSON](./file/json)                 | Allows you to read or write a delimited file (often called Comma Separated File, CSV).                            |
| [Kafka](./file/kafka)               | This source currently connects with Kafka Brokers in Batch mode.                                                  |
| [ORC](./file/orc)                   | ORC (Optimized Row Columnar) is a columnar file format designed for Spark/Hadoop workloads.                       |
| [Parquet](./file/parquet)           | Parquet is an open source file format built to handle flat columnar storage data formats.                         |
| [Text](./file/text)                 | This Gem allows you to read from or write to text file.                                                           |
| [XLSX (Excel)](./file/xlsx)         | Allows you to read or write Excel-compatible files.                                                               |

## Warehouse

A collection of Gems specializing in connecting to warehouse-style data sources.

| Name                                 | Description                                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [BigQuery](./warehouse/bigquery)     | Allows you to read or write data to the BigQuery warehouse, using a high-performance connector. Enterprise only.  |
| [CosmosDB](./warehouse/cosmos)       | Allows you to read or write data to the CosmosDB database.                                                        |
| [DB2](./warehouse/db2)               | Allows you to read or write data to the DB2 warehouse, using a high-performance connector. Enterprise only.       |
| [JDBC](./warehouse/jdbc)             | Allows you to read or write data to the JDBC database.                                                            |
| [MongoDB](./warehouse/mongodb)       | Allows you to read or write data to the MongoDB database.                                                         |
| [Oracle](./warehouse/oracle)         | Allows you to read or write data to the Oracle warehouse, using a high-performance connector. Enterprise only.    |
| [Redshift](./warehouse/redshift)     | Allows you to read or write data to the Redshift warehouse, using a high-performance connector. Enterprise only.  |
| [Salesforce](./warehouse/salesforce) | Allows you to read or write data to the Salesforce warehouse.                                                     |
| [Snowflake](./warehouse/snowflake)   | Allows you to read or write data to the Snowflake warehouse, using a high-performance connector. Enterprise only. |
| [Teradata](./warehouse/teradata)     | Allows you to read or write data to the Teradata warehouse, using a high-performance connector. Enterprise only.  |

## Catalog

A collection of Gems related to working with various table-based formats.

| Name                           | Description                                                                                                 |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [Delta](./catalog-table/delta) | Reads data from Delta tables saved in data catalog and writes data into Delta table in a managed Metastore. |
| [Hive](./catalog-table/hive)   | Read from or write to Tables managed by a Hive metastore.                                                   |

## Lookup

[Lookup](/docs/Spark/gems/source-target/advanced/lookup.md) is a special component that allows you to broadcast any data, to later be used anywhere in your Pipeline.

## Synthetic Data Generator

If you don't have the data you need, try generating fake data. Using the [Synthetic Data Generator Gem](/docs/Spark/gems/source-target/advanced/synthetic-data-generator/synthetic-data-generator.md), you can specify columns with various datatypes and populate fields with randomly generated data. Specify the boundaries for each row, the percentage of rows which should have null values, etc. It's not real data but it's the next best thing!
