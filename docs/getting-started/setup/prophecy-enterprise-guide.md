---
title: Configure Enterprise Edition
id: prophecy-enterprise-guide
slug: /enterprise-edition-guide
description: Complete setup guide for Prophecy Enterprise Edition
tags:
  - enterprise
---

Prophecy Enterprise edition is our ...

This setup guide applies to Prophecy Enterprise Edition Dedicated SaaS deployments.

## Deployment setup

The following are optional configurations for your deployment that you can work with Prophecy to set up.

### Configure SSO

### Configure SCIM

### Configure LLM

Prophecy Express Edition requires a customer-provided endpoint for an LLM to power Prophecy AI. Contact Support to configure the model and model provider you will use. For more information, visit [Prophecy AI](/prophecy-ai).

### Enable Transpiler

### Enable SQL warehouses

Databricks by default. BQ and Snowflake opt-in

### Disable Prophecy Automate

You can opt-out

### Enable Serverless

## User administration

Once your deployment is set up the way you want, you should start adding users to Prophecy and assigning teams.

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

## Connect external platforms

Next, you want to configure your execution environment

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

## Add Git credentials

Projects are stored as code hosted on Git repositories. You can use a Prophecy-managed Git repository an external Git repository. To add a connection to an external Git provider:

1. Navigate to **Settings → Git**.
1. Click **Add New**.
1. Select the appropriate Git Provider from the dropdown.
1. Provide an alias to identify your connection.
1. Provide the credentials to authenticate the connection.
1. Click **Connect** to save.

When you create a new project, you'll be able to select any empty Git repository this account has access to to store your project code.
