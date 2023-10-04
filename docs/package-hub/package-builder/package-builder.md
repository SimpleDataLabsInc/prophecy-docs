---
title: Package Builder
id: Package-builder
description: Build packages using pipeline components
tags: []
---

With **Package Builder**, engineering teams gain an intuitive tool for standardized creation of packaged operations, including Pipelines, Functions, Custom Gems, and more. You can now easily reuse code and enforce best practices across your data operations, eliminating manual and error-prone processes.

Create a Project with any combination of building blocks below. For example, the [custom Gem page](/docs/package-hub/package-builder/gem-builder.md) has detailed instructions on building a custom Gem within a Project. When you commit and release your Project with a version, you are now able to share the released Project as a **Package** dependency. Other teams can then re-use the components. Check out the [Package Hub](/docs/package-hub/package-hub.md) page for a deep dive on using Packages.

## Build shareable components

- **[Pipelines](/docs/package-hub/package-builder/ShareablePipelines.md)** in Packages can be used as templates in new or existing projects. Pass configuration variables to a template Pipeline to re-use in a new Project. For example, read/write from configured table names using a template Pipeline.
- **[Custom Gems](/docs/package-hub/package-builder/gem-builder.md)** in Packages can be dragged and dropped into new or existing projects as you would any Gem. Configure the Custom Gem visually, execute, and view data previews.
- **[Subgraphs](/docs/package-hub/package-builder/ShareableSubgraphs.md)** in Packages can also be used as templates in new or existing Projects, very similar to Pipelines. (A Subgraph is essentially a mini Pipeline that can be called within a Pipeline.)
- **[User Defined Functions (UDFs)](/docs/package-hub/package-builder/ShareableUDFs.md)** are custom functions that can be re-used across projects by calling the function inside the Gem expressions. Sharing UDFs in packages is a feature that will be coming soon after the Prophecy 3.2 release.
- **Jobs** in Packages can be used across projects as a configured instance. Sharing Jobs in Packages is a feature that will be coming soon after the Prophecy 3.2 release.
- **[Datasets](/docs/package-hub/package-builder/ShareableDatasets.md)** in Prophecy are pointers to actual data in your data storage solution. Check this [page](/docs/package-hub/package-builder/ShareableDatasets.md) for our recommendations on sharing Datasets.
