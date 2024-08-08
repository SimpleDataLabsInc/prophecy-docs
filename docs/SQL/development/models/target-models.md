---
title: Target Models
id: target-models
description: Target Models are a sequence of data transformation steps which define a single table or view
sidebar_position: 2
tags:
  - model
  - SQL
  - table
---

Easy to define, with no dbt knowledge required. SCD type 1 & 2 supported.

- **Target Model**: In this release, we've updated the UX and capabilities of the target model in SQL projects. There are now the following tabs within the model:

  - **Type & Format**: Update the format of the model from View to Table
  - **Location**: Update the location by overwriting the Database, Schema, or Alias
  - **Schema**: Make schema changes
  - **SQL Query**: View and enable your custom SQL query
  - **Write Options**: Use Write Modes such as Overwrite, Append, and Merge
