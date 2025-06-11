---
title: Package Hub
id: package-hub
slug: /engineers/package-hub
description: Create and Share Reusable Pipeline Components
tags: [package-hub]
---

To extend the functionality of a project, you can download **packages** from the Package Hub. Packages are **versioned projects** that contain shareable components, such as pipelines, gems, business rules, user-defined functions, jobs, macros, models, and more.

The Package Hub includes Prophecy-provided packages and packages that you can publish yourself.

![Package Hub landing page](img/package-hub.png)

The Template Hub provides pipeline templates you can run to further your understanding of how our gems work. Then, if you want to do the same thing in your project, you can copy it over to your own environment.

![Template Hub landing page](img/template-hub.png)

## Add to the Package Hub

To create reuseable components for yourself and others:

1. Create a project.

1. Build the component(s).

1. [Release and deploy](/engineers/deployment) the project.

1. Share your project with other teams in the Access tab of the [project metadata](docs/getting-started/concepts/project.md) page.

1. Publish the project to the Package Hub.

![Publish to Package Hub](img/package-hub-publish.png)

Importantly, if you add a project to the Package Hub, **all of its components will be available for reuse**.

:::info
Packages in the Package Hub are only available to users in teams that you have shared the project with.
:::

## Update package

When you update a project that is published as a package, the changes will only be available in the Package Hub when you [release and deploy](/engineers/deployment) the project as a new version.

:::note
The release must be made from the branch specified on project creation (usually `main` or `master`). This ensures that teams will review code before releasing the project.
:::

## Use package in project

There are a few different ways to add a package to a project:

- Open the project and click **+** in the Gem Drawer.
- Open the project dependencies and add a dependency.
- Open the package in Package Hub and select **Use Package**.

![Import from Package Hub](img/package-hub-import.png)

You cannot change package components that have been imported in a project. You can only change the components from the source project.

## Use a pipeline template

You can use a pipeline template if you are a new Prophecy user in version 4.1 and above.

To use a pipeline template:

1. At the top left, select the **Template Hub** tab.

1. Click on a template you would like to run.

   Each template contains several tables, and at least one pipeline.

   To learn about what each sample pipelines does, see [Template Hub](/analysts/template-hub).

1. Select and run a pipeline.

   :::note
   Prophecy automatically attaches a fabric for you to use.
   :::

## Prophecy-provided packages

Explore Prophecy-provided packages in the Package Hub to find extra gems and pipelines that may be helpful for your projects. For example, the `ProphecyDatabricksSqlSpatial` package includes gems like [CreatePoint](/analysts/create-point) and [Distance](/analysts/distance), making it easy to work with spatial data in your pipelines.

Gems that pertain to certain Prophecy-provided packages are specified in the documentation.

## FAQ

**Q: I shared a dependency to a team, but we don’t see any email notification.**
A: The share “invitation” is not sent via email. Rather, the team would be able to add that project as a dependency to their new or existing projects.

**Q: I shared a dependency to a team, but they don’t see the package listed when they try to add as a dependency.**
A: Be sure the new project and dependent project are using the same language, like Scala or Python. If the new project is a Scala project, only Scala Packages can be added as dependencies.

**Q: How do I use subgraphs from a dependency?**
A: Like pipelines, subgraphs can be used by dependent projects via [configurable variables](/engineers/shareable-subgraphs).

**Q: How can I change how the package works for only my project?** A: If you want to tweak the functionality of a package for your own needs without affecting others, you can **clone** the packaged project and make your changes. This way, you will not change the original package.

## What's next

Check out our in-depth tutorials on creating shareable components!

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
