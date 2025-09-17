---
title: Deployment models
id: prophecy-deployment
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - deployment
  - saas
  - dedicated saas
  - self-hosted
---

Prophecy offers multiple deployment options to meet different organizational requirements for security, isolation, and management preferences.

The following table outlines the key differences between the two main deployment models.

| Feature                      | SaaS | Dedicated SaaS |
| ---------------------------- | ---- | -------------- |
| Prophecy-managed upgrades    | ✔    | ✔              |
| Prophecy-managed maintenance | ✔    | ✔              |
| Multi-tenancy                | ✔    |                |
| Single-tenancy               |      | ✔              |
| Customizable environment     |      | ✔              |

### SaaS

The SaaS deployment option is entirely Prophecy-managed and operates on a multi-tenant architecture. This deployment model provides the fastest access to the latest features and updates. Organizations can quickly evaluate Prophecy using our SaaS environment by signing up for a [free trial](https://app.prophecy.io/metadata/auth/signup).

![SaaS VPC Architecture](img/arch_separate_vpc.png)

### Dedicated SaaS

:::edition Enterprise Only
This deployment model requires the Enterprise Edition of Prophecy.
:::

The Dedicated SaaS deployment combines the convenience of Prophecy-managed infrastructure with the privacy and isolation of a single-tenant architecture. This deployment model operates on Prophecy's Virtual Private Cloud, providing dedicated resources and enhanced security.

Organizations can select their preferred cloud platform (AWS, Azure, or GCP), while Prophecy handles installation, maintenance, resource allocation, and ongoing management tasks.

![Dedicated SaaS VPC Architecture](img/arch_dedicated_vpc.png)

:::info
While Prophecy continues to support existing customers with self-hosted deployments, new self-hosted installations of Prophecy are **discouraged**.
:::
