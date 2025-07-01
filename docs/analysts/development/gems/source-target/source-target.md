---
title: Source and Target
id: source-target
slug: /analysts/source-target
description: Source and target gems
tags: []
---

Source and Target gems define how Prophecy reads and writes data in your pipeline. There are two types of sources and targets.

- [Data Warehouse](#data-warehouse): Tables that are native to the SQL warehouse configured in the fabric.
- [External Systems](#external-systems): Tables and files that are stored in data platforms external to the SQL warehouse.

:::caution
Pipeline performance depends on how your connections are configured. Processing native tables within the warehouse is more efficient than accessing external sources. Avoid setting up an external connection that points to the same warehouse defined in your fabric. This redundancy can lead to slower performance.
:::

## Data Warehouse

In Prophecy, datasets stored in the SQL data warehouse defined in your fabric are called **tables**. Prophecy supports three table types, defined in the following table.

| Name  | Description                                                                                                   | Gem Type         |
| ----- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           | Source or Target |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). | Source or Target |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               | Source only      |

:::tip
Once you have created a table in Prophecy, you can reuse that table configuration throughout your project. Find your tables in the [Project](/analysts/project-editor) tab of the left sidebar.
:::

## External Systems

To use data from outside of your SQL warehouse, you can use external sources and targets. When you connect to an external data source, the data you read and write is not persisted in Prophecy. In other words, all data is transformed in memory—no data gets written to disk.

To use external sources and targets, you need to set up the corresponding [connections](docs/analysts/development/connections.md).

## What's next

View the complete set of source and target gems in the following sections.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
