---
title: Delta
id: delta
description: Paramters and properties to read from and write to Delta files
tags:
  - gems
  - file
  - delta
---

A Delta (Delta Lake) file type:

- Is an optimized storage layer that allows you to store data and tables in the Databricks lakehouse.
- Extends Parquet data files with a file-based transaction log for ACID transactions and scalable metadata handling.
- Has a tight integration with structured streaming, which allows you to use a single copy of data for both batch and streaming operations and provides incremental processing at scale.

## Parameters

| Parameter | Tab        | Description                                                                                                                                                                                                    |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Location  | Location   | File path to read from or write to the Delta file.                                                                                                                                                             |
| Schema    | Properties | Schema to apply on the loaded data. <br/>In the Source gem, you can define or edit the schema as a JSON, or infer it with the `Infer Schema` button.<br/>In the Target gem, you can view the schema as a JSON. |

## Source

The Source gem reads data from Delta files and allows you to optionally specify the following additional properties.

### Source properties

| Property name  | Description                                                                                                                                                                                                                                            | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Description    | Description of your dataset.                                                                                                                                                                                                                           | None    |
| Read timestamp | Time travel to a specific timestamp.<br/>This value is between the first commit timestamp and the latest commit timestamp in the table.                                                                                                                | None    |
| Read version   | Time travel to a specific version of the table.<br/>This value is an interger between the minimum and maximum version of the table. <br/>By default, the Soruce gem fetches the most recent version of each row if you don't use a time travel option. | None    |

:::note
You can only select `Read Timestamp` or `Read Version`, not both.
:::

### Example {#source-example}

![Delta source example](./img/delta/delta_source_eg.gif)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Target

The Target gem writes data to Delta files and allows you to optionally specify the following additional properties.

### Target properties

| Property name                              | Description                                                                                                                                              | Default |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Description                                | Description of your dataset.                                                                                                                             | None    |
| Write Mode                                 | How to handle existing data. For a list of the possible values, see [Supported write modes](#supported-write-modes).                                     | `error` |
| Overwrite table schema                     | Whether to overwrite the schema of the Delta table with the schema of the incoming `DataFrame`.                                                          | false   |
| Merge `DataFrame` schema into table schema | Whether to automatically add any columns present in the `DataFrame` but not in the target table to the end of the schema as part of a write transaction. | false   |
| Partition Columns                          | List of columns to partition the Delta table by.                                                                                                         | None    |
| Overwrite partition predicate              | Selectively overwrite the data that satisfies the given where clause expression.                                                                         | None    |
| Optimize write                             | Whether to optimize the Spark partition sizes based on the actual data.                                                                                  | false   |

### Supported write modes

| Write mode | Description                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| error      | If the data already exists, throw an exception.                                                                                                      |
| overwrite  | If the data already exists, overwrite the data with the contents of the `DataFrame`.                                                                 |
| append     | If the data already exists, append the contents of the `DataFrame`.                                                                                  |
| ignore     | If the data already exists, do nothing with the contents of the `DataFrame`. <br/>This is similar to the `CREATE TABLE IF NOT EXISTS` clause in SQL. |
| merge      | Use the Delta `merge` command to insert, delete and update data. For more information, see [Delta MERGE](#delta-merge).                              |
| scd2 merge | Store and manage the current and historical data over time. For more information, see [Delta MERGE](#delta-merge).                                   |

### Target Example

![Delta Target Example](./img/delta/delta_target_eg.gif)

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

## Delta MERGE

You can upsert data from a source `DataFrame` into a target Delta table by using the [MERGE](https://docs.delta.io/latest/delta-update.html#upsert-into-a-table-using-merge) operation. Delta MERGE supports `Insert`, `Update`, and `Delete` operations and modifies records of the most common slowly changing dimension (SCD) cases in one of the following ways:

- [SCD1](#scd1): Delta tables do not retain history.
- [SCD2](#scd2): Delta tables retain history at the row level.
- [SCD3](#scd3): Delta tables retain history at the column level.

### SCD1

The following lists the properties in an SCD1 MERGE condition where Delta tables do not retain its history.

#### Properties {#upsert-properties}

| Property name                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                            | Default  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Source Alias                    | Alias to use for the source `DataFrame`.                                                                                                                                                                                                                                                                                                                                                                                               | `source` |
| Target Alias                    | Alias to use for existing target Delta table.                                                                                                                                                                                                                                                                                                                                                                                          | `taret`  |
| Merge condition                 | Condition to merge data from source `DataFrame` to target table. <br/>Delta can perform an update, delete, or insert action.                                                                                                                                                                                                                                                                                                           | None     |
| When Matched Update Action      | Update the row from your Source gem that exists in your Target gem based on your `When Matched Update Condition` property.                                                                                                                                                                                                                                                                                                             | `update` |
| When Matched Update Condition   | Additional condition for updating a row. If you specify a condition, it must evaluate to `true` for the Target gem to update the row.                                                                                                                                                                                                                                                                                                  | None     |
| When Matched Update Expressions | Expressions for setting the values of columns that the Target gem needs to update.                                                                                                                                                                                                                                                                                                                                                     | None     |
| When Matched Delete Action      | Delete rows if your `When Matched Delete Condition` property and the optional additional condition evaluates to `true`. <br/>Delete removes the data from the latest version of the Delta table but does not remove it from the physical storage until you explicitily vacuum the old versions. To learn more, see [Remove files no longer referenced by a Delta table](https://docs.delta.io/latest/delta-utility.html#-delta-vacuum) | `ignore` |
| When Matched Delete Condition   | Additional condition for deleting a row. If you specify a condition, it must evaluate to `true` for the Target gem to delete the row.                                                                                                                                                                                                                                                                                                  | False    |
| When Not Matched Action         | Action to perform if the row from your Source gem is not present in your Target gem based on your `When Not Matched Condition` property.                                                                                                                                                                                                                                                                                               | `insert` |
| When Not Matched Condition      | Condition for inserting a row. If you specify a condition, it must evaluate to `true` for the Target gem to insert a new row.                                                                                                                                                                                                                                                                                                          | None     |
| When Not Matched Expressions    | Expressions for setting the values of columns that the Target gem needs to update.                                                                                                                                                                                                                                                                                                                                                     | None     |

:::note

1. You must set at least one action out of update, delete or insert.
1. A merge operation fails if multiple rows of the source `DataFrame` matches and the merge attempts to update the same rows of the target Delta table. You can place deduplicate gems before your Target gem if you expect duplicate rows in your Source gem.
   :::

:::tip
When possible, provide predicates on the partition columns for a partitioned Delta table because predicates can significantly speed up the operations.
:::

#### Example {#upsert-example}

Assume you have the following customers table:

![Initial customer table](./img/delta/delta_customers_initial_eg1.png)

And, you want to make the following updates to the table:

![Customer table updates](./img/delta/delta_customers_updates_eg1.png)

The following shows the output and configurations for an SCD1 merge:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173252757-0a1165f0-68e2-41ca-b6eb-58da51cb76d1.mp4" title="SCD3" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

### SCD2

The following lists the properties in an SCD2 MERGE condition where Delta tables retain history at the row level.

#### Parameters {#scd2-properties}

| Property name                                 | Description                                                                        | Default |
| --------------------------------------------- | ---------------------------------------------------------------------------------- | ------- |
| Key Columns                                   | List of key columns to remain constant.                                            | None    |
| Historic Columns                              | List of columns to change over time and maintain its history.                      | None    |
| From time column                              | Time from which a particular row is valid.                                         | None    |
| To time column                                | Time till which a particular row is not valid anymore.                             | None    |
| Name of the column used as min/old-value flag | Column to store the flag as `true` for the first entry of a particular key.        | None    |
| Name of the column used as max/latest flag    | Column to store the flag as `true` for the last entry of a particular key.         | None    |
| Flag values                                   | Format of the min and max flag. <br/> Possible values are: `true/false`, or `0/1`. | None    |

#### Example {#scd2-example}

Continuing from [the SCD1 example](#upsert-example), you can use the Delta log to capture the historical `customer_zip_code` at the row-level.
The following shows the output and configurations for an SCD2 merge:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173252742-00930084-b3b3-4b8a-b5bb-59f39b74792b.mp4" title="SCD3" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

### SCD3

Continuing from [the SCD2 example](#scd2-example), you use the Delta log to capture the historical `customer_zip_code` at the column-level.
The following shows the output and configurations for an SCD3 merge:

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://user-images.githubusercontent.com/103921419/173252728-8924f0fb-6e81-44b7-9c39-17ba1d8f4d4c.mp4" title="SCD3" allow="autoplay;fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>

<br/>

:::tip
To see the generated source code, toggle to the **< > Code** view at the top of the page.
:::

:::info
To learn more about how Prophecy uses the Delta file type, see [Prophecy with Delta — making data lakehouses easier](https://www.prophecy.io/blog/prophecy-with-delta-making-data-lakehouse-easier).
:::
