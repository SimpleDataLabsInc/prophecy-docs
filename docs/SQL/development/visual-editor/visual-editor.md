---
title: Visual editor
id: visual-editor
description: Visual editor
sidebar_position: 4
tags:
  - development
  - visual
---

Prophecy’s visual interface, where data pipelines are built using a drag and drop interface or with SQL code. Business users can visually create their SQL data models with Prophecy's visual canvas, with all their work automatically turning into high-quality SQL code on Git.

## Visual Canvas

The visual canvas is the main place to develop data models.
Open any SQL Project in Prophecy to find the complete end-to-end **Project Lineage**. The Project Lineage provides a quick understanding of how Models refer to other Models, Seeds, or Sources. This quick, high-level project overview is explainable without having to read code.

![ProjectLineage](img/ProjectLineage.png)

The Project Browser displays entities available or used within this Project. Just click the Environment tab to browse through available databases and tables. Each Project connects to a Fabric, or execution environment. This Fabric defines the SQL Warehouse where each Model will materialize a single table or view. There are lots of additional features to learn more about, including configurations and committing code to Git. A single Project page contains lots of capabilities!

From here easily create new models by clicking on the "+" next to the Models pane, or edit existing Models.
![AddModel](img/AddModel.png)

Once a Model is open, the model-editing canvas appears.

![Canvas](img/Canvas.png)

Here we can see the `customers` Model starts with three existing Models. The data is transformed according to Aggregate, SQLStatement, and Join Gems. The available Transformation Gems are available by clicking the dropdown menu. As the Model is being developed, iteratively run and see sample data as well as the relevant logs.

## What's next

To continue developing with the visual editor, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
