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

:::info
While Prophecy continues to support existing customers with self-hosted deployments, new self-hosted installations of Prophecy are **discouraged**.
:::

### SaaS

The SaaS deployment option is entirely Prophecy-managed and has a multi-tenant architecture. SaaS provides the fastest access to latest features. Try out Prophecy using our SaaS environment by signing up for a [free trial](https://app.prophecy.io/metadata/auth/signup).

![SaaS VPC Architecture](img/arch_separate_vpc.png)

### Dedicated SaaS

Like our SaaS deployment, the Dedicated SaaS deployment is Prophecy-managed. However, Dedicated SaaS provides the convenience of a Prophecy-managed environment, but also the privacy of an isolated space on Prophecy’s Virtual Private Cloud. This is also known as a single-tenant architecture.

You can choose your preferred cloud platform (AWS, Azure, or GCP), and Prophecy will manage installation, maintenance, resource allocation, and more.

![Dedicated SaaS VPC Architecture](img/arch_dedicated_vpc.png)

#### Responsibility matrix

This table outlines the division of responsibilities between customers and Prophecy for Dedicated SaaS deployments.

| Area                                    | Customer Responsibility | Prophecy Responsibility | Description                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------- | ----------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Platform upgrades                       |                         | ✓                       | Prophecy applies upgrades and hotfixes.                                                                                                                                                                                                                                                                                                                                          |
| Security and compliance                 |                         | ✓                       | Prophecy applies CVE patches, manages SaaS compliance posture, and ensures tenant isolation.                                                                                                                                                                                                                                                                                     |
| High availability and disaster recovery |                         | ✓                       | Prophecy implements failover strategies and backup/restore procedures. Prophecy also tests disaster recovery scenarios to maintain system resilience.                                                                                                                                                                                                                            |
| Kubernetes cluster and infrastructure   |                         | ✓                       | Prophecy manages scaling, monitoring, logging, namespaces, and storage.                                                                                                                                                                                                                                                                                                          |
| Scaling and resource tuning             |                         | ✓                       | Prophecy optimizes performance, adjusts resource allocation, and configures auto-scaling.                                                                                                                                                                                                                                                                                        |
| Identity and access management          | ✓                       |                         | Customer configures users and groups in their chosen IdP. Then, they set up SSO inside Prophecy.                                                                                                                                                                                                                                                                                 |
| Networking                              | ✓                       | ✓                       | Prophecy provides PrivateLink service endpoint, manages a list of up to 300 IP addresses allowed to access the Dedicated SaaS deployment, and generally maintains networking infrastructure. <br/>Customer accepts PrivateLink connection requests and allowlists Prophecy's IP address with Databricks, GitHub, and other external platforms that Prophecy needs to connect to. |
| Data encryption (Bring Your Own Key)    | ✓                       | ✓                       | Customer optionally provides and manages Key Management Service (KMS) and grants Prophecy access to customer-managed encryption keys. <br/>Prophecy integrates with customer KMS to encrypt persistent storage using customer-managed keys.                                                                                                                                      |
| Monitoring and logs                     | ✓                       | ✓                       | Customer reviews audit logs that are optionally synced to a customer-owned storage bucket. <br/>Prophecy monitors SaaS infrastructure, performs root-cause analysis, updates status page, and generates audit logs.                                                                                                                                                              |
