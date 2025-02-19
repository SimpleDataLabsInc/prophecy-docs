---
title: Concepts
id: key-concepts
sidebar_class_name: hidden
description: Key Concepts of Prophecy
tags: []
---

There are a few core concepts you need to be familiar with to get started with Prophecy. These concepts are applicable to either SQL projects, Spark projects, or both.

## General

- **[Fabrics](docs/getting-started/concepts/fabrics.md)**: Connection to an execution environment for building and running pipelines.
- **[Projects](docs/getting-started/concepts/project.md)**: Collection of components like pipelines, models, and datasets stored in a Git repository.
- **[Gems](docs/getting-started/concepts/gems.md)**: Reusable components in a pipeline that perform specific data operations.

## SQL

- **[Pipelines](docs/getting-started/concepts/sql-pipelines.md)**: Sequence of steps using Prophecy and SQL engines for data transformations.
- **[Tables](docs/getting-started/concepts/models.md)**: Collection of data organized into rows and columns.
- **[Models](docs/getting-started/concepts/models.md)**: Sequence of steps to perform SQL-based transformations.
- **[Schedules](docs/analysts/scheduling.md)**: Pipeline runs that are set at a regular frequency.

## Spark

- **[Pipelines](docs/getting-started/concepts/spark-pipelines.md)**: Sequence of steps using Spark-native code for data transformations.
- **[Datasets](docs/getting-started/concepts/dataset.md)**: Structured collection of data, defined by type, location, and properties.
- **[Jobs](docs/Orchestration/Orchestration.md)**: Scheduled task or execution of a pipeline or script.
