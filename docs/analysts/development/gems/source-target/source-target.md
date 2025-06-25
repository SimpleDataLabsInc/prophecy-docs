---
title: Source and Target
id: source-target
slug: /analysts/source-target
description: Source and target gems
tags: []
---

Source and Target gems define how Prophecy reads and writes data in your pipeline.

There are two types of sources and targets:

- [Tables in your SQL data warehouse](#tables)
- [Sources and targets from external systems](#external-sources-and-targets)

![Source/Target Gem Drawer](img/source-target-analysts.png)

:::caution
When deciding between tables and external sources, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast, while processing external data is slower. **Do not create an external connection that duplicates the primary SQL warehouse connection in your fabric.**
:::

## Tables

Tables are natively read from and written to the SQL warehouse that is configured as your primary SQL connection in a Prophecy fabric. You can add existing tables from your data warehouse to Prophecy, or you can create new tables directly in Prophecy.

| Name  | Description                                                                                                   | Gem Type         |
| ----- | ------------------------------------------------------------------------------------------------------------- | ---------------- |
| Table | Persistent storage of structured data in your SQL warehouse. Faster for frequent queries (indexed).           | Source or Target |
| View  | A virtual table that derives data dynamically from a query. Slower for complex queries (computed at runtime). | Source or Target |
| Seed  | Small CSV-format files that you can write directly in Prophecy.                                               | Source only      |

:::tip
Once you have used a table in a project, you can easily reuse that table as a source. Find your tables in the [Project](/analysts/project-editor) tab of the left sidebar.
:::

## External sources and targets

To use data from outside of your SQL warehouse, you can use external sources and targets. When you connect to an external data source, the data you read and write is not persisted in Prophecy. In other words, all data is transformed in memory—no data gets written to disk.

To use external sources and targets, you need to set up the corresponding [connections](docs/analysts/development/connections.md).

## What's next

View the complete set of source and target gems in the following sections.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
