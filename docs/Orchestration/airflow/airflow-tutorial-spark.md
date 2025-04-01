---
title: Build an Airflow job
id: airflow-tutorial-spark
slug: /engineers/spark-airflow-tutorial
description: A tutorial on orchestrating Spark and SQL jobs with Airflow
tags:
  - airflow
  - tutorial
---

Let's build a job with Airflow (or an [Airflow DAG](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/dags.html)) to schedule and run your Spark and SQL pipelines. In this tutorial, you will:

- Create a Prophecy-managed Airflow fabric and connections to AWS, Email, and Databricks.
- Configure an Airflow job to run when a new file is uploaded to an S3 bucket.
- Configure the same job to send an email notification prior to pipeline execution.
- Run, debug, and enable the job.

## Requirements

This tutorial requires:

- A Databricks account
- A Prophecy project with a Spark pipeline
- An AWS account with an S3 bucket
- An email account and access to SMTP settings

## Create Airflow fabric

To run an Airflow job, you need to define an environment where you will run the job. Therefore, you need to create an Airflow fabric.

1. Click the **Create Entity** button.
1. Choose **Create Fabric** option.
1. On the Basic Info page:
   - Enter a **Fabric Name**.
   - Enter a **Fabric Description**.
   - Choose the **Team** that will own the fabric.
1. Click **Continue**.
1. Configure the Provider information.
   - Choose **Prophecy Managed**.
1. Click **Continue**.

### Add an AWS connection

In order to trigger your Airflow job using an S3 File Sensor, you need to add an AQS connection in your Airflow fabric. In the Connections tab of the fabric setup:

1. Click on the **+ Add Connection** button.
1. Select AWS in **Connection Type**.
1. Provide a **Connection Name** to identify your connection.
1. Add a **Description** of your choice.
1. Provide the **AWS Access Key ID** and **AWS Secret Access Key**. Visit the [AWS site](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html) to learn how to access these keys.
1. Click **Save** to establish the connection.

![Add_AWS_connection](img/3.4_AWS_Connection.png)

### Add an email connection

Next, we'll add an email connection that will be used to send emails on your behalf.

1. Click on the **+ Add Connection** button.
1. Select Email in **Connection Type**.
1. Provide a **Connection Name** to identify your connection.
1. Add a **Description** of your choice.
1. Provide the **(4) Host** as your SMTP host example `smtp.gmail.com`.
1. Provide the login credentials for this server in **(5)Login** and **(6)Password**.
1. Add your SMTP port in the **Port** field.
1. Click **Save** to establish the connection.

![Add_Email_connection.png](img/3.5_Email_connection.png)

### Add a Databricks Spark connection

To run your Databricks pipelines, you need to make a connection to your Databricks environment.

1. Click on the **+ Add Connection** button.
1. Select Databricks (Spark) in **Connection Type**.
1. Under **Fabric**, select a Databricks Spark fabric. This must be created beforehand.
1. Optionally, provide a description in the **Description** box.
1. Click **Save** to establish the connection.

![Add_DB_Spark_connection.png](img/3.6_DB_Spark_connection.png)

## Create an Airflow job

A job contains gems that perform various tasks (running pipelines/models/scripts, etc.) that you can schedule to run at a certain frequency. Every job represents an Airflow DAG. Let's create a job.

1. Click the **Create Entity** button.
1. Choose **Job** option.
1. Select the **project** in which you want to create the job. This project should contain at least one Spark pipeline.
1. Pick your development **branch**. Here you can pick an existing branch for development, or create a new one.
1. Provide a **Name**.
1. Pick **Airflow** as the scheduler.
1. Select the **fabric** that you just created.
1. Fill in a **Schedule** that defines the job frequency. You can modify this at any time.
1. Add a **Description** about the job you are creating.
1. Click **Create New**.

![Create_Job](img/3.9_Create_Job.png)

This will take you to the **job editor** where you can start building the job.

### Add a S3 file Sensor gem

In the job editor canvas:

1. Click on **Sensors**.
1. Drag the **S3FileSensor** gem from the dropdown to the canvas.
1. Click and open the newly added gem to view the gem configurations.
   ![Add_S3_gem](img/3.10_Add_s3_gem.png)
1. Specify the S3 bucket/path that we will track to trigger the job.
1. In **S3 Path(s)**, specify the complete path of file in your bucket. Airflow will check if this file exists in the specified bucket periodically and trigger the job when it arrives.
1. Select the created Connection for AWS in **Connection name**.
1. Click **Save**.
   ![Add_S3_gem_details](img/3.11_Add_s3_gem_details.png)

### Add an email gem

1. Click on **Trigger/Notify**.
1. Drag the **Email** gem from the dropdown to the canvas.
1. Connect the sensor gem output to the email gem input.
1. Click and open the newly added gem to view the gem configurations.
   ![Add_email_gem](img/3.12_Add_email_gem.png)
1. In **To**, add your Email id where you want to receive the notification Email when the job is triggered.
1. Select the **Connection name**, you created for Email.
1. You can provide a **Subject** for the Email
1. Add **Email content** that will populate the body of the email. For example, you can add an Airflow parameter available to access the execution time in a job.
1. Optionally, add CC and BCC email addresses.
1. Click **Save**.
   ![Add_email_gem_details](img/3.13_Add_email_gem_details.png)

### Add a Spark pipeline gem

1. Click on **Spark/SQL**.
1. Drag the **DatabricksPipeline** gem from the dropdown to the canvas.
1. Connect the email gem output to the pipeline gem input.
1. Click and open the newly added gem to view the gem configurations.
   ![Add_Pipeline_Gem](img/3.14_Add_pipeline_gem.png)
1. Select the **Pipeline to schedule** you want to run.
1. Select the configuration to use during the scheduled pipeline run.
1. Pick **Fabric and Cluster size to run this pipeline** for running this pipeline in Databricks.
1. Click **Save**.
   ![Add_pipeline_gem_details](img/3.15_Add_pipeline_gem_details.png)

## Run and debug

Now that your job is ready, you can go ahead and run it.

1. Click on the **Run** button to trigger an on-demand run. This creates a temporary DAG and uploads to Airflow.
1. When you click on run, you will see a Job Details Toaster.
   ![Run_job](img/3.18_Run_Job.png)
1. Click on **Details** to open the detailed logs of the run.
1. Review all the steps involved in the run and also detailed logs for each step.
1. Click on **+** button to open the logs for a particular step.
   ![Run_job_logs](img/3.19_Run_Job_logs.png)

## Release and deploy

Once you have developed and tested the job, it’s time to commit and push the code to the project Git repository and release the job to Airflow.

![Open Git workflow](img/3.20_start_commit.png)

1. Start by toggling our job to be **Enabled**. Once you release the project, Airflow will recognize that this job is enabled.
1. Open the Git workflow by clicking the **Release** button in the project header or clicking the **Commit button** in the project footer.
1. **Commit** your changes. This saves the current state of your project to your branch.
1. **Pull** any upstream or remote changes. This ensures that your branch is up-to-date with collaborators' changes.
1. **Merge** your changes into the main project branch. The main branch should contain the "official" version of your project. Use a **Pull Request** to merge your changes if the main branch is protected.
1. **Release** your changes. When you release your project, you create a new **version** of it. At this point, your job will be built and deployed on Airflow.

![Release_screen](img/3.24_release_screen.png)

## Monitor

During the release process, Prophecy automatically packages, tests, and deploys your jobs to Airflow. Once the process is finished, you can see the deployed and running job within your Airflow environment.

## What’s next

Great work! You've created an Airflow job in Prophecy, ran it successfully, released, scheduled, and monitored the job.

If you ever encounter any difficulties, don't hesitate to reach out to us (contact.us@Prophecy.io) or join our [Slack community](https://prophecy-io-support.slack.com/join/shared_invite/zt-moq3xzoj-~5MSJ6WPnZfz7bwsqWi8tQ#/shared-invite/email) for assistance. We're here to help!
