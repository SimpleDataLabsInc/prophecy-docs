---
title: DynamicInput gem
sidebar_label: DynamicInput
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
  execution_engine="Prophecy Automate"
  sql_package_name="Prophecy"
  sql_package_version="4.1.3+"
/>

Use the DynamicInput gem to run SQL queries or read data files, dynamically automating data retrieval. This page describes how to either [modify SQL queries](#read-option-1-modify-sql-query) or [dynamically read data from multiple files](#read-option-2-dynamically-read-data-from-multiple-files).

## Read Option 1: Modify SQL Query

Run parameterized SQL queries that automatically update based on incoming data. Define a single SQL template with placeholders, and at runtime, DynamicInput replaces those placeholders with column values from your input dataset.

### Input and Output

Configure the following input and output ports.

| Port    | Description                                                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset that contains the placeholder replacement values to be used in the SQL query template. <br/>Each row in this dataset generates its own SQL query.         |
| **out** | Output dataset containing the combined results from all generated queries. <br/>The gem executes one query per input row, then unions the results into a single output. |

### Parameters

Configure the DynamicInput gem using the following parameters.

| Parameter                   | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Select Read Options         | The **Modify SQL Query** option denotes that the gem reads data using a dynamically modified SQL query.            |
| Table Connection Type       | Select the type of [data ingress/egress connection](/administration/fabrics/prophecy-fabrics/connections/) to use. |
| Select or create connection | Choose an existing connection or create a new one for the selected source.                                         |
| Table or Query              | Write a SQL query template that will be used to retrieve data. Can include placeholders for dynamic replacement.   |
| Pass fields to the Output   | Select specific columns that contain the data you will use to replace strings.                                     |
| Replace a Specific String   | Reference a static text value to replace in the query, and select the column with replacement values.              |

### Example

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

## Read Option 2: Dynamically read data from multiple files

Combine data from listed XLSX files, or extract only the sheet names from listed files and append them as values in a new column.

### Input and Output {#input-and-output-xlsx}

Configure the following input and output ports.

| Port    | Description                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **in0** | Input dataset that lists the file paths to the XLSX files to read. Each path in this dataset is processed according to the selected output mode. |
| **out** | Returns either the unioned data from all XLSX files or a list of sheet names, depending on the selected output mode.                             |

### Parameters {#parameters-xlsx}

Configure the DynamicInput gem using the following parameters.

| Parameter                   | Description                                                                                                                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Select Read Options         | Select **Dynamically read data from multiple files** to enable reading and combining XLSX files at runtime.                                                                                                                                                                                                                     |
| Select output mode          | Choose how to process the XLSX files.<ul><li>**Union sheet data by column name**: Read and combine data from all XLSX files in the provided file paths. Empty or non-XLSX files are skipped.</li><li>**Retrieve sheet names**: Extract only the sheet names from each file and append them as values in a new column.</li></ul> |
| File Connection Type        | Select the file storage [connection](/administration/fabrics/prophecy-fabrics/connections/) type to use.                                                                                                                                                                                                                        |
| Select or create connection | Choose an existing connection or create a new one for the selected connection type.                                                                                                                                                                                                                                             |
| File Path Column            | Specify the column in the input dataset that contains the file paths to read from.                                                                                                                                                                                                                                              |
| Password                    | (Optional) Provide a password to access password-protected XLSX files.                                                                                                                                                                                                                                                          |

The following additional parameters are applicable to the **Union sheet data by column name** option only.

| Parameter         | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Sheet Name Column | Specify the column in the input dataset that contains the sheet name to read from in each XLSX file.                              |
| Header Row        | Enable to use the header row in each sheet to define column names. Otherwise, the gem assigns generic column names automatically. |
