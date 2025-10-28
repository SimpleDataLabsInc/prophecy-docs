---
title: Deployment models
id: prophecy-deployment
description: Prophecy deployment is flexible and supports multiple mechanisms
tags:
  - deployment
  - saas
  - dedicated saas
---

Prophecy offers multiple deployment options to meet different organizational requirements for security, isolation, and management preferences. The following table outlines the key differences between the two main deployment models.

| Feature                      | SaaS | Dedicated SaaS |
| ---------------------------- | ---- | -------------- |
| Prophecy-managed upgrades    | ✔    | ✔              |
| Prophecy-managed maintenance | ✔    | ✔              |
| Multi-tenancy                | ✔    |                |
| Single-tenancy               |      | ✔              |
| Customizable environment     |      | ✔              |

### SaaS

The SaaS deployment option is entirely Prophecy-managed and operates on a multi-tenant architecture. This deployment model provides the fastest access to the latest features and updates. Organizations can quickly evaluate Prophecy using our SaaS environment by signing up for a [free trial](https://app.prophecy.io/metadata/auth/signup).

### Dedicated SaaS

:::edition Enterprise Only
This deployment model requires the [Enterprise Edition](/getting-started/editions/) of Prophecy.
:::

The Dedicated SaaS deployment combines the convenience of Prophecy-managed infrastructure with the privacy and isolation of a single-tenant architecture. This deployment model operates on Prophecy's Virtual Private Cloud, providing dedicated resources and enhanced security.

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
