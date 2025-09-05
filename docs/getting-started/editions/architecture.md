---
title: Architecture
id: architecture
description: Understand the high-level design and organization of Prophecy
tags:
  - architecture
---

Prophecy is deployed as microservices orchestrated by Kubernetes in various cloud platforms.

## Components

A successful Prophecy deployment contains the following components:

- **Prophecy Studio**: The studio user interface lets you access and develop visual data pipelines in various projects.

- **Prophecy Automate**: This is our built-in Prophecy runtime designed for ingestion, egress, and orchestration (scheduling). Prophecy Automate is only accessible via [Prophecy fabrics](/core/prophecy-fabrics/) for SQL projects and does not apply to Spark-based projects.

- **External execution engine**: Prophecy runs data transformations on your execution environment, such as Snowflake or Databricks. [Fabrics](docs/getting-started/concepts/fabrics.md) enable users to execute pipelines on these platforms. Prophecy does not persist your data.

- **Source control**: Prophecy integrates with Git for version control and supports both native and external Git options.

- **Copilot**: Our Copilot is an AI assistant powered by a knowledge graph of datasets, schemas, models, and pipelines. It sends enhanced prompts to an LLM, receives SQL or Spark code, verifies it, and generates visual components.

- **Authentication**: Prophecy supports multiple authentication methods, including Prophecy-managed authentication and integration with other identity providers.

## Prophecy for Analysts

Prophecy for Analysts leverages Prophecy Automate and an external SQL warehouse of your choice to build, run, and schedule pipelines.

The following architecture diagram demonstrates an example of the various components involved in a Prophecy deployment in their respective virtual networks.

![Prophecy for Analysts](img/arch-prophecy-sql.png)

Prophecy can accommodate a wide variety of architectures beyond this diagram. For example:

- The diagram shows Databricks as the data provider and SQL warehouse. Prophecy also supports Snowflake SQL warehouse.
- The diagram displays a connection to an external Git repository. You can also use Prophecy-managed Git for version control.

Prophecy Automate comes with the following components:

- **Ingest**: Basic data read & write capability into the data warehouse. This is built for business data sources such as Sharepoint, SFTP, and Excel. This is not designed for large volumes, real time, or CDC.

- **Orchestrate**: Time and trigger-based scheduling option with fast interactive experience, and built-in monitoring.

- **Observe**: Quick fix-it of scheduled pipelines, cost, performance, and data monitoring, overlayed on Prophecy Studio.

:::note
All code is still stored on Git in open formats.
:::

## Prophecy for Engineers

Prophecy for Engineers privileges Spark to execute pipelines in a scalable and optimized way. This architecture diagram demonstrates one example of the various components involved in a Prophecy deployment in their respective virtual networks.

![Prophecy for Engineers](img/arch-prophecy-spark.png)

Prophecy can accommodate a wide variety of architectures beyond this diagram. For example:

- The diagram demonstrates Databricks as the execution engine. You can connect to other platforms like Amazon EMR and Google Cloud Dataproc, or use any Spark engine through [Apache Livy](https://livy.apache.org/).
- The diagram displays a connection to an external Git repository. You can connect to a variety of providers such as GitHub, Bitbucket, GitLab, and more.
