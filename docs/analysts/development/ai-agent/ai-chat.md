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

## Feature support matrix

The following tables detail the agent capabilities that are and are not supported in Prophecy.

### Explore data

| Capability                                                                            | Supported | Not Supported |
| ------------------------------------------------------------------------------------- | --------- | ------------- |
| Search schema names, column metadata, owners, or tags to locate datasets              | ✔️        |               |
| Visualizes charts, correlations, and anomalies from tables                            | ✔️        |               |
| Ask for sample data from tables                                                       | ✔️        |               |
| Examine column values and distributions to match datasets by example rather than name |           | ✔️            |
| Search and preview datasets from connected warehouses, APIs, or external domains      |           | ✔️            |

### Transform data

| Capability                                                                     | Supported | Not Supported |
| ------------------------------------------------------------------------------ | --------- | ------------- |
| Build steps in a pipeline using multiple prompts                               | ✔️        |               |
| Creates all steps, from inputs to transformations and outputs, from one prompt | ✔️        |               |
| Standardize naming, data types, and units between sources                      | ✔️        |               |
| Remove redundant steps and improve readability                                 | ✔️        |               |
| Refine one step or component without changing others                           |           | ✔️            |
| Suggest query optimizations, caching, or simplification                        |           | ✔️            |
| Global find-and-replace for expressions                                        |           | ✔️            |

### Document pipelines

| Capability                                                                        | Supported | Not Supported |
| --------------------------------------------------------------------------------- | --------- | ------------- |
| Summarize pipeline logic and datasets in clear language                           | ✔️        |               |
| Edit granular details of a generated document without regenerating the whole page |           | ✔️            |
| Answer business data questions                                                    |           | ✔️            |

### Additional capabilities

| Capability                                              | Supported | Not Supported |
| ------------------------------------------------------- | --------- | ------------- |
| Prompt a reindex of the knowledge graph                 |           | ✔️            |
| Export chat history for reuse of successful prompts     |           | ✔️            |
| Suggest data quality constraints                        |           | ✔️            |
| Identify causes of test failures and fixes tests        |           | ✔️            |
| Create and edit unit tests                              |           | ✔️            |
| Read and fix code linting issues in the project         |           | ✔️            |
| Query historical pipeline execution                     |           | ✔️            |
| Search entities in Prophecy such as projects or fabrics |           | ✔️            |
| Recommend packages and maintain packages automatically  |           | ✔️            |
| Create and deploy apps                                  |           | ✔️            |
| Perform version control actions (Git)                   |           | ✔️            |
| Schedule and deploy projects                            |           | ✔️            |

## What's next

Deep dive into additional AI agent functionality in the following pages.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```
