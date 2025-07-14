---
title: Buffer
id: buffer
slug: /analysts/buffer
description: Buffer
tags:
  - gems
  - analyst
  - spatial
---

import SQLRequirements from '@site/src/components/sql-gem-requirements';

<SQLRequirements
  execution_engine="SQL Warehouse"
  sql_package_name="ProphecyDatabricksSqlSpatial"
  sql_package_version=""
/>

Use the Buffer gem to take any polygon or line and expand or contract its boundaries. This can be useful for spatial analysis tasks like creating safety zones around hazardous areas, expanding service coverage areas, and analyzing proximity impacts.

:::tip
Geometries must be in Well-known Text ([WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)) geometric format. Use the [PolyBuild](/analysts/polybuild) gem to create lines and polygons in this format from latitude and longitude coordinates.
:::

## Input and Output

The Buffer gem accepts the following inputs and output.

| Port    | Description                                                                                                  |
| ------- | ------------------------------------------------------------------------------------------------------------ |
| **in0** | Input dataset containing the source points for which you want to find the nearest points.                    |
| **out** | Columns from `in0` including the original geometry, plus an additional column with the transformed geometry. |

## Parameters

Configure the Buffer gem using the following parameters.

| Parameter       | Description                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Geometry column | Column containing the polygon or line you want to expand or contract.                                                           |
| Distance        | Amount of distance to expand or contract each geometry. Use negative distances to create inward buffers (shrinking geometries). |
| Units           | Unit of measurement for the distance you defined.                                                                               |

## Example

Let's say you're working with a transportation dataset and need to create safety corridors around major highways. You have highway routes as polylines and want to create 500-meter buffer zones on both sides of each road for noise impact analysis.

1. Add a Buffer gem to your pipeline canvas.
1. Attach an input that includes the highway routes as polylines in a `routes` column.
1. Open the gem configuration interface.
1. For **Geometry column**, select the `routes` column from the input table.
1. For **Distance**, input `500`.
1. For **Units**, select **Meters**.
1. Save and run the gem.

The output will include a new column that contains your transformed highway routes.
