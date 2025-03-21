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

## Prophecy for Analysts

Prophecy for Analysts leverages the Prophecy runtime and a SQL warehouse to let users build, run, and schedule their pipelines. This architecture diagram demonstrates one example of the various components involved in a Prophecy deployment in their respective virtual networks.

![Prophecy for Analysts](img/arch-prophecy-sql.png)

Prophecy can accommodate a wide variety of architectures beyond this diagram. For example:

- The diagram shows Databricks as the data provider and SQL warehouse. Prophecy also supports Snowflake SQL warehouse.
- The diagram displays a connection to an external Git repository. You can also use Prophecy-managed Git for version control.
- The diagrams places the Prophecy runtime inside Prophecy. If necessary, the Prophecy runtime can run in a customer network instead.

## Prophecy for Engineers

Prophecy for Engineers privileges Spark to execute pipelines in a scalable and optimized way. This architecture diagram demonstrates one example of the various components involved in a Prophecy deployment in their respective virtual networks.

![Prophecy for Engineers](img/arch-prophecy-spark.png)

Prophecy can accommodate a wide variety of architectures beyond this diagram. For example:

- The diagram demonstrates Databricks as the execution engine. You can use any other Spark engine through [Apache Livy](https://livy.apache.org/) (e.g. MapR, CDP, HDP, Spark on Kubernetes).
- The diagram displays a connection to an external Git repository. You can connect to a variety of providers such as GitHub, Bitbucket, GitLab, and more.
