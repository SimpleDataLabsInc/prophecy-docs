---
title: Gems
id: gems
description: Transform your data with Prophecy gems
tags:
  - gems
  - transformations
  - concepts
---

Prophecy gems are reusable building blocks designed to accelerate the development of your Spark and SQL workflows. These building blocks let you ingest, transform, and store your data in a modular way. Each gem is visually configurable and produces its own block of code.

## Why use gems?

Gems are the core components of a pipeline. The intuitive visual interface enables:

- **Efficiency**: Reduce time spent writing repetitive code by leveraging prebuilt transformations.
- **Consistency**: Enforce coding and data processing standards across your team.
- **Scalability**: Let Prophecy optimize your Spark code and SQL queries for you so you can easily scale your pipelines.

## Gem execution

Gems run on the execution engine defined in your attached [fabric](docs/getting-started/concepts/fabrics.md). If you want to see the underlying code per gem, you can switch to the **Code** view of your project and open the gem file. This code is automatically compiled and optimized by Prophecy.

## Gem functionality

Depending on your project type, you will see different kinds of gems. This makes sense, as gems are written in different languages (Python, Scala, or SQL) that ultimately need to match the language of your project. At a high level, gems let you:

- **Ingest** data from various sources.
- **Transform** data from its raw state
- **Parse** data to restructure it.
- **Clean** data that is inconsistent.
- **Write** data to your desired output, whether it's a database, a warehouse, or another system.

## What's next​

To start using gems in your Spark or SQL pipelines:

- Explore available gems in your pipelines.
- Add and connect various gems in your pipeline canvas.
- Browse the [Package Hub](docs/extensibility/package-hub/package-hub.md) to find additional gems and components that you can use.
- Take a peek at our [Gem Builder](docs/extensibility/extensibility.md) for an introduction to custom gems.

For more information on available gems and how to configure them according to your specific use case, check out our documentation on [SQL gems](docs/analysts/development/gems/gems.md) and [Spark gems](/Spark/gems).
