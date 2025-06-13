---
title: Distance
id: distance
slug: /analysts/distance
description: Calculate the distance between two points
tags:
  - gems
  - analyst
  - spatial
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlSpatial"
  sql_package_version="0.0.1+"
/>

Use the Distance gem to calculate the distance between two geographic points.

## Parameters

### Spatial Object Fields

Use these parameters to specify the columns containing the source and destination geographic points for distance calculation.

| Parameter          | Description                                      |
| ------------------ | ------------------------------------------------ |
| Source Type        | Format of the source column.                     |
| Source Column      | Column that contains the source geo points.      |
| Destination Type   | Format of the destination column.                |
| Destination Column | Column that contains the destination geo points. |

### Select Output Options

Use the checkboxes defined below to choose which output columns the Distance gem should generate.

| Checkbox                    | Description                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------- |
| Output Distance             | Return a column that includes the distance between points in a specified unit of distance             |
| Output Cardinal Direction   | Return a column that includes the cardinal direction from the source point to the destination point   |
| Output Direction in Degrees | Return a column that includes the direction in degrees from the source point to the destination point |

:::note
You can select zero, one, or multiple checkboxes. All checkboxes are disabled by default.
:::

## Example

Assume you have the following airline route table, and you would like to calculate the distance between start and destination cities.

<div class="table-example">

| start_city | destination_city | source_point             | dest_point                |
| ---------- | ---------------- | ------------------------ | ------------------------- |
| New York   | Los Angeles      | POINT (-74.0060 40.7128) | POINT (-118.2437 34.0522) |
| London     | Paris            | POINT (-0.1278 51.5074)  | POINT (2.3522 48.8566)    |
| Tokyo      | Sydney           | POINT (139.6917 35.6895) | POINT (151.2093 -33.8688) |
| Toronto    | Chicago          | POINT (-79.3470 43.6511) | POINT (-87.6298 41.8781)  |
| Dubai      | Mumbai           | POINT (55.2962 25.2760)  | POINT (72.8777 19.0760)   |

</div>

To find the distance and direction between cities, set the following gem configurations.

1. Set source and destination:

   1. Set **Source Type** to **Point**.

   1. Set **Source Column** to `start_city`.

   1. Set **Destination Type** to **Point**.

   1. Set **Destination Column** to `destination_city`.

1. Set output options:

   1. Select the **Output Distance** checkbox.

   1. From the **Units** dropdown, select **Kilometers**.

   1. Select the **Output Cardinal Direction** checkbox.

   1. Select the **Output Direction in Degrees** checkbox.

   1. Run the gem.

### Result

The resulting table will have three new columns: `distance_kilometers`, `cardinal_direction`, and `direction_degrees`.

<div class="table-example">

| start_city | destination_city | source_point             | dest_point                | distance_kilometers | cardinal_direction | direction_degrees |
| ---------- | ---------------- | ------------------------ | ------------------------- | ------------------- | ------------------ | ----------------- |
| New York   | Los Angeles      | POINT (-74.0060 40.7128) | POINT (-118.2437 34.0522) | 3944.42             | W                  | 273.7             |
| London     | Paris            | POINT (-0.1278 51.5074)  | POINT (2.3522 48.8566)    | 343.92              | SE                 | 148.1             |
| Tokyo      | Sydney           | POINT (139.6917 35.6895) | POINT (151.2093 -33.8688) | 7792.96             | S                  | 169.9             |
| Toronto    | Chicago          | POINT (-79.3470 43.6511) | POINT (-87.6298 41.8781)  | 705.64              | W                  | 256.6             |
| Dubai      | Mumbai           | POINT (55.2962 25.2760)  | POINT (72.8777 19.0760)   | 1936.68             | E                  | 107.3             |

</div>
