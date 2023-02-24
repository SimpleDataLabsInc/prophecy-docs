---
title: Event-based
id: streaming-event-apps
description: Event-based Source and Target Gems for Streaming Data Applications
sidebar_position: 1
tags:
  - spark
  - streaming
  - kafka
---

## Event-based Sources and Targets

Prophecy supports **Kafka Streaming** Source and Target. More information on supported Kafka Source and Target options are available [here](https://spark.apache.org/docs/latest/structured-streaming-kafka-integration.html).

The Kafka Gem allows inferring the schema of the events by automatically populating the `value` column. Schema inference works with both JSON or AVRO file formats. A user is required to provide an example event for schema inference.

## Create a Kafka Source Gem

A Kafka Source Gem allows the Streaming Pipeline continuously pull data data from a Kafka topic. The users are able to define the following:

- **Broker List** allows users to enter multiple Kafka brokers separated by commas. For example: `kdj-ibg1.us-east-2.aws.cloud:9092, kdj-ibg2.us-east-2.aws.cloud:9092,kdj-ibg3.us-east-2.aws.cloud:9092`
- **Group ID** is an optional field that allows users to input their consumer group ID. If consumer groups are not utilized, leave this field blank
- **Session Timeout** is the timeout used to detect client failures when using Kafka's group management facility
- **Security Protocol** `SASL_SSL`, `PLAINTEXT`, `SSL`, `SSL_PLAINTEXT` are supported at this time
- **SASL Mechanisms** a family of SASL mechanisms that addresses the security concerns with traditional mechanisms that perform username/password authentication like `PLAIN`, `SCRAM-SHA-256` and `SCRAM-SHA-512`, `GSSAPI`, `OAUTHBEARER` are supported

### Credentials

- **Username and Password (not recommended)**: Kafka cluster user name and password. API key can also be used as Username and API secret as the Password
- **Databricks Secrets (recommended)**: You may use Databricks to manage your credentials
- **Kafka Topic**: Name of the topic that the Kafka Source is pulling data from

:::caution
Typing the username and password into the Prophecy UI is **NOT RECOMMENDED**. This option is provided only for demonstration purposes; this option will commit credentials to the code. It is not a safe option.

The recommended method is to use Databricks Secrets.
:::
