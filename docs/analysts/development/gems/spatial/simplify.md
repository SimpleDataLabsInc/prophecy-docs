---
title: Simplify
id: simplify
slug: /analysts/simplify
description: Decrease the number of nodes that make up a polygon or polyline
tags:
  - gems
  - analyst
  - spatial
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlSpatial"
  sql_package_version="0.0.4+"
/>

The Simplify gem reduces the number of vertices in polygons and polylines while preserving their overall shape. This is useful for reducing file sizes, improving rendering performance, and simplifying complex geometries for analysis or visualization.

:::tip
Input geometries must be in [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) format. Use the [PolyBuild](/analysts/polybuild) gem to convert longitude and latitude coordinates into polygons or polylines in WKT format.
:::

:::info
The gem uses the [Ramer–Douglas–Peucker algorithm](https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm), which removes vertices based on their perpendicular distance from line segments. You can control the level of simplification by adjusting the distance threshold.
:::

## Input and Output

The Simplify gem accepts the following input and output.

| Port    | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| **in0** | Source dataset containing a column with lines or polygons.                     |
| **out** | Output dataset containing a new column with the transformed lines or polygons. |

## Parameters

Configure the Simplify gem using the following parameters.

| Parameter       | Description                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Geometry column | Column containing the WKT geometries to simplify.                                                                                              |
| Threshold       | Distance threshold for vertex removal. <br/>Vertices closer than this distance to the line segment connecting their neighbors will be removed. |
| Units           | Unit of measurement for the threshold in miles or kilometers.                                                                                  |
