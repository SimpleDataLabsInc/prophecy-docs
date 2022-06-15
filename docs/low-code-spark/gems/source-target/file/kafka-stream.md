---
title: Kafka
id: kafka
description: Reading and writing data from Apache Kafka in batch mode
sidebar_position: 9
tags:
  - gems
  - file
  - kafka
---

[Apache Kafka](https://kafka.apache.org/) is an open-source distributed event streaming platform. Supporting a number of streaming paradigms it's used by thousands of companies and organizations in scenarios including Data Ingestion, Analytics and more.

This source currently connects with Kafka Brokers in Batch mode.

## Source

Reads data from kafka stream in batch mode.
Data is read only incrementally from the last offset stored in the metadata table. If metadata table
is not present, then data with `earliest` offset would be read.

### Source Parameters

| Parameter         | Description                                                               | Required |
| :---------------- | :------------------------------------------------------------------------ | :------- |
| Broker List       | Comma separated list of kafka brokers                                     | True     |
| Group Id          | Kafka consumer group id                                                   | True     |
| Session Timeout   | Session timeout for kafka. (Default value set to 6000s)                   | False    |
| Security Protocol | Security protocol for kafka (Default value set to SASL_SSL)               | True     |
| SASL Mechanism    | Default SASL Mechanism for SASL_SSL (Default value set to SCRAM-SHA-256)  | True     |
| Credential Type   | Credential Type provider (Databricks Secrets or Username/Password)        | True     |
| Credential Scope  | Scope to use for databricks secrets                                       | True     |
| Kafka Topic       | Comma separated list of kafka topics                                      | True     |
| Metadata Table    | Table name which would be used to store offsets for each topic, partition | True     |

### Source Example

![Example usage of Filter](./img/kafka_source_eg_1.png)

### Spark Code

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="py" label="Python">

```py
def KafkaSource(spark: SparkSession) -> DataFrame:
    from delta.tables import DeltaTable
    import json
    from pyspark.dbutils import DBUtils

    if spark.catalog._jcatalog.tableExists(f"metadata.kafka_offsets"):
        offset_dict = {}

        for row in DeltaTable.forName(spark, f"metadata.kafka_offsets").toDF().collect():
            if row["topic"] in offset_dict.keys():
                offset_dict[row["topic"]].update({row["partition"] : row["max_offset"] + 1})
            else:
                offset_dict[row["topic"]] = {row["partition"] : row["max_offset"] + 1}

        return (spark.read\
            .format("kafka")\
            .options(
              **{
                "kafka.sasl.jaas.config": (
                  f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"
                  + f' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";'
                ),
                "kafka.sasl.mechanism": "SCRAM-SHA-256",
                "kafka.security.protocol": "SASL_SSL",
                "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",
                "kafka.session.timeout.ms": "6000",
                "group.id": "group_id_1",
                "subscribe": "my_first_topic,my_second_topic",
                "startingOffsets": json.dumps(offset_dict),
              }
            )\
            .load()\
            .withColumn("value", col("value").cast("string"))\
            .withColumn("key", col("key").cast("string")))
    else:
        return (spark.read\
            .format("kafka")\
            .options(
              **{
                "kafka.sasl.jaas.config": (
                  f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"
                  + f' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";'
                ),
                "kafka.sasl.mechanism": "SCRAM-SHA-256",
                "kafka.security.protocol": "SASL_SSL",
                "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",
                "kafka.session.timeout.ms": "6000",
                "group.id": "group_id_1",
                "subscribe": "my_first_topic,my_second_topic"
              }
            )\
            .load()\
            .withColumn("value", col("value").cast("string"))\
            .withColumn("key", col("key").cast("string")))

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
Coming Soon
```

</TabItem>
</Tabs>

````

---

## Target

Publishes the dataframe to kafka topic(s) as json messages.

### Target Parameters

| Parameter         | Description                                                              | Required |
| :---------------- | :----------------------------------------------------------------------- | :------- |
| Broker List       | Comma separated list of kafka brokers                                    | True     |
| Security Protocol | Security protocol for kafka (Default value set to SASL_SSL)              | True     |
| SASL Mechanism    | Default SASL Mechanism for SASL_SSL (Default value set to SCRAM-SHA-256) | True     |
| Credential Type   | Credential Type provider (Databricks Secrets or Username/Password)       | True     |
| Credential Scope  | Scope to use for databricks secrets                                      | True     |
| Kafka Topic       | Comma separated list of kafka topics                                     | True     |

### Target Example

![Example usage of Filter](./img/kafka_target_eg_1.png)

### Spark Code

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def KafkaTarget(spark: SparkSession, in0: DataFrame):
    df1 = in0.select(to_json(struct("*")).alias("value"))
    df2 = df1.selectExpr("CAST(value AS STRING)")
    df2.write\
        .format("kafka")\
        .options(
          **{
            "kafka.sasl.jaas.config": (
              f"kafkashaded.org.apache.kafka.common.security.scram.ScramLoginModule"
              + f' required username="{DBUtils(spark).secrets.get(scope = "test", key = "username")}" password="{DBUtils(spark).secrets.get(scope = "test", key = "password")}";'
            ),
            "kafka.sasl.mechanism": "SCRAM-SHA-256",
            "kafka.security.protocol": "SASL_SSL",
            "kafka.bootstrap.servers": "broker1.aws.com:9094,broker2.aws.com:9094",
            "topic": "my_first_topic,my_second_topic",
          }
        )\
        .save()

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
Coming Soon

```

</TabItem>
</Tabs>

````

# Example Pipelines

## Source Pipeline Example

In this example we would be reading json messages from kafka stream, parse them, remove any null messages
and then finally save it into a delta table.

![Example usage of Filter](./img/kafka_pipeline_eg.gif)

Also once the data is successfully written into our target, we would be updating the `metadata.kafka_offsets` table.

The `metadata.kafka_offsets` table would save the max offset read for each topic, partition combination.

| topic           | partition | max_offset |
| :-------------- | :-------- | :--------- |
| my_first_topic  | 0         | 10         |
| my_first_topic  | 1         | 5          |
| my_second_topic | 0         | 10         |
| my_second_topic | 1         | 5          |

This table would help us in below:

1. Build the pipeline interactively without committing any offset
2. For batch production workflows this would help us to keep track on what offsets to read from in the subsequent run
3. In case we want to relay older messages again from a particular offset, we can simply update the metadata table.

:::note
For production workflows the phase for update offset script gem should be greater than the phase of
target gem (like in our example, phase for target gem is 0 and updateOffsets gem is 1).
This is to ensure that offsets are only updated in the table post data is successfully written.
:::

### Spark Code used for script component

````mdx-code-block

<Tabs>

<TabItem value="py" label="Python">

```py
def UpdateOffsets(spark: SparkSession, in0: DataFrame):

    if not ("SColumnExpression" in locals()):
        from delta.tables import DeltaTable
        import pyspark.sql.functions as f
        metadataTable = "metadata.kafka_offsets"
        metaDataDf = in0.groupBy("partition", "topic").agg(f.max(f.col("`offset`").cast("int")).alias("max_offset"))

        if not spark.catalog._jcatalog.tableExists(metadataTable):
            metaDataDf.write.format("delta").mode("overwrite").saveAsTable(metadataTable)
        else:
            DeltaTable\
                .forName(spark, metadataTable)\
                .alias("target")\
                .merge(
                  metaDataDf.alias("source"),
                  (
                    (col("source.`partition`") == col("target.`partition`"))
                    & (col("source.`topic`") == col("target.`topic`"))
                  )
                )\
                .whenMatchedUpdateAll()\
                .whenNotMatchedInsertAll()\
                .execute()

```

</TabItem>
<TabItem value="scala" label="Scala">

```scala
Coming Soon

```

</TabItem>
</Tabs>

````
