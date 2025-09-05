---
title: Architecture
id: architecture
description: Understand the high-level design and organization of Prophecy
tags:
  - architecture
---

Prophecy is deployed as microservices orchestrated by Kubernetes in various cloud platforms.

## Free and Professional Edition

- Prophecy Studio: Control plane
- Prophecy Automate: Prophecy runtime - This is our built-in Prophecy runtime designed for ingestion, egress, and orchestration (scheduling).
- Prophecy Warehouse: Execution engine for transformations
- AI: LLM Endpoint
- Source control: Managed or native Git

SaaS

## Express Edition

- Prophecy Studio: Control plane
- Prophecy Automate: Prophecy runtime
- External Warehouse: Your own Databricks SQL engine for transformations
- AI: LLM Endpoint
- Source control: Managed or native Git

Dedicated SaaS

![Express edition architecture diagram](img/arch-prophecy-sql.png)

## Enterprise Edition

- Prophecy Studio: Control plane - The studio user interface lets you access and develop visual data pipelines in various projects.
- Execution engine: Available compute options are Spark cluster OR external SQL warehouse + Prophecy Automate - Prophecy runs data transformations on your execution environment, such as Snowflake or Databricks. [Fabrics](docs/getting-started/concepts/fabrics.md) enable users to execute pipelines on these platforms. Prophecy does not persist your data.
- AI: LLM Endpoint
- Source control: Managed or native Git

Dedicated SaaS; Self-hosted; SaaS

![Prophecy for Engineers](img/arch-prophecy-spark.png)

Prophecy can accommodate a wide variety of architectures beyond this diagram. For example:

- The diagram demonstrates Databricks as the execution engine. You can connect to other platforms like Amazon EMR and Google Cloud Dataproc, or use any Spark engine through [Apache Livy](https://livy.apache.org/).
- The diagram displays a connection to an external Git repository. You can connect to a variety of providers such as GitHub, Bitbucket, GitLab, and more.

## What is Prophecy Automate?

Each Prophecy Edition can leverage Prophecy Automate, our native runtime. Prophecy Automate enables you to do the following:

- **Ingest**: Basic data read & write capability into the data warehouse. This is built for business data sources such as Sharepoint, SFTP, and Excel. This is not designed for large volumes, real time, or CDC.

- **Orchestrate**: Time and trigger-based scheduling option with fast interactive experience, and built-in monitoring.

- **Observe**: Quick fix-it of scheduled pipelines, cost, performance, and data monitoring, overlayed on Prophecy Studio.

:::note
Prophecy Automate is only accessible via [Prophecy fabrics](/core/prophecy-fabrics/) for SQL projects and does not apply to Spark-based projects at this time.
:::

## Deployment models

Prophecy supports SaaS (multi-tenant) and Dedicated SaaS (single-tenant) deployments.

| Feature                                          | SaaS | Dedicated SaaS |
| ------------------------------------------------ | ---- | -------------- |
| No installation required                         | ✔    | ✔              |
| Automatic upgrades and access to latest features | ✔    | ✔              |
| Managed infrastructure costs                     | ✔    | ✔              |
| Isolated data/environment                        |      | ✔              |

### SaaS

The SaaS deployment option is entirely Prophecy-managed and has a multi-tenant architecture. SaaS provides the fastest access to latest features. Try out Prophecy using our SaaS environment by signing up for a [free trial](https://app.prophecy.io/metadata/auth/signup).

![SaaS VPC Architecture](img/arch_separate_vpc.png)

### Dedicated SaaS

:::edition Enterprise Only Only
This feature requires the [Enterprise Edition](/getting-started/editions/prophecy-editions) of Prophecy.
:::

Like our SaaS deployment, the Dedicated SaaS deployment is Prophecy-managed. However, Dedicated SaaS provides the convenience of a Prophecy-managed environment, but also the privacy of an isolated space on Prophecy’s Virtual Private Cloud. This is also known as a single-tenant architecture.

You can choose your preferred cloud platform (AWS, Azure, or GCP), and Prophecy will manage installation, maintenance, resource allocation, and more.

![Dedicated SaaS VPC Architecture](img/arch_dedicated_vpc.png)

:::info
While Prophecy continues to support existing customers with self-hosted deployments, new self-hosted installations of Prophecy are **discouraged**.
:::
