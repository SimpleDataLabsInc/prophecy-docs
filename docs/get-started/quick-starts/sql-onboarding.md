---
title: Create a SQL model
id: sql-onboarding
draft: true
description: Follow along in the product to make your first Spark pipeline
tags:
  - SQL
  - quick start
  - onboarding
  - models
---

Follow the orange dot in the product to know where to click.

You can automatically go through steps by clicking in the product.

You can skip to see the end model by clicking **Skip**.

## Get started

1. Click **Onboarding**.
1. Wait until your SQL cluster is attached. We provide a default [fabric](docs/get-started/concepts/fabrics/fabrics.md) (execution environment) for this onboarding project.

## Add data sources

1. Add nation
1. Review nation configuration
1. Add customers
1. Review customers

## Configure join

We will join two datasets.

1. Add nation as an input to ByNationId Join gem.
1. Add customers as an input to the same ByNationId Join gem.
1. Open the Join gem.
1. Note that the join is set to inner join and that you can define a join condition.
1. Add columns from both input datasets to the Expressions table.
1. Save. This automatically finds matching columns for the join condition.

## Configure reformat

In this step, we will rename column names and define output columns.

1. Add input
1. Type country_id. Copilot will find the correct column to change.
1. Type country_name. Copilot will find the correct column to change.
1. Add c_name as an output column.
1. Run the gem.
1. Click **Data** to see a preview of the gem output.

## Explore the expression editor

1. Ask copilot to write your SQL expression
1. Select the suggestion
1. Run the gem to see if the output is correct. (Interactive execution)
1. Verify that the column has been cast to an integer.
1. Change target column name and save. This exits the expression editor.
1. Save the gem.

## Configure aggregate

This gem will display the counts of customers per column in your dataset.

1. Add country_id and country_name to the target column (output column) expressions.
1. Add a new column, total_customers, to the expressions list.
1. Copilot will populate the SQL expression with the count.
1. Add country_name to the Group By table.
1. Save the gem.

## Explore different editor views

1. Click code
1. Scroll
1. Click visual

## Run the model

1. View results

## Summary

You just saw how to create a model in ...

To learn more about gems...

To configure a project from end-to-end, including setting up the execution environment, try...
