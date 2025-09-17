---
title: Configure Express Edition
id: prophecy-express-guide
slug: /express-edition-onboarding
description: Complete setup guide for Prophecy Express Edition
tags:
  - express
---

Prophecy Express Edition is a streamlined version of Prophecy designed for business analysts who need to build and deploy data pipelines quickly. This edition provides essential data transformation capabilities with simplified administration and deployment options.

## Key features

These key features differentiate the Express Edition from other Prophecy editions.

| Feature                   | Implementation in the Express Edition                                |
| ------------------------- | -------------------------------------------------------------------- |
| Deployment model          | Dedicated SaaS only. Prophecy is installed in Prophecy's VPC.        |
| Execution                 | Prophecy Automate and SQL warehouse                                  |
| SQL warehouse provider    | Your own Databricks SQL warehouse                                    |
| Git-based version control | Project code hosted on Prophecy-managed or external Git repositories |
| Orchestration             | Prophecy-native scheduler automates pipeline execution               |
| Transpiler                | Alteryx migration tool enabled                                       |

<!-- To be replace by comprehensive feature matrix when future editions are released -->

## LLM backend configuration

Prophecy Express Edition requires a customer-provided endpoint for an LLM to power Prophecy AI. Contact Support to configure the model provider and LLM you will use, or request to disable AI features for your environment.

For more information about AI features and model support, visit [Prophecy AI](/prophecy-ai).

## Users and sign-on

Express Edition supports up to 20 users maximum with a cap of five simultaneous users.

Learn how to add teams and users in [Team and user provisioning](/administration/user-management/team-user-provisioning).

### Optional: Authentication

Express Edition supports Single Sign-On (SSO) integration with Okta. Learn more about setting up Okta in our [SAML documentation](/administration/authentication/saml-scim#saml-configuration).

If you're not using SSO, users must use the exact same email addresses for their Prophecy accounts as they use for authenticating with Databricks. This ensures proper authentication flow between platforms.

:::info Important
Express Edition **does not** support SCIM.
:::

## Git credentials

Prophecy projects are stored as code in Git repositories. You can use either:

- A Prophecy-managed Git repository
- An external Git repository

To access external repositories, the corresponding Git credentials must be stored in Prophecy.

- Learn how to [add new Git credentials](/engineers/git#Git-credentials).
- Learn how to [share Git credentials](/engineers/git#share-credentials) with your team.

When creating a new project, users can select to connect to the Prophecy-managed Git repository or any Git account they have access to in Prophecy. If a user selects a Git account, they can select any empty repository to store the project.

## Fabric configuration

A fabric in Prophecy defines the execution environment for your pipelines. To set up an execution environment:

- Create a [Prophecy fabric](/administration/fabrics/prophecy-fabrics/). You can only create fabrics for teams where you are the [team admin](/administration/rbac).
- To add SQL warehouse connection in the fabric, set up a [Databricks connection](/administration/fabrics/prophecy-fabrics/connections/databricks).
- To add data ingress/egress connections in the fabric, [follow the instructions](/administration/fabrics/prophecy-fabrics/connections/) for each type of connection.

You can create individual fabrics for different execution environments (for example, `dev` and `prod`).

### Optional: Networking

Dedicated SaaS deployments run in Prophecy’s VPC. You may need to configure networking to allow Prophecy to communicate with your external services.

For example, to connect to Databricks, you might need to configure **Private Link** or set up **IP allowlists**. To do so:

1. Follow the instructions to set up PrivateLink depending on the cloud platform where Databricks is hosted. During this process, Databricks creates VPC endpoints for the secure cluster connectivity relay and for the workspace.

   - [Enable private connectivity using AWS PrivateLink](https://docs.databricks.com/aws/en/security/network/classic/privatelink)
   - [Enable Azure Private Link back-end and front-end connections](https://learn.microsoft.com/en-us/azure/databricks/security/network/classic/private-link)

1. Share the following with Prophecy:

   - Your Databricks workspace region.
   - The VPC endpoint service names. Provide both the relay and workspace endpoints.

1. Prophecy creates VPC endpoints in the Prophecy VPC that connect to those service names.
1. Prophecy shares the Prophecy VPC endpoints with you.
1. Whitelist the Prophecy endpoints in your Databricks configuration.

:::info
Different connection types may have different networking requirements. If a connection fails, check that your networking configuration allows traffic between Prophecy and your external services.
:::

## Workflow migration

If you're migrating from Alteryx, Prophecy Express Edition includes a transpiler to convert your existing workflows.

1. Use the **Alteryx Transpiler** to import your existing workflows.
2. Review and refine the converted pipelines.
3. Test the pipelines in the Prophecy environment.
4. Deploy the modernized workflows.

For more information, visit our [Transpiler documentation](https://transpiler.docs.prophecy.io/).
