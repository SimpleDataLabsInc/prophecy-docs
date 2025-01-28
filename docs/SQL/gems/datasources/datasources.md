---
title: Data Sources
id: datasources-sql
description: access your data
tags:
  - SQL
  - sources
  - seeds
---

Loading data into Prophecy is done via the [Seed](#seed), [Source](#source), or [Model](#model) gems. These are all based on [dbt](https://docs.getdbt.com/docs/build/projects) concepts.

## Seed

A Seed is an excellent way to load small CSV files into Prophecy. This is useful for small test datasets or lookup mappings, like a list of cities or countries. Seeds are saved as **.sql** files on Git when projects are committed and released. Follow the steps below to create a seed and write to the SQL warehouse defined in the fabric.

![Seed1](img/Seed1.png)

| Callout | Step                 | Description                                                                                                                    |
| ------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| 1       | **Add Seed**         | Inside the model canvas, from the project tab, select **+ Add Seed** and provide a name. Here the Seed was named ORDERDETAILS. |
| 2       | **Toggle to `Code`** | The code view displays a text editor.                                                                                          |
| 3       | **Paste data**       | Paste content in CSV format with header and separated by commas.                                                               |
| 4       | **Seed file**        | The Seed file is now listed in the files that will be committed to Git when the project is committed and released.             |

:::note

When you create a new seed, paste the seed contents using the code view. Then, save the seed by clicking the **large play button** in the bottom right corner. Finally, you can open the model of interest and run/execute the seed using the **small play button on the Seed gem**.

:::

![Seed2](img/Seed2.png)

| **Seed - use in a model and write to the Warehouse**                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5 Open Model** - Click to open the desired model where you'd like to use the Seed.                                                                                                                                                                                                        |
| **6 Toggle to `Visual`** - From this visual view we can see the model canvas.                                                                                                                                                                                                               |
| **7 Add Seed to Model** - Add the Seed as a datasource for this model.                                                                                                                                                                                                                      |
| **8 Seed appears in the Model Canvas** - Now the content of the Seed is part of the model and can be transformed, joined, etc.                                                                                                                                                              |
| **9 Interactive Run** - Click the Play button to interactively run the model, including the Seed datasource.                                                                                                                                                                                |
| **10 Click the Environment tab** - Click to browse the SQL Warehouse.                                                                                                                                                                                                                       |
| **11 Refetch Sources** - Crawls the SQL Warehouse to list tables in each of the databases and schemas accessible to your user. Seeds are by default materialized as Tables.                                                                                                                 |
| **12 Seed appears as a Table in the Warehouse** - Once Prophecy has refetched the sources, Prophecy lists the Seed in the Project Browser. So the Seed exists as both a Table in the Warehouse and is also saved as a versioned CSV file on Git when the project is committed and released. |

## Source

Each Source points to a table in the SQL Warehouse(s) specified in the fabric. Prophecy does not store the contents of the Source Table. Inside a project, the `Env` tab allows for browsing the database and schema. Tables in the `Env` tab can be drag-n-dropped to the canvas without manually specifying any metadata. You can also upload a source table directly to your environment. For more information about how to upload a file, see [Upload files](./upload-files). Follow the steps below to create and use a Source.

![Source1](img/Source1.png)

| **Source creation and usage**                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 Cluster and Fabric** - The Cluster and fabric define the SQL Warehouse execution environment. Attach the desired fabric which contains the Table of interest. |
| **2 Click the Environment tab** - Browse the SQL Warehouse specified in the selected fabric.                                                                      |
| **3 Add a table** - Prophecy respects the user's permissions. Any table for which the user has read permission can be added to the model canvas.                  |
| **4 Source is added to the model canvas** - The Source named ORDERSHIPMENTS is now part of the model, and is ready for transformation, joins, etc.                |
| **5 Click the Project tab** - Lists all the Sources that are now accessible to any model in the project.                                                          |

## Model

A model is similar to a pipeline, as both contain data transformation steps. Unlike a pipeline, however, each model defines a single [materialized view or table](https://docs.getdbt.com/docs/build/materializations#materializations).

Models are represented as visual format or as a single .sql file in `code` format. Because models define a single materialized view or table, models can serve as inputs to other models.

![Model1](img/Model1.png)

| Model Creation                                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1 Open existing Model** - Within a project, open an existing model, e.g. MyNextModel.                                                                         |
| **2 Add Model** - Click to add a new model to the existing Model.                                                                                               |
| **3 Model Name and File Path ** - Provide a name for the new model, e.g. MyModel. Define the desired storage path in Git to store the new model as a .sql file. |

Now the new model has been created and the canvas is displayed. Optionally, click `Config`. Prophecy makes it easy to decide whether a model should be materialized as a view, table, ephemeral, incremental, or dynamic table. For more information on how to configure a table's materiliazation, read this [interactive development blog post](https://www.prophecy.io/blog/interactive-development).

![Model2](img/Model2.png)

| Model as a Datasource                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------- |
| **4 Add a Source** - From the Environment tab, select a source for the new model.                                         |
| **5 Configure ** - Configure the new source, do any transformation steps or simply connect to the new model gem.          |
| **6 Interactive Run** - Click the "Play" button to execute the new model and create a materialized view of the new model. |
| **7 Project Tab** - Click the project tab and notice MyModel is now available in the Project Browser.                     |
| **8 Existing Model** - Open the existing model of interest. In this example, MyNextModel is opened.                       |
| **9 Add Model as a Source** - Add the new model (e.g. MyModel) as a Source.                                               |

![Model3](img/Model3.png)

| Model as a Datasource (cont'd)                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **10 Model as a Source** - The new model (MyModel) appears on the canvas of the existing model (MyNextModel). Connect the new model as an input to the Join gem or any desired transformation gem. The new model acts as a Datasource. |
| **11 Toggle to `code`** - The SQL `code` view for the open model, MyNextModel, is shown. Each code fragment represents one gem in MyNextModel.                                                                                         |

As a result, **MyNextModel** contains three sources: a Seed (ORDERDETAILS), a Source (ORDERSHIPMENTS), and a model (MyModel). These three sources are joined together and materialized as a table or view in the database.schema defined in the fabric.

**MyNextModel** can be viewed visually (left) or as a SQL file (right). The project browser (left) lists the sources, seeds, and models available to drag-n-drop into the selected model's canvas.

:::note

You can't use statements, such as `CALL` and `EXECUTE IMMEDIATE`, directly inside of models. Instead of trying to use these statements in SQL statements or macros, you must use them in pre-hooks.

:::

For more details on dbt concepts including [Sources](https://docs.getdbt.com/docs/build/sources), [Seeds](https://docs.getdbt.com/docs/build/seeds), and [Models](https://docs.getdbt.com/docs/build/models), please explore the dbt documentation or checkout Prophecy's [SQL with Databricks getting-started guide](/docs/getting-started/getting-started-with-low-code-sql.md).
