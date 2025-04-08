---
title: Lineage
id: lineage
slug: /engineers/lineage
description: Project lineage
tags:
  - metadata
  - lineage
---

Lineage tell us about the life cycle of data. Data lineage is the process of understanding, recording, and visualizing data as it flows from source to destination. This includes all transformations the data underwent along the way.

Knowing the source of a particular dataset is not always enough to perform error resolution, understand process changes, and perform system migrations and updates. Lineage provides the extra contextual information needed to ensure the integrity and confidentiality of data throughout its lifecycle. More specifically, it enables you to:

1. Track errors in data processes.
2. Improve data quality.
3. Perform process changes and system migrations with lower risk and more confidence.
4. Combine data discovery with a comprehensive view of metadata.
5. Implement data governance.

## Navigation

There are two ways to get to the lineage view:

1. Hover over your pipeline in the **Pipeline** tab of the **Metadata** page.
2. Open the **Lineage** page from the left navigation bar.

![How to Open Lineage](img/lineage-open-from-metadata.png)

:::info
Lineage is always computed on-demand directly on the Git code. Therefore, you can do experimental changes in branch and see how it
will affect the overall lineage and rectify errors if any.
:::
