---
title: FindNearest gem
id: find-nearest
slug: /analysts/find-nearest
description: Identify the shortest distance between spatial objects
tags:
  - gems
  - analyst
  - spatial
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlSpatial"
  sql_package_version="0.0.3+"
/>

Find the closest spatial point(s) between two datasets based on geographic distance. This gem compares each point in the first dataset to all points in the second dataset and returns the nearest matches.

:::tip
Geographic points must be in Well-known Text ([WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)) format. Use the [CreatePoint](/analysts/create-point) gem to convert longitude and latitude coordinates to WKT format.
:::

## Input and Output

| Port    | Description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| **in0** | Input dataset containing the source points for which you want to find the nearest points. |
| **in1** | Input dataset containing the target points to compare against.                            |
| **out** | Output dataset with the nearest point(s) from **in1** for each point in **in0**.          |

The output schema of **out** contains:

- All columns from **in0**.
- All columns from **in1**.
- `rank_number`: The rank of each match, where `1` is the closest point.
- `distance`: The calculated distance between the source and target points in the unit of measurement that you specify.
- `cardinal_direction`: The compass direction from the source point to the target point (e.g., `NW` for northwest).

## Parameters

Configure the FindNearest gem using the following parameters.

### Spatial Object Fields

| Parameter              | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| Source Centroid Type   | Type of geospatial object in **in0**. Currently, only Point is supported. |
| Source Centroid Column | Column in **in0** that contains the source spatial points.                |
| Target Centroid Type   | Type of geospatial object in **in1**. Currently, only Point is supported. |
| Target Centroid Column | Column in **in1** that contains the target spatial points.                |

### Select Output Options

| Parameter                        | Description                                                                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| How many nearest points to find? | Number of closest points to return from **in1** for each point in **in0**.                                                                  |
| Maximum distance                 | Option to limit the search to target points within this distance (specify units). When the maximum distance is `0`, no maximum is enforced. |
| Ignore 0 distance matches        | Whether to exclude points that have exactly the same coordinates as the source point.                                                       |

## Example: Customer service centers

Assume you have two tables:

- `customer_locations` that contains the location of each customer.

  <div class="table-example">

  | customer_id | customer_point           |
  | ----------- | ------------------------ |
  | C001        | POINT(-122.4194 37.7749) |
  | C002        | POINT(-74.0060 40.7128)  |

  </div>

- `service_centers` that contains the location of each service center.

  <div class="table-example">

  | center_id | center_point             |
  | --------- | ------------------------ |
  | S100      | POINT(-122.4192 37.7793) |
  | S200      | POINT(-73.9352 40.7306)  |
  | S300      | POINT(-118.2437 34.0522) |

  </div>

You can use the FindNearest gem to find the nearest service centers to each customer.

1. Add the FindNearest gem to your pipeline canvas.
1. Connect the `customer_locations` table to the FindNearest `in0` input port.
1. Connect the `service_centers` table to the FindNearest `in1` input port.
1. Open the FindNearest gem configuration.
1. For **Source Centroid Type**, select Point.
1. For **Source Centroid Column**, select the `customer_point` column.
1. For **Target Centroid Type**, select Point.
1. For **Target Centroid Column**, select the `center_point` column.

For this example, let's find the **two** nearest service centers in a 1000 km radius.

1. Type `2` in the **How many nearest points to find?** field.
1. Type `1000` and choose **Kilometers** in the **Maximum distance** field.
1. Lastly, save and run the gem.

### Result

The output contains the two closest service centers to each customer. Ranks begin at `1`, with `1` being the closest point. Note that customer `C002` only has one service center within 1000 km from their location.

<div class="table-example">

| customer_id | customer_point           | center_id | center_point             | rank_number | distanceKilometers  | cardinal_direction |
| ----------- | ------------------------ | --------- | ------------------------ | ----------- | ------------------- | ------------------ |
| C001        | POINT(-122.4194 37.7749) | S100      | POINT(-122.4192 37.7793) | 1           | 0.48957333464416436 | N                  |
| C001        | POINT(-122.4194 37.7749) | S300      | POINT(-118.2437 34.0522) | 2           | 559.1205770615533   | SE                 |
| C002        | POINT(-74.0060 40.7128)  | S200      | POINT(-73.9352 40.7306)  | 1           | 6.286267237667312   | E                  |

</div>
