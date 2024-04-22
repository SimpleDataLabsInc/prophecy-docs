---
sidebar_position: 1
title: Setup
id: setup_airflow
description: How Prophecy integrates with Airflow
tags:
  - scheduling
  - airflow
  - jobs
---

To connect to a running Airflow Instance, you would need to create a [Fabric](/docs/concepts/fabrics/fabrics.md) of type Airflow.
Prophecy provides you with three different types of Fabrics depending upon where your Airflow Instance is running.

1. **[Prophecy Managed Airflow](./prophecy-managed/prophecy-managed.md)** - for those who are new to Airflow and do not have an Airflow instance, we provide a Prophecy Managed Airflow to expedite your trial and POC.

2. **[MWAA](./mwaa.md)** - for those who are using Amazon Web Services and have an Amazon Managed Workflows for Apache Airflow instance running.

3. **[Composer](./composer.md)** - for those who are using Google Cloud Platform and have a GCP Cloud Composer Airflow instance running.

## Create an Airflow Job

Once the Airflow Fabric is setup, Airflow Job scheduling is done with a low-code easy-to-user interface. Follow this guide to [Create an Airflow Job](/docs/getting-started/getting-started-with-low-code-airflow.md#2-create-an-airflow-job).
