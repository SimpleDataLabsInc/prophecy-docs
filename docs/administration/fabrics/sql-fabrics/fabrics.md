---
title: SQL fabrics
description: Perform SQL computations on a SQL warehouse
id: Fabrics
sidebar_class_name: hidden
tags: [fabric, SQL, execution, snowflake, databricks]
---

SQL [fabrics](docs/getting-started/concepts/fabrics.md) let Prophecy connect to SQL warehouses for storage and compute engine capabilities.

:::info
You can only run [models](/engineers/models) on SQL fabrics. You cannot run pipelines on SQL fabrics.
:::

## Job scheduling

If you use a SQL fabric, you can set up jobs on a regular basis using:

- [Apache Airflow](/engineers/airflow)
- [Databricks Jobs](/engineers/databricks-jobs)

## What's next

Prophecy supports the following providers for SQL fabrics.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
