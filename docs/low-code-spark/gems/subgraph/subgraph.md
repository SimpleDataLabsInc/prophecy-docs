---
title: Subgraph
id: subgraph
description: Working with Subgraphs
tags: []
todo: true
---

Subgraph allows you to take multiple different Gems and wrap them under a single reusable parent Gem. It allows the user to decompose complex logic into reusable components and simplify the Data Engineering process.

There are two types of Subgraphs available by default.

| Name                               | Description                                                                               |
|------------------------------------|-------------------------------------------------------------------------------------------|
| [Basic Subgraph](./basic-subgraph) | Captures one or more Gems within a Pipeline to reuse across other Pipelines and Projects. |
| [Table Iterator](./table-iterator) | Iterates over one or more Gems for each row of the first input DataFrame                  |

## Create your own type of Subgraph

You can also create your own Subgraph to apply any custom logic on the group of Gems present inside it. For example Try Catch, other kinds of Iterators, etc.

To create your own Subgraph type, Go to the project you want to create the Gem in.
Click on the **(1) Create Gem** button. This will open up the **Create Gem** Form. Provide a **(2) Name** for the Gem, and select the mode as **Control Flow Gem**.

![Create_subgraph_gem](img/create_subgraph_type.png)

This takes to you the Gem Code Editor with a basic structure of the code generated. Here you can start modifying your dialog, validation and the actual logic of the Gem.
Read [here](/docs/package-hub/package-builder/gem-builder.md) for more details of the Gem code.

Once the new Subgraph Gem is built, you can use it in any Pipeline of this Project, from the Subgraph menu as shown below.

![Use_subgraph](img/Use_new_subgraph.png)
