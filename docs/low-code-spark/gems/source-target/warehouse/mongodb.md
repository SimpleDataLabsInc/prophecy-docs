---
title: MongoDB
id: mongodb
description: MongoDB
sidebar_position: 1
tags:
  - gems
  - warehouse
  - mongodb
---

:::info Built on
Built on [mongodb-connector-for-spark](https://www.mongodb.com/docs/spark-connector/v10.0/#mongodb-connector-for-spark) v10.0.
:::

## Source


### Source Parameters
[Official documentation](https://www.mongodb.com/docs/spark-connector/v10.0/configuration/read/)

| Parameter                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                           | Required |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Username                                  | Username for MongoDB instance                                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Password                                  | Password for MongoDB instance                                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Driver                                    | Driver string for mongodb connection, eg. `mongodb` or `mongodb+srv`                                                                                                                                                                                                                                                                                                                                                                  | True     |
| Cluster IP Address and Options            | Cluster IP and options(if required) for the MongoDB connection, <br/> eg. `cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority`                                                                                                                                                                                                                                                                                                | True     |
| Database                                  | Database from which we want to read the data.                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Collection                                | Collection from which we want to read the data.                                                                                                                                                                                                                                                                                                                                                                                       | True     |
| mongoClientFactory                        | MongoClientFactory configuration key. <br/> You can specify a custom implementation which must implement the `com.mongodb.spark.sql.connector.connection.MongoClientFactory` interface. <br/> Default: `com.mongodb.spark.sql.connector.connection.DefaultMongoClientFactory`                                                                                                                                                         | False    |
| partitioner                               | The partitioner full class name. You can specify a custom implementation which must implement the `com.mongodb.spark.sql.connector.read.partitioner.Partitioner` interface. <br/> Default: `com.mongodb.spark.sql.connector.read.partitioner.SamplePartitioner`                                                                                                                                                                       | False    |
| partitioner.options.partition.field       | The field to use for partitioning, which must be a unique field. <br/> Default: `_id`                                                                                                                                                                                                                                                                                                                                                 | False    |
| partitioner.options.partition.size        | The size (in MB) for each partition. Smaller partition sizes create more partitions containing fewer documents. <br/> Default:  `64`                                                                                                                                                                                                                                                                                                  | False    |
| partitioner.options.samples.per.partition | The number of samples to take per partition. The total number of samples taken is: `samples per partiion * ( count / number of documents per partition)` <br/> Default: `10`                                                                                                                                                                                                                                                          | False    |
| sampleSize                                | The number of documents to sample from the collection when inferring the schema. <br/> Default: `1000`                                                                                                                                                                                                                                                                                                                                | False    |
| sql.inferSchema.mapTypes.enabled          | Whether to enable Map types when inferring the schema. When enabled, large compatible struct types are inferred to a MapType instead. <br/> Default: `true`                                                                                                                                                                                                                                                                           | False    |
| sql.inferSchema.mapTypes.minimum.key.size | Minimum size of a StructType before inferring as a MapType. <br/> Default: `250`                                                                                                                                                                                                                                                                                                                                                      | False    |
| aggregation.pipeline                      | Specifies a custom aggregation pipeline to apply to the collection before sending data to Spark. The value must be either an extended JSON single document or list of documents.<br/> A single document should resemble the following:<br/> `{"$match": {"closed": false}}` <br/> A list of documents should resemble the following:<br/> `[{"$match": {"closed": false}}, {"$project": {"status": 1, "name": 1, "description": 1}}]` | False    |
| aggregation.allowDiskUse                  | Specifies whether to allow storage to disk when running the aggregation.  <br/> Default: `true`                                                                                                                                                                                                                                                                                                                                       | False    |


### Example {#source-example}

Below is an example of configuring MongoDB connection using Prophecy IDE.
We will be reading Airbnb public `listingReviews` dataset using in-built `MongoDB` Source Gem.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/16856802/218704423-0d18ac13-a15c-426d-b667-5e6cc7808061.mp4" title="Salesforce Source" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="scala">
<TabItem value="py" label="Python">

```py
Coming Soon!!!
```
</TabItem>
<TabItem value="scala" label="Scala">

```scala
object input_mongodb {

  def apply(context: Context): DataFrame = {
    context.spark.read
      .format("mongodb")
      .option(
        "connection.uri",
        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim
      )
      .option("database",   "test_input")
      .option("collection", "listAndReviews")
      .load()
  }
}
```

</TabItem>
</Tabs>


````

---

## Target

### Target Parameters

| Parameter       | Description                                                                                                                                                                                                                                                                                                               | Required                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Dataset Name    | Name of the Dataset                                                                                                                                                                                                                                                                                                       | True                                                   |
| Credential Type | Credential Type: `Databricks Secrets` or `Username & Password`                                                                                                                                                                                                                                                            | True                                                   |
| Credentials     | Databricks credential name , else username and password for the snowflake account                                                                                                                                                                                                                                         | Required if `Credential Type` is `Databricks Secrets`  |
| Username        | Login name for the snowflake user                                                                                                                                                                                                                                                                                         | Required if `Credential Type` is `Username & Password` |
| Password        | Password for the snowflake user                                                                                                                                                                                                                                                                                           | Required if `Credential Type` is `Username & Password` |
| Url             | Hostname for your account in the format: `<account_identifier>.snowflakecomputing.com`. <br/> Eg: `https://DJ07623.ap-south-1.aws.snowflakecomputing.com`                                                                                                                                                                 | True                                                   |
| Database        | Database to use for the session after connecting                                                                                                                                                                                                                                                                          | True                                                   |
| Schema          | Schema to use for the session after connecting                                                                                                                                                                                                                                                                            | True                                                   |
| Warehouse       | The default virtual warehouse to use for the session after connecting                                                                                                                                                                                                                                                     | False                                                  |
| Table           | The name of the table to which data is to be written.                                                                                                                                                                                                                                                                     | True                                                   |
| Write Mode      | How to handle existing data. See [this table](#supported-write-modes) for a list of available options.                                                                                                                                                                                                                    | True                                                   |
| Post-Script SQL | DDL/DML SQL statements to execute before writing data.<br/> It is intended for statements that do not return a result set, for example DDL statements like `CREATE TABLE` and DML statements like `INSERT, UPDATE, and DELETE`.<br/> It is not useful for statements that return a result set, such as `SELECT` or `SHOW` | False                                                  |

### Supported Write Modes

| Write Mode | Description                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| overwrite  | If data already exists, overwrite with the contents of the DataFrame                                                             |
| append     | If data already exists, append the contents of the DataFrame                                                                     |
| ignore     | If data already exists, do nothing with the contents of the DataFrame. This is similar to a `CREATE TABLE IF NOT EXISTS` in SQL. |
| error      | If data already exists, throw an exception.                                                                                      |

### Example {#target-example}

```mdx-code-block

export const ImageData2 = [
  {
    "image":"/img/snowflake/write/1.png",
    "description":<h3 style={{padding:'10px'}}>Step 1 - Create Target Component</h3>,
  },
  {
    "image":"/img/snowflake/write/2.png",
    "description":<h3 style={{padding:'10px'}}>Step 2 - Click 'Create Dataset'</h3>,
  },
  {
    "image":"/img/snowflake/write/3.png",
    "description":<h3 style={{padding:'10px'}}> Step 3 - Enter 'Dataset Name' and select the SNOWFLAKE format under WAREHOUSE type</h3>
  },
  {
    "image":"/img/snowflake/write/4.png",
    "description":<h3 style={{padding:'10px'}}>Step 4 - Enter Connection details</h3>,
  },
  {
    "image":"/img/snowflake/write/5.png",
    "description":<h3 style={{padding:'10px'}}>Step 5 - Define 'Write Mode' and optionally provide 'Post-Script SQL'</h3>,
  }
];

<App ImageData={ImageData2}></App>
```

### Generated Code {#target-code}

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def sf_customer(spark: SparkSession, in0: DataFrame):
    from pyspark.dbutils import DBUtils
    options = {
        "sfUrl": "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
        "sfUser": "anshuman",
        "sfPassword": "******",
        "sfDatabase": "SNOWFLAKE_SAMPLE_DATA",
        "sfSchema": "TPCDS_SF100TCL",
        "sfWarehouse": "COMPUTE_WH"
    }
    spark.sparkContext._jvm.net.snowflake.spark.snowflake.Utils.runQuery(
        spark.sparkContext._jvm.PythonUtils.toScalaMap(options),
        "CREATE TABLE test_table(id INTEGER)"
    )
    writer = in0.write.format("snowflake").options(**options)
    writer.option("dbtable", "test_table").mode("overwrite").save()
```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
object sf_customer {
  def apply(spark: SparkSession, in: DataFrame): Unit = {
    import net.snowflake.spark.snowflake.Utils
    import com.databricks.dbutils_v1.DBUtilsHolder.dbutils
    val options = Map("sfUrl" → "https://DJ07623.ap-south-1.aws.snowflakecomputing.com",
                      "sfUser" → "anshuman",
                      "sfPassword" → "******",
                      "sfDatabase" → "SNOWFLAKE_SAMPLE_DATA",
                      "sfSchema" → "TPCDS_SF100TCL",
                      "sfWarehouse" → "COMPUTE_WH"
    )
    var writer = in.write.format("snowflake").options(options)
    writer = writer.option("dbtable", "test_table")
    writer = writer.mode("overwrite")
    Utils.runQuery(options, "CREATE TABLE test_table(id INTEGER)")
    writer.save()
  }
}
```

</TabItem>
</Tabs>
````
