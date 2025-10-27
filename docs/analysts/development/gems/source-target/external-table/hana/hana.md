---
title: SAP HANA
id: hana
slug: /analysts/hana-gem
description: Read and write from SAP HANA
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="Prophecy Automate"
  sql_package_name=""
  sql_package_version=""
/>

The Hana Source and Target gems let you connect Prophecy pipelines to SAP HANA tables for reading and writing data. This page outlines how to configure Hana sources and targets using the appropriate connections, locations, and properties.

## Configuration tabs

When you create a new external Source or Target gem, the gem dialog contains the following tabs.

- **Type**: Select the Hana table option.
- **Source/Target location**: Choose the [connection](/administration/fabrics/prophecy-fabrics/connections/) and define the location where you will read/write tables in Hana.
- **Properties**: Infer or manually specify the schema, and optionally add properties that influence table behavior.
- **Preview**: Load a preview of the dataset reflecting your configurations.

## Source configuration

Use these settings to configure a Hana Source gem for reading data.

### Source location

| Parameter                   | Description                                                                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Hana tables, set to `hana`.                                                                                            |
| Select or create connection | Select or create a new [Hana connection](/administration/fabrics/prophecy-fabrics/connections/hana) in the Prophecy fabric you will use.                |
| Read Using                  | How to define the table location.<ul><li>**Table**: Provide the schema and table name.</li><li>**Query**: Select the table using a SQL query.</li></ul> |
| Schema (Table only)         | Schema in Hana where the table is located.                                                                                                              |
| Name (Table only)           | Name of the Hana table to read data from.                                                                                                               |
| Query (Query only)          | SQL query used to retrieve a table.                                                                                                                     |

### Source properties

Infer or manually configure the schema of your Source gem. Optionally, add a description for your table.

## Target configuration

Use these settings to configure a Hana Target gem for writing data.

### Target location

| Parameter                   | Description                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Format type                 | Table format for the source. For Hana tables, set to `Hana`.                                                                                                                                                  |
| Select or create connection | Select or create a new [Hana connection](/administration/fabrics/prophecy-fabrics/connections/hana) in the Prophecy fabric you will use.                                                                      |
| Schema                      | Schema in Hana where the target table resides or will be created. Select the **+** sign on the field to use a configuration variable or secret in your schema definition.                                     |
| Name                        | Name of the Hana table to write data to. Select the **+** sign on the field to use a configuration variable or secret in your table definition. If the table doesn’t exist, it will be created automatically. |

### Target properties

Review schema of your Target gem and optionally update the metadata of columns in the schema. You can also add a description for your table.

#### Generated columns

Generated columns are specific to SAP HANA and auto-generate values for new rows. You can define generated columns in the Properties tab via column-level metadata. Learn more in [Generated columns](/analysts/hana-generated-columns).

### Write options

Control how data is written into the target table during each run of the pipeline. Choose whether to overwrite, append, or merge rows.

| Mode                                           | Description                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------- |
| Wipe & Replace Table                           | Deletes the existing table and creates a new one with the incoming data.         |
| Write Fresh Table; Error if exists             | Creates a new table, and fails if a table with the same name already exists.     |
| Append Row                                     | Inserts all incoming rows to the existing table without modifying existing data. |
| Merge - Upsert Row                             | Update if keys match, insert if not.                                             |
| Merge - Update Row                             | Only update columns where key matches.                                           |
| Merge - Delete Row                             | Delete rows where key matches.                                                   |
| Merge - Delete row if exists; otherwise insert | Delete rows where key matches, otherwise insert a new row.                       |

#### Advanced options

Configure the following for **Wipe & Replace Table**, **Write Fresh Table; Error if exists**, and **Append Row** modes.

| Parameter       | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| Parallelism     | The number of insert queries to execute in parallel.                       |
| Rows Per Insert | The number of rows included in each insert query to the SAP HANA database. |

#### Merge parameters

Configure the following for any **Merge**.

| Parameter       | Required For                                                   | Description                                                                                                                                            |
| --------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Merge condition | All merge modes                                                | Specify one or more key columns that determine how incoming rows match existing rows in the target table. These columns act as the unique identifiers. |
| Merge columns   | Upsert row, Update row, Delete row if exists; otherwise insert | Select the specific columns to update or write when a key match is found. This controls which fields are modified during updates or inserts.           |

### Example: Merge - Upsert Row

This example demonstrates how the **Upsert row** merge mode works when updating an SAP HANA table.

#### Existing table in SAP HANA

Your SAP HANA table currently contains the following product inventory data:

<div class="table-example">

| product_id | category    | price  | stock_quantity | last_restocked |
| ---------- | ----------- | ------ | -------------- | -------------- |
| 2001       | Electronics | 99.99  | 100            | 2025-07-15     |
| 2002       | Apparel     | 29.99  | 50             | 2025-07-10     |
| 2003       | Electronics | 149.99 | 20             | 2025-07-20     |

</div>

#### Merge configuration

You configure the merge using the following settings:

- **Merge Mode:** Upsert Row (update if key matches, insert if not)
- **Unique Key:** `product_id`
- **Merge Columns:** `stock_quantity`, `last_restocked` (only these columns are updated/inserted)

#### Incoming data

New inventory updates are coming through your pipeline:

<div class="table-example">

| product_id | category    | stock_quantity | last_restocked |
| ---------- | ----------- | -------------- | -------------- |
| 2001       | Electronics | 150            | 2025-08-01     |
| 2003       | Gaming      | 0              | 2025-07-30     |
| 2005       | Apparel     | 85             | 2025-08-02     |

</div>

#### Result

The Target gem processes each incoming row by checking if the `product_id` already exists in the target table:
After the Target gem completes, your table looks like this:

<div class="table-example">

| product_id | category    | price  | stock_quantity | last_restocked |
| ---------- | ----------- | ------ | -------------- | -------------- |
| 2001       | Electronics | 99.99  | 150            | 2025-08-01     |
| 2002       | Apparel     | 29.99  | 50             | 2025-07-10     |
| 2003       | Electronics | 149.99 | 0              | 2025-07-30     |
| 2005       | null        | null   | 85             | 2025-08-02     |

</div>

##### Product 2001

- The key matches an existing row, so the system updates the record.
- `stock_quantity` changes from **100 → 150**, and `last_restocked` changes from **2025-07-15 → 2025-08-01**.
- `category` and `price` remain unchanged.

##### Product 2003

- The key matches an existing row, so the system updates the record.
- `stock_quantity` changes from **20 → 0**, and `last_restocked` changes from **2025-07-20 → 2025-07-30**.
- `category` and `price` remain unchanged.

##### Product 2005

- The key does not exist, so a new row is inserted.
- Only the merge columns receive values: `stock_quantity` is set to **85** and `last_restocked` is set to **2025-08-02**.
- `category` and `price` are set to **null** because they are not in the specified merge columns.
