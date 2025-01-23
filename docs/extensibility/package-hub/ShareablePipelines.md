---
title: Build Shareable Pipelines
id: shareable-pipelines
description: Shareable Pipelines within the project and to other projects
tags: []
---

Users can share the pipelines from one project to another project and run it with a config in the dependent projects.
This way Data admins can _Create deployment templates for the pipelines_ that have the best practices baked into them for authorization, notifications,
handling of errors, and logging the correct information.

An Admin User will create the pipeline in a project, let's call it _Base project_.
They can add config variables to the pipeline, values for which can be provided while using the pipeline in another project called _App project_.

Users can run these pipelines then interactively, or also schedule them in jobs.

To use a pipeline from _Base project_ for interactive runs, the User would need to create a Config in _App project_. Once added, this pipeline would be visible in _App project_.
Please see the below video for interactive runs.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/a0dd8b6c896d4bd8b784ca46c1ecc932" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

:::info
Please note, this pipeline is marked as **read-only** in _App project_. Only configs can be added and edited for this pipeline here in _App project_.
:::

For jobs, you don't need to import a pipeline. When tyou create a job in _App project_ you will be able to select any pipeline from _Base project_ in the pipeline operator. All configs from _Base project_ and _App project_ are then available here in job.

Please see the below video for sharing **Configured Pipelines** in jobs.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/77536ed8e8f149849a1997cd369eaeb4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

:::info

Please note, if a pipeline has a config with the same name in _App project_ and _Base project_, the one in _App project_ would be considered final.
:::

Any Modification to existing pipelines or new pipelines will be updated in _AppProject_ only after Releasing _BaseProject_, and updating the dependency in _AppProject_.
