---
title: Airflow with Databricks
id: airflow-with-databricks
description: A tutorial on using Low-code Airflow
sidebar_position: 7
tags:
  - airflow
  - tutorial
---

Prophecy has now added low-code Airflow capabilities to version 3.0.2 of our platform. With this, users can create and manage Airflow jobs using a visual Drag and drop interface. This allows you to easily design and schedule complex workflows, without having to write any code. The tool automatically translates them into optimized Python Airflow code in Git that’s fully open and accessible to all.

#### In this quick-start, we will show you how to use Prophecy Managed Airflow to Run and schedule your Spark and SQL Pipelines

We'll take you step by step from connecting your Databricks to Prophecy Managed Airflow to creating your first Airflow DAG and scheduling it. By the end of this training, you'll have an understanding of Airflow DAGss, be able to use our Visual interface to quickly create your DAG, and schedule this DAG on Prophecy Hosted Airflow. Let's dig in!

#### You will need

- Databricks Account
- A Prophecy Project With Spark Pipeline or SQL Model running on Databricks

## 1. Setup Prophecy Fabric for Airflow
