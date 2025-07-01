---
title: NearestPoint
id: nearest-point
slug: /analysts/nearest-point
description: Identify the shortest distance between spatial objects in two datasets
tags:
  - gems
  - analyst
  - spatial
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlSpatial"
  sql_package_version="0.0.2+"
/>

Find the closest spatial point(s) between two datasets based on geographic distance. This gem compares each point in the first dataset to all points in the second dataset and returns the nearest matches.

:::tip
Spatial points must be in Well-known Text (WKT) format. Use the [CreatePoint](/analysts/create-point) gem to convert longitude and latitude coordinates to WKT format.
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
