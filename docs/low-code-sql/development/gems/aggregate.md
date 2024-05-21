---
title: Aggregate
id: data-aggregate
description: Perform aggregation transformations with the option to group by columns.
sidebar_position: 3
tags:
  - aggregate
  - groupby
  - data
  - gem
  - transformation
---

Together let's build an Aggregate Gem. Follow along in the `HelloWorld_SQL` Project.

:::info
To learn more about the Aggregate Gem UI, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all Gems.
:::

## Run

When you're ready to see how your Aggregate Gem works, **() Run** interactively to view **()[sample data](../interactive-development/data-explorer.md).**

For transparency, you can always see the **(1) Input schema** on the left hand-side, **(2) Errors** in the footer, and have the ability to **(3) Run** the Gem on the top right.

To fill-in our **(5) Join condition** within the **(4) Conditions** section, start typing the input table name and key. For example, if we have two input tables, `nation` and `customer`, type `nation.nationkey = customers.nationkey`. This condition finds a nation based on the nationkey feild for every single customer.

When you’re writing your join conditions, you’ll see available functions and columns to speed up your development. When the autocomplete appears, press ↑, ↓ to navigate between the suggestions and press tab to accept the suggestion.

Select the **(6)Join Type** according to the provider, eg [Databricks](https://docs.databricks.com/en/sql/language-manual/sql-ref-syntax-qry-select-join.html) or [Snowflake.](https://docs.snowflake.com/en/user-guide/querying-joins)

The **(7) Expressions** tab allows you to define the set of output columns that are going to be returned from the Gem. Here we leave it empty, which by default passes through all the input columns, from both of the joined sources, without any modifications.

To rename our Gem to describe its functionality, click on it’s **(8) Name** or try the **Auto-label** option. Gem names are going to be used as query names, which means that they should be concise and composed of alphanumeric characters with no spaces.
