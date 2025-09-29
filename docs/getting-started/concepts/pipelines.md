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

## Ensure data is consistently written in egress

Egress may involve writing to warehouse tables within a Prophecy fabric or to external systems. When you write to a warehouse table, data transfer is _transactional_, meaning that transactions are guaranteed to succeed (if transactions fail, the process is restarted). When you write to external systems, you should implement practices to ensure that data is written consistently, or _idempotently_.

<!--keep working on this section-->

### Back up data in a data warehouse table

After you ingest data from any source other than a Table gem, it is best practice to set up a target table gem in order to [write data to a Data warehouse table](/analysts/source-target). That way, your data is safely backed up with a transactional write, and you can safely restart pipelines without fear of losing data.

```md
:::note
To ensure that all data is safely backed up, it is best practice to avoid incorporating [FTP](/administration/fabrics/prophecy-fabrics/connections/sftp) delete or move into your pipeline.
:::
```

<!--above refers to an FTP source gem-->

<!--need to write to one table--cannot write to multiple and maintain transactionality-->

### Use eventual consistency to write data to external systems

When Prophecy writes data to external systems (such as APIs, third-party databases, or data warehouses), immediate consistency cannot always be guaranteed. That means there’s a chance data gets delayed, duplicated, or temporarily out of sync, which could lead to stale or mismatched reports.

Instead, you should ensure data is written using principles of _eventual consistency_.

_Eventual consistency_ means that data in external systems will align with data in Prophecy over time (though not right away). To make this work, you should avoid patterns that could create duplicate rows or mismatched information. By following the practices described below, you can help ensure that external data stays consistent with Prophecy.

For example, imagine a Prophecy updates a customer’s status to “Active” in an external CRM. At first, the CRM might still show “Pending” until the update arrives, but eventually, it should match. To make this process reliable, we want to avoid situations that produce duplicates, apply old updates over newer ones, or leave the system half-updated.

:::note
Prophecy cannot _guarantee_ the consistency of writes to external systems and does not _enforce_ eventual consistency, but by designing with eventual consistency in mind, you can reduce risk.
:::

#### Eventual consistency when writing to external targets

_Idempotency_ is the foundation of eventual consistency: if a write can be re-run safely, then retries or delayed updates won’t corrupt external systems.

These principles apply whether the target is cloud storage, an external warehouse table, or a third-party API with batch endpoints.

These patterns describe how different Prophecy target gems behave when writing to external systems, and whether they can be safely re-run without producing duplicates or inconsistencies.

| Write Pattern                                                     | Idempotent?                                                                                                             | Notes                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Append / Insert**                                               | Not idempotent.                                                                                                         | With append or insert, reruns add duplicate rows. If you must append, add a deduplication step to your pipeline. Treat append models as non-idempotent by design. Use a unique index or `MERGE` into a canonical table to remove duplicates.                                    |
| **Merge / Upsert**                                                | Idempotent if keys and predicate are correct.                                                                           | Use a stable `unique_key` with Prophecy’s _Merge_ write. Ensure that the `unique_key` is truly unique and stable, such that the merge is prevented if the `unique_key` is present in the target. Prefer natural/business keys or durable surrogate keys.                        |
| **Destructive Load** (truncate+insert / create-or-replace / swap) | Idempotent if `SELECT` is deterministic. That is, if `SELECT` consistently returns the same result set.                 | Safe as long as the `SELECT` doesn’t use random or time-based functions such as `current_timestamp` or `random()`. Here, you should avoid persisting run timestamps or sequence/identity values in target tables. If you need lineage, capture it separately in an audit table. |
| **Incremental Insert Overwrite** (+ `partition_by`)               | Idempotent per partition, if your WHERE/partition filtering is deterministic and only rewrites the intended partitions. | Only targeted partitions are rewritten. Safe if filtering conditions always isolate the correct partitions (such as `date >= yesterday`). Risky if WHERE clauses shift between runs.                                                                                            |

Other tips to maintain idempotency:

- Avoid **non-deterministic functions** persisted to columns (`current_timestamp`, `random()`, `uuid_generate_v4()`), unless part of the key.
- Avoid run-time values in `UPDATE`/`INSERT` sets unless explicitly required. (That is, do not parameterize `UPDATE`/`INSERT`.) Use **data-driven filters** (such as `updated_at > (select max(updated_at) from {{ this }})`), not “time of run.”
- Avoid using **ORDER BY … LIMIT** used to persist a subset unless you have a stable tie-breaker.

## What's next

Learn about different types of pipeline development:

- [Pipeline development for Analysts](docs/analysts/development/development.md) using Prophecy Automate and SQL warehouse.
- [Pipeline development for Engineers](/engineers/pipeline-development) using Spark execution environments.
