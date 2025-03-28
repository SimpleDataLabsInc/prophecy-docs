---
title: Subgraph
id: subgraph
slug: /engineers/subgraph
description: Working with Subgraphs
tags: []
todo: true
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

Subgraph gems let you take multiple different gems and wrap them under a single reusable parent gem. In other words, they allow you to decompose complex logic into reusable components. See how to **create** and **publish** a Subgraph in the video below.

<div class="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
<div class="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
<iframe src="https://fast.wistia.net/embed/iframe/e1q56n0gjb?seo=false?videoFoam=true" title="Getting Started With SQL Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe>
</div></div>
<script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>

## Types of Subgraphs

There are three types of Subgraph available by default. The [Basic](/Spark/gems/subgraph/basic-subgraph) Subgraph is a great introduction to using Subgraphs.

| Name                                                                | Description                                                                                                                     |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [Basic](/Spark/gems/subgraph/basic-subgraph)                        | Captures one or more gems within a pipeline to reuse across other pipelines and projects.                                       |
| [Table Iterator](/Spark/gems/subgraph/table-iterator)               | Iterates over one or more gems for each row of the first input DataFrame. Table iterator is available for Python projects only. |
| [Novel Type](/engineers/subgraph/#create-your-own-type-of-subgraph) | Apply any custom logic to the group of gems present inside the Subgraph.                                                        |

## Create your own type of Subgraph

You can also create your own Subgraph to apply any custom logic on the group of gems present inside it. For example Try Catch, other kinds of Iterators, etc.

To create your own Subgraph type, Go to the project you want to create the gem in.
Click on the **(1) Create Gem** button. This will open up the **Create Gem** Form. Provide a **(2) Name** for the gem, and select the mode as **Control Flow Gem**.

![Create_subgraph_gem](img/create_subgraph_type.png)

This takes to you the gem code editor with a basic structure of the code generated. Here you can start modifying your dialog, validation and the actual logic of the gem.
Read [here](/docs/extensibility/gem-builder/spark-gem-builder.md) for more details of the gem code.

The newly constructed Subgraph gem can be utilized within any pipeline of this project, accessible through the Subgraph menu as demonstrated below.
Furthermore, you have the option to Release this project, enabling its use as a dependency in other projects, thus incorporating the created gem into various projects.
Read [here](/docs/extensibility/package-hub/package-hub.md) for more details on project as a dependency.

![Use_subgraph](img/Use_new_subgraph.png)

## What's next

To learn more about Spark Subgraphs, see the following pages:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
