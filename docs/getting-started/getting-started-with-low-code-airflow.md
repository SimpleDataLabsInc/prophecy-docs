---
title: Airflow with Databricks
id: airflow-with-databricks
description: A tutorial on using Low-code Airflow
sidebar_position: 7
tags:
  - airflow
  - tutorial
---

Version 3.0.2 of our platform, Prophecy, introduces an exciting new feature: low-code Airflow capabilities.
Now, users can effortlessly create and oversee Airflow jobs using a user-friendly drag-and-drop interface.
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

![Create Fabric](img/3-1-create-fabric.png)

Setting up a Fabric is very straightforward. Click the (1) Create Entity button, and choose (2) Create Fabric option. The Fabric creation is composed of two steps: Basic Info and Providers setup.
On the Basic Info screen, enter a (1) Fabric Name, (2) Fabric Description, and choose the (3) Team that’s going to own the Fabric.

Once ready, click (4) Continue.

![Fill Fabric Details](img/3-2-fill-fabric-details.png)

Since we’re setting up a Fabric connected to Airflow, we choose Airflow as the (1) Provider Type and Prophecy Managed as the (2) Provider.
For connecting to Prophecy Managed Airflow, you don't need to provide any other details, so go ahead and click on (3) Continue.

![Fill Fabric Details](img/3-2-fill-fabric-details.png)
To be able to Run your Databricks Pipelines and Models, you need to have connection from Prophecy Managed Airflow to your Databricks Environment.
Click on (1) Add Connection button, and select Databricks Spark or Databricks SQL in (2) Connection Type. Now under the (3) Fabric, you would select the already created Fabric for Databricks Spark or Databricks SQL and Prophecy would setup the connection.
Once done, click (4) Save and then (5) Complete, to complete the Airflow Fabric Setup.

You should now start seeing a new Fabric of type `Airflow` and Platform `Prophecy Managed`.

## 2. Create an Airflow Job

A Job is an entity that contains a Gems to represent a DAG consisting of various Tasks (Pipelines/Models/Scripts, etc) which you can Run once or schedule to run at a frequency. Each Job would represent an Airflow DAG in Python.

Let's see how to create an Airflow Job in Prophecy.

Click the (1) Create Entity button, and choose (2) Create Job option.

On the first screen, you would provide the Basic Info of the Job.
In (1) Project, select the Project in which you want to create the Job. You can pick the existing Databricks Spark or SQL project here where you have created Pipelines/Models.
In (2) Branch, Pick a development branch for the new Job. Here you can pick an existing branch for development, or create a new one.
In (3) Name, provide a name for your Job.
In (4) Scheduler, pick the type as Airflow.
In (5) Fabric, Select the Fabric we created in previous step.
In (6) Schedule, Pick a schedule with which you want to schedule the Job. Please note, you can modify this again after testing before releasing your Job.
In (7) Description, add a description about the Job you are creating.

Once done, click (8) create new.

This will take you the Job editor page where you would be creating the actual DAG for the Job.
Let's start adding Pipelines to our Job now.

Click on (1) Operators, and Drag the Pipeline Gem from the dropdown to the canvas. Then click the newly added Gem and click (2) Open to open the Gem Configurations.

Here, we will select the Pipeline and provide Config values for the Pipeline if any.
In (1), select the Pipeline you want to Run. As you select the Pipeline, You would start seeing the Configurations defined in the Pipeline. You Would not be able to modify the schema of these configs but can Config values.

In (2), pick the Fabric and Job size for running this Pipeline in Databricks. And Save!!

You would see a diagnostics error if you selected a Fabric, which is not added as connection in Step 1 above.

Congratulations!!! And just like that, you have created a very simple Airflow Job with one Databricks Pipeline Task.

Lets go ahead and see how to Run and Schedule it.

## 3. Run and Debug

Now that we have our Job ready, we can go ahead and run it.
Click on the (1) Run button to trigger the One-time run

## 4. Release and Schedule
