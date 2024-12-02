---
sidebar_position: 1
title: Prophecy and the Data Copilot
id: index
sidebar_label: Prophecy
description: Get a little help from Copilot
tags:
  - visual
  - code
  - copilot
---

Prophecy empowers users of all skill levels to excel in data engineering.
Anyone can use the visual interface, especially with the help of the [Data Copilot](./concepts/copilot/), to achieve results that go beyond traditional ETL tools.
Below, we highlight Prophecy's core pillars.

## Visual interface

Prophecy's designer provides a visual drag-and-drop canvas to develop data Pipelines. The visual interface:

- **Is accessible to a variety users.** Users don't need to be experts in Spark or Airflow to leverage the visual interface. Anyone, including data engineers, visual ETL developers, data scientists and data analysts, can develop Pipelines this way.
- **Facilitates productivity.** The visual interface speeds up the Pipeline development process because you can interactively run your transformations at each phase of development.
- **Generates reusable code.** Each component of the Pipeline is automatically compiled into code that you can reuse and customize.

![Data Pipeline](./img/datapipeline.png)

### Gems

One of the core building blocks of visual data Pipelines is what we call [Gems](./concepts/project/gems).
Gems are predefined visual blocks (like Lego pieces) that let you perform a variety of operations including data transformations and storing data.

Prophecy provides dozens of Gems ready to use out of the box. Gems consist of Spark or SQL code, user-defined properties that are populated through the UI, and a function that specifies the visual layout of the Gem. Jump to the section on [Extensibility](#extensibility) to learn about Gem customization.

## Code and DevOps

Running at scale requires applying strong software engineering practices to data refinement. Rapid development and deployment of data pipelines can be achieved by using code stored in Git, maintaining high test coverage, and implementing [continuous integration and continuous deployment](./tutorials/Orchestration/reliable-ci-cd/). In Prophecy, this looks like:

- **Pipelines stored as code.** Prophecy's code editor stores visual data Pipelines as high-quality code on Git.
- **High test coverage.** Prophecy makes test generation and editing easy.
- **Metadata as code.** Metadata is also stored as code on Git. This includes metadata from projects like workflows, schedules, and datasets. It also includes computed metadata such as column-level lineage.

These provide the following benefits:

- **Alignment with DevOps practices.** You can follow DevOps practices in Prophecy such as collaboration, automation, and reviews because of the integration with Git.
- **Zero lock-in.** Prophecy generated code is in 100% open-source format with data Pipelines in Apache Spark format and schedules in Apache Airflow format. This ensures freedom from lock-in and cost management.
- **Git versioning for time travel.** Given that data projects including metadata are stored together on Git, you can traverse across time. For example, you can compare how a value was computed today against how it was computed a month earlier to understand why a breakage has occurred.

## Complete product

In the cloud, data engineering often relies on point products, which forces customer data platform teams to create custom solutions. However, this approach leads to fragmented development, deployment, and metadata management across multiple systems, making it unsustainable in the long term.

Prophecy instead chooses to provide a complete product that lets you:

- Build data Pipelines on Spark.
- Deploy and schedule data Pipelines on Airflow.
- Access unified metadata with search that includes business logic, datasets, execution information.
- View column-level lineage to see how values flow from end to end in the Pipeline.

![Complete](./img/complete.png)

## Extensibility {#extensibility}

Standardization is crucial for scaling, but it's no longer sufficient to rely on a limited set of components, where users are blocked when something falls outside the predefined paradigm.

Because of this, extensibility is at the heart of Prophecy's architecture. In addition to built-in visual operators, custom operators can be defined at any time, including [custom Gems](./Spark/extensibility/gem-builder/). Usually, data platform teams develop these extensions as data products for their organizations. These extensions can include custom connectors and transforms such as an encryption library. Prophecy is also always building new operators to grow our functionality.

![Extensible](./img/extensible.png)
