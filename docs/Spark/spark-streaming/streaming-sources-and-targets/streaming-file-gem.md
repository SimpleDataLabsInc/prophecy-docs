---
title: File-based
id: streaming-file-apps
slug: /engineers/file-based-streaming-source-and-targets
description: File-based Source and Target gems for Streaming Data Applications
tags:
  - spark
  - streaming
  - file based
  - s3
  - azure blob storage
  - hdfs
---

## File-based Streaming Sources and Targets

For file stream sources, incoming data files are incrementally and efficiently processed as they arrive in cloud storage. No additional setup is necessary, and cloud storage only needs to be accessible from the User's fabric.

Autoloader is available for use with a Databricks fabric and supports loading data directory listing, as well as using file notifications via AWS's Simple Queue Service (SQS). More on Autoloader [here](https://docs.databricks.com/ingestion/auto-loader/index.html). For different Cloud Storages supported by Autoloader, please check [this](https://docs.databricks.com/ingestion/auto-loader/file-detection-modes.html) page.

When you select Format and click NEXT, this Location Dialog opens:
![File Streaming](../img/file-source.png)

## Databricks Auto Loader

Databricks fabrics can utilize [Auto Loader](https://docs.databricks.com/ingestion/auto-loader/index.html).

Auto Loader supports loading data directory listing as well as using AWS's Simple Queue Service (SQS) file notifications. More on this [here](https://docs.databricks.com/ingestion/auto-loader/file-detection-modes.html). Stream sources using Auto Loader allow [configurable properties](https://docs.databricks.com/ingestion/auto-loader/options.html#file-format-options) that can be configured using the Field Picker on the gem:
![Autoloader Directory Listing Mode](../img/autoloader-directory-listing.png)
![Autoloader Filer Notifiction Mode](../img/autoloader-file-notification.png)

## Formats Supported

The following file formats are supported. The gem properties are accessible under the Properties Tab by clicking on `+` :

1. JSON: Native Connector Docs for Source [here](https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.streaming.DataStreamReader.json.html). Additional Autoloader Options [here](https://docs.databricks.com/ingestion/auto-loader/options.html#json-options).
2. CSV: Native Connector Docs for Source [here](https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.streaming.DataStreamReader.csv.html). Additional Autoloader Options [here](https://docs.databricks.com/ingestion/auto-loader/options.html#csv-options).
3. Parquet: Native Connector Docs for Source [here](https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.streaming.DataStreamReader.csv.html). Additional Autoloader Options [here](https://docs.databricks.com/ingestion/auto-loader/options.html#csv-options).
4. ORC: Native Connector Docs for Source [here](https://spark.apache.org/docs/3.1.3/api/python/reference/api/pyspark.sql.streaming.DataStreamReader.orc.html). Additional Autoloader Options [here](https://docs.databricks.com/ingestion/auto-loader/options.html#orc-options).
5. Delta: A quickstart on Delta Lake Stream Reading and Writing is available [here](https://docs.databricks.com/structured-streaming/delta-lake.html#delta-table-as-a-source). Connector Docs are available [here](https://docs.delta.io/latest/delta-streaming.html). Note, that this would require installing the Spark Delta Lake Connector if the user has an on prem deployment. We have additionally provided support for Merge in the Delta Lake Write Connector. (uses `forEatchBatch` behind the scenes).

## File-based Streaming Tutorial

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/858342a85bbe4bd4bab68326225a3f31" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>
