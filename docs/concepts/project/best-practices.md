---
title: Project Best Practices
id: project-best-practices
description: Learn about what we recommend to do if you are working in a project.
tags:
  - project
  - best practices
---

## Projects

Limit the total number of pipelines per project to keep your project modular.

This helps you have:

- Better Git version control and Git tagging
- A faster code generation and compilation as common entities are compiled across all pipelines when change is done
- More control during deployment
- Shared resources across teams and in [Package Hub](docs/extensibility/package-hub/package-hub.md)

## Re-usable entities

Have common entities such as datasets, user defined functions, reusable-subgraphs, gems, and any fully configurable pipelines in a common project.
This allows you to share the project in a read-only and version controlled manner with other teams when you publish it as a package.

## Pipelines

1. Limit the number of gems per pipeline to keep your pipeline modular.

   This helps you have:

   - A shorter recovery time and retry all failed tasks in the Spark engine
   - More control during orchestration
   - Shorter recovery times for failed jobs

1. Use [Job Sampling](#interims) mode for debugging purposes, and for smaller pipelines.

   This incurs a large computational penalty in Spark to collect and show interims.

## Configurations

1. You can configure Prophecy gems to use [configuration](/docs/Spark/configuration.md) variables such as path or a subset of path variables in Source and Target gems.
1. Dynamic Runtime Configuration
   Typically, configuration variables are static. However, if you want to assign a dynamic value to a configuration variable at runtime, you may overwrite the `Config` variable using a Script component.

   Run the following syntax at a low phase value (-1) before the rest of your pipeline:

   ```shell
   Config.var_name =new_value
   ```

## Datasets

Don’t duplicate your dataset in the a pipeline. Your dataset contains a unique set of properties, and if you duplicate it in your pipeline, it’s properties become unstable due to the duplicate copy of properties.

## Pipeline optimizations

To optimize your pipeline:

1. Use the [Reformat gem](docs/Spark/gems/transform/reformat.md) instead of the [SchemaTransform gem](docs/Spark/gems/transform/schema-transform.md).

   The SchemaTransform gem uses the Spark `withColumn()` function, which is very expensive to run multiple times compared to the Reformat gem, which uses the Spark `select()` function.

1. If your data isn't large, try to cache the data in the gem from where you connect multiple branches to the output.

   Spark lazily evaluates action calls, which means it reevaluates the same part of the flow unless you cache it in case of branching out.

1. Broadcast smaller tables in your [Join gem](docs/Spark/gems/join-split/join.md) to increase your performance.

   Control the broadcast threshold based on your cluster size by setting the `spark.sql.autoBroadcastJoinThreshold` property to a value greater than 10MB. To learn more, see [Performance Tuning](https://spark.apache.org/docs/latest/sql-performance-tuning.html).

1. Remove **Order By** and deduplicate components wherever you don't need it, and choose the `Row to keep` carefully in the [Deduplicate gem](docs/Spark/gems/transform/deduplicate.md).

   The `First` or `Last` values for the `Row to keep` parameter is more expensive compared to `Any`.

1. Set an appropriate value for the `spark.sql.shuffle.partitions` property.

   Use the [Repartition gem](docs/Spark/gems/join-split/repartition.md) to repartition your Source gem to an appropriate value.
