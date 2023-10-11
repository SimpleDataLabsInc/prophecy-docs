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

At Prophecy we're always looking to make your development faster. One area that every Data Engineer encounters is understanding thier catalogs, tables, schemas, columns, and partitions. In order to make this easier, Prophecy introduced Metadata Connections in release 3.2. The major benefit to Metadata Connections: straightaway you can list and view your data directly in the Prophecy UI. Let's get down to basics by defining the entities in Prophecy, then we'll walk through step by step how to create a Metadata Connection, and explore which connections are supported and how to monitor them.

## Definition of entities

### Connection

A Connection is a user-defined link between Prophecy, a data provider, and third-party entities. Its purpose is to establish communication between Prophecy and external systems. For instance, a Connection can be established between Prophecy and platforms like Databricks (Catalog or JDBC) or Snowflake (coming soon).

### Fabric

A Fabric represents a logical grouping of Connections. For Prophecy 3.2, each Fabric will enable only one connection, but look for multiple connections per Fabric coming soon.

### Cluster/Warehouse

A Cluster, also referred to as a Warehouse, represents a collection of resources that a Connection can utilize. Clusters are specific to certain data platforms or systems. For instance, a Snowflake connection can access different warehouses that are available to the user. By associating a Connection with a workspace or warehouse, users can leverage the resources defined by the data providers.

## How to Setup a Connection

[Who defines the connection, eg warehouse JDBC url, what permissions should that URL have: Read only permissions to all the databases, tables, schemas]

## What types of Metadata Connections are supported?

Prophecy supports metadata connections via JDBC.
As of Prophecy 3.2, Spark metastore and Unity Catalog are the only supported catalogs.
Coming soon we'll support more Metadata Connection types.

## How to Monitor a Connection
