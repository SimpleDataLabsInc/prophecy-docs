---
title: Architecture
id: architecture
description: Understand the high-level design and organization of Prophecy
tags:
  - architecture
---

Prophecy is written as a set of microservices that run on Kubernetes in various cloud platforms.

## Components

The following are the main components of a successful Prophecy deployment.

- **Integrated development environment (IDE)**: The Prophecy IDE includes Prophecy microservices and cloud infrastructure. Users that log in to Prophecy access the IDE to transform raw data into analytics-ready data using visual data pipelines.

- **Execution engine**: Prophecy pipelines and models run on external environments like Snowflake or Databricks. When using Prophecy orchestration, computation occurs within the Prophecy runtime. [Fabrics](docs/getting-started/concepts/fabrics.md) let users execute pipelines on these engines. Your data is not persisted in Prophecy.

- **Source control**: Prophecy integrates with Git for version control and supports both native and external Git options.

- **Copilot**: Our Copilot is an AI assistant powered by a knowledge graph of datasets, schemas, models, and pipelines. It sends enhanced prompts to an LLM, receives SQL or Spark code, verifies it, and generates visual components.

- **Authentication**: Prophecy supports multiple authentication methods, including Prophecy-managed authentication and integration with other identity providers.

## Prophecy for Analysts (SQL)

This diagram demonstrates the various components in their respective VPCs.

![Arch_Diagram](./img/arch_snowflake.png)

Adjustments:

- Though we demonstrate the architecture using a Snowflake computation engine, we support different SQL warehouses as well.
- Though we display the Prophecy-managed Git inside Prophecy, you can also connect to external Git repositories.
- Though we display the Prophecy runtime inside Prophecy, it is possible for the Prophecy runtime to run in a customer VPC instead.

## Prophecy for Engineers (Spark)

This diagram demonstrates the various components in their respective VPCs.

![Prophecy to Databricks Connectivity](./img/arch_databricks.png)

Adjustments:

- Though we demonstrate the architecture using a Databricks execution engine, you can use any other Spark engine through [Apache Livy](https://livy.apache.org/) (e.g. MapR, CDP, HDP, Spark on Kubernetes).
- Though we demonstrate a connection to an external Git repository, you can use Prophecy-managed Git instead.
