---
title: Basic subgraph
id: basic-subgraph
slug: /engineers/basic-subgraph
description: Basic Subgraph, Group your Gems in reusable Parent Gems.
tags:
  - subgraph
  - reusable
  - group
---

import Requirements from '@site/src/components/gem-requirements';

<Requirements
  python_package_name=""
  python_package_version=""
  scala_package_name=""
  scala_package_version=""
  scala_lib=""
  python_lib=""
  uc_single="14.3+"
  uc_shared="14.3+"
  livy="3.0.1+"
/>

In a basic subgraph, you have the capability to encapsulate multiple distinct gems within a single, reusable parent gem. This organizational approach enhances the visual clarity of your pipeline by grouping various sections together under a common parent gem. Additionally, it empowers you to break down intricate logic into modular components, thereby streamlining the Data Engineering processes.

Furthermore, the ability to [publish a subgraph](/engineers/build-a-package/#subgraphs) extends the utility beyond a singular pipeline. By doing so, you can reuse the encapsulated logic in other pipelines or projects, promoting code re-usability and simplifying the overall development workflow.

## Create a Basic Subgraph

To create a basic subgraph, drag and drop the **(1) Basic** Subgraph gem from the Subgraph menu, and connect it to any previously created gem on your canvas.

Once you've added the gem, click **(2) Open**, to open the subgraph canvas.

![create_basic_subgraph](img/Create_basic_subgraph.png)

Once you are on the canvas, you can start adding gems to your subgraph by dragging and dropping from the gems menu.

## Add/Remove Port

While using a subgraph, you can control the input and output ports as per the requirements. Click on the **(1) Add/Remove Part** Button to open the port settings dialog as shown below.

![add_remove_port](img/subgraph_additional_ports.png)

In this dialog, you can add or remove the input or output ports.
To add an input put click on **(2) +** button. This will add an input port.
To remove an input port, Click the **(3) Delete** icon next to the input port you want to delete.

Similarly, you can control the output ports by switching to the **(4) Output** Tab.
As you connect the input and output ports to gems outside the subgraph, you would be able to see the schema for the port reflected here.

## Subgraph Configurations

Subgraphs are configurable just like pipelines are [configurable](/engineers/configurations).

For Subgraphs, the configurations can apply in one of two ways:

(1) Pipeline level configurations apply to the subgraph
(2) Specify configurations only for the subgraph

### Pipeline level configurations can apply to the subgraph

Pipeline configs are accessible inside subgraphs by **copying** the config to the subgraph. Checkout the video below to see how this works.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/56j5k1f6ea?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

### Specify configurations only for the subgraph

In subgraph configs, you can define values that can be set at the subgraph level and then be accessed inside any component in the subgraph. These will also reflect under configurations of pipelines using these subgraphs, but they can only be edited from subgraph configs.
