---
title: Databricks SQL
id: databricks
description: Run models on a Databricks SQL warehouse
tags:
  - databricks
  - sql
  - fabric
---

To use your Databricks SQL warehouse for execution in Prophecy, you need to create a SQL [fabric](docs/getting-started/concepts/fabrics.md) with a Databricks connection.

## Create a fabric

Fabrics define your Prophecy project execution environment. To create a new fabric:

1. Click on the **Create Entity** button from the left navigation bar.
1. Click on the **Fabric** tile.

## Basic Info

Next, complete the fields in the **Basic Info** page.

1. Provide a fabric title and description. It can be helpful to include descriptors like `dev` or `prod` in your title.
1. Select a team to own this fabric. Click the dropdown to list the teams your user is a member. If you don’t see the desired team, ask a Prophecy Administrator to add you to a team.
1. Click **Continue**.

![DBInfo](./img/DatabricksFabric1.png)

### Provider

The SQL provider is both the storage warehouse and the execution environment where your SQL code will run. To configure the provider:

1. Select **SQL** as the Provider type.
1. Click the dropdown menu for the list of supported Provider types, and select **Databricks**.
1. Copy the **JDBC URL** from the Databricks UI as shown. This is the URL that Prophecy will connect for SQL Warehouse data storage and execution. <br/><br/>
   :::note
   If using self-signed certificates, add `AllowSelfSignedCerts=1` to your JDBC URL.
   :::
1. Select [Personal Access Token](https://docs.databricks.com/aws/en/dev-tools/auth/pat) or [OAuth](/databricks-oauth-authentication) (recommended) for authentication with Databricks.
1. Optional: Enter the Catalog name if you are using Unity Catalog.
1. Click **Continue**.

![SFProvider](./img/DatabricksFabric2.png)

Prophecy respects **individual user credentials** when accessing Databricks catalogs, tables, databases, etc.

:::note
Prophecy supports Databricks Volumes. When you run a Python or Scala pipeline via a job, you must bundle them as whl/jar artifacts. These artifacts must then be made accessible to the Databricks job in order to use them as a library installed on the cluster. You can designate a path to a Volume for uploading the whl/jar files under Artifacts.
:::

### Optional: Connections

If you want to crawl your warehouse metadata on a regular basis, you can set a connection here.

## What's next

Attach a fabric to your SQL project and begin [data modeling](/engineers/models)!
