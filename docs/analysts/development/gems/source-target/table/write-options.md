---
title: Write Options
id: write-options
slug: /table-write-options
description: Determine how to store processed data and handle changes over time
tags: []
---

When writing data to a table, there are multiple ways to determine how the data will be written. When you configure a target table or target model, the **Write Options** tab lets you determine how you will store your processed data and handle changes to the data over time. The choice of write mode depends on your specific use case.

## Write modes

### Wipe and Replace Table (default)

Replaces all existing data with new data on each run. This is the simplest approach and ensures your target table always reflects the latest state of your source data.

:::info
The incoming table must have the same schema as the existing table.
:::

#### Example: Replace vehicle registry

A full vehicle registry is refreshed each day, replacing all prior records with the latest list.

<div class="table-example">

**Incoming table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 201        | Bus   | 2024-01-15    |
| 202        | Train | 2024-01-16    |

**Existing table**

| VEHICLE_ID | TYPE | REGISTERED_AT |
| ---------- | ---- | ------------- |
| 101        | Bus  | 2023-12-01    |
| 102        | Tram | 2023-12-02    |

**Updated table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 201        | Bus   | 2024-01-15    |
| 202        | Train | 2024-01-16    |

Notice that all previous records (vehicles `101` and `102`) have been completely removed and replaced with the new incoming data.

</div>

#### Partition the target table (BigQuery only)

The following partitioning parameters are available for the **Wipe and Replace Table** write mode on BigQuery.

| Parameter                | Description                                                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column Name              | The name of the column used for partitioning the target table.                                                                                                                                                                                                                                |
| Data Type                | The data type of the partition column. <br/>Supported types: `timestamp`, `date`, `datetime`, and `int64`.                                                                                                                                                                                    |
| Partition By granularity | Applicable only to `timestamp`, `date`, or `datetime` data type. <br/>Defines the time-based partition granularity: `hour`, `day`, `month`, or `year`.                                                                                                                                        |
| Partition Range          | Applicable only to `int64` data type. <br/>Specify a numeric range for partitioning using a **start**, **end**, and **interval** value (e.g., start=`0`, end=`1000`, interval=`10`).<br/>You must define an interval value so that Prophecy knows at what intervals to create the partitions. |

:::info
Only BigQuery tables can be partitioned at the table level. To learn more about partitioning, jump to [Partitioning](#partitioning).
:::

---

### Append Row

Adds new rows to the existing table without modifying existing data. No deduplication is performed, so you may end up with duplicate records.

:::info
This strategy is best used when unique keys aren't required. For key-based updates, use one of the Merge options instead.
:::

#### Example: Add daily trips

Daily trips are appended so that historical trips remain intact.

<div class="table-example">

**Incoming table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 301     | 201        | 2024-01-15 |
| 302     | 202        | 2024-01-15 |

**Existing table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 101     | 101        | 2024-01-14 |
| 102     | 102        | 2024-01-14 |

**Updated table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 101     | 101        | 2024-01-14 |
| 102     | 102        | 2024-01-14 |
| 301     | 201        | 2024-01-15 |
| 302     | 202        | 2024-01-15 |

Notice that the new trips (`301` and `302`) are added to the existing table without modifying the original records (`101` and `102`).

</div>

---

### Merge - Upsert Row

If a row with the same key exists, it is updated. Otherwise, a new row is inserted. You can also limit updates to specific columns, so only selected values are changed in matching rows.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Key                                         | Column(s) used to match existing records in the target dataset. In many cases, the unique key will be equivalent to your table's primary key, if applicable.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Merge Columns                                      | Specifies which columns to update during the merge. If empty, the merge includes all columns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Exclude Columns                                    | Defines columns that should be excluded from the merge operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update vehicle type only

When an incoming `VEHICLE_ID` matches an existing one, vehicle type information is updated while registration dates remain unchanged. The merge column is explicitly set to `TYPE`.

<div class="table-example">

**Incoming table**

| VEHICLE_ID | TYPE |
| ---------- | ---- |
| 101        | Tram |
| 102        | Bus  |
| 104        | Bus  |

**Existing table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 101        | Bus   | 2023-12-01    |
| 102        | Train | 2023-12-02    |
| 103        | Bus   | 2023-12-03    |

**Updated table**

| VEHICLE_ID | TYPE | REGISTERED_AT |
| ---------- | ---- | ------------- |
| 101        | Tram | 2023-12-01    |
| 102        | Bus  | 2023-12-02    |
| 103        | Bus  | 2023-12-03    |
| 104        | Bus  | null          |

Notice that only the `TYPE` column was updated for vehicles `101` and `102` while the `REGISTERED_AT` values remained unchanged. Additionally, note that vehicle `103` remained unchanged since it didn't match a vehicle in the incoming data. Finally, vehicle `104` was inserted, and no data was added to the `REGISTERED_AT` column.

</div>

---

### Merge - Wipe and Replace Partitions

Replaces entire partitions in the target table. Only partitions containing updated data will be overwritten; other partitions will not be modified.

<div class="fixed-table">

| Parameter                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Partition by                | Defines the partitions of the target table.<ul><li><strong>Databricks</strong>: Each unique value of the partition column corresponds to a partition. You cannot change the granularity of the partitions.</li><li><strong>BigQuery</strong>: You must [manually define the granularity](#define-partition-granularity-bigquery-only) of your partitions. BigQuery does not automatically infer how to write the partitions.</li></ul>                                                                                                                                                                             |
| (Advanced) On Schema Change | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update trips for a specific day

In this case, the partition column is the `DATE` column, where each partition corresponds to a single day. Since the incoming data includes records from `2024-01-15`, all of the records from that date are dropped from the existing table and replaced with the new data.

<div class="table-example">

**Incoming table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 401     | 201        | 2024-01-15 |
| 402     | 202        | 2024-01-15 |

**Existing table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 101     | 101        | 2024-01-14 |
| 301     | 201        | 2024-01-15 |
| 302     | 202        | 2024-01-15 |

**Updated table**

| TRIP_ID | VEHICLE_ID | DATE       |
| ------- | ---------- | ---------- |
| 101     | 101        | 2024-01-14 |
| 401     | 201        | 2024-01-15 |
| 402     | 202        | 2024-01-15 |

Notice that only the `2024-01-15` partition was replaced with new data, while the `2024-01-14` partition remained untouched.

</div>

#### Define partition granularity (BigQuery only)

The following partitioning parameters allow you to define the partition granularity for this operation.

| Parameter                | Description                                                                                                                                                                                                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Column Name              | The name of the column used for partitioning the target table.                                                                                                                                                                                                                                |
| Data Type                | The data type of the partition column. <br/>Supported types: `timestamp`, `date`, `datetime`, and `int64`.                                                                                                                                                                                    |
| Partition By granularity | Applicable only to `timestamp`, `date`, or `datetime` data type. <br/>Defines the time-based partition granularity: `hour`, `day`, `month`, or `year`.                                                                                                                                        |
| Partition Range          | Applicable only to `int64` data type. <br/>Specify a numeric range for partitioning using a **start**, **end**, and **interval** value (e.g., start=`0`, end=`1000`, interval=`10`).<br/>You must define an interval value so that Prophecy knows at what intervals to create the partitions. |

---

### Merge - SCD2

Tracks historical changes by adding new rows instead of updating existing ones. This lets you preserve a complete history, since every change generates a new entry rather than erasing old information. To be specific:

- New rows are added for incoming records with unique keys that don't exist in the target table.
- For records matching existing unique keys, a new row is added only when the incoming data differs from the existing record.
- New rows are assigned a start date and a `null` end date (indicating it's currently valid).
- If the unique key of the new record matched an existing record, the existing row is assigned an end date to mark when it stopped being valid.
- This creates a complete timeline showing how data evolved over time.

<div class="fixed-table">

| Parameter                                                         | Description                                                                                                                                                  |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Key                                                        | Column(s) used to match existing records in the target dataset. In many cases, the unique key will be equivalent to your table's primary key, if applicable. |
| Invalidate deleted rows                                           | When enabled, records that match deleted rows will be marked as no longer valid.                                                                             |
| Determine new records by checking timestamp column                | Recognizes new records by the time from the **Updated at** column that you define.                                                                           |
| Determine new records by looking for differences in column values | Recognizes new records based on a change of values in one or more specified columns.                                                                         |

</div>

#### Example: Route assignment history

Each time a vehicle changes routes, a new row is added to preserve history. In this case, **Determine new records by checking timestamp column** is enabled, and `ASSIGNED_AT` is the timestamp column.

<div class="table-example">

**Incoming table**

| VEHICLE_ID | ROUTE   | ASSIGNED_AT |
| ---------- | ------- | ----------- |
| 101        | Route B | 2024-01-15  |

**Existing table**

| VEHICLE_ID | ROUTE   | ASSIGNED_AT | valid_from | valid_to |
| ---------- | ------- | ----------- | ---------- | -------- |
| 101        | Route A | 2024-01-01  | 2024-01-01 | NULL     |

**Updated table**

| VEHICLE_ID | ROUTE   | ASSIGNED_AT | valid_from | valid_to   |
| ---------- | ------- | ----------- | ---------- | ---------- |
| 101        | Route A | 2024-01-01  | 2024-01-01 | 2024-01-15 |
| 101        | Route B | 2024-01-15  | 2024-01-15 | NULL       |

Notice that the original Route A record now has an end date (`2024-01-15` taken from the `ASSIGNED_AT` column) and a new Route B record was added with a null end date, preserving the complete history of route assignments.

</div>

---

### Merge - Update Row

Update records that match conditions defined in the **Use Predicate** parameter. Instead of updating individual rows, it replaces the entire partition of the table that matches the given predicate. The predicate defines which rows in the target table should be fully replaced with the incoming data.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update trips from January 5th onwards

When any record from January 5th onwards needs updating, ALL records from that date forward are dropped and replaced with the incoming data. Records from before January 5th remain unchanged.

**Predicate**: `DATE >= '2024-01-05'`

<div class="table-example">

**Incoming table**

| TRIP_ID | STATUS | DATE       |
| ------- | ------ | ---------- |
| 201     | Closed | 2024-01-05 |
| 203     | Closed | 2024-01-10 |

**Existing table**

| TRIP_ID | VEHICLE_ID | DATE       | STATUS |
| ------- | ---------- | ---------- | ------ |
| 201     | 101        | 2024-01-05 | Open   |
| 202     | 102        | 2023-12-20 | Open   |
| 203     | 103        | 2024-01-10 | Open   |
| 204     | 104        | 2024-01-15 | Open   |

**Updated table**

| TRIP_ID | VEHICLE_ID | DATE       | STATUS |
| ------- | ---------- | ---------- | ------ |
| 201     | 101        | 2024-01-05 | Closed |
| 203     | 103        | 2024-01-10 | Closed |
| 202     | 102        | 2023-12-20 | Open   |

Notice that ALL trips from January 5th onwards (`201`, `203`, and `204`) were dropped and replaced with only the incoming records (`201` and `203`), while trip `202` (from December 20th) remained unchanged.

</div>

---

### Merge - Delete and Insert

For rows in the target table that have keys that match rows in the incoming dataset, deletes matching rows from the existing table and replaces them. For incoming rows with new keys, inserts these normally. This ensures that updated records are fully replaced instead of partially updated.

:::note
This strategy helps when your unique key is not truly unique (multiple rows per key need to be fully refreshed).
:::

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Key                                         | Column(s) used to match existing records in the target dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Refresh vehicle registry entries

If a vehicle already exists in the fleet, its old record is deleted and replaced with the incoming row. New vehicles are simply inserted.

<div class="table-example">

**Incoming table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 201        | Train | 2024-01-15    |
| 203        | Bus   | 2024-01-16    |

**Existing table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 201        | Train | 2023-12-01    |
| 202        | Tram  | 2023-12-02    |

**Updated table**

| VEHICLE_ID | TYPE  | REGISTERED_AT |
| ---------- | ----- | ------------- |
| 201        | Train | 2024-01-15    |
| 202        | Tram  | 2023-12-02    |
| 203        | Bus   | 2024-01-16    |

Notice that vehicle `201`'s old record was completely replaced with the new data, vehicle `202` remained unchanged, and vehicle `203` was added as a new entry.

</div>

---

## How write modes work

Prophecy simplifies data transformation by providing intuitive write mode options that abstract away the complexity of underlying SQL operations. Behind the scenes, Prophecy generates dbt models that implement these write strategies using SQL warehouse-specific commands.

| Write mode              | Concept in dbt                                                                                                                                                                                                        |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wipe and Replace Tables | Maps to dbt's `materialized: 'table'` strategy, which creates a new table on each run.                                                                                                                                |
| Append Rows             | Maps to dbt's `materialized: 'table'` with append-only logic, adding new rows without modifying existing data.                                                                                                        |
| Merge options           | Maps to dbt's `materialized: 'incremental'` [strategy](https://docs.getdbt.com/docs/build/incremental-models-overview), which updates tables by only transforming and loading new or changed data since the last run. |

When you select a write mode in a Table gem, Prophecy automatically generates the appropriate dbt configuration and SQL logic. This means you can focus on your data transformation logic rather than learning dbt's materialization strategies or writing complex SQL merge statements.

:::note

To understand exactly what happens when Prophecy runs these write operations, switch to the **Code** view of your project and inspect the generated dbt model files. These files contain the SQL statements and dbt configuration (like `materialized: 'incremental'`) that dbt uses to execute the write operation. To learn more about the specific configuration options available for each SQL warehouse, visit the dbt documentation links below.

- [BigQuery configurations](https://docs.getdbt.com/reference/resource-configs/bigquery-configs)
- [Databricks configurations](https://docs.getdbt.com/reference/resource-configs/databricks-configs)
- [Snowflake configurations](https://docs.getdbt.com/reference/resource-configs/snowflake-configs)

:::

## Partitioning

Depending on the SQL warehouse you use to write tables, partitioning can have different behavior. Let's examine the differences between partitioning in Google BigQuery and Databricks.

1. **BigQuery**: Partitioning is a table property.

   In BigQuery, partitioning is defined at the table schema level (time, integer range, or column value). Because it is a part of the table architecture, the physical storage in BigQuery is optimized by partitioning automatically.

   Once a table is partitioned, every write to that table, full or incremental, respects the partitioning. That means even when you drop and create an entirely new table, BigQuery creates the table with partitions in an optimized way.

2. **Databricks**: Partitioning is a write strategy.

   Databricks organizes data in folders by column values. Partitioning only makes sense when you’re using the **Wipe and Replace Partitions** write mode because it allows you to overwrite specific directories (partitions) without rewriting the whole table.

   For the **Wipe and Replace Table** option, the table is dropped and completely recreated. Partitioning doesn’t add any runtime benefit here, so this is not an option for Databricks.

## Write modes matrix

The following table describes the write modes that Prophecy supports by SQL warehouse and gem type.

| Write mode                          | Databricks table | Databricks model | BigQuery table | BigQuery model | Snowflake model |
| ----------------------------------- | ---------------- | ---------------- | -------------- | -------------- | --------------- |
| Wipe and Replace Table              | ✔                | ✔                | ✔              | ✔              | ✔               |
| Append Row                          | ✔                | ✔                | ✔              |                | ✔               |
| Merge - Upsert Row                  | ✔                | ✔                | ✔              | ✔              | ✔               |
| Merge - Wipe and Replace Partitions | ✔                | ✔                | ✔              | ✔              |                 |
| Merge - SCD2                        | ✔                | ✔                | ✔              | ✔              | ✔               |
| Merge - Update Row                  | ✔                | ✔                |                |                |                 |
| Merge - Delete and Insert           |                  |                  |                |                | ✔               |

## Troubleshooting

<details>
<summary>Schema mismatch errors</summary>

**Problem**: Incoming and existing schemas don't align.

**Solution**: Use the "On Schema Change" setting to set behavior or ensure schema compatibility.

</details>

<details>
<summary>Duplicate data</summary>

**Problem**: Unexpected duplicate records appear in the written table.

**Solution**: Consider using merge modes instead of append.

</details>
