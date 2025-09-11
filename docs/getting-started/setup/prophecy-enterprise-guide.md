---
title: Configure Enterprise Edition
id: prophecy-enterprise-guide
slug: /enterprise-edition-guide
description: Complete setup guide for Prophecy Enterprise Edition
tags:
  - enterprise
---

Prophecy's Enterprise Edition is designed for organizations that need robust security, scalability, and customization. It provides advanced features such as SCIM-based user management, additional compute options, and secure networking configuration.

**Dedicated SaaS** is the preferred deployment model for the Enterprise Edition. In this model, Prophecy runs in a secure, Prophecy-managed VPC that is isolated for your organization. This page describes how to configure a Dedicated SaaS deployment.

## Deployment setup

The following are optional configurations for your deployment that you can work with Prophecy to set up. Please reach out to Prophecy if you want to enable any of the following configurations.

- **SSO**: Enable single sign-on for Prophecy users.
- **SCIM**: Auto-provision users into teams using SCIM groups.
- **LLM**: Enterprise Edition requires a customer-provided LLM endpoint to power [Prophecy AI](/prophecy-ai).
- **Transpiler**: Enable the transpiler to migrate from external tools.
- **Compute options**:
  - **SQL warehouse**: Databricks is enabled by default. You can also enable BigQuery or Snowflake.
  - **Prophecy Automate**: Prophecy Automate is enabled by default. You can choose to disable it.
  - **Serverless**: Option to connect to Databricks Serverless.

## User management

Enterprise Edition allows an unlimited number of users in a Prophecy environment.

Learn how to add teams and users in [Team and user provisioning](/administration/user-management/team-user-provisioning).

## Git credentials

Prophecy projects are stored as code in Git repositories. You can use either:

- A Prophecy-managed Git repository
- An external Git repository

To access external repositories, the corresponding Git credentials must be stored in Prophecy.

- Learn how to [add new Git credentials](/engineers/git#Git-credentials).
- Learn how to [share Git credentials](/engineers/git#share-credentials) with your team.

When creating a new project, users can select to connect to the Prophecy-managed Git repository or any Git account they have access to in Prophecy. If a user selects a Git account, they can select any empty repository to store the project.

## Fabric configuration

A fabric in Prophecy defines the execution environment for your pipelines. The Enterprise Edition supports a multiple fabric types.

- **Prophecy fabrics**: Use Prophecy Automate with an external SQL warehouse to run pipelines.
- **Spark fabrics**: Use external Spark clusters to run pipelines.
- **SQL fabrics**: Use an external SQL warehouse without Prophecy Automate. You can run models in the warehouse, but not pipelines.

You can create individual fabrics for different execution environments (for example, `dev` and `prod`).

To learn how to create different types of fabrics, visit [Fabric setup](/administration/fabrics).

### Optional: Networking

Dedicated SaaS deployments run in Prophecy’s VPC. You may need to configure networking to allow Prophecy to communicate with your external services.

For example, to connect to Databricks, you might need to configure **Private Link** or set up **IP allowlists**/**firewall exceptions**. To learn how to set up Private Link for Databricks, visit:

- [Enable private connectivity using AWS PrivateLink](https://docs.databricks.com/aws/en/security/network/classic/privatelink)
- [Enable Azure Private Link back-end and front-end connections](https://learn.microsoft.com/en-us/azure/databricks/security/network/classic/private-link)

After you set up Private Link, send your endpoint details to Prophecy Support so we can configure connectivity to our VPC.

:::info
Different connection types may have different networking requirements. If a connection fails, check that your networking configuration allows traffic between Prophecy and your external services.
:::
