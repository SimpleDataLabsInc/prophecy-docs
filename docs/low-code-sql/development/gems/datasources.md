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

Loading data into Prophecy is done via the Source Gem, Seed Gem, or the Model Gem.

[img/toggle_envtab_and_datasets_in_project_browser]

## Source

- Each Source points to a table in the SQL Warehouse(s) specified in the Fabric.
- Inside a Project, the `Env` tab allows for browsing the database and schema .
- Tables in the `Env` tab can be drag-n-dropped to the canvas.
- If you want to you can `add a source` by clicking the "plus" icon, but the preferred method is to drag and drop a table from the Env tab so you don't have to specify the table details manually.

## Seed

- Load a small CSV file.
- This is super useful for small test datasets or lookup mappings, like a list of cities or countries.
- Seeds are saved as SQL fiiles on Git.

## Model

- Each model defines a single table.
- Models can serve as inputs to other models.

The Project browser lists the Sources, Seeds, and Models available to drag-n-drop into the existing model canvas.
