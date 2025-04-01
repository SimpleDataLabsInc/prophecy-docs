---
title: BigQuery
id: bigquery
slug: /engineers/bigquery
description: BigQuery
tags:
  - gems
  - warehouse
  - bigquery
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWarehousePython"
  python_package_version="0.0.1+"
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="Not Supported"
/>

:::info Built on
This connector is built on top of the already available [`spark-bigquery-connector`](https://github.com/GoogleCloudDataproc/spark-bigquery-connector/) connector. <br/>
For non-Databricks clusters, we need to install the corresponding library and please refer the library compatiblity matrix in the [`Spark BigQuery`](https://github.com/GoogleCloudDataproc/spark-bigquery-connector#connector-to-spark-compatibility-matrix) documentation. <br/>
:::

Allows read and write operations on `BigQuery`.

## Source

Reads data from BigQuery tables.

For establishing the connecting to BigQuery we have below three options:

- None: Users are not required to set any credentails if the BigQuery configurations are set at cluster level.
- JSON Credentials Filepath: BigQuery JSON key configuration can be passed to BigQuery.
- Databricks secrets: If the JSON configuration is directly stored on pipeline configs as Databricks secrets then refer the config variable as `${config_vairable}`.

:::info How to get the JSON Credentials from BigQuery?

<details>
<summary>Steps to get download BigQuery JSON Credentials</summary>
<ul>
    <li> Goto <a href="https://console.cloud.google.com/apis/credentials">https://console.cloud.google.com/apis/credentials</a> </li>
    <li> Click on "+ CREATE CREDENTIALS" button on top next and select "Service account" </li>
    <li> Fill in the credentail creation form and will create the Service account after submit </li>
    <li> Skip the above steps if Service account is already created and goto "KEYS" section of service account </li>
    <li> Click on "ADD KEY" -> Create new Key -> Select "JSON" key type -> CREATE will download the json configuration file </li>
</ul>
</details>
:::

### Source Parameters

| Parameter                             | Description                                                                                                                                                                                                                                                                                                | Required |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Parent Project Name                   | Google Cloud Project ID of the table to bill for the export                                                                                                                                                                                                                                                | True     |
| Table Name                            | Name of the table                                                                                                                                                                                                                                                                                          | True     |
| Credentials file path                 | Path to BigQuery credentials file. If the credentials are set Spark conf level then select none in credentials options.                                                                                                                                                                                    | True     |
| Configuration variable name           | Choose the Databricks secrets and specify the variable in `${<variable>}` format if the secrets are defined in pipeline configs.                                                                                                                                                                           | True     |
| Is secret Base64 encoded              | Enable if the configuration variable above is Base64 encoded.                                                                                                                                                                                                                                              | True     |
| Project Name                          | (Optional) Google Cloud Project ID of the table. Defaults to the project of the Service Account being used.                                                                                                                                                                                                |          |
| Dataset Name                          | (Optional) Dataset containing the table. Required unless it's mentioned in the Table Name.                                                                                                                                                                                                                 |          |
| Maximum partitions                    | (Optional) Maximum number of partitions to split the data into. Actual number may be less if BigQuery deems the data small enough.                                                                                                                                                                         |          |
| Minimum partitions                    | (Optional) Minimal number of partitions to split the data into. Actual number may be less if BigQuery deems the data small enough.                                                                                                                                                                         |          |
| Enables read views                    | (Optional) Enables the connector to read from views and not only tables. Please read the relevant section before activating this option.                                                                                                                                                                   |          |
| MaterializedView projectID            | (Optional) Project id where the materialized view is going to be created                                                                                                                                                                                                                                   |          |
| MaterializedView dataset              | (Optional) Dataset where the materialized view is going to be created. This dataset should be in same location as the view or the queried tables.                                                                                                                                                          |          |
| Materialized expiration time in min's | (Optional) Expiration time of the temporary table holding the materialized data of a view or a query, in minutes. Notice that the connector may re-use the temporary table due to the use of local cache and in order to reduce BigQuery computation, so very low values may cause errors.                 |          |
| Read dataformat                       | (Optional) Data Format for reading from BigQuery. Options : ARROW, AVRO Unsupported Arrow filters are not pushed down and results are filtered later by Spark. (Currently Arrow does not support disjunction across columns.)                                                                              |          |
| Enable optimize-empty-projection      | (Optional) Connector uses an optimized empty projection (select without any columns) logic, used for count() execution                                                                                                                                                                                     |          |
| Enable push-all-filters               | (Optional) Pushes all the filters Spark can delegate to BigQuery Storage API. This reduces amount of data that needs to be sent from BigQuery Storage API servers to Spark clients. Default: true                                                                                                          |          |
| Additional Job Labels                 | (Optional) Can be used to add labels to the connector initiated query and load BigQuery jobs. Multiple labels can be set.                                                                                                                                                                                  |          |
| Traceability Application Name         | (Optional) Application name used to trace BigQuery Storage read and write sessions. Setting the application name is required to set the trace ID on the sessions.                                                                                                                                          |          |
| Traceability Job ID                   | (Optional) Job ID used to trace BigQuery Storage read and write sessions.                                                                                                                                                                                                                                  |          |
| Proxy URL                             | (Optional) Address of the proxy server. The proxy must be a HTTP proxy and address should be in the `host:port` format. Can be alternatively set in the Spark configuration (spark.conf.set(...)) or in Hadoop Configuration (fs.gs.proxy.address).                                                        |          |
| Proxy username                        | (Optional) UserName used to connect to the proxy. Can be alternatively set in the Spark configuration `(spark.conf.set(...))` or in Hadoop Configuration (fs.gs.proxy.username).                                                                                                                           |          |
| Proxy password                        | (Optional) Password used to connect to the proxy. Can be alternatively set in the Spark configuration `(spark.conf.set(...))` or in Hadoop Configuration (fs.gs.proxy.password).                                                                                                                           |          |
| Maximum HTTP retries                  | (Optional) Maximum number of retries for the low-level HTTP requests to BigQuery. Can be alternatively set in the Spark configuration `(spark.conf.set("httpMaxRetry", ...))` or in Hadoop Configuration (fs.gs.http.max.retry). Default is 10.                                                            |          |
| HTTP Connection timeout in MSec's     | (Optional) Timeout in milliseconds to establish a connection with BigQuery. Can be alternatively set in the Spark configuration `(spark.conf.set("httpConnectTimeout", ...))` or in Hadoop Configuration (fs.gs.http.connect-timeout). Default is 60000.                                                   |          |
| HTTP Read timeout in MSec's           | (Optional) Timeout in milliseconds to read data from an established connection. Can be alternatively set in the Spark configuration `(spark.conf.set("httpReadTimeout", ...))` or in Hadoop Configuration (fs.gs.http.read-timeout). Default is 60000.                                                     |          |
| Arrow Compression Codec               | (Optional) Compression codec while reading from a BigQuery table when using Arrow format. Options : ZSTD (Zstandard compression), LZ4_FRAME (https://github.com/lz4/lz4/blob/dev/doc/lz4_Frame_format.md), COMPRESSION_UNSPECIFIED. Default is COMPRESSION_UNSPECIFIED.                                    |          |
| Cache expiration time in min's        | (Optional) Expiration time of the in-memory cache storing query information. To disable caching, set the value to 0. Default is 15 min's.                                                                                                                                                                  |          |
| Cache read session timeout in sec's   | (Optional) Timeout in seconds to create a ReadSession when reading a table. For Extremely large table this value should be increased. Default is 600 sec's.                                                                                                                                                |          |
| Conversation datetime zone ID         | (Optional) Time zone ID used to convert BigQuery's DATETIME into Spark's Timestamp, and vice versa. The full list can be seen by running java.time.ZoneId.getAvailableZoneIds() in Java/Scala, or sc.\_jvm.java.time.ZoneId.getAvailableZoneIds() in pyspark. Default is UTC.                              |          |
| Job query priority                    | (Optional) Priority levels set for the job while reading data from BigQuery query. The permitted values are:BATCH - Query is queued and started as soon as idle resources are available, usually within a few minutes. If the query hasn't started within 3 hours, its priority is changed to INTERACTIVE. |          |

## Example

Below is an example of fetching all customer data from BigQuery using Prophecy IDE.
We will be using BigQuery table to fetch the customer data.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/233473742-49cb6104-1f4b-4380-b34d-b89dc81d7921.mp4" title="BigQuery Source" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"/>
</div></div>

### Generated Code {#source-code}

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

Create/update BigQuery Tables

### Target Parameters

| Parameter                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Required |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Parent Project Name                 | Google Cloud Project ID of the table to bill for the export                                                                                                                                                                                                                                                                                                                                                                                        | True     |
| Table Name                          | Name of the table                                                                                                                                                                                                                                                                                                                                                                                                                                  | True     |
| Credentials file path               | Path to BigQuery credentials file. If the credentials are set at Spark conf level then select none in credentials options.                                                                                                                                                                                                                                                                                                                         | True     |
| Configuration variable name         | Choose the Databricks secrets and specify the variable in `${<variable>}` format if the secrets are defined in pipeline configs.                                                                                                                                                                                                                                                                                                                   | True     |
| Is secret Base64 encoded            | Enable if the configuration variable above is Base64 encoded                                                                                                                                                                                                                                                                                                                                                                                       | True     |
| Project Name                        | (Optional) Google Cloud Project ID of the table. Defaults to the project of the Service Account being used.                                                                                                                                                                                                                                                                                                                                        |          |
| Dataset Name                        | (Optional) Dataset containing the table. Required unless it's mentioned in the Table Name.                                                                                                                                                                                                                                                                                                                                                         |          |
| Table labels                        | (Optional) Can be used to add labels to the table while writing to a table. Multiple labels can be set.                                                                                                                                                                                                                                                                                                                                            |          |
| Disposition creation                | (Optional) Specifies whether the Job is allowed to create new tables. The permitted values are:CREATE_IF_NEEDED - Configures the job to create the table if it does not exist, CREATE_NEVER - Configures the job to fail if the table does not exist.                                                                                                                                                                                              |          |
| Write Method                        | (Optional) Controls the method in which the data is written to BigQuery. Available values are direct to use the BigQuery Storage Write API and indirect which writes the data first to GCS and then triggers a BigQuery load operation.                                                                                                                                                                                                            |          |
| Temporary GCS Bucket                | (Optional) GCS bucket that temporarily holds the data before it is loaded to BigQuery. Required unless set in the Spark configuration `(spark.conf.set(...))`. Not supported by the `DIRECT` write method.                                                                                                                                                                                                                                         |          |
| Persistent GCS Bucket               | (Optional) GCS bucket that holds the data before it is loaded to BigQuery. If informed, the data won't be deleted after write data into BigQuery. Not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                      |          |
| Persistent GCS Path                 | (Optional) GCS path that holds the data before it is loaded to BigQuery. Used only with persistentGcsBucket. Not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                                           |          |
| Intermediate dataformat             | (Optional) Format of the data before it is loaded to BigQuery, values can be either "parquet","orc" or "avro". In order to use the Avro format, the `spark-avro` package must be added in runtime. Default is parquet.                                                                                                                                                                                                                             |          |
| Date partition                      | (Optional) date partition the data is going to be written to. Should be a date string given in the format YYYYMMDD. Can be used to overwrite the data of a single partition, like this: df.write.format("bigquery").option("datePartition", "20220331").mode("overwrite").save("table"). Can also be used with different partition types like: HOUR: YYYYMMDDHH, MONTH: YYYYMM, YEAR: YYYY                                                         |          |
| Partition field                     | (Optional) field is specified together with `partitionType`, the table is partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. If the option is not set for a partitioned table, then the table will be partitioned by pseudo column, referenced via either'\_PARTITIONTIME' as TIMESTAMP type, or '\_PARTITIONDATE' as DATE type. Not supported by the `DIRECT` write method. |          |
| Partition expiration MSec's         | (Optional) Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value. Not supported by the `DIRECT` write method.                                                                                                                                                                                                            |          |
| Partition type of the field         | (Optional) Supported types are: HOUR, DAY, MONTH, YEAR. This option is mandatory for a target table to be partitioned. Default is DAY. Not supported by the `DIRECT` write method.                                                                                                                                                                                                                                                                 |          |
| Cluster field                       | (Optional) A string of non-repeated, top level columns.                                                                                                                                                                                                                                                                                                                                                                                            |          |
| Enable allow-field-addition         | (Optional) Adds the ALLOW_FIELD_ADDITION SchemaUpdateOption to the BigQuery LoadJob. Allowed values are true and false. Default is false.                                                                                                                                                                                                                                                                                                          |          |
| Enable allow-field-relaxation       | (Optional) Adds the ALLOW_FIELD_RELAXATION SchemaUpdateOption to the BigQuery LoadJob. Allowed values are true and false. Default is false.                                                                                                                                                                                                                                                                                                        |          |
| Proxy URL                           | (Optional) Address of the proxy server. The proxy must be a HTTP proxy and address should be in the `host:port` format. Can be alternatively set in the Spark configuration `(spark.conf.set(...))` or in Hadoop Configuration (fs.gs.proxy.address).                                                                                                                                                                                              |          |
| Proxy username                      | (Optional) UserName used to connect to the proxy. Can be alternatively set in the Spark configuration `(spark.conf.set(...))` or in Hadoop Configuration (fs.gs.proxy.username).                                                                                                                                                                                                                                                                   |          |
| Proxy password                      | (Optional) Password used to connect to the proxy. Can be alternatively set in the Spark configuration `(spark.conf.set(...))` or in Hadoop Configuration (fs.gs.proxy.password).                                                                                                                                                                                                                                                                   |          |
| Maximum HTTP retries                | (Optional) Maximum number of retries for the low-level HTTP requests to BigQuery. Can be alternatively set in the Spark configuration `(spark.conf.set("httpMaxRetry", ...))` or in Hadoop Configuration (fs.gs.http.max.retry). Default is 10.                                                                                                                                                                                                    |          |
| HTTP Connection timeout in MSec's   | (Optional) Timeout in milliseconds to establish a connection with BigQuery. Can be alternatively set in the Spark configuration `(spark.conf.set("httpConnectTimeout", ...))` or in Hadoop Configuration (fs.gs.http.connect-timeout). Default is 60000.                                                                                                                                                                                           |          |
| Enable mode-check-for-schema-fields | (Optional) Checks the mode of every field in destination schema to be equal to the mode in corresponding source field schema, during DIRECT write. Default is true.                                                                                                                                                                                                                                                                                |          |
| Enable list-interface               | (Optional) Indicates whether to use schema inference specifically when the mode is Parquet (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#parquetoptions). Default is true.                                                                                                                                                                                                                                                      |          |
| Conversation datetime zone ID       | (Optional) Time zone ID used to convert BigQuery's DATETIME into Spark's Timestamp, and vice versa. The full list can be seen by running java.time.ZoneId.getAvailableZoneIds() in Java/Scala, or sc.\_jvm.java.time.ZoneId.getAvailableZoneIds() in pyspark. Default is UTC.                                                                                                                                                                      |          |
| Job query priority                  | (Optional) Option will be effective when DIRECT write is used with OVERWRITE mode, where the connector overwrites the destination table using MERGE statement.                                                                                                                                                                                                                                                                                     |          |

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

Direct write using the BigQuery Storage Write API
```py
def write_bigquery(spark: SparkSession, in0: DataFrame):
    in0.write \
        .format("bigquery") \
        .option("writeMethod", "direct") \
        .save("dataset.table")
```
Indirect write using the BigQuery Storage Write API
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
