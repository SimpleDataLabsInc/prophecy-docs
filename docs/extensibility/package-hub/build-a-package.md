---
title: Build a Package
id: build-a-package
slug: /engineers/build-a-package
description: Learn how to build a package in Package Hub where you can share datasets, pipelines, subgraphs, and UDFs
tags: []
---

Within Package Hub, you can build your package where you can share [datasets](#datasets), [pipelines](#pipelines), [subgraphs](#subgraphs), and [user-defined functions](#user-defined-functions) across projects.

## Datasets

You can share a [dataset](/engineers/dataset) across your pipelines, but be cautious when you share it across projects.

### Datasets across pipelines

When you add a new dataset as a Source or Target in your pipeline, you can immediately use the dataset in all your pipelines in that project. You can also use that dataset as a Source or Target in other pipelines.

If you modify the dataset in one pipeline, Prophecy automatically modifies the dataset in each pipeline using it.

### Datasets across projects

A dataset in Prophecy points to your actual data in your data storage solution. Prophecy does not store any data, so we recommend not configuring datasets in a package and leaving datasets configurable in the project where you use them.

Importantly, access to the actual data depends on your personal access token or username/password credentials. To access the data in a new project, you must select a fabric with access permissions for that data.

## Pipelines

You can share pipelines from one project to another project and run it with a Config in the dependent projects. This allows data administrators to create deployment templates for the pipelines that use the best practices for authorization, notifications, error handling, and logging information.

### Example scenario

For example, if your data administrator creates a pipeline in a project called `base_project`, they can add Config variables to the pipeline. Then, if you reference `base_project` in another project called `new_project`, you can reference the Config variables in your pipeline from `base_project` in `new_project`.

You can also interactively run pipelines, or schedule them in jobs. If you interactively run a pipeline from `base_project`, you need to create a Config in `new_project`. Then, the pipeline is visible in `new_project`.

For jobs, you do not need to import a pipeline. When you create a job in `new_project`, you can select any pipeline from `base_project` in the pipeline operator. All Config values from `base_project` and `new_project` are then available here in the job.

If you modify anything from an existing or new pipeline, Prophecy updates `new_project` after you release `base_project`, and updates the dependency in `new_project`.

## Subgraphs

You can share published [subgraphs](/engineers/subgraph) across your pipelines and projects. This helps central Data Platform teams to build reusable code to cover a wide variety of business needs, such as encryption, decryption, or identity masking, and have their Data Practitioners depend on that reusable code.

### Configurable subgraphs

To use subgraphs from a dependency, use [configuration variables](/engineers/basic-subgraph#subgraph-configurations). This makes your subgraph reusable and allows you to use these in the gems of the subgraph.

:::info
You can only use subgraph Configs in a subgraph. Pipeline config variables cannot be used in gems inside a subgraph. Similarly, subgraph Configs are not available to other outside gems of the pipeline.

You can only edit subgraph Configs in the subgraph. Also, Prophecy shows subgraph Configs as part of pipeline Configs.
:::

### Subgraphs across pipelines

You can add a subgraph to any pipeline in the same project after you publish it.

To publish a subgraph:

1. Open the subgraph.

1. At the top right corner, click **Publish**.

1. Enter the **Subgrah Name**, **Package Name**, and optinally, the **Description**.

1. Click **Save**.

Notice that the **Publish** button now says **Published (Edit details)**.

### Subgraphs across projects

After you release the subgraph in your current project and add it as a dependency on another project, you can use the subgraph from your current project in your other project.

## User-defined functions

You can share [user-defined functions (UDF)](docs/Spark/functions/user-defined-functions.md) across your pipelines and projects.

### UDFs across pipelines

By default, UDFs in a pipeline are defined at the project level. That means that the UDF is accessible to all pipelines in the project immediately.
As you open a pipeline, Prophecy copies the UDFs to the code of that pipeline. They would also see the same changes reflected in the uncommitted changes for their pipeline.

:::caution
Prophecy only copies the UDF code to the code view after you open the pipeline. This means that if you edit or add a UDF in a pipeline, you see uncommitted changes for another pipeline whenever you open it.  
:::

### UDFs across projects

After you add your UDF as a dependency to another project, you can use all UDFs from your current project in your other project.

If you have UDFs coming from two different projects with conflicting definitions, you will see an error in your **Diagnostics** window in the UDF:

![UDFConflict](./img/UDFConflictError.png)

:::note
Similar to [sharable pipelines](#pipelines), if you modify anything from an existing or new UDF, Prophecy updates your current project after you release the original project, and updates the dependency in your current project.
:::
