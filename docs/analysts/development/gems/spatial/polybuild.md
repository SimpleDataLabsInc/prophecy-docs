---
title: PolyBuild
id: polybuild
slug: /analysts/polybuild
draft: true
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
  sql_package_version="0.0.2+"
/>

Build spatial shapes from coordinate data by grouping and ordering points into either polygons (closed shapes) or polylines (open lines). Use this gem to convert raw latitude/longitude values into structured spatial geometries for mapping, analysis, or downstream geospatial operations.

- Polygon: Uses the `POLYGON()` format to create a closed shape.
- Polyline: Uses the `LINESTRING()` format to create an open path.

## Input and Output

| Port    | Description                                                                                                      |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset containing latitude and longitude coordinates, along with fields for grouping and ordering points. |
| **out** | Output dataset with one row per group, each containing a generated polygon or polyline.                          |

## Parameters

| Parameter             | Description                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| Build Method          | Choose whether to create a polygon (closed shape) or polyline (open line).                         |
| Longitude Column Name | Name of the column containing longitude values.                                                    |
| Latitude Column Name  | Name of the column containing latitude values.                                                     |
| Group Field           | Column used to group points into individual shapes. All points with the same value form one shape. |
| Sequence Field        | Column that defines the order of points within each group. Determines how the shape is drawn.      |
