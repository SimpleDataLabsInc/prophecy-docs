---
title: Pipelines
id: pipelines
slug: /pipelines
description: Build pipelines in projects to execute data ingestion, transformation, and egress
tags:
  - pipeline
  - concepts
---

Pipelines are essential components in data processing workflows, enabling the automated movement and transformation of data. They define a sequence of steps that extract data from a source, process or transform it, and load it into a destination system. Pipelines ensure data flows efficiently and consistently, which can be tracked using built-in [pipeline monitoring](/analysts/monitoring).

Let's explore the core concepts of pipelines, including ingestion, egress, transformation, and deployment.

## Ingestion and egress

Ingestion refers to the process of collecting raw data from various sources, such as databases, APIs, web applications, etc. This step ensures that data is captured and stored for further processing. Egress, on the other hand, is the final step where processed data is delivered to its destination. This could be a data warehouse, a dashboard, or another external system.

You define how data comes in and out of your pipeline during pipeline development. Data ingestion and egress may differ depending on whether the pipelines are executed in development or production environment. The way Prophecy performs ingestion and egress will also vary between [project types](docs/getting-started/concepts/project.md).

## Data transformation

Once data is ingested, it often needs to be cleaned, enriched, and structured to make it useful. Data transformation involves modifying data formats, aggregating values, filtering records, and applying business logic. Some common transformations include:

- **Normalization & Standardization:** Ensuring consistency across datasets.
- **Aggregation:** Summarizing large datasets for analysis.
- **Filtering & Enrichment:** Removing irrelevant data and enhancing it with additional attributes.

## Pipeline deployment

A key goal of pipeline development is making the pipeline ready for deployment in production. Once a pipeline is developed, tested, and validated, it can be deployed to an execution environment where it will run automatically according to the defined schedule or trigger. The deployment process ensures that the pipeline is set up to handle real-time (Spark only) or batch processing with minimal manual intervention.

During deployment, you configure the environment, such as selecting the appropriate compute resources, scheduling execution times, and ensuring the pipeline is connected to the necessary data sources and destinations. You also choose which version of the pipeline will be deployed.

When your pipelines are deployed, you can make sure they run as expected using our built-in [monitoring](/analysts/monitoring) feature.

## What's next

Learn about different forms of pipeline development:

- [Pipeline development for Analysts](docs/analysts/development/development.md) using Prophecy Automate and SQL warehouse.
- [Pipeline development for Engineers](docs/Spark/Spark.md) using Spark execution environments.
