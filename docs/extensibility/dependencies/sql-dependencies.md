---
title: SQL dependencies
id: sql-dependencies
slug: /analysts/dependencies
description: Dependency management
tags:
  - dependencies
  - dbt
  - extensibility
---

Dependencies allow you to make use of third-party or custom code in your models and jobs. You can connect dependencies to your SQL projects, and create them from the DBT Hub, GitHub, or another Prophecy project.

## View dependencies

To see all of your project and model dependencies simply open the Manage Dependencies screen by clicking **... > Dependencies**.

![View your dependencies](img/dependencies-view.png)

You can also view your dependencies and get to the same Manage Dependencies screen from the bottom left-hand side of the canvas, under **DEPENDENCIES**.

![View your dependencies](img/dependencies-list.png)

## Add dependency

To add a dependency, first navigate to [Manage Dependencies](#view-dependencies). There you will see a complete list of your dependencies. Click on **+ Add Dependency** to add a new dependency.

You will be taken to the Create Dependency screen, where you can choose to create a dependency from the DBT Hub, GitHub, or another Prophecy project.

![Add a Dependency](img/dependencies-add.png)

After you've defined the Dependency, click **Create**. Prophecy will validate the dependency and add it to the project, making it enabled in the current model, and adding it as a dependency within all of the other models in the project.

When adding dependencies, Prophecy validates that the dependency coordinates are valid and accessible. If that fails, you will see an invalid coordinates error.

:::info Invalid coordinates

In rare cases, your dependency might be only accessible to the cluster or the build system but not Prophecy itself. If you're confident that the dependency is correct, but the validation error shows up, it's safe to press **Save Anyways** to ignore that warning.

:::

### Add a DBT dependency

To add a DBT dependency, you must select **DBT Hub** and provide the dbt package and version number.

![Add a DBT Dependency](img/dependencies-dbt.png)

You can find the DBT package and version number for DBT dependencies from the [dbt Package hub](https://hub.getdbt.com/dbt-labs/). For example, to use the latest `dbt_utils` package, see the [`dbt_utils` package page](https://hub.getdbt.com/dbt-labs/dbt_utils/latest/).

![dbt_utils dependency](img/dependencies-dbt-utils.png)

You can copy and paste the information into the Create Dependency fields.

### Add a GitHub dependency

To add a GitHub dependency, you must select **GitHub** and provide the Git Repository, Revision, and Sub Directory.

![Add a GitHub Dependency](img/dependencies-github.png)

The Revision must be either a Git tag, commit hash, or branch name.

:::caution

Enable **Warn unpinned** only if you want to point to your GitHub Repository without specifying any version, commit, or branch. Doing so may result in unexpected behavior if there are changes to your latest default branch.

:::

### Add a Prophecy project dependency

To add another Prophecy project as a dependency, you must select **Prophecy Project** and select a project from the project dependencies dropdown.

:::note

The Prophecy project must already be released for it to show up in the dropdown.

:::

![Add a Prophecy Project Dependency](img/dependencies-prophecy-project.png)

## Use a dependency

Once you've added a dependency, you can use the following entities from them:

- Models
- Seeds
- Sources
- Functions
- Gems
- Data Tests

![Use a dependency](img/dependencies-use.png)

Simply drag and drop the entity that you'd like to use from the dependencies section onto your Visual canvas.

## Delete dependency

To delete a dependency, first navigate to the dependencies list on the [Manage Dependencies](#view-dependencies) screen. There you can click on a trash icon next to the dependency that you'd like to delete.

:::caution Deleting a dependency

Deleting a dependency deletes it within the whole project, and all inheriting Models. If you're not confident about
the functionality of the other models, it's usually better to disable a dependency, instead of deleting it.

:::

## Storage

All of your dependencies are stored at the project level. When adding a dependency to a single model, by default it becomes available to all the other models within the same project.

Prophecy takes care of pulling the dependencies automatically when a model is run.

Dependencies are saved within your **packages.yml** file.
