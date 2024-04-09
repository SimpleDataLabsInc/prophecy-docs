---
title: Data Sources
id: datasources-sql
description: access your data
sidebar_position: 1
tags:
  - SQL
  - sources
  - seeds
---

Constitutes the set of Gems that help with loading data.

## Source

- Each Source points to a table in the SQL Warehouse(s) specified in the Fabric.
- Inside a Project, the `Env` tab allows for browsing the database and schema .
- Tables in the `Env` tab can be drag-n-dropped to the canvas.

## Seed

- Load a small CSV file.
- This is super useful for small test datasets or lookup mappings, like a list of cities or countries.
- Seeds are saved as SQL fiiles on Git.

## Model

- Each model defines a table.
- Models can serve as inputs to other models.

The Project browser lists the Sources, Seeds, and Models available to drag-n-drop into the existing model canvas.
