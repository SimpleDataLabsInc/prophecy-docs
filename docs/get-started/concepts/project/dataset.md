---
title: "Datasets"
id: dataset
description: Schema, meet Data.
sidebar_position: 3
tags:
  - concepts
  - datasets
  - source
  - target
---

In Prophecy, datasets are grouped by [projects](docs/get-started/concepts/project/project.md) and rely on the following:

- **Schema**: The structure or shape of the data, including column names, data types, and the method for reading and writing the data in this format.
- **[Fabric](docs/get-started/concepts/fabrics/fabrics.md)**: The execution environment in which the data resides.

## Create datasets

Datasets are created where they are first used in a [Source or Target gems](docs/Spark/gems/source-target/source-target.md). A dataset definition includes its:

- **Type**: The type of data you are reading/writing like CSV, Parquet files or catalog tables.
- **Location**: The location of your data. It could be a file path for CSV or a table name.
- **Properties**: Properties consists of Schema and some other attributes specific to the file format. For example, in case of CSV, you can give Column delimiter in additional attributes. You can also define Metadata for each column here like description, tags, and mappings.

Datasets can be used by any pipeline within the same project, and in some cases by other projects within the same team.

## View datasets

There are two ways to view a list of datasets:

- To see all datasets, navigate to **Metadata > Datasets**.
- To see only one project's datasets, navigate to **Metadata > Projects**. Then, open a project. Click on the **Content** tab, and then the **Datasets** subtab.

## Dataset Metadata

If you open the metadata page for one of the datasets, you'll find the following information:

| Name                | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| Dataset name        | The name of this dataset, which is editable.                        |
| Dataset description | The description of this dataset, which is editable.                 |
| Dataset properties  | A subset of properties used for reading or writing to this Dataset. |
| Dataset schema      | The columns of this dataset and their data types.                   |
| Delete Dataset      | The option to delete this dataset. Use with caution.                |

In the **Relations** tab, there is additional information about where and how this dataset is used.

| Name                | Description                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Physical Datasets   | Location of the dataset in relation to a fabric.                                                                                 |
| Pipelines           | A list of pipelines that use this dataset, with the `Relation` column indicating if it is for `Read` or `Write` purposes.        |
| Jobs                | A list of jobs that use this dataset, with the `Relation` column indicating if it is for `Read` or `Write` purposes.             |
| Open Lineage Viewer | The option to open this dataset in the [Lineage](docs/lineage/lineage.md) viewer, showing column-level lineage for this dataset. |

## Publishing and sharing datasets

As part of the project release process, datasets within that project are _published_ to other projects within the same Team, and can be published to other Teams in read-only mode. This allows you to share your dataset configurations with other Teams without allowing them to make changes to the original dataset definitions. Let's see this in action:

1. `DI_TEAM` is the central Data Infrastructure team. They have defined a common project named `DI_Common_Python`.
2. `DI_Common_Python` has a number of datasets defined within it:
   ![DI Common Datasets](img/dataset/pub2.png)
3. The `DI_Team` merges and releases the `DI_Common_Python` project, tagging it `0.1`.
   ![DI Common Release](img/dataset/pub3.png)
4. As you can see, the `DI_Team` has published the `DI_Common_Python` project to the `DE_Team`, the Data Engineering Team.
5. Now, whenever the `DE_Team` builds pipelines, they can see the following:
   ![Common Datasets](./img/dataset/pub4.png)

We can see the `DI_Common_Python` project's datasets, and the fact that they're listed as `Read-only`. This means that `DE_Team` can _use_ the datasets, but cannot _edit_ them.

:::info

For regular usage, we suggest having only one instance of a particular dataset within a pipeline, as the dataset's properties and underlying data can change each time the dataset is read or written.

:::
