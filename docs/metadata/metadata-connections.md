---
title: Metadata Connections
id: metadata-connections
description: sync catalogs, tables, schemas, etc into Prophecy's Project viewer
sidebar_position: 9
tags:
  - metadata
  - Datasets
  - tables
  - connections
  - data
---

At Prophecy we're always looking to make your development faster. For teams that manage hundreds or thousands of tables, listing data catalogs, tables, and schemas can take precious minutes. In order to make this easier, Prophecy introduced Metadata Connections in release 3.2. The major benefit to Metadata Connections: straightaway you can list and view your data directly in the [Prophecy UI](/docs/concepts/project/project-browser.md#Environment-tab). Let's get down to basics by [defining](/docs/metadata/metadata-connections.md/#definition-of-entities) the relevant entities in Prophecy, then we'll walk through step by step how to [setup](/docs/metadata/metadata-connections.md/#setup) Metadata Connections.

## Definition of entities

### Metadata Connection

A Metadata Connection is a user-defined link between Prophecy and a data provider. Its purpose is to establish communication between Prophecy and external systems. For instance, a Metadata Connection can be established between Prophecy and platforms like Databricks (Catalog or JDBC) or Snowflake (coming soon). Different from Metadata Connections, Prophecy also supports [Airflow Connections](TODO: link to airflow page) which perform a similar function for Airflow jobs.

### Fabric

A Fabric represents a logical grouping of Connections. For Prophecy 3.2, each Fabric will enable only one Metadata Connection, but look for multiple connections per Fabric coming soon. Fabrics contain the user credentials for a data provider, whereas Metadata Connections have the added benefit of syncing metadata from the data provider at a defined interval.

### Cluster/Warehouse

A Cluster, also referred to as a Warehouse, represents a collection of resources that a Metadata Connection can utilize. Clusters are specific to certain data platforms or systems. For instance, a Snowflake Metadata Connection can access different warehouses that are available to the user. By associating a Metadata Connection with a workspace or warehouse, users can leverage the resources defined by the data providers.

## Setup

### User Permissions

System Admins can define and monitor Metadata Connections for platform users. Then, Data Practitioners can use Metadata Connections within their Pipelines. Coming soon, Data Architects will be able to define new Metadata Connection types through an extensible Package Builder interface.

### Add a Metadata Connection

Once a [Fabric](/docs/low-code-spark/fabrics/create-a-fabric.md) is **(1)created**, a **(2)Metadata Connection** is an optional step to enable syncing metadata for a particular cluster or warehouse accessible via the Data Provider. Add a Metadata Connection by providing the following details.

![CreateConnection](./img/1-create-connection.png)

Define a **(3)Connection Name**, and add an optional **(4)Description** for your team's understanding. Define the **(5)Workspace URL**, which could be a Databricks workspace. Within that Workspace, all the accessible Data Catalogs will be included in the syncing. If you choose to define a **(6)JDBC URL** different than that defined in the Fabric, the Metadata Connection JDBC will be the only JDBC included in the syncing. Now define the **(7)Access Token** for the Metadata Connection. Like the JDBC URL, the Access Token is only required if different from that defined in the Fabric. The Access Token created for the workspace must have read permission for the Catalogs or JDBC databases, tables, and schemas of interest. The access token can be a personal access token or [service principle token](https://docs.databricks.com/en/administration-guide/users-groups/service-principals.html#manage-service-principals-in-your-account) (recommended).

Define the **(8)Refresh Frequency** for Prophecy to sync the metadata from the workspace catalogs and JDBC warehouses accessible to the access token. **(9)Enable** the Metadata Connection to proceed with the sync and **(10)Add** the Metadata Connection.

Once a Connection is configured, the Connection details will be used to display data in the [Project Browser](/docs/concepts/project/project-browser.md#how-to-access-project-browser) `Environment` tab.

![AddGem](./img/2-add-gem.png)

Inside a Project, **(1)Attach a Fabric** which has a Metadata Connection. Now the **(2)Environment** tab lists the data accessible in the provider **(3)Workspace** synced at the frequency defined in the Metadata Connection. So thousands of tables should be visible more quickly as the data is synced regularly. Browse the catalogs, databases, and tables. Add a **(4)table** to the canvas as a Dataset, and define whether your Dataset should be a **(5)Source or Target**. Now the Dataset **(6)appears** on the canvas, ready for transformations.

:::info
The Fabric token should provide the user's personal permissions to read / write data.
The Metadata Connection token, optionally provided to enhance performance, should be a service principal with read-only permissions on the appropriate catalog and JDBC tables.
:::

:::caution
Only one Metadata Connection can be enabled per Fabric at once.
:::
