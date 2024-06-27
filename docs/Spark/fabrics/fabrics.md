---
title: Prophecy Fabrics
description: Fabrics define execution engines
id: Fabrics
tags: [Livy, Fabrics, Execution]
---

A Fabric is a logical execution environment. Teams can organize their data engineering into multiple environments such as development, staging, and production.

## Databricks Fabric

[Databricks Configurations](/docs/Spark/fabrics/create-a-fabric.md#databricks)

## Databricks Execution

[Execution on Databricks](/docs/Spark/execution/databricks-clusters-behaviours.md)

[Interactive Execution](/docs/Spark/execution/interactive-execution.md)

[Execution Metrics](/docs/Spark/execution/execution-metrics.md)

## Fabrics Using Apache Livy

[Amazon EMR Configurations](/docs/Spark/fabrics/emr-fabric.md#create-a-fabric-to-connect-prophecy-to-emr)

[Azure Synapase Analytics Configurations](/docs/Spark/fabrics/synapsefabric.md#configure-connectivity-between-synapse-and-prophecy)

[Google Cloud Dataproc Configurations](/docs/Spark/fabrics/dataproc.md)

## Execution on Livy

[Execution on Livy](/docs/Spark/execution/execution-metrics-on-livy.md)

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
