---
title: Write Options
id: write-options
description: Write Options of Target Models
sidebar_position: 6
tags:
  - concept
  - model
  - write options
  - SQL
---

**Write Options**: Use Write Modes such as Overwrite, Append, and Merge

You can choose how you want to materialize your data.

Appending new data on every single run.
So choose an Append write mode.
You can see on the Code view that the table is stored as an incremental materialized table, with the incremental strategy set to append.
You can click **...** > **Advance Settings** to set all advanced dbt settings. These changes are shown in the Target Model.

SCD 2 use to write data and update data with new properties, without deleting the old records. Normally this would be implemented as a snapshot in dbt.
Write Mode set to Merge, Merge Approach set to SCD 2
Unique Key determines which rows will be updates
Updated at timestamp to verify if the row has actually now been updated with new values.
Again, you can click **...** > **Advance Settings** to set all advanced dbt settings.
