---
title: Kafka
id: kafka
description: Reading and writing data from Apache Kafka in batch mode
tags:
  - gems
  - file
  - kafka
---

[Apache Kafka](https://kafka.apache.org/) is an open-source distributed event streaming platform, and supports a number of streaming paradigms.

## Source

The Source gem reads data from Kafka stream in batch mode. This means that Kafka only reads data incrementally from the last offset stored in the specified Metadata table. If the Metadata table is not present, then Kafka reads data from the `earliest` offset.

### Source Parameters

| Parameter                    | Description                                                                       | Required |
| :--------------------------- | :-------------------------------------------------------------------------------- | :------- |
| Bootstrap Server/Broker List | Comma separated list of Kafka brokers .                                           | True     |
| Group Id                     | Kafka consumer group ID.                                                          | True     |
| Session Timeout              | Session timeout for Kafka. (Default value set to 6000s.)                          | False    |
| Security Protocol            | Security protocol for Kafka. (Default value set to SASL_SSL.)                     | True     |
| SASL Mechanisms              | Default SASL Mechanism for SASL_SSL. (Default value set to SCRAM-SHA-256.)        | True     |
| Credentials                  | How to provide your credentials. (`Databricks Secrets` or `Username & Password`.) | True     |
| Kafka topic                  | Comma separated list of Kafka topics.                                             | True     |
| Metadata Table               | Table name to store offsets for each topic and partition.                         | True     |

### Example {#source-example}

![Example usage of Filter](./img/kafka_source_eg_1.png)

### Generated Code {#source-code}

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
</Tabs>

````

---

## Target

The Target gem writes each row from the `Dataframe` to a Kafka topic as JSON messages.

### Target Parameters

| Parameter                    | Description                                                                       | Required |
| :--------------------------- | :-------------------------------------------------------------------------------- | :------- |
| Bootstrap Server/Broker List | Comma separated list of Kafka brokers .                                           | True     |
| Security Protocol            | Security protocol for Kafka. (Default value set to SASL_SSL.)                     | True     |
| SASL Mechanisms              | Default SASL Mechanism for SASL_SSL. (Default value set to SCRAM-SHA-256.)        | True     |
| Credentials                  | How to provide your credentials. (`Databricks Secrets` or `Username & Password`.) | True     |
| Kafka topic                  | Comma separated list of Kafka topics.                                             | True     |
| Message Unique Key           |                                                                                   | True     |

### Example {#target-example}

![Example usage of Filter](./img/kafka_target_eg_1.png)

### Generated Code {#target-code}

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
</Tabs>

````

## Example Pipeline

### Source Pipeline Example

In this example, you will read JSON messages from Kafka, parse them, remove any null messages, and persist the data to a Delta table.

![Example usage of Filter](./img/kafka_pipeline_eg.gif)

#### Metadata Table

To avoid reprocessing messages on subsequent pipeline runs, you must update a table with the last processed offsets for each Kafka partition and topic. When you run that pipeline, the table only gets a batch of messages that arrived since the previously-processed offset.

For this example, you will update `metadata.kafka_offsets`, which has the following structure:

| topic           | partition | max_offset |
| :-------------- | :-------- | :--------- |
| my_first_topic  | 0         | 10         |
| my_first_topic  | 1         | 5          |
| my_second_topic | 0         | 10         |
| my_second_topic | 1         | 5          |

Taking this approach provides you the with following benefits:

1. Builds the pipeline interactively without committing any offsets.
2. Production workflows only consume messages that arrived since the previously-processed offset.
3. You can replay old messages by modifying the Metadata table.

:::note
For production workflows the [phase](../../../../concepts/project/gems.md#gem-phase) for the `Script` gem that updates the offsets should be greater than the phase of the Target gem. This ensures that offsets only update in the table after Prophecy safely persists the data to the Target.
:::

#### Spark Code Used For Script Component

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
</Tabs>

````
