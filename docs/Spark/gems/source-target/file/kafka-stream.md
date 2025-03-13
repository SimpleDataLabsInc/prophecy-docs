---
title: Kafka
id: kafka
description: Reading and writing data from Apache Kafka in batch mode
tags:
  - gems
  - file
  - kafka
---

[Apache Kafka](https://kafka.apache.org/) is:

- An open-source distributed event streaming platform.
- Handles high volumes of data and delivers messages with low latency.
- Supports real-time analytics, stream processing, fault tolerance, scalability, data integration, and event-driven architectures.

## Parameters

| Parameter                    | Tab      | Description                                                                       |
| ---------------------------- | -------- | --------------------------------------------------------------------------------- |
| Bootstrap Server/Broker List | Location | Comma separated list of Kafka brokers .                                           |
| Security Protocol            | Location | Security protocol for Kafka. (Default value set to SASL_SSL.)                     |
| SASL Mechanisms              | Location | Default SASL Mechanism for SASL_SSL. (Default value set to SCRAM-SHA-256.)        |
| Credentials                  | Location | How to provide your credentials. (`Databricks Secrets` or `Username & Password`.) |
| Kafka topic                  | Location | Comma separated list of Kafka topics.                                             |

## Source

The Source gem reads data from Kafka stream in batch mode and allows you to optionally specify additional properties. This means that Kafka only reads data incrementally from the last offset stored in the specified Metadata table. If the Metadata table is not present, then Kafka reads data from the `earliest` offset.

### Source properties

| Property name                                   | Description                                                 | Default |
| ----------------------------------------------- | ----------------------------------------------------------- | ------- |
| Group Id                                        | Kafka consumer group ID.                                    | None    |
| Session Timeout                                 | Session timeout for Kafka.                                  | `6000`  |
| Store offsets read per partition in Delta table | Whether to store offsets read per partition in Delta table. | false   |
| Metadata Table                                  | Delta table to store offsets for each topic and partition.  | None    |
| Kerberos service name for Kafka SASL            | Name of your Kerberos service to use in Kafka.              | None    |

### Example {#source-example}

![Example usage of Filter](./img/kafka_source_eg_1.png)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to each row from the `Dataframe` to a Kafka topic as JSON messages and allows you to optionally specify additional properties.

### Target properties

| Property name                        | Description                                                 | Default |
| ------------------------------------ | ----------------------------------------------------------- | ------- |
| Message Unique Key                   | Key to help determine which partition to write the data to. | None    |
| Kerberos service name for Kafka SASL | Name of your Kerberos service to use in Kafka.              | None    |

### Example {#target-example}

![Example usage of Filter](./img/kafka_target_eg_1.png)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Example Pipeline

### Source Pipeline Example

In this example, you read JSON messages from Kafka, parse them, remove any null messages, and persist the data to a Delta table.

![Example usage of Filter](./img/kafka_pipeline_eg.gif)

#### Metadata Table

To avoid reprocessing messages on subsequent pipeline runs, update a table with the last processed offsets for each Kafka partition and topic. When you run the pipeline, the table only gets a batch of messages that arrived since the previously-processed offset.

In this example, you update `metadata.kafka_offsets`, which has the following structure:

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

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::
