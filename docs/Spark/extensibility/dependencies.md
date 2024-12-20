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

Dependencies allow you to make use of third-party or custom code in your data Pipelines and Jobs. Dependencies can be
written in Java, Scala, or PySpark, and can be connected to your data Pipelines by pointing
to [Maven](https://mvnrepository.com/) or [PyPI](https://pypi.org/) coordinates.

## Storage

Dependencies can be stored at the Project or Pipeline level. Project-level dependencies are available to all Pipelines in the Project.

Dependencies are natively saved within your build system files. For example, if you're using Scala, dependencies are saved in the
**pom.xml** file. If you're using Python, dependencies are saved in the **setup.py** file.

## View dependencies

There are two ways to view all of your Project dependencies:

- Open your Project from the **Metadata** page. Then, click on the **Dependencies** tab.
- Open your Project in the **Pipeline Editor**. Then, click **… > Dependencies** from the project header.

## Add dependencies

When viewing the dependencies, you can also add new dependencies by selecting **Add Dependency**.

| Parameter                   | Description                                                                                                                                                                                                                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope                       | The dependency is enabled at the Project level or the Pipeline level.                                                                                                                                                                                                                   |
| Type                        | The dependency is either from the Package Hub, Scala (Maven) or Python (PyPi).                                                                                                                                                                                                          |
| Name                        | This will identify the dependency.                                                                                                                                                                                                                                                      |
| Version/Package/Coordinates | For Package Hub dependencies, input the package version. For Scala, use the Maven coordinates in the `groupId:artifcatId:version` format. For example, use `org.postgresql:postgresql:42.3.3` For Python, use the package and the version number.                                       |
| Repository (Advanced)       | If you'd like to use an external repository (like your organization’s repository), you can specify the link to it in this field.                                                                                                                                                        |
| Exclusion (Advanced)        | For Scala only. This is an optional list of `groupId:artifactId` pairs of dependencies you'd like to exclude. Learn more about dependency exclusion [here](https://maven.apache.org/guides/introduction/introduction-to-optional-and-excludes-dependencies.html#dependency-exclusions). |

Once you save a new dependency, Prophecy will validate it to make sure the dependency coordinates are valid and accessible. If
that fails, you should see an **invalid coordinates** error.

:::info
In rare cases, your dependency might be only accessible to the Spark cluster or the build system, but not to Prophecy
itself. If you're confident that the dependency is correct, but the validation error shows up, it's safe to press **Save
Anyways** to ignore that warning.
:::

## Delete dependencies

To delete a dependency, click the trash icon next to the dependency you wish to delete.

## Install dependencies on a Spark cluster

When you connect a Pipeline to a cluster, dependencies are automatically installed on that cluster.

A few dependencies depend on your cluster’s Spark and Scala versions. You can usually find these version requirements in the respective repositories. For example, take a look at the [Spark Excel](https://mvnrepository.com/artifact/com.crealytics/spark-excel) page in the Maven Repository.

Additionally, certain dependencies must be installed directly on your cluster. This is documented per dependency.

## Build System template

The **Build System** template in the Settings tab of a Project defines how build files are generated for all pipelines within a project.

:::info
For any help required to enable the template for older Projects, please reach out to the Prophecy support team.
:::

### Jobs support

When the Build System template is enabled for a Project and you [add a dependency](#add-dependencies), Prophecy will automatically update your **pom.xml** or **setup.py** files to include it.

Though not recommended, if templating is disabled and you still want to add dependencies that are visible to your Pipelines when scheduled, you can manually edit the **pom.xml** or **setup.py** files. Below is an example for a Scala Project.

To add the `io.github.etspaceman:scalacheck-faker_2.12:7.0.0` dependency, edit the **pom.xml** like so:

```
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
