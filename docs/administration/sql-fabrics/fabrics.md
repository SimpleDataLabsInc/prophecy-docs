---
title: SQL fabrics
description: Perform SQL computations on a SQL warehouse
id: Fabrics
sidebar_class_name: hidden
tags: [fabric, SQL, execution, snowflake, databricks]
---

SQL [fabrics](docs/getting-started/concepts/fabrics.md) let Prophecy connect to SQL warehouses for storage and compute engine capabilities. Prophecy supports connections to Databricks and Snowflake SQL warehouses.

## When to use SQL fabrics

When working with SQL projects in Prophecy, you have the option to use either a [Prophecy fabric](docs/administration/prophecy-fabrics.md) or a SQL fabric. The choice depends on whether your project requires external data integration or is confined to computations within a SQL warehouse. Use the following table to determine which fabric you should use.

| Feature                                            | Prophecy fabric | SQL fabric |
| -------------------------------------------------- | --------------- | ---------- |
| Compute models in your project                     | Yes             | Yes        |
| Ingest data from external sources                  | Yes             | No         |
| Send data to external destinations                 | Yes             | No         |
| Operates entirely within a connected SQL warehouse | No              | Yes        |
| Requires Prophecy runtime                          | Yes             | No         |

## Job scheduling

If you do not want to use Prophecy-managed orchestration, you can set up jobs on a regular basis using:

- [Airflow](docs/Orchestration/airflow/setup/setup.md) (Snowflake users).
- [Databricks jobs](docs/Orchestration/databricks-jobs.md) (Databricks users).

## What's next

Click on a tile below to learn how to create a fabric for a certain provider.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
