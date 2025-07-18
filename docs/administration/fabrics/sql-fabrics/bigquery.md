---
title: Google BigQuery SQL
id: bigquery
description: Run models on a Google BigQuery warehouse
tags:
  - snowflake
  - sql
  - fabric
---

To run models projects on Google BigQuery, you need to create a [SQL fabric](/administration/fabrics/sql-fabrics/Fabrics) with a BigQuery connection.

:::info
SQL fabrics are for **models only**. Create a [Prophecy fabric](/administration/fabrics/prophecy-fabrics/) with a BigQuery warehouse connection to run pipelines.
:::

## Create a fabric

Fabrics define your Prophecy project execution environment. To create a new fabric:

1. Click on the **Create Entity** button from the left navigation bar.
1. Click on the **Fabric** tile.

## Basic Info

Next, complete the fields in the **Basic Info** page.

1. Provide a fabric title. It can be helpful to include descriptors like `dev` or `prod` in your title.
1. (Optional) Provide a fabric description.
1. Select a [team](/administration/team-based-access) to own this fabric. Open the dropdown to see the teams you belong to.
1. Click **Continue**.

## Provider

The provider is both the storage warehouse and the execution environment where your SQL code will run. To configure the provider:

1. Select **SQL** as the Provider type.
1. Open the **Provider types** dropdown and select **BigQuery**.
1. Fill in the **Database** (or BigQuery dataset), which will be the default location for target models.
1. Add your **KMS Key Name** to identify your BigQuery key.
1. Upload your key to authenticate the BigQuery connection.

### Optional: Connections

If you want to crawl your warehouse metadata on a regular basis, you can set a connection here.

## What's next

Attach a fabric to your SQL project and begin [data modeling](/engineers/models)!
