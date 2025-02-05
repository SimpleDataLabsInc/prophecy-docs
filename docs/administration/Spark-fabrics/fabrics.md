---
title: Set up Spark fabrics
description: Connect Prophecy to an external execution engine
id: Fabrics
sidebar_class_name: hidden
tags: [Livy, Fabrics, Execution]
---

A [fabric](docs/concepts/fabrics/fabrics.md) is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production.

When you connect to a fabric, Prophecy has the same level of access as the user authenticated for that fabric. Therefore, if you need to do something like create a cluster in Prophecy, you will first need the permission to create clusters **in your respective execution environment**.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
