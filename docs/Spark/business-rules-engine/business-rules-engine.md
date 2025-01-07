---
sidebar_position: 8
title: Business Rules Engine
id: business-rules-engine
description: Create business rules as functions
tags:
  - business rules
---

Business rules can be created in Spark Projects as functions. They can also be grouped and released via packages.

## Configuration

| Field         | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| Function Type | Models the type of function. In this case, it should be set to **Business Rule**. |
| Column Name   | This is the name of the **output column** that the business rule will calculate.  |
| Parameters    | The columns that you would like to include in your business rule condition(s).    |
| Rules         | The set(s) of conditions that define business rules.                              |

## Create and use a business rule

To create a business rule function:

1. Name your output column.
1. Add columns to the **Parameters** table.
1. Each column in the **Parameters** table will automatically be added to the **Rules** table under **Inputs**.

Each row in the Rules table corresponds to one business rule. To construct the rule:

1. Add conditions under the corresponding inputs in SQL expression format.
1. Add an output value in SQL expression format.
1. Add a description of the rule.

To use a business rule in your Pipeline, you can use the [SchemaTransform Gem](docs/Spark/gems/transform/schema-transform.md).

1. Add a SchemaTransform Gem to the Pipeline.
1. Open the Gem and add the appropriate input.
1. Click **Add Transformation**.
1. In the **Operation** dropdown, choose **Add Rule**.
1. Choose the appropriate rule in the **Rule** field. This will populate the **New Column** field. It will also show you the required inputs for the business rule.
