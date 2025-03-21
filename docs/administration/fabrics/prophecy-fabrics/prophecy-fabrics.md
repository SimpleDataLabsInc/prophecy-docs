---
title: Prophecy fabrics
description: Use Prophecy and SQL to run pipelines
id: prophecy-fabrics
sidebar_label: Prophecy fabrics
tags:
  - fabric
  - SQL
  - analyst
---

Prophecy fabrics are leveraged by pipelines in SQL projects for execution. A Prophecy fabric includes:

- Prophecy runtime configuration
- SQL warehouse configuration
- Dataplane configuration if you want additional, separate Prophecy runtimes

Use the following instructions to create a Prophecy fabric.

## Basic Info

1. From the left sidebar, click the **+** sign.
1. On the Create Entity page, select **Fabric**.
1. Enter a name for the fabric and choose a [team](docs/administration/teams-users/teamuser.md) for the fabric.
1. Click **Continue**.

## Providers

1. Configure the **Providers** page.
   - Choose Prophecy as the Provider Type.
   - Choose the SQL data provider that you will use for your SQL connection.
   - (Optional) Change the Prophecy Dataplane URL than you will use for the Prophecy runtime.
1. Click **Continue**.

## Connections

1. Select **+Connect SQL Warehouse**. This is required for SQL computation.
   - Name the connection.
   - Ensure the connection type matches the data provider you previously chose.
   - Enter the JDBC URL of the SQL warehouse.
   - Fill in the catalog name that you will write to by default.
   - Fill in the schema that you will write to by default.
   - Choose your authentication method.
1. Once these steps are complete, Prophecy will test the connection for you.
1. If the connection succeeds, you can **Save** the connection. Otherwise, Prophecy will provide an error to help you troubleshoot the connection.
1. You can also add additional [connections](./connections) here if you want to configure access to other external data sources.
