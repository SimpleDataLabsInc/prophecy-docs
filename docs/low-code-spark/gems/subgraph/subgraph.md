---
title: Subgraph
id: subgraph
description: Working with Subgraphs
tags: []
todo: true
---

Subgraphs allow you to take multiple different Gems and wrap them under a single reusable parent Gem. It allows the user to decompose complex logic into reusable components and simplify the Data Engineering process.

There are two types of Subgraphs available by default.

| Name                               | Description                                                                |
| ---------------------------------- | -------------------------------------------------------------------------- |
| [Basic Subgraph](./basic-subgraph) | Allows you to group and reuse Gem logic                                    |
| [Table iterator](./table-iterator) | Allows you to loop over a group of gems for each row of incoming DataFrame |

## Subgraph Configurations

Like [Pipeline Configurations](../../configuration/configuration.md), In Subgraph Configs, User can define values that can be set at the Subgraph level and then be accessed inside any component in the Subgraph.
These will also reflect under Configurations of Pipelines using these Subgraphs, but they can only be edited from Subgraph configs.

## Create your own type of Subgraph

You can also create your own Subgraph to apply any custom logic on the group of Gems present inside it. For example Try Catch, Different kinds of Iterators, etc.
To do this, simply click on the + icon on thr right of Gems in the Project Browser.

This will take you to a **Create Gem** form.
