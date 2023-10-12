---
title: Metadata Connections
id: metadata-connections
description: sync catalogs, tables, schemas, etc into Prophecy's Project viewer
sidebar_position: 9
tags:
  - metadata
  - datasets
  - tables
  - connections
  - data
---

At Prophecy we're always looking to make your development faster. For teams that manage hundreds or thousands of tables in their data providers, listing data catalogs, tables, schemas, columns, and partitions can take precious minutes. In order to make this easier, Prophecy introduced Metadata Connections in release 3.2. The major benefit to Metadata Connections: straightaway you can list and view your data directly in the [Prophecy UI](/docs/concepts/project/project-browser.md#Environment-tab). Let's get down to basics by [defining](/docs/metadata/metadata-connections.md/#definition-of-entities) the relevant entities in Prophecy, then we'll walk through step by step how to [setup](/docs/metadata/metadata-connections.md/#how-to-setup-a-connection) and [monitor](/docs/metadata/metadata-connections.md/#how-to-monitor-a-connection) Metadata Connections.

## Definition of entities

### Metadata Connection

A Metadata Connection is a user-defined link between Prophecy and a data provider. Its purpose is to establish communication between Prophecy and external systems. For instance, a Connection can be established between Prophecy and platforms like Databricks (Catalog or JDBC) or Snowflake (coming soon). Different from Metadata Connections, Prophecy also supports [Airflow Connections](TODO: link to airflow page) which perform a similar function for Airflow jobs.

### Fabric

A Fabric represents a logical grouping of Connections. For Prophecy 3.2, each Fabric will enable only one Metadata Connection, but look for multiple connections per Fabric coming soon.

### Cluster/Warehouse

A Cluster, also referred to as a Warehouse, represents a collection of resources that a Metadata Connection can utilize. Clusters are specific to certain data platforms or systems. For instance, a Snowflake Metadata Connection can access different warehouses that are available to the user. By associating a Connection with a workspace or warehouse, users can leverage the resources defined by the data providers.

## How to Setup a Metadata Connection

[Who defines the connection, eg warehouse JDBC url, what permissions should that URL have: Read only permissions to all the databases, tables, schemas]

## How to Monitor a Metadata Connection
