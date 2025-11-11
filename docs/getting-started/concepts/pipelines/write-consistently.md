---
title: Write from pipelines consistently
id: pipelines-write-consistently
slug: /pipelines/pipelines-write-consistently
description: Write data consistently.
tags:
  - pipeline
  - concepts
  - write
---

import Mermaid from '@theme/Mermaid';

Egress may involve writing to warehouse tables within a Prophecy fabric or to external systems.

When you write to a warehouse table, data transfer is _transactional_, meaning that transactions are guaranteed to succeed (if transactions fail, the process is restarted).

When you write to external systems, you should implement practices to ensure that data is written consistently.

### Back up data in a data warehouse table

After you ingest data from any source other than a Table gem, it is best practice to set up a target table gem in order to [write this data to a Data warehouse table](/analysts/source-target). That way, your data is safely backed up with a transactional write, and you can safely restart pipelines without fear of losing data.

<Mermaid
value={`
flowchart LR
B(Source Gem: Anything other than a Table)-->C(Target Gem: Data Warehouse Table)

`}
/>

:::note
To ensure that all data is safely backed up, it is best practice to avoid incorporating [FTP](/administration/fabrics/prophecy-fabrics/connections/sftp) delete or move into your pipeline.
:::

### Use eventual consistency to write data to external systems

When Prophecy writes data to external systems (such as APIs, third-party databases, or data warehouses), immediate consistency cannot always be guaranteed. That means there’s a chance data gets delayed, duplicated, or temporarily out of sync, which could lead to stale or mismatched reports.

Instead, you should ensure data is written using principles of _eventual consistency_.

_Eventual consistency_ means that data in external systems will align with data in Prophecy over time (though not right away). To make this work, you should avoid patterns that could create duplicate rows or mismatched information. By following the practices described below, you can help ensure that external data stays consistent with Prophecy.

Mainly, you need to ensure that you use _unique keys_ to specify where data should be written in the external system. A unique key is the column or set of columns that uniquely identify a row in a dataset, such as a `customer_id` in a `customers` table. In merge/upsert operations, the unique key is what tells the system “this row already exists, update it” versus “this row is new, insert it.”

If the key isn’t consistent (such as a timestamp that changes each run) reruns may create duplicate or conflicting rows. Because you might see the “same” record multiple times (due to retries, lag, or replays), unique keys are how you prevent duplicate inserts. Without unique keys, retries against an eventually consistent system risk creating divergent states.

For example, imagine a Prophecy updates a customer’s status to “Active” in an external CRM. At first, the CRM might still show “Pending” until the update arrives, but eventually, it should match. To make this process reliable, we want to write using a unique `customer_id`.

<Mermaid
value={`

flowchart LR
%% Title
%% Eventual Consistency: Data convergence over time

%% Prophecy side
subgraph P[Prophecy Environment]
direction TB
A[Prophecy Pipeline<br/> Writes/Updates]
K[(Unique Key: customer_id)]
end

%% External system side
subgraph E[External System CRM, Warehouse]
direction TB
X1[Status:<br/> Pending]
X2[Status:<br/> Active]
end

%% Flow of events
A -->|Write via API/ <br/>Stream| D[Transmission Delay/<br/>Retry Window]
D -->|Eventually Consistent<br/>Write| X1
X1 -->|Update using<br/>Unique Key| X2

%% Time axis (visual metaphor)
T0([T₀: Write Request]) --> T1([T₁: Delayed Arrival]) --> T2([T₂: Retry Attempt]) --> T3([T₃: Final Consistent State])

%% Link Prophecy to timeline
A -.-> T0
D -.-> T1
X1 -.-> T2
X2 -.-> T3

%% Styling
classDef prophecy fill:#e1f5fe,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef key fill:#f5f5f5,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef network fill:#fff3e0,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef external fill:#ede7f6,stroke:#bdbdbd,stroke-width:1px,color:#1c1e21
classDef time fill:transparent,stroke:#bdbdbd,stroke-width:1px,color:#616161,font-size:10px

class A prophecy
class K key
class D network
class X1,X2 external
class T0,T1,T2,T3 time
`}
/>

:::note
Prophecy cannot _guarantee_ the consistency of writes to external systems (eventual consistency is not enforced), but by designing with eventual consistency in mind, you can reduce risk.
:::

#### Principles of eventual consistency

These principles apply whether the target is cloud storage, an external warehouse table, or a third-party API with batch endpoints.

These patterns describe how different Prophecy target gems behave when writing to external systems, and whether they can be safely re-run without producing duplicates or inconsistencies.

| Write Pattern                                                     | Eventually consistent?                                                                                                             | Notes                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Merge / Upsert**                                                | Eventually consistent if keys and predicate are correct.                                                                           | Use a stable `unique_key` with Prophecy’s _Merge_ write. Ensure that the `unique_key` is truly unique and stable. Ideally, these are natural/business keys (such as a vehicle identification number) or durable surrogate keys (such as a UUID).                                |
| **Destructive Load** (truncate+insert / create-or-replace / swap) | Eventually consistent if `SELECT` is deterministic. That is, if `SELECT` consistently returns the same result set.                 | Safe as long as the `SELECT` doesn’t use random or time-based functions such as `current_timestamp` or `random()`. Here, you should avoid persisting run timestamps or sequence/identity values in target tables. If you need lineage, capture it separately in an audit table. |
| **Incremental Insert Overwrite** (+ `partition_by`)               | Eventually consistent per partition, if your WHERE/partition filtering is deterministic and only rewrites the intended partitions. | Only targeted partitions are rewritten. Safe if filtering conditions always isolate the correct partitions (such as `date >= yesterday`). Risky if WHERE clauses shift between runs.                                                                                            |
| **Append / Insert**                                               | Not eventually consistent.                                                                                                         | With append or insert, reruns add duplicate rows. If you must append, add a deduplication step to your pipeline. Treat append models as breaking eventual consistency by design. Use a unique index or `MERGE` into a canonical table to remove duplicates.                     |

Other tips to maintain eventual consistency:

- Avoid **non-deterministic functions** persisted to columns (`current_timestamp`, `random()`, `uuid_generate_v4()`), unless part of the key.
- Avoid run-time values in `UPDATE`/`INSERT` sets unless explicitly required. (That is, do not parameterize `UPDATE`/`INSERT`.) Use **data-driven filters** (such as `updated_at > (select max(updated_at) from {{ this }})`), not “time of run.”
- Avoid using `ORDER BY … LIMIT` used to persist a subset unless you have a consistent tie-breaker (such as a unique key).
