---
title: Knowledge graph crawling
id: knowledge-graph-config
description: Configure automated knowledge graph indexing for Prophecy fabrics
tags:
  - agents
  - knowledge graph
---

A [knowledge graph](/knowledge-graph) is an internal index that maps your data environment. Prophecy uses knowledge graphs to help AI agents understand your SQL warehouse structure. The knowledge graph contains metadata about tables, schemas, columns, and data types—not your actual data.

When you interact with AI agents, Prophecy uses the knowledge graph to add context to your prompts. This context helps AI agents generate accurate SQL code that references the correct tables and columns in your warehouse.

You can either manually run the crawler or schedule the crawler to run automatically at defined intervals.

:::info
Prophecy only indexes tables from your SQL warehouse. Datasets from external connections are not included in the knowledge graph.
:::

## How knowledge graph crawling works

The knowledge graph crawler is a process that scans your SQL warehouse and builds the knowledge graph index. The crawler:

1. Connects to your SQL warehouse using configured credentials.
2. Scans catalogs and schemas that the identity has access to in your warehouse connection.
3. Indexes table names, schemas, column names, data types, and other metadata.
4. Updates the knowledge graph with this information.

## Manually trigger knowledge graph crawling

You can manually crawl tables without configuring additional knowledge graph settings. In this case, the crawler uses the pipeline development credentials for permissions scope.

To manually trigger crawling from your fabric:

1. Open the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/connections/) details in your fabric settings.
1. At the bottom of the connection dialog, you’ll find a **Table Indexing Status**.
1. Click **Start** to reindex the tables and track its progress. You'll be able to view the progress of processed schemas and directories.

To trigger this process from the [Environment tab](/analysts/connections#environment-browser):

1. Open a project in the project editor.
1. Attach to the fabric that you wish to reindex.
1. In the left sidebar, click on the Environment tab.
1. Below your connections, you’ll see a **Missing Tables?** callout.
1. Click **Refresh** to reindex the SQL warehouse.

:::tip
You might be prompted to manually trigger a crawl if the [agent](/analysts/ai-explore#troubleshooting) can’t locate a table during a conversation.
:::

## Automate knowledge graph crawling

Configure automated knowledge graph crawling to keep your index current without manual intervention. Automated crawling runs on a schedule you define, scanning your SQL warehouse and updating the knowledge graph as your data environment changes. You configure authentication credentials for the crawler separately from pipeline execution credentials, allowing you to control which tables get indexed and how results are scoped for different users.

### Prerequisites

Before configuring knowledge graph crawling, you must:

- Upgrade to Prophecy 4.2.2 or later.
- Configure your SQL warehouse connection with a [Databricks connection](docs/administration/fabrics/prophecy-fabrics/connections/databricks.md). Other SQL warehouses are not supported.
- Be an administrator. Though there are no role-based restrictions for configuring the knowledge graph crawler, you need to understand how authentication works in Prophecy and in Databricks.

### Enable knowledge graph crawling

To configure knowledge graph crawling for a fabric:

1. In Prophecy, navigate to **Metadata > Fabrics**.
1. Select the fabric where you will enable crawling.
1. Open the **Connections** tab.
1. Click the pencil icon to edit the **SQL Warehouse Connection**.
1. In the connection dialog, find the **Knowledge Graph Crawler** tile and toggle on **Enable Knowledge Graph Crawling**.
1. Configure the [authentication method](#add-authentication-credentials) as described below.
1. Optionally, [configure a schedule](#configure-the-crawler-schedule) to run the crawler automatically.

### Add authentication credentials

You can configure the knowledge graph crawler to use separate authentication credentials from pipeline execution.

- **Pipeline Development and Scheduled Execution** credentials control how pipelines authenticate when they run.
- **Knowledge Graph Crawler** credentials control how the crawler authenticates when it indexes your warehouse on an automated schedule.

:::caution
The knowledge graph crawler permissions should be equal to or a superset of the pipeline execution permissions. This ensures that the same tables you use in your pipelines are indexed by the knowledge graph. However, Prophecy does not enforce this.
:::

There are multiple ways that Prophecy can assign permissions to automated knowledge graph crawls:

- [Service Principal OAuth](#service-principal-oauth-recommended)
- [User OAuth](#user-oauth)
- [Personal Access Token (PAT)](#pat)

### Service Principal OAuth (recommended)

Use a service principal to crawl your data environment. Recommended for production and scheduled crawling, since credentials don't expire.

- **Configuration**: Reuse credentials provided for pipeline development or provide a different **Service Principal Client ID** and **Client Secret**.
- **What gets indexed**: The crawler indexes all tables that the service principal can access.

The service principal used for knowledge graph crawling must have sufficient permissions in Databricks:

- **Catalog access**: Manage access on the catalog specified in your warehouse connection.
- **Table listing**: Ability to list tables in the catalog and schemas you want to index.
- **Metadata access**: Ability to fetch table schemas, column information, and other metadata.

When users interact with AI agents, the knowledge graph scopes results based on the pipeline execution authentication method:

- **Pipeline execution uses User OAuth (U2M)**: Results are scoped to each user's individual credentials. Each user only sees tables they have permission to access.
- **Pipeline execution uses Service Principal OAuth (M2M)**: Results are scoped to the service principal's permissions. All users see the same set of tables.

### User OAuth

Use an individual's identity to crawl your data environment.

- **Configuration**: User OAuth always uses the same app registration as configured for pipeline development.
- **What gets indexed**: The crawler indexes all tables that the individual user can access.
- **Limitations**: This requires frequent user logins. When user credentials expire, scheduled crawling can fail.

### PAT

Use a Personal Access Token to crawl your data environment.

- **Configuration**: If you use a PAT for pipeline development, Prophecy reuses your PAT identity for knowledge graph crawling.
- **What gets indexed**: The crawler indexes all tables that the PAT identity can access.

### Configure the crawler schedule

You can schedule the knowledge graph crawler to run automatically at defined intervals. The schedule must have a defined frequency and timezone. The default timezone is the timezone from where you access Prophecy.

The following tables define the required parameters for each frequency.

#### Minute

| Parameter    | Description                                                                          | Default  |
| ------------ | ------------------------------------------------------------------------------------ | -------- |
| Repeat every | The interval in minutes between pipeline runs.<br/>Example: Repeat every 10 minutes. | 1 minute |

#### Hourly

| Parameter             | Description                                                                                                                | Default                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Repeat every ... from | The interval in hours between pipeline runs, starting at a specific time.<br/>Example: Repeat every 2 hours from 12:00 AM. | Every 1 hour<br/>starting at 12:00 AM |

#### Daily

| Parameter | Description                                                                | Default |
| --------- | -------------------------------------------------------------------------- | ------- |
| Repeat at | The time of day when the schedule will run.<br/>Example: Repeat at 9:00 AM | 2:00 AM |

#### Weekly

| Parameter | Description                                                                                         | Default  |
| --------- | --------------------------------------------------------------------------------------------------- | -------- |
| Repeat on | The day(s) of the week that the pipeline will run.<br/>Example: Repeat on Monday, Wednesday, Friday | Sunday   |
| Repeat at | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                      | 12:00 AM |

#### Monthly

| Parameter | Description                                                                                     | Default  |
| --------- | ----------------------------------------------------------------------------------------------- | -------- |
| Repeat on | The day of the month that the pipeline will run.<br/>Example: Repeat on the first of the month. | 1        |
| Repeat at | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                  | 12:00 AM |

#### Yearly

| Parameter     | Description                                                                                         | Default  |
| ------------- | --------------------------------------------------------------------------------------------------- | -------- |
| Repeat every  | The day and month that the pipeline will run each year.<br/>Example: Repeat every March 15.         | None     |
| Repeat on the | The specific occurrence of a day in a given month.<br/>Example: Repeat on the third Monday of June. | None     |
| Repeat at     | The time of the day that the pipeline will run.<br/>Example: Repeat at 9:00 AM                      | 12:00 AM |
