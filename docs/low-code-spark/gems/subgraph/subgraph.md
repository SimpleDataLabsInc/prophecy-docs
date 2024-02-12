---
title: Subgraph
id: subgraph
description: Working with Subgraphs
tags: []
todo: true
---

Subgraphs allow you to take multiple different Gems and wrap them under a single reusable parent Gem. It allows the user to decompose complex logic into reusable components and simplify the Data Engineering process.

There are two types of Subgraphs available by default.

| Name                               | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| [Basic Subgraph](./basic-subgraph) | Captures one or more Gems to reuse within this Pipeline and to share across Pipelines and Projects. |
| [Table iterator](./table-iterator) | Iterates over one or more Gems for each row of the first input DataFrame                            |

## Create your own type of Subgraph

You can also create your own Subgraph to apply any custom logic on the group of Gems present inside it. For example Try Catch, other kinds of Iterators, etc.

To create your own Subgraph type, Go to the project you want to create the Gem in.
Click on the **(1) Create Gem** button. This will open up the **Create Gem** Form. Provide a **(2) Name** for the Gem, and select the mode as **Control Flow Gem**.

![Create_subgraph_gem](img/create_subgraph_type.png)

This takes to you the Gem code Editor with a basic Structure of the code generated. Here you can start modifying your Dialog, validation and the actual Logic of the Gem.
Read [here](/docs/package-hub/package-builder/gem-builder.md) for more details of the Gem code. More detailed docs on writing Subgraph Gems to follow soon.

The newly constructed Subgraph Gem can be utilized within any Pipeline of this Project, accessible through the Subgraph menu as demonstrated below.
Furthermore, you have the option to Release this project, enabling its use as a dependency in other projects, thus incorporating the created Gem into various projects.
Read [here](/docs/package-hub/package-hub.md) for more details on project as a dependency.

![Use_subgraph](img/Use_new_subgraph.png)
