---
title: Write Options
id: write-options
slug: /table-write-options
description: Determine how to store processed data and handle changes over time
tags: []
---

When writing data to a table, there are multiple ways to determine how the data will be written. When you configure a target table or target model, the **Write Options** tab lets you determine how you will store your processed data and handle changes to the data over time. The choice of write mode depends on your specific use case:

- How often does your data need to be updated?
- Are you processing large datasets that benefit from incremental updates?
- Do you need to maintain a history of changes?
- How do you handle duplicates and conflicts?

## Write modes

### Wipe and Replace Table (default)

Replaces all existing data with new data on each run. This is the simplest approach and ensures your target table always reflects the latest state of your source data.

- The incoming table must have the same schema as the existing table
- No additional parameters are needed

:::note
See [Partitioning](#partitioning) for information about adding partitions to your target table (BigQuery only).
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

</div>

---

### Append Row

Adds new rows to the existing table without modifying existing data.

- No deduplication is performed
- Best used when unique keys aren't required
- For key-based updates, use a merge strategy instead
- No additional parameters are needed

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

</div>

---

### Merge - Specify Columns

Only updates specified columns during the merge operation. All other columns in existing records remain unchanged.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Key                                         | Column(s) used to match existing records in the target dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Merge Columns                                      | Specifies which columns to update during the merge. If empty, the merge includes all columns.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Exclude Columns                                    | Defines columns that should be excluded from the merge operation.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update vehicle type only

Vehicle type information is updated while registration dates remain unchanged.

<div class="table-example">

**Incoming table**

| VEHICLE_ID | TYPE |
| ---------- | ---- |
| 101        | Tram |

**Existing table**

| VEHICLE_ID | TYPE | REGISTERED_AT |
| ---------- | ---- | ------------- |
| 101        | Bus  | 2023-12-01    |

**Updated table**

| VEHICLE_ID | TYPE | REGISTERED_AT |
| ---------- | ---- | ------------- |
| 101        | Tram | 2023-12-01    |

</div>

---

### Merge - Upsert Row

Replaces entire partitions in the target table. Only partitions containing updated data will be overwritten; other partitions remain untouched.

<div class="fixed-table">

| Parameter                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Partition by                | Defines the partitions of the target table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (Advanced) On Schema Change | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update trips for a specific day

Only trips for the given date partition are replaced, leaving other days unchanged.

<div class="table-example">

**Incoming table** (partition = 2024-01-15)

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

</div>

---

### Merge - SCD2

Tracks historical changes by adding new rows instead of updating existing ones. This approach maintains a complete audit trail of all changes over time.

- Each record includes start and end timestamps indicating validity periods
- Historical records are never modified
- Current records have null end timestamps

<div class="fixed-table">

| Parameter                                                         | Description                                                                          |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Unique Key                                                        | Column(s) used to match existing records in the target dataset.                      |
| Invalidate deleted rows                                           | When enabled, records that match deleted rows will be marked as no longer valid.     |
| Determine new records by checking timestamp column                | Recognizes new records by the time from the **Updated at** column that you define.   |
| Determine new records by looking for differences in column values | Recognizes new records based on a change of values in one or more specified columns. |

</div>

#### Example: Route assignment history

Each time a vehicle changes routes, a new row is added to preserve history.

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

</div>

---

### Merge - Update Row

Update records that match conditions defined in the predicate. This is useful for targeted updates based on complex business logic.

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Update trips in the last 30 days

Only trips within the last 30 days are updated, leaving older ones unchanged.

<div class="table-example">

**Incoming table**

| TRIP_ID | STATUS |
| ------- | ------ |
| 201     | Closed |

**Existing table**

| TRIP_ID | VEHICLE_ID | DATE       | STATUS |
| ------- | ---------- | ---------- | ------ |
| 201     | 101        | 2024-01-05 | Open   |
| 202     | 102        | 2023-12-20 | Open   |

**Updated table**

| TRIP_ID | VEHICLE_ID | DATE       | STATUS |
| ------- | ---------- | ---------- | ------ |
| 201     | 101        | 2024-01-05 | Closed |
| 202     | 102        | 2023-12-20 | Open   |

</div>

---

### Merge - Delete Row If Exists; Otherwise Insert

<div class="fixed-table">

| Parameter                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unique Key                                         | Column(s) used to match existing records in the target dataset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Use Predicate                                      | Lets you add conditions that specify when to apply the merge.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Use a condition to filter data or incremental runs | Enables applying conditions for filtering the incoming data into the table.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (Advanced) On Schema Change                        | Specifies how schema changes should be handled during the merge process.<ul><li><strong>ignore</strong>: Newly added columns will not be written to the model. This is the default option.</li><li><strong>fail</strong>: Triggers an error message when the source and target schemas diverge.</li><li><strong>append_new_columns</strong>: Append new columns to the existing table.</li><li><strong>sync_all_columns</strong>: Adds any new columns to the existing table, and removes any columns that are now missing. Includes data type changes. This option uses the output of the previous gem.</li></ul> |

</div>

#### Example: Maintain new vehicle entries

You want to ensure that vehicles already present in the fleet are removed if they appear in the incoming data, while new vehicles are inserted. This way, the target table only contains information on vehicles that have never been updated.

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

| VEHICLE_ID | TYPE | REGISTERED_AT |
| ---------- | ---- | ------------- |
| 202        | Tram | 2023-12-02    |
| 203        | Bus  | 2024-01-16    |

</div>

---

### Partitioning

:::info
Partitioned tables apply to **BigQuery** tables only.

Learn about how dbt handles partitioning for BigQuery tables in [Partition clause](https://docs.getdbt.com/reference/resource-configs/bigquery-configs#partition-clause).
:::

A partitioned table is a database table that has been divided into smaller, more manageable pieces called partitions. Use [partitioned tables](https://cloud.google.com/bigquery/docs/partitioned-tables) to improve query performance and cost. In Prophecy, you can partition your target table using the **Partition by** option.

This option is available for:

- [Wipe and Replace Tables](#wipe-and-replace-table-default) mode
- [Merge - Upsert](#merge---upsert-row) mode.

Reference the following table to learn how to set up partitions.

| Parameter                | Description                                                                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Column Name              | The name of the column used for partitioning the target table.                                                                                                                       |
| Data Type                | The data type of the partition column. <br/>Supported types: `timestamp`, `date`, `datetime`, and `int64`.                                                                           |
| Partition By granularity | Applicable only to `timestamp`, `date`, or `datetime` data type. <br/>Defines the time-based partition granularity: `hour`, `day`, `month`, or `year`.                               |
| Partition Range          | Applicable only to `int64` data type. <br/>Specify a numeric range for partitioning using a **start**, **end**, and **interval** value (e.g., start=`0`, end=`1000`, interval=`10`). |

## Support matrix

| Write option                                   | Databricks table | Databricks model | BigQuery table | BigQuery model | Snowflake model |
| ---------------------------------------------- | ---------------- | ---------------- | -------------- | -------------- | --------------- |
| Wipe and Replace Table                         | ✔                | ✔                | ✔              | ✔              | ✔               |
| Append Row                                     | ✔                | ✔                | ✔              |                | ✔               |
| Merge - Specify Columns                        | ✔                | ✔                | ✔              | ✔              | ✔               |
| Merge - Upsert Row                             | ✔                | ✔                | ✔              | ✔              |                 |
| Merge - SCD2                                   | ✔                | ✔                | ✔              | ✔              | ✔               |
| Merge - Update Row                             | ✔                | ✔                |                |                |                 |
| Merge - Delete Row If Exists, Otherwise Insert |                  |                  |                |                | ✔               |
| Partitioning                                   |                  |                  | ✔              | ✔              |                 |

## Troubleshooting

<details>
<summary>Schema mismatch errors</summary>

**Problem**: Incoming and existing schemas don't align.

**Solution**: Use the "On Schema Change" setting or ensure schema compatibility.

</details>

<details>
<summary>Duplicate data</summary>

**Problem**: Unexpected duplicate records appear in the written table.

**Solution**: Consider using merge modes instead of append.

</details>
