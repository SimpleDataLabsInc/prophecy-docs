---
sidebar_position: 1
title: Basic Subgraph
id: basic-subgraph
description: Basic Subgraph, Group your Gems in reusable Parent Gems.
tags:
  - subgraph
  - reusable
  - group
---

In a **Basic Subgraph**, you have the capability to encapsulate multiple distinct Gems within a single, reusable parent Gem. This organizational approach enhances the visual clarity of your Pipeline by grouping various sections together under a common parent Gem. Additionally, it empowers you to break down intricate logic into modular components, thereby streamlining the Data Engineering processes.

Furthermore, the ability to [Publish a Subgraph](/docs/package-hub/package-builder/ShareableSubgraphs.md) extends the utility beyond a singular Pipeline. By doing so, you can reuse the encapsulated logic in other Pipelines or Projects, promoting code re-usability and simplifying the overall development workflow.

## Create a Basic Subgraph

To create a Basic Subgraph, drag and drop the **(1) Basic** Subgraph Gem from the Subgraph menu, and connect it to any previously created Gem on your canvas.

Once you've added the Gem, click **(2) Open**, to open the subgraph canvas.

![create_basic_subgraph](img/Create_basic_subgraph.png)

Once you are on the canvas, you can start adding Gems to your subgraph by dragging and dropping from the Gems menu.

## Add/Remove Port

While using a Subgraph, you can control the Input and Output ports as per the requirements. Click on the **(1) Add/Remove Part** Button to open the port settings dialog as shown below.

![add_remove_port](img/subgraph_additional_ports.png)

In this dialog, you can add or remove the Input or Output ports.
To Add an input Put click on **(2) +** button. This will add an input Port.
To remove an Input port, Click the **(3) Delete** icon next to the input port you want to delete.

Similarly, you can control the Output Ports by switching to the **(4) Output** Tab.
As you connect the input and output ports to gems Outside the subgraph, you would be able to see the schema for the port reflected here.

## Subgraph Configurations

Subgraphs are configurable just like [Pipelines are configurable](../../configuration/configuration.md). For Subgraphs, the configurations can apply in one of two ways: (1) Pipeline level Configurations apply to the Subgraph or (2) Specify Configurations only for the Subgraph

### Pipeline Level Configurations can apply to the Subgraph

Pipeline configs are accessible inside Subgraphs by **copying** the config to the Subgraph. Checkout the video below to see how this works.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/56j5k1f6ea?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Specify configurations only for the Subgraph

In Subgraph Configs, you can define values that can be set at the Subgraph level and then be accessed inside any component in the Subgraph. These will also reflect under Configurations of Pipelines using these Subgraphs, but they can only be edited from Subgraph configs.
