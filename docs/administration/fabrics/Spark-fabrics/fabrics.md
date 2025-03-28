---
title: Spark fabrics
description: Connect Prophecy to an external execution engine
id: Fabrics
sidebar_class_name: hidden
tags: [Livy, Fabrics, Execution]
---

A [fabric](docs/getting-started/concepts/fabrics.md) is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production.

Prophecy provides a Prophecy-managed Spark fabric that can get you started with building your pipelines. However, you can also create your own fabrics to connect to other execution environments, such as a Databricks workspace.

When you connect to **external** environments, Prophecy has the same level of access as the user authenticated for that fabric. Therefore, if you need to do something like create a cluster in Prophecy, you will first need the permission to create clusters **in your respective execution environment**.

:::info Diagnostics
To troubleshoot fabric creation or connection issues, take a look at the fabric [diagnostics](docs/getting-help/diagnostics.md).
:::

## What's next

Click on a tile below to learn how to create a fabric for a certain provider.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
