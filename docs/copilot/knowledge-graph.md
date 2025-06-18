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
Prophecy generates knowledge graphs including SQL projects information only. Spark project metadata is not included in the knowledge graph.
:::

## Metadata

Knowledge graphs are generated per-team in Prophecy. Each knowledge graph includes metadata for a project’s entities (such as datasets, schemas, seeds, models, and pipelines) and the statistical usages of these entities. The knowledge graph only includes metadata—your data itself is never stored. For more details, see [Data privacy with Data Copilot](/docs/copilot/copilot-data-privacy.md).

![Knowledge Graph](img/copilot_knowledge_graph.png)

## Process

When you interact with Copilot, Prophecy follows a multi-step process to generate what you need. First, Copilot enriches your prompt using the knowledge graph. This step adds detailed context about your project’s datasets, schemas, and other entities, which helps the agent understand exactly what you're referring to. The enhanced prompt is then sent to OpenAI’s large language model (LLM), which returns SQL code based on the provided context.

Once the code is generated, Prophecy validates it and automatically corrects any errors when possible. After validation, Prophecy converts the code into a visual pipeline, which is displayed on the canvas for you to review and customize.

## Indexing

Only datasets in the SQL warehouse are indexed in the knowledge graph. To make sure that Copilot and AI agent has the most up-to-date information, you can manually refresh tables to update metadata in the knowledge graph.

### Refresh tables

If Copilot or the AI agent can't find the tables you reference, or if responses seem outdated, you can manually refresh the table index to pull in the latest metadata. There are a few ways to do this:

- If the [agent](/analysts/ai-explore#troubleshooting) can’t locate a table during your conversation, it will prompt you to refresh the index.
- In the left sidebar, click on the [Environment](/analysts/connections#environment-browser) tab. Below your connections, you’ll see a Refresh Tables button.
- Open [connection](/administration/fabrics/prophecy-fabrics/connections/) details in your fabric settings. At the bottom of the connection dialog, you’ll find a Refresh Tables option along with a status indicator showing indexing progress.
