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

Prophecy gems are reusable building blocks designed to accelerate the development of your pipelines. These building blocks let you ingest, transform, and store your data in a modular way. Each gem is visually configurable and produces its own block of code.

## Why use gems?

Gems are the core components of a pipeline. The intuitive visual interface enables:

- **Reusability**: Reduces time spent writing repetitive code by leveraging prebuilt transformations.
- **Consistency**: Enforces coding and data processing standards across your team.
- **Scalability**: Lets Prophecy optimize your Spark code and SQL queries for you so you can easily scale your pipelines.

## Gem execution

Gems run on the execution engine defined in your attached [fabric](docs/getting-started/concepts/fabrics.md). If you want to see the underlying code per gem, you can switch to the **Code** view of your project and open the gem file. This code is automatically compiled and optimized by Prophecy.

## Gem functionality

Gems will vary based on project type because they are written in different languages (Python, Scala, or SQL) to match the project language. Gems let you:

- **Ingest** data from various sources, such as databases or APIs to bring data into your system for processing.
- **Transform** at different stages, starting with raw data, then cleaning and structuring it for analysis, and finally optimizing it for reporting and business insights.
- **Parse** data to restructure it, extract relevant fields, convert formats, or reorganize data to ensure consistency and compatibility with downstream processes.
- **Clean** data by identifying and correcting inconsistencies, missing values, duplicates, and errors, ensuring high-quality data for reliable analysis and decision-making.
- **Write** data to your desired output, whether it's a database, data warehouse, or another storage system, so it's ready to use in analytics or machine learning.

## What's next​

To start using gems in your pipelines:

- Explore the available [Engineering (Spark) gems](/Spark/gems/) and [Analyst gems](/analysts/gems).
- Add and connect various gems in your pipeline canvas.
- Browse the [Package Hub](docs/extensibility/package-hub/package-hub.md) to find additional gems and components that you can use.
- Take a peek at our [Gem Builder](docs/extensibility/extensibility.md) for an introduction to custom gems.
