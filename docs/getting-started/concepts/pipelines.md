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

Ingestion refers to the process of collecting raw data from various sources, such as databases, APIs, web applications, and so on. This step ensures that data is captured and stored for further processing. 

Egress, on the other hand, is the final step where processed data is delivered to its destination. This could be a data warehouse, a dashboard, or another external system.

You define ingestion and egress during pipeline development. These may differ depending on whether the pipelines are executed in a development or production environment. The way Prophecy performs ingestion and egress will also vary between [project types](/projects).

## Data transformation

Once data is ingested, it often needs to be cleaned, enriched, and structured to make it useful. Data transformation involves modifying data formats, aggregating values, filtering records, and applying business logic. Some common transformations include:

- **Normalization & Standardization:** Ensuring consistency across datasets.
- **Aggregation:** Summarizing large datasets for analysis.
- **Filtering & Enrichment:** Removing irrelevant data and enhancing it with additional attributes.

## Pipeline deployment

A key goal of pipeline development is to make the pipeline ready for deployment in production. Once a pipeline is developed, tested, and validated, it can be deployed to an execution environment where it will run automatically according to the defined schedule or trigger. The deployment process ensures that the pipeline is set up to handle real-time (Spark only) or batch processing with minimal manual intervention.

During deployment, you configure the environment, such as selecting the appropriate compute resources, scheduling execution times, and ensuring the pipeline is connected to the necessary data sources and destinations. You also choose which version of the pipeline will be deployed.

When your pipelines are deployed, you can make sure they run as expected using our built-in [monitoring](/analysts/monitoring) feature.

## Ensuring data is consistently written in egress

Egress may involve writing to warehouse tables within a Prophecy fabric or to external systems. When you write to a warehouse table, data transfer is _transactional_, meaning that transactions are guaranteed to succeed. When you write to external systems, you should implement practices to ensure that data is written consistently, or _idempotently_.

<!--keep working on this section-->

### Writing data to data warehouse tables

After you ingest data from any source other than a Table gem, it is best practice to set up a target table gem in order to write data to a Data warehouse table. That way, your data is safely stored within the fabric that you've set up.

In order to perform a transactional write in Prophecy, you must

1. Write only to [Data warehouse tables using a Table gem](/analysts/source-target).
2. Avoid incorporating [FTP](/administration/fabrics/prophecy-fabrics/connections/sftp) delete or move.

### Writing data to external systems

When you write data to exernal systems, you should take steps to ensure that this data is written consistently, or _idempotently_.

Idempotency means re-running a pipeline with the same inputs leaves the target table or warehouse in the same end state. Without idempotency, you may produce duplicate rows or inconsistent states. Following the practice described below will ensure that data is written idempotently.

#### Idempotency quick rules for Prophecy pipelines

| Write Pattern                                                | Idempotent?                                                  | Notes                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Append / Insert**                                          | Never                                                        | Re-runs add duplicate rows. If you must append, add a deduplication step to your pipeline. Treat append models as non-idempotent by design. Use a unique index or `MERGE` into a canonical table to remove duplicates. |
| **Merge / Upsert**                                           | If keys and predicate are correct                            | Use a stable `unique_key` with Prophecy’s _Merge_ write. Ensure that the `unique_key` is truly unique and stable. Prefer natural/business keys or durable surrogate keys. Avoid run-time values in UPDATE/INSERT sets unless explicitly required. Use **data-driven filters** (such as `updated_at > (select max(updated_at) from {{ this }})`), not “time of run.” |
| **Destructive Load** (truncate+insert / create-or-replace / swap) | If `SELECT` is deterministic                                 | Safe as long as the `SELECT` doesn’t use random or time-based functions. Avoid persisting run timestamps or sequence/identity values in target tables. If you need lineage, capture it separately in an audit table. |
| **Incremental Insert Overwrite** (+ `partition_by`)          | Per partition, if your WHERE/partition filtering is deterministic and only rewrites the intended partitions. | Only targeted partitions are rewritten.                      |

Watch for operations that appear to be safe but are not:

- **Non-deterministic functions** persisted to columns (`current_timestamp`, `random()`, `uuid_generate_v4()`), unless part of the key
-  
- **ORDER BY … LIMIT** used to persist a subset without a stable tie-breaker.

## What's next

Learn about different types of pipeline development:

- [Pipeline development for Analysts](docs/analysts/development/development.md) using Prophecy Automate and SQL warehouse.
- [Pipeline development for Engineers](/engineers/pipeline-development) using Spark execution environments.
