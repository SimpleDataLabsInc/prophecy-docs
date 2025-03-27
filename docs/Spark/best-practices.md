---
title: Best practices
id: project-best-practices
slug: /engineers/project-best-practices
description: Learn about what we recommend to do if you are working in a project.
tags:
  - project
  - best practices
---

## Projects

Limit the total number of pipelines per project to keep your project modular.

This helps you have:

- Better Git version control and Git tagging
- A faster code generation and compilation as common entities are compiled across all pipelines when changes are made
- More control during deployment
- Shared resources across teams and in [Package Hub](docs/extensibility/package-hub/package-hub.md)

## Re-usable entities

Keep common entities in a common project.

Common entities can include user defined functions, reusable-subgraphs, gems, and fully configurable pipelines. This allows you to share the project in a read-only and version controlled manner with other teams when you publish it as a [package](docs/extensibility/package-hub/package-hub.md).

## Pipelines

1. Limit the number of gems per pipeline to keep your pipeline modular.

   This helps you have:

   - Shorter recover and retry times for failed tasks in Spark pipelines
   - More control during orchestration
   - Shorter recovery times for failed jobs

1. Use [Job Sampling](/Spark/pipelines/pipeline-settings#job) only for debugging purposes and for smaller pipelines because sampling incurs a large computational penalty in Spark.

## Configurations

You can configure Prophecy gems to use [configuration](/engineers/configurations) variables such as path or a subset of path variables in Source and Target gems.

Typically, configuration variables are static. However, if you want to assign a dynamic value to a configuration variable at runtime, you may overwrite the `Config` variable using a Script component.

Run the following syntax at a low phase value (-1) before the rest of your pipeline:

```shell
Config.var_name =new_value
```

This lets you achieve a **dynamic runtime configuration.**

## Datasets

Don’t duplicate your dataset in the a pipeline. Your dataset contains a unique set of properties. If you duplicate it in your pipeline, its properties become unstable due to the duplicate copy of properties.

## Pipeline optimizations

To optimize your pipeline:

1. For most cases, use the [Reformat gem](docs/Spark/gems/transform/reformat.md) instead of the [SchemaTransform gem](docs/Spark/gems/transform/schema-transform.md).

   The Reformat gem calls the Spark `select()` function once, which is not very computationally expensive. The SchemaTransform gem uses the Spark `withColumn()` function, which is applied to each column one-by-one (more computationally intensive).

   You should use the SchemaTransform gem if you are creating a small number of columns that will be specifically used for downstream calculations in subsequent gems.

1. If you have a gem that has multiple output ports, try caching the data in that gem.

   Spark lazily evaluates action calls, which means it reevaluates the same part of the flow unless you cache it. This is helpful before you branch to multiple output ports.

   :::note
   Larger datasets may be too large to cache.
   :::

1. Broadcast smaller tables in your [Join gem](docs/Spark/gems/join-split/join.md) to increase your performance.

   Control the broadcast threshold based on your cluster size by setting the `spark.sql.autoBroadcastJoinThreshold` property to a value greater than 10MB. To learn more, see [Performance Tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html).

1. Remove the [OrderBy](docs/Spark/gems/transform/order-by.md) and [Deduplicate](docs/Spark/gems/transform/deduplicate.md) gems wherever you don't need them.

   If you need the Deduplicate gem, be mindful on which `Row to keep` to select.<br/>The `first` and `last` options are more expensive than `any`.

1. Set an appropriate value for the `spark.sql.shuffle.partitions` property.

   For skewed, overparititioned, or underpartitioned Source datasets, consider using the [Repartition](docs/Spark/gems/join-split/repartition.md) gem to repartition your dataset to an appropriate number of partitions.
