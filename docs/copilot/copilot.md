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

This page provides an introduction to Prophecy's Copilot, including descriptions of its task-oriented and agential capabilities.

## Introduction

Prophecy's Copilot is built to help data teams speed up data pipeline development. Instead of working only on code, Copilot can assist with developing visual pipelines, so less technical users can contribute without writing SQL or Python. For technical users, Copilot accelerates development by generating expressions, suggesting transformations, and creating scripts.

Copilot works by understanding your project metadata. It learns from information like project descriptions, table names and descriptions, column names and descriptions, and other metadata.

For SQL projects only, Prophecy generates [knowledge graphs](/knowledge-graph) to enable additional functionality like AI agent. In addition to project metadata, knowledge graphs also contain information about fabrics, including dataset information for [data exploration](/analysts/ai-explore).

:::note
Prophecy only tests prompts in English. Other languages may work, but support depends on the LLM provider and should be explored at your own discretion.
:::

## Supported models

Prophecy can connect to a variety of LLM endpoints to power our AI capabilities. SaaS leverages a Prophecy-managed OpenAI subscription. However, Dedicated SaaS and self-hosted deployments can leverage externally-managed endpoints for different models.

| Deployment model | LLM                                                                |
| ---------------- | ------------------------------------------------------------------ |
| SaaS             | **Default**: GPT-4o and GPT-4o mini                                |
| Dedicated SaaS   | **Default**: GPT-4o and GPT-4o mini <br/>**Supported**: Gemini 2.5 |

## Capabilities

Copilot helps you with one-click tasks such as automated documentation generation, error fixing with one-click solutions, and the ability to generate unit tests and data quality checks. Additionally, Prophecy's AI agent can help you build SQL pipelines through natural language. You can ask the agent to help with tasks such as adding gems, exploring datasets in your SQL warehouse, and visualizing data.

To learn more, see [Copilot for SQL projects](/analysts/ai-features) and [Copilot for Spark projects](/engineers/copilot).

![AI Example](img/agent-chat.gif)

## Enable Copilot

Copilot is enabled by default for all users on [Prophecy SaaS](https://docs.prophecy.io/administration/prophecy-deployment). Prophecy SaaS uses the SaaS version of OpenAI's language model. Self-hosted deployments must set the Copilot flag in the deployment configuration to use Copilot.
