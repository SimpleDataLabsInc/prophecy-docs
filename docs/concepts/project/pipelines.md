---
title: "Pipelines"
id: pipeline
description: Spark Pipelines represent the data journey and can define multiple targets.
sidebar_position: 1
tags:
  - concepts
  - pipelines
---

A `Pipeline` (formerly known as a _Workflow_) is a type of entity within Prophecy that is used to represent the flow of data. They are similar to a map you might use on a road trip: You have a **_Start_** and **_Finish_** (Datasets) and the **_stops_** to make along the way ([Gems](./gems.md)).

## Pipeline list

In the Metadata view of the UI you'll find the [Pipeline list](https://app.prophecy.io/metadata/entity/user/pipelines)

![Pipeline list](img/pipelines/metadata_pipeline_list.png)

Follow the instructions below to create a new one

## Creating a Pipeline

Pipelines can be created using the [Create Entity](https://app.prophecy.io/metadata/create) view.

![Create entity](img/pipelines/create.png)

Clicking the `Pipeline` button will pop up the **Pipeline Creation** UI.

![Pipeline Creation](img/pipelines/create_pipeline.png)

| Field Name  | Description                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project     | Which project to create the `Pipeline` in. This controls who has access to the `Pipeline`, groups `Pipeline`s together for lineage, and allows you to use Datasets already published within that project. |
| Branch      | Which Git branch to use when developing this `Pipeline`.                                                                                                                                                  |
| Name        | `Pipeline` name                                                                                                                                                                                           |
| Mode        | Whether the `Pipeline` will be Batch mode or Streaming                                                                                                                                                    |
| Description | Description for the `Pipeline`. Put whatever you want here that will help others (or yourself) understand the purpose of the `Pipeline`.                                                                  |

## Editing a Pipeline

When editing a `Pipeline`, you'll be using the editor shown below.

![Editing a Pipeline](img/pipelines/edit_pipeline.png)

1. _Pipeline Config_ : Buttons that bring up views related to the configuration of your `Pipeline`:
   1. [Config](/docs/Spark/configuration/configuration.md)
   2. Scheduling
   3. Unit Tests
   4. UDFs/UDAFs
   5. Dependencies
   6. Spark Version
   7. Visual Language
2. _View switch_ : Switch between the Visual development and the Generated Code. **Note:** The generated Code will only update if there are no errors detected in the Visual view.
3. _Fabric Switch_ : Select the [Fabric](/docs/concepts/fabrics/fabrics.md) to use during development, start a new cluster or connect to an existing one
4. _Gem drawer_ : Click to select a category, then click on the Gem you wish to insert into the editor. See [here](./gems.md) for more information on the Gems
5. _Workspace_ : Everything in the middle of the view is the _Workspace_. This is where you'll create and manipulate the Gems that make up this `Pipeline`.
6. _Git Status_ : In Prophecy almost everything is stored in Git, and this is where you can interact with the version control for your Pipeline. See [Projects & Git](/docs/concepts/project/project.md) for more information
7. _Run_ : If you just want to run your `Pipeline` from start to finish, click this button
