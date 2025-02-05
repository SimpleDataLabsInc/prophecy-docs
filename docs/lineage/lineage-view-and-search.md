---
title: Lineage view
id: lineage-view-and-search
description: Project lineage view and search
tags:
  - metadata
  - lineage
  - view
  - search
---

Learn how to navigate through Lineage to better understand your data.

## Lineage search

When you open Lineage from the left navigation bar, you are brought to the lineage search page. Once you enter a search query, you can see a list of matching **entities** and a list of **columns**. You can filter these lists by:

- Entity type
- Project
- Author
- Last modified time period

Once you click an entity or column, the lineage view opens.

![Lineage Search](img/lineage-search-high-level-view.png)

## Lineage view

The lineage view always includes **Summary** and **Zoom In** tabs, though these look different for different entities.

### Summary

The **Summary** tab demonstrates the flow of data through pipelines, models, and datasets (depending on your project type).

Use the **Browse Datasets** panel to search for and select the column or entity that you want to inspect.

![Browse Datasets](img/lineage-browse-dataset.png)

More information can be found when you select a column, such as upstream and downstream transformations.

![Lineage View](img/lineage-column-level-view.png)

### Zoom In

The **Zoom In** tab looks different depending on whether you are inspecting a pipeline or a dataset.

- **For pipelines,** you can see code-level information about each component present in the pipeline. Select a component to view its:

  - Transformation code
  - Input columns
  - Output columns

  ![pipeline zoom-in](img/lineage-pipeline-zoom-in.png)

- **For datasets,** you can find information around all the upstream and downstream transformations (if any) for all the columns of the selected dataset.

  ![Dataset zoom-in](img/lineage-dataset-zoom-in.png)
