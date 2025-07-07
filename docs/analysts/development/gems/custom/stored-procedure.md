---
title: StoredProcedure
id: stored-procedure
slug: /analysts/stored-procedure-gem
description: Create and call stored procedures to use in pipelines
tags:
  - gems
  - analyst
  - custom
---

Use the StoredProcedure gem to call stored procedures defined in your project. Stored procedures allow you to run procedural logic (such as loops, conditional statements, or DDL operations) as a step in your pipeline.

stored procedures are built on top of BigQuery stored procedures and follow the same SQL syntax and execution model. To learn more about what stored procedures are, how they work in Prophecy, and how to define them, see [Stored procedures](/analysts/stored-procedure).

## Prerequisites

Stored procedures are supported in SQL projects where Google BigQuery is the SQL provider.

## Limitations

The StoredProcedure gem can only call stored procedures that have been defined in Prophecy. Stored procedures originating from BigQuery cannot be called from this gem.

## Input and Output

Stored procedures do not have any input or output ports by default. To add an input or output port, click `+` next to **Ports**.

:::note
The StoredProcedure gem accepts a maximum of **one** input port and returns a maximum of **one** output port.
:::

The number of input rows should match the number of output rows. This is because stored procedures are called once per input row.

## Parameters

| Parameter            | Description                                                                                                                                                                                        |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Procedure            | Select a stored procedure from the dropdown menu of existing procedures in the project.                                                                                                            |
| Arguments            | Add values to arguments required by the stored procedure. Arguments automatically appear when you choose a stored procedure.                                                                       |
| Pass through columns | Pass through additional columns to the output of the stored procedure. By default, the output only contains one column per `OUT` argument. Columns can be defined using visual or SQL expressions. |
