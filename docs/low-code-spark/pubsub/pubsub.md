---
title: Publish-Subscribe Data Projects
description: pubSub
id: pubsub
tags: []
---

One of the best practices during Data-Project development is to _Use standardized components_. Prophecy enables this standardization in a few ways:

1. Datasets
2. User-Defined Functions
3. Reusable Subgraphs
4. Configured Pipelines

`Pipeline`s, `Dataset`s, `Subgraph`s and `User-Defined Function`s can now be shared across multiple projects and teams. This allows central Data Platform teams to build reusable code to cover a wide variety of business needs, such as Encryption/Decryption or Identity Masking, and have their "consumers" (the Data Practitioners) take a dependency on that reusable code. Since it's all versioned, when the reusable code changes, the downstream consumers will be notified and can update accordingly.

Data admins can also _Create deployment templates for the pipelines_ that have the best practices baked into them for authorization, notifications,
handling of errors, and logging the correct information.

Prophecy allows the Data Platform teams to create and **Publish** these standards to the various teams.

To share these across projects, they would need to release the Project which has these Pipelines/UDFs defined.

Please refer [here](../../metadata/Git#how-to-release-a-branch) for how to release a Project.

## Project Dependency

Once a project is released, It can be added as a dependency in other projects.

### Adding a dependency while creating Project

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/a3d98f27a6734338924dff68cff4e825" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

### Adding a dependency to an existing Project

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/67eb813904214b85a376d97ffab9ca20" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

### Accessing Dependency Project

Once dependencies are Added to a Project, User will be able to see all Pipelines/Datasets/Subgraphs available from that project in Project Browser.
Please see below video for example.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/35dd7ca85426420fbc5143f803e4939f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

### Update from Dependency Project

If there are changes made to existing Subgraphs/UDFs etc or added new ones, to reflect these in Dependent Projects, user would need to release the project. After Release a new version, they would see an option to update Dependency in project browser. Please refer below video for same.

<div style={{position: 'relative', 'padding-bottom': '56.25%', height: 0}}>
   <iframe src="https://www.loom.com/embed/107797cc6cdd4558ad5b99fdfb740322" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}></iframe>
</div>

Please see below links for details on sharing UDFs, Subgraphs, Datasets and Pipelines.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
