---
title: Subgraph
id: subgraph
description: Work with Subgraphs by grouping your Gems in Parent Gems
tags:
  - subgraph
  - group
  - SQL
---

Subgraph allows you to take multiple distinct Gems and wrap them under a single parent Gem. Doing so can help you decompose complex logic into more manageable components and simplify the Visual view of your model.

## Basic Subgraph

Basic Subgraphs are single-use containers that capture one or more Gems within a model. They are the equivalent of a nested CTE.

If you want to create a complex model with a large set of Transform and Join Gems, you can use a Basic Subgraph to group them into logical groupings. This organizational approach enhances the visual clarity of your model by grouping various sections together under a common parent Gem. Additionally, it empowers you to break down intricate logic into modular components, thereby streamlining the Data Engineering processes.

### Create a Basic Subgraph

You can create a Basic Subgraph the same way you create other Gems.

To create a Basic Subgraph, follow these steps:

1. Drag and drop the **Subgraph** Gem from the Subgraph menu, and connect it to any previously created Gem on your canvas.

![create_basic_subgraph](img/create-subgraph.png)

2. Once you've added the Gem, click on it to open the subgraph canvas.

3. On the subgraph canvas, add Gems to your Basic Subgraph by dragging and dropping from the Gems menu. You can even add a subgraph within the subgraph to create a nested subgraph.

### Run a Basic Subgraph

A Basic Subgraph works just like the sequence of Gems that it contains. You can run a Basic Subgraph to see the output.

To run a Basic Subgraph, follow this step:

- Click on the play button, either on the subgraph canvas or on the Basic Subgraph Gem.

![run_basic_subgraph](img/run-subgraph.png)

:::note

The final node of the Basic Subgraph can have interims.

:::

### Add/Remove Port

A Gem is an operation or transformation that takes one or more tables as inputs. Therefore, Input ports signify the number of tables that a Basic Subgraph is taking in as inputs. There is no limit to the number of Input ports you can have.

While using a Subgraph, you can control the Input ports as per the requirements. However, as with all SQL Gems, there can only be one Output port.

To add an Input port, follow these steps:

1. On the subgraph canvas, click on the **+** button to add new port.
2. Optional: You can click the **Delete** icon next to the input port you want to remove.

![add_remove_port](img/add-remove-subgraph-port.png)

## Code view

Normally from the Code view, we create one Gem per CTE. However, since subgraphs are represented as nested CTEs in code, one subgraph can represent multiple nested SQL statements.

![subgraph_code_view](img/subgraph-code-view.png)

If you'd like, you can create a subgraph from the Code view by writing multiple nested statements. Then toggle back to the Visual view to see an auto-generated Subgraph Gem based on your defined transformations.

## Subgraph Configurations

You can configure your subgraphs by using either:

- Model-level configurations
- Project-level configurations
