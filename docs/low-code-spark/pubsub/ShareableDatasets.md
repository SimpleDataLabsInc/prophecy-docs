---
sidebar_position: 4
title: Shareable Datasets
id: shareable-datasets
description: Shareable Datasets within the project and to other projects
tags: []
---

Users can share a [Dataset](../../concepts/dataset.md) across their Pipelines and Projects.

## Across Pipelines

Once a User adds a new Dataset as a Source or Target in their Pipeline, that Dataset is immediately available to be used in all Pipelines of that project. A User can use that Dataset as a Source or Target in other pipelines.
Once a Dataset is modified in one Pipeline, it gets modified in all the Pipelines using it (in that Project) automatically.

For example:

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/2359ead915f5459381bcdf345ed76993" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

## Across Projects

Once a Project (let's call it _BaseProject_) is Released and added as a [Dependency](/low-code-spark/pubsub#project-dependency) to another Project (let's call it _AppProject_), all Datasets from _BaseProject_ are available in all Pipelines of _AppProject_.

Any Modification to existing Datasets or new Datasets will be updated in _AppProject_, only after a new Release in _BaseProject_, and updating the same in _AppProject_.

Please see the below video for an example:

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/0b631a754ea247d0ae7e35310aa0515c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>