---
title: Prophecy deployment
id: prophecy-deployment
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - deployment
  - saas
  - dedicated saas
  - self-hosted
---

Prophecy runs on a Kubernetes cluster in the cloud. The cloud architecture depends on the Prophecy deployment type.

## Deployment types

Prophecy supports SaaS (multi-tenant) and Dedicated SaaS (single-tenant) deployments.

| Feature                                          | SaaS                    | Dedicated SaaS          |
| ------------------------------------------------ | ----------------------- | ----------------------- |
| Suitable for enterprise                          | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| Free trial                                       | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| No installation required                         | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| Automatic upgrades and access to latest features | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| Managed infrastructure costs                     | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| Isolated data/environment                        |                         | ![Tick](./img/tick.svg) |

### SaaS

The SaaS deployment option is entirely Prophecy-managed and has a multi-tenant architecture. SaaS provides the fastest access to latest features. Try out Prophecy using our SaaS environment by signing up for a [free trial](https://app.prophecy.io/metadata/auth/signup).

![SaaS VPC Architecture](img/arch_separate_vpc.png)

### Dedicated SaaS

Like our SaaS deployment, the Dedicated SaaS deployment is Prophecy-managed. However, Dedicated SaaS provides the convenience of a Prophecy-managed environment, but also the privacy of an isolated space on Prophecy’s Virtual Private Cloud. This is also known as a single-tenant architecture.

You can choose your preferred cloud platform (AWS, Azure, or GCP), and Prophecy will manage installation, maintenance, resource allocation, and more.

![Dedicated SaaS VPC Architecture](img/arch_dedicated_vpc.png)

:::info
While Prophecy continues to support existing customers with self-hosted deployments, new self-hosted installations of Prophecy are **discouraged**.
:::
