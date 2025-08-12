---
title: DynamicInput
id: dynamic-input
slug: /analysts/dynamic-input
description: Run SQL queries that update dynamically at runtime
tags:
  - gems
  - analyst
  - custom
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="Prophecy"
  sql_package_version="4.1.3+"
/>

Use the DynamicInput gem to run SQL queries that update automatically based on your incoming data. Instead of writing separate queries for each case, you define one SQL template with placeholders.

At runtime, the gem replaces those placeholders with values from your input columns, row by row, and executes the resulting queries against your database. This helps you build parameter-driven workflows for databases such as Oracle, MSSQL, and Azure Synapse.

## Input and Output

The DynamicInput gem uses the following input and output ports.

| Port    | Description                                                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset that contains the placeholder replacement values to be used in the SQL query template. <br/>Each row in this dataset generates its own SQL query.         |
| **out** | Output dataset containing the combined results from all generated queries. <br/>The gem executes one query per input row, then unions the results into a single output. |

## Parameters

Configure the DynamicInput gem using the following parameters.

| Parameter                   | Description                                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Select Read Options         | The `Modify SQL Query` option denotes that the gem reads data using a dynamically modified SQL query.            |
| Table Connection Type       | Select type of data source connection.                                                                           |
| Select or create connection | Choose an existing connection or create a new one for the selected source.                                       |
| Table or Query              | Write a SQL query template that will be used to retrieve data. Can include placeholders for dynamic replacement. |
| Pass fields to the Output   | Select specific columns that contain the data you will use to replace strings.                                   |
| Replace a Specific String   | Reference a static text value to replace in the query, and select the column with replacement values.            |

## Example

This example demonstrates how to filter rows from an Oracle table by replacing placeholder text with values from your dataset.

1. Under **Select Read Options**, select **Modify SQL Query**.
1. Under **Table Connection Type**, select **Oracle**.
1. Select an existing connection or [create a new one](/administration/fabrics/prophecy-fabrics/connections/oracle).
1. In **Table or Query**, enter:

   ```
   SELECT *
   FROM SALES.ORDERS
   WHERE status <> 'replace'
   AND region <> 'AAA'
   ```

1. In the **Replace a Specific String** table, set:

   - **Text to Replace**: `replace`

   - **Replacement Field**: `status_column`

When you run the gem, it will take each row from your input dataset, replace the placeholder text (`replace`) in the SQL template with the corresponding value from `status_column`, and execute that query. Prophecy will then union all of the query results into a single output dataset, so you can work with them as one combined table.
