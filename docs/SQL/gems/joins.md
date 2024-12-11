---
title: Join
id: data-joins
description: Join data from multiple tables
sidebar_position: 3
tags:
  - join
  - data
  - gem
  - transformation
---

<h3><span class="badge rounded-pill text-bg-light">SQL Gem</span></h3>

Upon opening the Join Gem, you can see a pop-up which provides several helpful features.

![Join definition](img/JoinCondition.png)

For transparency, you can always see the **(1) Input schema** on the left hand-side, **(2) Errors** in the footer, and have the ability to **(3) Run** the Gem on the top right.

To fill-in our **(5) Join condition** within the **(4) Conditions** section, start typing the input table name and key. For example, if we have two input tables, `nation` and `customer`, type `nation.nationkey = customers.nationkey`. This condition finds a nation based on the nationkey feild for every single customer.

When you’re writing your join conditions, you’ll see available functions and columns to speed up your development. When the autocomplete appears, press ↑, ↓ to navigate between the suggestions and press tab to accept the suggestion.

Select the **(6)Join Type** according to the provider, eg [Databricks](https://docs.databricks.com/en/sql/language-manual/sql-ref-syntax-qry-select-join.html) or [Snowflake.](https://docs.snowflake.com/en/user-guide/querying-joins)

The **(7) Expressions** tab allows you to define the set of output columns that are going to be returned from the Gem. Here we leave it empty, which by default passes through all the input columns, from both of the joined sources, without any modifications.

To rename our Gem to describe its functionality, click on it’s **(8) Name** or try the **Auto-label** option. Gem names are going to be used as query names, which means that they should be concise and composed of alphanumeric characters with no spaces.

Once done, press **(9) Save.**

:::info
To learn more about the Join Gem UI, see [this page](/docs/concepts/project/gems.md) which illustrates features common to all Gems.
:::

## Add a port

It's easy to add an extra source to a Join Gem. Just connect and configure.

![JoinPort](img/JoinAddPort.png)

Once the source is **(1) connected**, click to **(2) edit** the ports.

Update the **(3) port name** from the default input `in2` to a more descriptive name such as the table name, in this case `NATIONS`.

Fill in the **(4) Join condition** for the new table and specify the **(5) Join type**.

Click **(6) Save**.

## Run

When your Join Gem has the desired inputs, conditions and expressions, **(7) run** interactively to view **(8)[sample data](/docs/SQL/execution/data-explorer.md).**
