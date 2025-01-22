---
title: Build Shareable Datasets
id: shareable-datasets
description: Shareable Datasets within the project
tags: []
---

Users can share a [Dataset](/docs/concepts/project/dataset.md) across their pipelines, but use caution when sharing across Projects.

## Across pipelines

Once a User adds a new Dataset as a Source or Target in their pipeline, that Dataset is immediately available to be used in all pipelines of that project. A User can use that Dataset as a Source or Target in other pipelines.
Once a Dataset is modified in one pipeline, it gets modified in all the pipelines using it (in that Project) automatically.

For example:

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/2359ead915f5459381bcdf345ed76993" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

## Across Projects

**Datasets** in Prophecy are pointers to actual data in your data storage solution. Prophecy doesn’t store any data, and we recommend not to treat Datasets in Packages as “data products.” That is, we recommend not to configure Datasets in a Package. Instead, leave Datasets configurable in the project where they are used. Importantly, access to the actual data remains dependent upon the user’s personal access token or username/password credential. To access the data in a new project, the user must select a Fabric with access permissions for that data.
