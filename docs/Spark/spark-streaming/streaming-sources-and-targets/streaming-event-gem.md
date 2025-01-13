---
title: Event-based
id: streaming-event-apps
description: Event-based Source and Target Gems for Streaming Data Applications
tags:
  - spark
  - streaming
  - kafka
---

## Event-based Sources and Targets

Prophecy supports **Kafka Streaming** Source and Target. More information on supported Kafka Source and Target options are available [here](https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html).

The Kafka Gem allows inferring the schema of the events by automatically populating the `value` column. Schema inference works with both JSON and AVRO file formats. A user is required to provide an example event for schema inference.

## Create a Kafka Source Gem

A Kafka Source Gem allows the Streaming Pipeline continuously pull data from a Kafka topic. The following options are supported:

| **Property**          | Optional | **Default Value** | **Comment**                                                                                                                                                 |
| --------------------- | -------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Broker List           | False    | N/A               | List of Kafka brokers separated by commas. For eg. `kdj-ibg1.us-east-2.aws.cloud:9092, kdj-ibg2.us-east-2.aws.cloud:9092,kdj-ibg3.us-east-2.aws.cloud:9092` |
| **Group ID**          | True     | None              | Consumer group ID.                                                                                                                                          |
| **Session Timeout**   | False    | 6000              | Corresponds to the `session.timeout.ms` field                                                                                                               |
| **Security Protocol** | False    | SASL_SSL          | Supported values are `SASL_SSL`, `PLAINTEXT`, `SSL`, `SSL_PLAINTEXT`                                                                                        |
| **SASL Mechanisms**   | False    | SCRAM-SHA-256     | SASL mechanism to handle username/password authentication. Supported values are `PLAIN`, `SCRAM-SHA-256` and `SCRAM-SHA-512`, `GSSAPI`, `OAUTHBEARER`       |
| **Kafka Topic**       | False    | N/A               | Name of Kafka Topic to Consume                                                                                                                              |

### Entering Authentication Credentials

- **Databricks Secrets (recommended)**: Use Databricks to manage your credentials
- **UserName, Password**: Use **ONLY** for test deployments and during development. This writes credentials to Git repository, which isn't good practice.
