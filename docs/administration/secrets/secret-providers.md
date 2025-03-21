---
title: Secret providers
id: secret-providers
description: Add secrets to your Prophecy fabric
tags:
  - secrets
  - connections
  - fabrics
---

**Secrets** help you safeguard sensitive information such as API keys, passwords, and encryption keys. When you create a fabric, you can add one or more secret providers to manage your secrets for that fabric. Then, you can create secrets for use in your pipelines.

![secret_screen](img/Secret_provider_Screen.png)

## Providers

You can configure multiple secret providers per fabric in the **Providers** tab of the fabric configuration. Providers and secrets can be added, edited, and deleted from Prophecy. We support the following providers.

| Secret Provider       | Details                                                           | Platform   |
| --------------------- | ----------------------------------------------------------------- | ---------- |
| Prophecy              | Recommended if you use Prophecy runtime                           | Prophecy   |
| Databricks Secrets    | Recommended if you are a Databricks user                          | Databricks |
| HashiCorp Vault       | Recommended if your organization privileges HashiCorp Vault       | Any Spark  |
| Environment Variables | Recommended if your organization privileges environment variables | Any Spark  |

### Prophecy

Prophecy provides its own secret manager for Prophecy fabrics to securely store both text-based secrets and binary data.

### Databricks

[Databricks](https://docs.databricks.com/en/security/secrets/index.html) is the most commonly used secret provider in Prophecy. By default, a Databricks secret provider is added to all Databricks fabrics. You can remove this if required.

If you add new secrets in Databricks, you can refresh secrets in Prophecy to fetch them. You can also add new secrets directly in Prophecy. To refresh or add secrets, you must be attached to a cluster. You can only access secrets that you also can access in Databricks.

:::info Free trials

If you are using a free trial, you can use Databricks as the secret provider. Your secrets will be automatically cleaned up after the trial expires. While Prophecy assigns a separate scope to each Prophecy-managed fabric, it is not recommended to use your production data tools for trials.

:::

### HashiCorp Vault

Prophecy supports [HashiCorp Vault](https://developer.hashicorp.com/vault/docs/what-is-vault) as a secret provider. When you set up HashiCorp Vault, you'll see a few additional configuration fields.

- **Namespace**: An optional field to specify the namespace within a multi-tenant Vault.
- **Address**: Auto-filled from Spark cluster. You must first set up a `VAULT_ADDR` environment variable in the Spark cluster.
- **Token**: Auto-filled from Spark cluster. You must first set up a `VAULT_TOKEN` environment variable in the Spark cluster.

If you add new secrets to your vault, you can refresh secrets in Prophecy to fetch them. You can also add new secrets directly in Prophecy. To refresh or add secrets, you must be attached to a cluster. You can only access secrets that you also have access to in your Spark cluster.

### Environment Variables

If you prefer a simple way to manage secrets, you can use environment variables available in your Spark cluster. To do so:

1. Add a new secret provider and choose **Environment**.
1. Add a new secret. Prophecy will automatically map this secret to an environment variable in your Spark cluster.
1. Verify that the new environment variable exists in your Spark cluster with the correct value.

:::note
This method does not support refreshing or fetching secrets.
:::

## Secrets

Secrets have the following parameters:

- **Provider**: The secret provider.
- **Name**: The name of the secret.
- **Scope**: The scope of the secret.
- **Description**: A description of the secret.
- **Value**: The value of the secret.
