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

Stored procedures are built on top of BigQuery stored procedures and follow the same SQL syntax and execution model. To learn more about what stored procedures are, how they work in Prophecy, and how to define them, see [Stored procedures](/analysts/stored-procedure).

## Prerequisites

To use stored procedures, you need:

- Prophecy 4.1.2 or later.

## Limitations

The StoredProcedure gem can only call stored procedures that have been defined in Prophecy. Stored procedures originating from BigQuery cannot be called from this gem.

## Input and Output

By default, the StoredProcedure gem has no input or output ports. You can add ports manually by clicking `+` next to **Ports** in the gem configuration.

- Input port (optional): Pass values from a table into the stored procedure. Only one input port is supported.
- Output port (optional): Return output arguments in a table. Only one output port is supported.

If an input port is added, the stored procedure is executed **once per input row**. As a result, the output will contain the **same number of rows** as the input. If no input port is added, the stored procedure runs once.

## Parameters

Configure the StoredProcedure gem using the following parameters:

| Parameter            | Description                                                                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Procedure            | Select a stored procedure from the dropdown menu of [existing procedures](/analysts/stored-procedure) in the project.                                                                                                                                                       |
| Arguments            | Add values to arguments required by the stored procedure. Arguments automatically appear when you choose a stored procedure.                                                                                                                                                |
| Pass through columns | Pass through additional columns from the input table to the output of the stored procedure. Columns can be defined using visual or SQL expressions. <br/>If no pass through columns are defined, the output contains one column per `OUT` argument in the stored procedure. |
