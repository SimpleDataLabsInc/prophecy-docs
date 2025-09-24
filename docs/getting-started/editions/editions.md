---
title: Prophecy Editions
id: editions
sidebar_label: Editions
description: Learn about and compare the different Prophecy editions
tags: []
---

Prophecy is available in multiple editions to support a range of use cases. The Free and Professional Editions allow you to get started quickly, with Prophecy managing infrastructure and resources. The Express Edition is designed for organizations already using Databricks SQL. The Enterprise Edition provides the most flexibility and control, with advanced options for deployment, security, and platform management.

The sections below outline differences across deployment, security, compute, AI, platform, sharing, and support to help you evaluate which edition best fits your requirements.

## Free and Professional Edition

Free and Professional Editions are designed for data analyst teams that want to collaborate in real time without managing infrastructure. Both editions provide Prophecy-managed resources that are metered by credits. The Free Edition is functionally identical to the Professional Edition, but is limited to a single user per plan.

To get started with the Free Edition, [sign up](https://app.prophecy.ai/) and start exploring. You'll be able to upgrade to the Professional Edition after you sign in for the first time.

## Express Edition

Express Edition is designed for organizations that already use Databricks SQL and want to extend existing infrastructure with Prophecy. Deployments are provisioned as Dedicated SaaS environments through the AWS or Azure marketplaces. It is the right choice for teams standardizing on Databricks SQL who also need options for platform customization and integration with enterprise networking features such as PrivateLink.

- Get started on [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/simpledatalabsinc1635791235920.prophecy-enterprise-express-for-databricks?tab=Overview)
- Get started on [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-dht7vktn2yues)

## Enterprise Edition

Enterprise Edition is designed for organizations that require the highest level of control, security, and flexibility. Deployments are hosted in a dedicated Prophecy VPC, with support for advanced configuration across networking, compute, and platform services. Enterprise Edition is best suited for organizations that need integration with existing enterprise systems, including support for SCIM, single sign-on, PrivateLink, and bring-your-own-key encryption. It also provides access to audit logs and other compliance features required in regulated industries.

To get started with the Enterprise Edition, [reach out to Prophecy](mailto:contact.us@prophecy.io).

:::tip
To try out Enterprise features, sign up for our [multi-tenant SaaS Enterprise environment](https://app.prophecy.io/).
:::

## Feature matrix

### Deployment

| Feature                                                             | Free | Professional | Express | Enterprise |
| ------------------------------------------------------------------- | ---- | ------------ | ------- | ---------- |
| SaaS (Multi-tenant) deployment model                                | ✔    | ✔            |         |            |
| Dedicated SaaS (Single-tenant) deployment model                     |      |              | ✔       | ✔          |
| Platform customization, or the ability to turn feature flags on/off |      |              | ✔       | ✔          |
| Restriction on maximum number of users                              | ✔    |              | ✔       |            |
| Usage metered by credits                                            | ✔    | ✔            |         |            |

### Security

| Feature                                                                        | Free | Professional | Express | Enterprise |
| ------------------------------------------------------------------------------ | ---- | ------------ | ------- | ---------- |
| IP Whitelisting                                                                | ✔    | ✔            | ✔       | ✔          |
| PrivateLink                                                                    |      |              | ✔       | ✔          |
| Google SSO                                                                     | ✔    | ✔            | ✔       | ✔          |
| Additional [authentication](/administration/authentication/) providers for SSO |      |              | ✔       | ✔          |
| Automatic team creation using [SCIM](/administration/authentication/saml-scim) |      |              |         | ✔          |
| Bring Your Own Key (BYOK)                                                      |      |              |         | ✔          |
| Audit log access                                                               |      |              |         | ✔          |

### Compute

| Feature                        | Free | Professional | Express | Enterprise |
| ------------------------------ | ---- | ------------ | ------- | ---------- |
| Prophecy Automate              | ✔    | ✔            | ✔       | ✔          |
| Prophecy-managed SQL warehouse | ✔    | ✔            |         |            |
| Self-managed SQL warehouse     |      |              | ✔       | ✔          |
| Self-managed Spark             |      |              |         | ✔          |
| Automatic fabric provisioning  | ✔    | ✔            |         |            |
| Manual fabric setup            |      |              | ✔       | ✔          |

:::note
Usage of the Prophecy-managed SQL warehouse is metered by credits.
:::

### AI

| Feature                           | Free | Professional | Express | Enterprise |
| --------------------------------- | ---- | ------------ | ------- | ---------- |
| AI Agents                         | ✔    | ✔            | ✔       | ✔          |
| Copilot                           | ✔    | ✔            | ✔       | ✔          |
| Prophecy-managed LLM subscription | ✔    | ✔            |         |            |
| Self-managed LLM subscription     |      |              | ✔       | ✔          |

### Platform features

| Feature                                                                 | Free | Professional | Express | Enterprise |
| ----------------------------------------------------------------------- | ---- | ------------ | ------- | ---------- |
| Git-hosted projects                                                     | ✔    | ✔            | ✔       | ✔          |
| Build custom gems                                                       | ✔    | ✔            | ✔       | ✔          |
| Prophecy Apps                                                           | ✔    | ✔            | ✔       | ✔          |
| Pipeline run history and monitoring                                     | ✔    | ✔            | ✔       | ✔          |
| Prophecy-orchestrated pipelines (Prophecy Automate + SQL Warehouse)     | ✔    | ✔            | ✔       | ✔          |
| Prophecy orchestration (via Prophecy Automate)                          | ✔    | ✔            | ✔       | ✔          |
| Natively-supported external orchestration (Databricks Jobs and Airflow) |      |              |         | ✔          |
| Spark pipelines                                                         |      |              |         | ✔          |
| Models (dbt)                                                            |      |              |         | ✔          |
| Transpiler                                                              |      |              | ✔       | ✔          |

### Project sharing

| Feature                                                              | Free | Professional | Express | Enterprise |
| -------------------------------------------------------------------- | ---- | ------------ | ------- | ---------- |
| Share by adding users to the project's team                          | ✔    | ✔            | ✔       | ✔          |
| Share by sending a public link                                       | ✔    | ✔            |         |            |
| Share project replays that walk through how pipelines are structured | ✔    | ✔            |         |            |
| Publish to Package Hub                                               |      |              | ✔       | ✔          |

### Support

| Feature           | Free | Professional | Express | Enterprise |
| ----------------- | ---- | ------------ | ------- | ---------- |
| Community forums  | ✔    | ✔            | ✔       | ✔          |
| Support with SLAs |      |              |         | ✔          |
