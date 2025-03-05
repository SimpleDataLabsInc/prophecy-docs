---
title: Extensibility
id: extensibility
description: Add custom functionality to your projects
tags: []
---

Prophecy projects are highly extensible, meaning you can add additional capabilities and functionalities beyond our out-of-the-box offerings. When you build new components in Prophecy, you can package, version, and share them for collaboration and control.

## Package Hub

To extend the functionality of a project, you can download packages from the Package Hub. Packages are **versioned projects** that contain shareable components, such as pipelines, gems, user-defined functions, business rules, seeds, macros, and more!

This means that if you want build a component and share it, you must:

1. Create a project.
1. Build the component.
1. Publish the project.
1. Add the project to the Package Hub.

Importantly, if you add a project to the Package Hub, **all of its components will be available for reuse**.

## Dependencies

When you import a package into your project, you import it as a **dependency**. As new package versions are published, you have the option to update the dependencies manually inside your projects.

## Gem Builder

The Gem Builder can help you build custom gems for individual or shared use. SQL gems are essentially dbt macros that have a visual view. To learn more, visit [Gem Builder for SQL](/extensibility/gem-builder/sql-gem-builder).
