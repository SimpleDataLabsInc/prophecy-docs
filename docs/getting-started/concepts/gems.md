---
title: Gems
id: gems
slug: /gems
description: Transform your data with Prophecy gems
tags:
  - gems
  - transformations
  - concepts
---

Gems are visual, modular components that represent data transformation logic in Prophecy. Each gem encapsulates a specific operation—such as reading data, filtering rows, or aggregating values—and automatically generates the corresponding code in your project's language (SQL, PySpark, or Scala). Gems are designed to connect together in a [pipeline](docs/getting-started/concepts/pipelines.md) where data flows from one gem to the next.

## Code generation

Gems are compiled into executable code in your project's target language:

- SQL gems become SQL queries compatible with your warehouse dialect (Databricks SQL, BigQuery, etc)
- PySpark gems are compiled into Python code
- Scala gems are compiled into Scala code

:::info
Gems that run in Prophecy Automate do not produce visible code. This is because they can only run in Prophecy's native runtime.
:::

## Packages

[Packages](/engineers/package-hub) let you share custom project components with others through the Package Hub. One of the most common uses for the Package Hub is to share custom gems.

- Prophecy provides a set of Prophecy-managed packages that are maintained and updated with new gems.
- You can build new gems yourself using the Gem Builder and package them for reuse.

## What's next​

To start using gems in your pipelines:

- Explore the available [Analyst gems](/analysts/gems) and [Engineering (Spark) gems](/engineers/gems/).
- Add and connect various gems in your pipeline canvas.
- Browse the [Package Hub](/engineers/package-hub) to find additional gems and components that you can use.
- Take a peek at our [Gem Builder](/engineers/extensibility) for an introduction to custom gems.
