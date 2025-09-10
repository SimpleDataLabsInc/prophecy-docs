---
title: Prophecy AI
id: copilot
slug: /prophecy-ai
sidebar_class_name: hidden
description: The AI assistant for data pipelines and models
tags:
  - concepts
  - copilot
  - generativeai
---

import Mermaid from '@theme/Mermaid';

This page introduces Prophecy's AI capabilities, including descriptions of its task-oriented and agentic features.

:::info
While Prophecy's AI features are enabled by default, they can be disabled upon request for Dedicated SaaS and self-hosted deployments.
:::

## Introduction

Prophecy's Copilot is built to help data teams speed up data pipeline development. Instead of working only on code, Copilot can assist with developing visual pipelines, so less technical users can contribute without writing SQL or Python. For technical users, Copilot accelerates development by generating expressions, suggesting transformations, and creating scripts.

Copilot works by understanding your project metadata. It learns from information like project descriptions, table names and descriptions, column names and descriptions, and other metadata.

For SQL projects only, Prophecy generates [knowledge graphs](/knowledge-graph) to enable additional functionality like AI agent. In addition to project metadata, knowledge graphs also contain information about fabrics, including dataset information for [data exploration](/analysts/ai-explore).

:::note
Prophecy only tests prompts in English. Other languages may work, but support depends on the LLM provider and should be explored at your own discretion.
:::

## Capabilities

Copilot helps you with one-click tasks such as automated documentation generation, error fixing with one-click solutions, and the ability to generate unit tests and data quality checks. Additionally, Prophecy's AI agent can help you build SQL pipelines through natural language. You can ask the agent to help with tasks such as adding gems, exploring datasets in your SQL warehouse, and visualizing data.

To learn more, see [Copilot for SQL projects](/analysts/ai-features) and [Copilot for Spark projects](/engineers/copilot).

![AI Example](img/agent-chat.gif)

## LLM providers and model families

Prophecy integrates with multiple LLM providers and model families. This gives you flexibility in choosing the right models depending on your deployment type and performance needs.

SaaS uses a Prophecy-managed OpenAI subscription with GPT-4o and GPT-4o mini. Meanwhile, Dedicated SaaS and self-hosted deployments are expected to connect to customer-managed endpoints.

Each AI endpoint configuration requires two models:

- Smart LLM for complex tasks, such as `gpt-4o`.
- Fast LLM for lightweight tasks, such as `gpt-4o-mini`.

:::info
For Dedicated SaaS deployments, contact Prophecy to configure a custom endpoint.
:::

### Supported providers

<Mermaid
value={`flowchart LR
subgraph L1["Layer 1 — Application"]
P["Prophecy"]
end

subgraph L2["Layer 2 — Model Providers"]
DOA["Direct OpenAI API"]
EOA["Enterprise OpenAI API"]
AOA["Azure OpenAI"]
DGA["Direct Gemini API"]
VA["Vertex AI"]
DAA["Direct Anthropic API"]
end

subgraph L3["Layer 3 — Model Families"]
GPT["OpenAI GPT models"]
GEM["Google Gemini models"]
CLAUDE["Anthropic Claude models"]
end

P --> DOA
P --> EOA
P --> AOA
P --> DGA
P --> VA
P --> DAA

DOA --> GPT
EOA --> GPT
AOA --> GPT
DGA --> GEM
VA --> GEM
DAA --> CLAUDE

%% Remove background styling from subgraphs
classDef subgraphStyle fill:transparent,stroke:#333,stroke-width:1px
class L1,L2,L3 subgraphStyle
`}
/>

### Supported models

While Prophecy can connect to all providers shown in the diagram, the following models are officially tested and supported:

- `gpt-4o`
- `gpt-4o-mini`
- `gemini-2.5-flash`
- `gemini-2.5-flash-lite`

## Security

Prophecy employs rigorous industry practices to safeguard the security of the Prophecy application and maintain the privacy of customer data. Below are just a few components of our comprehensive security strategy and system structure:

- Prophecy **does not** store or send your data to any third-party large language model (LLM) providers. Instead, Prophecy uses rich metadata to construct its knowledge graph. As a result, Prophecy can interface with LLM providers while keeping your data private.
- The Prophecy IDE is hosted on secure servers on AWS. All storage systems are encrypted, and all servers are tightly access controlled and audited. Metadata is encrypted in transit at all times..
- The Prophecy IDE accesses your environment through a single IP address dedicated to you, allowing you to protect access to your data resources at the network level. The credentials are stored per user, and only a fully authenticated user can access their environment.
- Prophecy conducts annual penetration tests to test its posture and identify vulnerabilities. For our latest penetration test report, see the [Pentest Report](https://security.prophecy.io/?itemUid=722b9671-c0d5-4a19-a5f7-0ad8fd81307c&source=click).
- Prophecy maintains SOC-2 compliance as audited by PrescientAssurance.

Read more details on Prophecy’s security and compliance posture at our [Security Portal](https://security.Prophecy.io/).
