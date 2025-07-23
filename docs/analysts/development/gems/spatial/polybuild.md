---
title: PolyBuild
id: polybuild
slug: /analysts/polybuild
description: Create a polygon or polyline from a set of coordinates
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

Build spatial shapes from coordinate data by grouping and ordering points into either polygons (closed shapes) or polylines (open lines). Use this gem to convert raw latitude/longitude values into structured spatial geometries for mapping, analysis, or downstream geospatial operations.

- Polygon: Uses the `POLYGON()` format to create a closed shape.
- Polyline: Uses the `LINESTRING()` format to create an open path.

## Input and Output

The PolyBuild gem accepts the following input and output.

| Port    | Description                                                                                                                                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset containing pairs of columns with latitude and longitude coordinates, along with fields for grouping and ordering coordinates.                                       |
| **out** | Output dataset with one row per group, each containing a generated polygon or polyline in [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) format. |

## Parameters

Configure the PolyBuild gem using the following parameters.

| **Parameter**         | **Description**                                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Build Method          | Select the type of spatial geometry to create from your coordinate data:<br/>• Select **Sequence Polygon** for closed areas, such as boundaries or zones<br/>• Select **Sequence Polyline** for open paths, such as routes or trails |
| Longitude Column Name | Column containing longitude values. Must be in decimal degrees (e.g., `-122.4194`).                                                                                                                                                  |
| Latitude Column Name  | Column containing latitude values. Must be in decimal degrees (e.g., `37.7749`).                                                                                                                                                     |
| Group Field           | Column used to divide coordinates into distinct shapes. <br/>Example: Use the `state_name` column to identify polygons for each state border.<br/>_Only one column is supported for grouping._                                       |
| Sequence Field        | Column that defines the drawing order of points within each group. <br/>This column can be any sortable type (e.g., integers, timestamps, strings). <br/>The points will be connected in ascending order.                            |

## Example

Assume you have the following `routes` table for public transportation routes.

<div class="table-example">

| route_id       | stop_schedule        | latitude | longitude |
| -------------- | -------------------- | -------- | --------- |
| bus_21_morning | 2025-07-16T08:00:00Z | 37.7749  | -122.4194 |
| bus_21_morning | 2025-07-16T08:10:00Z | 37.7793  | -122.4192 |
| bus_21_morning | 2025-07-16T08:20:00Z | 37.7796  | -122.4148 |
| tram_5_evening | 2025-07-16T18:00:00Z | 34.0522  | -118.2437 |
| tram_5_evening | 2025-07-16T18:10:00Z | 34.0565  | -118.2470 |
| tram_5_evening | 2025-07-16T18:20:00Z | 34.0580  | -118.2417 |

</div>

To transform each route into a polyline geometry:

1. Add the PolyBuild gem to your pipeline canvas.
1. Connect the `routes` table to the PolyBuild input port.
1. Open the PolyBuild gem configuration.
1. For **Build Method**, select **Sequence Polyline**.
1. For **Longitude Column Name**, select the `longitude` column.
1. For **Latitude Column Name**, select the `latitude` column.
1. For **Group Field**, select the `route_id` column.
1. For **Sequence Field**, select the `stop_schedule` column.
1. Save and run the gem.

### Result

The PolyBuild gem outputs a table including a polyline for each route.

<div class="table-example">

| route_id       | wkt                                                                    |
| -------------- | ---------------------------------------------------------------------- |
| bus_21_morning | `LINESTRING (-122.4194 37.7749, -122.4192 37.7793, -122.4148 37.7796)` |
| tram_5_evening | `LINESTRING (-118.2437 34.0522, -118.2470 34.0565, -118.2417 34.0580)` |

</div>
