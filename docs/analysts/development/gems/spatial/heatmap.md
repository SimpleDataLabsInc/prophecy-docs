---
title: HeatMap
id: heatmap
slug: /analysts/heatmap
description: Generate spatial heatmaps from geo point data using hexagons
tags:
  - gems
  - analyst
  - spatial
---

The **HeatMap** gem transforms latitude and longitude point data into a spatial heatmap using hexagonal tiling. It's useful for identifying clusters of activity or density within a geographic region.

## Input and Output

The HeatMap gem accepts the following inputs and output.

| Port    | Description                                                                                                                                                                                                                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **in0** | Input dataset containing pairs of columns with longitude and latitude coordinates.                                                                                                                                                                                                                                   |
| **out** | Output dataset with two columns: <ul class="table-list"><li>The `density` column describes the number of points (or total heat) in the hexagon.</li><li>The `geometry_wkt` column includes the hexagon boundary in [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry) format.</li></ul> |

## Parameters

Use the following parameters to configure the HeatMap gem.

| Parameter             | Description                                  |
| --------------------- | -------------------------------------------- |
| Longitude Column Name | Input column that contains longitude values. |
| Latitude Column Name  | Input column that contains latitude values.  |

### Advanced

The following table describes the advanced settings for this gem.

| Parameter        | Description                                                                                                                                                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Heat Column Name | Specifies a numeric column to determine the heat intensity at each point. <br/>If not set, each point contributes equally. Optional.                                                                                                                                               |
| Decay Function   | Defines how heat intensity decreases with distance from the center point. <ul class="table-list"><li>`Constant` applies equal weight to all hexes</li><li>`Linear` reduces weight proportionally with distance</li><li>`Exponential` halves the weight at each step away</li></ul> |
| Resolution       | Sets the size of each hexagon using the H3 indexing system. <br/>Lower resolutions result in larger hexes, while higher values create finer grids.                                                                                                                                 |
| Grid Distance    | Specifies how many hexagon steps away from the center should receive heat. <br/>A value of 1 includes immediate neighbors, while higher values expand the influence area.                                                                                                          |
