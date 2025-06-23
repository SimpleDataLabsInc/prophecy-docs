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
  sql_package_version="0.0.2+"
/>

- Polygon: `POLYGON()` format - create a closed polygon
- Polyline: `LINESTRING()` format - create an open line

## Input and Output

| Port    | Description                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------- |
| **in0** | Dataset consisting of latitude and longitude coordinates including a group label and sequence label. |
| **out** | Dataset with one row for each group in the input, representing one polygon or polyline each.         |

## Parameters

| Parameter             | Description                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- |
| Build Method          | Choose to build a polygon or a polyline.                                                                |
| Longitude Column Name |                                                                                                         |
| Latitude Column Name  |                                                                                                         |
| Group Field           | Column that includes the label grouping the coordinates by a specific shape.                            |
| Sequence Field        | Column that includes the sequence label, indicating which points should go in which order in the shape. |
