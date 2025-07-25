---
title: Data modeling for Engineers
id: sql-with-snowflake
slug: /engineers/data-modeling
description: Use this tutorial to create a project with data in Snowflake
tags:
  - sql
  - tutorial
  - snowflake
---

This tutorial will teach you how to use Prophecy for data modeling. You will learn how to connect Prophecy to a SQL warehouse (in this case, Snowflake) and transform your data in the visual canvas.

:::note

This tutorial will not cover pipeline development in SQL projects, which requires Prophecy Automate. It will only cover data transformations that can be executed on a SQL warehouse.

:::

## Requirements

For this tutorial, you will need:

- A Prophecy account. You can use a 21 day [free trial](https://app.Prophecy.io/metadata/auth/signup) for this tutorial.
- A Snowflake account.
- A GitHub account.

If you want to use a different SQL provider such as Databricks, you can [set up the fabric](docs/administration/fabrics/sql-fabrics/databricks.md) and still complete the development section of this tutorial.

## Connect to Snowflake

Let's start by connecting Prophecy and Snowflake.

### Gather Snowflake credentials

You'll first have to retrieve the following information from Snowflake to pass to Prophecy.

1. Open Snowflake.
1. Write down your SnowflakeURL. It should look like `https://<org-account>.snowflakecomputing.com`.
1. Note your user's **Role** in Snowflake.
   ![Role](img/Snow2.2_Role.png)
1. Identify which [warehouse](https://docs.snowflake.com/en/user-guide/warehouses) you want to connect. Make sure the warehouse is started.
   ![Warehouse](img/Snow2.3_Warehouse.png)
1. Identify a database and schema that you want Prophecy to access.
   ![DbSchema](img/Snow2.4_DBschema.png)

### Create a SQL fabric in Prophecy

Since you will only compute models in this tutorial (rather than perform any orchestration), you can create a SQL [fabric](docs/getting-started/concepts/fabrics.md) to use as your execution environment. Let's use the information you gathered in the previous section to create the fabric.

1. Click to add a new entity.
1. Create a new fabric.
1. Specify a name, like devSnowflake, for your fabric.
1. Provide a description (optional).
1. Select the team that will own this fabric. For this tutorial, you can use your [personal team](docs/administration/teams-users/teamuser.md).
1. Continue to the next step.

![CreateFabric](img/Snow2.5_createFabric.png)

In the Provider tab, complete the following steps:

1. Select SQL as the Provider Type.
1. Open the Providers dropdown and select Snowflake.
1. Add the Snowflake Account URL, which looks like this: `https://<org>-<account>.snowflakecomputing.com`.
1. Add the username of a Snowflake user that Prophecy will use to connect to the Snowflake Warehouse.
1. Add the password of the same Snowflake user that Prophecy will use to connect to the Snowflake Warehouse. These credentials are encrypted for secure storage.
1. Add the Snowflake [role](https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles) that Prophecy will use to read data and execute queries on the Snowflake Warehouse. The role must be already granted to the Snowflake user provided above and should be scoped according to the permission set desired for Prophecy.
1. Specify the Snowflake warehouse for default writes for this execution environment.
1. Specify the Snowflake database for default writes for this execution environment.
1. Specify the Snowflake schema for default writes for this execution environment.
1. Click Continue.
1. Do not add any connections. Click **Complete** to save the fabric.

## Create a new project

Next, let's build a new [project](/projects) from scratch.

1. Click the **Create Entity** button on the sidebar and choose **Create** on the project tile. The project creation screen will open.
1. Fill in the project **Name** and **Description** (optional).
1. Choose the team that will own the project. For this tutorial, you can use your personal team.
1. In the **Select Template** dropdown, choose **Custom**.
1. Change the **Project Type** to **SQL**.
1. Select **Snowflake** as your SQL provider.
1. Click **Continue**.

Once the basic project information is filled out, it’s time to configure the Git repository on which we’re going to store our project. You will connect an external GitHub account for this tutorial.

1. Leave the default Git storage model as **Normal**.
1. Click **Connect Git** to connect to a GitHub account that has not yet been configured.
1. Choose GitHub as the Git Provider for this project.
1. Create an alias that will let you identify your Git account in Prophecy.
1. Click **Login with GitHub** to use OAuth for authentication.
1. Sign in and authorize SimpleDataLabs as a valid organization.
1. Select **Connect** to save the Git connection.

Once your GitHub account is set up:

1. Select a repository where Prophecy will store all the code for this project. The repository must be empty.
1. Keep the automatically populated default branch.
1. Keep the `/` folder where the project files will be stored.
1. Click **Complete** to save your new project.

:::note
If you have a valid dbt project in a Git repository, you can import it in Prophecy as a project directly.
:::

## Start development

Now, you are ready to click **Open in Editor** and begin developing!

### Checkout development branch

You cannot make changes directly on the main branch. Therefore, you must start by checking out your own development branch.

1. Click on **Checkout Branch** and type `dev/model-tutorial` in the **Branch** field.
1. Click **Checkout**. The new branch will be displayed in the **footer**.

Branches are clones from the current branch. In most cases, you will want to branch from the main branch.

### Connect to a fabric

After branch setup:

1. Fabric selection should pop-up automatically. If not, you can easily set the fabric by clicking on the **Choose cluster** dropdown.
1. Choose the fabric you just created in the **Fabrics** list.
1. **Save** the settings.

Prophecy will quickly load all the available warehouses, databases, schemas, tables, and other metadata to let you start running your transformations!

### Define data sources

The first step, before building actual transformation logic, is definition of data sources. There are three primary ways to define data sources in a SQL project:

1. **Seeds** let you load small CSV datasets into your warehouse. This is useful for small test datasets or lookup mappings.
2. **Datasets** are table pointers with schema information and additional metadata.
3. **Models** define tables that can serve as inputs to other models.

#### Create seeds

To create a seed:

1. Click on the **Add Seed** button.
1. **Name** the seed `nations`, which will also be the name of the table created.
1. Define the **Path** of the seed.
1. Click **OK** to create the seed.

Currently, the seed is still empty. To add values:

1. Paste the contents of this comma-separated CSV file into the code editor.

   ```
   NATIONKEY,NAME,REGIONKEY,COMMENT
   0,ALGERIA,0,Vast Sahara; oil-rich and culture-rich.
   1,ARGENTINA,1,Tango; beef; Patagonia.
   2,BRAZIL,1,Amazon; Carnival; soccer.
   3,CANADA,1,Maple; multicultural; vast wilderness.
   4,EGYPT,4,Ancient pyramids; Nile River.
   5,ETHIOPIA,0,Coffee origin; diverse culture.
   ```

1. Switch back to the visual editor and **Run** the seed.

### Develop your first model

A model contains a set of data transformations and represents one table. Each model is stored as a select statement in a SQL file within a project.

1. Click **+** next to Models to add a model.
1. Name the model `customers_nations` and keep the default directory path.
1. Click **Create**.
1. Open the **Environment** tab and open the **SAMPLE_DATA** that Snowflake provides.
1. Expand the **TPCH** folder and click **Customer**. This adds the customer table as a source in your model.

We will join our two source datasets.

1. Open the **Join/Split** gems and add a **Join** gem to the model canvas.
1. Connect the source datasets to the Join input ports.
1. Open the Join gem.
1. Add the join condition. Join the datasets on `NATIONKEY` and `C_NATIONKEY`.
1. In the Expressions tile, add any target columns that you wish to appear in the output table.

### Interactively Test

Now that our model is fully defined, with all the logic specified, it’s time to make sure it works (and keeps working)! Prophecy makes **interactively testing** the models incredibly easy.

1. Click the **Play** button on any of the gems and the model with all of it’s upstream dependencies will be executed.
2. Once the model runs, the **Result** icon appears.
3. Click the Result icon to view a **Sample** set of records.

Notice Copilot is offering suggested fixes when errors appear. See how **Fix with AI** works [here](/engineers/copilot#fix-with-ai). Explore suggested fixes in the canvas, inside each transformation gem, or inside gem expressions.

## Code view

The visual developers will appreciate the drag-n-drop canvas, but sometimes it's also nice to view the code. Already Prophecy creates highly performant code behind the scenes. Just click the **Code View** to reveal the SQL queries we've generated using our visual design editor. Each gem is represented by a CTE or subquery. For example, the Join gem `NATIONS_CUSTOMERS` is highlighted in both visual and code views.

![ToggleToCode](./img/Snow4.6_toggleVisualCode.png)

You can also edit the code directly! Add a SQL statement in the code view and notice the visual editor displays the updated transformations. For example, if you add a limit statement in the code view, and a new limit gem will appear in the visual view.

## What's next

Great work! You've successfully developed and tested a SQL model on a Snowflake warehouse. If you ever encounter any difficulties, don't hesitate to reach out to us (Contact.us@Prophecy.io) or join our [Slack community](https://prophecy-io-support.slack.com/join/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ#/shared-invite/email) for assistance. We're here to help!
