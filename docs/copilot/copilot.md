---
title: Copilot
id: copilot
slug: /data-copilot
sidebar_class_name: hidden
description: The AI assistant for data pipelines and models
tags:
  - concepts
  - copilot
  - generativeai
---

Prophecy's Copilot is built to help data teams speed up data pipeline development. Instead of working only on code, Copilot can assist with developing visual pipelines, so less technical users can contribute without writing SQL or Python. For technical users, Copilot accelerates development by generating expressions, suggesting transformations, and creating scripts—all grounded in the context of your data.

![AI Example](img/agent-chat.gif)

## Capabilities

Copilot helps you with one-click tasks such as automated documentation generation, error fixing with one-click solutions, and the ability to generate unit tests and data quality checks. Additionally, Prophecy's AI agent can help you build SQL pipelines through natural language. You can ask the agent to help with tasks such as adding gems, exploring datasets in your SQL warehouse, and visualizing data.

To learn more, see:

- [Agents and AI for SQL projects](/analysts/ai-features)
- [Copilot for Spark projects](/engineers/copilot)

:::note
Prophecy only tests prompts in English. Other languages may work, but support depends on the LLM provider and should be explored at your own discretion.
:::

## Knowledge graph

Prophecy's approach to AI assistance and agents leverages knowledge graphs of datasets, schemas, models, and pipelines to send enhanced prompts to large language models, receive SQL or Spark code, verify it, and generate visual gem components.

To learn more, visit [Knowledge graph](/knowledge-graph).

## Deployment

Copilot is available for anyone on [Prophecy SaaS](https://docs.prophecy.io/administration/prophecy-deployment). Prophecy SaaS uses the SaaS version of OpenAI's language model.

Self-hosted deployments must set the Copilot flag in the deployment configuration to use Copilot. For more details, including how to use your own AI endpoint, see [Enable Data Copilot](/docs/administration/self-hosted/enable-data-copilot.md).

## What's next

Learn more about Prophecy at [prophecy.io](https://www.prophecy.io/), where you can sign up for a free trial account or schedule a demo.
