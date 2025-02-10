---
title: Metadata connections
id: metadata-connections
description: Sync catalogs, tables, schemas, etc into Prophecy's project viewer
sidebar_position: 1
tags:
  - metadata
  - datasets
  - tables
  - connections
  - data
---

When you create a metadata connection in a [fabric](docs/concepts/fabrics/fabrics.md), Prophecy can connect to the data provider (like Databricks) and **cache metadata on a regular basis**. If you have thousands of objects, such as tables or views, this continuous sync can make fetching objects much faster in Prophecy—particularly in the Environment tab of the [Project Editor](/docs/concepts/project/project.md#project-editor).

:::note
Different from metadata connections, Prophecy also supports Airflow connections which perform a similar function for Airflow jobs.
:::

## Metadata connection setup

Metadata connections are set up inside individual fabrics. This means that anyone with access to the fabric can take advantage of the metadata connection.

1. Initiate the creation of a new fabric.
1. In the **Connections** tab, add a new connection.
1. Define a **Connection Name**.
1. Give the connection a **Description** (optional).
1. Add the **Workspace URL** for the connection. For example, this could be a Databricks workspace URL. In this case, the connection would sync all accessible Data Catalogs.
1. If you choose to define a **JDBC URL** different than that defined in the fabric, the Metadata Connection JDBC will be the only JDBC included in the syncing.
1. Add the **Access Token** for the connection (if different from the fabric). More information on access tokens can be found below.
1. Fill in the **Refresh Frequency** at which you want Prophecy to sync the metadata.
1. **Enable** the metadata connection.
1. **Add** the metadata connection to save it.

![CreateConnection](./img/1-create-connection.png)

:::info
While you can create multiple metadata connections per fabric, only one connection can be enabled at a time.
:::

## Metadata connection usage

To use a metadata connection in a project:

1. Attach to a fabric that has a metadata connection.
1. Open the Environment tab to access the data.
1. Note the workspace that is synced at the frequency defined in the metadata connection.
1. Add a table to the canvas as a dataset.
1. Define whether your dataset should be added as a [Source or Target](docs/Spark/gems/source-target/source-target.md) gem.
1. Now the dataset appears on the canvas, ready for transformations.

![AddGem](./img/2-add-gem.png)

## Execution environment requirements

### SQL warehouses or clusters

Prophecy supports metadata collection through SQL warehouses and clusters on Databricks and Snowflake. In general, we recommend creating a [SQL warehouse](https://docs.databricks.com/en/sql/admin/create-sql-warehouse.html#create-a-sql-warehouse) or cluster dedicated to the metadata connection. Using this approach, the recurring metadata syncs can have a cluster defined with appropriate resources, whereas execution clusters defined in the [fabric](/docs/getting-started/concepts/fabrics/fabrics.md) would have a separate resource profile.

### Provider tokens

Prophecy metadata connections use APIs to make calls to your data provider accounts. For this access, a service principal is recommended. For Databricks providers, follow these [instructions](https://docs.databricks.com/en/dev-tools/service-principals.html#provision-a-service-principal-for-databricks-automation---databricks-ui) to create a service principal and associated token. If you are unable to set up a service principal, use a standard Personal Access Token.

### Permissions

Regardless of the type of credentials you use, those credentials will need to come with access on the environment side to all workspaces, warehouses, or clusters you want to see with the metadata connection.

To grant permissions to the service principal on the Unity Catalog (granting the same permission on all schemas within that catalog), run the command:

```
GRANT SELECT ON CATALOG <catalog> TO <service_principal>;
```

To grant permissions to the service principal for Hive Metastore, run the command:

```
GRANT USAGE, READ_METADATA, SELECT ON CATALOG <hive_metastore> TO <service_principal>;
```
