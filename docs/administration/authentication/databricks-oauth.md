---
title: Databricks OAuth
id: databricks-oauth
slug: /databricks-oauth-authentication
description: Prophecy Databricks OAuth integration
tags:
  - authentication
  - databricks
  - oauth
---

:::edition Express and Enterprise
Available for Express and Enterprise Editions only.
:::

Prophecy provides Databricks OAuth to align with industry-standard authentication flows. This gives you more granular access control and better security, making it a good alternative to Personal Access Tokens (PATs). This integration works with both Spark clusters and SQL warehouses.

To set up a Databricks OAuth connection, follow the steps in [OAuth app registrations](docs/administration/authentication/oauth-setup.md).

## Use cases supported by Databricks

In Prophecy, you can use Databricks OAuth in two ways: either using user identities or a [service principal](https://docs.databricks.com/aws/en/admin/users-groups/service-principals).

| Type                                                                                          | Identity                 | Use Cases                                        | Behavior                                                                                                | Notes                                                                                                                                                                  |
| --------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User-based OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-u2m.html) (U2M)        | Individual user accounts | Pipeline development, job development            | Executes actions with the user's Databricks permissions. Users sign in via the Databricks login screen. | Requires periodic login based on Databricks OAuth timeout settings. Default timeouts are used in SaaS, but are configurable in Dedicated SaaS/self-hosted deployments. |
| [Service Principal OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html) (M2M) | Service principal        | Project deployment, scheduled pipeline execution | Authenticates using service principal credentials. All scheduled jobs run as the service principal.     | Required for automation and CI/CD. You will see a warning if service principal credentials are missing.                                                                |

:::note
The minimum level of access that your service principal requires (including access to clusters, tables, etc.) will vary per use case.
:::

## Fabric setup

To learn how to configure Databricks OAuth for different fabric types, see:

- [Databricks connection in a Prophecy fabric](/administration/fabrics/prophecy-fabrics/connections/databricks)
- [Databricks connection in a Spark fabric](/administration/fabrics/Spark-fabrics/databricks/#credentials)
- [Databricks connection in a SQL fabric](/administration/fabrics/sql-fabrics/databricks)

## Security

Prophecy ensures robust security measures during the OAuth authentication process, following best practices documented by Databricks. For example:

- The authentication process follows a three-step OAuth flow to generate tokens, leveraging Proof Key for Code Exchange (PKCE) to enhance security. Prophecy uses a Prophecy-hosted callback URL to capture and process authorization codes, issuing and securely storing access tokens.
- Prophecy securely stores the refresh token, which is used to renew itself and obtain new access tokens, to ensure uninterrupted authenticated connectivity to Databricks. Tokens are encrypted before being stored, following the same stringent encryption standards applied to other credentials managed by Prophecy.
