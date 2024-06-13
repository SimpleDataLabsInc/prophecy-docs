---
title: Data tests
id: data-tests
description: Data tests check the validity of your SQL
sidebar_position: 8
tags:
  - concept
  - testing
  - sql
---

You can use data tests to ensure that your business data is generated reliably over time. As a data engineer, data analyst, or business user, you can run data tests so that you don’t have to manually check every Dataset every time you run a Job or model. The data test checks the validity of the SQL in your project.

For example, find the following Test named `ref_int_orders_customers` which checks the validity of the SQL in the `HelloWorld_SQL` Project. In particular, the referential integrity check for orders and customers asserts that every `customer_id` entry in the `orders` table is present in the `customers` table.

![Project test canvas](img/project-test-canvas.png)'

This test starts with several **(1) models** from the `HelloWorld_SQL` Project, combines their data with a series of **(2) transformation** steps, and feeds the resulting table into the **(3) Data Test** Gem.

If there are `customer_id` entries in the `orders` table that are not present in the `customers` table, then the `ref_int_orders_customers` test fails.

You can test any series of transformations with a Data Test Gem.

## What you'll need to know

Data tests use [dbt](https://docs.getdbt.com/docs/build/data-tests) for the underlying test execution, but you don’t need to know dbt or how to write your own tests. Prophecy simplifies the test definitions that are normally defined in `.sql` and `.yaml` files.

You can create Data Tests in Prophecy using the visual canvas.

### Supported database objects

Supported database objects include:

- Models
- Snapshots
- Seeds
- Sources

Note: Data tests can accept input data from any table, no matter if the table is defined by a model, snapshot, seed, or source.

### Supported test types

Supported test types include:

- Project tests

## What's next

Data tests are useful if you want to check the validity of your data, without having to manually check every dataset.

To set up a project test, see [Use project tests](/docs/low-code-sql/data-tests/use-project-tests.md).
