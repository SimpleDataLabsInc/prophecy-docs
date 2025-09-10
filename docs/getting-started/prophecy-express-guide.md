---
title: Prophecy Express onboarding
sidebar_label: Prophecy Express
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
| Execution                 | Prophecy Automate and SQL warehouse                                  |
| SQL warehouse provider    | Your own Databricks SQL warehouse                                    |
| Git-based version control | Project code hosted on Prophecy-managed or external Git repositories |
| Orchestration             | Prophecy-native scheduler automates pipeline execution               |
| Transpiler                | Alteryx migration tool enabled                                       |

## Initial setup

You need the [cluster admin role](/administration/rbac) to complete the initial setup.

### Create teams

Before you can invite users to Prophecy, you need to define the [teams](/administration/teams-users/teams-users) they will be invited to.

1. Navigate to your Prophecy Express Edition instance URL.
1. Use the admin credentials provided during your initial setup.
1. Navigate to **Settings → Teams**.
1. Click **Create Team**.
1. Fill in the team details and click **Complete**.

How you configure teams will depend on your individual use case.

### Create users

After you define the teams, invite new users to those teams.

1. On the Teams page in Settings, click **Add Users**.
1. Fill out the user details and click **Invite**.

   This creates a new user account and sends an invitation link to the user.

1. In the confirmation dialog, copy the invitation link if needed, and click **Done**.

:::note
Express Edition supports up to 20 users maximum with a cap of five simultaneous users.
:::

### Optional: Configure SSO with Okta

Express Edition supports Single Sign-On (SSO) integration with Okta. Learn more about setting up Okta in our [SAML documentation](/administration/authentication/saml-scim#saml-configuration).

If you're not using SSO, users must use the exact same email addresses for their Prophecy accounts as they use for authenticating with Databricks. This ensures proper authentication flow between platforms.

:::info Important
Express Edition **does not** support SCIM.
:::

## Connect external platforms

### Create fabrics

A fabric in Prophecy defines the execution environment for your pipelines. To set up your execution environment:

- Create a [Prophecy fabric](/administration/fabrics/prophecy-fabrics/). You can only create fabrics for teams where you are the [team admin](/administration/rbac).
- To add SQL warehouse connection in the fabric, set up a [Databricks connection](/administration/fabrics/prophecy-fabrics/connections/databricks).
- To add data ingress/egress connections in the fabric, [follow the instructions](/administration/fabrics/prophecy-fabrics/connections/) for each type of connection.

You can create additional fabrics for different execution environments (for example, `dev` and `prod`).

#### Optional: Set up Private Link

Prophecy Express Edition requires connectivity from Prophecy to Databricks REST API endpoints. Connections originate from Prophecy to Databricks, so you may need to configure **Private Link** or **IP allowlist/firewall exception** to ensure network connectivity. Other connection types may have different networking requirements depending on your setup. If any connections fail, make sure that your networking configuration allows communication to and from Prophecy.

To learn how to set up Private Link for Databricks, visit:

- [Enable private connectivity using AWS PrivateLink](https://docs.databricks.com/aws/en/security/network/classic/privatelink)
- [Enable Azure Private Link back-end and front-end connections](https://learn.microsoft.com/en-us/azure/databricks/security/network/classic/private-link)

Once you have set up Private Link, send our Support team your endpoint so we can set up connectivity to Prophecy's VPC.

### Set up Git credentials

Projects are stored as code hosted on Git repositories. You can use a Prophecy-managed Git repository an external Git repository. To add a connection to an external Git provider:

1. Navigate to **Settings → Git**.
1. Click **Add New**.
1. Select the appropriate Git Provider from the dropdown.
1. Provide an alias to identify your connection.
1. Provide the credentials to authenticate the connection.
1. Click **Connect** to save.

When you create a new project, you'll be able to select any empty Git repository this account has access to to store your project code.

### LLM backend configuration

Prophecy Express Edition requires a customer-provided endpoint for an LLM to power Prophecy AI. Contact Support to configure the model and model provider you will use. For more information, visit [Prophecy AI](/data-copilot).

## Project lifecycle

Learn about the project lifecycle with this example of a development to production workflow.

1. Create a new project.
1. Add new [pipelines](/analysts/pipelines) inside of the project.
1. Develop pipelines using relevant [tables](/analysts/source-target), [transformation gems](/analysts/gems), [functions](/analysts/functions), and other components.
1. Test pipelines to ensure that they achieve the expected outcome.
1. Define [schedules](/analysts/scheduling) for each pipeline to productionalize.
1. [Publish](/analysts/project-publication) the project to production fabrics to enable the automated schedules.

## Collaboration and sharing

Projects enable capabilities beyond the standard development to production flow. They can also be shared and templated.

1. Publish projects to the [Package Hub](/engineers/package-hub) so other users can reuse your project components.
1. Create form-like templates that trigger pipeline runs using [Prophecy Apps](/analysts/business-applications).

## Choose your path

### Modernizing existing workflows

If you're migrating from Alteryx, Prophecy Express Edition includes a transpiler to convert your existing workflows.

1. Use the **Alteryx Transpiler** to import your existing workflows
2. Review and refine the converted pipelines
3. Test the pipelines in the Prophecy environment
4. Deploy the modernized workflows

### Building new pipelines

For new data transformation needs, start with Prophecy's visual pipeline builder.

1. Create a new project with the appropriate template
2. Design your pipeline using the available gems
3. Test your transformations with sample data
4. Schedule and deploy your pipeline
