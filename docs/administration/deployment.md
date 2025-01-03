---
title: Prophecy Deployment
sidebar_position: 1
id: deployment
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - deployment
  - saas
  - dedicated saas
  - self hosted
---

Learn about the different cloud deployment options for deploying Prophecy.

_Note: On rare occasions, Prophecy will deploy on-premise for large customers who will later move to the cloud._

## Cloud Deployment

Prophecy in the cloud connects to your existing Spark and Scheduler/Orchestrator. Prophecy does not store any data, however, it does store metadata about your Pipelines, Datasets and schedules. There are three types of Prophecy deployments:

| Feature                                                       | SaaS                    | Dedicated SaaS          | Self Hosted             |
| ------------------------------------------------------------- | ----------------------- | ----------------------- | ----------------------- |
| Suitable for enterprise                                       | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| Free trial                                                    | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |
| No installation required                                      | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |                         |
| Automatic upgrades every 2-4 weeks; access to latest features | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |                         |
| Managed infrastructure costs                                  | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |                         |
| Isolated data/environment                                     |                         | ![Tick](./img/tick.svg) | ![Tick](./img/tick.svg) |

### SaaS

The SaaS deployment option is entirely Prophecy-managed and has a multi-tenant architecture. Try out SaaS by directly going to the [Prophecy application](https://app.prophecy.io/).

![SaaS VPC Architecture](img/arch_separate_vpc.png)

### Dedicated SaaS

Like our SaaS deployment, the Dedicated SaaS deployment is Prophecy-managed. However, Dedicated SaaS provides the convenience of a Prophecy-managed environment, but also the privacy of an isolated space on Prophecy’s Virtual Private Cloud. This is also known as a single-tenant architecture.

You can choose your preferred cloud platform (AWS, Azure, or GCP), and Prophecy will manage installation, maintenance, resource allocation, and more.

![Dedicated SaaS VPC Architecture](img/arch_dedicated_vpc.png)

### Self Hosted (formerly Private SaaS) {#self-hosted}

If you deal with very sensitive data, you may opt to get the Self Hosted version of Prophecy. In this case, Prophecy runs within the **Customer VPC**, as well as the execution infrastructure. For more information, read about [installation and settings](./self-hosted) on a Self Hosted deployment or [request a demo](https://www.prophecy.io/request-a-demo) from Prophecy.

![Customer VPC Architecture](img/arch_customervpc.png)
