---
title: Projects
id: project
description: Keeping your Pipelines, Datasets and Jobs under (source) control
sidebar_position: 1
tags:
  - concepts
  - project
---

A **Project** in Prophecy is the core unit for developing, organizing, and deploying data workflows to production. It encompasses all the components needed for building and running data processes.

When you create a project, you must choose a **Project Type**: Spark/Python, Spark/Scala, or SQL.

Spark projects contain [Pipelines](docs/concepts/project/pipelines.md), [Datasets](docs/concepts/dataset.md), and [Jobs](docs/Orchestration/Orchestration.md). SQL Projects contain [Models](docs/concepts/project/models.md), [Datasets](docs/concepts/dataset.md), and [Jobs](docs/Orchestration/Orchestration.md). You can view these components in the **Metadata** tab of the Prophecy user interface.

## Projects and Git

Each project must be stored in a Git repository. You can either choose to host your project on a Prophecy-managed repository, or you can connect your own external repository, like one on GitHub. Additionally, all assets within a Project (like Pipelines, Models, Datasets, and Jobs) are stored as code in the Project's Git repository.

Open any Pipeline (left) or Model (right) in your Project. Simply toggle from visual to code to see the underlying code for that Pipeline or Model, as well as the rest of the Project components.

![Visual To Code](img/code-to-visual.png)

Version control lets users and teams collaborate on Projects, contribute simultaneously, and reuse code.

## Project lifecycle

### Create new project

Starting from the [Create Entity](https://app.prophecy.io/metadata/create) page, click `Project`. You'll have the option to create a new Project or import an existing Project.

![Create Entity page](./img/project-create-import.png)

In the `Create Project` pane you can set the name, output language (Python, Scala or SQL) and which team the project belongs to. Visually designed pipelines will generate code in the selected Project output language. Advanced users can design expressions in SQL, Python, or Scala, and the project will _generate code_ in the Project output language.

![Project language](../img/project_language.png)

:::caution

It is not currently possible to switch the output language of a Project after it has been created. Choose the appropriate language for your environment.

:::

Add [Git credentials](./../../metadata/Git) in [Settings](https://app.prophecy.io/metadata/settings) or connect new Git credentials as below. Specify the desired repository and path accessible to your Git user to store the Project. For new projects, specify an empty repository or an empty path within an existing repository. For imported projects, select a repository, forked repository, or repository path that already contains the relevant project code.

![New project](../img/new_project_git_credentials.png)

### Create, edit and commit the Pipeline

When you **create a new Pipeline**, you have to choose the **branch** where it will be created - an existing one or a new one.

Then you will **develop** this Pipeline - you will make **changes** and **commit** them in this branch multiple times.
The commit dialog opens when you click the bottom bar - orange color indicates uncommitted changes. When you **commit**, your changes are preserved in Git and are pushed to your **branch**.

![Commit](../img/commit.png)

### Integrate changes

Prophecy provides a standard and recommended mechanism for using Git based development. The four main phases of integrating your changes are: **_Commit_**, **_Pull_**, **_Merge_**, **_Release_**. A standard development pattern looks like this, though other mechanisms like forking are also supported:

![Project deploy](../img/project_deploy.png)

Let's go over each phase in detail.

#### Commit

A **_Commit_** represents changes to one or more files in your Project. They are what allow you to keep and view the history of all the changes that have happened while developing your Pipelines. You can create a commit using either the [Project Commits](#project-commits) page or within the Pipeline editor itself. Committing the files saves the changes you've been working on into your Branch and pushes those changes to your Git repository so that it's safely stored.

When committing from the [Project Commits](#project-commits) page, you'll see the following:

![Project commit page](../img/project_do_commit.png)

|     | Name           | Description                                                                                  |
| :-: | -------------- | -------------------------------------------------------------------------------------------- |
|  1  | Change log     | This is a log of all the changes that have been made to (or merged into) the Current Branch  |
|  2  | Changed files  | This is a list of all of the changed files that will be committed                            |
|  3  | Reset          | If you need to reset all changes that have happened since the last commit, click this button |
|  4  | Commit message | The message to include as part of the commit                                                 |

#### Pull

**_Pull_** brings changes that have occurred in remote Branches into the Prophecy-local branches. If you have any upstream changes that need to be **_pull_**ed into the local branches you'll see the following:

![Project pre pull page](../img/project_pull.png)

Click the button to pull the changes and you'll see the **_Pull_** view:

![Project pull view](../img/project_pull_view.png)

#### Merge

**_Merge_** will take the changes in the _Current Branch_ and merge them into the _Base Branch_. Your changes will become part of the _Base Branch_ and will be available to anyone else who's work is based on the _Base Branch_. It is steps 3 and 5 of [this diagram](#development-and-deployment).

![Project merge](../img/project_merge.png)

Click the **_Merge_** button to merge the changes and push them back to your Git repository.

#### Release

**_Release_** tags a particular commit in the _Base Branch_ with a user-specified version (step 6 in [this diagram](#development-and-deployment)). This allows you designate a new version as ready for production, or inform users who may be subscribed to Datasets defined within your Project that there might be changes in the published Dataset.

![Project release](../img/project_release.png)

|     | Name             | Description                                                                                                                                                       |
| :-: | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  1  | Commit selection | Pick which commit will be tagged for release                                                                                                                      |
|  2  | Release notes    | Free-form notes for the release                                                                                                                                   |
|  3  | Version          | Enter whatever you'd like here. Best practices exist such as [Semantic Versioning](https://semver.org/), but you're free to use whatever matches your environment |
