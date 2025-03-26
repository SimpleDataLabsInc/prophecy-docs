---
title: Unpivot
id: unpivot
slug: /analysts/unpivot
description: Convert your table from wide to long format
tags:
  - gems
  - analyst
  - transform
---

<span class="badge">SQL</span><br/><br/>

Use the Unpivot gem to transform your data from a wide format to a long format.

## Parameters

| Parameter                       | Description                                                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Column(s) to use as identifiers | The column(s) that will identify to which group or entity the observation corresponds to.                                    |
| Columns to unpivot              | The columns (wide format) that you would like to transform into a single column (long format).                               |
| Variable column name            | The name of the column that contains the names of the unpivoted columns. This helps describe the values in the value column. |
| Value column name               | The name of the column that will contain the values from the unpivoted columns.                                              |

## Example

Transforming your data into a long format can be beneficial when creating visualizations, comparing variables, handling dynamic data, and more.

Let's think about a time series example. If you have product sales data in a wide format, you may want to transform it into a long format before modeling the time series and analyzing the seasonal patterns in sales.

The image below shows sample input and output tables for this scenario.

This table describes how this transformation was achieved:

| Parameter                       | Input                                                                                             |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| Column(s) to use as identifiers | The _Product_ column is the identifier because it defines which product the sales correspond to.  |
| Columns to unpivot              | All of the quarterly sales columns will be unpivoted.                                             |
| Variable column name            | The variable column is named _Quarter_ because it identifies the sales period.                    |
| Value column name               | The value column is named _UnitsSold_ because it contains information about number of units sold. |
