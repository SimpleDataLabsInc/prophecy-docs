---
title: MongoDB
id: mongodb
description: MongoDB
tags:
  - gems
  - warehouse
  - mongodb
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name="ProphecyWarehousePython"
  python_package_version="0.0.1+"
  scala_package_name="ProphecyWarehouseScala"
  scala_package_version="0.0.1+"
  scala_lib=""
  python_lib=""
  uc_single="Not Supported"
  uc_shared="Not Supported"
  livy="Not Supported"
/>

:::info Built on
Built on [MongoDB Spark Connector](https://www.mongodb.com/docs/spark-connector/v10.0/#mongodb-connector-for-spark) v10.0. <br/>
Add `mongodb-spark-connector` jar as dependency [for more](docs/extensibility/dependencies/spark-dependencies.md).
:::
Allows read and write operations on `MongoDB`.

## Source

### Source Parameters

[Official documentation](https://www.mongodb.com/docs/spark-connector/v10.0/configuration/read/)

| Parameter                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                           | Required |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Username                                  | Username for MongoDB instance                                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Password                                  | Password for MongoDB instance                                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Driver                                    | Driver string for mongodb connection, e.g. `mongodb` or `mongodb+srv`                                                                                                                                                                                                                                                                                                                                                                 | True     |
| Cluster IP Address and Options            | Cluster IP and options(if required) for the MongoDB connection, <br/> e.g. `cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority`                                                                                                                                                                                                                                                                                               | True     |
| Database                                  | Database from which we want to read the data.                                                                                                                                                                                                                                                                                                                                                                                         | True     |
| Collection                                | Collection from which we want to read the data.                                                                                                                                                                                                                                                                                                                                                                                       | True     |
| mongoClientFactory                        | MongoClientFactory configuration key. <br/> You can specify a custom implementation which must implement the `com.mongodb.spark.sql.connector.connection.MongoClientFactory` interface. <br/> Default: `com.mongodb.spark.sql.connector.connection.DefaultMongoClientFactory`                                                                                                                                                         | False    |
| partitioner                               | The partitioner full class name. You can specify a custom implementation which must implement the `com.mongodb.spark.sql.connector.read.partitioner.Partitioner` interface. <br/> Default: `com.mongodb.spark.sql.connector.read.partitioner.SamplePartitioner`                                                                                                                                                                       | False    |
| partitioner.options.partition.field       | The field to use for partitioning, which must be a unique field. <br/> Default: `_id`                                                                                                                                                                                                                                                                                                                                                 | False    |
| partitioner.options.partition.size        | The size (in MB) for each partition. Smaller partition sizes create more partitions containing fewer documents. <br/> Default: `64`                                                                                                                                                                                                                                                                                                   | False    |
| partitioner.options.samples.per.partition | The number of samples to take per partition. The total number of samples taken is: `samples per partiion * ( count / number of documents per partition)` <br/> Default: `10`                                                                                                                                                                                                                                                          | False    |
| sampleSize                                | The number of documents to sample from the collection when inferring the schema. <br/> Default: `1000`                                                                                                                                                                                                                                                                                                                                | False    |
| sql.inferSchema.mapTypes.enabled          | Whether to enable Map types when inferring the schema. When enabled, large compatible struct types are inferred to a MapType instead. <br/> Default: `true`                                                                                                                                                                                                                                                                           | False    |
| sql.inferSchema.mapTypes.minimum.key.size | Minimum size of a StructType before inferring as a MapType. <br/> Default: `250`                                                                                                                                                                                                                                                                                                                                                      | False    |
| aggregation.pipeline                      | Specifies a custom aggregation pipeline to apply to the collection before sending data to Spark. The value must be either an extended JSON single document or list of documents.<br/> A single document should resemble the following:<br/> `{"$match": {"closed": false}}` <br/> A list of documents should resemble the following:<br/> `[{"$match": {"closed": false}}, {"$project": {"status": 1, "name": 1, "description": 1}}]` | False    |
| aggregation.allowDiskUse                  | Specifies whether to allow storage to disk when running the aggregation. <br/> Default: `true`                                                                                                                                                                                                                                                                                                                                        | False    |

### Example {#source-example}

Below is an example of configuring MongoDB Source using Prophecy IDE.
We will be reading Airbnb public `listingReviews` dataset using in-built `MongoDB` Source gem.<br/>
After configuration you can view schema by clicking `Infer Schema` in properties tab and also view data by clicking `Load` inside Preview tab.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/16856802/218975988-7e445ee5-81c1-4c0c-90dd-711ec28f0a38.mp4" title="MongoDB Source" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#source-code}

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue="scala">
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

[Official documentation](https://www.mongodb.com/docs/spark-connector/v10.0/configuration/write/)

### Target Parameters

| Parameter                      | Description                                                                                                                                                                                                                                                                   | Required |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Username                       | Username for MongoDB instance                                                                                                                                                                                                                                                 | True     |
| Password                       | Password for MongoDB instance                                                                                                                                                                                                                                                 | True     |
| Driver                         | Driver string for mongodb connection, e.g. `mongodb` or `mongodb+srv`                                                                                                                                                                                                         | True     |
| Cluster IP Address and Options | Cluster IP and options(if required) for the MongoDB connection, <br/> e.g. `cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority`                                                                                                                                       | True     |
| Database                       | Database to which we want to write the data.                                                                                                                                                                                                                                  | True     |
| Collection                     | Collection to which we want to write the data.                                                                                                                                                                                                                                | True     |
| mongoClientFactory             | MongoClientFactory configuration key. <br/> You can specify a custom implementation which must implement the `com.mongodb.spark.sql.connector.connection.MongoClientFactory` interface. <br/> Default: `com.mongodb.spark.sql.connector.connection.DefaultMongoClientFactory` | False    |
| maxBatchSize                   | Specifies the maximum number of operations to batch in bulk operations. <br/> Default: `512`                                                                                                                                                                                  | False    |
| ordered                        | Specifies whether to perform ordered bulk operations. <br/> Default: `true`                                                                                                                                                                                                   | False    |
| operationType                  | Specifies the type of write operation to perform. You can set this to one of the following values: `insert`, `replace` or `update` <br/> Default: `replace`                                                                                                                   | False    |
| idFieldList                    | Field or list of fields by which to split the collection data. To specify more than one field, separate them using a comma as shown in the following example:`"fieldName1,fieldName2"` <br/> Default: `_id`                                                                   | False    |
| writeConcern.w                 | Specifies w, a write concern option to acknowledge the level to which the change propagated in the MongoDB replica set. You can specify one of the following values: `MAJORITY`, `W1`, `W2`, `W3`, `ACKNOWLEDGED` or `UNACKNOWLEDGED`<br/> Default: `_ACKNOWLEDGED`           | False    |
| writeConcern.journal           | Specifies j, a write concern option to enable request for acknowledgment that the data is confirmed on on-disk journal for the criteria specified in the w option.<br/> You can specify either `true` or `false`.                                                             | False    |
| writeConcern.wTimeoutMS        | Specifies wTimeoutMS, a write concern option to return an error when a write operation exceeds the number of milliseconds. If you use this optional setting, you must specify a `non-negative` integer.                                                                       | False    |

### Supported Write Modes

| Write Mode | Description                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| overwrite  | If data already exists, `overwrite` the contents of the Collection with data.   |
| append     | If data already exists, `append` the data on to the contents of the Collection. |

### Example {#target-example}

Below is an example of configuring MongoDB Target using Prophecy IDE.
We will be writing back Airbnb public `listingReviews` data into a collection in `MongoDB` using our in-built Target gem.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/16856802/218750916-a3ea2ead-9c81-42c9-9ad2-c60a61cdde4a.mp4" title="MongoDB Target" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="100%"></iframe>
</div></div>

### Generated Code {#target-code}

````mdx-code-block

<Tabs defaultValue="scala">
<TabItem value="scala" label="Scala">

```scala
object output_mongodb {
  def apply(context: Context, df: DataFrame): Unit = {
    df.write
      .format("mongodb")
      .mode("overwrite")
      .option(
        "connection.uri",
        f"${"mongodb+srv"}://${"ashish_mongotrial"}:${"password"}@${"cluster0.zveltwx.mongodb.net/?retryWrites=true&w=majority"}".trim
      )
      .option("database",      "test")
      .option("collection",    "test_output")
      .option("ordered",       "true")
      .option("operationType", "replace")
      .save()
  }
}
```
</TabItem>
</Tabs>
````
