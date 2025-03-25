---
title: Pipelines
id: pipelines
description: Build pipelines in projects to execute data ingestion, transformation, and egress
tags:
  - pipeline
  - concepts
---

Pipelines are essential components in data processing workflows, enabling the automated movement and transformation of data. They define a sequence of steps that extract data from a source, process or transform it, and load it into a destination system. Pipelines ensure data flows efficiently and consistently, which can be tracked using built-in [pipeline monitoring](docs/analysts/observability.md).

Let's explore the core concepts of pipelines, including ingestion, egress, and transformation.

## Ingestion and egress

Ingestion refers to the process of collecting raw data from various sources, such as databases, APIs, web applications, etc. This step ensures that data is captured and stored for further processing. Egress, on the other hand, is the final step where processed data is delivered to its destination. This could be a data warehouse, a dashboard, or another external system.

You define how data comes in and out of your pipeline during pipeline development. Data ingestion and egress may differ depending on whether the pipelines are executed in development or production environment. The way Prophecy performs ingestion and egress will also vary between [project types](docs/getting-started/concepts/project.md).

### Methods

There are a couple of ways to process data in pipelines:

- **Batch processing:** Data is collected and processed in scheduled intervals.
- **Streaming:** Data is ingested and transmitted in real-time.

## Data transformation

Once data is ingested, it often needs to be cleaned, enriched, and structured to make it useful. Data transformation involves modifying data formats, aggregating values, filtering records, and applying business logic.

Transformations:

- Normalization & Standardization: Ensuring consistency across datasets.
- Aggregation: Summarizing large datasets for analysis.
- Filtering & Enrichment: Removing irrelevant data and enhancing it with additional attributes.

## What's next

Learn about different forms of pipeline development:

- Pipeline development for analysts using Prophecy Automate and SQL warehouse
- Pipeline development for engineers using Spark engines
