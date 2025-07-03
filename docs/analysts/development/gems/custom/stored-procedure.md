---
title: Stored Procedures
id: stored-procedure
description: Create and call stored procedures to use in pipelines
tags:
  - gems
  - analyst
  - custom
---

Stored procedures allow you to use procedural logic in your pipeline. While business logic should be handled using ... gems, stored procedures are optimal when:

- You’re migrating an existing stored procedure from another application/system.
- for DDL operations,

## Prerequisites

- Attach a Prophecy fabric with a Google BigQuery SQL Warehouse Connection

## Create stored procedure

| Parameter | Description |
| --------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| Project   |             |
| Dataset   |             |
| Arguments |             | Define the arguments that will be passed to the stored procedure. Each argument has a name, mode, and type |
| Code      |             |

### Procedure options

- Strict mode:
- Description: write a description to document your stored procedure

## Call stored procedure

Arguments automatically appear when you choose an SP

Pass through columns
