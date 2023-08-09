---
title: Airflow with Databricks
id: airflow-with-databricks
description: A tutorial on using Low-code Airflow
sidebar_position: 7
tags:
  - airflow
  - tutorial
---

Version 3.0.2 of our platform, Prophecy, introduces an exciting new feature: Low-code Airflow.
Now, users can effortlessly create and manage Airflow jobs using a user-friendly drag-and-drop interface.
This empowers you to design and schedule intricate workflows without the need for coding expertise.
The tool seamlessly translates your designs into highly optimized Python Airflow code, stored in Git, ensuring complete accessibility and openness to all users.
Moreover, you have the flexibility to enhance functionality by incorporating your custom operators and sensors via our Gem Builder interface.

#### In this quick-start, we will show you how to use Prophecy Managed Airflow to Run and schedule your Spark and SQL Pipelines

We'll take you step by step from connecting your Databricks to Prophecy Managed Airflow to creating your first Airflow DAG and scheduling it. By the end of this training, you'll have an understanding of Airflow DAGss, be able to use our Visual interface to quickly create your DAG, and schedule this DAG on Prophecy Hosted Airflow. Let's dig in!

#### You will need

- Databricks Account
- A Prophecy Project With Spark Pipeline or SQL Model running on Databricks

If you don't have an existing project, please check out [this guide](./getting-started-with-low-code-spark) for setting up a Spark Pipeline, and [this guide](./getting-started-with-low-code-sql.md) for setting up a SQL model in Prophecy.

## 1. Setup Prophecy Fabric for Airflow

Prophecy introduces the concept of a Fabric to describe an execution environment. In this case, we create a Fabric to connect to Airflow, and create and schedule DAGs in it.
For this guide, we would be using Prophecy Managed Airflow, so you don't require to have an Airflow instance running.

![Create Fabric](img/2-4-create-fabric.png)

Setting up a Fabric is very straightforward. Click the **(1) Create Entity** button, and choose **(2) Create Fabric** option. The Fabric creation is composed of two steps: Basic Info and Providers setup.
On the Basic Info screen, enter a **(1) Fabric Name**, **(2) Fabric Description**, and choose the **(3) Team** that’s going to own the Fabric.

Once ready, click **(4) Continue**.

![Fill_fabric_details.png](img/Airflow_1.2_Create_Fabric.png)

Since we’re setting up a Fabric connected to Airflow, we choose **Airflow** as the **(1) Provider Type** and **Prophecy Managed** as the **(2) Provider**.
For connecting to Prophecy Managed Airflow, you don't need to provide any other details, so go ahead and click on **(3) Continue**.

![Add_connection.png](img/Airflow_1.3_Add_connection.png)
To be able to Run your Databricks Pipelines and Models, you need to have connection from Prophecy Managed Airflow to your Databricks Environment.
Click on **(1) Add Connection** button. This opens up the Add connection form.

![Add_connection_form.png](img/Airflow_1.4_Add_connection_form.png)
Select Databricks Spark or Databricks SQL in **(1) Connection Type**. Now under the **(2) Fabric**, you would select the already created Fabric for Databricks Spark or Databricks SQL and Prophecy would setup the connection.
You can provide a description in the **(3) Description**.
Once done, click **(4) Save**.

![Fabric_complete.png](img/Airflow_1.5_Complete_Fabric_setup.png)
You can add more than one connection for Databricks Spark,Databricks SQL, Email, HTTP, etc.
Once done click **(1) Complete** to complete your Fabric Setup.

You should now start seeing a new Fabric of type `Airflow` in the Fabric listing page.

## 2. Create an Airflow Job

A Job is an entity that contains Gems to represent a DAG consisting of various Tasks (Pipelines/Models/Scripts, etc) which you can Run once or schedule to run at a frequency. Each Job would represent an Airflow DAG in Python.

Let's see how to create an Airflow Job in Prophecy.

![Create_job](img/Airflow_2.1_Create_Job.png)

Click the **(1) Create Entity** button, and choose **(2) Create Job** option.

On the first screen, you would provide the Basic Info of the Job.

In **(1) Project**, select the Project in which you want to create the Job. You can pick the existing Databricks Spark or SQL project here where you have created Pipelines/Models.
In **(2) Branch**, Pick a development branch for the new Job. Here you can pick an existing branch for development, or create a new one.
In **(3) Name**, provide a name for your Job.
In **(4) Scheduler**, pick the type as **Airflow**.
In **(5) Fabric**, Select the Fabric we created in previous step.
In **(6) Schedule**, Pick a schedule with which you want to schedule the Job. Please note, you can modify this again after testing before releasing your Job.
In **(7) Description**, add a description about the Job you are creating.

Once done, click **(8) Create New**.

This will take you the Job editor page where you would be creating the actual DAG for the Job.
Let's start adding Pipelines/Models to our Job now.

### 2.1 Adding Spark Pipeline Gem For Databricks to your DAG

![Add_Pipeline_Gem](img/Airflow_2.2_Add_Pipeline_Gem.png)

Click on **(1) Operators**, and Drag the **(2) Pipeline Gem** from the dropdown to the canvas. Then click the newly added Gem and click **(3) Open** to open the Gem Configurations.

Here, you will select the Pipeline and Optionally override any config values for the Pipeline if you want.

![Pipeline_Gem_Configurations](img/Airflow_2.3_Pipeline_Gem_Configurations.png)
In **(1) Pipeline to Schedule** , select the Pipeline you want to Run. As you select the Pipeline, You would start seeing the Configurations defined in the Pipeline. You Would not be able to modify the schema of these configs but can override the Config values.

In (**2) Fabric and Cluster size to run this Pipeline**, pick the Fabric and Job size for running this Pipeline in Databricks. Once done, Click **(3) Save**!!

### 2.2 Adding SQL DBT Gem For Databricks to your DAG

![Add_DBT_Gem](img/Airflow_2.4_Add_DBT_Gem.png)

Click on **(1) Operators**, and Drag the **(2) DBT Gem** from the dropdown to the canvas. Then click the newly added Gem and click **(3) Open** to open the Gem Configurations.

Here, we will select the Model and provide Config values for the Pipeline if any.
In (1), select the Project you want to Run/Schedule. All Models

You would see a diagnostics error if you selected a Fabric, which is not added as connection in Step 1 above.
Congratulations!!! And just like that, you have created a very simple Airflow Job with one Databricks Pipeline Task.

Let's go ahead and see how to Run and Schedule it.

## 3. Run and Debug

Now that we have our Job ready, we can go ahead and run it.
Click on the (1) Run button to trigger the One-time run

This creates a temporary DAG and uploads to Airflow. User can check logs and status in the Prophecy UI itself.

## 4. Release and Schedule

Now that our Job is ready and tested, its time to Release and Schedule it.
To do this, Click on (1) Enable Job button.
