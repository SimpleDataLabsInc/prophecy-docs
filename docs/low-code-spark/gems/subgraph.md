---
sidebar_position: 5
title: Subgraph
id: subgraph
description: Working with Subgraphs
tags: []
todo: true
---

Subgraphs allow you to take multiple different Gems and wrap them under a single reusable parent Gem. It allows the user to decompose complex logic into reusable components and simplify the Data Engineering process.

## Subgraph Configurations

Like [Pipeline Configurations](../configuration.md), In Subgraph Configs, User can define values that can be set at the Subgraph level and then be accessed inside any component in the Subgraph.
These will also reflect under Configurations of Pipelines using these Subgraphs, but they can only be edited from Subgraph configs.
