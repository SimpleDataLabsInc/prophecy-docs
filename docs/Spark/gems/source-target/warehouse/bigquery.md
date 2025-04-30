---
title: BigQuery
id: bigquery
slug: /engineers/bigquery
description: Parameters and properties to read from and write to the BigQuery warehouse
tags:
  - gems
  - warehouse
  - bigquery
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWarehousePython"
  python_package_version="0.0.9+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

:::info Built on
This connector is built on top of the already available [Apache Spark SQL connector for Google BigQuery](https://github.com/GoogleCloudDataproc/spark-bigquery-connector/).<br/><br/>
For non-Databricks clusters, install the corresponding library, and see [Spark BigQuery library compatibility matrix](https://github.com/GoogleCloudDataproc/spark-bigquery-connector#connector-to-spark-compatibility-matrix) documentation. <br/>
:::

You can read from and write to `BigQuery`.

## Parameters

| Parameter           | Tab        | Description                                                                                                                                                                                     |
| ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Parent Project Name | Location   | Google Cloud Project ID of the table to bill for the export.                                                                                                                                    |
| Table Name          | Location   | Name of the table.                                                                                                                                                                              |
| Credentials         | Location   | How you want to connect to BigQuery. <br/>Possible values are: `None`, `JSON Credentials Filepath`, or `Databricks secrets`. <br/>To learn more, see [Credentials](#credentials).               |
| Schema              | Properties | Schema to apply on the loaded data.<br/>In the Source gem, you can define or edit the schema visually or in JSON code.<br/>In the Target gem, you can view the schema visually or as JSON code. |

### Credentials

| Credential type           | Description                                                                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| None                      | You don't have to set credentials if the BigQuery configurations are set at the cluster level.                                                                                                                                                     |
| JSON Credentials Filepath | BigQuery JSON key configuration you can pass to BigQuery. <br/>To learn how, see [Retrieve JSON Credentials](#retrieve-json-credentials).                                                                                                          |
| Databricks secrets        | If the JSON configuration is directly stored on pipeline configuration as Databricks secrets, then refer to the config variable as `${config_variable}`. If the configuration variable above is Base64 encoded, enable `Is secret base64 encoded`. |

### Retrieve JSON credentials

To get your JSON Credentials from BigQuery:

1. Navigate to your [Google Cloud Credentials page](https://console.cloud.google.com/apis/credentials).
1. In the top navigation bar, click `+ CREATE CREDENTIALS`.
1. Select `Service account`.
1. If you don't have a Service account, create a service account.

   a. If you don't have a Service account, enter your **Service account name**, **Service account ID**, and **Service account description**.
   Then click `Create and continue`. <br/>
   b. Click `Done`.

1. Under the `Service Accounts` section, click on your service account email.
1. Navigate to the `Keys` tab.
1. Create a new key.

   a. Click `Add key`.<br/>
   b. Click `Create new key` <br/>
   c. Select the `JSON key type`. <br/>
   d. Click `Create`.

## Source

The Source gem reads data from BigQuery and allows you to optionally specify the following additional properties.

### Source properties

| Properties                            | Description                                                                                                                                                                                                                                                                                           | Default                        |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Description                           | Description of your dataset.                                                                                                                                                                                                                                                                          | None                           |
| Project Name                          | Google Cloud Project ID of the table.                                                                                                                                                                                                                                                                 | Project of the Service Account |
| Dataset Name                          | Dataset containing the table. <br/>This is required unless you mention it in the **Table Name**.                                                                                                                                                                                                      | None                           |
| Maximum partitions                    | Maximum number of partitions to split the data into. <br/>The actual number may be less if BigQuery deems the data small enough.                                                                                                                                                                      | None                           |
| Minimum partitions                    | Minimum number of partitions to split the data into. <br/>The actual number may be less if BigQuery deems the data small enough.                                                                                                                                                                      | None                           |
| Enables read views                    | Whether to enable the connector to read from views and not only tables.                                                                                                                                                                                                                               | false                          |
| MaterializedView projectID            | Project ID where you create the materialized view.                                                                                                                                                                                                                                                    | None                           |
| MaterializedView dataset              | Dataset where you create the materialized view. <br/>This dataset should be in the same location as the view or the queried tables.                                                                                                                                                                   | None                           |
| Materialized expiration time in min's | Expiration time in minutes of the temporary table holding the materialized data of a view or a query. <br/>The connector may re-use the temporary table due to the use of local cache and to reduce BigQuery computation, so very low values may cause errors.                                        | None                           |
| Read dataformat                       | Data format for reading from BigQuery. <br/>Possible values are: `ARROW`, or `AVRO` <br/> **Note:** Unsupported Arrow filters are not pushed down and results are filtered later by Spark. Currently, Arrow does not support disjunction across columns.                                              | None                           |
| Enable optimize-empty-projection      | Whether the connector uses an optimized empty projection (a `SELECT` without any columns) logic for a `count()` execution.                                                                                                                                                                            | false                          |
| Enable push-all-filters               | Whether to push all the filters Spark can delegate to BigQuery Storage API. <br/>This reduces the amount of data that BigQuery Storage API servers need to send to Spark clients.                                                                                                                     | true                           |
| Additional Job Labels                 | Labels to add to the connector-initiated query and load BigQuery jobs.                                                                                                                                                                                                                                | None                           |
| Traceability Application Name         | Application name to trace BigQuery Storage read and write sessions. <br/>You must set this property to set the trace ID on the sessions.                                                                                                                                                              | None                           |
| Traceability Job ID                   | Job ID to trace BigQuery Storage read and write sessions.                                                                                                                                                                                                                                             | None                           |
| Proxy URL                             | HTTP proxy and address in the `host:port` format. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.address`.                                                                                                                | None                           |
| Proxy username                        | Username to connect to the proxy. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.username`.                                                                                                                               | None                           |
| Proxy password                        | Password to connect to the proxy. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.password`.                                                                                                                               | None                           |
| Maximum HTTP retries                  | Maximum number of retries for the low-level HTTP requests to BigQuery. <br/> You can alternatively set in the Spark configuration `spark.conf.set("httpMaxRetry", ...)`, or Hadoop Configuration `fs.gs.http.max.retry`.                                                                              | `10`                           |
| HTTP Connection timeout in MSec's     | Timeout in milliseconds to establish a connection with BigQuery. <br/> You can alternatively set in the Spark configuration `spark.conf.set("httpConnectTimeout", ...)`, or Hadoop Configuration `fs.gs.http.connect-timeout`.                                                                        | `60000`                        |
| HTTP Read timeout in MSec's           | Timeout in milliseconds to read data from an established connection. <br/> You can alternatively set in the Spark configuration `spark.conf.set("httpReadTimeout", ...)`, or Hadoop Configuration `fs.gs.http.read-timeout`.                                                                          | `60000`                        |
| Arrow Compression Codec               | Compression codec to use while reading from a BigQuery table when using Arrow format. <br/>Possible values are: `ZSTD`, `LZ4_FRAME`, or `COMPRESSION_UNSPECIFIED`.                                                                                                                                    | `COMPRESSION_UNSPECIFIED`      |
| Cache expiration time in min's        | Expiration time of the in-memory cache storing query information. <br/>To disable caching, set the value to `0`.                                                                                                                                                                                      | `15`                           |
| Cache read session timeout in sec's   | Timeout in seconds to create a read session when reading a table. <br/>For extremely large tables, this value should be increased.                                                                                                                                                                    | `600`                          |
| GCP Access Token                      | GCP token that allows you to use Google API's.                                                                                                                                                                                                                                                        | None                           |
| Conversation datetime zone ID         | Time zone ID to use when converting BigQuery's DATETIME into Spark's Timestamp, and vice versa. <br/>To see a full list, run `java.time.ZoneId.getAvailableZoneIds()` in Java/Scala, or `sc.\_jvm.java.time.ZoneId.getAvailableZoneIds()` in PySpark.                                                 | `UTC`                          |
| Job query priority                    | Priority levels set for the job while reading data from a BigQuery query. <br/>Possible values are: <br/>- `BATCH`, which means to queue and start a query as soon as idle resources are available. <br/>- `INTERACTIVE`, which is automatically selected if the query hasn't started within 3 hours. | None                           |
| Filter Condition                      | One or more boolean expressions to further filter results for the output. <br/>Supports SQL, Python, and Scala expressions.                                                                                                                                                                           | None                           |

## Example

The following example fetches all customer data from BigQuery table using Prophecy.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/233473742-49cb6104-1f4b-4380-b34d-b89dc81d7921.mp4" title="BigQuery Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Compiled code {#source-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
def read_bigquery(spark: SparkSession) -> DataFrame:
    return spark.read\
        .format("bigquery")\
        .option("credentials", "dbfs:/bucket/prefix/file.json")\
        .option("table", "tablename")\
        .load()
```
</TabItem>
</Tabs>
````

---

## Target

The Target gem writes data to BigQuery and allows you to optionally specify the following additional properties.

### Target properties

| Property                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Default                        |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| Description                         | Description of your dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | None                           |
| Job query priority                  | Priority levels set for the job while reading data from a BigQuery query. <br/>This property is available when DIRECT write is used with OVERWRITE mode, where the connector overwrites the destination table using MERGE statement. <br/>Possible values are: <br/>- `BATCH`, which means to queue and start a query as soon as idle resources are available. <br/>- `INTERACTIVE`, which is automatically selected if the query hasn't started within 3 hours.                             | None                           |
| Project Name                        | Google Cloud Project ID of the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Project of the Service Account |
| Dataset Name                        | Dataset containing the table. <br/>This is required unless you mention it in the **Table Name**.                                                                                                                                                                                                                                                                                                                                                                                             | None                           |
| Table labels                        | One or more labels to add to the table while writing.                                                                                                                                                                                                                                                                                                                                                                                                                                        | None                           |
| Disposition creation                | Specifies whether the job can create new tables. <br/>Possible values are: <br/>- `Create table if not exists`, which configures the job to create the table if it does not exist. <br/>- `Don't create table`, which configures the job to fail if the table does not exist.                                                                                                                                                                                                                | None                           |
| Write Mode                          | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                                                                                                                                                                                                                                                                                                                         | None                           |
| Write Method                        | Method to write data to BigQuery. <br/>Possible values are: <br/>- `Use storage write API`, which directly uses the BigQuery Storage Write API <br/>- `Write first to GCS and Load`, which writes the data first to GCS and then triggers a BigQuery load operation                                                                                                                                                                                                                          | None                           |
| Temporary GCS Bucket                | GCS bucket that temporarily holds the data before it loads to BigQuery. <br/>This is required unless set in the Spark configuration `spark.conf.set(...)`. <br/>**Note:** This is not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                | None                           |
| Persistent GCS Bucket               | GCS bucket that holds the data before it loads to BigQuery. <br/>If informed, the data won't be deleted after writing data into BigQuery. <br/>**Note:** This is not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                                 | None                           |
| Persistent GCS Path                 | GCS path that holds the data before it loads to BigQuery. <br/> This is only used with `Persistent GcCS Bucket`. <br/>**Note:** This is not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                                                          | None                           |
| Intermediate dataformat             | Format of the data before it loads to BigQuery. <br/> Possible values are: `Parquet`,`ORC`, or `Avro` <br/>In order to use the Avro format, you must add the `spark-avro` package in runtime.                                                                                                                                                                                                                                                                                                | `Parquet`                      |
| Date partition                      | Date partition in the format `YYYYMMDD` that the data writes to. <br/> You can use this to overwrite the data of a single partition: <br/>`df.write.format("bigquery").option("datePartition", "20220331")`<br/>`.mode("overwrite").save("table")` <br/> You can also use this with different partition types: `HOUR: YYYYMMDDHH, MONTH: YYYYMM, YEAR: YYYY`                                                                                                                                 | None                           |
| Partition expiration MSec's         | Number of milliseconds to keep the storage for partitions in the table. <br/>The storage in a partition has an expiration time of its partition time plus this value. <br/>**NOTE:** This is not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                     | None                           |
| Partition type of the field         | Type of partition field. Possible values are: `Hour`, `Day`, `Month`, or `Year`.<br/> **Note:** This property is mandatory for a target table to be partitioned, and is not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                          | `Day`                          |
| Partition field                     | Field to partition the table by. <br/>The field must be a top-level `TIMESTAMP` or `DATE` field. Its mode must be `NULLABLE` or `REQUIRED`. If the property is not set for a partitioned table, then the table will be partitioned by a pseudo column, referenced through either '\_PARTITIONTIME' as `TIMESTAMP` type, or '\_PARTITIONDATE' as `DATE` type. <br/>**NOTE:** You must specify this field with `partitionType`. This field is also not supported by the `DIRECT` write method. | None                           |
| Enable allow-field-addition         | Whether to add the `ALLOW_FIELD_ADDITION` SchemaUpdateOption to the BigQuery LoadJob.                                                                                                                                                                                                                                                                                                                                                                                                        | false                          |
| Enable allow-field-relaxation       | Whether to add the `ALLOW_FIELD_RELAXATION` SchemaUpdateOption to the BigQuery LoadJob.                                                                                                                                                                                                                                                                                                                                                                                                      | false                          |
| Proxy URL                           | HTTP proxy and address in the `host:port` format. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.address`.                                                                                                                                                                                                                                                                                                       | None                           |
| Proxy username                      | Username to connect to the proxy. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.username`.                                                                                                                                                                                                                                                                                                                      | None                           |
| Proxy password                      | Password to connect to the proxy. <br/>You can alternatively set this in the Spark configuration `spark.conf.set(...)`, or Hadoop Configuration `fs.gs.proxy.password`.                                                                                                                                                                                                                                                                                                                      | None                           |
| Maximum HTTP retries                | Maximum number of retries for the low-level HTTP requests to BigQuery. <br/> You can alternatively set in the Spark configuration `spark.conf.set("httpMaxRetry", ...)`, or Hadoop Configuration `fs.gs.http.max.retry`.                                                                                                                                                                                                                                                                     | `10`                           |
| HTTP Connection timeout in MSec's   | Timeout in milliseconds to establish a connection with BigQuery. <br/> You can alternatively set in the Spark configuration `spark.conf.set("httpConnectTimeout", ...)`, or Hadoop Configuration `fs.gs.http.connect-timeout`.                                                                                                                                                                                                                                                               | `60000`                        |
| Enable mode-check-for-schema-fields | Whether to check the mode of every field in the destination schema to be equal to the mode in the corresponding source field schema, during DIRECT write.                                                                                                                                                                                                                                                                                                                                    | true                           |
| Enable list-interface               | Whether to use schema inference when the [mode is Parquet](https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#parquetoptions).                                                                                                                                                                                                                                                                                                                                                  | true                           |
| Conversation datetime zone ID       | Time zone ID to use when converting BigQuery's DATETIME into Spark's Timestamp, and vice versa. <br/>To see a full list, run `java.time.ZoneId.getAvailableZoneIds()` in Java/Scala, or `sc.\_jvm.java.time.ZoneId.getAvailableZoneIds()` in PySpark.                                                                                                                                                                                                                                        | `UTC`                          |
| GCP Access Token                    | GCP token that allows you to use Google API's.                                                                                                                                                                                                                                                                                                                                                                                                                                               | None                           |

### Supported write modes

| Write mode | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`. |
| append     | If the data already exists, append the contents of the `DataFrame`.                  |

### Compiled code {#target-code}

:::tip
To see the compiled code of your project, [switch to the Code view](/engineers/pipelines#project-editor) in the project header.
:::

````mdx-code-block

<Tabs>
<TabItem value="py" label="Python">

Direct write using the BigQuery Storage Write API:

```py
def write_bigquery(spark: SparkSession, in0: DataFrame):
    in0.write \
        .format("bigquery") \
        .option("writeMethod", "direct") \
        .save("dataset.table")
```
Indirect write using the BigQuery Storage Write API:

```py
def write_bigquery(spark: SparkSession, in0: DataFrame):
    in0.write \
        .format("bigquery") \
        .option("temporaryGcsBucket","some-bucket") \
        .save("dataset.table")
```
</TabItem>
</Tabs>
````
