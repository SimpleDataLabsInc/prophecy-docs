---
title: Multiple pipelines writing to the same table
sidebar_label: Multi-source table
id: multi-source-table
slug: /analysts/multi-source-table
description: Work around dbt limitations to append data from multiple sources into one table
tags: []
---

Prophecy doesn't allow multiple pipelines or branches to write directly to the same table. As such, it also doesn't directly support appending data from multiple sources into a single table. Use the [solution](#solution) provided as a workaround to this limitation.

## Example

Assume you try the following scenario:

- Pipeline A appends data to `final_table`.
- Pipeline B also tries to append different data to `final_table`.

This will result in errors or unexpected behavior.

## Why this happens

Prophecy executes SQL transformations by generating and running [dbt models](/engineers/models). dbt operates with a model-centric approach where each model is responsible for generating or updating a specific table. dbt expects a **1:1 relationship between models and tables**.

## Solution

To resolve this, split the write operations into separate intermediate tables and use a third table to consolidate the data via a union.

We recommended the following process:

- Pipeline 1 writes to `intermediate_table_1`
- Pipeline 2 writes to `intermediate_table_2`
- Pipeline 3 unions the two tables into a `final_table`
