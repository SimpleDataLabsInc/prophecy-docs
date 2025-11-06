---
title: Copilot settings
id: copilot-settings
description: Configure model provider credentials and model specifications for Copilot
tags:
  - copilot
  - llms
---

:::edition Express and Enterprise
Applicable to the [Express and Enterprise Editions](/getting-started/editions/) only.
:::

Prophecy's AI capabilities, including Copilot and Agents, are powered by external LLMs.

- The [SaaS](/administration/prophecy-deployment#saas) deployment uses a Prophecy-managed OpenAI subscription with GPT-4o and GPT-4o mini.
- [Dedicated SaaS](/administration/prophecy-deployment#dedicated-saas) deployments connect to customer-managed endpoints.

This page describes how to connect Prophecy to your customer-managed LLM.

## Prerequisites

To add your LLM provider and model details to Copilot settings:

- You must be logged in as a Prophecy cluster admin.
- Copilot must already be enabled in your Prophecy deployment. Reach out to the [Support team](mailto:support@prophecy.io) to enable Copilot.

:::info
See [Prophecy AI](/prophecy-ai/#llm-providers-and-model-families) for a list of supported LLM providers and models.
:::

## Configure Copilot settings

Prophecy lets you add your LLM credentials and model choices directly in the UI in **Settings > Admin > Copilot Settings**. Copilot Settings includes three subtabs:

- [AI Model Providers Creds](#ai-model-providers-creds): Add credentials for one or more LLM providers that you want to connect to.
- [Available AI Models](#available-ai-models): Define the models that Prophecy uses for complex tasks and quick tasks.
- [Available AI Speech Models](#available-ai-speech-models): Define the models the Prophecy uses for Copilot's text-to-speech and speech-to-text functionality.

You must provide all settings in YAML format. These values directly override those in your Kubernetes deployment.

### AI Model Providers Creds

In the **AI Model Providers Creds** subtab, you provide the credentials to connect to your LLM provider.

You can add multiple credentials here, but Copilot will only connect to the models defined in the [Available AI Models](#available-ai-models) subtab.

The following YAML example shows the required fields for different LLM providers.

```yaml
{
  "azure_openai": { "api_key": "********", "api_endpoint": "********" },
  "openai": { "api_key": "********" },
  "gemini": { "api_key": "********" },
  "vertex_ai": {},
}
```

:::note
When editing the credentials in Prophecy, you will not be able to see previously-entered values. Likewise, once you save your credentials, values will be masked by asterisks `****` as shown in the example above.
:::

#### Set up Vertex AI

Vertex AI does not require an API key. Instead, you provide a [Google Cloud service account](https://docs.cloud.google.com/iam/docs/service-account-overview) file.

Reach out to the [Support team](mailto:support@prophecy.io) with the following formation to add Vertex AI credentials to your deployment:

- The service account file that can authenticate your connection to Vertex AI
- (Optional) The Vertex AI [region](https://docs.cloud.google.com/docs/geography-and-regions), if it differs from the service account region
- (Optional) The Vertex AI [project](https://docs.cloud.google.com/resource-manager/docs/creating-managing-projects), if it differs from the service account project

### Available AI Models

In the **Available AI Models** subtab, you define two models:

- **Smart model**: Prophecy uses this model for complex tasks.

  Recommended Model: `gpt-4o`

- **Fast model**: Prophecy uses this model for easy and quick tasks.

  Recommended Model: `gpt-4o-mini`

You can select models from any of the providers you configured in the [AI Model Providers Creds](#ai-model-providers-creds) subtab.

The following YAML example shows how to format your smart and fast model configuration.

```yaml
{
  "smart_model": { "provider": "openai", "model_name": "gpt-4.1" },
  "fast_model": { "provider": "openai", "model_name": "gpt-4.1-mini" },
}
```

### Available AI Speech Models

In the **Available AI Speech Models** subtab, you define different models for speech-to-text and text-to-speech operations.

You can select models from any of the providers you configured in the [AI Model Providers Creds](#ai-model-providers-creds) subtab.

The following YAML example shows how to format your speech-to-text (`stt`) and text-to-speech (`tts`) model configuration.

```yaml
{
  "stt": { "provider": "openai", "model_name": "whisper-1" },
  "tts": { "provider": "openai", "model_name": "tts-1" },
}
```
