---
title: Extensibility
id: extensibility
slug: /analysts/extensibility
description: Add custom functionality to your projects
tags: []
---

Prophecy projects are highly extensible, meaning you can add additional capabilities and functionalities beyond our out-of-the-box offerings. When you build new components in Prophecy, you can package, version, and share them for collaboration and control.

## Dependencies

Projects can import various types of dependencies that add functionality to your project. There are three types of dependencies for SQL projects:

- Prophecy Project. When you import a project as a dependency, you gain access to all its components, including pipelines, gems, and functions, for use in your own project. If a new version of the project is [published](docs/analysts/version-control/version-control.md), you can update your dependency version to take advantage of the latest changes.
- GitHub. Dependencies can be saved in GitHub repositories and imported from there.
- [DBT Hub](https://hub.getdbt.com/). Packages in the DBT hub can be used to extend typical SQL functionality. If the package contains macros, you can use them via the [Macro](docs/analysts/development/gems/custom/macro.md) gem.

To add a dependency to your project:

1. Open the **Options** (ellipses) menu in the project header.
1. Select **Dependencies**.
1. Click **+ Add Dependency**.
1. Choose the dependency type (Project, GitHub, or DBT Hub).
1. Fill in the required fields to import the correct package version.
1. Click **Create**.
1. Click **Reload and Save** to download the dependencies.

Dependencies will appear in the bottom left of your project. Expand a dependency to view the various functions, gems, and other components that it may contain.

<!-- ![Project dependencies](img/sql-project-dependencies.png) -->

You can also browse packaged projects in the Package Hub and import them from there. Learn more about the Package Hub in the following section.

## Package Hub

To extend the functionality of a project, you can download packages from the Package Hub. Packages are **versioned projects** that contain shareable components, such as pipelines, gems, user-defined functions, business rules, seeds, macros, and more!

This means that if you want build a component and share it, you must:

1. Create a project.
1. Build the component.
1. Publish the project.
1. Add the project to the Package Hub.

Importantly, if you add a project to the Package Hub, **all of its components will be available for reuse**.

## Gem Builder

The Gem Builder can help you build custom gems for individual or shared use. SQL gems are dbt macros that have a visual (UI) layer. To learn more, visit [Gem Builder for SQL](https://docs.prophecy.io/sql/gem-builder).
