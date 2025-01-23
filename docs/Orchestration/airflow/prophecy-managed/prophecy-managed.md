---
title: Prophecy Managed Airflow
id: prophecy_managed_airflow_fabric
description: How Prophecy create a Prophecy Managed Airflow fabric
tags:
  - scheduling
  - airflow
  - jobs
  - prophecyManaged
  - fabric
---

If you are new to Airflow and do not have an Airflow Instance running in your environment, we provide a `Prophecy Managed Airflow` to expedite your trial and POC.
You can use this to connect to your Spark or SQL execution env and try out scheduling for your Spark pipelines or SQL models.
Let's see how to set up this fabric.

## How to create Prophecy Managed Airflow fabric

Setting up a fabric is very straightforward. Click the **(1) Create Entity** button, and choose **(2) Create fabric** option. The fabric creation is composed of two steps: Basic Info and Providers setup.
On the Basic Info screen, enter a **(1) fabric Name**, **(2) fabric Description**, and choose the **(3) Team** that’s going to own the fabric.

Once ready, click **(4) Continue**.

![Createfabric](./img/Create_fabric.png)

Since we’re setting up a fabric connected to Airflow, choose **Airflow** as the **(1) Provider Type** and **Prophecy Managed** as the **(2) Provider**.
For connecting to Prophecy Managed Airflow, you don't need to provide any other details, so go ahead and click on **(3) Continue**.

![CreatePMfabric](./img/Create_PM_fabric.png)

This completes the fabric creation for you. Now you can start setting up optional connections for Prophecy Managed Airflow to your AWS/Databricks etc. Also keep in mind there are some [Limitations](./) that larger teams may experience when using Prophecy Managed Airflow. Please reach out to support@Prophecy.io if these limitations block your use cases.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Create an Airflow Job

Once the Prophecy Managed Airflow fabric is setup with the relevant connections, Airflow job scheduling is done with an easy-to-use interface. Follow this guide to [Create an Airflow job](/docs/Orchestration/airflow/getting-started-with-low-code-airflow.md#2-create-an-airflow-job).
