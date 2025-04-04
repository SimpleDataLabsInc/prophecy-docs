---
title: Build Shareable Subgraphs
id: shareable-subgraphs
slug: /engineers/shareable-subgraphs
description: Sharable Subgraphs within the project and to other projects
tags: []
---

Users can share published [Subgraphs](/engineers/subgraph) across their pipelines and projects. This allows central Data Platform teams to build reusable code to cover a wide variety of business needs, such as Encryption/Decryption or Identity Masking, and have their "consumers" (the Data Practitioners) take a dependency on that reusable code.

## Configurable Subgraphs

User can add [configuration variables](/engineers/basic-subgraph#subgraph-configurations) to reusable Subgraphs and use these in the gems of the Subgraph.

:::info
Please note only Subgraph Configs can be used inside a Subgraph. Pipeline config variables cannot be used in gems inside a Subgraph. Similarly, Subgraph configs are not available to other outside gems of the pipeline.
These Subgraph configs can only be edited from inside the Subgraph.

Also, Subgraph configurations will be shown as part of pipeline configs.
:::

Please see this video for an example

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/0aead9d3957b40d48574e3dfd09d2740" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

## Sharing Subgraphs Across Pipelines

Once a subgraph is published, the user can simply add it to any other pipeline of the same project.
Please see this video for an example

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/c7a5bc325e574c8181cb011f193fd1d4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

## Sharing Subgraphs Across Projects

Once a project (let's call it _BaseProject_) is Released and added as a dependency to another project(let's call it _AppProject_), all Subgraphs from _BaseProject_ are available in all pipelines of _AppProject_.

Please see this video for an example

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/dc107ed4ebf54fa08a832e7fb40f4c03" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>
