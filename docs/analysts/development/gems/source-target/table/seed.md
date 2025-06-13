---
title: Seed
id: seed
slug: /analysts/seed
description: Create small CSV-format source files directly in Prophecy
tags: []
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name=""
  sql_package_version=""
/>

Seeds are small CSV-format files that you can create in Prophecy to use as Source gems.

## Source parameters

Seeds can only be sources. The following table describes the required parameters for seeds.

| Parameter       | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| Type and Format | Select `Seed`.                                                       |
| Properties      | Copy-paste your CSV data and define certain properties of the table. |
| Preview         | Load the data to see a preview before saving.                        |

:::note
The **Location** tab of the seed configuration is grayed out. This is because seeds are stored as CSV files in your project code.
:::

<!-- ### Source properties

| Property              | Description                                                       | Default  |
| --------------------- | ----------------------------------------------------------------- | -------- |
| Delimiter             | Character used to separate values in the CSV file.                | None     |
| First row is header   | Checkbox to enable if the first row of the CSV is the header row. | Disabled |
| Docs Show             |                                                                   | Disabled |
| Enabled               |                                                                   | Enabled  |
| Full Refresh          |                                                                   | Disabled |
| Persist Docs Relation |                                                                   | Disabled |
| Persist Docs Columns  |                                                                   | Disabled |
| Tags                  |                                                                   | None     | -->
