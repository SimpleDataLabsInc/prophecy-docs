---
title: Use the Visual Expression Builder
id: use-the-expression-builder
description: Use the Expression Builder
sidebar_position: 2
tags:
  - how-to
  - development
  - visual
  - functions
  - expression
  - sql
---

Develop your SQL expressions by using the Visual Expression Builder, which shows you available columns and functions that you can use to build your expressions.

## Navigate

Visual Expression Builder is supported wherever you see Visual and Code views. The view you select persists across Gems. All of the expressions you build using the Visual Expression Builder is converted to code in the Gem and Model Code views. Editing in the Code view, whether it's in a expressions or condition editor, will be converted into Visual.

## Build an expression

Table of Gems supported

The dropdowns support search

Each argument of your function can be another expression as you have the same Expression options to choose from.

You can add optional arguments

### Build using the Expression mode

Single expression in Aggregate, Join, or Reformat

### Build using the Comparison mode

Conditions
Left-hand expression, operator, and right-hand expression in Filter and Reformat Gems

You can **+ Add Condition**

Each condition is limited to one comparison.

Support dragging and dropping

### Build using the Grouping mode

Include multiple comparisons using logical operators `AND` and `OR` in Filter Gems

You can **+ Add Group**

You can have any number of groups and nestings (a group within a group)

Just as with conditions, we support dragging and dropping groups

## Other

For Join Gems we show columns that match the tables.

Delete

## Run and Verify the output

Run the Pipeline up to and including the Gem with your expression, and observe the resulting data sample.

- Click the **Play** button on either the canvas or the Gem.

Once the code has finished running, you can verify the results to make sure they match your expectations. This Data is same as what you see in [interims view](../interactive-development/data-explorer.md). By testing and verifying your expressions, you can ensure that your data analysis tasks are accurate and reliable.
