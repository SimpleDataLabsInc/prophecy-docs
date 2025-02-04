---
title: Metadata connections
id: metadata-connections
description: Sync catalogs, tables, schemas, etc into Prophecy's project viewer
sidebar_position: 3
tags:
  - metadata
  - datasets
  - tables
  - connections
  - data
---

When you create a metadata connections in a fabric, you can view and import your data directly in the [Project Editor](/docs/concepts/project/project.md#project-editor) in Prophecy. A default metadata connection is created by Prophecy for Spark [fabrics](docs/concepts/fabrics/fabrics.md).

## What is a metadata connection?

A metadata connection is a user-defined link between Prophecy and a data provider. Its purpose is to establish communication between Prophecy and external systems. For instance, a metadata connection can be established between Prophecy and platforms like Databricks (Catalog or JDBC).

:::note
Different from metadata connections, Prophecy also supports Airflow connections which perform a similar function for Airflow jobs.
:::

## Metadata connection setup

### Provider tokens

Prophecy metadata connections will use APIs to make calls to your data provider accounts. For this access, a service principal is recommended. For Databricks providers, follow these [instructions](https://docs.databricks.com/en/dev-tools/service-principals.html#provision-a-service-principal-for-databricks-automation---databricks-ui) to create a service principal and associated token. If you are unable to setup a service principal, use a standard Personal Access Token.

The service principal will need access to the [Workspace](https://docs.databricks.com/en/security/auth-authz/access-control/enable-access-control.html#enable-access-control-for-workspace-objects) and, if you're using a cluster for the metadata connection, the service principal will need access to create clusters. If you're not using Unity Catalog for the Metadata Connection, the service principal will need access to [Databricks SQL.](https://docs.databricks.com/en/sql/admin/index.html#grant-user-access-to-databricks-sql)

### Grant permissions

The service principal must be able to collect metadata from any desired catalog or metastore in the workspace.

To grant the needed permissions on Unity Catalog, grant permissions to the service principal to read the catalogs, which by default grants the same permission on all schemas within that catalog:

```
GRANT SELECT ON CATALOG <catalog> TO <service_principal>;
```

To grant the needed permissions on a Hive Metastore, grant usage, read, and select on the catalog, which by default applies these same permissions to the catalog's schemas. These permissions would be needed for any relevant metastore catalog in addition to the default Hive Metastore catalog.

```
GRANT USAGE, READ_METADATA, SELECT ON CATALOG <hive_metastore> TO <service_principal>;
```

### Setup SQL Warehouse or Cluster

Prophecy supports metadata collection through SQL Warehouses and Clusters on Databricks and Snowflake. In general, we recommend to create a [SQL Warehouse](https://docs.databricks.com/en/sql/admin/create-sql-warehouse.html#create-a-sql-warehouse) or cluster dedicated to the Metadata Connection. Using this approach, the recurring metadata syncs can have a cluster defined with appropriate resources, whereas execution clusters defined in the [fabric](/docs/concepts/fabrics/fabrics.md) `Provider` would have a separate resource profile.

Alternatively, the Metadata Connection can use the same Warehouse or Cluster which is being used for execution. In that case, the resources would be shared.

## Setup Prophecy Entities

### User Permissions

System Admins can define and monitor Metadata Connections for platform users. Then, Data Practitioners can use Metadata Connections within their pipelines.

### Add a Metadata Connection

Once a [fabric](/docs/administration/Spark-fabrics/databricks/databricks.md) is **(1)created**, a **(2)Metadata Connection** is an optional step to enable syncing metadata for a particular cluster or warehouse accessible via the Data Provider. Add a Metadata Connection by providing the following details.

![CreateConnection](./img/1-create-connection.png)

Define a **(3)Connection Name**, and add an optional **(4)Description** for your team's understanding. Define the **(5)Workspace URL**, which could be a Databricks workspace. Within that Workspace, all the accessible Data Catalogs will be included in the syncing. If you choose to define a **(6)JDBC URL** different than that defined in the fabric, the Metadata Connection JDBC will be the only JDBC included in the syncing. Now define the **(7)Access Token** for the Metadata Connection. Like the JDBC URL, the Access Token is only required if different from that defined in the fabric. The Access Token created for the workspace must have read permission for the Catalogs or JDBC databases, tables, and schemas of interest. The access token should be a [service principal token](https://docs.databricks.com/en/administration-guide/users-groups/service-principals.html#manage-service-principals-in-your-account) (recommended) or a personal access token.

Define the **(8)Refresh Frequency** for Prophecy to sync the metadata from the workspace catalogs and JDBC warehouses accessible to the access token. **(9)Enable** the Metadata Connection to proceed with the sync and **(10)Add** the Metadata Connection.

Once a Connection is configured, the Connection details will be used to display data in the [Project Browser](/docs/concepts/project/project.md#project-browser) `Environment` tab.

![AddGem](./img/2-add-gem.png)

Inside a project, **(1)Attach a Fabric** which has a Metadata Connection. Now the **(2)Environment** tab lists the data accessible in the provider **(3)Workspace** synced at the frequency defined in the Metadata Connection. So thousands of tables should be visible more quickly as the data is synced regularly. Browse the catalogs, databases, and tables. Add a **(4)table** to the canvas as a dataset, and define whether your dataset should be a **(5)Source or Target**. Now the dataset **(6)appears** on the canvas, ready for transformations.

:::caution
Only one Metadata Connection can be enabled per fabric at once.
:::
