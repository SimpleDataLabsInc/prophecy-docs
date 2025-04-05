---
title: MongoDB
id: mongodb
slug: /engineers/mongodb
description: Parameters and properties to read from and write to the MongoDB warehouse.
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
To add `mongodb-spark-connector` jar as a dependency, see [Spark dependencies](/engineers/dependencies).
:::

You can read from and write to MongoDB.

## Parameters

| Parameter                      | Tab      | Description                                                                                                                        |
| ------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Username                       | Location | Username of your MongoDB instance.                                                                                                 |
| Password                       | Location | Password of your MongoDB instance.                                                                                                 |
| Driver                         | Location | Driver string for your mongodb connection. <br/>Possible values are: `mongodb`, or `mongodb+srv`                                   |
| Cluster IP Address and Options | Location | Cluster IP and options for your MongoDB connection. <br/>For example: `cluster0.prophecy.mongodb.xyz/?retryWrites=true&w=majority` |
| Database                       | Location | Database where you want to read from and write to.                                                                                 |
| Collection                     | Location | Collection where you want to read from and write to.                                                                               |

## Source

The Source gem reads data from MongoDB and allows you to optionally specify the following additional properties.

### Source properties

| Properties                                        | Description                                                                                                                                                                                                                                                                                                                                                                                                      | Default                                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Description                                       | Description of your dataset.                                                                                                                                                                                                                                                                                                                                                                                     | None                                                                                 |
| Mongo client factory                              | MongoClientFactory configuration key. <br/>To specify a custom implementation, implement the `com.mongodb.spark.sql.connector.connection.MongoClientFactory` interface.                                                                                                                                                                                                                                          | `com.mongodb.spark.sql`<br/>`.connector.connection.`<br/>`DefaultMongoClientFactory` |
| partitioner class name                            | Partitioner full class name. <br/>To specify a custom implementation, implement the `com.mongodb.spark.sql.connector.read.partitioner.Partitioner` interface.                                                                                                                                                                                                                                                    | `com.mongodb.spark.sql.`<br/>`.connector.read.partitioner.`<br/>`SamplePartitioner`  |
| Partition field                                   | Unique field to use for partitioning.                                                                                                                                                                                                                                                                                                                                                                            | `_id`                                                                                |
| Partition size                                    | Size in MB for each partition. <br/>Smaller partition sizes create more partitions that contain fewer documents.                                                                                                                                                                                                                                                                                                 | `64`                                                                                 |
| Number of samples per partition                   | Number of samples to take per partition. <br/>The total number of samples taken is: <br/>`samples per partition * ( count / number of documents per partition)`                                                                                                                                                                                                                                                  | `10`                                                                                 |
| Minimum no. of Docs for Schema inference          | Number of documents to sample from the collection when inferring the schema.                                                                                                                                                                                                                                                                                                                                     | `1000`                                                                               |
| Enable Map types when inferring schema            | Whether to enable Map types when inferring the schema. <br/>If you enable this, the Source gem infers large compatible `struct` types to a `MapType` instead.                                                                                                                                                                                                                                                    | `true`                                                                               |
| Minimum no. of a StructType for MapType inference | Minimum size of a `StructType` before inferring it as a `MapType`.                                                                                                                                                                                                                                                                                                                                               | `250`                                                                                |
| Pipeline aggregation                              | Custom aggregation pipeline to apply to the collection before sending the data to Spark. <br/>The value must be an extended JSON single document or list of documents.<br/> A single document should resemble the following: `{"$match": {"closed": false}}` <br/>A list of documents should resemble the following: `[{"$match": {"closed": false}}, {"$project": {"status": 1, "name": 1, "description": 1}}]` | `{"$match": {"closed": false}}`                                                      |
| Enable AllowDiskUse aggregation                   | Whether to enable `AllowDiskUse` aggregation.                                                                                                                                                                                                                                                                                                                                                                    | false                                                                                |

### Example {#source-example}

The following example configures a Source gem to read from the `sample_airbnb.listingsAndReviews` collection in MongoDB.
After you configure the Source gem, view schema by clicking `Infer Schema` in the Properties tab and view data by clicking `Load` inside the Preview tab.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/16856802/218975988-7e445ee5-81c1-4c0c-90dd-711ec28f0a38.mp4" title="MongoDB Source" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="100%"></iframe>
</div></div>

### Generated code {#source-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

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

The Target gem writes data to MongoDB and allows you to optionally specify the following additional properties.

### Target properties

| Property              | Description                                                                                                                                                                                | Default                                                                              |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Description           | Description of your dataset.                                                                                                                                                               | None                                                                                 |
| Write Mode            | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                                                       | `overwrite`                                                                          |
| Mongo client factory  | MongoClientFactory configuration key. <br/>To specify a custom implementation, implement the `com.mongodb.spark.sql.connector.connection.MongoClientFactory` interface.                    | `com.mongodb.spark.sql.`<br/>`connector.connection.`<br/>`DefaultMongoClientFactory` |
| Maximum batch size    | Maximum number of operations to batch in bulk operations.                                                                                                                                  | `512`                                                                                |
| ordered               | Whether to perform ordered bulk operations.                                                                                                                                                | true                                                                                 |
| operationType         | Type of write operation to perform. <br/>Possible values are: `insert`, `replace` or `update`                                                                                              | `replace`                                                                            |
| List of id fields     | Field or list of fields to organize the data. <br/>To specify more than one field, separate them using a comma. <br/>For example: `"fieldName1,fieldName2"`                                | `_id`                                                                                |
| writeConcern.w        | Write concern option to acknowledge the level the change propagated in the MongoDB replica set. <br/>Possible values are: `MAJORITY`, `W1`, `W2`, `W3`, `ACKNOWLEDGED` or `UNACKNOWLEDGED` | `ACKNOWLEDGED`                                                                       |
| Enable Write journal  | Whether to enable request for acknowledgment that the data is confirmed on the on-disk journal for the criteria specified in the w option.                                                 | false                                                                                |
| Write timeout in MSec | Non-negative number of milliseconds to wait before returning an error when a write operation.                                                                                              | `0`                                                                                  |

### Supported write modes

| Write mode | Description                                                                          |
| ---------- | ------------------------------------------------------------------------------------ |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`. |
| append     | If the data already exists, append the contents of the `DataFrame`.                  |

### Example {#target-example}

The following example configures a Target gem to write data to the `sample_airbnb.listingsAndReviews` collection in MongoDB.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/16856802/218750916-a3ea2ead-9c81-42c9-9ad2-c60a61cdde4a.mp4" title="MongoDB Target" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" width="100%" height="100%"></iframe>
</div></div>

### Generated code {#target-code}

:::tip
To see the generated source code of your project, [switch to the Code view](/engineers/project-lifecycle/#review-the-code) in the project header.
:::

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
