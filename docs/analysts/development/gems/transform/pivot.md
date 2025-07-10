---
title: Pivot
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

| Port | Description                                            |
| ---- | ------------------------------------------------------ |
| in0  | Includes the table that will be pivoted.               |
| out  | Generates a new table with pivoted columns and values. |

## Parameters

Configure the Pivot gem using the following parameters.

### Column Settings

| Parameter                  | Description                                                                                                     |
| -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Pivot column               | Column whose unique values will become new columns in the output.                                               |
| Unique Pivot Column Values | Table to explicitly define the unique values from the Pivot column that you want to transform into new columns. |

### Row Settings

| Parameter                   | Description                                   |
| --------------------------- | --------------------------------------------- |
| Group data by these columns | Columns to group the data by before pivoting. |

### Values

| Parameter                     | Description                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Values for New Columns        | The column(s) whose values will populate the cells of the new pivot columns.                                                   |
| Separator                     | The character or string used to separate multiple values when using the CONCAT aggregation method.                             |
| Method for Aggregating Values | The aggregation function to apply to the grouped "Values for New Columns" (e.g., AVG, SUM, COUNT, MIN, MAX).                   |
| Column Alias                  | An optional alias for the new columns created by the pivot operation. The alias is appended to the unique pivot column values. |

## Example

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

The Pivot gem works by taking unique values from the Pivot column (`Date` in this case) and turning them into new columns. It then populates these new columns with aggregated values from the Values for New Columns (`kWh_Used`) based on the Group data by these columns (`City`).

If a specific city (e.g., Chicago) does not have any `kWh_Used` data for a particular date (e.g., `2025-07-01`), then when that date becomes a column, the corresponding cell for Chicago will be null. The null indicates the absence of data for that specific intersection of city and date in your original dataset.
