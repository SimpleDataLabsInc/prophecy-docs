---
title: CreatePoint gem
sidebar_label: CreatePoint
id: create-point
slug: /analysts/create-point
description: Create geographic points with longitude and latitude coordinates
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

Use the CreatePoint gem to convert longitude and latitude coordinates into geographic points.

## Input and Output

The CreatePoint gem accepts the following input and output.

| Port    | Description                                                                                                                                                                          |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **in0** | Source dataset containing pairs of columns with longitude and latitude coordinates.                                                                                                  |
| **out** | Output dataset containing one or more new columns with points in Well-known Text ([WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)) geometric format. |

## Parameters

The CreatePoint gem accepts longitude and latitude columns as parameters.

In the **Create Spatial Points** section, you need to **Click to Add a Point**. For each point you add, fill in the following information.

| Parameter             | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| Longitude Column Name | Input column that contains longitude values.                     |
| Latitude Column Name  | Input column that contains latitude values.                      |
| Target Column Name    | Column in the gem output that will contain resulting geo points. |

## Example

Assume you have the following airline route table.

<div class="table-example">

| start_city | start_lat | start_long | destination_city | destination_lat | destination_long |
| ---------- | --------- | ---------- | ---------------- | --------------- | ---------------- |
| New York   | 40.7128   | -74.0060   | Los Angeles      | 34.0522         | -118.2437        |
| London     | 51.5074   | -0.1278    | Paris            | 48.8566         | 2.3522           |
| Tokyo      | 35.6895   | 139.6917   | Sydney           | -33.8688        | 151.2093         |
| Toronto    | 43.6511   | -79.3470   | Chicago          | 41.8781         | -87.6298         |
| Dubai      | 25.2760   | 55.2962    | Mumbai           | 19.0760         | 72.8777          |

</div>

To convert the start and destination coordinates into geographic points:

1. Create the first column pairing:

   1. Click **Add a Point**.

   1. For **Longitude Column Name**, select the `start_long` column.

   1. For **Latitude Column Name**, select the `start_lat` column.

   1. For the **Target Column Name**, type `source_point`.

1. Create another column pairing:

   1. Click **Add a Point**.

   1. For **Longitude Column Name**, select the `destination_long` column.

   1. For **Latitude Column Name**, select the `destination_lat` column.

   1. For the **Target Column Name**, type `dest_point`.

### Result

The CreatePoint gem will produce the following output with two new columns: `source_point` and `dest_point`.

<div class="table-example">

| start_city | start_lat | start_long | destination_city | destination_lat | destination_long | source_point             | dest_point                |
| ---------- | --------- | ---------- | ---------------- | --------------- | ---------------- | ------------------------ | ------------------------- |
| New York   | 40.7128   | -74.0060   | Los Angeles      | 34.0522         | -118.2437        | POINT (-74.0060 40.7128) | POINT (-118.2437 34.0522) |
| London     | 51.5074   | -0.1278    | Paris            | 48.8566         | 2.3522           | POINT (-0.1278 51.5074)  | POINT (2.3522 48.8566)    |
| Tokyo      | 35.6895   | 139.6917   | Sydney           | -33.8688        | 151.2093         | POINT (139.6917 35.6895) | POINT (151.2093 -33.8688) |
| Toronto    | 43.6511   | -79.3470   | Chicago          | 41.8781         | -87.6298         | POINT (-79.3470 43.6511) | POINT (-87.6298 41.8781)  |
| Dubai      | 25.2760   | 55.2962    | Mumbai           | 19.0760         | 72.8777          | POINT (55.2962 25.2760)  | POINT (72.8777 19.0760)   |

</div>
