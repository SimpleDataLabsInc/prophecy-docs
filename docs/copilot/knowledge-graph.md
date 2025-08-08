---
title: Knowledge graph
id: knowledge-graph
slug: /knowledge-graph
sidebar_position: 1
description: Learn how Prophecy uses knowledge graphs to enhance prompts
tags:
  - copilot
  - knowledge graph
---

Copilot works by enhancing prompts using a knowledge graph, or an internal map of your data environment. This gives Copilot the context it needs to generate accurate, relevant answers.

:::note
Prophecy generates knowledge graphs for SQL projects only. Knowledge graphs are not used for Spark projects.
:::

## Overview

Knowledge graphs are generated per [fabric](/fabrics) in Prophecy. Each knowledge graph contains information from fabrics and other entities, including the statistical usages of these entities. It also contains computed fields that further refine Copilot's capabilities.

![Knowledge Graph](img/copilot_knowledge_graph.png)

:::info
Your data itself is never stored in the knowledge graph. For more details, see [Data privacy with Data Copilot](/docs/copilot/copilot-data-privacy.md).
:::

## Process

When you interact with Copilot, Prophecy follows a multi-step process to generate what you need. First, Copilot enriches your prompt using the knowledge graph. This step adds detailed context about your project’s datasets, schemas, and other entities, which helps the agent understand what you're referring to. The enhanced prompt is then sent to OpenAI’s large language model (LLM), which returns SQL code based on the provided context.

Once the code is generated, Prophecy validates it and automatically corrects any errors when possible. After validation, Prophecy converts the code into a visual pipeline, which is displayed on the canvas for you to review and customize.

## Indexing

When generating the knowledge graph, Prophecy indexes your SQL warehouse connection. To make sure that Copilot and AI agent has the most up-to-date information, you can manually refresh tables to update the knowledge graph index.

:::info
Prophecy only indexes tables from your SQL warehouse. Datasets from external connections are not included in the knowledge graph.
:::

### Refresh tables

If Copilot or the AI agent can't find the tables you reference, or if responses seem outdated, you can manually refresh the table index to pull in the latest information. There are a few ways to do so.

#### SQL Warehouse Connection

To refresh tables from the fabric settings:

1. Open the [SQL Warehouse Connection](/administration/fabrics/prophecy-fabrics/connections/) details in your fabric settings.
1. At the bottom of the connection dialog, you’ll find a **Table Indexing Status**.
1. Click **Start** to reindex the tables and track its progress.

![Databricks connection reindex](img/fabric-table-index.png)

#### Environment tab

To refresh tables from the [Environment tab](/analysts/connections#environment-browser):

1. Open a project in the project editor.
1. Attach to the fabric that you wish to reindex.
1. In the left sidebar, click on the Environment tab.
1. Below your connections, you’ll see a **Missing Tables?** callout.
1. Click **Refresh** to reindex the SQL warehouse.

#### Agent suggestion

If the [agent](/analysts/ai-explore#troubleshooting) can’t locate a table during your conversation, it will prompt you to refresh the index.

## Managing scope

Knowledge graphs are generated per fabric. To control which tables Prophecy indexes for a knowledge graph, configure access permissions at the warehouse level. In summary:

- Knowledge graph indexing is determined by the credentials used in your fabric's warehouse connection.
- To limit indexed tables, restrict permissions for the authentication credentials in your warehouse (e.g., Databricks).
- This ensures that teams only see tables they have access to in their knowledge graphs.

For example, if your team uses fabrics connected to Databricks warehouses, you would modify the access permissions of the service account or user credentials configured in the fabric connection settings.

:::note
When a fabric is configured with OAuth authentication, the knowledge graph indexes data using the credentials provided during fabric setup, not the currently logged-in user's credentials. Be aware that these credentials may differ from the active user's, which can affect access and visibility within the knowledge graph.
:::
