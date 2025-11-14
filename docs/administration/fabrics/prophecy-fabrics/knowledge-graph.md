---
title: Knowledge graph indexer
id: knowledge-graph-config
description: Configure automated knowledge graph indexing for Prophecy fabrics
tags:
  - agents
  - knowledge graph
---

A [knowledge graph](/knowledge-graph) is an internal index that maps your data environment. Prophecy uses knowledge graphs to help AI agents understand your SQL warehouse structure. The knowledge graph contains metadata about tables, schemas, columns, and data types—not your actual data.

When you interact with AI agents, Prophecy uses the knowledge graph to add context to your prompts. This context helps AI agents generate accurate SQL code that references the correct tables and columns in your warehouse.

Prophecy automatically indexes your data environment when you create a fabric. Afterword, you need to schedule the indexer to run automatically or manually trigger it.

:::info
Prophecy only indexes tables from your SQL warehouse. Datasets from external connections are not included in the knowledge graph.
:::

## How indexing works

The knowledge graph indexer is a process that:

1. Connects to your SQL warehouse using configured credentials.
2. Scans catalogs and schemas that the identity has access to in your warehouse connection.
3. Indexes table names, schemas, column names, data types, and other metadata.
4. Updates the knowledge graph with this information.

## Configure automatic indexing

Configure scheduled crawling to keep your index up-to-date without manual intervention.

1. In Prophecy, navigate to **Metadata > Fabrics**.
1. Select the fabric where you will enable indexing.
1. Open the **Connections** tab.
1. Click the pencil icon to edit the **SQL Warehouse Connection**.
1. In the connection dialog, find the **Knowledge Graph Indexer** tile and toggle on **Enable Knowledge Graph Periodic Indexing**.
1. Configure the schedule to run hourly, daily, or weekly.

The schedule must have a defined frequency and timezone. The default timezone is the timezone from where you access Prophecy.

**Hourly**

| Parameter             | Description                                                                                                                | Default                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Repeat every ... from | The interval in hours between pipeline runs, starting at a specific time.<br/>Example: Repeat every 2 hours from 12:00 AM. | Every 1 hour<br/>starting at 2:00 AM |

**Daily**

| Parameter | Description                                                                | Default |
| --------- | -------------------------------------------------------------------------- | ------- |
| Repeat at | The time of day when the schedule will run.<br/>Example: Repeat at 9:00 AM | 2:00 AM |

**Weekly**

| Parameter | Description                                                                                         | Default |
| --------- | --------------------------------------------------------------------------------------------------- | ------- |
| Repeat on | The day(s) of the week that the pipeline will run.<br/>Example: Repeat on Monday, Wednesday, Friday | Sunday  |
| Repeat at | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                      | 2:00 AM |

## Manually trigger indexing

To manually trigger indexing from your fabric:

1. In Prophecy, navigate to **Metadata > Fabrics**.
1. Select the fabric where you will enable indexing.
1. Open the **Connections** tab.
1. Click the pencil icon to edit the **SQL Warehouse Connection**.
1. At the bottom of the connection dialog, you’ll find a **Table Indexing Status**.
1. Click **Start** to reindex the tables and track its progress. You'll be able to view the progress of processed schemas and directories.

To trigger this process from the [Environment tab](/analysts/connections#environment-browser):

1. Open a project in the project editor.
1. Attach to the fabric that you wish to reindex.
1. In the left sidebar, click on the Environment tab.
1. Below your connections, you’ll see a **Missing Tables?** callout.
1. Click **Refresh** to reindex the SQL warehouse.

:::tip
You might be prompted to manually trigger indexing if the [agent](/analysts/ai-explore#troubleshooting) can’t locate a table during a conversation.
:::

## Add separate authentication for the indexer

Prophecy lets you configure authentication credentials for the knowledge graph indexer separately from pipeline execution credentials, allowing you to control which tables get indexed and how results are scoped for different users.

You can configure the knowledge graph indexer to use separate authentication credentials from pipeline execution.

- **Pipeline Development and Scheduled Execution** credentials control how pipelines authenticate when they run.
- **Knowledge Graph Indexer** credentials control how the crawler authenticates when it indexes your warehouse on an automated schedule.

If you don't add separate authentication for the indexer, it will use the pipeline development credentials when running.

:::note
The knowledge graph indexer always uses the same identity as the pipeline development identity if the pipeline development authentication strategy is [Personal Access Token](/administration/fabrics/prophecy-fabrics/connections/databricks#personal-access-token-pat) (rather than OAuth). Therefore, this section is not applicable if you use the PAT authentication method.
:::

:::caution
The knowledge graph indexing permissions should be equal to or a superset of the pipeline execution permissions. This ensures that the same tables you use in your pipelines are indexed by the knowledge graph. However, Prophecy does not enforce this.
:::

### Prerequisites

Before configuring the knowledge graph indexer, you must:

- Upgrade to Prophecy 4.2.2 or later.
- Configure your SQL warehouse connection with a [Databricks connection](docs/administration/fabrics/prophecy-fabrics/connections/databricks.md). Other SQL warehouses are not supported.
- Be an administrator. Though there are no role-based restrictions for configuring the knowledge graph indexer, you need to understand how authentication works in Prophecy and in Databricks.
- Give appropriate permissions to the identity that will be used to run the indexer. The identity must have `MANAGE` access on the assets that you wish to index in the knowledge graph.

### Procedure

To configure the knowledge graph indexer for a fabric:

1. In Prophecy, navigate to **Metadata > Fabrics**.
1. Select the fabric where you will enable indexing.
1. Open the **Connections** tab.
1. Click the pencil icon to edit the **SQL Warehouse Connection**.
1. In the connection dialog, find the **Knowledge Graph Indexer** tile.
1. Configure authentication based on your pipeline development authentication method:

   If you use User OAuth for **pipeline development:**

   - Choose either OAuth (User) or OAuth (Service Principal) for the knowledge graph indexer.

   If you use Service Principal OAuth for **pipeline development:**

   - Provide the service principal credentials for the indexer. You can reuse your pipeline development credentials if applicable.

#### Service Principal OAuth (recommended)

Use a service principal to index your data environment. Recommended for production and scheduled indexing, since credentials don't expire.

- **Configuration**: Reuse credentials provided for pipeline development or provide a different **Service Principal Client ID** and **Client Secret**.
- **What gets indexed**: The indexer indexes all tables that the service principal can access.

:::info
If you use **User OAuth** for pipeline development, the knowledge graph honors the permissions of the user, even when the indexer uses the service principal credentials to crawl. In other words, Prophecy enforces that each user only sees tables they have permission to access.
:::

#### User OAuth

Use an individual's identity to index your data environment.

- **Configuration**: User OAuth always uses the same app registration as configured for pipeline development.
- **What gets indexed**: The indexer indexes all tables that the individual user can access.
- **Limitations**: This requires frequent user logins. When user credentials expire, scheduled crawling can fail.
