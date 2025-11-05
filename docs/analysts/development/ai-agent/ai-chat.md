---
title: Prophecy Agent
id: ai-chat
slug: /analysts/ai-chat
description: Chat with our AI agent to generate pipelines
tags:
  - analyst
  - ai
  - agent
---

As you build out your pipelines in SQL projects, Prophecy's AI agent is available to help at each step of development. The AI agent helps you work faster by handling common tasks, such as:

- Finding and exploring data in your fabric to use pipeline sources
- Adding gems to the canvas to create a data processing flow
- Providing previews of the input and output of suggested transformations

:::note
Agent responses are dynamically generated and may vary slightly from one request to another.
:::

## Get started

To get started with Prophecy's AI agent, follow the [AI agent quick start](/agent-quick-start).

The quick start provides a walkthrough on how to interact with the chat interface and guides you through common agent use cases.

## Agent capabilities

Prophecy's AI agent can help you build pipelines in the following ways:

### Search through your connected warehouse

Use table metadata—table names, schemas, owners, and tags—to locate datasets from your fabric. When you don't know the exact table name or work with many tables, searching through metadata eliminates guesswork and reduces time spent browsing schema lists.

### Retrieve and visualize sample data from the warehouse

Preview data samples and visualizations before selecting datasets for your pipeline. Understanding column structures, data patterns, and potential quality issues helps you make informed decisions about which tables to use.

### Build pipelines step-by-step or all in one prompt

Generate complete pipelines from a single description when requirements are clear, or build incrementally gem by gem, adding one transformation at a time in a linear sequence. Instead of manually dragging gems onto the canvas and configuring each step, describe your goal and let the agent handle the setup.

### Remove redundant steps and improve readability

Clean up existing pipelines by removing unnecessary transformations and consolidating logic. Easier-to-maintain pipelines execute faster, and clearer logic helps teammates understand your work without deciphering complex transformation chains.

### Summarize pipeline logic and datasets

Get a high-level explanation of what a pipeline does and which datasets it uses without reading through every transformation. Understanding existing pipelines quickly helps with onboarding, while documenting your own work makes it easier for others to use and modify later.

## Features in progress

We are building several capabilities for future use:

- **Search through external connections and APIs**: Search for data in your fabric beyond your connected data warehouse, including cloud storage, reporting platforms, and other sources.
- **Find tables based on similar datasets**: Provide sample data to the agent and retrieve similar datasets from your fabric.
- **Make targeted updates to an existing pipeline**: Iterate on granular aspects of the pipeline while ensuring previous work remains intact.
- **Find pipeline optimizations and simplifications**: Identify opportunities to improve pipeline performance using methods such as query optimizations, caching, or simplified joins.
- **Prompt a reindex of the knowledge graph**: Ask the agent to start crawling sources to ensure the most up-to-date metadata in the knowledge graph.
- **Build and run data tests and unit tests**: Generate tests to validate data quality and catch errors before pipelines run in production.
- **Recommend packages for your project**: Find relevant packages that help build out your pipeline for your specific use case.
- **Schedule and deploy projects**: Automate moving pipelines from development to production.
- **Perform version control actions**: Track changes, create branches, and manage pipeline versions through the agent interface.

## What's next

Deep dive into additional AI agent functionality in the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
