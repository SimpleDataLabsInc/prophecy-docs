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

You define how data comes in and out of your pipeline during pipeline development. Data ingestion and egress may differ depending on whether the pipelines are executed in development or production environment. The way Prophecy performs ingestion and egress will also vary between [project types](/projects).

## Data transformation

Once data is ingested, it often needs to be cleaned, enriched, and structured to make it useful. Data transformation involves modifying data formats, aggregating values, filtering records, and applying business logic. Some common transformations include:

- **Normalization & Standardization:** Ensuring consistency across datasets.
- **Aggregation:** Summarizing large datasets for analysis.
- **Filtering & Enrichment:** Removing irrelevant data and enhancing it with additional attributes.

## Pipeline deployment

A key goal of pipeline development is to make the pipeline ready for deployment in production. Once a pipeline is developed, tested, and validated, it can be deployed to an execution environment where it will run automatically according to the defined schedule or trigger. The deployment process ensures that the pipeline is set up to handle real-time (Spark only) or batch processing with minimal manual intervention.

During deployment, you configure the environment, such as selecting the appropriate compute resources, scheduling execution times, and ensuring the pipeline is connected to the necessary data sources and destinations. You also choose which version of the pipeline will be deployed.

When your pipelines are deployed, you can make sure they run as expected using our built-in [monitoring](/analysts/monitoring) feature.

## Atomicity, transactionality, and idempotency

When designing pipelines, three principles ensure the reliable transfer of data: atomicity, transactionality, and idempotency.

- **Atomicity** prevents half-finished results.
- **Transactionality** ensures grouped steps succeed or fail together.
- **Idempotency** makes retries and re-runs safe.

Together, these principles let you build Prophecy pipelines that are robust, repeatable, and trustworthy.

### Atomicity

Atomicity means that each operation either succeeds completely or makes no changes. This prevents pipelines from producing partial or inconsistent outputs.

If a Prophecy pipeline updates a target table, atomicity guarantees that either all rows are processed or none of them are.

### Transactionality

Transactionality extends atomicity to a group of transactions, such that multiple operations are grouped into a single unit. Just as atomicity mandates that each _operation_ either succeeds completely or makes no changes, transactionality mandates that an entire _group of transactions_ either succeed completely or make no changes. That is, the group of transactions either all succeed or all fail and roll back together. Atomicity is a prerequisite for transactionality, in that individual transactions must function atomically in order for a group of operations to be considered transactional.

If a Prophecy pipeline updates multiple target tables, transactionality guarantees that either all are updated or none of them are.

### Idempotency

**Idempotency** means re-running an operation with the same inputs leaves the warehouse in the same end state. Impdepotency is critical in distributed systems, where retries and re-runs are common. Without it, duplicate rows or inconsistent states can silently creep in.

#### Idempotency quick rules

| Write Pattern                                                     | Idempotent?                                                                                                  | Notes                                                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Append / Insert** (to a table or file)                          | Never                                                                                                        | Re-runs add duplicate rows.                                            |
| **Merge / Upsert**                                                | If keys & predicate are correct                                                                              | Use a stable `unique_key`. Equivalent to Prophecy’s _Merge_ write.     |
| **Destructive Load** (truncate+insert / create-or-replace / swap) | If SELECT is deterministic                                                                                   | Safe as long as the SELECT doesn’t use random or time-based functions. |
| **Incremental Insert Overwrite** (+ `partition_by`)               | Per partition, if your WHERE/partition filtering is deterministic and only rewrites the intended partitions. |
| Only the targeted partitions are rewritten.                       |

<!-- check/add In dbt: materialized: incremental with incremental_strategy: merge and a valid unique_key. -->
<!-- check/add In dbt: materialized: table (adapter does a replace/swap); also insert_overwrite by partition (see below).
-->

#### What breaks idempotency

Watch for operations that appear safe but are not:

- **Non-deterministic functions** persisted to columns (`current_timestamp`, `random()`, `uuid_generate_v4()`), unless part of the key.
- **Sequence / identity values** in destructive loads (values can change each run).
- **ORDER BY … LIMIT** used to persist a subset without a stable tie-breaker.

#### Practical Guidance

:::info
If you must append, add a deduplication step. Treat append models as **non-idempotent by design**.
:::

#### Append

Use a unique index or `MERGE` into a canonical table to remove duplicates.

#### Merge / Upsert

Ensure `unique_key` is truly unique and stable. Prefer natural/business keys or durable surrogate keys. Avoid run-time values in UPDATE/INSERT sets unless explicitly required. Use **data-driven filters** (e.g., `updated_at > (select max(updated_at) from {{ this }})`), not “time of run.”

#### Destructive Loads\*\*

- Avoid persisting run timestamps or sequence values in target tables.
- If you need lineage, capture it separately in an **audit table**.

## What's next

Learn about different forms of pipeline development:

- [Pipeline development for Analysts](docs/analysts/development/development.md) using Prophecy Automate and SQL warehouse.
- [Pipeline development for Engineers](/engineers/pipeline-development) using Spark execution environments.
