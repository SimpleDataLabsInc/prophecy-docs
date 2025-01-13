---
title: Build Shareable Pipelines
id: shareable-pipelines
description: Shareable Pipelines within the project and to other projects
tags: []
---

Users can share the Pipelines from one Project to another project and run it with a config in the dependent Projects.
This way Data admins can _Create deployment templates for the pipelines_ that have the best practices baked into them for authorization, notifications,
handling of errors, and logging the correct information.

An Admin User will create the Pipeline in a Project, let's call it _Base Project_.
They can add config variables to the Pipeline, values for which can be provided while using the Pipeline in another Project called _App Project_.

Users can run these pipelines then interactively, or also schedule them in Jobs.

To use a Pipeline from _Base Project_ for interactive runs, the User would need to create a Config in _App Project_. Once added, this Pipeline would be visible in _App Project_.
Please see the below video for interactive runs.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/a0dd8b6c896d4bd8b784ca46c1ecc932" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

:::info
Please note, this Pipeline is marked as **read-only** in _App Project_. Only configs can be added and edited for this Pipeline here in _App Project_.
:::

For Jobs, a User doesn't need to import a Pipeline. When they create a Job in _App project_ they would be able to select any Pipeline from _Base Project_ in the Pipeline operator. All configs from _Base Project_ and _App project_ are then available here in Job.

Please see the below video for sharing **Configured Pipelines** in Jobs.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/77536ed8e8f149849a1997cd369eaeb4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

:::info

Please note, if a Pipeline has a config with the same name in _App project_ and _Base Project_, the one in _App project_ would be considered final.
:::

Any Modification to existing Pipelines or new Pipelines will be updated in _AppProject_ only after Releasing _BaseProject_, and updating the dependency in _AppProject_.
