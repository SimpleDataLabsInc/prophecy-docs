---
sidebar_position: 1
title: Dependencies
id: dependencies
description: Dependency management
tags:
  - dependencies
  - maven
  - extensibility
---

Dependencies allow you to make use of third-party or custom code in your data pipelines and jobs. Dependencies can be
written in Java, Scala, or PySpark, and can be connected to your data pipelines by pointing it
to [Maven](https://mvnrepository.com/) or [PyPi](https://pypi.org/) coordinates.

## Storage

![See Dependencies](img/dependencies-storage.png)

All of your dependencies are stored at the project-level. This means, that when adding a dependency to a single
pipeline, by default it becomes available to all the other pipelines, within the same project. However, within each
pipeline you can control, if a given dependency should be enabled or disabled.

Dependencies are natively saved within your build-system files. E.g. if you're using Scala, they're saved in the
**pom.xml** file, if you're using Python, they're saved in the **setup.py** file. To customize the build system further,
please
look at [Custom Build Tool](#build-tool-customization) section.

## Common Actions

### See dependencies

![See Dependencies](img/dependencies-open.gif)

To see all of your project & pipeline dependencies simply open the **Manage Dependencies** screen by going to **... >
Options > Manage Dependencies**.

### Add dependency

To add the dependency, the [dependencies list](#see-dependencies). There you will see a complete list of your
dependencies. Click on **Create Dependency** to add a new dependency.

![Add Dependency](img/dependencies-add.png)

To define new dependency, specify the following:

1. **Type** - which can be either **Coordinates (Maven)** or **Package (PyPi)** (Python projects only).
2. **Name** - the name of your dependency - this can be any name, chosen by you to easier identify each dependency
3. **Coordinates** - maven coordinates in the `groupId:artifcatId:version` format (e.g. org.postgresql:postgresql:
   42.3.3)

For further customization of your dependency you can additionally define **Advanced** properties:

1. **Repository** - by default your dependency is fetched from **Maven Central** repository. If you'd like to use an
   external repository (e.g. your organizations' repository) yoy can specify the link to it here. Please note, that
   the repository has to be publicly accessible.
2. **Exclusions** - optional list of of `groupId:artifactId` pairs, of dependencies you'd like to exclude. Learn more
   about dependency
   exclusion [here](https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html#dependency-exclusions)
   .

After you defined the Dependency press **Save**. Prophecy is going to validate the dependency and add it to the project,
making it enabled by default in all of your pipelines.

When adding dependencies, Prophecy validates that the dependency coordinates is valid, and it's able to access them. If
that fails, you should see an invalid coordinates error.

:::info Invalid coordinates
In rare cases, your dependency might be only accessible to the Spark cluster or the build system but not Prophecy
itself. If you're confident that the dependency is correct, but the validation error shows up, it's safe to press **Save
Anyways** to ignore that warning.
:::

### Enable / Disable dependency

![Dependencies List](img/dependencies-list.png)

Since dependencies are stored at a project-level, any changes, like adding or deleting a dependency affects all the
pipelines. To selectively enable or disable a dependency for a specific pipeline, you can use the **Enable In Pipeline**
option.

### Delete dependency

To delete a dependency click on a trash icon on the dependencies list.

:::caution Deleting a dependency

Deleting a dependency deletes it within the whole project, and all inheriting pipelines. If you're not confident about
the functionality of the other pipelines, it's usually better to disable a dependency, instead of deleting it.

:::

### Installing on a cluster

![Dependencies Install](img/dependencies-install.gif)

Whenever you connect the pipeline to a cluster, dependencies are automatically installed on your cluster. If the
cluster doesn't have the dependency installed yet, Prophecy installs it and restarts the cluster automatically.

## Jobs Support

:::info Coming Soon
With Prophecy 2.0, the dependencies are going to be automatically added to the pom.xml. Saving you the additional manual
steps.
:::

![Dependencies List](img/dependencies-pom-add.gif)

Currently, the dependencies added to your pipelines are not propagated to the scheduled jobs. To ensure that the
dependency is visible to your pipeline when it's scheduled, it has to be **manually** added to the **pom.xml** file.

The dependency should be added anywhere between the `<dependencies></dependencies>` tags. For instance to
add `io.github.etspaceman:scalacheck-faker_2.12:7.0.0` dependency, add it to the **pom.xml** like so:

```xml
...
<dependencies>
    <dependency>
        <groupId>io.github.etspaceman</groupId>
        <artifactId>scalacheck-faker_2.12</artifactId>
        <version>7.0.0</version>
    </dependency>

    ...
</dependencies>
...
```

## Build Tool Customization

:::info Coming Soon
With Prophecy 2.0, you will be able to customize your build system freely, by defining project-level templates. To learn
more about it [contact us](mailto:support@prophecy.io).
:::
