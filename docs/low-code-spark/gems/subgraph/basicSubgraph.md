---
sidebar_position: 1
title: Basic Subgraph
id: basic-subgraph
description: Basic Subgraph, Group your gems in reusable Parent Gems.
tags:
  - subgraph
  - Reusable
  - Group
---

In a **Basic Subgraph**, you have the capability to encapsulate multiple distinct Gems within a single, reusable parent Gem. This organizational approach enhances the visual clarity of your Pipeline by grouping various sections together under a common parent Gem. Additionally, it empowers users to break down intricate logic into modular components, thereby streamlining the Data Engineering processes.

Furthermore, the ability to [Publish a Subgraph](/docs/package-hub/package-builder/ShareableSubgraphs.md) extends the utility beyond a singular Pipeline. By doing so, you can reuse the encapsulated logic in other Pipelines or Projects, promoting code re-usability and simplifying the overall development workflow.

## Create a Basic Subgraph

To create a Basic Subgraph, Drag and Drop the **(1) Basic** Subgraph Gem from the Subgraph Menu and connect it to any previously created Gems on your canvas.
Once the Gem is added, Click **(2) Open**, to open the subgraph canvas.

![create_basic_subgraph](img/Create_basic_subgraph.png)

Once you are on the canvas, You can start adding Gems to your subgraph by dragging and dropping from the Gems Menu.

## Add/Remove Port

While using a Subgraph, You can control the Input and Output ports as per the requirements. Click on the **(1) Add/Remove Part** Button to open the port settings dialog as shown below.

![add_remove_port](img/subgraph_additional_ports.png)

In this dialog, you can add or remove the Input or Output ports.
To Add an input Put click on **(2) + button**. This will add an input Port.
To remove an Input port, Click the **(3) Delete** icon next to the input port you want to delete.

Similarly, you can control the Output Ports by switching to the **(4) Output** Tab.
As you connect the input and output ports to gems Outside the subgraph, you would be able to see the schema for the port reflected here.

## Subgraph Configurations

Like [Pipeline Configurations](../../configuration/configuration.md), in Subgraph Configs, user can define values that can be set at the Subgraph level and then be accessed inside any component in the Subgraph.
These will also reflect under Configurations of Pipelines using these Subgraphs, but they can only be edited from Subgraph configs.
