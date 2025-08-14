---
title: Pivot gem
id: pivot
slug: /analysts/pivot
description: Convert your table from long to wide format
tags:
  - gems
  - analyst
  - transform
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

The Pivot gem reshapes your data by transforming unique row values from a selected column into new columns, allowing you to summarize and analyze your data from a different perspective. The pivot operation transforms data from long to wide format.

## Input and Output

The Pivot gem uses the following input and output ports.

| Port    | Description                                                                                                                                                                                                                                                                              |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | The source table containing data in long format that needs to be transformed to wide format.                                                                                                                                                                                             |
| **out** | The output table in wide format containing: <br/>• All original grouping columns preserved as row identifiers <br/>• New columns created from unique values in the pivot column and defined aggregations <br/>The output will typically have fewer rows but more columns than the input. |

## Parameters

Configure the Pivot gem using the following parameters.

### Pivot Column Settings

Choose a pivot column that contains the unique values that will become new columns in the output table. Each distinct value from this column that you define will be transformed into a separate column header in the wide format result.

In the **Unique Pivot Column Values** table, you must explicitly define which unique values from the pivot column you want to transform into new columns. String values must be wrapped in quotes.

> Example: If your pivot column contains dates, you can specify `'2025-01-01'`, `'2025-02-01'`, and `'2025-03-01'` to create columns for those dates.

### Row Grouping Settings

The pivot operation will group your data by these columns before applying the aggregation. You can select one or more columns for grouping.

> Example: If you're analyzing sales data and want to see performance by region and product category, you would select both `Region` and `Product_Category` as grouping columns.

### Values

Choose a column that contains the data values that will populate the cells of the new pivot columns. The values from this column will be aggregated according to your chosen method(s) and placed at the intersection of each group and pivot column combination.

Once you choose a column, a table appears where you can define your aggregations. Under **Method for Aggregating Values**, choose methods such as `AVG`, `SUM`, `COUNT`, `MIN`, and `MAX`.

For each aggregation, you can define an optional **Column Alias** that gets appended to the new columns' names. This helps make your output columns more descriptive and meaningful.

> Example: If your pivot column values are dates and you're calculating averages, you might use `AVG_Sales` as the alias, resulting in column names like `2025-01-01_AVG_Sales` and `2025-02-01_AVG_Sales`.

:::info
When using the `CONCAT` aggregation method, the **Separator** parameter specifies the character or string used to separate the values that are being concatenated together. Common separators include commas, semicolons, and pipes.
:::

## Example: Energy consumption

Imagine you have a dataset of energy consumption with `Date`, `City`, and `kWh_Used` for different buildings, and you want to see the average `kWh_Used` per city for a specific date, with dates as columns. You will start with the following information:

<div class="table-example">

| Date       | Building_ID | Building_Type | City        | Energy_Source | kWh_Used | Cost  | Peak_Demand_kWh |
| ---------- | ----------- | ------------- | ----------- | ------------- | -------- | ----- | --------------- |
| 2025-07-01 | B001        | Office        | New York    | Solar         | 150      | 30.00 | 10              |
| 2025-07-01 | B002        | Residential   | Los Angeles | Grid          | 200      | 40.00 | 12              |
| 2025-07-01 | B003        | Retail        | New York    | Grid          | 180      | 36.00 | 11              |
| 2025-07-02 | B001        | Office        | New York    | Solar         | 160      | 32.00 | 10.5            |
| 2025-07-02 | B002        | Residential   | Los Angeles | Grid          | 210      | 42.00 | 12.5            |
| 2025-07-03 | B004        | Commercial    | Chicago     | Grid          | 250      | 50.00 | 15              |
| 2025-07-03 | B005        | Industrial    | Houston     | Solar         | 300      | 60.00 | 18              |
| 2025-07-04 | B001        | Office        | New York    | Solar         | 155      | 31.00 | 10.2            |
| 2025-07-04 | B003        | Retail        | New York    | Grid          | 185      | 37.00 | 11.5            |
| 2025-07-05 | B002        | Residential   | Los Angeles | Grid          | 205      | 41.00 | 12.3            |

</div>

In the Pivot gem configuration:

1.  Set the **Pivot column** to `Date`.
2.  Enter the following **Unique Pivot Column Values**: `'2025-07-01'`, `'2025-07-02'`, `'2025-07-03'`, `'2025-07-04'`, and `'2025-07-05'` (or the specific dates you are interested in).
3.  For **Group data by these columns**, select the `City` column.
4.  For **Values for New Columns**, select the `kWh_Used` column.
5.  Under **Method for Aggregating Values**, select `AVG`.
6.  For the `AVG` aggregation, add the Column Alias: `AVG_kWh`

### Result

The output table shows the average `kWh_Used` for each city on the specified dates, with the dates as new columns.

<div class="table-example">

| City        | 2025-07-01_AVG_kWh | 2025-07-02_AVG_kWh | 2025-07-03_AVG_kWh | 2025-07-04_AVG_kWh | 2025-07-05_AVG_kWh |
| ----------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| New York    | 165                | 160                | null               | 170                | null               |
| Los Angeles | 200                | 210                | null               | null               | 205                |
| Chicago     | null               | null               | 250                | null               | null               |
| Houston     | null               | null               | 300                | null               | null               |

</div>

Note that there are some null values in this output table. This is because for certain combinations of `City` and `Date`, there's no corresponding data in the original input table.

The Pivot gem works by taking unique values from the **Pivot Column Settings** (`Date` in this case) and turning them into new columns. It then populates these new columns with aggregated values from the **Values for New Columns** (`kWh_Used`) per group (`City`).

If a specific city does not have any `kWh_Used` data for a particular date, then when that date becomes a column, the corresponding cell will be null. In this example, you can see that Chicago has no data for `2025-07-01`, so the cell is null for that date in the output. In summary, the null indicates the absence of data for that specific intersection of city and date in your original dataset.
