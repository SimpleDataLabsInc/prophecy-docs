---
title: Sources and Targets
id: source-target
slug: /analysts/source-target
description: Source and target gems
tags: []
---

Table, Source, and Target gems define how Prophecy pipelines read data from a source or writing data to a destination. These gems handle interactions with both external systems and the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/#connections) defined in your Prophecy fabric.

Regardless of gem type, none of the data you read and write in a pipeline is persisted in Prophecy. All data is transformed in memory, and no data gets written to disk.

## Gem types

Prophecy supports different gem types for reading from and writing to data sources.

| Gem type   | Data provider   | Description                                                                                                                                                                                                         |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Table gem  | Data warehouse  | Represents datasets in the in the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/#connections) of a Prophecy fabric. Tables can act as sources, targets, or intermediate stages in a pipeline. |
| Source gem | External system | Represents data (tables or files) stored in external platforms outside the SQL warehouse. Source gems provide input to a pipeline.                                                                                  |
| Target gem | External system | Represents data (tables or files) stored in external platforms outside the SQL warehouse. Target gems consume output from a pipeline.                                                                               |

:::note
Source and target gems cannot serve as intermediate steps in a pipeline. Source gems only have output ports, and Target gems only have input ports.
:::

:::caution
Pipeline performance depends on how your connections are configured. Processing native tables within the warehouse is more efficient than accessing external sources. Avoid setting up an external connection that points to the same warehouse defined in your fabric. This redundancy can lead to slower performance.
:::

## Data formats

Prophecy supports the following data formats:

- Tables from the connected SQL warehouse. These are accessed with Table gems.
- Tables from external systems. These are accessed with Source and Target gems.
- Files from external systems. These are accessed with Source and Target gems.

To use external systems, you need to set up corresponding [connections](docs/analysts/development/connections.md).

## What's next

View the complete set of sources and targets in the following sections.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
