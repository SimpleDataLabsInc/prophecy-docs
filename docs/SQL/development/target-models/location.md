---
title: Location
id: location
description: Location of Target Models
sidebar_position: 4
tags:
  - concept
  - model
  - location
  - SQL
---

You can use the Location tab to overwrite the Database, Schema, or Alias of your Target Model.

The full location of a table, view, and other objects consists of a database, schema, and alias. dbt allows its users to overwrite any of those parts of the location, with a combination of macros and additional project, folder, and model-level configurations. This tab simplifies those dbt object location parts.

## Overwrite location

Prophecy allows you to overwrite the schema behavior, and if you wish, define it from scratch.

You can select how you want to store the table, choosing the location by overwriting the properties. The defaults are automatically provided for you.

- **Location**: The final location may vary depending on the model's execution environment.

For the following locations, toggle **Overwrite** to add your own overwrite macro:

- **(A) Database**: Optional, if Unity Database is enabled. By default, it's determined by the Fabric connection. You can overwrite it.
- **(B) Schema**: The default schema is determined by the Fabric connection. You can overwrite it.
- **(C) Alias**: Alias is the name of the created table or view. By default, it's equivalent to model name. You can overwrite it.

![Location](img/location.png)
