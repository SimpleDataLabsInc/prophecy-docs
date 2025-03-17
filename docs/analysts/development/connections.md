---
title: Connections
id: connections
description: Utilize external data providers with connections
tags: []
---

Connections make it easy to use data from external sources directly in your Prophecy projects. You can set up connections as you build your pipelines, and any new connections will be stored in your attached [fabric](docs/administration/prophecy-fabrics/prophecy-fabrics.md).

To see a complete list of connections, view the [connections](docs/administration/prophecy-fabrics/connections/connections.md) that are available for Prophecy fabrics.

## Add connections to the Environment browser

When you create a connection, Prophecy accesses specific data from the external provider using your credentials and inherits the same permissions as your user account. The data will appear in the [Environment browser](docs/analysts/development/pipelines/pipelines.md#sidebar) of the project sidebar, allowing you to easily locate data, explore data, and add data to your pipeline canvas.

<!-- ![Environment browser](img/environment-tab-connections.png) -->

When you attach a fabric to your project, you will by default see the data from the SQL warehouse in the Environment browser. If you want to see more connections in your project, you can click **+ Connect more data** at the bottom of the Environment browser. The new connection will be automatically saved to your fabric. To understand how to configure individual connection types, visit the [list of connections](docs/administration/prophecy-fabrics/connections/connections.md).

:::info
All connections require **secrets** to keep your credentials safe. View the documentation on [secrets](docs/administration/secrets/secrets.md) to learn more.
:::

## Use connections in external Source/Target gems

Source gems that you add to your canvas directly from the Environment browser are **completely configured** and ready for use. Conversely, if you add [Source and Target](docs/analysts/development/gems/source-target/source-target.md) gems to your canvas from the gem drawer, you need to configure the gem before use.

1. Add a Source or Target gem to your canvas.
1. Open the gem to view the configuration dialogue.
1. Select the correct source for your gem.
1. Open the location tab of the gem.
1. Select an existing connection for your gem, or create a new one.
1. Verify the schema of your table.
1. Save the gem.

:::caution
When setting up external sources and targets, consider the primary SQL connection in your Prophecy fabric. Processing tables natively in the SQL warehouse will be fast. Processing external data is slower. **Do not create an external connection that duplicates your primary SQL warehouse connection.**
:::
