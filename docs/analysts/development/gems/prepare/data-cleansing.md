---
title: DataCleansing
id: data-cleansing
slug: /analysts/data-cleansing
description: Standardize data formats
tags:
  - gems
  - analyst
  - prepare
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlBasics"
  sql_package_version="0.0.4+"
/>

Use the DataCleansing gem to standardize data formats and address missing or null values in the data.

## Parameters

| Parameter                        | Description                                                                                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Remove nulls from entire dataset | Removes any rows that contain null values. <br/>This operates on all columns—not just those you selected to clean.               |
| Select columns to clean          | Specifies the columns to apply data cleansing transformations to.                                                                |
| Replace null values in column    | Replaces null values in selected columns with a specified default. <br/> Example: `0` for numeric columns, empty string for text |
| Remove unwanted characters       | Removes specified characters from all values in the selected columns. <br/>Example: remove whitespaces or punctuation            |
| Modify case                      | Converts text in selected columns to a specified case format. <br/> Example: lowercase, UPPERCASE, Title Case                    |

## Example

Assume you have a dataset that includes all entries from a feedback survey.

<div class="table-example">

| Name  | Date       | Rating | Feedback                   |
| ----- | ---------- | ------ | -------------------------- |
| Ada   | 2025-04-18 | 5      | I really enjoy the product |
| scott | 2025-04-18 | 5      | NULL                       |
| emma  | 2025-04-17 | 2      | The product is confusing   |
| NULL  | 2025-04-17 | 3      | NULL                       |

</div>

The following is one way to configure a DataCleansing gem for this table:

1. Select columns to clean: `Name`
1. Replace null values in column: `Not provided`
1. Modify case: `Title Case`

### Result

After the transformation, the table will look like:

<div class="table-example">

| Name         | Date       | Rating | Feedback                   |
| ------------ | ---------- | ------ | -------------------------- |
| Ada          | 2025-04-18 | 5      | I really enjoy the product |
| Scott        | 2025-04-18 | 5      | NULL                       |
| Emma         | 2025-04-17 | 2      | The product is confusing   |
| Not provided | 2025-04-17 | 3      | NULL                       |

</div>
