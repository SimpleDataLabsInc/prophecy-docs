---
title: Pipelines
id: pipelines
slug: /analysts/pipelines
description: Use pipelines in SQL projects
tags:
  - SQL
  - pipeline
  - analyst
---

In Prophecy, data pipelines are designed to facilitate efficient data movement and transformation. In SQL projects, these pipelines execute within a [Prophecy fabric](docs/core/prophecy-fabrics/prophecy-fabrics.md) that orchestrates operations using [Prophecy Automate](/analysts/pipeline-execution) in conjunction with your chosen SQL warehouse.

## Pipeline creation

To create a new pipeline, navigate to the **Create Entity** page in the left sidebar. You can also create pipelines directly within an open project.

The following table describes the parameters you must provide when you create a pipeline.

| Parameter      | Description                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project        | The project where the pipeline will live.                                                                                                          |
| Pipeline name  | The name that identifies the pipeline.                                                                                                             |
| Directory path | The file path where this pipeline information will be stored in the project Git repository.<br/>The default location is the `pipelines` directory. |

## What's next

Learn more about pipeline runs and configurations in the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
